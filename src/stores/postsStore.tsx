import { action, flow, makeObservable, observable } from "mobx"
import { Post, Thumbnail } from "../interfaces"

// MobX store
export class PostsStore {
  // observable values
  posts: Post[] = []
  hasMore = true
  creatorName = ""

  // other class attributes
  fetchOffset = 0
  fetchPostLimit = 5
  creatorId = ""

  // opted for declarative approach instead of using makeAutoObservable
  constructor() {
    makeObservable(this, {
      posts: observable,
      hasMore: observable,
      creatorName: observable,
      setCreatorId: action,
      loadPostsByCreator: flow,
      loadMore: action,
      setCreatorName: action,
      flushPostsStore: action,
    })
  }

  setCreatorId(creatorId: string) {
    this.creatorId = creatorId
  }

  flushPostsStore() {
    while (this.posts.length > 0) {
      this.posts.pop()
    }
    this.creatorName = ""
    this.fetchOffset = 0
  }

  // fetch posts by creator and add to list of all posts
  *loadPostsByCreator() {
    yield fetch(
      `https://corsproxy.io/?https://www.floatplane.com/api/v3/content/creator?id=${
        this.creatorId
      }&limit=${this.fetchPostLimit.toString()}&fetchAfter=${this.fetchOffset.toString()}`
    )
      .then((response) => response.json())
      .then(
        action("fetchPostsSuccess", (posts: Post[]) => {
          if (posts.length !== 0) {
            posts.forEach((post) => this.posts.push(post))
            this.setCreatorName(posts[0].creator.title)
          } else {
            this.hasMore = false
          }
        })
      )
      .catch((error) => console.error(error))
  }

  loadMore() {
    this.loadPostsByCreator()
    this.fetchOffset += this.fetchPostLimit
  }

  setCreatorName(name: string) {
    if (this.creatorName === "") {
      console.log(name)
      this.creatorName = name
    }
  }
}

// Handles not all entries having childImages
// Used also for getting creator icons
export function getThumbnail(thumbnail: Thumbnail) {
  if (thumbnail.childImages && thumbnail.childImages.length !== 0) {
    return thumbnail.childImages[0].path
  } else {
    return thumbnail.path
  }
}

const postsStore = new PostsStore()

export default postsStore

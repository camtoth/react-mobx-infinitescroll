import { observer } from "mobx-react"
import { useRef, useEffect } from "react"
import { Post } from "../interfaces"
import { useStores } from "../stores/StoreContext" // Import useStores hook to get the store
import { getThumbnail } from "../stores/postsStore"

// Handle infinite scroll-to-load
function onIntersection(entries: any[]) {
  const firstEntry = entries[0]
  if (postsStore.hasMore && firstEntry.isIntersecting) {
    postsStore.loadMore()
  }
}

// Post card with thumbnail, description, etc.
// Links to the thumbnail, in production would link to the actual posts
function PostComponent({ post }: { post: Post }) {
  return (
    <>
      <a href={getThumbnail(post.thumbnail)}>
        <div className="flex h-48 overflow-hidden border rounded-lg my-4">
          <div
            className="flex-none aspect-video bg-cover bg-center "
            style={{ backgroundImage: `url(${getThumbnail(post.thumbnail)})` }}
          ></div>
          <div className="flex flex-col justify-between p-4 flex-1">
            <h2 className="text-lg font-bold truncate">{post.title}</h2>
            <div className="flex items-center my-2">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={getThumbnail(post.channel.icon)}
                alt="Channel icon"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{post.channel.title}</p>
                <p className="text-gray-600">
                  {post.releaseDate.toString().replace(/T(.*):.*/, " $1")}
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.text }}
              className="flex-1 text-ellipsis pr-4 pb-1 overflow-hidden"
            ></div>
          </div>
        </div>
      </a>
    </>
  )
}

// Flex grid of all post cards
function PostsView() {
  const { postsStore } = useStores() // Get postsStore from context
  const elementRef = useRef(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => onIntersection(entries, postsStore))
    if (elementRef.current) {
      intersectionObserver.observe(elementRef.current)
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [postsStore])

  return (
    <>
      <h1>Posts by {postsStore.creatorName}</h1>
      {postsStore.posts.map((post) => (
        <PostComponent post={post} key={post.id} />
      ))}
      {postsStore.hasMore && <div ref={elementRef}> Load more...</div>}
    </>
  )
}

const ObservedPostsView = observer(PostsView)

function RenderPostsView() {
  const { postsStore } = useStores() // Access postsStore from context
  postsStore.loadMore()

  return (
    <>
      <main className="mx-12 lg:mx-64 md:mx-24 mt-6">
        <ObservedPostsView />
      </main>
    </>
  )
}

export default RenderPostsView

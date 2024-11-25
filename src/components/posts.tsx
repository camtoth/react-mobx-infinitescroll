import { observer } from "mobx-react"
import { useRef, useEffect } from "react"
import { Post } from "../interfaces"
import postsStore, { getThumbnail } from "../stores/postsStore"

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
                src={post.channel.icon.path}
                alt="Channel icon"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {post.channel.title}
                </p>
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

function onIntersection(entries: any[]) {
  const firstEntry = entries[0]
  if (postsStore.hasMore && firstEntry.isIntersecting) {
    postsStore.loadMore()
  }
}

function PostsView() {
  const elementRef = useRef(null)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(onIntersection)
    if (intersectionObserver && elementRef.current) {
      intersectionObserver.observe(elementRef.current)
    }

    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect()
      }
    }
  })
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

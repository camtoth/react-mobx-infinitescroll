import { observer } from "mobx-react"
import creatorsStore from "../stores/creatorsStore"
import { Creator } from "../interfaces"
import { pageStore } from "../stores/pageStore"
import { getThumbnail } from "../stores/postsStore"

function CreatorComponent({ creator }: { creator: Creator }) {
  return (
    <button onClick={() => pageStore.navToPostsByCreator(creator.id)}>
      <div className="basis-1 lg:w-64 lg:h-64 w-32 h-auto bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 mt-6 mb-3 rounded-full shadow-lg"
            src={getThumbnail(creator.icon)}
            alt="Creator icon"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {creator.title}
          </h5>
        </div>
      </div>
    </button>
  )
}

function CreatorsView() {
  return (
    <>
      <h1 className="mb-4 text-wrap text-center">Check out all these amazing creators!</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {creatorsStore.creators.map((creator) => (
          <CreatorComponent creator={creator} key={creator.id} />
        ))}
      </div>
    </>
  )
}

const ObservedCreatorsView = observer(CreatorsView)

function RenderCreatorsView() {
  creatorsStore.loadCreators()

  return (
    <>
      <main className="mx-12 lg:mx-64 md:mx-24 mt-6 mb-6">
        <ObservedCreatorsView />
      </main>
    </>
  )
}

export default RenderCreatorsView

import React from "react"
import "./App.css"
import { pageStore } from "./stores/pageStore"
import RenderCreatorsView from "./components/creators"
import { observer } from "mobx-react"
import RenderPostsView from "./components/posts"

// Sticky "go back" button for posts view
function Navigation() {
  return (
    <>
      <button onClick={() => pageStore.navToCreatorsView()}>
        <div className="fixed top-6 left-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5">
        Go back
        </div>
      </button>
    </>
  )
}

// Handle switching views
function PageContent() {
  return (
    <>
      {pageStore.currentPage !== "creators" && <Navigation />}
      <main className="lg:mx-40 mt-6">
        {pageStore.currentPage === "creators" && <RenderCreatorsView />}
        {pageStore.currentPage === "posts" && <RenderPostsView />}
      </main>
    </>
  )
}

const ObservedPageContent = observer(PageContent)

function App() {
  return (
    <div>
      <ObservedPageContent />
    </div>
  )
}

export default App

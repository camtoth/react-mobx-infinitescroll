// App.tsx
import React from "react"
import { observer } from "mobx-react"
import { StoreProvider, useStores } from './stores/StoreContext'  // Import StoreProvider
import RenderCreatorsView from "./components/creators"
import RenderPostsView from "./components/posts"

// Sticky "go back" button for posts view
function Navigation() {
  const { pageStore } = useStores()  // Access the pageStore
  return (
    <button onClick={() => pageStore.navToCreatorsView()}>
      Go back
    </button>
  )
}

// Handle switching views
function PageContent() {
  const { pageStore } = useStores()  // Access pageStore here too
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

const App = () => {
  return (
    <StoreProvider>  {/* Wrap the entire app with the StoreProvider */}
      <div>
        <ObservedPageContent />
      </div>
    </StoreProvider>
  )
}

export default App
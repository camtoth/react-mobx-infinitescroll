import React, { createContext, useContext } from 'react'
import { CreatorsStore } from './creatorsStore'
import { PageStore } from './pageStore'
import { PostsStore } from './postsStore'
import postsStore from './postsStore'

// Create the context for all stores
const StoreContext = createContext<{
  creatorsStore: CreatorsStore
  pageStore: PageStore
  postsStore: PostsStore
} | undefined>(undefined)

// Typing the StoreProvider to accept children
export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const creatorsStore = new CreatorsStore()
  const pageStore = new PageStore()

  return (
    <StoreContext.Provider value={{ creatorsStore, pageStore, postsStore }}>
      {children}
    </StoreContext.Provider>
  )
}

// Custom hook to access stores in any component
export const useStores = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStores must be used within a StoreProvider')
  }
  return context
}

import { makeAutoObservable } from "mobx"
import postsStore from "./postsStore"

export class PageStore {
  currentPage = "creators"

  constructor() {
    makeAutoObservable(this)
  }

  setPage(page: string) {
    this.currentPage = page
  }

  navToCreatorsView() {
    this.setPage("creators")
    postsStore.flushPostsStore()
  }

  navToPostsByCreator(creatorId: string) {
    console.log(creatorId)
    this.setPage("posts")
    postsStore.setCreatorId(creatorId)
  }
}

export const pageStore = new PageStore()

import { action, makeObservable, observable } from "mobx"
import { Creator } from "../interfaces"
import creatorslist from "../assets/creators-list.json"

// MobX store
class CreatorsStore {
  // observable values
  creators: Creator[] = []

  // makeAutoObservable would be equivalent for this class
  constructor() {
    makeObservable(this, {
      creators: observable,
      loadCreators: action,
    })
  }

  // fetch posts by creator and add to list of all posts
  loadCreators() {
    // here I would fetch my data if the API wasn't so snarky about it >:)
    this.creators = creatorslist as Creator[]
  }
}

const creatorsStore = new CreatorsStore()

export default creatorsStore

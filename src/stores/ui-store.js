import { observable } from "mobx";

class UiStore {
  @observable currentPage;

  constructor() {
    this.currentPage = null;
  }
}

export default UiStore;

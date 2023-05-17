import { observable, makeObservable } from 'mobx';

class DefaultOptionsStore {
  pageSize: number = 12; /* указывать не более 50 (ограничение в API) */

  constructor() {
    makeObservable<this>(this, {
      pageSize: observable,
    });
  }
}

export default new DefaultOptionsStore();

export default class Sortable<T> {
  constructor(public list: T[] = [], public criteria?: (value: T) => number) {}

  changeOrder() {
    this.list = this.list.reverse();
  }

  sort() {
    const criteria = this.criteria;
    if (criteria) {
      this.list = this.list.sort(
        (itemA: T, itemB: T) => criteria(itemA) - criteria(itemB)
      );
    } else this.list = this.list.sort();
  }
}

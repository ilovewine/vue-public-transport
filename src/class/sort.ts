import { SORT_METHOD } from '@/types/sort';

class SortableOptions<T> {
  constructor(
    public criteria?: (value: T) => number,
    public method?: SORT_METHOD
  ) {}
}

export default class Sortable<T> {
  options: SortableOptions<T>;
  constructor(public list: T[] = [], options?: SortableOptions<T>) {
    this.options = {
      method: SORT_METHOD.ASCENDING,
      ...options,
    };
  }

  changeOrder() {
    this.list = this.list.reverse();
  }

  sort() {
    const criteria = this.options.criteria;
    if (criteria) {
      this.list = this.list.sort(
        (itemA: T, itemB: T) => criteria(itemA) - criteria(itemB)
      );
    } else this.list = this.list.sort();
  }
}

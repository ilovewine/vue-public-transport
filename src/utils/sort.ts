import { SORT_METHOD, Sortable } from '@/types/sort';

export const sort = <T>(sortable: Sortable<T>): Sortable<T> => {
  const { sorting } = sortable;
  const { method, criteria } = sorting;
  let result = { ...sortable };
  if (criteria) {
    result.list = sortable.list.sort(
      (itemA: T, itemB: T) => criteria(itemA) - criteria(itemB)
    );
  } else result.list = sortable.list.sort();
  if (method === SORT_METHOD.DESCENDING) result.list = result.list.reverse();
  return result;
};

export const changeSortOrder = <T>(sortable: Sortable<T>): Sortable<T> => ({
  ...sortable,
  list: sortable.list.reverse(),
});

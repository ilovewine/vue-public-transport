export const sortWithMethod = <T>(
  list: T[],
  method: (valueA: T, valueB: T) => number
) => list.sort(method);

export const sortBy = <T>(list: T[], byCriteria: (value: T) => number) =>
  sortWithMethod(
    list,
    (itemA: T, itemB: T) => byCriteria(itemA) - byCriteria(itemB)
  );

export const reverseSortBy = <T>(list: T[], byCriteria: (value: T) => number) =>
  sortWithMethod(
    list,
    (itemA: T, itemB: T) => byCriteria(itemB) - byCriteria(itemA)
  );

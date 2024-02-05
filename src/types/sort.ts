export const enum SORT_METHOD {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export interface Sortable<T> {
  sorting: {
    method: SORT_METHOD;
    criteria?: (value: T) => number;
  };
  list: T[];
}

export const enum SORT_METHOD {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export interface Sort<T> {
  method: SORT_METHOD;
  byCriteria: (value: T) => number;
}

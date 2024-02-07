import { describe, it, expect, assertType } from 'vitest';
import Sortable from '../Sortable';

const simpleList = () => [1, 230, 20, -2, 10];

const sortedSimpleList = () => simpleList().sort((a, b) => a - b);

type ComplexListItemType = {
  id: number;
  name: string;
  order: number;
};

const complexList = (): ComplexListItemType[] => [
  { id: 1, name: 'Item 1', order: 1 },
  { id: 5, name: 'Item 5', order: 5 },
  { id: 4, name: 'Item 4', order: 4 },
  { id: 2, name: 'Item 2', order: 2 },
  { id: 9, name: 'Item 9', order: 9 },
  { id: 7, name: 'Item 7', order: 7 },
  { id: 3, name: 'Item 3', order: 3 },
  { id: 10, name: 'Item 10', order: 10 },
  { id: 6, name: 'Item 6', order: 6 },
  { id: 8, name: 'Item 8', order: 8 },
];

const criteria = (item: ComplexListItemType) => item.order;

const sortedComplexListByCriteria = () =>
  complexList().sort((a, b) => criteria(a) - criteria(b));

describe.concurrent('Sortable', () => {
  it('should be an instance of Sortable', () => {
    const sortable = new Sortable();
    expect(sortable).toBeInstanceOf(Sortable);

    assertType<Sortable<unknown>>(sortable);
  });

  it('should contain information about sorting criteria and hold required functions', () => {
    const sortable = new Sortable(complexList(), criteria);
    expect(sortable.list).toStrictEqual(complexList());
    expect(sortable.criteria).toStrictEqual(criteria);
    expect(sortable.sort).toBeInstanceOf(Function);
    expect(sortable.changeOrder).toBeInstanceOf(Function);
  });

  it('should use .sort() default sorting when no criteria is passed', () => {
    const list = ['a', 'c', 'b'];
    const sortable = new Sortable(list);
    sortable.sort();
    expect(sortable.list).toStrictEqual(list.sort());
  });

  it('should take an array of numbers and sort it', () => {
    const sortable = new Sortable(simpleList());
    sortable.sort();
    expect(sortable.list).toStrictEqual(sortedSimpleList());

    assertType<Sortable<number>>(sortable);
  });

  it('should take an array of objects and sort it by given criteria', () => {
    const sortable = new Sortable(complexList(), criteria);
    sortable.sort();

    expect(sortable.list).toStrictEqual(sortedComplexListByCriteria());

    assertType<Sortable<ComplexListItemType>>(sortable);
  });

  it('should change the order of the list', () => {
    const simpleSortable = new Sortable(simpleList());
    simpleSortable.sort();
    simpleSortable.changeOrder();
    expect(simpleSortable.list).toStrictEqual(sortedSimpleList().reverse());

    const complexSortable = new Sortable(complexList(), criteria);
    complexSortable.sort();
    complexSortable.changeOrder();
    expect(complexSortable.list).toStrictEqual(
      sortedComplexListByCriteria().reverse()
    );
  });
});

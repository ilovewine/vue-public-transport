/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

type Nullable<T> = T | null;

type NullableProperties<T> = {
  [K in keyof T]: Nullable<T[K]>;
};

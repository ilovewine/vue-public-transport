export default <T extends unknown[]>(array: T): T => [...new Set(array)] as T;

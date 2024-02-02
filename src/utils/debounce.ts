export default (callback: Function, delay: number) => {
  setTimeout(() => {
    callback();
  }, delay);
};

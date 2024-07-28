const useDebounce = (fn, time) => {
  function debouncedFn() {
    let timer;
    return function (...args) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        fn.apply(this, args);
      }, time);
    };
  }

  return debouncedFn;
};

export default useDebounce;

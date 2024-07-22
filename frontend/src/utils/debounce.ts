export const debounce = <T extends (...args: unknown[]) => unknown>(func: T, wait: number) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    const invokeAfterTimeout = () => {
      timer = null;
      func(...args);
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(invokeAfterTimeout, wait);
  };
};

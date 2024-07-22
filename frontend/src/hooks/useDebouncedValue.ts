import {useMemo, useState} from 'react';
import {debounce} from '../utils/debounce';

export const useDebouncedValue = <Value>(defaultValue: Value, timeout = 400) => {
  const [value, setValue] = useState<Value>(defaultValue);

  const debounceSetValue = useMemo(
    () => debounce((newValue: Value) => setValue(newValue), timeout),
    [timeout]
  );

  return [value, debounceSetValue] as const;
};

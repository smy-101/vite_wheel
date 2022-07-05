import { useMemo, useState } from 'react';

export type Actions<T> = {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
};

//无参数，返回一个数组，数组的第一个元素是布尔类型，第二个元素是一个对象，对象的属性有setLeft、setRight、set、toggle
function useToggle<T = boolean>(): [boolean, Actions<T>];
//接受一个参数,参数类型由传入的值决定，返回数组中的元素类型和传入类型一致
function useToggle<T>(defaultValue: T): [T, Actions<T>];
//接受两个参数T，U，
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight
    };
    // useToggle ignore value change
    // }, [defaultValue, reverseValue]);
  }, []);

  return [state, actions];
}

export { useToggle };

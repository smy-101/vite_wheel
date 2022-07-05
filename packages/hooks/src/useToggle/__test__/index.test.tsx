import { describe, expect, it } from 'vitest';
import { useToggle } from '../index';
import { renderHook, act } from '@testing-library/react-hooks';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });
  it('test on optional', () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    callToggle(hook);
    expect(hook.result.current[0]).toEqual('World');
    act(() => {
      hook.result.current[1].set('World');
    });
    expect(hook.result.current[0]).toEqual('World');
    callToggle(hook);
    expect(hook.result.current[0]).toEqual('Hello');
  });
});

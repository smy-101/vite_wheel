import { describe, it, expect } from 'vitest';
import { classes } from '../classes';

describe('classes', () => {
  it('接受 1 个 className', () => {
    const result = classes('a');
    console.log(result);
    expect(result).toEqual('a');
  });
  it('接受 2 个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined 结果不会出现 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受 0 个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
  it('接受数组', () => {
    const result = classes(['a', 'b'], 'c');
    expect(result).toEqual('a b c');
  });
  it('接受对象', () => {
    const arr = ['b', { c: true, d: false }];
    const result = classes('a', arr);
    expect(result).toEqual('a b c');
  });
});

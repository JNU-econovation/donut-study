import { cardNameCheck, cvcNumberCheck } from '../src/utils/validation';

describe('cardNameCheck 함수', () => {
  test('공백이 아니며, 공백을 포함하지 않고, 특수 문자가 없는 경우', () => {
    expect(cardNameCheck('Valid123')).toBe(true);
  });

  test('10글자가 넘는 경우', () => {
    expect(cardNameCheck('InvalidName')).toBe(false);
  });

  test('특수 문자가 포함된 경우', () => {
    expect(cardNameCheck('Invalid!')).toBe(false);
  });

  test('빈 문자열인 경우', () => {
    expect(cardNameCheck('')).toBe(false);
  });
});

describe('cvcNumberCheck 함수', () => {
  test('공백이 아니며, 공백을 포함하지 않고, 숫자이며 3글자인 경우', () => {
    expect(cvcNumberCheck('123')).toBe(true);
  });

  test('3글자가 넘는 경우', () => {
    expect(cvcNumberCheck('1234')).toBe(false);
  });

  test('특수 문자가 포함된 경우', () => {
    expect(cvcNumberCheck('12!')).toBe(false);
  });

  test('빈 문자열인 경우', () => {
    expect(cvcNumberCheck('')).toBe(false);
  });
});
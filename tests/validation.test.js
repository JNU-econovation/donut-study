import { cardNameCheck } from '../src/utils/validation';

describe('cardNameCheck 함수', () => {
  test('공백이 아니며, 공백을 포함하지 않고, 특수 문자가 없는 경우', () => {
    expect(cardNameCheck('ValidName123')).toBe(true);
  });

  test('공백이 포함된 경우', () => {
    expect(cardNameCheck('Invalid Name')).toBe(false);
  });

  test('특수 문자가 포함된 경우', () => {
    expect(cardNameCheck('Invalid!Name')).toBe(false);
  });

  test('빈 문자열인 경우', () => {
    expect(cardNameCheck('')).toBe(false);
  });
});
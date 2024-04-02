import { cardNameCheck, cvcNumberCheck, dateCheck, passWordCheck } from '../src/utils/validation';

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

describe('dateCheck 함수', () => {
  test('공백이 아니며, 공백을 포함하지 않고, 숫자이며 4글자이고, 연, 월이 제대로 작성된 경우', () => {
    expect(dateCheck('0725')).toBe(true);
  });

  test('4글자가 넘는 경우', () => {
    expect(dateCheck('12345')).toBe(false);
  });

  test('특수 문자가 포함된 경우', () => {
    expect(dateCheck('12!')).toBe(false);
  });

  test('빈 문자열인 경우', () => {
    expect(dateCheck('')).toBe(false);
  });

  test('월이 잘못된 경우', () => {
    expect(dateCheck('1342')).toBe(false);
  });

  test('년도가 잘못된 경우', () => {
    expect(dateCheck('0723')).toBe(false);
  });
});

describe('cardPasswordChcek 함수', () => {
  test('공백이 아니며, 공백을 포함하지 않고, 숫자이며 2글자인 경우', () => {
    expect(passWordCheck('12')).toBe(true);
  });

  test('2글자가 넘는 경우', () => {
    expect(passWordCheck('123')).toBe(false);
  });

  test('특수 문자가 포함된 경우', () => {
    expect(passWordCheck('1!')).toBe(false);
  });

  test('빈 문자열인 경우', () => {
    expect(passWordCheck('')).toBe(false);
  });
});

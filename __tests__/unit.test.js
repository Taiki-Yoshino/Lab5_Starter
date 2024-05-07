// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


describe('isPhoneNumber', () => {
  test('validates a correct phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('validates a correct phone number with parentheses and space', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('fails a wrong phone number with few digits', () => {
    expect(isPhoneNumber('123-456-6')).toBe(false);
  });
  test('fails a wrong phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});


describe('isEmail', () => {
  test('validates a correct email', () => {
    expect(isEmail('example@test.com')).toBe(true);
  });
  test('validates a correct email with underscore', () => {
    expect(isEmail('example_name@test.co')).toBe(true);
  });
  test('fails an incorrect email without @ symbol', () => {
    expect(isEmail('example.com')).toBe(false);
  });
  test('fails an incorrect email with multiple dots', () => {
    expect(isEmail('example..test@test.com')).toBe(false);
  });
});


describe('isStrongPassword', () => {
  test('validates a correctly formatted password', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });
  test('validates a minimal valid password', () => {
    expect(isStrongPassword('Ab1_')).toBe(true);
  });
  test('fails a password starting with a number', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
  });
  test('fails a password that is too long', () => {
    expect(isStrongPassword('Abcdefghijklmnop')).toBe(false);
  });
});




describe('isDate', () => {
  test('validates a correct date format', () => {
    expect(isDate('12/31/2020')).toBe(true);
  });
  test('validates a correct date format with single digits', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('fails a date with invalid month', () => {
    expect(isDate('133/31/2020')).toBe(false);
  });
  test('fails a date with two digit year', () => {
    expect(isDate('12/31/20')).toBe(false);
  });
});




describe('isHexColor', () => {
  test('validates a correct 3-character hex code', () => {
    expect(isHexColor('#abc')).toBe(true);
  });
  test('validates a correct 6-character hex code', () => {
    expect(isHexColor('#aabbcc')).toBe(true);
  });
  test('fails an incorrect hex code with non-hex characters', () => {
    expect(isHexColor('#zzzzzz')).toBe(false);
  });
  test('fails an incorrect hex code with wrong length', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });
});

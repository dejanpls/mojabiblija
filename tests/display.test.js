import Display from '../src/js/core/display';

test('Display Genesis 1:1', () => {
  expect(Display.verse('Genesis', 1, 1)).toBe(
    'У почетку створи Бог небо и земљу.'
  );
});

test('Returns null if verse non-existent', () => {
  expect(Display.verse('Genesis', 1, 100)).toBe(null);
});

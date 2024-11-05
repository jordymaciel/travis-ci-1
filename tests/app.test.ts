import { soma } from '../src/app';

test('soma de 2 e 3 deve ser 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('soma de -1 e 1 deve ser 0', () => {
    expect(soma(-1, 1)).toBe(0);
});

test('soma de 0 e 0 deve ser 0', () => {
    expect(soma(0, 0)).toBe(0);
});

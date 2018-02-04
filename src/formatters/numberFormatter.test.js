import { formatPrice } from './numberFormatter';

describe('Price formatter', () => {
    test('formats 0', () => {
        expect(formatPrice(0)).toBe("0.00");
    });

    test('adds .00 to integer', () => {
        expect(formatPrice(10)).toBe("10.00");
    });

    test('adds .00 to string', () => {
        expect(formatPrice("10")).toBe("10.00");
    });

    test('adds a second decimal to float', () => {
        expect(formatPrice(10.5)).toBe("10.50");
    });

    test('adds a second decimal to string', () => {
        expect(formatPrice("10.5")).toBe("10.50");
    });

    test('leaves correct format intact passed as float', () => {
        expect(formatPrice(10.50)).toBe("10.50");
    });

    test('leaves correct format intact passed as string', () => {
        expect(formatPrice("10.50")).toBe("10.50");
    });

    test('removes extra decimal points and rounds up', () => {
        expect(formatPrice(10.508)).toBe("10.51");
    });

    test('removes extra decimal points and rounds down', () => {
        expect(formatPrice(10.504)).toBe("10.50");
    });

    test('removes extra decimal points and rounds up from 5', () => {
        expect(formatPrice(10.505)).toBe("10.51");
    });
});
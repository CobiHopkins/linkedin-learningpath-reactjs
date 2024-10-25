import { timesTwo } from './functions';

test("Multiplies by two", () => {
    expect(timesTwo(5)).toBe(10);
})
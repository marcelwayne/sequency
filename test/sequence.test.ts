import {asSequence, sequenceOf} from "../src/index";

test('sequenceOf: filter-map-toArray', () => {
    const array = sequenceOf(1, 2, 3)
        .filter(it => it > 1)
        .map(it => `num ${it}`)
        .toArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe('num 2');
    expect(array[1]).toBe('num 3');
});

test('asSequence: filter-map-toArray', () => {
    const array = asSequence([1, 2, 3])
        .filter(it => it > 1)
        .map(it => `num ${it}`)
        .toArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe('num 2');
    expect(array[1]).toBe('num 3');
});
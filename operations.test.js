const { mean, median, mode } = require('./operations');


describe('operations', function () {

    test('mean calculates average correctly', function () {
        expect(mean([1, 2, 3, 4, 5])).toEqual(3)
        expect(mean([5, 10, 15, 20])).toEqual(12.5)
    })

    test('median calculates middle correctly', function () {
        expect(median([1, 2, 3, 4, 5])).toEqual(3)
        expect(median([5, 10, 15, 20, 25, 30, 35])).toEqual(20)
        expect(median([5, 10, 15, 20, 25, 30])).toEqual(17.5)
    })

    test('mode calculates most frequent correctly', function () {
        expect(mode([1, 2, 2, 3, 3, 3])).toEqual(3)
        expect(mode([5, 5, 6, 6, 7])).toEqual(5)
    })
})
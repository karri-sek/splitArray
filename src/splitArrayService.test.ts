import chunkInputArray from './splitArrayService';

test('chunkInputArray', () => {
    const inputArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    const noOfChunks = 5;
    const result = chunkInputArray(inputArray, noOfChunks);
    expect(result).toStrictEqual([[1,2,3,4,5],[6,7,8,9,10],[11, 12]])
    expect(chunkInputArray(inputArray, 12)).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12])
    expect(chunkInputArray(inputArray, 6)).toStrictEqual([[1,2,3,4,5,6],[7,8,9,10,11,12]]);
    expect(chunkInputArray(inputArray, 1)).toStrictEqual([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12]]);
    expect(chunkInputArray(inputArray, 2)).toStrictEqual([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]]);
    expect(chunkInputArray(inputArray, 0)).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12])
    expect(chunkInputArray(inputArray, 10000)).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12])
})
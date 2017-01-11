const {merge, mergeSort} = require('../index.js');


describe('merge function', function() {
  it('should merge two sorted lists', function() {
    let list1 = [2, 3, 4, 5];
    let list2 = [1, 4, 5, 6, 7];
    expect(merge(list1, list2, function(a, b) {
      return (a <= b);
    })).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7]);
  });
})

describe('mergeSort function', function() {
  it('should sort a list', function() {
    let list1 = [5, 8, 1, 4, 6, 5, 6, 7];
    expect(mergeSort(list1, function(a, b) {
      return (a <= b);
    })).toEqual([1, 4, 5, 5, 6, 6, 7, 8]);
  });
  it('should sort using a comparison function', function() {
    let list = [[0, 'the'], [4, 'snow'], [1, 'falls']];
    expect(mergeSort(list, function(a, b) {
      return (a[0] >= b[0]);
    })).toEqual([[4, 'snow'], [1, 'falls'], [0, 'the']]);
  });
  it('should be a stable sort', function() {
    let list = [[0, 'the'], [0, 'snow'], [3, '!'], [0, 'falls']];
    expect(mergeSort(list, function(a, b) {
      return (a[0] >= b[0]);
    })).toEqual([[3, '!'], [0, 'the'], [0, 'snow'], [0, 'falls']]);
  });
})

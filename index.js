
 function merge(a, b, comparator) {
   let merged = [];
    while(a.length > 0 && b.length > 0) {
      if(comparator(a[0], b[0])) {
       merged.push(a.shift());
      } else {
       merged.push(b.shift());
      }
    }
    if(a.length > 0) {
     merged = merged.concat(a);
    } else {
     merged = merged.concat(b);
    }
   return merged;
 }

function mergeSort(a, comparator) {
  if(a.length <= 1) {
    return a;
  }
  let first = a.slice(0, a.length/2);
  let second = a.slice(a.length/2);
  let firstSorted = mergeSort(first, comparator);
  let secondSorted = mergeSort(second, comparator);
  return merge(firstSorted, secondSorted, comparator);
}

module.exports = {
  merge: merge,
  mergeSort: mergeSort
}

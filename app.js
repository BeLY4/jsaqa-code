function sortByName(inputArray) {
  inputArray.sort(function (a, b) {
    var nameA = a.toLowerCase(),
      nameB = b.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0; 
  });
  return inputArray;

}

exports.sortByName = sortByName;

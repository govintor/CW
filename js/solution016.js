function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
  };
//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

//The geese are any strings in the following array, which is pre-populated in your solution:

//["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//For example, if this array were passed as an argument:

//["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//gitYour function would return the following array:


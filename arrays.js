var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element);
}

function addElementToEndOfArray(array,element){
  var newArray = new Array();
  newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return cats.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}

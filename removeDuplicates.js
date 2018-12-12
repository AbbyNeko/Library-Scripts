/***********************************************
Removes duplicate properties from an array
* Takes up to 3 comparable properties

In example, it removes all duplicates that have
the same name, age and pet
************************************************/

var array1 = [{'name':'abby','age':'32','pet':'cat'},{'name':'abby','age':'32','pet':'cat'},{'name':'abby','age':'32','pet':'cat'},{'name':'erin','age':'31','pet':'dog'},{'name':'abby','age':'32','pet':'cat'}];

var properties = ['name','age','pet'];

function removeDuplicateProperties(array, properties) {
   try {

     var new_arr = [];
     var obj  = {};

     for (var i in array) {
         obj[array[i][properties[0]], array[i][properties[1]], array[i][properties[2]]] = array[i];
     }

     for (i in obj) {
         new_arr.push(obj[i]);
     }

     return new_arr;

   }catch(e) {
     console.log('Remove Duplicate Properties Error: '+e.message);
   }

 }


console.log(JSON.stringify(removeDuplicateProperties(array1, properties)));


/***********************************************
Removes duplicates from an array

In example, it removes the duplicate of Dracula
************************************************/

var array2 = ['Dracula', 'Frankenstein', 'Bella', 'Edward', 'Dracula', 'Van Helsing'];

function removeDuplicates(array) {
   try {

     var new_arr = [];
     var obj  = {};

     for (var i in array) {
         obj[array[i]] = array[i];
     }

     for (i in obj) {
         new_arr.push(obj[i]);
     }

     return new_arr;

   }catch(e) {
     console.log('Remove Duplicates Error: '+e.message);
   }

 }


console.log(JSON.stringify(removeDuplicates(array2)));

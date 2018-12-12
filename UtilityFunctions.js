/**********************************************************

Returns true if value is null, or empty

EXAMPLE OF USAGE

if(!isEmpty(value)){ //if value is not empty

  //USE VALUE

}
********************************************************/

function isEmpty(value){
	return value == null || value == '';
}

/**********************************************************
Returns true if array is empty
***********************************************************/

function isEmptyArray(array) {
    return array != null && array.length <= 0;
}

/*
 * Create the function factorial here
 * Example: input is 4 = 4 * 3 * 2 * 1 = 24 (output)
 */

function factorial(n) {

    var count = n-1;
    
    while(count > 0) {
        
        //n = n * count; <= same thing but better below
        n *= count;
        count--;
        
    }
    
    return n;
    
}

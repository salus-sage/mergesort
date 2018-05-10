

/// the merge sort SME API 

(function(E){
    E.split = function (inputArray){
        var middle = parseInt(inputArray.length / 2);
        var left   = inputArray.slice(0, middle);
        var right  = inputArray.slice(middle, inputArray.length);

        return [left, right];
    }

    E.merge = function(left, right)
    {
        var result = [];
        //console.log(result.length, "results length");
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                //console.log(left[0], right[0], "first elements of left and right");
                result.push(left.shift());
                //console.log(result, "mergesort: left shift: check result");
            } else {
                result.push(right.shift());
                //console.log(result, "mergesort: right shift: check result");
            }
        }
     
        while (left.length)
            result.push(left.shift());
        //console.log(result, "mergesort: left shift: check result - 2nd while");
     
        while (right.length)
            result.push(right.shift());
        //console.log(result, "mergesort: right shift: check result - 2nd while");
        return result;
    }

    E.mergeSort = function (inputArray, toggleResult)
    {
        //console.log('switch value', switch);
        if (inputArray.length < 2)
            
            return inputArray;

        //two arrays, index:0 = left array
        // index:1 = right array
        var splitArray = E.split(inputArray);
        
        //console.log({[middle]: [left,right]},"SPLIT: checkleftrightmiddle");
        // return the the split arrays
        if(toggleResult == 'split')
            return splitArray;
        else 
            //return a function call to 
            return E.merge(E.mergeSort(splitArray[0]), E.mergeSort(splitArray[1]));
        
    }

})(window.E);


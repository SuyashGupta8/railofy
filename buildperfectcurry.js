var indexes ;

let makeCurry = function(arr) {
    
    let mapInd = mapIndex(arr);

    let sortedInput = arr.sort();

    let curryIngredients = {};

    for(let i = arr.length ; i >=0 ; i--){
       let ingredients = findSumRecursively(sortedInput, 0, i-1, arr[i]);
       curryIngredients[mapInd(arr, i)] = 'p';

       ingredients.forEach(element => {
        curryIngredients[mapInd(null, i)] = 'q';
       });
    }

    return curryIngredients;
    
}


function findSumRecursively(arr, startIndex, endIndex, sum){

    if(startIndex >= endIndex){
        return;
    }

    for(let i =startIndex; i< endIndex; i++){
        if(arr[startIndex] + arr[endIndex] < sum){
            let ansArr = [startIndex, endIndex];
            let arr =findSumRecursively(arr, startIndex + 1, endIndex -1, (sum - arr[startIndex] - arr[endIndex]));
            ansArr.concat(arr);
            continue;
        }else if((arr[startIndex] + arr[endIndex]) === sum){
            let  ansArr = [startIndex, endIndex];
            return ansArr;
        }else if((arr[i] + arr[index]) > sum){
            break;
        }
    }

    if(index < 0){
        return;
    }

    if(arr[index] === sum){
        return index;
    }
    
    findSumRecursively(arr, index -1, );
}




/**
 * its a map which will return index when queried or an ara element 
 * @param {} params 
 */
let mapIndex = function name(arr, elem) {

    if(!indexes){

        indexes = {};

        for(let i = 0; i  < arr.length; i++){
            indexes[arr[i]] = i;
        }

    }

    if(elem){
        return indexes[elem];
    }

    return;
}
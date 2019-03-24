/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;
    for(let index in preferences){
        let first = preferences[index];
        let second = preferences[first - 1];
        let third = preferences[second - 1];
        if(index == third - 1 && index != first-1 && index != second-1 && first-1 != second-1){
            result++;
            preferences[index] = undefined;
            preferences[first - 1] = undefined;
            preferences[second - 1] = undefined;
        }
    }
    return result;
}
    
    

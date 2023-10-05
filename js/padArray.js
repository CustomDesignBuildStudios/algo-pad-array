
const Position = {
    Center: 'Center',
    Left: 'Left',
    Right: 'Right'
};

function padArray(array, minSize, value=null, pos = Position.Left) {
    if(minSize <= array.length){
        return array;
    }

    if(pos == Position.Center){
        leftNum = (minSize - array.length) / 2;
        rightNum = Math.floor(leftNum);
        leftNum = Math.ceil(leftNum);
        for(let x = array.length-1; x < minSize; x++){
            if(leftNum > 0){
                array.unshift(value);
                leftNum -= 1;
            }else if(rightNum > 0){
                array.push(value);
                rightNum -= 1;

            }
        }
    }
    else if(pos == Position.Right){
        for(let x = array.length; x < minSize; x++){
            array.unshift(value);
        }
    }
    else{
        for(let x = array.length; x < minSize; x++){
            array.push(value);
        }
    }
    return array;
}
module.exports = {padArray,Position};

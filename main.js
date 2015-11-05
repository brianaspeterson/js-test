/*function to print text within string arrays in column form"
function textBlock(data) {
    var finalArray = [];
    for (var j = 0; j < data[0].length; j++) {
        var array = [];
        for (var i = 0; i < data.length; i++) {
            item = data[i].charAt(j);
            array.push(item);
            console.log(array);
        }

        var stringForm = array.join('');
        finalArray.push(stringForm);
    }
    return finalArray;
}

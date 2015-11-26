//THIS IS A TEST OBJECT
var obj = {
    "a": 1,
    "b": "string",
    "c": [1,2,"wwer",4],
    "d": true,
    "e": {
        "f": 1,
        "g": "fsdfs",
        "h": [1,2,3],
        "i": {
            "j": 1,
            "k": "1212313",
            "z": {
                "x": "afdfsdasadf"
            }
        }
    }
};



var objectParser = function(obj) {

    var counter = {
        stringsNumber: 0,
        numbersNumber: 0,
        booleansNumber: 0,
        objectsNumber: 0,
        functionsNumber: 0,
        arraysNumber: 0,
        datesNumber: 0
    };


    recursiveObject = function(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {

                if(typeof obj[prop] === 'string'){
                    ++counter.stringsNumber;
                }

                if(typeof obj[prop] === 'number'){
                    ++counter.numbersNumber;
                }

                if(typeof obj[prop] === 'boolean'){
                    ++counter.booleansNumber;
                }

                if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) && !(obj[prop] instanceof Date)){
                    ++counter.objectsNumber;
                    recursiveObject(obj[prop]);
                }

                if(typeof obj[prop] === 'function'){
                    ++counter.functionsNumber;
                }

                if(Array.isArray(obj[prop])){
                    ++counter.arraysNumber;
                    recursiveObject(obj[prop]);
                }

                if(obj[prop] instanceof Date){
                    ++counter.datesNumber;
                }
            }
        }
    };

    recursiveObject(obj);


    function printObject(o) {
        var out = '';
        for (var p in o) {
            out += p + ': ' + o[p] + '\n';
        }
        return out;
    }


    document.getElementById('returnObject').value = printObject(counter);


    console.log(counter)

};

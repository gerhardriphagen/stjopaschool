var obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

var objectParser = function(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'object') {
                console.log(obj[prop]);
                objectParser(obj[prop])
            }
            else {
                console.log(obj[prop])
            }
        }
    }
};


objectParser(obj);






//if it's an object, you should call your function again, but the values in the function will be the new key and property



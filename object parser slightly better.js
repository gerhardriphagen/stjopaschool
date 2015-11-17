var obj = {
    a: 1,
    b: 'string',
    c: 2,
    d: true,
    e: {
        f: 1,
        g: 'fsdfs'
    }
};

var objectParser = function(obj) {

    if (typeof strings === 'undefined') strings = 0;
    if (typeof numbers === 'undefined') numbers = 0;
    if (typeof booleans === 'undefined') booleans = 0;
    if (typeof objects === 'undefined') objects = 0;
    if (typeof functions === 'undefined') functions = 0;
    if (typeof arrays === 'undefined') arrays = 0;
    if (typeof dates === 'undefined') dates = 0;


    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {

            if(typeof obj[prop] === 'string'){
                ++strings;
            }

            if(typeof obj[prop] === 'number'){
                ++numbers;
            }

            if(typeof obj[prop] === 'boolean'){
                ++booleans;
            }

            if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) && !(obj[prop] instanceof Date)){
                ++objects;
                objectParser(obj[prop]);
            }

            if(typeof obj[prop] === 'function'){
                ++functions;
            }

            if(typeof obj[prop] === 'object' && Array.isArray(obj[prop])){
                ++arrays;
                objectParser(obj[prop]);
            }

            if(obj[prop] instanceof Date){
                ++dates;
            }
        }
    }


    var types = {
        'strings': strings,
        'numbers': numbers,
        'booleans': booleans,
        'objects': objects,
        'functions': functions,
        'arrays': arrays,
        'dates': dates
    };

    return types;
};


objectParser(obj);




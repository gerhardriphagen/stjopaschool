var obj = {
    a: 10,
    b: 'ggggg',
    c: 10,
    d: true,
    e: {
        f: 1,
        g: 'askdf'
    },
    h: {
        i: 1,
        j: 'dfaafd'
    },
    k: [1,2,3],
    l: function(){
        return('hi stjopa!')
    },
    m: new Date(99,5,24),
    y: 'fffff',
    z: [1,2,3]
};

var obj2 = {
    a: {
        a: 'string',
        b: 1,
        c: true,
        d: function(){
            return 'something'
        },
        e: [1,2,3],
        f: new Date(11,11,11),
        g: {
            a: 'string',
            b: 1,
            c: true,
            d: function(){
                return 'something'
            },
            e: [1,2,3],
            f: new Date(11,11,11)
        }
    }
};

function objectParser(obj) {

    var strings = 0;
    var numbers = 0;
    var booleans = 0;
    var objects = 0;
    var functions = 0;
    var arrays = 0;
    var dates = 0;

    for(var prop in obj) {
        if(typeof obj[prop] === 'string')
            ++strings;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'number')
            ++numbers;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'boolean')
            ++booleans;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) && !(obj[prop] instanceof Date))
            ++objects;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'function')
            ++functions;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object' && Array.isArray(obj[prop]))
            ++arrays;
    }

    for(var prop in obj) {
        if(obj[prop] instanceof Date)
            ++dates;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object')
            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'string')
                    ++strings;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'number')
                    ++numbers;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'boolean')
                    ++booleans;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'object' && !Array.isArray(obj[prop][nestedprop]) && !(obj[prop][nestedprop] instanceof Date))
                    ++objects;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'function')
                    ++functions;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'object' && Array.isArray(obj[prop][nestedprop]))
                    ++arrays;
            }

            for(var nestedprop in obj[prop]) {
                if(obj[prop][nestedprop] instanceof Date)
                    ++dates;
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

}

objectParser(obj);
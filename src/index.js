exports.min = function min(array) {
    if (arguments.length ===0) {
        return 0;
    }else if (array.length !== 0 && array[0] !== 'undefined') {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (arguments.length ===0) {
        return 0;
    } else if (array.length !== 0) {
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (arguments.length ===0) {
        return 0;
    } else if (array.length !== 0) {
        let totalAmount = array.reduce((a, b) => a + b);
        return totalAmount / array.length;
    } else {
        return 0;
    }
};

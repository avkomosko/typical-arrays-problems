exports.min = function min(array) {
    if (array.lenght > 1 && array[0] !== 0) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    return Math.max.apply(null, array);
};

exports.avg = function avg(array) {
    return (
        array.reduce((accumulator, currenValue) => accumulator + currentValue) /
        array.length
    );
};


exports.min = function min (array) {
    if (!arguments.length == true || array.length === 0) return 0;
    else return array.reduce((a, b) => (a > b) ? b : a, 0);
}

exports.max = function max (array) {
    if (!arguments.length == true || array.length === 0) return 0;
    else return array.reduce((a, b) => (a > b) ? a : b, 0);
}

exports.avg = function avg (array) {
    if (!arguments.length == true || array.length === 0) return 0;
    else return (array.reduce((a, b) => (a + b), 0)/array.length);
}

"use strict";
function add(n1, n2) {
    return 0;
}
add(11, 22);
function add_mix(n1, n2) {
}
add_mix('one', 'two');
function add_overloading(n1, n2) {
}
//optional para
function sum_optional(n1, n2) {
}
sum_optional(11);
sum_optional(11, 12);
//optional para
function sum_default(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
}
sum_optional(11);
sum_optional(11, 12);
//optional para
function sum_annumber(n1, n2) {
}
sum_optional(11);
sum_optional(11, 12);
//rest
function sum_annumber_rest(n1) {
    var n2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n2[_i - 1] = arguments[_i];
    }
}
sum_annumber_rest(11);
sum_annumber_rest(11, 12, 33, 44);
//generic
function insertdata(data) {
}
insertdata(11);
insertdata('one');
insertdata(11);

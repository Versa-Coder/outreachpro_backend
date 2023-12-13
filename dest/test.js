"use strict";
// export const x = 5;
function z() {
    console.log('Z');
    function x() {
        console.log('x');
        let a = 0;
        function y() {
            a++;
            console.log('a==>', a);
        }
        return y;
    }
    return x;
}
let test = z()();
test();
test();

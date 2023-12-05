"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAPHQL_DATE_TYPE = void 0;
const graphql_1 = require("graphql");
function validateAndReturnDate(date) {
    if (date) {
        if (typeof date === 'string' || date instanceof Date) {
            let d = new Date(date);
            return d.toISOString();
        }
    }
    else {
        throw new Error('Valid date string or object not provided');
    }
}
exports.GRAPHQL_DATE_TYPE = new graphql_1.GraphQLScalarType({
    name: 'GRAPHQL_DATE_TYPE',
    serialize(d) {
        return validateAndReturnDate(d);
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return validateAndReturnDate(ast.value);
        }
        throw new Error('Provide valid date');
    },
    parseValue(d) {
        return validateAndReturnDate(d);
    },
});

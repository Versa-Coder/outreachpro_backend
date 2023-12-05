import { GraphQLScalarType, Kind } from 'graphql';

function validateAndReturnDate(date: string | Date) {
  if (date) {
    if (typeof date === 'string' || date instanceof Date) {
      let d = new Date(date);
      return d.toISOString();
    }
  } else {
    throw new Error('Valid date string or object not provided');
  }
}

export const GRAPHQL_DATE_TYPE = new GraphQLScalarType({
  name: 'GRAPHQL_DATE_TYPE',

  serialize(d) {
    return validateAndReturnDate(d as string);
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return validateAndReturnDate(ast.value);
    }
    throw new Error('Provide valid date');
  },

  parseValue(d) {
    return validateAndReturnDate(d as string);
  },
});

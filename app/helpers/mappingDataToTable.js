import lodashIsString from 'lodash/isString';
import lodashIsArray from 'lodash/isArray';

export default function(mappingTo, data) {
  let result;

  if (lodashIsString(mappingTo)) {
    switch (mappingTo) {
      case 'unknown':
        result = 'unknown';
        break;

      case 'projectLabel':
        if (data[mappingTo] === null) {
          result = 'No name';
        } else result = data[mappingTo];
        break;

      case 'admin':
        if (data[mappingTo] === 2) {
          result = 'yes';
        } else result = 'no';
        break;

      case 'userId':
        if (data[mappingTo] === null) {
          result = 'No result';
        } else result = data[mappingTo];
        break;

      case 'format':
        if (data[mappingTo] === null) {
          result = 'No result';
        } else result = data[mappingTo];
        break;

      default:
        if (data[mappingTo] === null || data[mappingTo] === 0) {
          result = '0';
        } else result = data[mappingTo] || 'No results';
        break;
    }
  } else if (lodashIsArray(mappingTo)) {
    let i;

    for (i = 0; i < mappingTo.length; i += 1) {
      if (lodashIsArray(data[mappingTo[i]])) {
        result = data[mappingTo[i]][0];
        data = result;
      } else if (data[mappingTo[i]]) {
        result = data[mappingTo[i]];
        data = result;
      } else if (data[mappingTo[i]] === null) {
        result = '—';
        break;
      } else if (data[mappingTo[i]] === 0) {
        result = '0';
        break;
      } else {
        result = `Unknown mapping fields on ${i} iteration`;
        break;
      }

      // else if ( lodashIsArray(data[mappingTo[i]]) ) { // Если массив, вызываем саму себя
      //   mapping() <------ называние ф-ии на 4ой строке
      // }
    }
  }

  return result;
}

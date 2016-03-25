function parseValue(value) {
  switch (typeof(value)) {
    case 'function':
      return value.toString();
    case 'object':
    case 'array':
      return JSON.stringify(value, null, ' ');
    default:
      return value;
  }
}

export function tap(value, label = 'Tap:') {
  const tapValue = parseValue(value);
  console.log(label, tapValue); // eslint-disable-line no-console
  return value;
}

export default {
  tap,
};

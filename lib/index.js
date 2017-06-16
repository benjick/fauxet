export const tap = label => value => {
  if (label) {
    console.log(label, value); // eslint-disable-line no-console
  } else {
    console.log(value); // eslint-disable-line no-console
  }
  return value;
};

export default {
  tap,
};

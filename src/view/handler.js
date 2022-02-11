export const pickColor = (index) => {
  if (index % 4 === 0) {
    return 'first col-6';
  }
  if (index % 4 === 1) {
    return 'second col-6';
  }
  if (index % 4 === 2) {
    return 'third col-6';
  }
  return 'fourth col-6';
};

export const pick2Color = (index) => {
  if (index % 2 === 0) {
    return 'second col-12';
  }
  return 'third col-12';
};

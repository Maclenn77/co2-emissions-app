const pickColor = (index) => {
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

export default pickColor;

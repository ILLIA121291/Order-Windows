const ifDotAddZeroToPrice = num => {
  return num.toString().includes('.') ? num.toString() + '0' : num;
};

export { ifDotAddZeroToPrice };

const hammingDistance = (x, y) => {
  return (x ^ y).toString(2).replace(/0/g, "").length;
};

hammingDistance(1, 4);

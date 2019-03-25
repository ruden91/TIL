const towersOfHanoi = (height, src, des, buff) => {
  if (height > 0) {
    towersOfHanoi(height - 1, src, buff, des)
    console.log('move disk from tower', src, ' to Tower ', des)

    towersOfHanoi(height - 1, buff, des, src);
  }
  return;
}

towersOfHanoi(2, 'A', 'C', 'B');
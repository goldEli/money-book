export const range = (size: number, start: number) => {
  const res: number[] = [];
  for (let i = 0; i < size; ++i) {
    res[i] = start + i;
  }
  return res;
};

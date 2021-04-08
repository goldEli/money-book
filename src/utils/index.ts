export const range = (size: number, start: number) => {
  const res: number[] = [];
  for (let i = 0; i < size; ++i) {
    res[i] = start + i;
  }
  return res;
};

export const parseToYearAndMonth = (str?: string) => {
  const date = str ? new Date(str) : new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
};

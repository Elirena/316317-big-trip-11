const sortValues = [
  `day`, `event`, `time`, `price`, `offers`
];

export const generateSorts = () => {
  return sortValues.map((item) => {
    return {
      item,
    };
  });
};


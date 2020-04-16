const filterValues = [
  `everything`, `future`, `past`
];

export const generateFilters = () => {
  return filterValues.map((item) => {
    return {
      item,
    };
  });
};


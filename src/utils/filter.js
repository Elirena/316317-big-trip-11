import {FilterType} from "../const.js";

export const getAllPoints = (points) => {
  return points.filter((point) => point.isArchive);
};

export const getFuturePoints = (points, date) => {
  return points.filter((point) => {
    const dueDate = point.dueDate;

    if (!dueDate) {
      return false;
    }

    return isFutureDate(dueDate, date);
  });
};

export const getPastPoints = (points, date) => {
  return points.filter((point) => {
    const dueDate = point.dueDate;

    if (!dueDate) {
      return false;
    }

    return isPastDate(dueDate, date);
  });
};

export const getPointsByFilter = (points, filterType) => {
  const nowDate = new Date();

  switch (filterType) {
    case FilterType.EVERYTHING:
      return getAllPoints(points);
    case FilterType.FUTURE:
      return getFuturePoints(points, nowDate);
    case FilterType.PAST:
      return getPastPoints(points, nowDate);
  }

  return points;
};

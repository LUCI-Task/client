export const counter = (arr, keyword) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.key}${obj[`${keyword}`]}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return Object.values(res);
};

export function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export const SortGuideTxt = (t) => {
  switch (t) {
    case "first_name":
      return "Name";
    default:
      return t;
  }
};

export const leftSort = (t) => {
  switch (t) {
    case "name":
      return "first_name";
    default:
      return t;
  }
};

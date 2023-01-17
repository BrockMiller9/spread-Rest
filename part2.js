// ----rest & spread--------
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

function findMin(...nums) {
  return Math.min(...nums);
}

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const doubleAndReturnArgs = (arr, ...num) => {
  return [...arr, ...num.map((n) => n * 2)];
};

const removeRandom = (items) => {
  let random = Math.floor(Math.random() * items.length);
  return [...items.slice(0, random), ...items.slice(random + 1)];
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

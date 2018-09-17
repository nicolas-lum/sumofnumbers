const testList = [1, 2, 5, 8, 9]; // 25

function sumFor(list) {
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  const len = list.length;

  if (len === 1) {
    return list[0];
  }

  return list.pop() + sumRecursion(list);
}

function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) {return memo + num; }, 0);
  return sum;
}


console.log(sumFor(testList));
console.log(sumWhile(testList));


console.log(sumTheSimpleWay(testList));

console.log(sumRecursion(testList));
const array = [];
const isUnique = [];
let count = 0;

do {
  const value = gets();
  if (value == '') {
    break;
  } else {
    array.push(value);
  }
} while (true);

for (item of array) {
  if (!isUnique.includes(item)) isUnique.push(item);
}

const result = isUnique.length;

print(result);

function print_me(...args0) {
  let flatArray = reduceInput(args0);
  return function (...args1) {
    const secondArray = reduceInput(args1);
    for (let i = 0; i < secondArray.length; i++) {
      flatArray.push(secondArray[i]);
    }
    return flatArray;
  };
}

function reduceInput(input) {
  const array = input.reduce((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      currentValue.forEach((item) => {
        acc.push(item);
      });
    } else {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  return array;
}

function Part2() {
  const output = print_me("foo", "bar", ["bam", "baz"])("taz");
  return (
    <ul>
      {output.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default Part2;

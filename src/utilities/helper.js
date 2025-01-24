export const sumArray = (arr) => {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }
  return sum;
};

export const splitString = (inputString) => {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0])
  }
  return characters
}

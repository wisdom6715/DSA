function reverse(str){
  /// you can replace the spread operator with split method in javascript
  const reversedstring = [...str].reverse().join('');
  console.log(reversedstring)
}
/// we can still make the code better using ECS 6
const reverse = (str) => {
  const reversedString = [...str].reverse().join('');
  console.log(reversedString)
}
reverse('man')
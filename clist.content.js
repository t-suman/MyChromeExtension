let arr = document.getElementsByClassName("contest");
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  let temp = arr[i].getElementsByTagName("a");
  arr2.push(temp[0]);
}
for (let i = 0; i < arr2.length; i++) {
  let temp = arr2[i].innerHTML.trim();
  let s = temp.substr(10, 5);
  temp = temp.replace(s, tConvert(s));
  arr2[i].innerHTML = temp;
}

let arr1 = document.getElementsByTagName("table");
let arr2 = arr1[2].getElementsByTagName("tr");
let arr3 = arr1[3].getElementsByTagName("tr");

let arr4 = [];
for (let i = 1; i < arr2.length; i++) {
  let tempArr = arr2[i].getElementsByTagName("td");
  arr4.push(tempArr[2]);
}
arr = [];
for (let i = 0; i < arr4.length; i++) {
  let tempArr = arr4[i].getElementsByTagName("a");
  arr.push(tempArr[0]);
}
for (let i = 0; i < arr.length; i++) {
  let s = arr[i].innerHTML;
  let time24 = s.substr(29, 5);
  let time12 = tConvert(time24);
  s = s.replace(time24, time12);
  arr[i].innerHTML = s;
}

let arr1 = document.getElementsByClassName("start_date");
let arr2 = document.getElementsByClassName("end_date");

for (let i = 0; i < arr1.length; i++) {
  let s = arr1[i].innerHTML;
  let s2 = s.substring(17, s.length);
  s = s.replace(s2, tConvert(s2));
  arr1[i].innerHTML = s;
}
for (let i = 0; i < arr2.length; i++) {
  let s = arr2[i].innerHTML;
  let s2 = s.substring(17, s.length);
  s = s.replace(s2, tConvert(s2));
  arr2[i].innerHTML = s;
}

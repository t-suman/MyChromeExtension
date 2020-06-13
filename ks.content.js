let arr = document.getElementsByClassName("schedule-row__upcoming");
let fun = () => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].getElementsByTagName("div");
    arr2.push(temp[1]);
    arr2.push(temp[2]);
  }
  arr = [];
  for (let i = 0; i < arr2.length; i++) {
    let temp = arr2[i].getElementsByTagName("span")[0];
    arr.push(temp);
  }
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i].innerHTML;
    let s2 = s.substr(13, 5);
    s = s.replace(s2, tConvert(s2));
    arr[i].innerHTML = s;
  }
  console.log("fired");
};

let e = document.getElementsByClassName("mdc-switch__native-control")[0];

e.click(fun);

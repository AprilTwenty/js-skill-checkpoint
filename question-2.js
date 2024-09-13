// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
let newTask = {id: 5, task: "Walk the dog"};
userTaskList.push(newTask);
//userTaskList.push({id: 5, task: "Walk the dog"});


//แบบ รู้ index O(1)
userTaskList[3].task = "Go to the gym";

//แบบ ไม่รู้ index O(n)
//for (let i = 0; i < userTaskList.length - 1; i++) { (userTaskList[i].id === 4 ? userTaskList[i].task = "Go to the gym":userTaskList[i])}


//แบบ ไม่รู้ index   ไม่แก้ไข arrayเก่า O(n)
//let newUserTaskList = userTaskList.map((userTaskList) => userTaskList.id === 4 ? userTaskList.task = "Go to the gym": userTaskList);

//แบบ ไม่รู้ index binary search O(log n)
/*
let left = 0;
let right = userTaskList.length - 1;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (userTaskList[mid].id === 4){
    userTaskList[mid].task = "Go to the gym";
    break;
  } else if (userTaskList[mid].id < 4){
    left = mid + 1;
  }else if (userTaskList[mid].id > 4){
    right = mid - 1;
  }
}
*/

userTaskList.pop();

console.log(userTaskList[userTaskList.length-1]);
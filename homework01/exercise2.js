

function isweekend(){
  const todaydate= new Date();
  const day=todaydate.getDay();
 let arr=["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
  console.log(arr[day]);
}
isweekend();
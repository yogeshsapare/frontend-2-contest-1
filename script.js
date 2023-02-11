/** @format */
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
     arr.map(
        function(arr){
          if(arr.marks > 50){
              console.log(arr);
          }
      });
    
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
     arr.forEach(
          function(arra){
            if(arra.marks > 50 ){
             console.log(arra);
            }
        });
  }
  
  function addData() {
    //Write your code here, just console.log
    let data = {id:4,name:"susan",age:"20",marks:45};
    arr.push(data);
    console.log(arr)
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    var updatedArr=arr.filter(remove);
      function remove(arr){
        return arr.marks >= 50;
      }
      console.log(updatedArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  var newArray= [
        { id: 5, name: "summy", age: "18", marks: 90 },
        { id: 6, name: "broven", age: "20", marks: 60 },
        { id: 7, name: "sativ", age: "26", marks: 85 },
      ];
      var finalArray= arr.concat(newArray);
      console.log(finalArray);
  }

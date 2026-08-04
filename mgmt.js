const NameInput=document.getElementById("name");
const DeptInput=document.getElementById("dept");
const numberInput=document.getElementById("roll.no");
const button=document.getElementById("addbtn");
const student = document.getElementById("studentContainer");


button.addEventListener("click" ,myFunc);

function myFunc(){

let userName = NameInput.value;
let userdept = DeptInput.value;
let userNum = numberInput.value;

if(!userName.trim()|| !userdept.trim()|| !userNum.trim()){
    alert("please enter the complete information");
    return;
}

let li = document.createElement("li");
li.textContent = "NAME : " + userName + "\n"  + 
"DEPT : " + userdept + "\n" + 
"ROLL.NO : " + userNum;
student.appendChild(li);

let del=document.createElement("button");
del.type="button";
del.innerText = "Delete";


let edit = document.createElement("button");
edit.type="button";
edit.innerText="Edit";



let btnDiv = document.createElement("div");
btnDiv.style.marginTop = "10px";
btnDiv.style.display = "flex";
btnDiv.style.gap = "10px";

btnDiv.appendChild(del);
btnDiv.appendChild(edit);

li.appendChild(btnDiv);



NameInput.value="";
DeptInput.value="";
numberInput.value="";
}

//-1) first when user clcik on add student btn, it should weather 
//all input values are non empty if non empty add to studentlist else pop up a msg called add complete details.

//-2)once the details are added to list the input boxes should be clear and student list hve details and counter++
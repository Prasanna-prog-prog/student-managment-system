const NameInput=document.getElementById("name");
const DeptInput=document.getElementById("dept");
const numberInput=document.getElementById("roll.no");
const button=document.getElementById("addbtn");
const student = document.getElementById("studentContainer");


let total = 0;
function updateTotal(){
    document.getElementById("Total").innerHTML = "Total : " + total;
}


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

li.style.display = "flex";
li.style.alignItems = "center";
li.style.gap = "10px";

let del=document.createElement("button");
del.type="button";
del.innerText = "Delete"

li.appendChild(del);
del.onclick = function(){
    li.remove();
    total--;
    updateTotal();
};

total++;
updateTotal();

let editLi = null;

let edit = document.createElement("button");
edit.type="button";
edit.innerText="Edit";

li.appendChild(edit);

edit.onclick = function(){
    NameInput.value = userName;
    DeptInput.value = userdept;
    numberInput.value = userNum;

    editLi = li;
    button.innerText = "Update";
}






NameInput.value="";
DeptInput.value="";
numberInput.value="";


}

//-1) first when user clcik on add student btn, it should weather 
//all input values are non empty if non empty add to studentlist else pop up a msg called add complete details.

//-2)once the details are added to list the input boxes should be clear and student list hve details and counter++

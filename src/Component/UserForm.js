import React from "react";



function UserForm() {
  return (
    <div>
      <form>
        <input type={"text"} placeholder={"firstName"} id={"fname"} /> <br></br>
        <input type={"text"} placeholder={"lastName "} id={"lname"} /> <br></br>
        <input type={"text"} placeholder={"Enter age"} id={"age"} /> <br></br>
        <button type="submit" onClick={save()} > save </button>
      </form>
      <table>
        <thead>Details of Users</thead>
        <tbody id="tbody">
          <tr>
            <th id="fname">First Name</th>
            <th id="lname">Last Name</th>
            <th id="age">Age</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

var obj = [];
function save() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let o = { fname, lname, age };
  obj.push(o);
  console.log(obj);
}
function displ() {
  // localStorage.setItem("data2",JSON.stringify(obj));
  // let d=JSON.parse(localStorage.getItem("data2"));

  for (const key in obj) {
    let row = document.createElement("tr");
    let fn = (document.createElement("td").innerHTML = key.fname);
    let ln = (document.createElement("td").innerHTML = key.lname);
    let a = (document.createElement("td").innerHTML = key.age);
    row.appendChild(fn);
    row.appendChild(ln);
    row.appendChild(a);
    document.getElementById("tbody").appendChild(row);
  }
}
export default UserForm;

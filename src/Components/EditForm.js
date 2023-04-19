import React, { useState, useEffect } from "react";
import { departments } from "../Data/Data";

const EditForm = (props) => {
  const initialState = {
    id: null,
    name: "",
    email: "",
    age: props.editing ? props.currentemployee.age : "20",
    phonenumber: "",
    department: props.editing ? props.currentemployee.department : "Sales",
  };
  const [employee, setemployee] = useState(
    props.editing ? props.currentemployee : initialState
  );

  

  useEffect(() => {
    setemployee(props.currentemployee);
  }, [props]);

  const resetAddemployee = () => {
    props.setEditing(false);
    setemployee(initialState);
    props.setCurrentemployee(initialState);
  };

  const ageArray = [];
  for (let i = 20; i <= 60; i++) {
    ageArray.push(i.toString());
  }
 console.log(employee, "employee")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!employee.name || !employee.email) return;

        props.editing
          ? props.updateemployee(employee.id, employee)
          : props.addemployee(employee);
        resetAddemployee();
      }}
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={(e)=>setemployee({...employee, name: e.target.value})}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={(e)=>setemployee({...employee, email: e.target.value})}
        />
      </div>

      <div>
        <label>Age</label>
        <select name="age" id="age" onChange={(e)=>setemployee({...employee, age: e.target.value})}>
          {ageArray.map((el) => (
            <option value={employee.age} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="number"
          name="phonenumber"
          value={employee.phonenumber}
          onChange={(e)=>setemployee({...employee, phonenumber: e.target.value})}
        />
      </div>

      <div>
        <label>Department</label>

        <select name="department" id="department" onChange={(e)=>setemployee({...employee, department: e.target.value})}>
          {departments.map((el) => (
            <option value={employee.department} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>

      <button>{props.editing ? "Update employee" : "Add employee"}</button>
      {props.editing && (
        <button onClick={resetAddemployee} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditForm;

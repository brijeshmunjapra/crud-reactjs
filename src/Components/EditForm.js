import React, { useState, useEffect } from "react";
import { departments } from "../Data/Data";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import "./index.scss";

const EditForm = (props) => {
  const initialState = {
    id: null,
    name: "",
    email: "",
    age: "",
    phonenumber: "",
    department: "",
  };

  const [employee, setemployee] = useState(
    props.editing ? props.currentemployee : initialState
  );

  const [commonError, setCommonError] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phonenumberErr, setPhonenumberErr] = useState(false);

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

  return (
    <form
      className="employee_form"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !employee.name ||
          !employee.email ||
          !employee.age ||
          !employee.phonenumber ||
          !employee.department
        ) {
          setCommonError(true);
          return;
        }

        if (!/^[A-Za-z]+$/.test(employee.name)) {
          setNameErr(true);
          return;
        } else {
          setNameErr(false);
        }

        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employee.email)
        ) {
          setEmailErr(true);
          return;
        } else {
          setEmailErr(false);
        }

        if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            employee.phonenumber
          )
        ) {
          setPhonenumberErr(true);
          return;
        } else {
          setPhonenumberErr(false);
        }

        props.editing
          ? props.updateemployee(employee.id, employee)
          : props.addemployee(employee);
        resetAddemployee();
      }}
    >
      <TextField
        type="name"
        id="name"
        name="name"
        label="Name"
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        value={employee.name}
        onChange={(e) => setemployee({ ...employee, name: e.target.value })}
        error={nameErr}
        helperText={nameErr ? "Please add only text" : ""}
      />
      <TextField
        type="email"
        id="email"
        name="email"
        label="Email"
        sx={{ marginBottom: "10px" }}
        value={employee.email}
        onChange={(e) => setemployee({ ...employee, email: e.target.value })}
        error={emailErr}
        helperText={emailErr ? "Please add valid email id" : ""}
      />

      <TextField
        type="number"
        id="phonenumber"
        name="phonenumber"
        label="Phone Number"
        sx={{ marginBottom: "10px" }}
        value={employee.phonenumber}
        onChange={(e) =>
          setemployee({ ...employee, phonenumber: e.target.value })
        }
        error={phonenumberErr}
        helperText={phonenumberErr ? "Please add 10 digit of valid number" : ""}
      />

      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employee.age}
          label="Age"
          onChange={(e) => setemployee({ ...employee, age: e.target.value })}
          sx={{ marginBottom: "10px" }}
        >
          {ageArray.map((el) => (
            <MenuItem value={el} key={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employee.department}
          label="Department"
          onChange={(e) =>
            setemployee({ ...employee, department: e.target.value })
          }
          sx={{ marginBottom: "10px" }}
        >
          {departments.map((el) => (
            <MenuItem value={el.name} key={el.id}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {commonError ? (
        <div style={{ color: "red", fontSize: "1.2rem" }}>
          All fields are mandatory..!!, Please fill the data
        </div>
      ) : (
        ""
      )}

      <button className="submit-button">
        {props.editing ? "Update employee" : "Add employee"}
      </button>
      {props.editing && (
        <button onClick={resetAddemployee} className="submit-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditForm;

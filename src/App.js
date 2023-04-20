import { useState } from "react";
import EditForm from "./Components/EditForm";
import ListTable from "./Components/ListTable";
import { Divider } from "@mui/material";

function App() {
  const employeesData = [
    {
      id: 1,
      name: "Sam",
      email: "sam@test.com",
      age: "20",
      phonenumber: "7656787656",
      department: "Finance",
    },
    {
      id: 2,
      name: "Siya",
      email: "siya@test.com",
      age: "31",
      phonenumber: "3234442324",
      department: "Sales",
    },
  ];
  const initialState = {
    id: null,
    name: "",
    email: "",
    age: "",
    phonenumber: "",
    department: "",
  };

  const [employees, setemployees] = useState(employeesData);
  const [editing, setEditing] = useState(false);
  const [currentemployee, setCurrentemployee] = useState(initialState);

  const addemployee = (employee) => {
    employee.id = employees.length + 1;
    setemployees([...employees, employee]);
  };

  const deleteemployee = (id) => {
    setEditing(false);
    setemployees(employees.filter((employee) => employee.id !== id));
  };

  const editRow = (employee) => {
    setEditing(true);

    setCurrentemployee(employee);
  };

  const updateemployee = (id, updatedemployee) => {
    console.log(updatedemployee, "updatedemployee");
    setEditing(false);
    setemployees(
      employees.map((employee) =>
        employee.id === id ? updatedemployee : employee
      )
    );
  };

  return (
    <div className="App">
      <h1>CRUD - GVM Technologies task</h1>
      <Divider />
      <div>
        <div>
          <h2>{editing ? "Edit employee" : "Add employee"}</h2>
          <EditForm
            editing={editing}
            setEditing={setEditing}
            currentemployee={currentemployee}
            setCurrentemployee={setCurrentemployee}
            updateemployee={updateemployee}
            addemployee={addemployee}
          />
        </div>
        <Divider sx={{ backgroundColor: "red", marginTop: "20px" }} />

        <div className="table-list">
          <h2>List of employees</h2>
          <ListTable
            employees={employees}
            editRow={editRow}
            deleteemployee={deleteemployee}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

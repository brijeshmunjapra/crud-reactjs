import { useState } from "react";
import EditForm from "./Components/EditForm";
import ListTable from "./Components/ListTable";

function App() {
  const employeesData = [
    { id: 1, name: "Tania", email: "floppydiskette",  age: "20", phonenumber: "765656", department: "Finance", },
    { id: 2, name: "Craig", email: "siliconeidolon",  age: "41", phonenumber: "3234232", department: "Sales", },
    { id: 3, name: "Ben", email: "benisphere",  age: "30", phonenumber: "98965545", department: "Marketing", },
  ];
  const initialState = { id: null, name: "", email: "",  age: "20", phonenumber: "", department: "Sales", };

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
    console.log(updatedemployee, "updatedemployee")
    setEditing(false);
    setemployees(
      employees.map((employee) =>
        employee.id === id ? updatedemployee : employee
      )
    );
  };

  return (
    <div className="App">
      <h1>CRUD Operation</h1>
      <div>
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
        </div>
        <div>
          <h2>View employees</h2>
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

import React from "react";

const ListTable = (props) => (
  <table>
    <thead>
      <tr>
      <th>Id</th>

        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone Number</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      {props.employees.length > 0 ? (
        props.employees.map((employee) => (
          <tr key={employee.id}>
          <td>{employee.id}</td>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.age}</td>
            <td>{employee.phonenumber}</td>
            <td>{employee.department}</td>

            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(employee);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteemployee(employee.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No employees</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ListTable;

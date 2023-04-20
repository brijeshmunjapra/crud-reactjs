import React from "react";
import "./index.scss";

const ListTable = (props) => (
  <div className="table-list">
    {props.employees.length > 0 ? (
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.id}>
              

              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.age}</td>
              <td>{employee.phonenumber}</td>
              <td>{employee.department}</td>

              <td>
                <button
                  className="table-button"
                  onClick={() => {
                    props.editRow(employee);
                  }}
                >
                  Edit
                </button>
                <button
                  className="table-button"
                  onClick={() => props.deleteemployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h3>No data found</h3>
    )}
  </div>
);

export default ListTable;

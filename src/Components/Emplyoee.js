import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Emplyoee extends Component {
    render() {
    const {employees} = this.props;      //passing state as props from parent
  
    return (
            <div><br/>
              <h2>Emplyoee Information</h2><br/>
            <div>
                  <table className = "table table-striped">
                  <thead>
                  <tr>
                    <th>Emp ID</th>
                    <th>Emplyoee Name</th>
                    <th>Base Location</th>
                    <th>Email Address</th>
                    <th>Contact</th>
                    <th>permanent address</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
      
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.uname}</td>
                    <td>{employee.location}</td>
                    <td>{employee.email}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.permanent_add}</td>
                    <td>
                      <Link to={`/view/${employee.id}`}> 
                        <button className = "btn btn-primary" >
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
        </div>
        <Link to={`/form`}> 
         <button className = "btn btn-primary" >
          Add New Emplyoee
          </button>
          </Link>
       
        </div>
      );
    }
  }
  export default Emplyoee
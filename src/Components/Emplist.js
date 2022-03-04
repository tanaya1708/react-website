import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import EmplyoeeService from '../Service/EmplyoeeService';

class Emplist extends Component{
  _isMounted = false;
    constructor(props){
        super(props)

        this.state = {
            emplyoees:[]
        }
        this.AddEmplyoee = this.AddEmplyoee.bind(this);
        this.deleteEmplyoee = this.deleteEmplyoee.bind(this);
        this.viewEmplyoee = this.viewEmplyoee.bind(this);
    }

    componentDidMount(){
      this._isMounted = true;
       EmplyoeeService.fetchEmplyoee().then((res) =>{
           this.setState({emplyoees: res.data})
       });
    }
  
    AddEmplyoee(){
        this.props.history.push(`/`);
    }

    deleteEmplyoee(emp_id){
        EmplyoeeService.deleteEmplyoee(emp_id).then(res =>{
            this.setState({emplyoees : this.state.emplyoees.filter(employee => employee.emp_id !== emp_id)});
            alert("Emplyoee data deleted :)")
        })
    }

    viewEmplyoee(emp_id){
        this.props.history.push(`/view/${emp_id}`);
        console.log(emp_id);
    }
    
    render(){ 
        return (
            <div><br/>
              <h2>Emplyoee Information</h2><br/>
            <div>
                  <table className = "table table-striped">
                  <thead>
                  <tr>
                    <th>Emp ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Base Location</th>
                    <th>Email Address</th>
                    <th>Contact</th>
                    <th>permanent address</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
      
                {this.state.emplyoees.map(
                    employee =>
                  <tr key={employee.emp_id}>
                    <td>{employee.emp_id}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.location}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.permanent_address}</td>
                    <td>
                    <button   onClick={ () => this.viewEmplyoee(employee.emp_id)} className="btn btn-primary"> View </button>
                      <button  style={{marginLeft: "10px"}} onClick={ () => this.deleteEmplyoee(employee.emp_id)} className="btn btn-danger"> Delete </button>
                    </td>

                  </tr>
                )}
                </tbody>
              </table>
        </div>
        <Link to={`/`}> 
         <button className = "btn btn-primary" >
          Add New Emplyoee
          </button>
          </Link>
       
        </div>
      );
    }
}

export default withRouter(Emplist);
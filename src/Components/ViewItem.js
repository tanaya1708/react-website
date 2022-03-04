import React, { Component }  from 'react';
import { withRouter } from "react-router-dom";
import EmplyoeeService from '../Service/EmplyoeeService';

class ViewItem extends Component { 
  constructor(props){
    super(props)

    this.state = {
      emp_id: this.props.match.params.emp_id,
      emplyoee: {
        first_name:'',
        last_name:'',
        location:'',
        email:'',
        phone:'',
        permanent_address:''
      }
      }
  }

 componentDidMount(){
   EmplyoeeService.getEmplyoeeById(this.state.emp_id).then
   (res=>{
     this.setState({emplyoee: res.data});
   })
 }
   
  render(){
     
    return (
      <div><br/>
      <h2>Emplyoee Details</h2><br/>
            <table className = "table table-striped">
              <tbody>
              <tr>
                <th> Emplyoee First Name</th>
                <td>{this.state.emplyoee.first_name}</td>
              </tr>
              <tr>
                <th> Emplyoee Last Name</th>
                <td>{this.state.emplyoee.last_name}</td>
              </tr>
              <tr>
                <th> Emplyoee Location</th>
                <td>{this.state.emplyoee.location}</td>
              </tr>
              <tr>
                <th> Emplyoee Email</th>
                <td>{this.state.emplyoee.email}</td>
              </tr>
              <tr>
                <th> Phone Number</th>
                <td>{this.state.emplyoee.phone}</td>
              </tr>
              <tr>
                <th> permanent address</th>
                <td>{this.state.emplyoee.permanent_address}</td>
              </tr>
              </tbody>
            </table>
      </div>
    );
  };
}
  export default withRouter(ViewItem);


import React,{Component} from "react"
import { Link, withRouter } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Form,Row,Col} from "react-bootstrap";
import EmplyoeeService from "../Service/EmplyoeeService";

class Empform extends Component {
    constructor(props){
        super(props)
        this.state = {  
            emp_id:'',
            first_name:'',
            last_name:'',
            location:'',
            email:'',
            phone:'',
            permanent_address:''
        }
        this.saveEmp = this.saveEmp.bind(this);
    }
    
    componentDidMount(){

        EmplyoeeService.fetchEmplyoee(this.state.emp_id).then((res)=>{
            let emplyoee = res.data;
            this.setState({
                emp_id : emplyoee.emp_id,
                first_name : emplyoee.first_name,
                last_name:emplyoee.last_name,
                location:emplyoee.location,
                email:emplyoee.email,
                phone:emplyoee.phone,
                permanent_address:emplyoee.permanent_address
            });
        });
    }
    saveEmp = (e) => {
        e.preventDefault();
        let emplyoee = {
            emp_id : this.state.emp_id,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            location : this.state.location,
            email : this.state.email,
            phone : this.state.phone,
            permanent_address : this.state.permanent_address
        };
        console.log('emplyoee => '+JSON.stringify(emplyoee));
            EmplyoeeService.addEmplyoee(emplyoee).then(res =>{
                this.props.history.push(`/emp`);
                alert("Details added Successfully!")
        })
    }

    render(){
            return (
                    <div className="maincontainer">
                    <div className="container-fluid">
                    <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2 >Add Emplyoee</h2>
                    <br/>
                    <form onSubmit={this.saveEmp}  >
                    <div className="mb-3">
                            <input type="number"
                            placeholder="Emp-ID"
                            value={this.state.emp_id}
                            onChange={event => this.setState({ emp_id: event.target.value })}
                            required
                            className="form-control" 
                            />
                    </div>
                    
                    <div>
                    <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Control type="text" 
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={event => this.setState({ first_name : event.target.value })}
                            required
                            className="form-control"  />
                            </Form.Group>
                            <Form.Group as={Col} >
                            <Form.Control type="text" 
                            placeholder="lastname"
                            required
                            value={this.state.last_name}
                            onChange={event => this.setState({ last_name : event.target.value })}
                            />
                            </Form.Group>
                    </Row>
                    </div>    
                    <div className="mb-3">
                    <input 
                            placeholder="Base Location"
                            value={this.state.location}
                            onChange={event => this.setState({ location: event.target.value })}
                            required
                            className="form-control" 
                            />
                    
                    </div>
                    <div className="mb-3">
                            <input type="email"
                            placeholder="Email-ID"
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value })}
                            required
                            className="form-control" 
                            />
                    </div>
                    <div className="mb-3">
                            <PhoneInput 
                            placeholder="Contact"
                            country={'in'}
                            value={this.state.phone}
                            onChange={phone => this.setState({ phone })}
                            required
                            className="form-control" 
                            />
                    </div>
                    <div className="mb-3">
                        <textarea
                        placeholder="Enter full Address"
                            value={this.state.permanent_address}
                            onChange={event => this.setState({ permanent_address: event.target.value })}
                            required
                            className="form-control" 
                            />
                    </div>
                        <div className="form-check">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            required
                            label={<>
                            Accept&nbsp;
                            <a href='!#' className='blue-text'>
                            the Terms and Conditions
                            </a>
                        </>}
                        />
                    </div>
                    
                    <div className="d-grid gap-2 mt-2">
                    <button type="submit" className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Submit"  >Submit</button>
                    </div>
                   
                    
                                                                                            
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                        
                    </div>
            
            
        );
    }
}

export default withRouter(Empform);
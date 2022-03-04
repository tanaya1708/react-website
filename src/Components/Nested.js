import React, { Component }  from "react";

class Nested extends Component{
    constructor(props){
        super(props)
        this.state = {
          
            emplyoee : [ //displaying list of object
            {
                id: '01',
                name: 'Tanaya Jadhav',
                email: 'tanayajadhav@gmail.com',
                phone: '202-555-0163'
            },
            {
                id: '02',
                name: 'Priya Saroj',
                email: 'priyasaroj@gmail.com',
                phone: '202-555-0106'
              },
        ],
             
        emplyoee1 : [
            {
                id: '01',
                name: 'Bhargav Jadhav',
                email: 'bhargavjadhav@gmail.com',
                phone: '101-555-0163'
            },
            {
                id: '02',
                name: 'Geeta Jadhav',
                email: 'geetajadhav@gmail.com',
                phone: '409-555-0163'
            },
        ]

        }

    }
    render(){
        const joinList = [this.state.emplyoee, this.state.emplyoee1];
         console.log(this.state.emplyoee, this.state.emplyoee1);
       
        //we are combining two array and showing nested view using data
        return(
           // map for iteration
            <div>
            <ul> 
           
                {joinList.map((nestedItem, i) => (
                  <ul key={i}>
                    <h3> List {i} </h3>
                   
                    {nestedItem.map(data => (
                      <li key={data.id}>
                        <div>{data.id}</div>
                        <div>{data.name}</div>
                        <div>{data.email}</div>
                        <div>{data.phone}</div>
                      </li>
                    ))}
                  </ul>
                ))}
              </ul>       
        </div>

        );
    }
}

export default Nested;
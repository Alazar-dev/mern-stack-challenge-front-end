import React from 'react';

import Button from './styles/button'
import Form from './styles/form'

export class AddEmployee extends React.Component<{}, Istate> {
constructor(props: {}){
    super(props);
    
    this.state = {
        name: '',
        date_of_birth: '',
        gender: '',
        salary: '',
        employee: []
       
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}

    componentDidMount(){
        fetch('/employee')
        .then(res => res.json())
        .then(users => this.setState({ employee }));
    }

    handleNameChange = (e:any) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleDateChange = (e:any) =>{
        this.setState({
            date_of_birth: e.target.value
        })
    }
    handleGenderChange = (e:any) =>{
        this.setState({
            gender: e.target.value
        })
    }
    handleSalaryChange = (e:any) =>{
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e:any) =>{
        alert(`${this.state.name} registered successfully!`);
        console.log(this.state);
        this.setState({
            name: '',
            date_of_birth: '',
            gender: '',
            salary: '',
        });
        e.preventDefault();
    }

   
//  async   handleSubmit(e: any){
//         e.preventDefault();
//        const response = await fetch('https://', {
//             method: 'POST',
//             body: this.setState.name,
//         });
//         if(!response.ok) {
//             console.log("threre is an error")
//         } 
//         this.setState({
//             name: "",
//             employees: [
//                 ...this.state.employees,
//                 this.state.newEmployee
//             ]
//         })
//     }

    render(){
        return (
            <React.Fragment>
                <h1>Employees</h1>
                <ul>
                    {this.state.employee.map(user => 
                        <li key = {employee.id}>{user.name }</li>
                    )}
                </ul>
                <Form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Full name</label>
                        <input type="text"
                            name="name"
                            placeholder= "Your name"
                            value = {this.state.name}
                            onChange={this.handleNameChange} 
                        />
                    </div>
                    <div>
                        <label>Date of birth</label>
                        <input type="date"
                            name="date of birth"
                            placeholder= "Your date of birth"
                            value = { this.state.date_of_birth}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="text"
                            name="gender"
                            placeholder= "Employee gender"
                            value = {this.state.gender}
                            onChange={this.handleGenderChange}
                        />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input type="number"
                            name="salary"
                            placeholder= "Employee salary"
                            value = {this.state.salary}
                            onChange={this.handleSalaryChange}
                        />
                    </div>

                    <Button type="submit">Register</Button>

                </Form>
            </React.Fragment>
        )
           
    }

}

interface Istate{
    name: string;
    date_of_birth: string;
    gender: string;
    salary: string;
    employee: array;
}

export default AddEmployee;
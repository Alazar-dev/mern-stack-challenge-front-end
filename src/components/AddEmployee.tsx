import React from 'react';

import Button from './styles/button'

export class AddEmployee extends React.Component<{}, Istate> {
constructor(props: {}){
    super(props);
    
    this.state = {
        name: '',
        date_of_birth: '',
        gender: '',
        salary: ''
       
    };
    this.handleSubmit = this.handleSubmit.bind(this)
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
            <form onSubmit = {this.handleSubmit}>
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

            </form>
        )
    }

}

interface Istate{
    name: string;
    date_of_birth: string;
    gender: string;
    salary: string;
}

export default AddEmployee;
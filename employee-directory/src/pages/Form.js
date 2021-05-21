import React from "react";
import axios from "axios";

class Form extends React.Component{
    state = {
        employeeData : [],
        empDB: [],
        searchstr: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=15&nat=us")
        .then (employeData => {
            console.log(employeData)
            let data = employeData.data.results;
            let empDB = data.map(element => {
                return({
                name: element.name.last + ", "+element.name.first,
                phone:element.cell,
                city:element.location.city,
                country:element.location.country,
                username:element.login.username,
                pic:element.picture.thumbnail
                })});
                console.log(empDB)
                this.setState({
                    employeeData:empDB,
                    empDB: empDB
                })
                console.log(this.state.employeeData)
        })
    }
    render(){
        return(<main>
            <h1>Employees</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.employeeData.map( (ele,key) =>{
                        return(<tr key={key}>
                            <td>{ele.name}</td>
                            <td>{ele.phone}</td>
                            <td>{ele.city}</td>
                            <td>{ele.country}</td>
                            <td>{ele.username}</td>
                            <td><img src={ele.pic}/></td>

                        </tr>)
                    })}
                </tbody>
            </table>
        </main>)
    }
}

export default Form;
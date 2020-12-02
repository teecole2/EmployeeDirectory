import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import { Component } from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';

class App extends Component {
  state= {
    employee: [],
    filteredEmployee: []
  }
  componentDidMount(){
    this.getEmployee()
  }

  getEmployee=() => {
    Axios.get('https://randomuser.me/api/?results=50').then((data)=>{
      console.log(data.data.results)
      this.setState({employee:data.data.results,filteredEmployee:data.data.results})
    }) 
  }

  render () {
  return (
    <div className="App">
     <Search />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.filteredEmployee.map((employee,i)=>(
            <tr>
              <td>{i+1}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  ) 
}
}

export default App;

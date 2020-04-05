import React, { Component } from "react";
import { employeeData } from "../../action";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.employeeData();
  }
  renderTableData() {
    const { employee } = this.props.employee;
    for (let [key, value] of Object.entries(employee)) {
      return value.map((emp) => {
        return (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.age}</td>
            <td>{emp.gender}</td>
            <td>{emp.phoneNo}</td>
          </tr>
        );
      });
    }
  }

  render() {
    console.log(this.props.employee);
    return (
      <div>
        <h1 id="title">Employee List</h1>
        <table id="emp">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>PHNO</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { employeeData })(Dashboard);

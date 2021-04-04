import React, { useEffect, useState } from "react";
import server from "../server";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AllEmploye = ({ history }) => {
  let [employee, setEmployee] = useState([]);

  // let handleDelete = async (e) => {
  //   try {
  //     await axios.delete(`http://localhost:3005/employees/${id}`, employee);
  //     toast.success("Deleted");
  //     history.push("/all-employee");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await server.get(`http://localhost:3005/employees`);
        // console.log(res.data);
        setEmployee(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [employee]);

  let renderEmployee = employee.map((emp) => (
    <tr key={emp.id}>
      <td>
        <img src={emp.emp_photo} alt="" />
      </td>
      <td>{emp.id}</td>
      <td>{emp.emp_name}</td>
      <td>{emp.emp_education}</td>
      <td>{emp.emp_designation}</td>
      <td>
        <Link to={`/edit-employee/${emp.id}`}>
          <button>Update</button>
        </Link>
        <button>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h1 className="head">All Employees </h1>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Id</th>
            <th>Name</th>
            <th>Education</th>
            <th>Designation</th>
          </tr>
        </thead>

        <tbody>{renderEmployee}</tbody>
      </table>
    </div>
  );
};

export default withRouter(AllEmploye);

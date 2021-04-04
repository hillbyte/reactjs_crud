import React, { useState, useEffect, Fragment } from "react";
import server from "../server";
import axios from "axios";
import { withRouter, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import faker from "faker/locale/en_IND";

const EditEmploye = ({ history }) => {
  let { id } = useParams();
  let [Employee, setEmployee] = useState({
    emp_photo: faker.random.image(),
    emp_name: "",
    emp_education: "",
    emp_designation: "",
  });

  useEffect(() => {
    server
      .get(`http://localhost:3005/employees/${id}`)
      .then((response) => {
        setEmployee({
          emp_photo: response.data.emp_photo,
          emp_name: response.data.emp_name,
          emp_education: response.data.emp_education,
          emp_designation: response.data.emp_designation,
          id: response.data.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);
  let handleChange = (e) => {
    setEmployee({ ...Employee, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3005/employees/${id}`, Employee);
      toast.success("successfully employee updated");
      history.push("/all-employee");
    } catch (err) {
      console.log(err);
    }
  };
  // var handleDelete = async () => {
  //   try {
  //     let resd = await server.delete(`http://localhost:3005/employees${id}`);
  //     setEmployee(resd.data);
  //     toast.success("Profile Deleted");
  //     history.push("/all-employee");
  //   } catch (error) {}
  // };
  // handleDelete();
  // useEffect(() => {
  // let handleDelete = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3005/employees/${id}`, Employee);
  //     toast.success("Profile  Deleted");
  //     history.push("/all-employee");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // };
  //   async function handleDelete() {
  //     await axios.delete(`http://localhost:3005/employees/${id}`, Employee);
  //     toast.success("Profile  Deleted");
  //     history.push("/all-employee");
  //   }
  //   handleDelete();
  // }, []);

  let { emp_photo, emp_name, emp_education, emp_designation } = Employee;
  return (
    <Fragment>
      <section id="employeeBlock">
        <article>
          <h3>Update Employee</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="emp_name"
                value={emp_name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor=""> Education:</label>
              <input
                type="text"
                name="emp_education"
                value={emp_education}
                onChange={handleChange}
                placeholder="Enter Education"
              />
            </div>
            <div>
              <label htmlFor="">Designation:</label>
              <input
                type="text"
                name="emp_designation"
                value={emp_designation}
                onChange={handleChange}
                placeholder="Enter Designation"
              />
            </div>
            <div className="btn">
              <button type="submit"> Update Profile</button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(EditEmploye);

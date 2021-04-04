import React, { Fragment, useState } from "react";
import faker from "faker/locale/en_IND";
import server from "../server";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
const CreateEmploye = ({ history }) => {
  let [employee, setEmployee] = useState({
    emp_photo: faker.random.image(),
    emp_name: "",
    emp_education: "",
    emp_designation: "",
  });
  let handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await server.post(server.baseURL, employee);
      toast.success("Successfully User Created");
      history.push("/");
      console.log(res);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  let { emp_photo, emp_name, emp_education, emp_designation } = employee;
  return (
    <Fragment>
      <section id="employeeBlock">
        <article>
          <h3>Create Employee</h3>
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
              <button type="submit"> Create Profile</button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(CreateEmploye);

import React from "react";
import DashboardContainer from "./DashboardContainer";
import FormElem from "./FormElem";
import FormSelectElem from "./FormSelectElem";
import Alert from "./Alert";
import useAppContext from "../store/appContext";

const SearchBar = ({ values, handleFormSubmit, handleFormChange }) => {
  const { showAlert } = useAppContext();

  return (
    <div className="mainContainer">
      <header className="mainTitle">
        <h1>All Jobs</h1>
        <p>Get all job application details</p>
      </header>
      <DashboardContainer>
        {showAlert && <Alert />}
        <form onSubmit={handleFormSubmit}>
          <h3 className="formTitle">Search for jobs based on your need</h3>
          <div className="formItems">
            <FormElem
              type="text"
              name={"search"}
              value={values.search}
              onChange={handleFormChange}
            />
            <FormSelectElem
              options={values.jobStatusOptions}
              name={"jobStatus"}
              onChange={handleFormChange}
              value={values.jobStatus}
            />
            <FormSelectElem
              options={values.jobTypeOptions}
              name={"jobType"}
              labelText="Job Type"
              onChange={handleFormChange}
              value={values.jobType}
            />
            <FormSelectElem
              options={values.sortOptions}
              name={"sort"}
              onChange={handleFormChange}
              value={values.sort}
            />
            <div className="buttonDiv">
              <button className="btn submitBtn" type="submit">
                Clear Filters
              </button>
            </div>
          </div>
        </form>
      </DashboardContainer>
    </div>
  );
};

export default SearchBar;

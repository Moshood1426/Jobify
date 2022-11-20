import React from "react";
import Wrapper from "../../assets/wrappers/AddJob";
import { DashboardContainer } from "../../components";
import { FormElem, FormSelectElem, FormCheckbox } from "../../components";
import useAppContext from "../../store/appContext";
import { Alert } from "../../components";

const AddJob = () => {
  const {
    isLoading,
    editJob,
    showAlert,
    invalidInput,
    company,
    position,
    jobType,
    status,
    jobLocation,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearAddJobInput,
    addNewJob,
    editExistingJob,
    isJobPriority,
  } = useAppContext();

  const handleFormChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    handleChange(name, value, type, checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!company || !position) {
      invalidInput();
      return;
    }
    const reqObj = { company, position, jobLocation, jobType, status, isJobPriority };
    if (!editJob) {
      addNewJob(reqObj);
    } else {
      editExistingJob(reqObj);
    }
  };

  return (
    <Wrapper>
      <header className="mainTitle">
        <h1>{editJob ? "Edit" : "Add"} Job</h1>
        <p>
          {editJob
            ? "Edit existing job application details"
            : "Add a new job application details"}
        </p>
      </header>
      <DashboardContainer>
        {showAlert && <Alert />}
        <form onSubmit={handleFormSubmit}>
          <h3 className="formTitle">
            Kindly fill the form below to{" "}
            {editJob ? "edit this job" : "add a new job"}
          </h3>
          <div className="formItems">
            <FormElem
              type="text"
              name={"company"}
              value={company}
              onChange={handleFormChange}
            />
            <FormElem
              type="text"
              name={"position"}
              value={position}
              onChange={handleFormChange}
            />
            <FormElem
              type="text"
              name={"jobLocation"}
              labelText="Job location"
              value={jobLocation}
              onChange={handleFormChange}
            />
            <FormSelectElem
              options={statusOptions}
              name={"status"}
              onChange={handleFormChange}
              value={status}
            />
            <FormSelectElem
              options={jobTypeOptions}
              name={"jobType"}
              labelText="Job Type"
              onChange={handleFormChange}
              value={jobType}
            />
            <FormCheckbox
              name="isJobPriority"
              labelText="Select to set job as priority"
              checked={isJobPriority}
              onChange={handleFormChange}
            />
            <div className="buttonDiv">
              <button
                className="btn submitBtn"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
            <div className="buttonDiv">
              <button
                type="button"
                className="btn cancelBtn"
                onClick={clearAddJobInput}
                disabled={isLoading}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </DashboardContainer>
    </Wrapper>
  );
};

export default AddJob;

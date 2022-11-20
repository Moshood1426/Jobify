import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/AllJobs";
import useAppContext from "../../store/appContext";
import JobsContainer from "../../components/JobsContainer";
import { SearchBar } from "../../components";

const initialState = {
  search: "",
  jobStatusOptions: ["all", "interview", "declined", "pending"],
  jobTypeOptions: ["all", "full-time", "part-time", "remote", "internship"],
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  jobStatus: "all",
  jobType: "all",
  sort: "latest",
};

const AllJobs = () => {
  const [values, setValues] = useState(initialState);
  const { getAllJobs, allJobs, allJobsCount } = useAppContext();

  useEffect(() => {
    const { search, jobStatus, jobType, sort } = values;
    const searchKeyword = search.toLowerCase();
    getAllJobs(searchKeyword, jobStatus, jobType, sort);
    // eslint-disable-next-line
  }, [values]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setValues(initialState);
  };

  const handleFormChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <SearchBar
        values={values}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
      <JobsContainer
        getAllJobs={getAllJobs}
        allJobs={allJobs}
        allJobsCount={allJobsCount}
      />
    </Wrapper>
  );
};

export default AllJobs;

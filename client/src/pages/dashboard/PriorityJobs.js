import React from "react";
import useAppContext from "../../store/appContext";
import JobsContainer from "../../components/JobsContainer";

const PriorityJobs = () => {
    const { getPriorityJobs, priorityJobs, priorityJobsCount } = useAppContext()
  return (
    <div>
      <header className="priorityJobsTitle">
        <h1>Priority Jobs</h1>
        <p>List contains high priority jobs</p>
      </header>
      <JobsContainer
        getAllJobs={getPriorityJobs}
        allJobs={priorityJobs}
        allJobsCount={priorityJobsCount}
      />
    </div>
  );
};

export default PriorityJobs;

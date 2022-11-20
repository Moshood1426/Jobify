import useAppContext from "../store/appContext";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
// import PageBtnContaiener from "./PageBtnContaiener";
import Loading from "./Loading";

const JobsContainer = ({ getAllJobs, allJobs, allJobsCount }) => {
  const { isLoading } = useAppContext();

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (allJobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5 className="headTitle">
        {allJobsCount} job{allJobsCount > 1 && "s"} found
      </h5>
      <div className="jobs">
        {allJobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;

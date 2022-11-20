import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useAppContext } from "../store/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import useAppContext from "../store/appContext";
import { MdLowPriority } from "react-icons/md";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
  isJobPriority,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
          {isJobPriority && (
            <JobInfo
              icon={<MdLowPriority />}
              text={"Priority Job"}
            />
          )}
        </div>

        <footer>
          <div>
            <Link
              to="/add-job"
              onClick={() => setEditJob(_id)}
              className="footerBtn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="footerBtn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;

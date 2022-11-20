import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import useAppContext from "../store/appContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart((item) => !item)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {data.length === 0 ? (
        <p>
          No applications in recent months. Click{" "}
          <Link to="add-job" className="navToAddJob">
            here
          </Link>{" "}
          to add new job
        </p>
      ) : barChart ? (
        <BarChart data={data} />
      ) : (
        <AreaChart data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;

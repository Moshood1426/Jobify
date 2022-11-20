import React, { useEffect } from "react";
import { StatusStats } from "../../components";
import Loading from "../../components/Loading";
import useAppContext from "../../store/appContext";
import { ChartsContainer } from "../../components";

const Stats = () => {
  const { isLoading, showStats, statusStats } =
    useAppContext();

  useEffect(() => {
    showStats();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="mainContainer">
        <header className="mainTitle">
          <h1>Dashboard</h1>
          <p>Welcome User!!</p>
        </header>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <StatusStats statusStats={statusStats} />
            <ChartsContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Stats;

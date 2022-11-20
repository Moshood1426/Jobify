import React from "react";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import StatsItem from "./StatsItem";
import Wrapper from "../assets/wrappers/StatusStats";

const StatusStats = ({ statusStats }) => {
  const defaultStats = [
    {
      title: "pending applications",
      count: statusStats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: statusStats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: statusStats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatusStats;

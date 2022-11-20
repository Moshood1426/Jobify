import React from "react";
import {
  BarChart as BarCharts,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarCharts data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
        </BarCharts>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;

import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const ChartExample = () => {
    const [options] = useState({
      // Data: Data to be displayed in the chart
      data: [
        { month: "Jan", avgTemp: 2.3, Account: 950 },
        { month: "Feb", avgTemp: 2.3, Account: 450 },
        { month: "Mar", avgTemp: 6.3, Account: 550 },
        { month: "Aug", avgTemp: 2.3, Account: 1240 },
        { month: "Apr", avgTemp: 2.3, Account: 200 },
        { month: "May", avgTemp: 2.3, Account: 400 },
        { month: "Jun", avgTemp: 16.2, Account: 650 },
        { month: "Jul", avgTemp: 22.8, Account: 770 },
        { month: "Aug", avgTemp: 14.5, Account: 950 },
        { month: "Sep", avgTemp: 8.9, Account: 890 },
        { month: "Oct", avgTemp: 2.3, Account: 560 },
        { month: "Nov", avgTemp: 2.3, Account: 770 },
        { month: "Dec", avgTemp: 2.3, Account: 650 },
      ],
      series: [
        {
          type: "bar",
          xKey: "month",
          yKey: "Account",
          fill: "#6A4C93", // Bar color
          strokeWidth: 2,
        },
      ],
    });
  
    return <AgCharts options={options} />;
  };
  
export default ChartExample
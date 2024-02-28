import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveLineChart } from "../../components/dashboard/ResponsiveLineChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import {
  Online_Store_Session,
  Net_Return_Value,
  Total_Orders,
  Conversion_Rate,
  Totoal_Online_Store,
  Totoal_Total_Order,
  Total_Conversion_Rate,
  Total_Return_Value,
} from "../../utils/constant";

console.log(Totoal_Online_Store,"total")

export const Dashboard: React.FC = () => {
  const tabs = [
    {
      id: 1,
      label: "Online store sessions",
      total:  Totoal_Online_Store ,
      content: (
        <ResponsiveLineChart
          kpi="Online store sessions"
          data={Online_Store_Session}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 2,
      label: "Net return value",
      total: Total_Return_Value ,
      content: (
        <ResponsiveLineChart
          kpi="Net return value"
          data={Net_Return_Value}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Total orders",
      total: Totoal_Total_Order ,
      content: (
        <ResponsiveLineChart
          kpi="Total orders"
          data={Total_Orders}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Conversion rate",
      total: Total_Conversion_Rate ,
      content: (
        <ResponsiveLineChart
          kpi="Conversion rate"
          data={Conversion_Rate}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <TabView tabs={tabs} />
    </>
  );
};

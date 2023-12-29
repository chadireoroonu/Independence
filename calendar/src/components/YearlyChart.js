import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import styled from 'styled-components';

function YearlyChart() {
  const [data, setData] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        // 데이터를 가져온 후, 월별 사건 수 계산
        const monthlyCount = data.map(monthData => {
          let count = 0;
          for (let day in monthData.days) {
            count += monthData.days[day].length;
          }
          return { month: monthData.month, count: count };
        });
        setMonthlyData(monthlyCount);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (monthlyData) {
      console.log(monthlyData);
    }
  }, [monthlyData]);

  return (
    <YearlyChartContainer>
      <ChartTitle>월별 사건 수</ChartTitle>
      {monthlyData && 
        <VictoryChart domainPadding={20}>
          <VictoryAxis 
            tickValues={monthlyData.map(data => data.month)}
            style={{ 
              tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'}
            }}
          />
          <VictoryAxis 
            dependentAxis
            style={{ 
              tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'}
            }}
          />
          <VictoryBar
            data={monthlyData}
            x="month"
            y="count"
            style={{
              data: { fill: "#A59D9D" },
              labels: { fill: "#A59D9D" }
            }}
          />
        </VictoryChart>
      }
    </YearlyChartContainer>
  );
}

const YearlyChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ChartTitle = styled.h3`
  font-family: Arial, sans-serif;
  margin-bottom: -1em;
`;

export default YearlyChart;

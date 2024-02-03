import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import styled from 'styled-components';

function MonthlyChart({ data }) {

  const labels = [...Array(Object.keys(data[0].days).length).keys()];

  const dataset = labels.map(i => data[0].days[Object.keys(data[0].days)[i]].length);

  const chartData = dataset.map((item, index) => ({
    x: labels[index] + 1, 
    y: item
  }));

  return (
    <MonthlyChartContainer>
      <ChartTitle>{`이번 달의 사건 수`}</ChartTitle>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={labels.map(label => label + 1)}
          style={{ 
            tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'}
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
          style={{ 
            tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'}
          }}
        />
        <VictoryBar
          data={chartData}
          style={{
            data: { fill: "#221E1E" },
            labels: { fill: "#221E1E" }
          }}
        />
      </VictoryChart>
    </MonthlyChartContainer>
  );
}

const MonthlyChartContainer = styled.div`
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

export default MonthlyChart;

import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import styled from 'styled-components';

function DataCharts({ data }) {

  if (!data || !data[0] || !data[0].days) {
    return null;
  }

  const labels = [...Array(Object.keys(data[0].days).length).keys()];

  const dataset = labels.map(i => data[0].days[Object.keys(data[0].days)[i]].length);

  const chartData = dataset.map((item, index) => ({
    x: labels[index] + 1, 
    y: item
  }));

  return (
    <ChartsContainer>
      <ChartTitle>{`${data[0].month}월의 사건 수`}</ChartTitle>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={labels.map(label => label + 1)}
          style={{ 
            tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'} // tickLabels의 글꼴을 Arial로 설정합니다.
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
          style={{ 
            tickLabels: {fontSize: 8, fontFamily: 'Arial, sans-serif'} // tickLabels의 글꼴을 Arial로 설정합니다.
          }}
        />
        <VictoryBar
          data={chartData}
          style={{
            data: { fill: "#A59D9D" },
            labels: { fill: "#A59D9D" }
          }}
        />
      </VictoryChart>
    </ChartsContainer>
  );
}

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ChartTitle = styled.h2`
  font-family: Arial, sans-serif;
  margin-bottom: -2.5em;
`;

export default DataCharts;

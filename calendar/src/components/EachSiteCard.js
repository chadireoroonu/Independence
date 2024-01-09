import React from 'react';
import styled from 'styled-components';

function EachSiteCard({ site }) {
  
  const handleOnClick = () => {
    window.open(site.url, "_blank");
  }

  return (
    site &&
    <EachCardContainer onClick={handleOnClick}>
      <h3>{site.name}</h3>
      <h5>{site.url}</h5>
    </EachCardContainer>
  );
}

const EachCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 1em 0;
`;
  
export default EachSiteCard;
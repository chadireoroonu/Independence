import React from 'react';
import styled from 'styled-components';

function EachSiteCard({ site }) {
  
  const handleOnClick = () => {
    window.open(site.url, "_blank");
  }

  return (
    site.name &&
    <EachCardContainer onClick={handleOnClick}>
      <h3>{site.name}</h3>
      <h5>{site.url}</h5>
    </EachCardContainer>
  );
}

const EachCardContainer = styled.div`
  box-sizing: border-box;
  width: calc(50% - 2em);
  color: #221E1E;
  border: 0.15em solid #A59D9D;
  color: #000;
  text-decoration: none;
  text-align: center;
  padding: 1em;
  margin: 1em;

  &:hover {
    transform: scale(1.05);
  }
`;
  
export default EachSiteCard;
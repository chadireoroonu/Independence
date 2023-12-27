import React from 'react';
import styled from 'styled-components';

function DateModal({ date, closeModal }) {
  return (
    <ModalContent>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
    </ModalContent>
  );
}

const ModalContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const DateText = styled.h3`
  text-align: center;
`;

export default DateModal;

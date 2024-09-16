import React from "react";
import styled from "styled-components";

const ChoiceContainer = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const Choice = ({ selectedSticker }) => {
  return (
    <ChoiceContainer>
      {selectedSticker
        ? `You chose: ${selectedSticker}`
        : "No sticker selected"}
    </ChoiceContainer>
  );
};

export default Choice;

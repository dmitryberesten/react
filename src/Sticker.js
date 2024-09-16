import React from "react";
import styled from "styled-components";

const StickerContainer = styled.div`
  cursor: pointer;
  margin: 10px;
  img {
    width: 100px;
    height: 100px;
  }
`;

const Sticker = ({ img, label, onClick }) => {
  return (
    <StickerContainer onClick={() => onClick(label)}>
      <img src={img} alt={label} />
      <p>{label}</p>
    </StickerContainer>
  );
};

export default Sticker;

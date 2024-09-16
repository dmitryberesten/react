import React from "react";
import Sticker from "./Sticker";
import stickersData from "./stickers.json";
import styled from "styled-components";

const StickerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StickerList = ({ onStickerClick }) => {
  return (
    <StickerListContainer>
      {stickersData.map((sticker, index) => (
        <Sticker
          key={index}
          img={sticker.img}
          label={sticker.label}
          onClick={onStickerClick}
        />
      ))}
    </StickerListContainer>
  );
};

export default StickerList;

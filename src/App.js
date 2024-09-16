import React, { useState } from "react";
import StickerList from "./StickerList";
import Choice from "./Choice";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const App = () => {
  const [selectedSticker, setSelectedSticker] = useState("");

  const handleStickerClick = (label) => {
    setSelectedSticker(label);
  };

  return (
    <AppContainer>
      <h1>Sticker Pack</h1>
      <StickerList onStickerClick={handleStickerClick} />
      <Choice selectedSticker={selectedSticker} />
    </AppContainer>
  );
};

export default App;

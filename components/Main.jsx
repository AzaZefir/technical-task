import React from "react";
import SwiperSlider from "./Slider";
import Chips, {
  WhiteBreezorChips,
  WhiteChipsBeach,
  WhiteEmotionsChips,
  WhiteRoutsChips,
} from "./Chips";
import { InputBeach } from "./Inputs";
import Buttons, { BlueButtons } from "./Buttons";

function Main() {
  return (
    <div>
      <div className="bg_image">
        <SwiperSlider />
      </div>
      <div className="main_block" />
      <WhiteChipsBeach />
      <WhiteBreezorChips />
      <WhiteEmotionsChips />
      <WhiteRoutsChips />
      <InputBeach />
      <Buttons />
      <BlueButtons />
    </div>
  );
}

export default Main;

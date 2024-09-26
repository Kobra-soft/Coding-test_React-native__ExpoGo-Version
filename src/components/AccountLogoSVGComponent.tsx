import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect, Circle } from "react-native-svg";

interface Props {
  width: number;
  height: number;
  fill: string;
}

const AccountLogoSVGComponent: React.FC<Props> = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 29 29" fill="none">
      <Circle
        cx="14.4414"
        cy="14.7335"
        r="13.25"
        fill="url(#pattern0_1_32)"
        stroke="#3361BA"
        stroke-width="1.5"
      />
      <Defs></Defs>
    </Svg>
  );
};

export default AccountLogoSVGComponent;

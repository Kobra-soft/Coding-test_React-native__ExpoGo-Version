import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width: number;
  height: number;
  fill: string;
}

const Media2LogoSVGComponent: React.FC<Props> = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 23" fill="none">
      <Path
        d="M0.936523 2.08885L3.01953 0.58429L16.715 9.41885L17.9109 10.229L16.715 12.428L3.94533 20.8382H2.32502L1.32197 20.2981V18.4077L0.936523 2.08885Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.3"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

export default Media2LogoSVGComponent;

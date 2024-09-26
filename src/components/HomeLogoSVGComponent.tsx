import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width: number;
  height: number;
  fill: string;
}

const HomeLogoSVGComponent: React.FC<Props> = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 21" fill="none">
      <Path
        d="M0.441406 11.7722L12.6299 0.732971L24.4414 11.5677H21.8662V20.733H3.04991V11.7722H0.441406Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HomeLogoSVGComponent;
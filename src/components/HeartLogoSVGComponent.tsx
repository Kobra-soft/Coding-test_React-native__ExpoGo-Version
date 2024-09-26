import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const HeartLogoSVGComponent: React.FC = () => {
  return (
    <Svg width="31" height="27" viewBox="0 0 31 27" fill="none">
      <G filter="url(#filter0_d_1_453)">
        <Path
          d="M28.8545 8.00106C28.8545 8.73819 28.735 9.46999 28.4885 10.2218C27.3403 15.3271 17.551 21.8301 15.8595 22.9205C14.1668 21.8295 4.36463 15.3237 3.20903 10.1778C2.97401 9.46999 2.85449 8.73752 2.85449 8.00106C2.85449 5.42511 4.26995 3.04875 6.54825 1.80003C7.60447 1.22456 8.79566 0.920532 9.99222 0.920532C12.1255 0.920532 14.1332 1.85591 15.5016 3.48584L15.8602 3.91361L16.2181 3.48384C17.5772 1.85524 19.5788 0.920532 21.7121 0.920532C22.9335 0.920532 24.0924 1.21591 25.1594 1.7987C27.439 3.05341 28.8545 5.43044 28.8545 8.00106Z"
          fill="#E84335"
        />
      </G>
      {/* <Defs>
    <Filter
      id="filter0_d_1_453"
      x="0.854492"
      y="0.920532"
      width="30"
      height="26"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <FeFlood flood-opacity="0" result="BackgroundImageFix" />
      <FeColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <FeOffset dy="2" />
      <FeGaussianBlur stdDeviation="1" />
      <FeComposite in2="hardAlpha" operator="out" />
      <FeColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <FeBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1_453"
      />
      <FeBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1_453"
        result="shape"
      />
    </Filter>
  </Defs> */}
    </Svg>
  );
};

export default HeartLogoSVGComponent;

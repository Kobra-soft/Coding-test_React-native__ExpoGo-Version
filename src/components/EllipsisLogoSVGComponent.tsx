import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect, Circle } from "react-native-svg";

const EllipsisLogoSVGComponent: React.FC = () => {
  return (
    <Svg width="20" height="8" viewBox="0 0 20 8" fill="none">
      <G filter="url(#filter0_d_1_460)">
        <Circle cx="3.8282" cy="1.59626" r="1.51228" fill="white" />
        <Circle cx="9.85475" cy="1.59626" r="1.51228" fill="white" />
        <Circle cx="15.8813" cy="1.59626" r="1.51228" fill="white" />
      </G>
{/*       <defs>
        <filter
          id="filter0_d_1_460"
          x="0.315918"
          y="0.0839844"
          width="19.0776"
          height="7.02455"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_460"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_460"
            result="shape"
          />
        </filter>
      </defs> */}
    </Svg>
  );
};

export default EllipsisLogoSVGComponent;

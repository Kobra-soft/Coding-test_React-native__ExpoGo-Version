import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const PlayLogoSVGComponent: React.FC = () => {
  return (
    <Svg width="14" height="17" viewBox="0 0 14 17" fill="none">
      <Path
        d="M2.16346 16.141C1.85853 16.141 1.55361 16.0733 1.26532 15.938C0.605573 15.6206 0.195312 14.991 0.195312 14.2989V2.33579C0.195312 1.63851 0.605573 1.00887 1.26532 0.691449C1.92506 0.374028 2.70677 0.431268 3.31108 0.83715L12.1483 6.81611C12.6695 7.16475 12.9633 7.71113 12.9633 8.30954C12.9633 8.90796 12.6639 9.45434 12.1483 9.80298L3.31108 15.7871C2.96734 16.0161 2.56817 16.1358 2.16346 16.1358V16.141ZM2.16346 1.26905C1.98605 1.26905 1.80864 1.31068 1.64231 1.38873C1.25423 1.57606 1.02692 1.92991 1.02692 2.33579V14.2989C1.02692 14.7048 1.25977 15.0586 1.64231 15.246C2.0304 15.4333 2.46838 15.4021 2.8232 15.1627L11.6604 9.17855C11.9598 8.97561 12.1317 8.66339 12.1317 8.31475C12.1317 7.96611 11.9598 7.65389 11.6604 7.45095L2.8232 1.47199C2.62361 1.3367 2.39631 1.26905 2.16346 1.26905Z"
        fill="#0A0C0B"
        stroke="#0A0C0B"
        stroke-width="0.3"
        stroke-miterlimit="10"
      />
      <Path
        d="M0.777344 14.0908V1.77175L2.47282 1.03711L7.89775 4.71024L12.249 7.47922L11.7969 9.45706L5.41132 13.6953L1.90772 15.5036H1.17309L0.777344 14.0908Z"
        fill="#0A0C0B"
      />
    </Svg>
  );
};

export default PlayLogoSVGComponent;
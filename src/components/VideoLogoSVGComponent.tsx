/* import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const VideoLogoSVGComponent: React.FC = () => {
  return (
    <Svg width="22" height="13" viewBox="0 0 22 13" fill="none">
      <G clip-path="url(#clip0_1_101)">
        <Path
          d="M21.8629 11.1052C21.8447 12.0242 21.1181 12.3316 20.4157 11.8244C19.1047 10.8931 17.8058 9.94944 16.4978 9.01501C16.4978 9.44841 16.4978 10.4689 16.4978 10.9115C16.4978 11.7353 16.0952 12.1349 15.2656 12.1349H8.2141C7.01817 12.1349 5.83434 12.1349 4.63841 12.1349C2.37976 12.1349 0.868945 10.6318 0.868945 8.39718V1.35825C0.875 0.525257 1.25649 0.134888 2.09213 0.134888C4.96237 0.190216 9.97318 0.141035 12.7859 0.134888C14.7811 0.134888 16.2193 1.39513 16.4615 3.25784C17.7816 2.31419 19.0956 1.35825 20.4187 0.417675C21.0303 -0.0310959 21.8326 0.113371 21.8629 1.13694C21.872 4.35517 21.8811 7.87464 21.8629 11.1021V11.1052Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_101">
          <Rect
            width="21"
            height="12"
            fill="white"
            transform="translate(0.875 0.134888)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default VideoLogoSVGComponent; */

import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const VideoLogoSVGComponent: React.FC<{ style?: object }> = (props) => {
  return (
    <Svg width="22" height="13" viewBox="0 0 22 13" fill="none" {...props}>
      <G clipPath="url(#clip0_1_101)">
        <Path
          d="M21.8629 11.1052C21.8447 12.0242 21.1181 12.3316 20.4157 11.8244C19.1047 10.8931 17.8058 9.94944 16.4978 9.01501C16.4978 9.44841 16.4978 10.4689 16.4978 10.9115C16.4978 11.7353 16.0952 12.1349 15.2656 12.1349H8.2141C7.01817 12.1349 5.83434 12.1349 4.63841 12.1349C2.37976 12.1349 0.868945 10.6318 0.868945 8.39718V1.35825C0.875 0.525257 1.25649 0.134888 2.09213 0.134888C4.96237 0.190216 9.97318 0.141035 12.7859 0.134888C14.7811 0.134888 16.2193 1.39513 16.4615 3.25784C17.7816 2.31419 19.0956 1.35825 20.4187 0.417675C21.0303 -0.0310959 21.8326 0.113371 21.8629 1.13694C21.872 4.35517 21.8811 7.87464 21.8629 11.1021V11.1052Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_101">
          <Rect
            width="21"
            height="12"
            fill="white"
            transform="translate(0.875 0.134888)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default VideoLogoSVGComponent;



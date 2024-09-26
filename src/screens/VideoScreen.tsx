import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import styles from "../css/styles";
import HeartLogoSVGComponent from "../components/HeartLogoSVGComponent";
import Question2LogoSVGComponent from "../components/Question2LogoSVGComponent";
import EllipsisLogoSVGComponent from "../components/EllipsisLogoSVGComponent";
import Video2LogoSVGComponent from "../components/Video2LogoSVGComponent";

type VideoItem = {
  url: string;
};

type RootStackParamList = {
  Media: { videos: VideoItem[]; initialIndex: number };
};

type VideoScreenRouteProp = RouteProp<RootStackParamList, "Media">;

// Font Scaling / Conversion from px to dp
// ----------------------------------------------
// Define a function that converts pixel values to density-independent pixels (dp) using the PixelRatio API from React Native.
// Use PixelRatio.getFontScale(): This method returns the font scale factor of the device, which can be used to adjust the font size.
// Convert px to dp: Use a simple conversion function to convert the pixel value to dp.
// ----------------------------------------------

const pxToDp = (px: number) => {
  const fontScale = PixelRatio.getFontScale();
  return px * fontScale;
};

const VideoScreen: React.FC = () => {
  const route = useRoute<VideoScreenRouteProp>();
  const { videos = [], initialIndex = 0 } = route.params || {};
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    console.log("Initial Index:", initialIndex);
    console.log("Current Index:", currentIndex);
  }, [videos, initialIndex, currentIndex]);

  useEffect(() => {
    setCurrentIndex(initialIndex); // Ensure currentIndex is set to initialIndex on mount
  }, [initialIndex]);

  const handleGesture = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationY > 0) {
        // Swipe down
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else {
        // Swipe up
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, videos.length - 1)
        );
      }
    }
  };

  const handleError = (error: any) => {
    console.error("Video Error:", error);
  };

  useEffect(() => {
    if (videos.length > 0) {
      console.log("Playing video URL:", videos[currentIndex].url);
      videoRef.current?.loadAsync({ uri: videos[currentIndex].url }, {}, false);
    }
  }, [currentIndex, videos]);

  return (
    <View style={Localstyles.container}>
      {/* Transparent HEADER */}
      <View style={Localstyles.transparentHeader}>
        <View style={Localstyles.logoContainer}>
          <Text style={styles.text7}>Media</Text>
        </View>
        <View style={Localstyles.headerIcons}>
          <View style={Localstyles.largeIconContainer}>
            <TouchableOpacity>
              <Video2LogoSVGComponent />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <PanGestureHandler onHandlerStateChange={handleGesture}>
        <View style={Localstyles.videoContainer}>
          {videos.length > 0 ? (
            <Video
              ref={videoRef}
              source={{ uri: videos[currentIndex].url }}
              style={Localstyles.video}
              resizeMode={ResizeMode.COVER}
              shouldPlay
              onError={handleError}
            />
          ) : (
            <Text style={Localstyles.text}>No videos available</Text>
          )}
          {/* Overlay SVG Icons */}
          <View style={Localstyles.overlayIconsContainer}>
            <View style={Localstyles.iconWrapper}>
              <TouchableOpacity>
                <HeartLogoSVGComponent />
              </TouchableOpacity>
              <Text style={Localstyles.text8}>281 k</Text>
            </View>
            <View style={Localstyles.iconWrapper}>
              <TouchableOpacity>
                <Question2LogoSVGComponent />
              </TouchableOpacity>
              <Text style={Localstyles.text8}>281 k</Text>
            </View>
            <View style={Localstyles.iconWrapper}>
              <TouchableOpacity>
                <EllipsisLogoSVGComponent />
              </TouchableOpacity>
              <Text style={Localstyles.text8}></Text>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </View>
  );
};

const Localstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  transparentHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.select({
      ios: 44,
      android: 44,
    }),
    /* Added backgroundColor Transparency for TESTING due to the header icons being white.
    The Media Text / Icons are white if the video has a light background, then the user
    cannot see them without the background transparency. Which is a design flaw and UI/UX issue. */

    // TEMPORARY FIX: Added a background color to the header to make the icons visible.
    /* backgroundColor: "rgba(0, 0, 0, 0.05)",
    paddingBottom: 8, */
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  largeIconContainer: {
    marginLeft: 16,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: pxToDp(20),
    fontFamily: "SFProText-Medium",
  },
  overlayIconsContainer: {
    position: "absolute",
    bottom: 0,
    right: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrapper: {
    marginTop: Platform.select({
      ios: 12,
      android: 20,
    }),
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text8: {
    fontSize: pxToDp(14),
    color: "#ffffff",
    fontFamily: "SFProText-Semibold",
  },
});

export default VideoScreen;

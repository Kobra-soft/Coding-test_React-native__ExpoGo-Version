import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList, BottomTabParamList } from "../types/types"; // Use the imported Video interface
import { Video } from "../types/types";
import styles from "../css/styles";
import EKLogoSVGComponent from "../components/EKLogoSVGComponent";
import SearchLogoSVGComponent from "../components/SearchLogoSVGComponent";
import Question1LogoSVGComponent from "../components/Question1LogoSVGComponent";
import BellLogoSVGComponent from "../components/BellLogoSVGComponent";
import FitnessLogoSVGComponent from "../components/FitnessLogoSVGComponent";
import DiamondLogoSVGComponent from "../components/DiamondLogoSVGComponent";
import ChevronRightLogoSVGComponent from "../components/ChevronRightLogoSVGComponent";
import PlayLogoSVGComponent from "../components/PlayLogoSVGComponent";
import VideoLogoSVGComponent from "../components/VideoLogoSVGComponent";

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "HomeStack">,
  BottomTabNavigationProp<BottomTabParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos")
      .then((response) => response.json())
      .then((data) => {
        const thumbnailUrls = [
          "https://res.cloudinary.com/djqcg7qr9/image/upload/v1727095294/1_h1vlvm.jpg",
          "https://res.cloudinary.com/djqcg7qr9/image/upload/v1727095295/2_miegcr.jpg",
          "https://res.cloudinary.com/djqcg7qr9/image/upload/v1727095295/3_ds1jj3.jpg",
        ];

        const updatedData = data
          .map((video: any, index: number) => ({
            id: video.id,
            likes_count: video.likes_count,
            comments_count: video.comments_count,
            url: video.urls?.hls?.playlist || null,
            thumbnail: thumbnailUrls[index % thumbnailUrls.length],
            urls: video.urls,
          }))
          .filter((video: any) => video.url !== null);

        setVideos(updatedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePress = (initialIndex: number) => {
    console.log("Navigating to Media tab with index:", initialIndex);
    navigation.navigate("Media", { videos, initialIndex });
  };

  const renderItem = ({ item, index }: { item: Video; index: number }) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.videoPreview,
        index === 0 && styles.videoPreviewFirst,
        index === videos.length - 1 && styles.videoPreviewLast,
      ]}
      onPress={() => handlePress(index)}
    >
      {/* Display the thumbnail */}
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.videoThumbnail}
        /* // Error Handling / Debugging
        onError={(error) =>
          console.log("Image Load Error:", error.nativeEvent.error)
        } */
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <EKLogoSVGComponent />
          </View>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <SearchLogoSVGComponent />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Question1LogoSVGComponent />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <BellLogoSVGComponent />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* TITLE TEXT - Hello John, */}
      <View style={styles.text1Container}>
        <Text style={styles.text1}>Hello John,</Text>
      </View>

      {/* SUB TEXT - Please tap below */}
      <View style={styles.text2Container}>
        <Text style={styles.text2}>Please tap below</Text>
      </View>

      {/* BUTTON - SVG / Large font title / Sub-title / Chevron SVG */}
      <TouchableOpacity style={styles.newButtonContainer}>
        <View style={styles.leftSection}>
          <FitnessLogoSVGComponent />
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.text3}>Large font title</Text>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.text4}>Sub-title</Text>
            <DiamondLogoSVGComponent />
          </View>
        </View>
        <View style={styles.rightSection}>
          <ChevronRightLogoSVGComponent />
        </View>
      </TouchableOpacity>

      {/* Divider / Gray */}
      <View style={styles.divider} />

      {/* Play SVG Logo / Media Text */}
      <View style={styles.mediaContainer}>
        <TouchableOpacity>
          <PlayLogoSVGComponent />
        </TouchableOpacity>
        <Text style={styles.text5}>Media</Text>
      </View>

      {/* Horizontal Scrollable <--> Video Previews 
      // (FlatList) for improved rendering, speed & optimisation */}
      <FlatList
        horizontal
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.horizontalScroll}
      />

      {/* Camera SVG / Upload Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <VideoLogoSVGComponent style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

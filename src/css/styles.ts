import { StyleSheet, PixelRatio, Platform } from "react-native";

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

const calculateLetterSpacing = (fontSize: number, percentage: number) => {
  return fontSize * (percentage / 100);
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#FEFEFE",
    flexDirection: "column",
  },

  /* HEADER for Home Screen - Light
    ---------------------------------------------- */
  header: {
    width: "100%",
    height: 110,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end", // Align items at the bottom of the header
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 13,
    paddingTop: Platform.OS === "ios" ? 40 : 20, // Add padding to account for the notch
    borderBottomColor: "#EBECED",
    borderBottomWidth: Platform.select({
      ios: 1,
      android: 0.9,
    }),
  },
  logoContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  /* Scaled down - EK VENTURES Logo */
  logo: {
    transform: [{ scale: 0.74 }],
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  /* TEXT BELOW HEADER */
  /* ---------------------------------------------- */
  text1Container: {
    paddingHorizontal: 16,
    backgroundColor: "#FEFEFE",
    flexDirection: "row",
    justifyContent: "center",
  },

  /* TEXT2 CONTAINER */
  /* ---------------------------------------------- */
  text2Container: {
    paddingHorizontal: 16,
    backgroundColor: "#FEFEFE",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: Platform.select({
      ios: 0,
      android: -6,
    }),
  },

  /* New Button Container
    ---------------------------------------------- */
  newButtonContainer: {
    height: 63.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FEF9EA",
    borderRadius: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F4ED",
    borderTopWidth: 1,
    borderTopColor: "#F5F4ED",
    borderEndWidth: 1,
    borderEndColor: "#F5F4ED",
    marginLeft: 16,
    marginRight: 16,
    paddingRight: 12,
    marginTop: Platform.select({
      ios: 20,
      android: 10,
    }),
    width: "92%",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // Elevation for ANDROID
    elevation: 25,
  },

  leftSection: {
    backgroundColor: "#34A654",
    paddingVertical: Platform.select({
      ios: "4.75%",
      android: "4.96%",
    }),
    paddingHorizontal: 11,
    borderBottomLeftRadius: 11,
    borderTopLeftRadius: 11,
  },

  middleSection: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingRight: 32,
    top: Platform.select({
      ios: 0,
      android: 2,
    }),
  },

  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.select({
      ios: 1.5,
      android: 0,
    }),
    top: Platform.select({
      ios: 2,
      android: -8,
    }),
    gap: 5,
  },

  rightSection: {
    // chevron-right SVG
    transform: [{ scale: 1.15 }],
  },

  /* Divider
    ---------------------------------------------- */
  divider: {
    height: 0.3,
    backgroundColor: "#C9CCD1",
    marginTop: 25,
    marginHorizontal: 16,
  },

  /* Media Container
    ---------------------------------------------- */
  mediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.select({
      ios: 25,
      android: 10,
    }),
    marginBottom: Platform.select({
      ios: 20,
      android: 10,
    }),
    paddingHorizontal: 16,
    gap: 10,
  },

  /* Horizontal Scrollable <--> Video Previews
    ---------------------------------------------- */
  horizontalScroll: {
    marginBottom: 10,
  },
  videoPreview: {
    marginRight: 10,
    width: 208.87,
    height: Platform.select({
      ios: 371.51,
      android: 335.51,
    }),
    backgroundColor: "#e6e6e6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  videoPreviewFirst: {
    marginLeft: 16,
  },
  videoPreviewLast: {
    marginRight: 16,
  },
  videoThumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  videoText: {
    marginTop: 5,
    fontSize: pxToDp(14),
    color: "#000000",
    fontFamily: "SFProText-Regular",
  },

  /* Button Container
    ---------------------------------------------- */
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 16,
  },

  /* Upload Button
    ---------------------------------------------- */
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3361BA",
    height: Platform.select({
      ios: 41.13,
      android: 41.13,
    }),
    paddingHorizontal: 20,
    borderRadius: 6,
    width: "100%",
  },

  buttonIcon: {
    marginRight: 10,
    alignSelf: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: pxToDp(18),
    fontFamily: "SFProText-Medium",
    lineHeight: 19,
  },

  /* FONT WEIGHTS from Figma file:
    ----------------------------------------------
    Regular = 400, 
    Medium = 500, 
    Semibold = 600 */

  /* PIXEL TO DP CONVERSION
    -----------------------------------------------------------------------------------------------------------------------------------
    In React Native, the fontSize property is not explicitly defined in pixels (px)
    but rather in density-independent pixels (dp). This means that the size will scale appropriately across different screen densities.
    However, if you want to ensure that the font size matches the pixel size specified in your Figma design, 
    you can use the PixelRatio API from React Native to convert the pixel value to density-independent pixels. */

  /* Go to Video Screen
    ---------------------------------------------- */
  text: {
    fontSize: 26,
    color: "#0A0C0B",
  },

  /* Hello John,
    ---------------------------------------------- */
  text1: {
    fontSize: pxToDp(26), // Convert 26px to dp
    /* fontWeight: "600", */
    color: "#0A0C0B",
    fontFamily: "SFProText-Semibold",
    letterSpacing: calculateLetterSpacing(pxToDp(26), 4),
    paddingTop: Platform.select({
      ios: 14,
      android: 0,
    }),
  },

  /* Please tap below
    ---------------------------------------------- */
  text2: {
    fontSize: pxToDp(20), // Convert 20px to dp
    color: "#0A0C0B",
    /* fontWeight: "500", */
    fontFamily: "SFProText-Medium",
    paddingTop: Platform.select({
      ios: 14,
      android: 0,
    }),
  },

  /* Large font title
    ---------------------------------------------- */
  text3: {
    fontSize: pxToDp(17), // Convert 17px to dp
    color: "#0A0C0B",
    /* fontWeight: "600", */
    fontFamily: "SFProText-Semibold",
  },

  /* Sub-title
    ---------------------------------------------- */
  text4: {
    fontSize: pxToDp(14), // Convert 14px to dp
    color: "#0A0C0B",
    /* fontWeight: "400", */
    fontFamily: "SFProText-Regular",
  },

  /* Media
    ---------------------------------------------- */
  text5: {
    fontSize: pxToDp(20), // Convert 20px to dp
    color: "#0A0C0B",
    /* fontWeight: "600", */
    fontFamily: "SFProText-Semibold",
    letterSpacing: calculateLetterSpacing(pxToDp(20), 1.8),
  },

  /* Upload
    ---------------------------------------------- */
  text6: {
    fontSize: pxToDp(18), // Convert 18px to dp
    color: "#ffffff",
    /* fontWeight: "500", */
    fontFamily: "SFProText-Medium",
  },

  /* Media (Video Screen)
    ---------------------------------------------- */
  text7: {
    fontSize: pxToDp(23), // Convert 23px to dp
    color: "#ffffff",
    /* fontWeight: "600", */
    fontFamily: "SFProText-Semibold",
    letterSpacing: calculateLetterSpacing(pxToDp(26), 0.2),
  },

  /* 281 k
    ---------------------------------------------- */
  text8: {
    fontSize: pxToDp(14), // Convert 14px to dp
    color: "#ffffff",
    /* fontWeight: "600", */
    fontFamily: "SFProText-Semibold",
  },
});

export default styles;

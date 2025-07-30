import React, { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
  ];

  const ITEM_WIDTH = screenWidth * 0.6;
  const SPACING = 10;

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / (ITEM_WIDTH + SPACING));
    setCurrentIndex(index);
  };

  const renderItem = (item, index) => {
    const isCenter = index === currentIndex;
    return (
      <View
        key={index}
        className={`mr-6 ${isCenter ? "mt-4" : "mt-0"} transition-all duration-75`}
        style={{ width: ITEM_WIDTH }}
      >
        <Image
          source={{ uri: item }}
          className="w-full h-48 rounded-xl"
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderDots = () => {
    return (
      <View className="flex-row justify-center items-center mt-4 space-x-2">
        {images.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${
              index === currentIndex
                ? "bg-primarygreen w-8"
                : "bg-primarygreen w-2"
            }`}
          />
        ))}
      </View>
    );
  };

  return (
    <View className="">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        // contentContainerStyle={{
        //   paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2,
        // }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((item, index) => renderItem(item, index))}
      </ScrollView>

      {renderDots()}
    </View>
  );
};

export default Carousel;

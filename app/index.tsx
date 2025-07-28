import RatingsModal from "@/components/RatingsModal";
import ReviewsModal from "@/components/ReviewsModal";

import { useState } from "react";

import { Button, View } from "react-native";

export default function Home() {
  const [isReviewModalVisible, setIsReviewModalVisible] =
    useState<boolean>(false);
      const [isRatingsModalVisible, setIsRatingsModalVisible] =
    useState<boolean>(false);

  const onOpenReviewModal = () => {
    setIsReviewModalVisible(true);
  };

  const onReviewModalClose = () => {
    setIsReviewModalVisible(false);
  };

    const onOpenRatingsModal = () => {
    setIsRatingsModalVisible(true);
  };

  const onRatingsModalClose = () => {
    setIsRatingsModalVisible(false);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white space-y-4">
      <Button title="View Reviews" onPress={onOpenReviewModal}></Button>
      <Button title="Rate Client" onPress={onOpenRatingsModal}></Button>

      <ReviewsModal
        isVisible={isReviewModalVisible}
        onClose={onReviewModalClose}
      ></ReviewsModal>

      <RatingsModal
        isVisible={isRatingsModalVisible}
        onClose={onRatingsModalClose}
      ></RatingsModal>
    </View>
  );
}

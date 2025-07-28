import { PropsWithChildren, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import closeButton from "../assets/images/Close Button.png";
import starIcon from "../assets/images/Vector.png";
import CompleteOrder from "./CompleteOrder";
import RateClient from "./RateClient";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function RatingsModal({ isVisible, children, onClose }: Props) {
  const [hasrated, setHasRated] = useState<boolean>(false);

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50 px-4 text-">
        <View className=" bg-white rounded-lg  w-full ">
          <View className="flex flex-row rounded-t-lg bg-my-grad px-4 py-4 justify-between ">
            <View className="flex flex-row space-x-2 items-center">
              <Image
                source={starIcon}
                style={{ width: 18, height: 18 }}
              ></Image>
              <Text className="text-white font-normal text-2xl ">Ratings</Text>
            </View>
            <Pressable onPress={onClose}>
              <Image source={closeButton}></Image>
            </Pressable>
          </View>

          <View className=" px-4">
            <View className="w-full pb-12 ">
              {hasrated ? (
                <CompleteOrder></CompleteOrder>
              ) : (
                <RateClient setHasRated={setHasRated}></RateClient>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

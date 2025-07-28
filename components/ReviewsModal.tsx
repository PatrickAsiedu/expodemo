import { PropsWithChildren } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import closeButton from "../assets/images/Close Button.png";
import carPhoto from "../assets/images/resizer-4.png";
import Ellipse from '../assets/images/Group 21.png'
import ModalComponent from '@/components/Reviews';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

const images = [
  "https://source.unsplash.com/random/300x300?nature",
  "https://source.unsplash.com/random/300x300?forest",
  "https://source.unsplash.com/random/300x300?sky",
  "https://source.unsplash.com/random/300x300?water",
  "https://source.unsplash.com/random/300x300?landscape",
];

export default function ReviewsModal({
  isVisible,
  children,
  onClose,
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}

    >
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50 px-4 text-">
        <View className=" bg-white rounded-lg  w-full pb-32">
          <View className="flex flex-row rounded-t-lg bg-my-grad px-4 py-4 justify-between ">
            <Text className="text-white font-normal text-2xl ">Reviews</Text>
            <Pressable onPress={onClose}>
              <Image source={closeButton}></Image>
            </Pressable>
          </View>

          <View className="relative pb-4  mt-5">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="pl-4"
            >
              {images.map((url, index) => (
                <Image
                  key={index}
                  source={carPhoto}
                  className="w-32 h-32 mr-4 rounded-lg"
                  resizeMode="cover"
                />
              ))}
            </ScrollView>
            <Image source={Ellipse} className="absolute bottom-0 left-[40%]"></Image>
          </View>
          <View className="px-8 mt-5">
            <Text className="font-extrabold text-xl">Customer reviews</Text>
            <Text className="leading-[22px] mt-2 opacity-50">
              My first wash on car was fast and I'm beyond delighted. I
              requested a basic based wash on tiny zone. I’m impressed. The fun
              and genuine joy.
            </Text>
            <View className="border-b border-gray-200 mt-5"></View>
            <Text className="leading-[22px] mt-8  opacity-50 font-normal font">
              My first wash on car was fast and I'm beyond delighted. I
              requested a basic based wash on tiny zone. I’m impressed. The fun
              and genuine joy.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

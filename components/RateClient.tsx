import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import userImage from "../assets/images/man.png";
import starIcon from "../assets/images/Vector.png";

type Props = {
  setHasRated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RateClient({ setHasRated }: Props) {
  return (
    <>
      <View className=" flex items-center mt-5">
        <Text className="text-base font-medium">How satisfied are you?</Text>
        <Text className="text-base font-medium">
          Learn your service provider know how they did
        </Text>
      </View>

      <View className="flex-row items-center ">
        <View className="mt-5 flex items-center w-[20%] ">
          <Image source={userImage} className="mt-3 rounded-full "></Image>
          <Text className="mt-2">Michael</Text>
        </View>

        <View className="flex-row  justify-evenly w-[80%]  ">
          <View className="flex space-y-2 items-center">
            <Text>1</Text>
            <Image source={starIcon}></Image>
          </View>
          <View className="flex space-y-2 items-center">
            <Text>2</Text>
            <Image source={starIcon}></Image>
          </View>
          <View className="flex space-y-2 items-center">
            <Text>3</Text>
            <Image source={starIcon}></Image>
          </View>
          <View className="flex space-y-2 items-center">
            <Text>4</Text>
            <Image source={starIcon}></Image>
          </View>
          <View className="flex space-y-2 items-center">
            <Text>5</Text>
            <Image source={starIcon}></Image>
          </View>
        </View>
      </View>

      <View className="flex items-center">
        <Pressable
          onPress={() => {
            setHasRated(true);
          }}
          className="bg-primarygreen flex items-center w-32 p-4 rounded-full mt-5"
        >
          <Text className="text-white">Next</Text>
        </Pressable>
      </View>
    </>
  );
}

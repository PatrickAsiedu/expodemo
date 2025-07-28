
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import closeButton from "../assets/images/Close Button.png";
import starIcon from "../assets/images/Vector.png";
import userImage from "../assets/images/man.png";


const compliments = [
  { id: "1", label: "Very Clean" },
  { id: "2", label: "Punctual" },
  { id: "3", label: "Very Fast" },
  { id: "4", label: "Respectful" },
  { id: "5", label: "Sparkle" },
  { id: "6", label: "Excellent" },
];
function CompleteOrder() {
  return <>  <View className="items-center flex   space-y-3">
                <Image source={userImage} className="mt-3 rounded-full " ></Image>
                <Text className="">You rated Michael 5 stars</Text>
                <View className="flex flex-row space-x-2">
                  <Image source={starIcon} style ={{width:18 , height:18 }}></Image>
                  <Image source={starIcon} style ={{width:18 , height:18 }}></Image>
                  <Image source={starIcon} style ={{width:18 , height:18 }}></Image>
                  <Image source={starIcon} style ={{width:18 , height:18 }}></Image>
                  <Image source={starIcon} style ={{width:18 , height:18 }}></Image>
                </View>
                <Text className="text-base">Leave a compliment</Text>
                <View className="   ">
                  <FlatList
                    data={compliments}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    className=""
                    renderItem={({ item }) => (
                      <TouchableOpacity className="bg-gray-100 p-2 w-24 m-2 rounded-md">
                        <Text className="text-center">{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>

              <Pressable className="mt-2">
                <Text className="text-primaryblue text-base">
                  + Add comment
                </Text>
              </Pressable>

              <Text className="mt-3 text-base font-medium">
                Want to add a tip?
              </Text>
              <Text className="pl-4 mt-2 italic text-black opacity-50">
                Providers recieve 100% of the tip you give
              </Text>

              <View className=" mt-3 rounded-t-2xl px-4 border-[0.5px] border-gray-200 border-b-0    ">
                <View className="flex-row mt-3 items-center">
                  <Text className="text-base ">Charge : </Text>
                  <Text className="font-bold text-2xl ml-2">$37.47</Text>
                </View>

                <View className="grid grid-cols-4 gap-2 mt-3 ">
                  <TouchableOpacity className="px-4 h-20 pt-2 border-t border-primarygreen rounded-t-lg bg-green-100 flex items-center  ">
                    <Text className="text-primarygreen font-bold text-lg">
                      15%
                    </Text>
                    <Text className="text-primaryblue font-bold text-lg">
                      $1.5
                    </Text>
                  </TouchableOpacity>
                   <TouchableOpacity className="px-4 h-20 pt-2 border-t border-primarygreen rounded-t-lg bg-green-100 flex items-center  ">
                    <Text className="text-primarygreen font-bold text-lg">
                      15%
                    </Text>
                    <Text className="text-primaryblue font-bold text-lg">
                      $1.5
                    </Text>
                  </TouchableOpacity> <TouchableOpacity className="px-4 h-20 pt-2 border-t border-primarygreen rounded-t-lg bg-green-100 flex items-center  ">
                    <Text className="text-primarygreen font-bold text-lg">
                      15%
                    </Text>
                    <Text className="text-primaryblue font-bold text-lg">
                      $1.5
                    </Text>
                  </TouchableOpacity>
               
                  <View className="space-y-2 flex justify-between relative h-20">
                    <View className="bg-gray-200 rounded-md  relative ">
                      <TextInput className="rounded-md p-[10px] "></TextInput>
                      <Text className="absolute right-2 top-3">%</Text>
                    </View>
                    <Text className="bg-gray-200 rounded-md p-[10px]">$</Text>
                    <Text className="absolute -bottom-9 text-gray-400 text-base">
                      Custom
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row justify-between mt-3  ">
                  <View className="flex flex-row space-x-2">
                    <Text className="text-base">Plus tip:</Text>
                    <Text className="text-base font-bold">$37.47 +</Text>
                    <Text className="text-base text-primaryblue font-bold">
                      $5.62
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-between mt-4">
                  <View className="flex-row space-x-4">
                    <Text className="font-bold">Total:</Text>
                    <Text className="text-primaryblue font-bold text-3xl">
                      $43
                    </Text>
                  </View>
                  <Pressable className="bg-primaryred flex items-center w-20 p-2 rounded-full">
                    <Text className="text-white">No tips</Text>
                  </Pressable>
                </View>

                <View className="flex items-center">
                  <Pressable className="bg-primarygreen flex items-center w-32 p-4 rounded-full mt-5">
                    <Text className="text-white">Done</Text>
                  </Pressable>
                </View>
              </View></>;
}

export default CompleteOrder;

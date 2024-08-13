import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ISlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <ScrollView className="mt-20  px-6">
      <View className=" w-full flex flex-row justify-between h-[20rem] items-center">
        <View className=" flex flex-col gap-y-1">
          <Text className="font-bold text-[40px]">Ready To</Text>
          <Text className="font-bold text-[40px] text-red-400">Workout</Text>
        </View>
        <View className="flex justify-center items-center gap-y-2">
          <Image
            className="rounded-full object-cover  w-[50px] h-[50px]"
            source={require("../assets/images/avatar.png")}
          />

          <Ionicons
            name="notifications"
            className=" bg-red-300 w-[10px] h-[10px]"
            size={34}
            color="black"
          />
        </View>
      </View>

      <View>
        <ISlider />
      </View>

      <View>
        <BodyParts />
      </View>
    </ScrollView>
  );
}


import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BODY } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function BodyParts() {
 

  return (
    <View className="mt-7">
      <Text className=" font-bold text-[30px]">Exercises</Text>

      {/* <FlatList
        data={BODY}
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={({item})=>(
            <View>
                <BodyPartsMaker item={item}/>
                <Image className='h-[300px]' source={item.pic}/>

            </View>
        )}
      /> */}
      <View
        className=" gap-y-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        {BODY.map((item, index) => (
          <View>
            <BodyPartsMaker item={item}/>
          </View>
        ))}
      </View>
    </View>
  );
}




export function BodyPartsMaker({ item }) {
  const route = useRouter()
  return (
    <TouchableOpacity  onPress={()=> route.push('/exercises') } style={{shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 20,
      },
      shadowOpacity: 0.77,
      shadowRadius: 6.65,

      elevation: 4,}} className=" relative w-[170px] rounded-lg" >
      <Image className="h-[200px] w-full rounded-2xl" source={item.pic} />
      <Text className=" absolute bottom-1 z-10 left-[10%] text-white font-bold text-[20px]">
        {item.title}
      </Text>
      <View className=" absolute bottom-0 -z-5  drop-shadow-xl  rounded-b-2xl  p-2 w-full  bg-[#0000006b]">
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}

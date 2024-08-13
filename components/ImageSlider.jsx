import { View, Text , FlatList , Image } from 'react-native'
import React from 'react'
import {IMAGE_SLIDER} from '../constants/index.js'

export default function ISlider() {
  return (
    <View className="mt-7">
        <FlatList
        className=" h-[250px] rounded-full "
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={IMAGE_SLIDER}
          renderItem={({item , index})=>(
            <View className='rounded-lg mr-7  shadow-xl'>
                <Image className='rounded-xl h-full w-[260px]' resizeMode='cover' source={item}/>
            </View>
          )}
        />
    </View>
  )
}
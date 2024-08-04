import { Text, View , Image , StatusBar  , TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View className=''>
       <Image className=' w-full object-contain  h-full' source={require('../assets/images/welcome.png')} alt="pic"/>

       <LinearGradient
        style={{position: 'absolute', left: 0, bottom: 0, right: 0 , height:600}}
        colors={['transparent' , '#18181b']}
        start={{x:0.5 , y:0}}
        end={{x:0.5 , y:0.8}}
        className="flex justify-end pb-12 space-y-8 px-10"
        >
        <Text  className=' text-white  font-bold  text-center  text-[39px]'>Best <Text className='text-red-400'>Workouts</Text> For you</Text>
        <TouchableOpacity className='w-full py-4 rounded-full border-2 border-white bg-red-500'>
          <Text className='text-center font-bold text-[23px] text-white'>
            Get Started
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

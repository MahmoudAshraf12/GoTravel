import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView className='flex-1 p-4 relative bg-white'>
            <View className='flex-row items-center'>
                <View className='bg-slate-800 w-10 h-10 items-center justify-center rounded-full mr-1'>
                    <Text className='text-cyan-700 text-xl font-bold'>Go</Text>
                </View>
                <Text className='text-xl font-semibold'>Travel</Text>
            </View>
            <View className='my-5'>
                <Text className='text-3xl tracking-widest text-gray-600'>Enjoy the trip with</Text>
                <Text className='text-3xl font-bold tracking-widest text-[#00BCC9]'>Good Moments</Text>
            </View>
            <Text className="text-[#3C6072] text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <View className="w-[350px] h-[320px] bg-[#00BCC9] rounded-full absolute bottom-28 -right-36"></View>
            <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                animation="fadeIn"
                easing="ease-in-out"
                source={require('../assets/hero.png')}
                className="w-full h-full object-cover mt-20"
                />

                <TouchableOpacity
                onPress={() => navigation.push("Discover")}
                className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
                >
                <Animatable.View
                    animation={"pulse"}
                    easing="ease-in-out"
                    iterationCount={"infinite"}
                    className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
                >
                    <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
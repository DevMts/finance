import { fonts } from "@/theme/fonts";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-center text-2xl font-bold" style={{ fontFamily: fonts.manrope }}>
        Finance App
      </Text>
      <TouchableOpacity className="mt-4 self-center bg-blue-500 px-4 py-2 rounded" onPress={() => { router.push('/sign-in') }}>
        <Text className="text-white" style={{ fontFamily: fonts.manrope }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

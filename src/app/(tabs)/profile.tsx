import { fonts } from "@/theme/fonts";
import { Camera, ChevronRight, DollarSign, LogOut, User } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-14 pb-6 px-6">
          <Text className="text-2xl font-bold text-slate-900" style={{ fontFamily: fonts.bold }}>Profile</Text>
        </View>

        {/* Profile Picture Section */}
        <View className="items-center justify-center mt-4 mb-8">
          <View className="relative">
            <Image
              source={{ uri: "https://avatars.githubusercontent.com/u/105328?v=4" }}
              className="w-28 h-28 rounded-full border-4 border-gray-50"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-black p-2.5 rounded-full border-4 border-white active:opacity-80">
              <Camera color="#fff" size={16} />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-bold text-slate-900 mt-4" style={{ fontFamily: fonts.bold }}>Alex Rivera</Text>
          <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.regular }}>alex.rivera@example.com</Text>
        </View>

        {/* Settings Section */}
        <View className="px-6">
          <Text className="text-gray-500 text-sm font-bold mb-4" style={{ fontFamily: fonts.semiBold }}>SETTINGS</Text>

          <View className="bg-gray-50 rounded-2xl overflow-hidden">
            {/* Currency Option */}
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100 active:bg-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm">
                  <DollarSign size={20} color="#000" />
                </View>
                <View>
                  <Text className="text-base font-medium text-slate-900" style={{ fontFamily: fonts.medium }}>Currency</Text>
                  <Text className="text-xs text-gray-500" style={{ fontFamily: fonts.regular }}>Select your preferred currency</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-gray-500 font-medium" style={{ fontFamily: fonts.medium }}>USD</Text>
                <ChevronRight size={20} color="#9ca3af" />
              </View>
            </TouchableOpacity>

            {/* Account Info (Placeholder for completeness) */}
            <TouchableOpacity className="flex-row items-center justify-between p-4 active:bg-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm">
                  <User size={20} color="#000" />
                </View>
                <View>
                  <Text className="text-base font-medium text-slate-900" style={{ fontFamily: fonts.medium }}>Account Info</Text>
                  <Text className="text-xs text-gray-500" style={{ fontFamily: fonts.regular }}>Personal details</Text>
                </View>
              </View>
              <ChevronRight size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Logout Section */}
          <TouchableOpacity className="flex-row items-center justify-center mt-12 p-4 bg-red-50 rounded-2xl gap-2 active:opacity-80">
            <LogOut size={20} color="#ef4444" />
            <Text className="text-red-500 font-bold text-base" style={{ fontFamily: fonts.bold }}>Log Out</Text>
          </TouchableOpacity>

          <Text className="text-center text-gray-400 text-xs mt-6" style={{ fontFamily: fonts.regular }}>
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
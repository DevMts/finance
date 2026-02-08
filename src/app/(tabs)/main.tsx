import { SummaryCard } from "@/components/SummaryCard";
import { fonts } from "@/theme/fonts";
import { ArrowDownRight, ArrowUpRight, Bell, CirclePercent, Wallet } from "lucide-react-native";
import { Image, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";



export default function Main() {
  const data = [
    { value: 60, color: "#f87171" },
    { value: 20, color: "#28da81" },
    { value: 10, color: "#720986" },
    { value: 10, color: "#f59e0b" },
  ];

  return (
    <View className="flex-1 items-center justify-center px-6 bg-white">
      <View className="flex-row items-center justify-between w-full py-6">
        <View className="flex-row items-center gap-4">
          <Image source={{ uri: "https://avatars.githubusercontent.com/u/105328?v=4" }} className="w-14 h-14  rounded-full" />
          <View>
            <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.manrope }}>Good Morning,</Text>
            <Text className="font-bold text-black" style={{ fontFamily: fonts.manrope }}>Alex Rivera</Text>
          </View>
        </View>
        <Bell color={"#000"} size={20} />
      </View>
      <View className="mx-6 p-8 mt-2 bg-black items-start justify-between rounded-xl  w-full">
        <View className="flex-row justify-between w-full">
          <View>
            <Text className="text-gray-400 text-sm" style={{ fontFamily: fonts.manrope }}>Your Balance</Text>
            <Text className="text-3xl font-light text-white mt-2" style={{ fontFamily: fonts.manrope }}>$5,750.20</Text>
          </View>
          <Wallet color={"#9ca3af"} size={24} />
        </View>
        <View className=" h-[1px] bg-gray-800 mt-8 mb-6 w-full" />
        <View className="flex-row justify-between w-full items-center">
          <Text className="text-gray-400 text-sm" style={{ fontFamily: fonts.manrope }}>Last Transaction</Text>
          <Text className="text-green-400 text-sm mt-2 text-right" style={{ fontFamily: fonts.manrope }}>+ $250.20</Text>
        </View>
      </View>
      <View className="mt-8 flex-row gap-5 w-full">
        <SummaryCard title="INCOME" amount="+$6.2k" icon={ArrowUpRight} iconColor="#22c55e" />
        <SummaryCard title="EXPENSE" amount="-$1.2k" icon={ArrowDownRight} iconColor="#ef4444" />
        <SummaryCard title="SAVINGS" amount="24%" icon={CirclePercent} iconColor="#3b82f6" />
      </View>
      <View className="mt-8 w-full">
        <Text className="text-gray-500 text-sm mb-4" style={{ fontFamily: fonts.manrope }}>Spending Analytics</Text>
        <View className="border border-[#f1f5f9] p-6 rounded-xl w-full items-center justify-between flex-row">
          <PieChart data={data} radius={60} donut innerRadius={50}
            centerLabelComponent={() => {
              return <View>
                <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.manrope }}>SPENT</Text>
                <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>$1.8k</Text>
              </View>;
            }}
          />
          <View className="border-l border-[#f1f5f9] pl-8">
            <View className="flex-row gap-3 items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#f87171]" />
              <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.manrope }}>Food</Text>
              <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>60%</Text>
            </View>
            <View className="flex-row gap-3 items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#28da81]" />
              <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.manrope }}>Transport</Text>
              <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>20%</Text>
            </View>
            <View className="flex-row gap-3 items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#720986]" />
              <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.manrope }}>Entertainment</Text>
              <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>10%</Text>
            </View>
            <View className="flex-row gap-3 items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.manrope }}>Other</Text>
              <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>10%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
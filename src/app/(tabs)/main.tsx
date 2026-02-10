import { SummaryCard } from "@/components/SummaryCard";
import { TransactionItem } from "@/components/TransactionItem";
import { fonts } from "@/theme/fonts";
import { ArrowDownRight, ArrowUpRight, Bell, Car, CirclePercent, LucideIcon, Plus, ShoppingCart, Tv, Wallet } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

// Interfaces para tipagem dos dados
interface ChartData {
  value: number;
  color: string;
  label: string;
}

interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: string;
  amountColor: string;
  icon: LucideIcon;
}

// Dados mockados (idealmente viriam de uma API ou Contexto)
const chartData: ChartData[] = [
  { value: 60, color: "#f87171", label: "Food" },
  { value: 20, color: "#28da81", label: "Transport" },
  { value: 10, color: "#720986", label: "Entertainment" },
  { value: 10, color: "#f59e0b", label: "Other" },
];

const recentTransactions: Transaction[] = [
  { id: '1', title: "Whole Foods", date: "Today, 5:30 PM", amount: "-$56.00", amountColor: "text-red-400", icon: ShoppingCart },
  { id: '2', title: "Salary", date: "Yesterday, 9:00 AM", amount: "+$3,200.00", amountColor: "text-green-400", icon: Wallet },
  { id: '3', title: "Shell Station", date: "Yesterday, 6:30 PM", amount: "-$45.00", amountColor: "text-red-400", icon: Car },
  { id: '4', title: "Netflix", date: "Oct 24, 10:00 AM", amount: "-$15.00", amountColor: "text-red-400", icon: Tv },
];

export default function Main() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center px-6 py-10">
          <View className="flex-row items-center justify-between w-full py-6">
            <View className="flex-row items-center gap-4">
              <Image source={{ uri: "https://avatars.githubusercontent.com/u/105328?v=4" }} className="w-14 h-14  rounded-full" />
              <View>
                <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.regular }}>Good Morning,</Text>
                <Text className="font-bold text-black" style={{ fontFamily: fonts.bold }}>Alex Rivera</Text>
              </View>
            </View>
            <Bell color={"#000"} size={20} />
          </View>
          <View className="mx-6 p-8 mt-2 bg-black items-start justify-between rounded-xl  w-full">
            <View className="flex-row justify-between w-full">
              <View>
                <Text className="text-gray-400 text-sm" style={{ fontFamily: fonts.regular }}>Your Balance</Text>
                <Text className="text-3xl font-light text-white mt-2" style={{ fontFamily: fonts.light }}>$5,750.20</Text>
              </View>
              <Wallet color={"#9ca3af"} size={24} />
            </View>
            <View className=" h-[1px] bg-gray-800 mt-8 mb-6 w-full" />
            <View className="flex-row justify-between w-full items-center">
              <Text className="text-gray-400 text-sm" style={{ fontFamily: fonts.regular }}>Last Transaction</Text>
              <Text className="text-green-400 text-sm mt-2 text-right" style={{ fontFamily: fonts.medium }}>+ $250.20</Text>
            </View>
          </View>
          <View className="mt-8 flex-row gap-5 w-full">
            <SummaryCard title="INCOME" amount="+$6.2k" icon={ArrowUpRight} iconColor="#22c55e" />
            <SummaryCard title="EXPENSE" amount="-$1.2k" icon={ArrowDownRight} iconColor="#ef4444" />
            <SummaryCard title="SAVINGS" amount="24%" icon={CirclePercent} iconColor="#3b82f6" />
          </View>
          <View className="mt-8 w-full">
            <Text className="text-gray-500 text-sm mb-4" style={{ fontFamily: fonts.semiBold }}>Spending Analytics</Text>
            <View className="border border-[#f1f5f9] p-6 rounded-xl w-full items-center justify-center flex-row">
              <PieChart
                data={chartData}
                radius={55}
                donut
                innerRadius={50}
                centerLabelComponent={() => {
                  return <View>
                    <Text className="text-gray-500 text-xs " style={{ fontFamily: fonts.regular }}>SPENT</Text>
                    <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.bold }}>$1.8k</Text>
                  </View>;
                }}
              />
              <View className="border-l border-[#f1f5f9] pl-8 ml-8">
                {chartData.map((item, index) => (
                  <View key={index} className="flex-row gap-3 items-center mb-2 last:mb-0">
                    <View className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <Text className="text-gray-500 text-xs w-22" style={{ fontFamily: fonts.regular }}>{item.label}</Text>
                    <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.bold }}>{item.value}%</Text>
                  </View>
                ))}
              </View>
            </View>
          </View >
          <View className="mt-8 w-full">
            <Text className="text-gray-500 text-sm mb-4" style={{ fontFamily: fonts.semiBold }}>Recent Transactions</Text>
            <View className="border border-[#f1f5f9] p-6 rounded-xl w-full items-center gap-6">
              {recentTransactions.map((transaction, index) => (
                <TransactionItem
                  key={transaction.id}
                  title={transaction.title}
                  date={transaction.date}
                  amount={transaction.amount}
                  amountColor={transaction.amountColor}
                  icon={transaction.icon}
                  isLast={index === recentTransactions.length - 1}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute bottom-6 right-6 bg-black w-14 h-14 rounded-full items-center justify-center">
        <Plus color={"#fff"} size={20} />
      </TouchableOpacity>
    </View>
  );
}
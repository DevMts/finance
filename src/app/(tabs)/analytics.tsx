import { AnalyticsHeader } from "@/components/AnalyticsHeader";
import { CategoryItem } from "@/components/CategoryItem";
import { MonthYearPicker } from "@/components/MonthYearPicker";
import SegmentedControl from "@/components/organisms/segmented-control";
import { fonts } from "@/theme/fonts";
import { StatusBar } from "expo-status-bar";
import { Car, Film, Home, Layers, TrendingUp, Utensils } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Analytics() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [index, setIndex] = useState(0);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const categories = [
    {
      title: "Rent & Utilities",
      amount: "$1,552.50",
      percentage: "45%",
      transactions: "4 transactions",
      icon: Home,
      color: "#22c55e",
    },
    {
      title: "Food & Drink",
      amount: "$850.00",
      percentage: "25%",
      transactions: "12 transactions",
      icon: Utensils,
      color: "#f97316",
    },
    {
      title: "Transportation",
      amount: "$450.00",
      percentage: "12%",
      transactions: "8 transactions",
      icon: Car,
      color: "#3b82f6",
    },
    {
      title: "Entertainment",
      amount: "$320.00",
      percentage: "10%",
      transactions: "5 transactions",
      icon: Film,
      color: "#a855f7",
    },
    {
      title: "Miscellaneous",
      amount: "$277.50",
      percentage: "8%",
      transactions: "6 transactions",
      icon: Layers,
      color: "#6b7280",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="py-10">
        <View><AnalyticsHeader date={date} onDatePress={showDatePicker} />
          <MonthYearPicker
            isVisible={isDatePickerVisible}
            currentDate={date}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          /></View>
        <View className="px-4 pt-8 items-center justify-center">
          <Text className="text-gray-500 text-sm mt-4 px-6" style={{ fontFamily: fonts.regular }}>Total Spend</Text>
          <Text className="text-5xl font-light text-black mt-2" style={{ fontFamily: fonts.light }}>$3,450</Text>
          <View className="items-center mt-3 flex-row gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
            <TrendingUp color="#000" size={15} />
            <Text className="text-slate-500 text-xs font-bold " style={{ fontFamily: fonts.semiBold }}>+5.2% vs last month</Text>
          </View>
        </View>
        <View className="px-6  h-24 items-center ">
          <GestureHandlerRootView className="flex-1 w-full items-center">
            <StatusBar style="dark" />
            <View className="w-full ">
              <SegmentedControl
                currentIndex={index}
                onChange={setIndex}
                paddingVertical={10}
                borderRadius={12}
                disableScaleEffect={false}

              >
                {["Day", "Week", "Month"].map((label) => (
                  <Text
                    key={label}
                    className="text-center text-sm font-medium text-black"
                    style={{ fontFamily: fonts.semiBold }}
                  >
                    {label}
                  </Text>
                ))}
              </SegmentedControl>
            </View>
          </GestureHandlerRootView>
        </View>
        <View className="py-6 items-center justify-center">
          <Text className="text-gray-500 text-xs font-bold" style={{ fontFamily: fonts.bold }}>
            Top
          </Text>
          <Text className="text-3xl font-light text-black" style={{ fontFamily: fonts.extraLight }}>
            Rent
          </Text>
          <Text className="text-slate-900 text-sm font-bold mt-1" style={{ fontFamily: fonts.semiBold }}>
            45%
          </Text>
        </View>
        <View className="px-6">
          <Text className="text-slate-900 text-lg font-medium" style={{ fontFamily: fonts.semiBold }}>
            Categories
          </Text>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              amount={category.amount}
              percentage={category.percentage}
              transactions={category.transactions}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
import { MonthYearPicker } from "@/components/MonthYearPicker";
import { ChipGroup } from "@/components/molecules/animated-chip/Chip";
import { SearchBar } from "@/components/molecules/search-bar/SearchBar";
import { fonts } from "@/theme/fonts";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Calendar, Car, Coffee, Layers, LucideIcon, ShoppingBag, Smartphone } from "lucide-react-native";
import { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: string;
  type: 'income' | 'expense';
  icon: LucideIcon;
}

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Whole Foods',
    category: 'Groceries',
    amount: '- $56.00',
    type: 'expense',
    icon: ShoppingBag,
  },
  {
    id: '2',
    title: 'Uber Trip',
    category: 'Transportation',
    amount: '- $12.50',
    type: 'expense',
    icon: Car,
  },
  {
    id: '3',
    title: 'Freelance Work',
    category: 'Income',
    amount: '+ $350.00',
    type: 'income',
    icon: Layers,
  },
  {
    id: '4',
    title: 'Starbucks',
    category: 'Coffee',
    amount: '- $5.50',
    type: 'expense',
    icon: Coffee,
  },
  {
    id: '5',
    title: 'Apple Store',
    category: 'Electronics',
    amount: '- $999.00',
    type: 'expense',
    icon: Smartphone,
  },
];

const TransactionRow = ({ item }: { item: Transaction }) => (
  <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
    <View className="flex-row items-center gap-4">
      <View className="h-12 w-12 rounded-full bg-gray-50 items-center justify-center">
        <item.icon size={24} color="#000" />
      </View>
      <View>
        <Text className="text-base font-bold text-slate-900" style={{ fontFamily: fonts.bold }}>{item.title}</Text>
        <Text className="text-sm text-gray-500" style={{ fontFamily: fonts.regular }}>{item.category}</Text>
      </View>
    </View>
    <Text
      className={`text-base font-bold ${item.type === 'income' ? 'text-green-600' : 'text-slate-900'}`}
      style={{ fontFamily: fonts.bold }}
    >
      {item.amount}
    </Text>
  </View>
);


export default function History() {
  const [selected, setSelected] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const handleChipChange = (index: number) => {
    setSelected(index);
    if (index === 3) {
      showDatePicker();
    }
  };

  const chips = [
    {
      label: "All",
      activeColor: "#000",
      inActiveBackgroundColor: "#F3F4F6",
      labelColor: selected === 0 ? "#fff" : "#000",
      icon: () => (
        <Layers
          size={18}
          color={selected === 0 ? "#fff" : "#6B7280"}
        />
      ),
    },
    {
      label: "Income",
      activeColor: "#22c55e",
      inActiveBackgroundColor: "#F3F4F6",
      labelColor: selected === 1 ? "#fff" : "#000",
      icon: () => (
        <ArrowUpRight
          size={18}
          color={selected === 1 ? "#fff" : "#6B7280"}
        />
      ),
    },
    {
      label: "Expense",
      activeColor: "#ef4444",
      inActiveBackgroundColor: "#F3F4F6",
      labelColor: selected === 2 ? "#fff" : "#000",
      icon: () => (
        <ArrowDownRight
          size={18}
          color={selected === 2 ? "#fff" : "#6B7280"}
        />
      ),
    },
    {
      label: "Date",
      activeColor: "#000",
      inActiveBackgroundColor: "#F3F4F6",
      labelColor: selected === 3 ? "#fff" : "#000",
      icon: () => (
        <Calendar
          size={18}
          color={selected === 3 ? "#fff" : "#6B7280"}
        />
      ),
    },
  ];


  return (
    <View className="flex-1 bg-white px-6">
      <MonthYearPicker
        isVisible={isDatePickerVisible}
        currentDate={date}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center bg-white pt-14 pb-6">
          <View className="flex-row items-center gap-4">
            <ArrowLeft color="#000" size={24} />
            <Text className="text-2xl font-bold text-slate-900" style={{ fontFamily: fonts.bold }}>History</Text>
          </View>
          <Calendar color="#000" size={20} />
        </View>
        <View className="w-full items-center justify-center mt-2 mb-6">
          <SearchBar
            placeholder="Search transactions"
            containerWidth={width - 48} // Screen width - (px-6 * 2)
            tint="#9CA3AF"
            textCenterOffset={8}
            iconCenterOffset={9}
            inputStyle={{ fontFamily: fonts.regular, color: '#000', height: 38, backgroundColor: '#F3F4F6' }}

          />
        </View>
        <View className="w-full items-center justify-start">
          <ChipGroup
            chips={chips}
            selectedIndex={selected}
            onChange={handleChipChange}
          />
        </View>
        <View className="mt-8 flex-1">
          <Text className="text-gray-500 text-sm font-bold mt-4 mb-2" style={{ fontFamily: fonts.semiBold }}>
            TODAY
          </Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
            {transactions.map((item) => (
              <TransactionRow key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
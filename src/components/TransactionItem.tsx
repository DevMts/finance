import { fonts } from "@/theme/fonts";
import { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

interface TransactionItemProps {
  title: string;
  date: string;
  amount: string;
  amountColor: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function TransactionItem({
  title,
  date,
  amount,
  amountColor,
  icon: Icon,
  isLast = false,
}: TransactionItemProps) {
  return (
    <View
      className={`flex-row items-center gap-4 w-full justify-between ${!isLast ? "border-b border-[#f1f5f9] pb-4" : ""
        }`}
    >
      <View className="flex-row items-center gap-4">
        <View className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center">
          <Icon color={"#000"} size={15} />
        </View>
        <View>
          <Text className="text-black text-sm font-bold" style={{ fontFamily: fonts.manrope }}>{title}</Text>
          <Text className="text-gray-500 text-xs mt-1" style={{ fontFamily: fonts.manrope }}>{date}</Text>
        </View>
      </View>
      <Text className={`text-sm text-right font-bold ${amountColor}`} style={{ fontFamily: fonts.manrope }}>{amount}</Text>
    </View>
  );
}
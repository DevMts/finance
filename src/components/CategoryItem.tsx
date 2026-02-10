import { fonts } from "@/theme/fonts";
import { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

interface CategoryItemProps {
  title: string;
  amount: string;
  percentage: string;
  transactions: string;
  icon: LucideIcon;
  color: string;
}

export function CategoryItem({
  title,
  amount,
  percentage,
  transactions,
  icon: Icon,
  color,
}: CategoryItemProps) {
  return (
    <View className="flex-row items-center justify-between p-6 mt-4 bg-gray-50 rounded-2xl border border-gray-200">
      <View className="flex-row items-center gap-4 ">
        <View className="w-10 h-10 bg-white rounded-full items-center justify-center ">
          <Icon color="#000" size={20} />
        </View>
        <View>
          <Text className="text-slate-900 text-sm font-bold mt-1" style={{ fontFamily: fonts.semiBold }}>
            {title}
          </Text>
          <View className="flex-row items-center gap-2 mt-1">
            <View className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            <Text className="text-slate-500 text-xs font-bold" style={{ fontFamily: fonts.semiBold }}>
              {transactions}
            </Text>
          </View>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-slate-900 text-sm font-bold mt-1" style={{ fontFamily: fonts.semiBold }}>
          {amount}
        </Text>
        <Text className="text-slate-500 text-xs   mt-1" style={{ fontFamily: fonts.regular }}>
          {percentage}
        </Text>
      </View>
    </View>
  );
}
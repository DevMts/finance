import { fonts } from "@/theme/fonts";
import { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: LucideIcon;
  iconColor: string;
}

export function SummaryCard({ title, amount, icon: Icon, iconColor }: SummaryCardProps) {
  return (
    <View className="flex-1 bg-gray-50 border-[#f1f5f9] border p-4 pr-10 aspect-square rounded-lg items-start justify-between">
      <Icon color={iconColor} size={20} />
      <Text
        className="text-gray-500 text-xs font-bold -mb-6"
        style={{ fontFamily: fonts.manrope }}
      >
        {title}
      </Text>
      <Text
        className="text-lg font-bold text-black"
        style={{ fontFamily: fonts.manrope }}
      >
        {amount}
      </Text>
    </View>
  );
}
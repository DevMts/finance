import { fonts } from "@/theme/fonts";
import { ArrowLeft, ChevronDown, Share } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface AnalyticsHeaderProps {
  date: Date;
  onDatePress: () => void;
}

export function AnalyticsHeader({ date, onDatePress }: AnalyticsHeaderProps) {
  // Formata a data para "Mês Ano" (ex: "Outubro 2024")
  const formattedDate = date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })
    .replace(/ de /g, " ") // Remove o " de " entre mês e ano
    .replace(/^\w/, c => c.toUpperCase()); // Capitaliza a primeira letra

  return (
    <View className="items-center px-4 py-3 flex-row gap-4 w-full justify-between border-b border-[#f1f5f9]">
      <ArrowLeft color="#000" size={24} />
      <TouchableOpacity onPress={onDatePress}>
        <View className="items-center">
          <Text className="text-gray-500 text-xs" style={{ fontFamily: fonts.manrope }}>ANALYTICS</Text>
          <View className="flex-row items-center gap-1">
            <Text className="text-base font-bold text-black" style={{ fontFamily: fonts.manrope }}>{formattedDate}</Text>
            <ChevronDown color="#000" size={16} />
          </View>
        </View>
      </TouchableOpacity>
      <Share color="#000" size={24} />
    </View>
  );
}
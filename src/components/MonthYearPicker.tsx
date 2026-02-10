import { fonts } from "@/theme/fonts";
import { ChevronLeft, ChevronRight, X } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface MonthYearPickerProps {
  isVisible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  currentDate: Date;
}

const MONTHS = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

export function MonthYearPicker({ isVisible, onConfirm, onCancel, currentDate }: MonthYearPickerProps) {
  const [year, setYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    if (isVisible) {
      setYear(currentDate.getFullYear());
    }
  }, [isVisible, currentDate]);

  const handleMonthPress = (monthIndex: number) => {
    const newDate = new Date(year, monthIndex, 1);
    onConfirm(newDate);
  };

  return (
    <Modal transparent visible={isVisible} animationType="fade" onRequestClose={onCancel}>
      <View className="flex-1 bg-black/50 justify-center items-center p-6">
        <View className="bg-white rounded-xl w-full p-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold" style={{ fontFamily: fonts.manrope }}>Selecione a Data</Text>
            <TouchableOpacity onPress={onCancel}>
              <X color="#000" size={24} />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-center mb-6 bg-gray-50 p-2 rounded-lg">
            <TouchableOpacity onPress={() => setYear(year - 1)} className="p-2">
              <ChevronLeft color="#000" size={20} />
            </TouchableOpacity>
            <Text className="text-lg font-bold" style={{ fontFamily: fonts.manrope }}>{year}</Text>
            <TouchableOpacity onPress={() => setYear(year + 1)} className="p-2">
              <ChevronRight color="#000" size={20} />
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-4">
            {MONTHS.map((month, index) => (
              <TouchableOpacity
                key={month}
                className={`w-[30%] items-center p-3 rounded-lg border ${currentDate.getMonth() === index && currentDate.getFullYear() === year ? "bg-black border-black" : "border-gray-100 bg-white"}`}
                onPress={() => handleMonthPress(index)}
              >
                <Text className={`text-sm font-bold ${currentDate.getMonth() === index && currentDate.getFullYear() === year ? "text-white" : "text-gray-600"}`} style={{ fontFamily: fonts.manrope }}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
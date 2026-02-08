import { fonts } from "@/theme/fonts";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="w-full bg-black rounded-full py-4 items-center justify-center  shadow-md shadow-black/25"
      style={style}
      {...rest}
    >
      <Text
        className="text-white text-base font-bold"
        style={{ fontFamily: fonts.manrope }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
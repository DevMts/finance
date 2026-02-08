import { fonts } from "@/theme/fonts";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, value, onChangeText, style, secureTextEntry, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalText, setInternalText] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isControlled = value !== undefined;
  const textValue = isControlled ? value : internalText;
  const hasText = textValue && textValue.length > 0;

  const animatedValue = useRef(new Animated.Value(hasText ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || hasText ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Necessário false para animar propriedades de texto/layout
    }).start();
  }, [isFocused, hasText]);

  const handleChangeText = (text: string) => {
    if (!isControlled) {
      setInternalText(text);
    }
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const labelStyle = {
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0], // Posição: Placeholder (centro) -> Label (topo)
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Tamanho: Normal -> Pequeno
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["#9CA3AF", "#6B7280"], // Cor: gray-400 -> gray-500
    }),
  };

  return (
    <View className="border-b border-gray-200 pt-5 pb-2 mb-4 relative">
      <Animated.Text
        style={[
          labelStyle,
          { fontFamily: fonts.manrope, position: "absolute" },
        ]}
      >
        {label}
      </Animated.Text>

      <TextInput
        {...rest}
        value={textValue}
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        className="h-8 text-base text-gray-900 p-0 leading-5 pr-8"
        style={[{ fontFamily: fonts.manrope }, style]}
        placeholder="" // Placeholder vazio pois usamos o Animated.Text
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute right-0 bottom-2"
        >
          <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={20} color="#6B7280" />
        </TouchableOpacity>
      )}
    </View>
  );
}
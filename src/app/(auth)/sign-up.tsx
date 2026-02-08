import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { fonts } from "@/theme/fonts";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className="flex-1 justify-center px-8">
      <View className="mb-12">
        <Text
          style={{ fontFamily: fonts.manrope, fontSize: 36 }}
          className="font-bold text-black"
        >
          Crie sua conta
        </Text>

        <Text
          style={{ fontFamily: fonts.manrope }}
          className="mt-2 text-gray-500"
        >
          Insira seus dados para se cadastrar
        </Text>
      </View>
      <View>
        <Input label="Nome" />
        <Input label="E-mail" keyboardType="email-address" />
        <Input label="Senha" secureTextEntry />

        <View className="mt-12">
          <Button title="Cadastrar" />
        </View>

        <Text className="mt-10 text-sm self-center" style={{ fontFamily: fonts.manrope }}>
          Já tem uma conta? <Link href="/sign-in" className="font-bold text-black">Entrar</Link>
        </Text>
      </View>
    </View>
  );
}
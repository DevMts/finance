import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { fonts } from "@/theme/fonts";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center px-8"
    >

      <View className="mb-12">
        <Text
          style={{ fontFamily: fonts.manrope, fontSize: 36 }}
          className="font-bold text-black"
        >
          Bem-vindo de volta
        </Text>

        <Text
          style={{ fontFamily: fonts.manrope }}
          className="mt-2 text-gray-500 "
        >
          Insira seus dados para acessar sua conta
        </Text>
      </View>
      <View>
        <Input label="E-mail" />
        <Input label="Senha" secureTextEntry />
        <Text className="mt-4 mb-[3.75rem] text-sm  self-end" style={{ fontFamily: fonts.manrope }}>
          Esqueci minha senha
        </Text>
        <Button title="Entrar" />
        <Text className="mt-10 text-sm self-center" style={{ fontFamily: fonts.manrope }}>
          Não tem uma conta? <Text className="font-bold text-black">Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

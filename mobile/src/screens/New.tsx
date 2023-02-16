import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../Components/BackButton";
import { Checkbox } from "../Components/Checkbox";

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator = {false}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3">
          Cria hábito
        </Text>
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Qual seu compremetimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-300 text-white focus:border-2 focus:border-violet-600" 
        />

        <Checkbox />

      </ScrollView>
    </View>
  )
}
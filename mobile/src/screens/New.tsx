import { ScrollView, Text, View } from "react-native";
import { BackButton } from "../Components/BackButton";

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator = {false}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3">
          Cria hábito
        </Text>

      </ScrollView>
    </View>
  )
}
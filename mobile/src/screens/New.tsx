import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";

import { BackButton } from "../Components/BackButton";
import { Checkbox } from "../Components/Checkbox";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export function New() {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number){
    if(weekDays.includes(weekDayIndex)){
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if(!title.trim() || weekDays.length ===0){
        return Alert.alert('Novo Hábito', 'Informe o nome do hábito e escolha a frequencia.')
      }

      await api.post('/habits', { title, weekDays });

      setTitle('');
      setWeekDays([]);

      Alert.alert('Novo hábito', 'Hábito criado com sucesso!')
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possivel criar o novo hábito')
    }
  }


  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator = {false}
      contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        
        <Text className="mt-6 text-white font-extrabold text-3">
          Cria hábito
        </Text>

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Qual seu compremetimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600" 
          placeholder="Exercícios, dormi bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>
        {
          availableWeekDays.map((weekDay, index) => (
            <Checkbox 
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }
        
        <TouchableOpacity 
        className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        activeOpacity={0.7}
        onPress={handleCreateNewHabit}
        >
          <Feather 
          name="check"
          size={20}
          color={colors.white}
          />
          <Text className="font-semibold text-base text-white ml-2">
            Confirma
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
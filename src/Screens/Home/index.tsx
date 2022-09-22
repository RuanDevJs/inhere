import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Button } from 'react-native';

import Participant from '../../Components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participantName, setParticipantName] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>(['Ruan', 'Vitor', 'Mikaila', 'Gregg', 'Sérgio']);

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert('Inhere', 'Não é possível adicionar o mesmo participante!')
    }
    setParticipants(oldValue => [...oldValue, participantName]);
  }

  function handleParticipantRemove(currentIndex: number) {
    Alert.alert('Inhere', `Tem certeza que deseja remover o usuário: ${participants[currentIndex]} ?`, [
      {
        text: 'Confirmar',
        style: 'default',
        onPress: () => setParticipants(oldValue => oldValue.filter((item, index) => index !== currentIndex))
      },
      {
        style: 'destructive',
        text: 'Cancelar'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          keyboardType='default'
          autoCorrect={false}
          value={participantName}
          onChangeText={(inputValue) => setParticipantName(inputValue)}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.72}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        renderItem={({ item, index }) => {
          return (
            <Participant name={item} key={index} onRemove={() => handleParticipantRemove(index)} />
          )
        }}
        keyExtractor={((_, index) => `index=${index}`)}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        ListEmptyComponent={() => {
          return <Text style={styles.listEmptyText}>Não encontramos nenhum participante 😔</Text>
        }}
      />
    </View>
  )
}

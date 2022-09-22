import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ParticipantProps extends TouchableOpacityProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.72}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}

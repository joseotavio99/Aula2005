import {View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const Clicar = () => {
    alert('Apertei o Botão');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>  Trabalhando em um ambiente novo</Text>
      <CustomButton title="Clique aqui" onPress={Clicar} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

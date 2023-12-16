import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 24,
    color: MD3Colors.primary20,
    textAlign: 'center',
  },
  progress: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});

export default styles;

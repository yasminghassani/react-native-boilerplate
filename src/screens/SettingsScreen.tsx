import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CustomButton from '@components/CustomButton';
import { Text } from 'react-native-paper';

const SettingsScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>This is the Settings Screen.</Text>
      <CustomButton
        text="Info"
        iconName="info"
        onPress={() => console.log('Settings Button Pressed')}
        mode="outlined"
        color="#6200ee"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default SettingsScreen;

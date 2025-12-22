import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, Button, Text, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Hello, React Native Paper!
        </Text>

        <Card style={styles.card}>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={() => <MaterialIcons name="folder" size={40} color="#6200ee" />}
          />
          <Card.Content>
            <Text>This is a simple card using React Native Paper with an icon.</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              icon={() => <MaterialIcons name="touch-app" size={20} color="white" />}
              onPress={() => console.log('Pressed')}
            >
              Press Me
            </Button>
          </Card.Actions>
        </Card>

        <Button
          mode="outlined"
          icon={() => <MaterialIcons name="info" size={20} color="#6200ee" />}
          onPress={() => console.log('Another Button Pressed')}
          style={styles.button}
        >
          Click Me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    marginVertical: 16,
  },
  button: {
    marginTop: 16,
  },
});

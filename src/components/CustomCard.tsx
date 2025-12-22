import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomCardProps {
  title: string;
  subtitle?: string;
  content: string;
  buttonText?: string;
  onPress?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, subtitle, content, buttonText, onPress }) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={() => <MaterialIcons name="folder" size={40} color="#6200ee" />}
      />
      <Card.Content>
        <Text>{content}</Text>
      </Card.Content>
      {buttonText && onPress && (
        <Card.Actions>
          <Button
            mode="contained"
            icon={() => <MaterialIcons name="touch-app" size={20} color="white" />}
            onPress={onPress}
          >
            {buttonText}
          </Button>
        </Card.Actions>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
});

export default CustomCard;

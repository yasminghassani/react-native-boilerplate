import React from 'react';
import { ScrollView } from 'react-native';
import CustomCard from '../components/CustomCard';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <CustomCard
        title="Home Card"
        subtitle="Card Subtitle"
        content="Welcome to the Home Screen!"
        buttonText="Press Me"
        onPress={() => console.log('Home Card Pressed')}
      />
    </ScrollView>
  );
};

export default HomeScreen;

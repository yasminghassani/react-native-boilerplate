import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import CustomCard from '../components/CustomCard';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const HomeScreen: React.FC = () => {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Runs only once on mount

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView>
      <CustomCard
        title="Home Card"
        subtitle="Card Subtitle"
        content="Welcome to the Home Screen!"
        buttonText="Press Me"
        onPress={() => console.log('Home Card Pressed')}
      />
      <View style={{ padding: 20, display: 'none' }}>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
      <View style={{ padding: 20, display: 'none' }}>
        {users.map(user => (
          <Text key={user?.id}>{user?.name}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

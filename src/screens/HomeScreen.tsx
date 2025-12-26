import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import CustomCard from '@components/CustomCard';
import CustomButton from '@components/CustomButton';
import { Button } from 'react-native-paper';
import { checkPhotoPermissionIOS } from '@utils/permission';
import { pickImage } from '@services/ImagePickerModule';

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
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  const openGallery = async () => {
    const hasPermission = await checkPhotoPermissionIOS();
    if (!hasPermission) return;

    const uri = await pickImage();
    if (uri) setImageUri(uri);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card Section */}
      <View style={styles.cardContainer}>
        <CustomCard
          title="Home Card"
          subtitle="Card Subtitle"
          content="Welcome to the Home Screen!"
          buttonText="Press Me"
          onPress={() => console.log('Home Card Pressed')}
        />
      </View>

      {/* Gallery Section */}
      <View style={styles.galleryContainer}>
        <CustomButton
          text="Open gallery"
          iconName="camera"
          onPress={openGallery}
          mode="contained"
          color="#6200ee"
        />
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.selectedImage}
            resizeMode="cover"
          />
        )}
      </View>

      {/* Counter Section */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Count: {count}</Text>
        <Button onPress={() => setCount(count + 1)}>Increase</Button>
      </View>

      {/* Users Section */}
      <View style={styles.usersContainer}>
        {users.map(user => (
          <View key={user.id} style={styles.userCard}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    marginBottom: 20,
  },
  galleryContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
  counterContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 18,
    marginBottom: 10,
  },
  usersContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  userCard: {
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  userName: {
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#555',
  },
});

export default HomeScreen;

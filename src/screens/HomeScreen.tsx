import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomCard from '../components/CustomCard';
import { Button } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { checkPhotoPermissionIOS } from '../utils/permission';

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

  // Fetch users once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size='large' style={{ flex: 1 }} />;

  // Async function for opening gallery with permission check
  const openGallery = async () => {
    const hasPermission = await checkPhotoPermissionIOS();
    if (!hasPermission) return

    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.error(response.errorMessage);
        return;
      }

      const uri = response.assets?.[0]?.uri;
      if (uri) setImageUri(uri);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomCard
        title='Home Card'
        subtitle='Card Subtitle'
        content='Welcome to the Home Screen!'
        buttonText='Press Me'
        onPress={() => console.log('Home Card Pressed')}
      />

      <View style={{ padding: 20, alignItems: 'center' }}>
        <CustomButton
          text='Open gallery'
          iconName='camera'
          onPress={openGallery} // async handled inside
          mode='contained'
          color='#6200ee'
        />
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.selectedImage}
            resizeMode='cover'
          />
        )}
      </View>

      {/* Hidden sections, you can toggle display later */}
      <View style={{ padding: 20, display: 'none' }}>
        <Text>Count: {count}</Text>
        <Button onPress={() => setCount(count + 1)}>Increase</Button>
      </View>

      <View style={{ padding: 20, display: 'none' }}>
        {users.map(user => (
          <Text key={user.id}>{user.name}</Text>
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
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default HomeScreen;

import { Alert, Linking, Platform } from 'react-native';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const checkPhotoPermissionIOS = async (): Promise<boolean> => {
  if (Platform.OS !== 'ios') return true;

  const status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
  console.log('status', status);
  if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
    return true;
  }

  Alert.alert(
    'Photo Access Required',
    'Please allow photo access to select images from your gallery.',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Open Settings',
        onPress: () => Linking.openSettings(),
      },
    ]
  );

  return false;
};

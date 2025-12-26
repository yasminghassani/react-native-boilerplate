import { TurboModuleRegistry } from 'react-native';
import type { TurboModule } from 'react-native';

interface ImagePickerModuleSpec extends TurboModule {
  launchImageLibrary(
    options: { mediaType: 'photo'; selectionLimit: number }
  ): Promise<{
    didCancel?: boolean;
    errorCode?: string;
    errorMessage?: string;
    assets?: { uri?: string }[];
  }>;
  launchCamera?(
    options: { mediaType: 'photo'; saveToPhotos?: boolean }
  ): Promise<{
    didCancel?: boolean;
    errorCode?: string;
    errorMessage?: string;
    assets?: { uri?: string }[];
  }>;
}

// Lazy-load the native module
const ImagePickerModule =
  TurboModuleRegistry.getEnforcing<ImagePickerModuleSpec>('ImagePickerModule');

export async function pickImage(): Promise<string | undefined> {
  try {
    const response = await ImagePickerModule.launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (response.didCancel) return;
    if (response.errorCode) {
      console.error(response.errorMessage);
      return;
    }

    return response.assets?.[0]?.uri;
  } catch (err) {
    console.error('Error picking image', err);
  }
}

export async function takePhoto(): Promise<string | undefined> {
  if (!ImagePickerModule.launchCamera) {
    console.warn('Camera not available');
    return;
  }

  try {
    const response = await ImagePickerModule.launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });

    if (response.didCancel) return;
    if (response.errorCode) {
      console.error(response.errorMessage);
      return;
    }

    return response.assets?.[0]?.uri;
  } catch (err) {
    console.error('Error taking photo', err);
  }
}

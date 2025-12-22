import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomButtonProps {
  text: string;
  iconName?: string;
  onPress: () => void;
  mode?: 'contained' | 'outlined' | 'text';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, iconName, onPress, mode = 'contained', color, style }) => {
  return (
    <Button
      mode={mode}
      icon={iconName ? () => <MaterialIcons name={iconName} size={20} color={color || 'white'} /> : undefined}
      onPress={onPress}
      style={style}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

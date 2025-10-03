import { ToastAndroid, Platform } from 'react-native';
export const showToast = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }
};

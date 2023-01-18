import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Jrxr',
    'user_email': 'jrxr@email.com'
  });
}
import {PreferencesKeys} from './preferences/PreferenceKeys';
import {
  storeValue,
  getValue,
  storeObject,
  getObject,
} from './preferences/AsyncStoragePreferences';

export const saveLoginSessionDetails = async (tokenType, authToken) => {
    await storeValue(PreferencesKeys.authToken, tokenType + ' ' + authToken);
    // console.log(await getLogionSessionDetails());
};

export const getLogionSessionDetails = async () => {
  let authToken = await getValue(PreferencesKeys.authToken);
  return {
    authToken: authToken.value || '',
  };
};    

export const logout = async () => {
  await storeValue(PreferencesKeys.authToken, '');
};

export const getAuthTokenDetails = async () => {
  let authToken = await getValue(PreferencesKeys.authToken);
  console.log('autht---', authToken.value);
  let bearerToken = authToken.value || '';
  return bearerToken;
};
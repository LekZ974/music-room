import { Localization } from 'expo';
import I18n from 'react-native-i18n';
import fr from './Locales/fr';
import en from './Locales/en';

I18n.fallbacks = true;
I18n.locale = Localization.locale;

I18n.translations = {
  fr,
  en,
};

export function $t(key, params = {}) {
  return I18n.t(key, params);
}

export default I18n;

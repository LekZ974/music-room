import { Localization } from 'expo';
import I18n from 'react-native-i18n';
import fr from './Locales/fr-FR';

I18n.fallbacks = true;
I18n.locale = Localization.locale;

I18n.translations = {
  fr,
};

export function $t(key, params = {}) {
  return I18n.t(key, params);
}

export default I18n;

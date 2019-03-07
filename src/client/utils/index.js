import { AvailableLanguages, DefaultLanguage } from '../configs/enums';

export function detectLanguage (userLang) {
  const lang = userLang.indexOf('-') > 0 ? userLang.split('-')[0] : userLang;
  if(lang == 'pt') return 'br';
  return AvailableLanguages.includes(lang) ? lang : DefaultLanguage;
}

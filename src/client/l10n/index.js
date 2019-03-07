import { LanguageCode } from '../configs/enums';

import * as ru from './ru';
import * as en from './en';
import * as de from './de';
import * as pl from './pl';
import * as br from './br';
import * as es from './es';

export const translations = {
  [ LanguageCode.RU ]: ru,
  [ LanguageCode.EN ]: en,
  [ LanguageCode.DE ]: de,
  [ LanguageCode.PL ]: pl,
  [ LanguageCode.BR ]: br,
  [ LanguageCode.ES ]: es
};


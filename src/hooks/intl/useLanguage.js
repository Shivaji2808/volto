import { useSelector } from 'react-redux';

/**
 * useLang hook
 *
 * This hook returns the current active language of the site.
 * It is stored in the locale key of the intl Redux store reducer.
 *
 * @export
 * @return {{ items:ContentData }}
 */
export function useLanguage() {
  const lang = useSelector((state) => state.intl.locale);
  return lang;
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from './locales/en-us.json'
import jaJP from './locales/ja-jp.json'
import ruRU from './locales/ru-ru.json'
import zhCN from './locales/zh-cn.json'
import zhTW from './locales/zh-tw.json'

const resources = {
  'en-US': enUS,
  'ja-JP': jaJP,
  'ru-RU': ruRU,
  'zh-CN': zhCN,
  'zh-TW': zhTW
}

// Navigator: 意为导航器，包含用户代理（浏览器）的状态和身份，Navigator.language 返回用户浏览器的语言设置
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
export const getLanguage = (): string => {
  return localStorage.getItem('language') || navigator.language || 'en-US'
}

// 国际化初始配置
i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(),
  fallbackLng: 'en-US',
  // 插值不转义
  interpolation: {
    escapeValue: false
  }
})

export default i18n

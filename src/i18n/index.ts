import i18next, { FallbackLng, Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

const init = (resources: Resource, lng: string, fallbackLng: FallbackLng) => {
  i18next.use(initReactI18next).init({ resources, lng, fallbackLng })
}

export { init }

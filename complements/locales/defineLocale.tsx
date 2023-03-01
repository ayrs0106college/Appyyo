import { useRouter } from 'next/router'

interface ILocale{
    SelectedLanguage:string|undefined
}

export default function defineLocale(props:ILocale){ //Complement the current route with the locale selected by user
    const { locale, locales, push } = useRouter()
    push('/', undefined, {locale:props.SelectedLanguage})
  }
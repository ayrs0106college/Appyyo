import React, { useState, useEffect } from 'react'
import { firebase, storage, authentication, firestore, functions } from '../../../public/services/firebase'
import GlobalContext from '@/complements/components/GlobalContextComp/GlobalContextComp'
import { Environment } from './JSONEnvironment'
import { NextIntlProvider } from 'next-intl'
import en from '../../../complements/locales/en.json'
import fr from '../../../complements/locales/fr.json'

const UserContext = (props: any) => {
    const [Locale, setLocale] = useState('en')
    const [Language, setLanguage] = useState(en)
    const [UsrCookie,setUsrCookie] = useState(null)

    useEffect(() => {
        switch (Locale) {
            case 'en': setLanguage(en); setLocale('en'); break;
            case 'fr': setLanguage(fr); setLocale('fr'); break;
            default: setLanguage(en); setLocale('en');
        }
    }, [Locale])
    
    return (
        <GlobalContext.Provider
            value={{
                Environment,
                UsrCookie,
                setUsrCookie,
                Locale,
                setLocale,
                Language,
                setLanguage,
            }}
        >
            <NextIntlProvider messages={Language}>
                {props.children}
            </NextIntlProvider>
        </GlobalContext.Provider>
    )
}

export default React.memo(UserContext);
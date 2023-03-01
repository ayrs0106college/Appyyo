import type { AppProps } from 'next/app'
import UserContext from '../complements/components/GlobalContextComp/UserContext'
import { firebase, storage, authentication, firestore, functions } from '../public/services/firebase'
import { useEffect } from 'react'
import '@/styles/globals.css'

export default function Appyyo({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </>
  )
}

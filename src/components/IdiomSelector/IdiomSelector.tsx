import React from 'react'
import { useTranslation } from 'react-i18next'

function IdiomSelector() {
    const { t, i18n } = useTranslation();

    const handleIdiomChange = (language: string) => {
        i18n.changeLanguage(language);
    }

  return (
    <>
        <button onClick={() => handleIdiomChange('pt-BR')}>pt-BR</button>
        <button onClick={() => handleIdiomChange('en-US')}>en-US</button>
    </>
  )
}

export default IdiomSelector
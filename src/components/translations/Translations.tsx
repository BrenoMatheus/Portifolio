import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Translations = () => {
  const [url, setUrl] = useState('./icons/translate/BR-pt.png');
  
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    if (newLanguage === 'en'){
      setUrl('./icons/translate/BR-pt.png');
    }else{
      setUrl('./icons/translate/EUA-en.png');
    }
  };

  return (
    <div className='w-full'>
      <button type="button" onClick={handleChangeLanguage} className='w-8 h-8'>
        <img src={url} alt="BR-PT" className='rounded-full grayscale hover:grayscale-0'/>
      </button>
    </div>
  );
};

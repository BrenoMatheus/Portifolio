import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';

export const Themes = () => {
  const [theme, setTheme] = useState('dark');

  const element = document.documentElement;

  const darkQuery = window.matchMedia('(prefers-color-scheme:dark)');

  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark',
    },
    {
      icon: 'desktop',
      text: 'system',
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
    case 'dark':
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      break;
    case 'light':
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      break;
    default:
      localStorage.removeItem('theme');
      break;
    }
  }, [theme]);

  return (
    <div className="flex duration-100 dark:bg-slate-950 bg-gray-100 dark:text-gray-100 rounded-lg">
      {options?.map((opt) => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1  ${
            theme === opt.text && 'text-sky-600'
          }`}
        >
          <IonIcon name={opt.icon}/>
        </button>
      ))}
    </div>
  );
};

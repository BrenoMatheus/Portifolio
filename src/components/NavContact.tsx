import { IonIcon } from '@ionic/react';

export const NavContact = () => {
  return (
    <div className="flex justify-center gap-2 p-2 text-4xl">
      <a href="https://www.linkedin.com/in/breno-jesus-b4a860279/" title='LinkedIn'>
        <IonIcon name="logo-linkedin" className="hover:scale-125 hover:duration-200 delay-200 text-sky-600 grayscale hover:grayscale-0" />
      </a>
      <a href="https://github.com/BrenoMatheus" title='GitHub'>
        <IonIcon name="logo-github" className="hover:scale-125 hover:duration-200 delay-200 text-gray-500 dark:hover:text-white hover:text-black" />
      </a>
      <a href="mailto:breno.moj99@gmail.com?subject=Contato pelo portifolio&body=Olá vi seu portifólio," title='Email'>
        <IonIcon name="mail" className="hover:scale-125 hover:duration-200 delay-200 text-gray-500 hover:text-sky-300" />
      </a>
      <a href="https://wa.me//5511945398709?text=Ola,%20tenho%20interesse%20em%20trabalhar%20com%20você" title='WhatsApp'>
        <IonIcon name="logo-whatsApp" className="hover:scale-125 hover:duration-200 delay-200 hover:bg-green-600 rounded-md hover:text-white text-gray-500 grayscale hover:grayscale-0" />
      </a>
      <a href="https://drive.google.com/file/d/1Uv7D2B37xdgiwvTFuVrXFOZ8Y_KmVgLz/view?usp=sharing" title='Download Curriculum'>
        <IonIcon name="document" className="animate-bounce text-orange-700 grayscale hover:grayscale-0" />
      </a>
    </div>
  );
};

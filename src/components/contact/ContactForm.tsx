import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: any) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os dados!');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        'service_3zpe7th',
        'template_ivo1l9h',
        templateParams,
        'zPcK39tb7AzBJUGze'
      )
      .then((response) => {
        console.log('email enviado', response.status, response.text);
        setEmail('');
        setMessage('');
        setName('');
      });
  }
  const {t} = useTranslation(); 

  useEffect(() => {
    Aos.init({duration:1200});
  });

  return (
    <div data-aos='fade-up' className="mt-20 border-gray-200 border p-4 rounded-3xl" id='Contact'>
      <div className="text-center text-4xl mb-5 mt-4">
        <h4 className="font-bold font-mono dark:text-gray-100 text-gray-900 ">
          {t('Contate-me')}
        </h4>
      </div>
      <form
        onSubmit={sendEmail}
        className="w-auto items-center justify-center center p-4"
      >
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-500 rounded shadow-lg shadow-cyan-700/20 outline-none dark:bg-gray-100 bg-gray-300"
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-500 rounded shadow-lg shadow-cyan-700/20 outline-none dark:bg-gray-100 bg-gray-300"
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Mensagem"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-500 rounded shadow-lg shadow-cyan-700/20 outline-none dark:bg-gray-100 bg-gray-300"
          />
        </div>
        <div className="pt-0 mb-3 justify-center items-center flex">
          <button
            className="dark:bg-gray-300 bg-gray-500 px-6 py-3 text-sm font-bold rounded hover:bg-clip hover:bg-transparent hover:bg-gradient-to-r from-pink-600 to-violet-600"
            type="submit"
          >
            {t('Send')}
          </button>
        </div>
      </form>
    </div>
  );
}

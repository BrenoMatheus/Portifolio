import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Themes } from '../Themes';
import { Translations } from '../translations/Translations';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from 'react-scroll';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const Menu = () => {
  const { t } = useTranslation();

  const navigation = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/breno-jesus-b4a860279/',
      current: false,
    },
    { name: 'GitHub', href: 'https://github.com/BrenoMatheus', current: false },
  ];

  const scroll = [
    { name: t('About'), to: 'About', current: true },
    { name: t('Contact'), to: 'Contact', current: false },
    { name: t('Skills'), to: 'Skills', current: false },
    { name: t('Projects'), to: 'Projects', current: false },
  ];

  return (
    <Disclosure as="nav" className=" dark:bg-gray-950 bg-gray-100 drop-shadow-md fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center">
              <div className="items-center flex gap-2 justify-between w-full">
                <div className="w-full dark:text-white">
                  <a
                    href="/"
                    className="text-xl font-bold tracking-tight  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-600 to-violet-600"
                  >
                    BrenoMatheus
                  </a>
                </div>

                <Translations />
                <Themes />
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-2">
                    {scroll.map((item) => (
                      <Link
                        activeClass="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? 'dark:bg-gray-900 dark:text-white text-gray-900 bg-gray-100'
                            : 'dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900 text-gray-900 hover:bg-gray-300 hover:text-gray-900',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'dark:bg-gray-900 dark:text-white text-gray-900 bg-gray-100'
                            : 'dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900 text-gray-900 hover:bg-gray-300 hover:text-gray-900',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'dark:bg-gray-900 bg-gray-100 border-gray-700 border dark:text-white text-gray-800'
                      : 'text-gray-100 hover:bg-gray-700 bg-gray-600 hover:text-white dark:text-gray-300 dark:hover:bg-gray-100 dark:hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

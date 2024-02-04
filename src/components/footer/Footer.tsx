import { NavContact } from '../NavContact';

export const Footer = () => {
  return (
    <footer className="text-center bg-gray-300 dark:bg-gray-950 ">
      <NavContact />
      <div className='pb-2'>
        <span className='dark:text-gray-300 text-gray-400'>© 2024 Breno Matheus</span>
      </div>
    </footer>
  );
};

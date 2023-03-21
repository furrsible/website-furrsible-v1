import Image from '../Image';
import logo from '../../images/logo.svg';
const Header = () => {
  return (
    <header className="w-full flex justify-center items-center py-10">
      <Image src={logo} alt="Logo" className="max-w-auto inline-block" />
    </header>
  );
};

export default Header;

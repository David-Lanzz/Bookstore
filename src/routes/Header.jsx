import { Outlet } from 'react-router-dom';
import Headerlink from '../components/headerlinks';

const Header = () => {
  const links = [{ link: 'BOOKS', path: '/' }, { link: 'CATEGORY', path: 'category' }];
  return (
    <div className="overall">
      <Headerlink links={links} />
      <Outlet />
    </div>
  );
};
export default Header;

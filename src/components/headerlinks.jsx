import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import PropTypes from 'prop-types';

const Headerlink = ({ links }) => (
  <section className="headercontainer parent">
    <div className="headercontainer parentcontainer">
      <h1 className="blued">Bookstore CMS</h1>
      <ul className="headercontainer child">
        {links.map((link) => <li key={link.link}><NavLink className="links route" to={link.path}>{link.link}</NavLink></li>)}
      </ul>
    </div>
    <a className="fa-solid fa-user blued" href="https://github.com/David-Lanzz/David-Lanzz" />
  </section>
);

Headerlink.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Headerlink;

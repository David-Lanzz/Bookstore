import { NavLink } from 'react-router-dom';
import '../styles/books.css';
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */

const Books = ({ books, modifybooks }) => (
  <ul>
    {books.map((element) => (
      <section key={new Date()} className="booksStorage">
        <ul>
          <li>{element.category}</li>
          <li>{element.title}</li>
          <li>{element.author}</li>
          <li>
            <NavLink className="links">Comments</NavLink>
            {' '}
            |
            {' '}
            <NavLink className="links">Remove</NavLink>
            {' '}
            |
            {' '}
            <NavLink className="links">Edit</NavLink>
          </li>
        </ul>
        <div>
          <div className="status" key={element.key} />
          <ul>
            <li>
              <h2>
                {element.percentage}
                %
              </h2>
            </li>
            <li>COMPLETED</li>
          </ul>
        </div>
        {' '}
        |
        <ul>
          <li><h5>CURRENT CHAPTER</h5></li>
          <li>{element.chapter}</li>
          <li><button type="button">UPDATE PROGRESS</button></li>
        </ul>
      </section>
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    chapter: PropTypes.number.isRequired,
  })).isRequired,
  modifybooks: PropTypes.func.isRequired,
};
export default Books;

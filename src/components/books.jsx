import '../styles/books.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeBooks, booksFromAPI, deleteFromAPI } from '../redux/features/books/bookSlice';

const Books = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { books, isLoading } = store.books;
  useEffect(() => {
    dispatch(booksFromAPI());
  });

  const handleDelete = (id) => {
    dispatch(removeBooks(id));
    dispatch(deleteFromAPI(id));
  };
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ul>
      {books.map((element) => (
        <section key={element.item_id} className="booksStorage" id={element.item_id}>
          <ul>
            <li>{element.category}</li>
            <li>{element.title}</li>
            <li>{element.author}</li>
            <li>
              <button type="button" className="links">Comments</button>
              {' '}
              |
              {' '}
              <button type="button" className="links" onClick={() => handleDelete(`${element.item_id}`)}>Remove</button>
              {' '}
              |
              {' '}
              <button type="button" className="links">Edit</button>
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
};

export default Books;

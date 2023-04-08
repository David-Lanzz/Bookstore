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
  }, []);

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
      {books.map((element) => {
        const progressStyle = {
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `conic-gradient(rgba(106, 177, 243, 0.945) ${element.degree}deg, #ededed 0deg)`,
        };
        return (
          <section key={element.item_id} className="booksStorage" id={element.item_id}>
            <ul>
              <li className="cat">{element.category}</li>
              <li className="tit"><h3>{element.title}</h3></li>
              <li className="blued">{element.author}</li>
              <li>
                <button type="button" className="links buttons blued">Comments</button>
                {' '}
                <span className="shortline">|</span>
                {' '}
                <button type="button" className="links buttons blued" onClick={() => handleDelete(`${element.item_id}`)}>Remove</button>
                {' '}
                <span className="shortline">|</span>
                {' '}
                <button type="button" className="links buttons blued">Edit</button>
              </li>
            </ul>
            <div>
              <div className="status" key={element.key} />
              <ul className="progresssect">
                <li className="percentcontainer">
                  <div
                    className="percentbar"
                    style={progressStyle}
                  />
                </li>
                <li>
                  <article>
                    <h3 className="percent">
                      {element.percentage}
                      %
                    </h3>
                  </article>
                  <article className="cat small">COMPLETED</article>
                </li>

              </ul>
            </div>
            {' '}
            <span className="vert" />
            <ul>
              <li className="cat"><h5 className="curr">CURRENT CHAPTER</h5></li>
              <li>
                Chapter
                {element.chapter}
              </li>
              <li><button type="button" className="btn">UPDATE PROGRESS</button></li>
            </ul>
          </section>
        );
      })}
    </ul>
  );
};

export default Books;

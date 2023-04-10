import '../styles/create.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBooks, postToAPI } from '../redux/features/books/bookSlice';

const Create = () => {
  const dispatch = useDispatch();
  const [err, showErr] = useState('');
  const [input, changeInput] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
  });
  const handleChange = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (input.title && input.category && input.author) {
      const newObj = { ...input, item_id: `${Math.random()}` };
      dispatch(postToAPI(newObj));
      dispatch(addBooks(newObj));
    } else {
      showErr('Please add correct parameters');
      setTimeout(() => {
        showErr('');
      }, 2000);
    }
  };
  return (
    <section className="createsection">
      <h3 className="addheader">ADD NEW BOOK</h3>
      <p className="err">{err}</p>
      <form action="" onSubmit={handleSubmit}>
        <ul className="inputcontainer">
          <li className="titlecontainer"><input placeholder="Book title" name="title" onChange={handleChange} defaultValue={input.title} className="title" type="text" /></li>
          <li className="categorycontainer"><input placeholder="Category" name="category" onChange={handleChange} defaultValue={input.category} className="category" type="text" /></li>
          <li className="authorContainer"><input type="text" name="author" onChange={handleChange} placeholder="Author" defaultValue={input.author} className="author" /></li>
          <li><input className="addbtn" type="button" onClick={handleSubmit} value="ADD BOOK" /></li>
        </ul>
      </form>
    </section>
  );
};
export default Create;

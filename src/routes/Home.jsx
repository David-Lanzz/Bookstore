import { useState } from 'react';
import Books from '../components/books';
import '../styles/home.css';
import Create from '../components/createbook';

const Home = () => {
  const [books, modifybooks] = useState([
    {
      category: 'Action', title: 'Jack the Giant slayer', author: 'lanzz', percentage: 0, chapter: 0,
    },
    {
      category: 'Action', title: 'Jack the Giant slayer', author: 'lanzz', percentage: 0, chapter: 0,
    },
    {
      category: 'Action', title: 'Jack the Giant slayer', author: 'lanzz', percentage: 0, chapter: 0,
    },
    {
      category: 'Action', title: 'Jack the Giant slayer', author: 'lanzz', percentage: 0, chapter: 0,
    },
  ]);
  return (
    <section className="home">
      <div className="BookParentElement">
        <Books books={books} modifybooks={modifybooks} />
      </div>
      <Create />
    </section>
  );
};
export default Home;

import Books from '../components/books';
import '../styles/home.css';
import Create from '../components/createbook';

const Home = () => (
  <section className="home">
    <div className="BookParentElement">
      <Books />
    </div>
    <Create />
  </section>
);
export default Home;

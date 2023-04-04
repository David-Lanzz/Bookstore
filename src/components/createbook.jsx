import '../styles/create.css';

const Create = () => (
  <section className="createsection">
    <h3>ADD NEW BOOK</h3>
    <form action="">
      <ul className="inputcontainer">
        <li className="titlecontainer"><input placeholder="Book title" className="title" type="text" /></li>
        <li className="categorycontainer"><input placeholder="Category" className="category" type="text" /></li>
        <li><button type="button">ADD BOOK</button></li>
      </ul>
    </form>
  </section>
);
export default Create;

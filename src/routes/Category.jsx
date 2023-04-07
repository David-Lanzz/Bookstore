import { useSelector } from 'react-redux';
import { useState } from 'react';

const Category = () => {
  const store = useSelector((store) => store);
  const category = store.categories;
  const [text, changeText] = useState('');
  const displayCategories = () => {
    changeText(category.categories);
  };
  return (
    <>
      <div>{text}</div>
      <button type="button" onClick={() => displayCategories()}>Check Status</button>
    </>
  );
};
export default Category;

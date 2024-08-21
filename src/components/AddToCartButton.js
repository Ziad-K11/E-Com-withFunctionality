import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const AddToCartButton = ({ id, title, price, description, discount  }) => {
    const dispatch = useDispatch();
  
    const addToCartHandler = () => {
      const product = { id, title, price, description, discount };
      dispatch(addItem(product));
    };
  
    return <button className='bg-green-500 text-white w-full py-2 rounded mt-4' onClick={addToCartHandler}>Add to Cart</button>;
  };
  
  export default AddToCartButton;
  
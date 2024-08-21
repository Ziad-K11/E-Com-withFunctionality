import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Your Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id}>
                <p>{item.name} - ${item.totalPrice}</p>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>
            ))
          )}
          <h3>Total: ${totalAmount}</h3>
        </div>
      );
    };
    
    export default Cart;
     
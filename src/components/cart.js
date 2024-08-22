import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
import { products } from './products'; 

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    
    const groupedItems = cartItems.reduce((acc, item) => {
        const product = products.find(p => p.id === item.id); 
        if (!product) return acc; 

        const existingItem = acc.find(i => i.id === item.id);
        const itemPrice = Number(product.price) || 0;

        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += itemPrice;
        } else {
            acc.push({
                id: product.id, 
                title: product.title, 
                quantity: item.quantity || 1, 
                totalPrice: itemPrice * (item.quantity || 1), 
            });
        }
        return acc;
    }, []);

    
    const totalAmount = groupedItems.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <div className='flex flex-col p-4 items-center border-solid border rounded-lg w-fit'>
          <h2 className='font-bold font-sans'>Your Shopping Cart</h2>
          {groupedItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            groupedItems.map(item => (
              <div key={item.id} className='flex flex-col w-full mb-4'>
                <p>{item.title} (x{item.quantity}) - ${item.totalPrice.toFixed(2)}</p>
                <button 
                  className='mt-2 p-2 bg-red-500 text-white rounded'
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;

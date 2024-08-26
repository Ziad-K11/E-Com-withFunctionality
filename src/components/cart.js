import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { removeItem } from '../redux/cartSlice';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch products from the public directory
        fetch('/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Group and summarize cart items
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
        <div className='p-4 w-full'>
            <div className='text-3xl font-bold mb-4'>Your Shopping Cart</div>
            <div className='flex flex-col p-4 items-center border-solid border rounded-lg w-fit'>
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
            </div>
            <div className='flex flex-row-reverse mt-4'>
                <h3 className='text-xl font-bold text-gray-700'>
                    Total: <span className='text-2xl text-green-600'>${totalAmount.toFixed(2)}</span>
                </h3>
            </div>
        </div>
    );
};

export default Cart;

import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice';
import Cart from '../components/cart';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import '../../src/app/globals.css';

const HomePage = () => {

  const showCart = useSelector((state) => state.cart.showCart);

  const products = [
    { id: 1, title: 'Product Title', price: '1.48', description: 'Space for a small product description', discount: '  ' },
    { id: 2, title: 'Product Title', price: '0.28', description: 'Space for a small product description', discount: '36' },
    { id: 3, title: 'Product Title', price: '1.12', description: 'Space for a small product description', discount: '36' },
    { id: 4, title: 'Product Title', price: '1.48', description: 'Space for a small product description', discount: '  ' },
    { id: 5, title: 'Product Title', price: '0.28', description: 'Space for a small product description', discount: '36' },
    { id: 6, title: 'Product Title', price: '1.12', description: 'Space for a small product description', discount: '36' },
    { id: 7, title: 'Product Title', price: '1.48', description: 'Space for a small product description', discount: '  ' },
    { id: 8, title: 'Product Title', price: '0.28', description: 'Space for a small product description', discount: '36' },
    { id: 9, title: 'Product Title', price: '1.12', description: 'Space for a small product description', discount: '36' }
    // Add more products here
  ];

  return (
    <Layout>
      <section className="flex mt-8">
        {/* Categories and Product Section */}
        {!showCart && (
          <>
            <div className="w-1/4 pr-8">
              <h2 className="font-bold text-xl mb-4">Categories</h2>
              <ul className="space-y-3">
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Meat and fish</a></li>
                <li><a href="#">Special nutrition</a></li>
                <li><a href="#">Pharmacy</a></li>
                <li><a href="#">Baby</a></li>
              </ul>
            </div>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                discount={product.discount}
                id={product.id}
                />
              ))}
            </div>
          </>
        )}

        {/* Cart Section */}
        {showCart && (
          <div className="w-full">
            <Cart />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default HomePage;


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import '../../src/app/globals.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const showCart = useSelector((state) => state.cart.showCart);

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

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <div className="flex mt-8 justify-center">
        {!showCart && (
          <>
            <div className="w-1/4 pr-8">
              <h2 className="font-bold text-xl mb-4">Categories</h2>
              <ul className="space-y-3 text-[#6A983C] underline">
                <li><a href="#" onClick={() => setSelectedCategory('All')}>All</a></li>
                <li><a href="#" onClick={() => setSelectedCategory('Kitchen')}>Kitchen</a></li>
                <li><a href="#" onClick={() => setSelectedCategory('Meat and fish')}>Meat and fish</a></li>
                <li><a href="#" onClick={() => setSelectedCategory('Special nutrition')}>Special nutrition</a></li>
                <li><a href="#" onClick={() => setSelectedCategory('Pharmacy')}>Pharmacy</a></li>
                <li><a href="#" onClick={() => setSelectedCategory('Baby')}>Baby</a></li>
              </ul>
            </div>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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

        {showCart && (


          <Cart products={filteredProducts} />

        )}
      </div>
    </Layout>
  );
};

export default HomePage;

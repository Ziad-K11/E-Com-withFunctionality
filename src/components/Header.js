import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { toggleCart,selectCartItemCount } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDropdown, closeDropdown } from '../redux/dropdownSlice';
import Image from 'next/image';

const Header = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);
  const cartItemCount = useSelector(selectCartItemCount);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const dropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);

  const handleOpenCart = () => {
    if (!showCart) {
      dispatch(toggleCart());
    }
  };

  const handleGoBack = () => {
    if (showCart) {
      dispatch(toggleCart());
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      dispatch(closeDropdown());
    }

    if (
      searchDropdownRef.current &&
      !searchDropdownRef.current.contains(event.target)
    ) {
      setIsCategoryOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownData = {
    Bakery: ['Cakes', 'Breads', 'Pastries'],
    'Fruit and vegetables': ['Fruits', 'Vegetables'],
    'Meat and fish': ['Meat', 'Fish'],
    Drinks: ['Soda', 'Juice', 'Water'],
    Kitchen: ['Cookware', 'Utensils', 'Appliances'],
    'Special nutrition': ['Gluten-free', 'Vegan', 'Organic'],
    Baby: ['Diapers', 'Baby Food', 'Toys'],
    Pharmacy: ['Medicines', 'Vitamins', 'Supplements'],
  };

  return (
    <header>
      <div className="container px-11 flex justify-between items-center">
        <div className="text-sm text-[#151515] flex gap-8">
          <span className='text-[#6A983C]'>Chat with us</span>
          <span>+420 336 775 664</span>
          <span>info&#64;freshnessecom.com</span>
        </div>
        <div className="flex text-[#6A983C] gap-10">
          <button href="#" >Blog</button>
          <button href="#" >About Us</button>
          <button href="#" >Careers</button>
        </div>
      </div>
      <hr className='mx-11' />

      <div className="flex flex-rows px-11 justify-between my-10">
        <div>
          <button onClick={handleGoBack}>
            <Image src='brand.svg' alt="Brand" width={177} height={50} />
          </button>
        </div>
        <div className='w-2/5'>
          <div className="relative flex flex-row" ref={searchDropdownRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="border border-[#D1D1D1] rounded-l px-4 py-2 font-bold leading-6 text-black bg-[#F9F9F9] flex items-center justify-between w-64"
            >
              {selectedCategory}
              <Image
                src="DropDownArrow.svg"
                alt="Dropdown Arrow"
                width={12}
                height={6}
                className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : 'rotate-0'
                  }`}
              />
            </button>
            {isCategoryOpen && (
              <div
                className="absolute mt-8 w-64 bg-[#F9F9F9] border border-[#D1D1D1] rounded-lg shadow-lg z-50"
              >
                {Object.keys(dropdownData).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            <input
              type="text"
              placeholder="Search Products, categories ..."
              className="border border-[#D1D1D1] rounded-r w-full px-4 py-2 font-normal text-sm leading-5 bg-[#F9F9F9]"
            />
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <Image className='self-center' src="ic-actions-user.svg" alt="User" width={24} height={24} />
          <button
            onClick={handleOpenCart}
            className="relative p-0 border-none bg-transparent"
          >
            <Image
              src='ic-ecommerce-basket.svg'
              alt="Cart"
              width={24}
              height={24}
            />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-bold bg-red-500 text-white rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <nav className="bg-[#F9F9F9] py-2 pl-11">
        <div className="container mx-auto flex space-x-4 gap-10">
          {Object.keys(dropdownData).map((link) => (
            <div key={link} className="relative" ref={dropdownRef}>
              <button
                className="hover:text-gray-700 flex items-center space-x-1"
                onClick={() => dispatch(toggleDropdown(link))}
              >
                <span>{link}</span>
                <Image
                  src="DropDownArrow.svg"
                  alt="Dropdown Arrow"
                  width={12}
                  height={6}
                  className={`transition-transform duration-300 ${activeDropdown === link ? 'rotate-180' : 'rotate-0'
                    }`}
                />
              </button>
              {activeDropdown === link && (
                <div
                  className="absolute mt-2 bg-white shadow-lg rounded-lg z-50"
                >
                  {dropdownData[link].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

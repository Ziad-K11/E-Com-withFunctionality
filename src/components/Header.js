import Link from 'next/link';
import { toggleCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDropdown, closeDropdown } from '../redux/dropdownSlice';


const Header = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);
  const handleToggle = () => {
    dispatch(toggleCart());
  };
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
    <header className="">
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
        <div><img src='brand.svg' /></div>
        <div className='w-2/5'>
          <div className="flex flex-row">
            <select className="border border-[#D1D1D1] rounded-l px-4 py-2 font-bold leading-6 text-black bg-[#F9F9F9] ">
              <option>All categories</option>
              {/* Add more categories here */}
            </select>
            <input
              type="text"
              placeholder="Search Products, categories ..."
              className="border border-[#D1D1D1] rounded-r w-full px-4 py-2 font-normal text-sm leading-5 bg-[#F9F9F9]"
            />
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <img className='w-6 h-6 self-center' src="ic-actions-user.svg" alt="User" />
          <button
            onClick={handleToggle}
            className="p-0 border-none bg-transparent"
          >
            <img
              src={showCart ? 'shopping-bag-svgrepo-com.svg' : 'ic-ecommerce-basket.svg'}
              alt={showCart ? 'Show Products' : 'Show Cart'}
              className="w-6 h-6"
            />
          </button>
          {/* <img className='w-6 h-6' src="ic-ecommerce-basket.svg" alt="Cart" /> */}
        </div>
      </div>
      <nav className="bg-[#F9F9F9] py-2 pl-11">
      <div className="container mx-auto flex space-x-4 gap-10">
      {Object.keys(dropdownData).map((link) => (
        <div key={link} className="relative">
          <button
            className="hover:text-gray-700 flex items-center space-x-1"
            onClick={() => dispatch(toggleDropdown(link))}
          >
            <span>{link}</span>
            <img
              src={`DropDownArrow.svg`} 
              alt="Dropdown Arrow"
              className={`transition-transform duration-300 ${
                activeDropdown === link ? 'rotate-180' : 'rotate-0'
              } w-4 h-4`} // Adjust size as needed
            />
          </button>

          {activeDropdown === link && (
            <div
              className="absolute mt-2 bg-white shadow-lg rounded-lg"
              onMouseLeave={() => dispatch(closeDropdown())}
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

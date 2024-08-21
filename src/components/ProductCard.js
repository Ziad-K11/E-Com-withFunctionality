import AddToCartButton from '../components/AddToCartButton';

const ProductCard = ({ id, title, price, description, discount }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="mb-4">
          <img src="Basics.svg" alt={title} className="w-full h-48 object-cover" />
        </div>
        <div className="space-y-2">
          {discount && <span className="text-red-500 font-bold">{discount}% OFF</span>}
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="text-green-600 font-bold text-lg">${price}</div>
          <AddToCartButton id={id} title={title} price={price} description={description} discount={discount}/>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
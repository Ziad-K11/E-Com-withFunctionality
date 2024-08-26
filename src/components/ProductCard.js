import AddToCartButton from '../components/AddToCartButton';
import Image from 'next/image';

const ProductCard = ({ id, title, price, description, discount }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <Image src="Basics.svg" alt={title} className="object-cover" width={0}

          height={0}

          sizes="100vw"

          style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="space-y-2">
        {discount && <span className="text-red-500 font-bold">{discount}% OFF</span>}
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-green-600 font-bold text-lg">${price}</div>
        <AddToCartButton id={id} title={title} price={price} description={description} discount={discount} />
      </div>
    </div>
  );
};

export default ProductCard;

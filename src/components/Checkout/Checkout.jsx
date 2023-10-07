
import './checkout.css'
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../../context/Context';

const Checkout = () => {
 const [{ basket }, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((product , i) => (
          <CheckoutProduct
            key={i}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout
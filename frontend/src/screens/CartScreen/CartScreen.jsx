import { CartItem } from "../../components";
import "./CartScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../features/cartSlice";

const CartScreen = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const qtyChangeHandler = (id, qty) => {
		console.log(qty);
		dispatch(addToCart(id, qty));
	};
	const removeItem = (id) => {
		dispatch(removeFromCart(id));
	};
	return (
		<div className="cartscreen">
			<div className="cartscreen__left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty <Link to="/">Go back</Link>
					</div>
				) : (
					cartItems.map((item) => (
						<CartItem
							item={item}
							qtyChangeHandler={qtyChangeHandler}
							removeFromCart={removeItem}
						/>
					))
				)}
			</div>
			<div className="cartscreen__right">
				<div className="cartscreen__info">
					<p>SubTotal: (0) items</p>
					<p>$499.99</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;

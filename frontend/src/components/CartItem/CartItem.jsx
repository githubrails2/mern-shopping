import { Link } from "react-router-dom";
import "./CartItem.css";
const CartItem = () => {
	return (
		<div className="cartitem">
			<div className="cartitem__image">
				<img src="" alt="" />
			</div>
			<Link to={`/product/${111}`} className="cartitem__name">
				<p>Product X</p>
			</Link>
			<p className="cartitem__price">$499.99</p>
			<select className="cartitem__select">
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
				<option value=""></option>
			</select>
			<button className="cartitem__deleteBtn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default CartItem;

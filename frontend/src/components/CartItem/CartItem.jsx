import { Link } from "react-router-dom";

import "./CartItem.css";
const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
	console.log(item);
	return (
		<div className="cartitem">
			<div className="cartitem__image">
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<Link to={`/product/${item.product}`} className="cartitem__name">
				<p>{item.name}</p>
			</Link>
			<p className="cartitem__price">${item.price}</p>
			<select
				className="cartitem__select"
				value={item.qty}
				onChange={(e) => {
					console.log(e.target.value);
					return qtyChangeHandler(item.product, e.target.value);
				}}
			>
				{[...Array(item.countInStock).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>
			<button
				className="cartitem__deleteBtn"
				onClick={removeFromCart(item.product)}
			>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default CartItem;

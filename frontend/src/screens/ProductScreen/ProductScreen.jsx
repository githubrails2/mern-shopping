import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../features/productSlice";
import { addToCart } from "../../features/cartSlice";
const ProductScreen = ({ match, history }) => {
	const [qty, setQuantity] = useState(1);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.products);
	const { product_error, product } = productDetails;
	useEffect(() => {
		if (product && match.params.id !== product._id) {
			dispatch(fetchProductDetails(match.params.id));
		}
	}, [product, match, dispatch]);
	const addHandler = () => {
		dispatch(addToCart(product._id, qty));
		history.push("/cart");
	};
	return (
		<div className="productscreen">
			<div className="productscreen__left">
				<div className="left__image">
					<img src={product.imageUrl} alt={product.name} />
				</div>
				<div className="left__info">
					<p className="left__name">{product.name}</p>
					<p className="left__price">Price: ${product.price}</p>
					<p className="left__desc">
						{product.description?.substring(0, 100)}...
					</p>
				</div>
			</div>

			<div className="productscreen__right">
				<div className="right__info">
					<p className="right__price">
						Price: <span>${product.price * qty}</span>
					</p>
					<p>
						Status:{" "}
						<span>{product.countInStock > 0 ? "In Stock" : "Out Stock"}</span>
					</p>
					<p>
						Qty
						<select value={qty} onChange={(e) => setQuantity(e.target.value)}>
							{[...Array(product.countInStock).keys()].map((x) => (
								<option key={x + 1} value={x + 1}>
									{x + 1}
								</option>
							))}
						</select>
					</p>
					<p>
						<button onClick={addHandler}>Add To Cart</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;

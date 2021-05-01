import { useEffect } from "react";
import "./HomeScreen.css";
import { Product } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
const HomeScreen = () => {
	const dispatch = useDispatch();
	const { products_error, products } = useSelector((state) => state.products);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<div className="homescreen">
			<h2 className="homescreen__title">Latest Products</h2>
			<div className="homescreen__products">
				{products &&
					products.map((product) => {
						return (
							<Product
								key={product._id}
								imageUrl={product.imageUrl}
								productId={product._id}
								name={product.name}
								description={product.description}
								price={product.price}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default HomeScreen;

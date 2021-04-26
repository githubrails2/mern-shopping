import "./ProductScreen.css";
const ProductScreen = () => {
	return (
		<div className="productscreen">
			<div className="productscreen__left">
				<div className="left__image">
					<img src="" alt="" />
				</div>
				<div className="left__info">
					<p className="left__name">Product 1</p>
					<p className="left__price">Price: $499.99</p>
					<p className="left__desc">
						Lorem occaecat dolore proident esse fugiat eiusmod ut elit veniam
						officia aute.Adipisicing deserunt duis officia fugiat.
					</p>
				</div>
			</div>
			<div className="productscreen__right">
				<div className="right__info">
					<p className="right__price">
						Price: <span>$499.99</span>
					</p>
					<p>
						Status: <span>In Stock</span>
					</p>
					<p>
						Qty
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button>Add To Cart</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;

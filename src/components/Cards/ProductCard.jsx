import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
	const { id, thumbnail, price, category } = product;
	return (
		<div className="bg-gray-100 p-6 rounded shadow-lg">
			<img
				className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
				src={thumbnail}
				alt=""
			/>
			<p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
			<p className="text-gray-700 ">Category: {category}</p>
			<p className="text-gray-700 font-bold">Price: {price}$</p>
			<div className="flex items-center justify-between">
				<Link
					to={`/${id}`}
					type="button"
					className="btn-secondary text-center w-full block"
				>
					View Details
				</Link>
				<button
					onClick={() => handleAddToCart(product)}
					type="button"
					className="btn-secondary w-full block"
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

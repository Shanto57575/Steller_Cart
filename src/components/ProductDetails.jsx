import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
	const data = useLoaderData();

	const discountPrice =
		data.price - (data.price * data.discountPercentage) / 100;

	return (
		<div className="container mx-auto my-10 font-serif">
			<h1 className="text-2xl font-bold text-center mb-5">
				Details About {data.title}
			</h1>
			<div className="card lg:card-side shadow-md shadow-cyan-400 rounded-none">
				<figure className="h-72">
					<img src={data.thumbnail} alt="Album" />
				</figure>
				<div className="card-body">
					<p>
						Product Description :
						<span className="text-white font-bold"> {data.description}</span>
					</p>
					<p>
						Category :
						<span className="text-white font-bold"> {data.category}</span>
					</p>
					<p>
						Brand : <span className="text-white font-bold"> {data.brand}</span>
					</p>
					<p>
						rating :<span className="text-white font-bold"> {data.rating}</span>
					</p>
					<p>
						Price: $<s> {data.price}</s>
					</p>
					<p>
						Offer Price :
						<span className="text-white font-bold">
							${discountPrice.toFixed(2)}
						</span>
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
				{data.images.map((img, index) => (
					<div key={index}>
						<img className="w-96 h-64" src={img} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductDetails;

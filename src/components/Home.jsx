import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section>
			<div className="bg-gray-200">
				<div className="my-container flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900">
					<h1 className="text-2xl pt-8 w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
						Welcome To Steller Cart
					</h1>
					<p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
						Discover the pinnacle of online shopping with our E-commerce
						platform, delivering excellence in every transaction
					</p>
					<div className="flex flex-wrap justify-center">
						<Link to="/shop">
							<button type="button" className="btn-primary">
								Shop Now
							</button>
						</Link>
						<Link to="/">
							<button type="button" className="btn-outlined">
								Learn more
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;

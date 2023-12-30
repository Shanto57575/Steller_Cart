import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const App = () => {
	const { products, initialCart } = useLoaderData();
	const [cart, setCart] = useState(initialCart);

	return (
		<ProductContext.Provider value={products}>
			<CartContext.Provider value={[cart, setCart]}>
				<Header />
				<div className="font-serif md:min-h-[calc(100vh-341px)]">
					<Outlet />
				</div>
				<Footer />
			</CartContext.Provider>
		</ProductContext.Provider>
	);
};

export default App;

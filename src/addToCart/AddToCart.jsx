import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function AddToCart() {
  const { addToCart } = useContext(AuthContext);
  const [subtotal, setSubtotal] = useState(0);

  // Calculate subtotal whenever cart changes
  useEffect(() => {
    const newSubtotal = addToCart.reduce(
      (acc, item) => acc + (item.price || 1) * (item.quantity || 1),
      0
    );
    setSubtotal(newSubtotal);
  }, [addToCart]);

  return (
    <div className="container px-4 py-8 mx-auto mt-20">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
        Your Shopping Cart
      </h2>
      {addToCart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 bg-white p-6 rounded-md shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Product</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Subtotal</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {addToCart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-semibold bg-gray-200 rounded hover:bg-gray-300"
              >
                Return to Shop
              </Link>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cart Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold text-gray-800">Free</span>
            </div>
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/billing-details"
              className="block w-full px-4 py-2 mt-4 text-center text-white bg-red-500 rounded hover:bg-red-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is currently empty.</p>
          <Link
            to="/"
            className="inline-block px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Return to Shop
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddToCart;

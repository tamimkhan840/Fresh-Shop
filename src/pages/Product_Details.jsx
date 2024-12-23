import { useContext } from "react";
import { AuthContext } from "../context";

function Product_Details() {

  const { addToCart, setAddToCart ,product} = useContext(AuthContext);

  const addHandler = (product) => {
      console.log(product);

    const exist = addToCart.find((item) => item.id === product.id);

    if (!exist) {
      setAddToCart([...addToCart, product]);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col lg:flex-row">
        {/* Thumbnail Images */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col space-y-4">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-24 h-24"
            />
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-24 h-24"
            />
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-24 h-24"
            />
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-24 h-24"
            />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="flex justify-center flex-1 mt-8 lg:justify-start lg:mt-0 lg:ml-8">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-96 h-96"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <div className="mb-2 text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Account
            </a>{" "}
            / <a href="#" className="hover:underline">
              {product.category}
            </a>{" "}
            / {product.title}
          </div>
          <h1 className="mb-2 text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star ${
                    index < product.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              (150 Reviews)
            </span>
          </div>
          <div className="mb-4 text-lg text-green-500">In Stock</div>
          <div className="mb-4 text-2xl font-bold">${product.price}</div>
          <p className="mb-4 text-gray-700">{product.description}</p>

          {/* Add to Cart Button */}
          <div className="flex items-center mb-4">
          <button
            onClick={() => addHandler(product)}
            className={` px-3 rounded-md py-2 text-center text-white transition-opacity duration-300 ${
            addToCart.find((items) => items.id === product.id)
                ? "bg-rose-500"
                : "bg-black"
            }`}
        >
            {addToCart.find((items) => items.id === product.id)
            ? "Already Added"
            : "Add To Cart"}
            </button>
          </div>

          {/* Delivery Info */}
          <div className="py-4 border-t border-b border-gray-300">
            <div className="flex items-center mb-2">
              <i className="mr-2 text-gray-500 fas fa-truck"></i>
              <span className="text-gray-700">Free Delivery</span>
              <a
                href="#"
                className="ml-2 text-blue-500 hover:underline"
              >
                Enter your postal code for Delivery Availability
              </a>
            </div>
            <div className="flex items-center">
              <i className="mr-2 text-gray-500 fas fa-undo"></i>
              <span className="text-gray-700">Return Delivery</span>
              <a
                href="#"
                className="ml-2 text-blue-500 hover:underline"
              >
                Free 30 Days Delivery Returns. Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Details;

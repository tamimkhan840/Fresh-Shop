import { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context";



function ProductWear() {
  const {addToCart,setAddToCart, setProduct} = useContext(AuthContext)
  const products = useLoaderData()



    const addHandler = (product) => {
      const exist = addToCart.find((item) => item.id === product.id);

      if (!exist) {
        setAddToCart([...addToCart, product]);
      }
    };
    const productHandler = (item) => {
      setProduct(item)
    };




  return (
    <>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            {`Women's Clothing`}
          </h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 container">
            {products.length > 0 ? products?.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
              >
                {/* Image Section */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-red-500 font-bold">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < item.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.208a1 1 0 00.95.69h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.597a1 1 0 00-.364 1.118l1.357 4.208c.3.921-.755 1.688-1.539 1.118l-3.584-2.597a1 1 0 00-1.176 0L5.98 17.688c-.784.57-1.838-.197-1.539-1.118l1.357-4.208a1 1 0 00-.364-1.118L1.85 9.635c-.783-.57-.381-1.81.588-1.81h4.42a1 1 0 00.95-.69l1.357-4.208z" />
                      </svg>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex flex-row justify-between items-center">
                    <button
                      onClick={() => addHandler(item)}
                      className={` px-3 rounded-md py-2 text-center text-white transition-opacity duration-300 ${
                        addToCart.find((items) => items.id === item.id)
                          ? "bg-rose-500"
                          : "bg-black"
                      }`}
                    >
                      {addToCart.find((items) => items.id === item.id)
                        ? "Already Added"
                        : "Add To Cart"}
                    </button>
                    <Link
                      to={`/Products/${item.id}`}
                      onClick={() => productHandler(item)}
                      className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center justify-center space-x-2"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            )):
            <div>Not Found...........</div>
          }
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductWear

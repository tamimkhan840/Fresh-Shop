import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context";

const womenClothing = [
    {
        id: 1,
        name: "Silk Saree",
        price: 1200.99,
        rating: 4.5,
        color: "Red",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://www.mysoresareeudyog.com/media/wysiwyg/art_silk_1.PNG",
    },
    {
        id: 2,
        name: "Cotton Kurti",
        price: 750.5,
        rating: 4.2,
        color: "White",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable wearing.",
        image: "https://s.alicdn.com/@sc04/kf/H6b35ccd35ba24bb3aa3fd013adcd421dw.jpg",
    },
    {
        id: 3,
        name: "Georgette Lehenga",
        price: 4599.99,
        rating: 4.8,
        color: "Pink",
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        image: "https://glamourental.com/cdn/shop/files/Stunning_Cream_Georgette_Lehenga_Choli_with_Intricate_Sequins_-_Rent.jpg",
    },
    {
        id: 4,
        name: "Anarkali Suit",
        price: 2200.0,
        rating: 4.6,
        color: "Blue",
        description: "The color could be slightly different between on the screen and in practice.",
        image: "https://www.inddus.com/cdn/shop/products/pink-net-partywear-anarkali-suit-478503.jpg",
    },
    {
        id: 5,
        name: "Chiffon Dupatta",
        price: 450.49,
        rating: 4.1,
        color: "Yellow",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
        image: "https://www.kayseria.com/cdn/shop/files/GTX5695-73-_1.jpg",
    },
    {
        id: 6,
        name: "Denim Jacket",
        price: 1599.89,
        rating: 4.3,
        color: "Dark Blue",
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        image: "https://shopaudaciousboutique.com/cdn/shop/files/IMG_6165_1_2048x.jpg",
    },
    {
        id: 7,
        name: "Embroidered Blouse",
        price: 999.99,
        rating: 4.7,
        color: "Golden",
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.",
        image: "https://i.ebayimg.com/images/g/AOMAAOSwuEheUd88/s-l1600.webp",
    },
    {
        id: 8,
        name: "Party Gown",
        price: 3200.0,
        rating: 4.9,
        color: "Maroon",
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
        image: "https://www.kayseria.com/cdn/shop/files/GTX5695-73-_1.jpg",
    },
    {
        id: 9,
        name: "Silk Dupatta",
        price: 899.5,
        rating: 4.2,
        color: "Green",
        description: "Fast data transfers, improved PC performance, and high capacity.",
        image: "https://images.pexels.com/photos/28831537/pexels-photo-28831537/free-photo-of-elegant-eastern-bridal-fashion-portrait.jpeg",
    },
    {
        id: 10,
        name: "Printed Maxi Dress",
        price: 1400.99,
        rating: 4.4,
        color: "Floral",
        description: "Easy upgrade for faster boot up, shutdown, and app load.",
        image: "https://images.pexels.com/photos/11556942/pexels-photo-11556942.jpeg",
    },
];


function Allproduct() {
    const [favorites, setFavorites] = useState([]);
     const {addToCart,setAddToCart, setProduct} = useContext(AuthContext)

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const addHandler = (product) => {
      console.log(product);
      
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 container">
                    {womenClothing.map((item) => (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
                      >
                        {/* Favorite Icon */}
                        <button
                          className={`absolute top-2 right-2 p-2 rounded-full ${
                            favorites.includes(item.id)
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 text-gray-500"
                          }`}
                          onClick={() => toggleFavorite(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>

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
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>

                          {/* Rating */}
                          <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <svg
                                key={index}
                                className={`w-5 h-5 ${
                                  index < item.rating ? "text-yellow-400" : "text-gray-300"
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


                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default Allproduct;

import  { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AuthContext } from "../context";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem({ item }) {
  const { setAddToCart } = useContext(AuthContext);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setAddToCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
        )
      );
    }
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setAddToCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <tr className="border-b text-sm">
      <td className="flex items-center gap-4 py-2">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-16 h-16 rounded"
        />
        <span className="text-xs md:text-base font-medium">{item.name}</span>
      </td>
      <td className="py-2">${(item.price || 1).toFixed(2)}</td>
      <td className="py-2">
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() =>
              handleQuantityChange(item.id, (item.quantity || 1) - 1)
            }
            className="p-1 rounded-full bg-gray-200 shadow hover:bg-gray-300"
          >
            <AiOutlineMinus />
          </button>
          <span className="px-2 py-1 bg-gray-100 rounded">
            {item.quantity || 1}
          </span>
          <button
            onClick={() =>
              handleQuantityChange(item.id, (item.quantity || 1) + 1)
            }
            className="p-1 rounded-full bg-gray-200 shadow hover:bg-gray-300"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td className="py-2">${((item.price || 1) * (item.quantity || 1)).toFixed(2)}</td>
      <td className="py-2">
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="text-red-500 hover:underline"
        >
          <RiDeleteBin6Line size={25}/>
        </button>
      </td>
    </tr>
  );
}

export default CartItem;

import { useEffect, useState } from "react";

// Reads globalProducts from Admin
// In a real app, this would come from backend or localStorage
import { globalProducts } from "./AdminPage"; // since same module

export default function TransformPage() {
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productCode = params.get("product");

    // Use AdminPage mock products
    if (productCode && globalProducts[productCode]) {
      setRedirectUrl(globalProducts[productCode]);
    }
  }, []);

  const handleShopping = () => {
    window.location.href = redirectUrl || "https://parenus.com";
  };

  const handleChat = () => {
    const message = redirectUrl
      ? `Hi, I'm interested in ${redirectUrl}`
      : "Hi, I want to know more about your products";

    window.open(
      `https://wa.me/918688847098?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          How would you like to continue?
        </h1>

        <button
          onClick={handleShopping}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl mb-4 hover:bg-indigo-700"
        >
          🛒 Continue Shopping
        </button>

        <button
          onClick={handleChat}
          className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600"
        >
          💬 Chat With Us Now
        </button>
      </div>
    </div>
  );
}

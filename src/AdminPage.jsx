import { useState } from "react";

// This is in-memory only, not localStorage
let globalProducts = {
  greenbottle: "https://parenus.com/products/95571236-694c-452e-a6b2-3c29fa455fb3"
};

export default function AdminPage() {
  const [productCode, setProductCode] = useState("");
  const [productLink, setProductLink] = useState("");
  const [products, setProducts] = useState({ ...globalProducts });

  const saveProduct = () => {
    if (!productCode || !productLink) {
      alert("Enter both product code and link");
      return;
    }

    const updated = {
      ...products,
      [productCode]: productLink
    };

    globalProducts = { ...updated }; // update global mock data
    setProducts(updated);
    setProductCode("");
    setProductLink("");
    alert("Product saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Admin – Add Product Link</h2>

        <input
          placeholder="Product Code (e.g. greenbottle)"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <input
          placeholder="Product URL"
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          onClick={saveProduct}
          className="w-full bg-indigo-600 text-white py-2 rounded mb-4"
        >
          Save Product
        </button>

        <div className="mt-4 text-sm">
          <strong>Saved Products:</strong>
          <pre className="bg-gray-200 p-2 mt-2 rounded">
            {JSON.stringify(products, null, 2)}
          </pre>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          The saved products are globally available for Transform Page.
        </p>
      </div>
    </div>
  );
}

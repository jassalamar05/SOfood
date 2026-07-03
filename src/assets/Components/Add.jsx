import { useState } from "react";
import toast from "react-hot-toast";

export default function Add() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const addFood = async () => {
    // ✅ Frontend validation
    if (!name.trim() || !category.trim() || price === "") {
      toast.error("Fill all the fields");
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      toast.error("Price must be more than 0");
      return;
    }

    try {
      setLoading(true);
      setErr(null);

      const res = await fetch("http://localhost:500/api/addFood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          category: category.trim(),
          price: Number(price),
        }),
      });

      const result = await res.json();

      // ❌ Backend error
      if (!res.ok) {
        throw new Error(result.message || "Failed to add food");
      }

      // ✅ React state update
      setData((prev) => [...prev, result.data]);

      toast.success("Food added successfully");

      // ✅ Clear form
      setName("");
      setCategory("");
      setPrice("");
    } catch (error) {
      setErr(error.message);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="text-center text-3xl text-orange-500 font-bold">
        Adding Food Items
      </p>

      <section className="grid gap-3 pt-12 px-6 sm:px-20 lg:px-96">
        <input
          type="text"
          placeholder="Food Name"
          className="bg-orange-400 py-2 px-4 outline-none rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="bg-orange-400 py-2 px-4 outline-none rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="bg-orange-400 py-2 px-4 outline-none rounded appearance-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={addFood}
          disabled={loading}
          className={`py-2 rounded-md font-semibold transition ${
            loading
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-gray-800 text-orange-500 hover:bg-gray-900"
          }`}
        >
          {loading ? "Adding..." : "Add Food"}
        </button>
      </section>
    </>
  );
}

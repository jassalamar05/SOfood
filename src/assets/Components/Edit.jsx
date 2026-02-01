
import { useEffect, useState } from "react";

export default function Edits() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch("http://localhost:500/api/getFood");
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch food items");
        }

        setData(result.data);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* STATUS */}
      {loading && (
        <p className="text-center text-gray-600 mt-6">Loading...</p>
      )}

      {err && (
        <p className="text-red-500 text-center mt-6">{err}</p>
      )}

      {/* LIST */}
      <section className="px-4 sm:px-16 lg:px-40 mt-10 space-y-4">

        {/* TABLE HEADER */}
<div className="grid grid-cols-4 bg-gray-800 text-white px-4 py-3 rounded font-semibold">
  <p className="text-left">Name</p>
  <p className="text-center">Category</p>
  <p className="text-center">Price</p>
  <p className="text-right">Action</p>
</div>


        {data.map((item) => (
   <div
  key={item._id}
  className="
    grid
    grid-cols-4
    items-center
    bg-orange-400
    px-4
    py-3
    rounded
    shadow
  "
>
  <p className="font-semibold">{item.name}</p>
  <p className="text-center">{item.category}</p>
  <p className="text-center">₹ {item.price}</p>

  <div className="text-right">
    <button
      onClick={() => setEdit(item)}
      className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-900"
    >
      Edit
    </button>
  </div>
</div>

        ))}

        {/* EMPTY STATE */}
        {!loading && data.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No food items found
          </p>
        )}
      </section>

      {/* EDIT DEBUG (optional) */}
      {edit && (
        <p className="text-center text-sm mt-6 text-green-700">
          Editing: <strong>{edit.name}</strong>
        </p>
      )}
    </>
  );
}

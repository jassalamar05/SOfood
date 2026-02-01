import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Update() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  /* ================= GET DATA ================= */
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch("http://localhost:500/api/getFood");
        const result = await res.json();

        setData(result.data);
      } catch (error) {
        setErr("Failed to fetch food items");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  /* ================= UPDATE ================= */
  const update = async () => {
    // frontend validation
    if (
      !edit.name.trim() ||
      !edit.category.trim() ||
      edit.price === ""
    ) {
      toast.error("Fill all the fields");
      return;
    }

    if (isNaN(edit.price) || Number(edit.price) <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:500/api/updateFood/${edit._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: edit.name.trim(),
            category: edit.category.trim(),
            price: Number(edit.price),
          }),
        }
      );

      const result = await res.json();

      // update UI
      setData((prev) =>
        prev.map((item) =>
          item._id === edit._id ? result.data : item
        )
      );

      toast.success("Food updated successfully");
      setEdit(null);
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <p className="text-center">Loading...</p>}
      {err && <p className="text-red-500 text-center">{err}</p>}

      <section className="px-6 lg:px-40">
        <p className="text-center text-4xl text-orange-500 mb-6">
          Update Food
        </p>

        {/* HEADER */}
        <div className="grid grid-cols-5 bg-gray-700 text-white px-4 py-2 font-semibold">
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="col-span-2 text-center">Action</p>
        </div>

        {/* ROWS */}
        {data.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-5 items-center bg-orange-400 px-4 py-2 gap-3 mt-2 rounded"
          >
            {/* NAME */}
            {edit?._id === item._id ? (
              <input
                type="text"
                value={edit.name}
                onChange={(e) =>
                  setEdit({ ...edit, name: e.target.value })
                }
                className="px-2 py-1 outline-none"
              />
            ) : (
              <p>{item.name}</p>
            )}

            {/* CATEGORY */}
            {edit?._id === item._id ? (
              <input
                type="text"
                value={edit.category}
                onChange={(e) =>
                  setEdit({ ...edit, category: e.target.value })
                }
                className="px-2 py-1 outline-none"
              />
            ) : (
              <p>{item.category}</p>
            )}

            {/* PRICE */}
            {edit?._id === item._id ? (
              <input
                type="number"
                value={edit.price}
                onChange={(e) =>
                  setEdit({ ...edit, price: e.target.value })
                }
                className="px-2 py-1 outline-none"
              />
            ) : (
              <p>₹ {item.price}</p>
            )}

            {/* ACTION */}
            {edit?._id === item._id ? (
              <div className="col-span-2 flex gap-2 justify-center">
                <button
                  onClick={update}
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEdit(null)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="col-span-2 text-center">
                <button
                  onClick={() => setEdit(item)}
                  className="bg-gray-800 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

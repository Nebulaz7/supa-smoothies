import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

// components
import SmoothieCard from "../components/smoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  useEffect(() => {
    const fetchSmoothies = async () => {
      let query = supabase.from("smoothies").select();

      // Add ordering based on orderBy state
      if (orderBy) {
        if (orderBy === "title") {
          query = query.order("title", { ascending: true });
        } else {
          query = query.order(orderBy, { ascending: false });
        }
      }

      const { data, error } = await query;

      if (error) {
        setFetchError("Could not load the smoothies");
        setSmoothies(null);
        console.log(error);
      }

      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, [orderBy]); // Add orderBy as dependency

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter((smoothie) => smoothie.id !== id);
    });
  };

  return (
    <div className="page home">
      {fetchError && <p className="error">{fetchError}</p>}
      <div className="smoothies">
        {/* order-by buttons */}
        <div className="order-buttons">
          <p>Order by:</p>
          <button
            onClick={() => setOrderBy("created_at")}
            className={orderBy === "created_at" ? "active" : ""}
          >
            Time Created
          </button>
          <button
            onClick={() => setOrderBy("title")}
            className={orderBy === "title" ? "active" : ""}
          >
            Title
          </button>
          <button
            onClick={() => setOrderBy("rating")}
            className={orderBy === "rating" ? "active" : ""}
          >
            Rating
          </button>
        </div>

        <div className="smoothie-grid">
          {smoothies &&
            smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

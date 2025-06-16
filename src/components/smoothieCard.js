import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SmoothieCard = ({ smoothie, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      // Call the onDelete function to update local state
      onDelete(smoothie.id);
    }
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">Rating: {smoothie.rating}/10</div>
      <div className="buttons">
        <button>
          <Link to={"/" + smoothie.id}>
            <i className="material-icons">edit</i>
          </Link>
        </button>
        <button onClick={handleDelete}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

export default SmoothieCard;

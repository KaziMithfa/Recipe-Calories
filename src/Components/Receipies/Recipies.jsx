import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipies = ({ handleWantToCook }) => {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    fetch("receipe.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-2">
      {recipies.map((recipie) => (
        <Recipe
          handleWantToCook={handleWantToCook}
          key={recipie.recipe_id}
          recipie={recipie}
        ></Recipe>
      ))}
    </div>
  );
};

Recipies.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipies;

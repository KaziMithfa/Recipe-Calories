import PropTypes from "prop-types";

const Recipe = ({ recipie, handleWantToCook }) => {
  return (
    <div>
      <img
        className="h-[200px] w-full object-cover"
        src={recipie.recipe_image}
        alt=""
      />
      <h1 className="lg:text-xl text-xs lg:font-semibold font-normal text-[#282828] mt-1">
        {recipie.recipe_name}
      </h1>
      <p className="text-[#878787] font-normal text-xs mt-1">
        {recipie.short_description}
      </p>

      <h1 className="text-[#282828] text-xl font-medium">
        Ingredients: {recipie.ingredients.length}
      </h1>
      <ul className="w-full lg:h-[96px] list-disc pl-5 ml-1 mt-2 ">
        {recipie.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>

      <div className="flex gap-x-1 mt-2">
        <div className="w-[50%] flex lg:gap-x-2 gap-x-1">
          <img
            className="w-6 h-6 object-cover "
            src="../../../images/clock.jpg"
            alt=""
          />
          <h3 className="text-[#282828CC] lg:text-xl lg:text-xs">
            {recipie.preparing_time} minutes
          </h3>
        </div>

        <div className="w-[50%] lg:gap-x-2 gap-x-1 flex">
          <img
            className="w-6 h-6 object-cover "
            src="../../../images/calorie.jpg"
            alt=""
          />
          <h3 className="text-[#282828CC] lg:text-xl lg:text-xs">
            {recipie.calories} calories
          </h3>
        </div>
      </div>

      <button
        onClick={() => handleWantToCook(recipie)}
        className="rounded-[50px] bg-[#0BE58A] text[#150B2B] lg:py-3 py-2 lg:px-6 px-3 mt-2"
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipie: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipe;

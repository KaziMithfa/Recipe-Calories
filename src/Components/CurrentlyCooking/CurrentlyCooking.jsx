import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentCooks, cookingTime, foodcalorie }) => {
  return (
    <div className="mt-3">
      <h1 className="text-center text-[#282828] lg:text-2xl font-semibold ">
        Currently Cooking: {currentCooks.length}
      </h1>

      <table className="border-separate lg:border-spacing-2 border-spacing-0  ">
        <thead>
          <tr>
            <th className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-xs font-normal lg:font-medium"></th>
            <th className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-xs font-normal lg:font-medium">
              Name
            </th>
            <th className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-xs font-normal lg:font-medium">
              Time
            </th>
            <th className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-xs font-normal lg:font-medium">
              Calorie
            </th>
          </tr>
        </thead>

        <tbody className="mt-1 ">
          {currentCooks.map((currentCook, idx) => (
            <tr key={idx} className="bg-[#28282808]">
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium">
                {idx + 1}
              </td>
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {currentCook.recipe_name}
              </td>
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {currentCook.preparing_time} minutes
              </td>

              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {currentCook.calories} calories
              </td>
            </tr>
          ))}

          <tr>
            <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium"></td>
            <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium"></td>
            <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium">
              Total Time = {cookingTime} minutes
            </td>
            <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium">
              Total Calories = {foodcalorie} calories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentCooks: PropTypes.array.isRequired,
  cookingTime: PropTypes.number.isRequired,
  foodcalorie: PropTypes.number.isRequired,
};

export default CurrentlyCooking;

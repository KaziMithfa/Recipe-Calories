import PropTypes from "prop-types";
const WantToCook = ({ wantToCooks, perparingCook }) => {
  return (
    <div>
      <h1 className="text-center text-[#282828] lg:text-2xl font-semibold ">
        Want to Cook: {wantToCooks.length}
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
            <th className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium"></th>
          </tr>
        </thead>

        <tbody className="mt-1">
          {wantToCooks.map((wantToCook, idx) => (
            <tr key={idx}>
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] font-normal lg:font-medium">
                {idx + 1}
              </td>
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {wantToCook.recipe_name}
              </td>
              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {wantToCook.preparing_time} minutes
              </td>

              <td className="lg:px-4 lg:py-2 text-[#878787] lg:text-[16px] text-[8px] lg:font-medium font-normal">
                {wantToCook.calories} calories
              </td>

              <td>
                <button
                  onClick={() =>
                    perparingCook(
                      wantToCook,
                      wantToCook.preparing_time,
                      wantToCook.calories
                    )
                  }
                  className="lg:px-4 bg-[#0BE58A] lg:py-2 text-[8px] lg:text-[16px] lg:font-medium font-normal rounded-[50px]  "
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

WantToCook.propTypes = {
  wantToCooks: PropTypes.array.isRequired,
  perparingCook: PropTypes.func.isRequired,
};

export default WantToCook;

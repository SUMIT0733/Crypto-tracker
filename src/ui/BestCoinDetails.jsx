import PropTypes from "prop-types";
import Tag from "./Tag";
import { formatCurrency } from "../services/helper";
import { useNavigate } from "react-router-dom";

BestCoinDetails.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cap: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  allTimeHigh: PropTypes.string,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function BestCoinDetails({ icon, title, cap, rank, allTimeHigh, price, id }) {
  const navigate = useNavigate();
  // console.log(id);
  function handleCoinClick() {
    navigate(`/coin/${id}`);
  }

  return (
    <div
      className="grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto_auto] gap-x-6 gap-y-2 rounded-md border border-gray-50 bg-gray-50 p-6 hover:cursor-pointer hover:shadow-lg"
      onClick={handleCoinClick}
    >
      <div
        className={`row-span-full m-auto flex aspect-[1] items-center justify-center rounded-full`}
      >
        {icon}
      </div>
      <div className="flex items-start justify-between gap-3 border-b pb-2">
        <h5 className="items-end text-2xl font-bold uppercase tracking-[0.4rem] text-gray-700 ">
          {title}
        </h5>
        <Tag color="lime">{rank}</Tag>
      </div>

      <p className="text-2xl font-medium leading-none">
        <strong>Market Cap:</strong> {formatCurrency(cap)}
      </p>
      <div className="flex gap-3">
        <p className="text-2xl font-medium leading-none">
          <strong>Price</strong> : {formatCurrency(price)}
        </p>
        {allTimeHigh && (
          <Tag color="red">High: {formatCurrency(allTimeHigh)}</Tag>
        )}
      </div>
    </div>
  );
}

export default BestCoinDetails;

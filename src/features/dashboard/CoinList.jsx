import PropTypes from "prop-types";
import Heading from "../../ui/Heading";
import BestCoinDetails from "../../ui/BestCoinDetails";
import { NavLink } from "react-router-dom";

CoinList.propTypes = {
  list: PropTypes.array.isRequired,
  showLink: PropTypes.bool.isRequired,
};

function CoinList({ list, showLink }) {
  // console.log(list);
  return (
    <div className="flex flex-col gap-y-4">
      {showLink && (
        <div className="flex flex-row items-center justify-between">
          <Heading as="h2">Top 10 coins</Heading>
          <NavLink to="/coins" className="text-4xl font-bold text-blue-700">
            Show all
          </NavLink>
        </div>
      )}
      <div className="mx-auto grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {list.map((coin) => (
          <BestCoinDetails
            title={coin.name}
            key={coin.name}
            id={coin.uuid}
            icon={
              <img
                src={`${coin.iconUrl}`}
                alt={coin.symbol}
                className="h-16 w-16"
              />
            }
            cap={coin.marketCap}
            rank={coin.rank}
            price={coin.price}
          ></BestCoinDetails>
        ))}
      </div>
    </div>
  );
}

export default CoinList;

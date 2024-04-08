import PropTypes from "prop-types";
import { formatCurrency } from "../../services/helper";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdCurrencyBitcoin } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import SingleStat from "./SingleStat";
import { IoPodiumOutline } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { PiMedalLight } from "react-icons/pi";

CoinStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

function CoinStats({ stats }) {
  return (
    <div className="flex flex-col ">
      <p className="mb-8 text-[2.5rem] font-bold">Value Stats</p>
      <SingleStat
        label="Price to USD"
        icon={<HiOutlineCurrencyDollar className="h-11 w-11 text-blue-500" />}
        value={formatCurrency(stats.price, 6)}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="Price to Bitcoin"
        icon={<MdCurrencyBitcoin className="h-11 w-11 text-blue-500" />}
        value={`${parseFloat(stats.btcPrice).toFixed(4)} BTC`}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="Coin Rank"
        icon={<IoPodiumOutline className="h-11 w-11 text-blue-500" />}
        value={stats.rank}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="24h Volume"
        icon={<MdOutlineWaterDrop className="h-11 w-11 text-blue-500" />}
        value={formatCurrency(stats["24hVolume"])}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="Market Cap"
        icon={<SiCoinmarketcap className="h-11 w-11 text-blue-500" />}
        value={formatCurrency(stats.marketCap)}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="Highest Price"
        icon={<PiMedalLight className="h-11 w-11 text-blue-500" />}
        value={formatCurrency(stats.allTimeHigh.price, 6)}
        date={stats.allTimeHigh.timestamp}
      />
      <div className="border-t border-gray-300"></div>
    </div>
  );
}

export default CoinStats;

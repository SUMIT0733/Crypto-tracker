import Stat from "../../ui/Stat";
import {
  HiMiniHashtag,
  HiMiniHome,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import PropTypes from "prop-types";
import { formatCurrency, formatNumber } from "../../services/helper";

GloabalStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

function GloabalStats({ stats }) {

  return (
    <div className="flex justify-between gap-5">
      <Stat
        icon={<HiMiniHashtag className="w-13 h-13 text-blue-700" />}
        title="Total Coins"
        value={formatNumber(stats.totalCoins)}
        color="blue"
      ></Stat>
      <Stat
        icon={<HiMiniHome className="w-13 h-13 text-red-700" />}
        title="Exchanges"
        value={stats.totalExchanges}
        color="red"
      ></Stat>
      <Stat
        icon={<HiOutlineCurrencyDollar className="w-13 h-13 text-indigo-700" />}
        title="Market Cap"
        color="indigo"
        value={formatCurrency(stats.totalMarketCap)}
      ></Stat>
      <Stat
        icon={<HiOutlineClock className="w-13 h-13 text-green-700" />}
        title="24h Volume"
        color="green"
        value={formatCurrency(stats.total24hVolume)}
      ></Stat>
    </div>
  );
}

export default GloabalStats;

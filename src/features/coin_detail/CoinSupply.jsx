import { MdVerified } from "react-icons/md";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { RiExchangeFundsLine } from "react-icons/ri";
import PropTypes from "prop-types";
import { formatCurrency, formatNumber } from "../../services/helper";
import SingleSupply from "./SingleSupply";
import SingleStat from "./SingleStat";

CoinSupply.propTypes = {
    details: PropTypes.object.isRequired,
};

function CoinSupply({ details }) {
  return (
    <div className="flex flex-col ">
      <p className="mb-8 text-[2.5rem] font-bold">Supply Information</p>
      <SingleSupply
        label={details.supply.confirmed ? "Verified Supply" : "Unverified Supply"}
        icon={
            details.supply.confirmed ? (
            <MdVerified className="h-11 w-11 text-green-500" />
          ) : (
            <BsExclamationTriangle className="h-11 w-11 text-red-500" />
          )
        }
        value={
            details.supply.confirmed ? (
            <CiCircleCheck className="h-11 w-11 text-green-500" />
          ) : (
            <CiCircleRemove className="h-11 w-11 text-red-500" />
          )
        }
      />
      <div className="border-t border-gray-300"></div>
      <SingleSupply label="Maximum Supply" value={formatCurrency(details.supply.max)} />
      <div className="border-t border-gray-300"></div>
      <SingleSupply label="Total Supply" value={formatCurrency(details.supply.total)} />

      <div className="border-t border-gray-300"></div>
      <SingleSupply
        label="Circulating supply"
        value={formatCurrency(details.supply.circulating)}
      />
      <div className="border-t-4 border-gray-800"></div>
      <SingleStat
        label="Total Markets"
        icon={<FaHouseCircleCheck className="h-9 w-9 text-blue-500" />}
        value={formatNumber(details.numberOfMarkets)}
      />
      <div className="border-t border-gray-300"></div>
      <SingleStat
        label="Number of exchanges"
        icon={<RiExchangeFundsLine className="h-9 w-9 text-blue-500" />}
        value={formatNumber(details.numberOfExchanges)}
      />
      <div className="border-t border-gray-300"></div>
    </div>
  );
}

export default CoinSupply;

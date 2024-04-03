import Heading from "../ui/Heading";
import { useState } from "react";
import PriceChart from "../features/coin_detail/PriceChart";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { coin_data, formatCurrency } from "../services/helper";
import CoinStats from "../features/coin_detail/CoinStats";
import CoinSupply from "../features/coin_detail/CoinSupply";
import { Tooltip } from "react-tooltip";
import Links from "../features/coin_detail/Links";

function CoinDetails() {
  const { coinId } = useParams();
  const [currentFilter, setCurrentFilter] = useState("12h");
  const coin = coin_data.data.coin;

  // const { isLoading, data: coin_data1 } = useCoinDetails(coinId);
  // console.log(coin_data1.data.coin);

  // const coin = data.data.coin;
  // console.log(coin);
  const options = [
    { value: "12h", label: "12 Hour" },
    { value: "24h", label: "24 Hour" },
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
    { value: "3m", label: "3 Months" },
    { value: "1y", label: "1 year" },
    { value: "3y", label: "3 year" },
  ];

  function handleClick(value) {
    setCurrentFilter(value);
  }

  function handleButtonClick() {
    window.open(coin.websiteUrl, "_blank");
  }

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  return (
    <div className="m-auto flex w-full flex-col">
      <Tooltip id="information" className="bg-red-700" />
      <Heading as="h2" className="text-center">
        {coin.name}{" "}
        <button
          onClick={handleButtonClick}
          data-tooltip-id="information"
          data-tooltip-place="bottom"
          data-tooltip-content={`Know more about ${coin.name}`}
        >
          <IoIosInformationCircleOutline className="h-8 w-8" />
        </button>
        <span className="ms-5 rounded-2xl border px-4 py-2 align-middle text-2xl text-green-700">
          # {coin.rank}
        </span>
      </Heading>
      <p className="mt-2 flex content-center justify-center text-justify text-gray-600">
        {coin.description}
      </p>
      <div className="mt-5 flex items-center justify-between gap-8">
        <div className="flex h-auto gap-4 rounded-lg border border-gray-200 bg-gray-100 px-6 py-1 shadow-sm">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleClick(option.value)}
              className={`rounded-lg border-none bg-gray-100 text-2xl font-medium ${
                currentFilter === option.value
                  ? "bg-blue-600 text-blue-50"
                  : "hover:bg-blue-600 hover:text-blue-50"
              } px-2 py-1 transition-all duration-300`}
              disabled={currentFilter === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          <span>
            Price:{" "}
            <span className="text-2xl font-bold">
              {formatCurrency(coin.price)}
            </span>
          </span>
          <p
            className={`${coin.change < 0 ? "text-red-700" : "text-green-700"}`}
          >{`(${coin.change} %)`}</p>
        </div>
      </div>
      <PriceChart filter={currentFilter} />
      <div className="mt-10 grid grid-cols-2 justify-between gap-36">
        <CoinStats stats={coin} />
        {/* <CoinStats stats={coin}/> */}
        <CoinSupply details={coin} />
      </div>

      <div className=" flex flex-col items-center justify-center">
        <p className="mb-16 mt-28 text-[2.5rem] font-bold">
          Useful Links
        </p>
        <Links links={coin.links} />
      </div>
    </div>
  );
}

export default CoinDetails;

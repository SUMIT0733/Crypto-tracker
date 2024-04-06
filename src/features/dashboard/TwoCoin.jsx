import BestCoinDetails from "../../ui/BestCoinDetails";
import { useCoinDetails } from "./useCoinDetails";
import Spinner from "./Spinner";


function TwoCoin() {
  const { isLoading: isLoading1, data: { data: { coin: btcCoin } = {} } = {} } =
    useCoinDetails("Qwsogvtv82FCd");

  const {
    isLoading: isLoading2,
    data: { data: { coin: bestCoinData } = {} } = {},
  } = useCoinDetails("razxDUgYGNAdQ");

  if (isLoading1 || isLoading2) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-10 ">
      <BestCoinDetails
        className="flex-grow"
        icon={
          <img
            src={`${btcCoin.iconUrl}`}
            alt={btcCoin.symbol}
            className="h-16 w-16"
          />
        }
        title={`${btcCoin.name} [${btcCoin.symbol}]`}
        cap={btcCoin.marketCap}
        rank={btcCoin.rank}
        id={btcCoin.uuid}
        allTimeHigh={btcCoin.allTimeHigh.price}
        price={btcCoin.price}
      ></BestCoinDetails>

      <BestCoinDetails
        className="flex-grow"
        icon={
          <img
            src={`${bestCoinData.iconUrl}`}
            alt={bestCoinData.symbol}
            className="h-16 w-16"
          />
        }
        title={`${bestCoinData.name} [${bestCoinData.symbol}]`}
        cap={bestCoinData.marketCap}
        rank={bestCoinData.rank}
        id={bestCoinData.uuid}
        allTimeHigh={bestCoinData.allTimeHigh.price}
        price={bestCoinData.price}
      ></BestCoinDetails>
    </div>
  );
}

export default TwoCoin;

import { useEffect, useState } from "react";
import CoinList from "../features/dashboard/CoinList";
import Spinner from "../features/dashboard/Spinner";
import { useGetListOfCoins } from "../features/dashboard/useGetListOfCoins";
import Heading from "../ui/Heading";

function Coins() {
  const { isLoading, list } = useGetListOfCoins(100);
  const coins = list?.data?.coins || [];
  const [filteredCoins, setFilteredCoins] = useState([]);


  useEffect(() => {
    if (!isLoading) {
      setFilteredCoins(coins);
    }
  }, [isLoading, coins]);

  function filterList(value) {
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Heading as="h1">All Coins</Heading>
        <input
          className="rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 shadow-md"
          placeholder="Search"
          onChange={(e) => filterList(e.target.value)}
        />
      </div>
      <CoinList list={filteredCoins} showLink={false} />
    </>
  );
}

export default Coins;

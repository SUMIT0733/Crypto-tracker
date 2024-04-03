import GloabalStats from "../features/dashboard/GloabalStats";
import Spinner from "../features/dashboard/Spinner";
import Heading from "../ui/Heading";
import { useGetListOfCoins } from "../features/dashboard/useGetListOfCoins";
import CoinList from "../features/dashboard/CoinList";
import { stats } from "../services/helper";
import TwoCoin from "../features/dashboard/TwoCoin";

function Dashboard() {
  //   const { isLoading, stats } = useGloabalStats();
    const { isLoading, list } = useGetListOfCoins(10);

      if (isLoading) {
        return <Spinner />;
      }
//   const list = stats;
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Heading as="h1">Dashboard</Heading>
      </div>
      <GloabalStats stats={list.data.stats} />
      <TwoCoin />
      <CoinList list={list.data.coins} showLink={true} />
    </>
  );
}

export default Dashboard;

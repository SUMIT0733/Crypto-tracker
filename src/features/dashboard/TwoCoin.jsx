import BestCoinDetails from "../../ui/BestCoinDetails";
import { useCoinDetails } from "./useCoinDetails";
import Spinner from "./Spinner";

const btcData = {
  status: "success",
  data: {
    coin: {
      uuid: "Qwsogvtv82FCd",
      symbol: "BTC",
      name: "Bitcoin",
      description:
        'Bitcoin is a digital currency with a finite supply, allowing users to send/receive money without a central bank/government, often nicknamed "Digital Gold".',
      color: "#f7931A",
      iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
      websiteUrl: "https://bitcoin.org",
      links: [
        {
          name: "bitcoin.org",
          type: "website",
          url: "https://bitcoin.org",
        },
        {
          name: "bitcoinmagazine.com",
          url: "https://bitcoinmagazine.com/",
          type: "website",
        },
        {
          name: "bitcointalk.org",
          url: "https://bitcointalk.org/",
          type: "bitcointalk",
        },
        {
          name: "blockchain.com",
          url: "https://www.blockchain.com/explorer",
          type: "explorer",
        },
        {
          name: "bitcoin/bitcoin",
          url: "https://github.com/bitcoin/bitcoin",
          type: "github",
        },
        {
          name: "r/bitcoin",
          url: "https://www.reddit.com/r/bitcoin/",
          type: "reddit",
        },
        {
          name: "Bitcoin_Magazine",
          url: "https://t.me/Bitcoin_Magazine",
          type: "telegram",
        },
        {
          name: "bitcoin",
          url: "https://t.me/bitcoin",
          type: "telegram",
        },
        {
          name: "Bitcoin Whitepaper",
          url: "https://bitcoin.org/bitcoin.pdf",
          type: "whitepaper",
        },
      ],
      supply: {
        confirmed: true,
        supplyAt: 1711772281,
        max: "21000000",
        total: "19668100",
        circulating: "19668100",
      },
      numberOfMarkets: 3241,
      numberOfExchanges: 117,
      "24hVolume": "23824176092",
      marketCap: "1371473343053",
      fullyDilutedMarketCap: "1464347862992",
      price: "69730.8506186754",
      btcPrice: "1",
      priceAt: 1711772220,
      change: "-0.94",
      rank: 1,
      sparkline: [
        "70430.27656368414",
        "70279.63193451025",
        "70298.24986068094",
        "70151.62720330697",
        "69864.9450768816",
        "69799.53401671255",
        "69809.84653359927",
        "70137.2686208802",
        "70044.54094681387",
        "70227.63064107197",
        "70330.79860830995",
        "69708.73052706025",
        "69328.96366168158",
        "69282.64033886258",
        "69399.19829504334",
        "69422.57455499217",
        "69561.97210953575",
        "69407.69976963974",
        "69574.2509805644",
        "69775.45835579476",
        "69742.45682448435",
        "69898.67425488376",
        "69846.15314118801",
        null,
      ],
      allTimeHigh: {
        price: "73646.0632562494",
        timestamp: 1710400080,
      },
      coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
      tier: 1,
      lowVolume: false,
      listedAt: 1330214400,
      hasContent: true,
      notices: null,
      contractAddresses: [],
      tags: ["layer-1", "proof-of-work"],
    },
  },
};

const bestCoinData = {
  status: "success",
  data: {
    coin: {
      uuid: "Ru56fDlLB56-v",
      symbol: "RVN",
      name: "Ravencoin",
      description:
        "Ravencoin is a blockchain-based asset transfer system to facilitate new projects, built on a Bitcoin fork.",
      color: "#384182",
      iconUrl: "https://cdn.coinranking.com/Rw1xg7rFE/rvn.svg",
      websiteUrl: "https://ravencoin.org/",
      links: [
        {
          name: "ravencoin.org",
          type: "website",
          url: "https://ravencoin.org/",
        },
        {
          name: "bitcointalk.org",
          url: "https://bitcointalk.org/index.php?topic=2752467.0",
          type: "bitcointalk",
        },
        {
          name: "discord.com",
          url: "https://discord.gg/pst8grg",
          type: "discord",
        },
        {
          name: "ravenproject/ravencoin",
          url: "https://github.com/ravenproject/ravencoin",
          type: "github",
        },
        {
          name: "@ravencoin",
          url: "https://medium.com/@ravencoin",
          type: "medium",
        },
        {
          name: "r/ravencoin",
          url: "https://www.reddit.com/r/ravencoin/",
          type: "reddit",
        },
        {
          name: "ravencoindev",
          url: "https://t.me/ravencoindev",
          type: "telegram",
        },
        {
          name: "ravencoin",
          url: "https://twitter.com/ravencoin",
          type: "twitter",
        },
      ],
      supply: {
        confirmed: true,
        supplyAt: 1641945609,
        max: null,
        total: "21000000000",
        circulating: null,
      },
      numberOfMarkets: 50,
      numberOfExchanges: 36,
      "24hVolume": "609826185",
      marketCap: "939686918",
      fullyDilutedMarketCap: "939686918",
      price: "0.04474699608557617",
      btcPrice: "6.3974286373e-7",
      priceAt: 1711774560,
      change: "-0.51",
      rank: 115,
      sparkline: [
        "0.04525551373887331",
        "0.04460230495256109",
        "0.04513338301593288",
        "0.0449327720564561",
        "0.04707201487213222",
        "0.04679052503622856",
        "0.045673444845572",
        "0.04685819839361472",
        "0.047761405421076535",
        "0.04725630515339981",
        "0.04830274569155136",
        "0.048524439434017345",
        "0.051320936704887875",
        "0.05029753909980469",
        "0.04796495130488406",
        "0.046850050219441365",
        "0.04640674097665858",
        "0.045559258507078516",
        "0.04613422455963404",
        "0.0456546713969618",
        "0.04388962324194506",
        "0.043784775806216536",
        "0.04359480056760656",
        null,
      ],
      allTimeHigh: {
        price: "0.28387591280076135",
        timestamp: 1613779200,
      },
      coinrankingUrl:
        "https://coinranking.com/coin/Ru56fDlLB56-v+ravencoin-rvn",
      tier: 1,
      lowVolume: false,
      listedAt: 1520726400,
      hasContent: false,
      notices: null,
      contractAddresses: ["ravencoin/"],
      tags: ["proof-of-work", "altcoin"],
    },
  },
};

function TwoCoin() {
  // const { isLoading: isLoading1, data: btcData } =
  //   useCoinDetails("Qwsogvtv82FCd");
  // const { isLoading: isLoading2, data: bestCoinData } =
  //   useCoinDetails("razxDUgYGNAdQ");

  // if (isLoading1 || isLoading2) {
  //   return <Spinner />;
  // }

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-10 ">
      <BestCoinDetails
        className="flex-grow"
        icon={
          <img
            src={`${btcData.data.coin.iconUrl}`}
            alt={btcData.data.coin.symbol}
            className="h-16 w-16"
          />
        }
        title={`${btcData.data.coin.name} [${btcData.data.coin.symbol}]`}
        cap={btcData.data.coin.marketCap}
        rank={btcData.data.coin.rank}
        id={btcData.data.coin.uuid}
        allTimeHigh={btcData.data.coin.allTimeHigh.price}
        price={btcData.data.coin.price}
      ></BestCoinDetails>

      <BestCoinDetails
        className="flex-grow"
        icon={
          <img
            src={`${bestCoinData.data.coin.iconUrl}`}
            alt={bestCoinData.data.coin.symbol}
            className="h-16 w-16"
          />
        }
        title={`${bestCoinData.data.coin.name} [${bestCoinData.data.coin.symbol}]`}
        cap={bestCoinData.data.coin.marketCap}
        rank={bestCoinData.data.coin.rank}
        id={bestCoinData.data.coin.uuid}
        allTimeHigh={bestCoinData.data.coin.allTimeHigh.price}
        price={bestCoinData.data.coin.price}
      ></BestCoinDetails>
    </div>
  );
}

export default TwoCoin;

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 2,
    compactDisplay: "short",
  })
    .format(value)
    .replace("$", "$ ");

export const formatCurrencyForChart = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
  }).format(value);

  

export const formatNumber = (value) =>
parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const date_format = {
  "12h": "HH:mm",
  "24h": "HH:mm",
  "7d": "MMM-dd",
  "30d": "MMM-dd",
  "3m": "MMM-dd",
  "1y": "MMM-dd",
  "3y": "dd MMM,yy",
};

export const stats = {
  status: "success",
  data: {
    stats: {
      total: 36649,
      totalCoins: 36649,
      totalMarkets: 44324,
      totalExchanges: 178,
      totalMarketCap: "2683111883120",
      total24hVolume: "74619680678",
    },
    coins: [
      {
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        marketCap: "1372268371595",
        price: "69769.05577740767",
        listedAt: 1330214400,
        tier: 1,
        change: "0.47",
        rank: 1,
        sparkline: [
          "69399.19829504334",
          "69422.57455499217",
          "69561.97210953575",
          "69407.69976963974",
          "69574.2509805644",
          "69775.45835579476",
          "69742.45682448435",
          "69898.67425488376",
          "69846.15314118801",
          "69810.470237107",
          "69785.52718389875",
          "69966.63450237983",
          "69859.399045083",
          "69833.69524018622",
          "69781.4172842739",
          "69885.6866827948",
          "69867.74823527719",
          "69959.96451552727",
          "70046.48044289468",
          "70064.33104134157",
          "69975.46959448713",
          "69869.85789311922",
          "69846.4794804662",
          null,
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "24hVolume": "17687156684",
        btcPrice: "1",
        contractAddresses: [],
      },
      {
        uuid: "razxDUgYGNAdQ",
        symbol: "ETH",
        name: "Ethereum",
        color: "#3C3C3D",
        iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        marketCap: "430390879263",
        price: "3525.9568413003467",
        listedAt: 1438905600,
        tier: 1,
        change: "1.09",
        rank: 2,
        sparkline: [
          "3485.662042069589",
          "3489.4269943369895",
          "3495.591133248813",
          "3486.6239485192073",
          "3502.5845376444604",
          "3515.692519838232",
          "3506.6039536146545",
          "3512.2598209146454",
          "3505.2124286936196",
          "3496.107904356562",
          "3494.174749678252",
          "3512.9539302946014",
          "3498.665565940458",
          "3497.3842478005618",
          "3497.629182823174",
          "3505.1244115225354",
          "3514.3913490628097",
          "3539.1690901656557",
          "3551.9870452898904",
          "3541.3906404596273",
          "3537.273586982265",
          "3536.0242670950606",
          "3531.7628389697375",
          null,
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
        "24hVolume": "8974829514",
        btcPrice: "0.05053754564988835",
        contractAddresses: [],
      },
      {
        uuid: "HIVsRcGKkPFtW",
        symbol: "USDT",
        name: "Tether USD",
        color: "#22a079",
        iconUrl: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
        marketCap: "104252076167",
        price: "0.9975764660643297",
        listedAt: 1420761600,
        tier: 1,
        change: "-0.10",
        rank: 3,
        sparkline: [
          "0.9990637597947977",
          "0.9990854185969962",
          "0.9991670323965892",
          "0.9992449895611845",
          "0.9987855567561682",
          "0.9990509219067215",
          "0.9988436120469655",
          "0.9986599348884064",
          "0.9989200591417597",
          "0.9989336923192588",
          "0.9984021900136354",
          "0.9986712578503321",
          "0.9985574192949326",
          "0.9986038716571235",
          "0.9984726430131078",
          "0.998194983106818",
          "0.9982158625563289",
          "0.9980864868883838",
          "0.9989184015508056",
          "0.9987888609583068",
          "0.9986685519279581",
          "0.998302873330373",
          "0.9982172404026476",
          null,
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
        "24hVolume": "48417929688",
        btcPrice: "0.000014298265254542",
        contractAddresses: [
          "avalanche-c-chain/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7 ",
          "tron/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
          "solana/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          "eos/USDT-eos-tethertether",
          "omni/31",
          "bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
          "liquid/ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",
          "ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7",
          "algorand/312769",
        ],
      },
      {
        uuid: "WcwrkfNI4FUAe",
        symbol: "BNB",
        name: "BNB",
        color: "#e8b342",
        iconUrl: "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
        marketCap: "90351632094",
        price: "607.7926584203113",
        listedAt: 1503014400,
        tier: 1,
        change: "-0.37",
        rank: 4,
        sparkline: [
          "610.2162794527816",
          "610.1810428739951",
          "612.2142244980524",
          "612.1814143229176",
          "615.7957174858282",
          "615.7633600084976",
          "608.8909746386975",
          "608.2468473907472",
          "607.4287386996828",
          "605.9257991588219",
          "607.3509476977733",
          "607.600978158138",
          "603.8528293179309",
          "602.0543959523021",
          "598.4120066434228",
          "599.1283898975221",
          "601.0989227276483",
          "603.5130581929726",
          "603.5752607907178",
          "603.2158543031537",
          "603.6175182059357",
          "604.211472633388",
          "604.7416220126113",
          null,
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/WcwrkfNI4FUAe+bnb-bnb",
        "24hVolume": "1518574532",
        btcPrice: "0.008711493249377244",
        contractAddresses: [
          "bnb-beacon-chain/",
          "avalanche-c-chain/0x264c1383EA520f73dd837F915ef3a732e204a493",
          "ethereum/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        ],
      },
      {
        uuid: "zNZHO_Sjf",
        symbol: "SOL",
        name: "Solana",
        color: "#000",
        iconUrl: "https://cdn.coinranking.com/yvUG4Qex5/solana.svg",
        marketCap: "87468889759",
        price: "196.82177509122917",
        listedAt: 1586539320,
        tier: 1,
        change: "5.98",
        rank: 5,
        sparkline: [
          "185.9054764956111",
          "186.14332548682066",
          "188.75322394828325",
          "188.70470019733585",
          "190.82223325797378",
          "192.18177966549467",
          "191.67516672285115",
          "192.91639682201912",
          "191.84012622203133",
          "192.39589462567596",
          "194.6862376143023",
          "198.5603420326674",
          "198.42227424372078",
          "197.11465057301788",
          "195.07010173635442",
          "195.40923658176786",
          "195.93166338227664",
          "196.7838262876151",
          "197.46584602565682",
          "197.07087142155737",
          "196.3924325078819",
          "195.97537401108156",
          "196.62617187016158",
          null,
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/zNZHO_Sjf+solana-sol",
        "24hVolume": "3390561394",
        btcPrice: "0.002821046850901531",
        contractAddresses: [
          "cronos/0xc9DE0F3e08162312528FF72559db82590b481800",
        ],
      },
      {
        uuid: "-l8Mn2pVlRs-p",
        symbol: "XRP",
        name: "XRP",
        color: "#000000",
        iconUrl: "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
        marketCap: "34662966629",
        price: "0.6308964761273755",
        listedAt: 1421798400,
        tier: 1,
        change: "0.54",
        rank: 6,
        sparkline: [
          "0.6278456073224973",
          "0.6251215135415149",
          "0.6254371918671181",
          "0.6247633267015019",
          "0.6263574951467988",
          "0.6299258449292245",
          "0.6287077827379218",
          "0.629052562322451",
          "0.6263732950649048",
          "0.6258141567830529",
          "0.625491583601369",
          "0.6267718677096032",
          "0.6250589526895365",
          "0.6240971409764814",
          "0.6225481249793825",
          "0.6236837914478398",
          "0.6241066809117997",
          "0.626004292539093",
          "0.6275518095871292",
          "0.6264673268550891",
          "0.6289465747651616",
          "0.6306698114530145",
          "0.6294259678454506",
          null,
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp",
        "24hVolume": "1279078418",
        btcPrice: "0.000009042640309483",
        contractAddresses: [],
      },
      {
        uuid: "aKzUVe4Hh_CON",
        symbol: "USDC",
        name: "USDC",
        color: "#7894b4",
        iconUrl: "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
        marketCap: "32418448121",
        price: "0.9986765056108704",
        listedAt: 1539043200,
        tier: 1,
        change: "-0.06",
        rank: 7,
        sparkline: [
          "0.9993613350564299",
          "0.9992531794299205",
          "0.9986968856020375",
          "0.9993172505274558",
          "0.9991857212335084",
          "0.9991920682801242",
          "0.9989793853233919",
          "0.9990850843501614",
          "0.9989928180665628",
          "0.9990143770975635",
          "0.9988564751257707",
          "0.9989625688496626",
          "0.9989823857315193",
          "0.9989455235790011",
          "0.9991146924911678",
          "0.9988945909756278",
          "0.998807038137609",
          "0.9989123379466706",
          "0.9989484539596069",
          "0.9990707752744395",
          "0.9989914704797821",
          "0.998856225812957",
          "0.9987473945703416",
          null,
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
        "24hVolume": "3909582806",
        btcPrice: "0.000014314032123311",
        contractAddresses: [
          "avalanche-c-chain/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
          "flow/A.b19436aae4d94622.FiatToken",
          "tron/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
          "stellar/USDC-GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN-1",
          "hedera/0.0.456858",
          "solana/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "moonbeam/0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9",
          "ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "algorand/31566704",
          "cronos/0xc21223249ca28397b4b6541dffaecc539bff0c59",
          "klaytn/0x6270b58be569a7c0b8f47594f191631ae5b2c86c",
          "bnb-smart-chain/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "optimism/0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          "polygon/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          "fantom/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        ],
      },
      {
        uuid: "a91GCGd_u96cF",
        symbol: "DOGE",
        name: "Dogecoin",
        color: "#c2a633",
        iconUrl: "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
        marketCap: "28417214487",
        price: "0.20138498139757083",
        listedAt: 1391212800,
        tier: 1,
        change: "-6.34",
        rank: 8,
        sparkline: [
          "0.21488725855072086",
          "0.21320072614424956",
          "0.21330294823631787",
          "0.21088076118796817",
          "0.21190687601476946",
          "0.21238249108034818",
          "0.2131171040390826",
          "0.2136259951676594",
          "0.21341252473863948",
          "0.21315966917805135",
          "0.21212706703404965",
          "0.2124972194815013",
          "0.2099254625013927",
          "0.20907432526627126",
          "0.20691784815655653",
          "0.20864092757179598",
          "0.2095987505501383",
          "0.2102338810976664",
          "0.20993343430080644",
          "0.20885183348340036",
          "0.20713020439713845",
          "0.20446993173497838",
          "0.20128857683646037",
          null,
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/a91GCGd_u96cF+dogecoin-doge",
        "24hVolume": "2536346627",
        btcPrice: "0.000002886451294971",
        contractAddresses: [],
      },
      {
        uuid: "qzawljRxB5bYu",
        symbol: "ADA",
        name: "Cardano",
        color: "#3cc8c8",
        iconUrl: "https://cdn.coinranking.com/ryY28nXhW/ada.svg",
        marketCap: "23901219267",
        price: "0.6505004330455214",
        listedAt: 1506902400,
        tier: 1,
        change: "0.05",
        rank: 9,
        sparkline: [
          "0.6505609829696478",
          "0.647059208809772",
          "0.647783497294995",
          "0.6455733320509767",
          "0.6524399028175921",
          "0.6635135908741895",
          "0.6650832692353759",
          "0.6659610615631482",
          "0.6636146885933079",
          "0.6603876945512238",
          "0.6579709157582455",
          "0.6590644446720842",
          "0.6544611634874207",
          "0.6529576859597834",
          "0.6501579748044432",
          "0.651640839156444",
          "0.6526904581319516",
          "0.6568759364056238",
          "0.6553846662399926",
          "0.6540806423145717",
          "0.6524244494037961",
          "0.6513052902759285",
          "0.6495110484630637",
          null,
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/qzawljRxB5bYu+cardano-ada",
        "24hVolume": "416756515",
        btcPrice: "0.000009323623858704",
        contractAddresses: [
          "bnb-smart-chain/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        ],
      },
      {
        uuid: "dvUj0CzDZ",
        symbol: "AVAX",
        name: "Avalanche",
        color: "#e84242",
        iconUrl: "https://cdn.coinranking.com/S0C6Cw2-w/avax-avalanche.png",
        marketCap: "20327110027",
        price: "53.858612706952336",
        listedAt: 1600961596,
        tier: 1,
        change: "1.55",
        rank: 10,
        sparkline: [
          "53.05776091280895",
          "52.97192877588971",
          "53.02296540302071",
          "52.75035778365519",
          "53.13688260705508",
          "53.473209785036126",
          "53.38083439110052",
          "53.68295069861675",
          "53.49995444282115",
          "53.42858926411719",
          "53.58845756758751",
          "54.316546440280085",
          "54.32327828060048",
          "54.188384463374156",
          "53.79043114364908",
          "53.9438591566921",
          "54.09075868057214",
          "54.143890701063356",
          "54.19715905786839",
          "54.032867026157184",
          "53.918438673719045",
          "53.77688164071782",
          "53.712155466670104",
          null,
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/dvUj0CzDZ+avalanche-avax",
        "24hVolume": "451325188",
        btcPrice: "0.000771955591298007",
        contractAddresses: [],
      },
    ],
  },
};

export const coin_data = {
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
        supplyAt: 1712004841,
        max: "21000000",
        total: "19670587",
        circulating: "19670587",
      },
      numberOfMarkets: 3360,
      numberOfExchanges: 119,
      "24hVolume": "33964739637",
      marketCap: "1370334880800",
      fullyDilutedMarketCap: "1462947318085",
      price: "69664.15800404013",
      btcPrice: "1",
      priceAt: 1712004780,
      change: "-1.57",
      rank: 1,
      sparkline: [
        "70845.45983522227",
        "70733.93721939296",
        "70863.42175941645",
        "71065.55234385561",
        "71061.56172063676",
        "70938.13442649983",
        "70781.09967972159",
        "70627.28792633841",
        "70509.00985308492",
        "70173.31700022034",
        "69409.52056241907",
        "69651.83335313569",
        "69444.93311296568",
        "69472.91201101815",
        "69412.18276578188",
        "69562.68700074681",
        "69652.56750038186",
        "69872.47135511735",
        "69423.19527413975",
        "68649.72961441865",
        "68554.22589842393",
        "68508.06663356123",
        "68730.78322090681",
        "69275.2413654135",
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

export const priceDetail = {
  status: "success",
  data: {
    change: "0.09",
    history: [
      {
        price: "69915.56430250239",
        timestamp: 1711860600,
      },
      {
        price: "69924.28761181879",
        timestamp: 1711860300,
      },
      {
        price: "69912.7160066414",
        timestamp: 1711860000,
      },
      {
        price: "69848.8646720276",
        timestamp: 1711859700,
      },
      {
        price: "69782.11293720052",
        timestamp: 1711859400,
      },
      {
        price: "69744.10512942036",
        timestamp: 1711859100,
      },
      {
        price: "69750.98775570832",
        timestamp: 1711858800,
      },
      {
        price: "69748.70815616677",
        timestamp: 1711858500,
      },
      {
        price: "69721.11020113835",
        timestamp: 1711858200,
      },
      {
        price: "69715.71723395663",
        timestamp: 1711857900,
      },
      {
        price: "69748.13423439008",
        timestamp: 1711857600,
      },
      {
        price: "69782.83809944229",
        timestamp: 1711857300,
      },
      {
        price: "69731.03634344417",
        timestamp: 1711857000,
      },
      {
        price: "69770.04290878074",
        timestamp: 1711856700,
      },
      {
        price: "69789.09596398957",
        timestamp: 1711856400,
      },
      {
        price: "69777.86057290575",
        timestamp: 1711856100,
      },
      {
        price: "69752.84332163552",
        timestamp: 1711855800,
      },
      {
        price: "69715.23493096638",
        timestamp: 1711855500,
      },
      {
        price: "69664.24173347317",
        timestamp: 1711855200,
      },
      {
        price: "69718.5047602649",
        timestamp: 1711854900,
      },
      {
        price: "69771.67498883716",
        timestamp: 1711854600,
      },
      {
        price: "69800.68495186382",
        timestamp: 1711854300,
      },
      {
        price: "69826.50789749953",
        timestamp: 1711854000,
      },
      {
        price: "69828.73202257101",
        timestamp: 1711853700,
      },
      {
        price: "69820.71197860136",
        timestamp: 1711853400,
      },
      {
        price: "69870.20656450717",
        timestamp: 1711853100,
      },
      {
        price: "69864.64714551718",
        timestamp: 1711852800,
      },
      {
        price: "69873.68263800554",
        timestamp: 1711852500,
      },
      {
        price: "69940.44299490527",
        timestamp: 1711852200,
      },
      {
        price: "69896.3785298184",
        timestamp: 1711851900,
      },
      {
        price: "69917.87965103041",
        timestamp: 1711851600,
      },
      {
        price: "69931.45932396024",
        timestamp: 1711851300,
      },
      {
        price: "69821.62971015734",
        timestamp: 1711851000,
      },
      {
        price: "69814.73259215469",
        timestamp: 1711850700,
      },
      {
        price: "69860.65600083921",
        timestamp: 1711850400,
      },
      {
        price: "69862.10593959558",
        timestamp: 1711850100,
      },
      {
        price: "69823.92388958618",
        timestamp: 1711849800,
      },
      {
        price: "69841.90740280628",
        timestamp: 1711849500,
      },
      {
        price: "69805.36728489271",
        timestamp: 1711849200,
      },
      {
        price: "69837.0744994161",
        timestamp: 1711848900,
      },
      {
        price: "69789.63347339278",
        timestamp: 1711848600,
      },
      {
        price: "69789.64635545848",
        timestamp: 1711848300,
      },
      {
        price: "69768.15747030536",
        timestamp: 1711848000,
      },
      {
        price: "69803.94667776297",
        timestamp: 1711847700,
      },
      {
        price: "69786.2447036204",
        timestamp: 1711847400,
      },
      {
        price: "69707.57863395754",
        timestamp: 1711847100,
      },
      {
        price: "69686.3241233337",
        timestamp: 1711846800,
      },
      {
        price: "69704.89933809986",
        timestamp: 1711846500,
      },
      {
        price: "69734.42719228854",
        timestamp: 1711846200,
      },
      {
        price: "69714.07630472069",
        timestamp: 1711845900,
      },
      {
        price: "69755.39457576038",
        timestamp: 1711845600,
      },
      {
        price: "69695.61157979027",
        timestamp: 1711845300,
      },
      {
        price: "69682.40108792177",
        timestamp: 1711845000,
      },
      {
        price: "69716.35159690316",
        timestamp: 1711844700,
      },
      {
        price: "69674.16967272425",
        timestamp: 1711844400,
      },
      {
        price: "69544.05892973296",
        timestamp: 1711844100,
      },
      {
        price: "69533.19508600955",
        timestamp: 1711843800,
      },
      {
        price: "69461.74651594063",
        timestamp: 1711843500,
      },
      {
        price: "69452.36940256346",
        timestamp: 1711843200,
      },
      {
        price: "69503.94175677627",
        timestamp: 1711842900,
      },
      {
        price: "69471.93636957063",
        timestamp: 1711842600,
      },
      {
        price: "69455.98099141859",
        timestamp: 1711842300,
      },
      {
        price: "69470.12488989384",
        timestamp: 1711842000,
      },
      {
        price: "69419.74386169134",
        timestamp: 1711841700,
      },
      {
        price: "69445.00563885595",
        timestamp: 1711841400,
      },
      {
        price: "69487.4379998376",
        timestamp: 1711841100,
      },
      {
        price: "69552.81724262364",
        timestamp: 1711840800,
      },
      {
        price: "69548.98757423254",
        timestamp: 1711840500,
      },
      {
        price: "69582.36652106239",
        timestamp: 1711840200,
      },
      {
        price: "69593.67672806366",
        timestamp: 1711839900,
      },
      {
        price: "69567.41114633961",
        timestamp: 1711839600,
      },
      {
        price: "69536.65651035562",
        timestamp: 1711839300,
      },
      {
        price: "69599.56367905493",
        timestamp: 1711839000,
      },
      {
        price: "69559.42357950148",
        timestamp: 1711838700,
      },
      {
        price: "69542.59605677663",
        timestamp: 1711838400,
      },
      {
        price: "69616.1759246435",
        timestamp: 1711838100,
      },
      {
        price: "69608.2880168357",
        timestamp: 1711837800,
      },
      {
        price: "69626.00297461032",
        timestamp: 1711837500,
      },
      {
        price: "69548.13891456639",
        timestamp: 1711837200,
      },
      {
        price: "69483.63947328363",
        timestamp: 1711836900,
      },
      {
        price: "69508.32155574224",
        timestamp: 1711836600,
      },
      {
        price: "69551.3162339603",
        timestamp: 1711836300,
      },
      {
        price: "69564.8268140391",
        timestamp: 1711836000,
      },
      {
        price: "69496.85113334925",
        timestamp: 1711835700,
      },
      {
        price: "69516.81032566009",
        timestamp: 1711835400,
      },
      {
        price: "69543.01311287328",
        timestamp: 1711835100,
      },
      {
        price: "69531.29167048556",
        timestamp: 1711834800,
      },
      {
        price: "69532.03168769233",
        timestamp: 1711834500,
      },
      {
        price: "69526.52056214062",
        timestamp: 1711834200,
      },
      {
        price: "69580.23488395712",
        timestamp: 1711833900,
      },
      {
        price: "69575.83893599924",
        timestamp: 1711833600,
      },
      {
        price: "69559.17495227164",
        timestamp: 1711833300,
      },
      {
        price: "69591.9006588944",
        timestamp: 1711833000,
      },
      {
        price: "69651.18745751305",
        timestamp: 1711832700,
      },
      {
        price: "69643.79662877008",
        timestamp: 1711832400,
      },
      {
        price: "69639.73214374634",
        timestamp: 1711832100,
      },
      {
        price: "69652.09779011186",
        timestamp: 1711831800,
      },
      {
        price: "69666.28316598918",
        timestamp: 1711831500,
      },
      {
        price: "69692.72730401944",
        timestamp: 1711831200,
      },
      {
        price: "69669.79843948399",
        timestamp: 1711830900,
      },
      {
        price: "69698.39171358329",
        timestamp: 1711830600,
      },
      {
        price: "69662.57643562288",
        timestamp: 1711830300,
      },
      {
        price: "69686.61799597392",
        timestamp: 1711830000,
      },
      {
        price: "69658.1533557492",
        timestamp: 1711829700,
      },
      {
        price: "69633.5704443274",
        timestamp: 1711829400,
      },
      {
        price: "69655.47725307765",
        timestamp: 1711829100,
      },
      {
        price: "69710.64237779944",
        timestamp: 1711828800,
      },
      {
        price: "69700.28124523701",
        timestamp: 1711828500,
      },
      {
        price: "69648.19255600874",
        timestamp: 1711828200,
      },
      {
        price: "69662.18784982695",
        timestamp: 1711827900,
      },
      {
        price: "69645.4665830235",
        timestamp: 1711827600,
      },
      {
        price: "69698.06417361647",
        timestamp: 1711827300,
      },
      {
        price: "69663.99259815442",
        timestamp: 1711827000,
      },
      {
        price: "69640.78686195533",
        timestamp: 1711826700,
      },
      {
        price: "69603.72972013828",
        timestamp: 1711826400,
      },
      {
        price: "69578.624410276",
        timestamp: 1711826100,
      },
      {
        price: "69639.16999897175",
        timestamp: 1711825800,
      },
      {
        price: "69663.59587961959",
        timestamp: 1711825500,
      },
      {
        price: "69766.23699737557",
        timestamp: 1711825200,
      },
      {
        price: "69728.81422024191",
        timestamp: 1711824900,
      },
      {
        price: "69747.91488399096",
        timestamp: 1711824600,
      },
      {
        price: "69746.47102499963",
        timestamp: 1711824300,
      },
      {
        price: "69729.77029432509",
        timestamp: 1711824000,
      },
      {
        price: "69755.0171770491",
        timestamp: 1711823700,
      },
      {
        price: "69763.06350372398",
        timestamp: 1711823400,
      },
      {
        price: "69757.2036915309",
        timestamp: 1711823100,
      },
      {
        price: "69702.97048762723",
        timestamp: 1711822800,
      },
      {
        price: "69743.20002937513",
        timestamp: 1711822500,
      },
      {
        price: "69743.44454206082",
        timestamp: 1711822200,
      },
      {
        price: "69820.13881970647",
        timestamp: 1711821900,
      },
      {
        price: "69848.60743102896",
        timestamp: 1711821600,
      },
      {
        price: "69844.77487051985",
        timestamp: 1711821300,
      },
      {
        price: "69835.09307522686",
        timestamp: 1711821000,
      },
      {
        price: "69852.08175563629",
        timestamp: 1711820700,
      },
      {
        price: "69870.43892122468",
        timestamp: 1711820400,
      },
      {
        price: "69859.64510165302",
        timestamp: 1711820100,
      },
      {
        price: "69848.76394833518",
        timestamp: 1711819800,
      },
      {
        price: "69868.32367423702",
        timestamp: 1711819500,
      },
      {
        price: "69831.03003979825",
        timestamp: 1711819200,
      },
      {
        price: "69867.02165015462",
        timestamp: 1711818900,
      },
      {
        price: "69934.82565790784",
        timestamp: 1711818600,
      },
      {
        price: "69981.39709029747",
        timestamp: 1711818300,
      },
      {
        price: "69999.99225434395",
        timestamp: 1711818000,
      },
      {
        price: "70006.68148704649",
        timestamp: 1711817700,
      },
      {
        price: "69953.98696142463",
        timestamp: 1711817400,
      },
      {
        price: "69794.4512343795",
        timestamp: 1711817100,
      },
      {
        price: "69849.24694179106",
        timestamp: 1711816800,
      },
      {
        price: "69862.41395480413",
        timestamp: 1711816500,
      },
      {
        price: "69820.88491587035",
        timestamp: 1711816200,
      },
      {
        price: "69803.44475873199",
        timestamp: 1711815900,
      },
      {
        price: "69746.96365067965",
        timestamp: 1711815600,
      },
      {
        price: "69785.14363264212",
        timestamp: 1711815300,
      },
      {
        price: "69798.24166864957",
        timestamp: 1711815000,
      },
      {
        price: "69829.937768181",
        timestamp: 1711814700,
      },
      {
        price: "69833.50791492804",
        timestamp: 1711814400,
      },
      {
        price: "69836.93360543842",
        timestamp: 1711814100,
      },
      {
        price: "69793.31453366666",
        timestamp: 1711813800,
      },
      {
        price: "69837.1395375056",
        timestamp: 1711813500,
      },
      {
        price: "69824.66990747539",
        timestamp: 1711813200,
      },
      {
        price: "69806.13586812146",
        timestamp: 1711812900,
      },
      {
        price: "69824.2533183467",
        timestamp: 1711812600,
      },
      {
        price: "69853.22180454938",
        timestamp: 1711812300,
      },
      {
        price: "69921.30804999902",
        timestamp: 1711812000,
      },
      {
        price: "69935.07461379377",
        timestamp: 1711811700,
      },
      {
        price: "69967.58556076724",
        timestamp: 1711811400,
      },
      {
        price: "69927.81660438394",
        timestamp: 1711811100,
      },
      {
        price: "69893.61923808057",
        timestamp: 1711810800,
      },
      {
        price: "69873.81997307698",
        timestamp: 1711810500,
      },
      {
        price: "69878.38420185947",
        timestamp: 1711810200,
      },
      {
        price: "69889.314504353",
        timestamp: 1711809900,
      },
      {
        price: "69991.2344960436",
        timestamp: 1711809600,
      },
      {
        price: "70005.22809652521",
        timestamp: 1711809300,
      },
      {
        price: "69995.65810802422",
        timestamp: 1711809000,
      },
      {
        price: "70026.09753820779",
        timestamp: 1711808700,
      },
      {
        price: "70020.0436398397",
        timestamp: 1711808400,
      },
      {
        price: "69980.87199551785",
        timestamp: 1711808100,
      },
      {
        price: "69997.10409000395",
        timestamp: 1711807800,
      },
      {
        price: "70035.22840211882",
        timestamp: 1711807500,
      },
      {
        price: "70024.48313101676",
        timestamp: 1711807200,
      },
      {
        price: "70026.13917667551",
        timestamp: 1711806900,
      },
      {
        price: "70020.54011160295",
        timestamp: 1711806600,
      },
      {
        price: "70036.31911899475",
        timestamp: 1711806300,
      },
      {
        price: "70026.18026432069",
        timestamp: 1711806000,
      },
      {
        price: "69989.91417537584",
        timestamp: 1711805700,
      },
      {
        price: "70063.26566247224",
        timestamp: 1711805400,
      },
      {
        price: "70102.48767099065",
        timestamp: 1711805100,
      },
      {
        price: "70121.60884848598",
        timestamp: 1711804800,
      },
      {
        price: "70079.20564840603",
        timestamp: 1711804500,
      },
      {
        price: "70116.4450379325",
        timestamp: 1711804200,
      },
      {
        price: "70105.04776084129",
        timestamp: 1711803900,
      },
      {
        price: "70088.0118448502",
        timestamp: 1711803600,
      },
      {
        price: "70054.27342248",
        timestamp: 1711803300,
      },
      {
        price: "70076.85804570641",
        timestamp: 1711803000,
      },
      {
        price: "70062.04539630588",
        timestamp: 1711802700,
      },
      {
        price: "70034.98157031399",
        timestamp: 1711802400,
      },
      {
        price: "70025.60199976023",
        timestamp: 1711802100,
      },
      {
        price: "69997.59185116465",
        timestamp: 1711801800,
      },
      {
        price: "70027.9420220263",
        timestamp: 1711801500,
      },
      {
        price: "70081.63445282856",
        timestamp: 1711801200,
      },
      {
        price: "70055.24334070299",
        timestamp: 1711800900,
      },
      {
        price: "70028.87998361026",
        timestamp: 1711800600,
      },
      {
        price: "70057.18797723131",
        timestamp: 1711800300,
      },
      {
        price: "70047.4996087619",
        timestamp: 1711800000,
      },
      {
        price: "70011.66866272702",
        timestamp: 1711799700,
      },
      {
        price: "69976.74096104015",
        timestamp: 1711799400,
      },
      {
        price: "69969.07140814562",
        timestamp: 1711799100,
      },
      {
        price: "70021.90136533832",
        timestamp: 1711798800,
      },
      {
        price: "69975.71139737863",
        timestamp: 1711798500,
      },
      {
        price: "69943.16027440531",
        timestamp: 1711798200,
      },
      {
        price: "69909.984053234",
        timestamp: 1711797900,
      },
      {
        price: "69945.40506149575",
        timestamp: 1711797600,
      },
      {
        price: "69950.67657029603",
        timestamp: 1711797300,
      },
      {
        price: "69965.2972739704",
        timestamp: 1711797000,
      },
      {
        price: "69942.81427697612",
        timestamp: 1711796700,
      },
      {
        price: "69867.574386945",
        timestamp: 1711796400,
      },
      {
        price: "69874.2185614531",
        timestamp: 1711796100,
      },
      {
        price: "69842.17408096154",
        timestamp: 1711795800,
      },
      {
        price: "69901.83082047342",
        timestamp: 1711795500,
      },
      {
        price: "69922.7074835487",
        timestamp: 1711795200,
      },
      {
        price: "69911.26882936432",
        timestamp: 1711794900,
      },
      {
        price: "69876.7238519731",
        timestamp: 1711794600,
      },
      {
        price: "69861.76801929183",
        timestamp: 1711794300,
      },
      {
        price: "69832.02816837843",
        timestamp: 1711794000,
      },
      {
        price: "69822.57759767165",
        timestamp: 1711793700,
      },
      {
        price: "69843.76083466888",
        timestamp: 1711793400,
      },
      {
        price: "69843.81044244535",
        timestamp: 1711793100,
      },
      {
        price: "69860.52160730175",
        timestamp: 1711792800,
      },
      {
        price: "69859.58812839781",
        timestamp: 1711792500,
      },
      {
        price: "69879.97383898076",
        timestamp: 1711792200,
      },
      {
        price: "69941.38990158502",
        timestamp: 1711791900,
      },
      {
        price: "69898.96925584896",
        timestamp: 1711791600,
      },
      {
        price: "69921.56817242088",
        timestamp: 1711791300,
      },
      {
        price: "69937.38325438726",
        timestamp: 1711791000,
      },
      {
        price: "69940.67937386801",
        timestamp: 1711790700,
      },
      {
        price: "69948.126953881",
        timestamp: 1711790400,
      },
      {
        price: "69839.60320233277",
        timestamp: 1711790100,
      },
      {
        price: "69808.07940482657",
        timestamp: 1711789800,
      },
      {
        price: "69804.83718120697",
        timestamp: 1711789500,
      },
      {
        price: "69824.9015482948",
        timestamp: 1711789200,
      },
      {
        price: "69807.09952146633",
        timestamp: 1711788900,
      },
      {
        price: "69705.69206045623",
        timestamp: 1711788600,
      },
      {
        price: "69716.581836205",
        timestamp: 1711788300,
      },
      {
        price: "69764.42576940186",
        timestamp: 1711788000,
      },
      {
        price: "69781.09281616108",
        timestamp: 1711787700,
      },
      {
        price: "69807.66637572605",
        timestamp: 1711787400,
      },
      {
        price: "69851.83224822323",
        timestamp: 1711787100,
      },
      {
        price: "69809.36027898465",
        timestamp: 1711786800,
      },
      {
        price: "69819.87435814478",
        timestamp: 1711786500,
      },
      {
        price: "69774.91524887281",
        timestamp: 1711786200,
      },
      {
        price: "69763.26141832194",
        timestamp: 1711785900,
      },
      {
        price: "69733.69586886949",
        timestamp: 1711785600,
      },
      {
        price: "69798.38822487227",
        timestamp: 1711785300,
      },
      {
        price: "69814.95430783619",
        timestamp: 1711785000,
      },
      {
        price: "69836.66365964587",
        timestamp: 1711784700,
      },
      {
        price: "69810.95392112425",
        timestamp: 1711784400,
      },
      {
        price: "69826.10966287441",
        timestamp: 1711784100,
      },
      {
        price: "69807.60017123334",
        timestamp: 1711783800,
      },
      {
        price: "69831.64005696872",
        timestamp: 1711783500,
      },
      {
        price: "69860.24816029187",
        timestamp: 1711783200,
      },
      {
        price: "69892.16953804577",
        timestamp: 1711782900,
      },
      {
        price: "69806.15000183816",
        timestamp: 1711782600,
      },
      {
        price: "69869.36358617259",
        timestamp: 1711782300,
      },
      {
        price: "69853.80075503906",
        timestamp: 1711782000,
      },
      {
        price: "69856.65177965655",
        timestamp: 1711781700,
      },
      {
        price: "69889.99829031374",
        timestamp: 1711781400,
      },
      {
        price: "69835.79186879886",
        timestamp: 1711781100,
      },
      {
        price: "69827.4349693656",
        timestamp: 1711780800,
      },
      {
        price: "69817.04964912852",
        timestamp: 1711780500,
      },
      {
        price: "69955.01033528958",
        timestamp: 1711780200,
      },
      {
        price: "69864.13328808022",
        timestamp: 1711779900,
      },
      {
        price: "69901.02312338329",
        timestamp: 1711779600,
      },
      {
        price: "69832.05287198008",
        timestamp: 1711779300,
      },
      {
        price: "69776.70114468405",
        timestamp: 1711779000,
      },
      {
        price: "69834.29725526868",
        timestamp: 1711778700,
      },
      {
        price: "69897.08917152847",
        timestamp: 1711778400,
      },
      {
        price: "69907.0694215827",
        timestamp: 1711778100,
      },
      {
        price: "69924.2993228671",
        timestamp: 1711777800,
      },
      {
        price: "69908.83180283953",
        timestamp: 1711777500,
      },
      {
        price: "69907.0866318744",
        timestamp: 1711777200,
      },
      {
        price: "69799.88306337921",
        timestamp: 1711776900,
      },
      {
        price: "69889.6217623931",
        timestamp: 1711776600,
      },
      {
        price: "69964.70050190533",
        timestamp: 1711776300,
      },
      {
        price: "70062.08105551601",
        timestamp: 1711776000,
      },
      {
        price: "70005.13190136632",
        timestamp: 1711775700,
      },
      {
        price: "70135.0710774992",
        timestamp: 1711775400,
      },
      {
        price: "70147.14303679173",
        timestamp: 1711775100,
      },
      {
        price: "69964.97803879938",
        timestamp: 1711774800,
      },
      {
        price: "69934.94634428162",
        timestamp: 1711774500,
      },
    ],
  },
};

import { format } from "date-fns";
import { date_format } from "./helper";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.coinranking.com/v2";

export async function getGlobalStats() {
  const res = await fetch(`${API_URL}/stats`, {
    method: "GET",
    headers: {
      "x-access-token": API_KEY,
    },
  });

  const data = await res.json();
  return data;
}

export async function getCoinDetails(coinId) {
  const res = await fetch(`${API_URL}/coin/${coinId}`, {
    method: "GET",
    headers: {
      "x-access-token": API_KEY,
    },
  });

  const data = await res.json();
  return data;
}

export async function getListOfCoins(limit) {
  const res = await fetch(`${API_URL}/coins?limit=${limit}`, {
    method: "GET",
    headers: {
      "x-access-token": API_KEY,
    },
  });
  const data = await res.json();
  return data;
}
export async function getPriceHistory(coinId, timePeriod) {
  const res = await fetch(
    `${API_URL}/coin/${coinId}/history?timePeriod=${timePeriod}`,
    {
      method: "GET",
      headers: {
        "x-access-token": API_KEY,
      },
    },
  );
  const data = await res.json();

  return data.data.history
    .map((item) => ({
      ...item,
      timestamp: format(
        new Date(item.timestamp * 1000),
        date_format[timePeriod],
      ),
    }))
    .reverse();
}

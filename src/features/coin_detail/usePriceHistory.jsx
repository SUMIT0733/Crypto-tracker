import { useQuery } from "@tanstack/react-query";
import { getPriceHistory } from "../../services/apiCoins";

export function usePriceHistory(coinId, priceTimeline = "12h") {
  // debugger
  const { isLoading, data, refetch } = useQuery({
    queryKey: [coinId, priceTimeline],
    queryFn: () => getPriceHistory(coinId, priceTimeline),
  });
  console.log(data);
  return { isLoading, data, refetch };
}

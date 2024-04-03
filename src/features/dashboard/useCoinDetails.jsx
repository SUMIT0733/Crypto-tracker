import { useQuery } from "@tanstack/react-query";
import { getCoinDetails } from "../../services/apiCoins";

export function useCoinDetails(coinId) {
  const { isLoading, data } = useQuery({
    queryKey: [coinId],
    queryFn: () => getCoinDetails(coinId),
  });
  // console.log(data);
  return { isLoading, data };
}

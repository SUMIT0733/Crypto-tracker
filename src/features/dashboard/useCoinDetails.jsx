import { getCoinDetails } from "../../services/apiCoins";
import { useQuery } from "@tanstack/react-query";

export function useCoinDetails(coinId) {
  // debugger
  const { isLoading, data, refetch } = useQuery({
    queryKey: [`coinId-${coinId}`],
    queryFn: () => getCoinDetails(coinId),
  });
  return { isLoading, data, refetch };
}

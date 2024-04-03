import { useQuery } from "@tanstack/react-query";
import { getGlobalStats } from "../../services/apiCoins";

export function useGloabalStats() {
  const { isLoading, data: stats } = useQuery({
    queryKey: ["globalstats"],
    queryFn: getGlobalStats,
  });

  return { isLoading, stats };
}

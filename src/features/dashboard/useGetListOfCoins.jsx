import { useQuery } from "@tanstack/react-query";
import { getListOfCoins } from "../../services/apiCoins";

export function useGetListOfCoins(limit = 10) {
  const { isLoading, data: list } = useQuery({
    queryKey: [`ListOfCoins-${limit}`],
    queryFn: () => getListOfCoins(limit),
  });

  return { isLoading, list };
}

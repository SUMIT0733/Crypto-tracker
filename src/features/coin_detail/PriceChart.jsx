import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomToolTip from "../../ui/CustomToolTip";
import { usePriceHistory } from "./usePriceHistory";
import { useEffect } from "react";
import { formatCurrencyForChart } from "../../services/helper";
import Spinner from "../dashboard/Spinner";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PriceChart({ filter }) {
  const { coinId } = useParams();
  const {
    isLoading,
    data: price_data,
    refetch,
  } = usePriceHistory(coinId, filter);

  useEffect(() => {
    refetch();
  }, [filter, refetch]);

  const color = {
    value: { stroke: "#4f46e5", fill: "#c7d2fe" },
    text: "#374151",
    background: "#fff",
  };

  if (isLoading) return <Spinner />;

  const prices = price_data.map((item) => item.price);
  const dataMin = Math.min(...prices);
  const dataMax = Math.max(...prices);

  const range = dataMax - dataMin;
  const padding = range * 0.05;
  const interval = range / 5;
  const ticks = Array.from({ length: 6 }, (_, i) => dataMin + interval * i);

  return (
    <ResponsiveContainer width="100%" height={400} className="mt-6">
      <AreaChart data={price_data} margin={{ bottom: 50 }}>
        <CartesianGrid strokeDasharray="4" />
        <XAxis
          dataKey="timestamp"
          tick={{ fill: color.text, angle: -45, textAnchor: "end" }}
          tickLine={{ stroke: color.text }}
        />
        <YAxis
          // domain={[Math.floor(dataMin / 10) - padding, Math.ceil(dataMax / 10) + padding]}
          // ticks={ticks}
          tick={{ fill: color.text }}
          tickLine={{ stroke: color.text }}
          tickFormatter={(value) => formatCurrencyForChart(value)}
        />
        <Tooltip
          contentStyle={{ backgroundColor: color.background }}
          content={<CustomToolTip filter={filter} />}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke={color.value.stroke}
          fill={color.value.fill}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

PriceChart.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default PriceChart;

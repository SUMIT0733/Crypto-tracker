import { format } from "date-fns";
import { date_format, formatCurrency } from "../services/helper";
import PropTypes from "prop-types";

function CustomToolTip({ active, payload, filter }) {
  // console.log(payload);
  if (active && payload && payload.length) {
    return (
      <div className="rounded border bg-white p-3 text-black shadow">
        <p className="label">{`Price : ${formatCurrency(payload[0].value)}`}</p>
        <p className="intro">{`Time: ${payload[0].payload.timestamp}`}</p>
      </div>
    );
  }
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  filter: PropTypes.string,
};

export default CustomToolTip;

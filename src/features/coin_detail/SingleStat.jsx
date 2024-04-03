import { format } from "date-fns";
import PropTypes from "prop-types";

SingleStat.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string,
};

function SingleStat({ label, icon, value, date }) {
  return (
    <div className="flex justify-between p-4 text-[1.5rem]">
      <div className="grid grid-cols-[auto_auto] items-center gap-3">
        {icon}
        <p className="flex content-end justify-end">{label}</p>
      </div>
      <div className="flex flex-col content-end">
        <div className="font-bold flex justify-end">{value}</div>
        {date && (
          <div className="text-gray-500">on {format(new Date(date * 1000), "dd/MM/yyyy")}</div>
        )}
      </div>
    </div>
  );
}

export default SingleStat;

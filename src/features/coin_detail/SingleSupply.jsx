import { format } from "date-fns";
import PropTypes from "prop-types";

SingleSupply.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  value: PropTypes.string,
  date: PropTypes.string,
};

function SingleSupply({ label, value, date }) {
  return (
    <div className="flex justify-between p-4 text-[1.5rem]">
      <div className="grid grid-cols-[auto] items-center gap-3">
        <p className="flex content-end justify-end">{label}</p>
      </div>
      <div className="flex flex-col content-end">
        <div className="flex justify-end font-bold">{value}</div>
        {date && (
          <div className="">
            on {format(new Date(date * 1000), "dd/MM/yyyy")}
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleSupply;

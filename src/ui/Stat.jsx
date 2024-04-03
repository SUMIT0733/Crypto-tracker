import PropTypes from "prop-types";

Stat.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function Stat({ icon, title, value, color}) {
  return (
    <div className="grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-6 gap-y-2 rounded-md border border-gray-50 bg-gray-50 p-6">
      <div
        className={`row-span-full flex aspect-[1] items-center justify-center rounded-full bg-${color}-200`}
      >
        {icon}
      </div>
      <h5 className="items-end text-xl font-semibold uppercase tracking-[0.4rem] text-gray-700">
        {title}
      </h5>
      <p className="text-4xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;

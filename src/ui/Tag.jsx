import PropTypes from "prop-types";

function Tag({ children, color="lime" }) {
  return (
    <span
      className={`inline-block rounded-full align-middle bg-${color}-200 px-3 py-1 text-lg font-semibold uppercase text-${color}-800`}
    >
      {children}
    </span>
  );
}

Tag.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tag;

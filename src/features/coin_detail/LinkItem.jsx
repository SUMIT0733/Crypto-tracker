import PropTypes from "prop-types";

LinkItem.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};

function LinkItem({ icon, link, linkName }) {
  function handleClickLink() {
    window.open(link, "_blank");
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-5 hover:cursor-pointer"
      onClick={handleClickLink}
    >
      <div className="inline-flex items-center justify-center border rounded-full border-gray-500 p-4">{icon}</div>
      <p className="">{linkName}</p>
    </div>
  );
}

export default LinkItem;

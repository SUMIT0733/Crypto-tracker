import {
  FaFacebook,
  FaGithub,
  FaRedditAlien,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaLink,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import PropTypes from "prop-types";
import LinkItem from "./LinkItem";

const iconMap = {
  facebook: <FaFacebook className="h-12 w-12 text-blue-500" />,
  github: <FaGithub className="text-gray-800-500 h-12 w-12" />,
  reddit: <FaRedditAlien className="h-12 w-12 text-red-500" />,
  twitter: <FaTwitter className="h-12 w-12 text-blue-500" />,
  youtube: <FaYoutube className="h-12 w-12 text-red-500" />,
  discord: <BsDiscord className="h-12 w-12 text-violet-800" />,
  telegram: <FaTelegramPlane className="h-12 w-12 text-blue-500" />,
  default: <FaLink className="h-12 w-12 text-blue-500" />,
};

Links.propTypes = {
  links: PropTypes.object.isRequired,
};

function Links({ links }) {
  return (
    <div className="grid w-full grid-cols-6 items-stretch justify-between gap-6 mx-auto">
      {links.map((link, index) => {
        const Icon = iconMap[link.type] || iconMap.default;
        return (
          <LinkItem
            key={index}
            icon={Icon}
            link={link.url}
            linkName={link.name}
          />
        );
      })}
    </div>
  );
}

export default Links;

// return (
//   <a
//     key={index}
//     href={link.url}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Icon /> {link.name}
//   </a>
// );

import {
  FaFacebook,
  FaGithub,
  FaRedditAlien,
  FaTwitter,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import PropTypes from "prop-types";
import LinkItem from "./LinkItem";

const iconMap = {
  facebook: FaFacebook,
  github: FaGithub,
  reddit: FaRedditAlien,
  twitter: FaTwitter,
  youtube: FaYoutube,
  default: FaLink,
};

Links.propTypes = {
  links: PropTypes.object.isRequired,
};

function Links({ links }) {
  return (
    <div className="grid w-full grid-cols-6 items-stretch justify-between gap-6">
      {links.map((link, index) => {
        const Icon = iconMap[link.type] || iconMap.default;
        return (
          <LinkItem
            key={index}
            icon={<Icon className="h-12 w-12 text-blue-500" />}
            link={link.url}
            linkName={link.type}
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

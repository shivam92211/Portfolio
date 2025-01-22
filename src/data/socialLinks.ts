import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faNewspaper as faNewspaperSolid } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.blog,
    url: Strings.blogLink,
    icon: faNewspaperSolid,
    text: Strings.blogUsername,
  },
  {
    name: Strings.twitter,
    url: Strings.twitterLink,
    icon: faXTwitter,
    text: Strings.twitterUsername,
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
  // {
  //   name: Strings.buyMeACoffee,
  //   url: Strings.buyMeACoffeeLink,
  //   icon: "/images/buy-me-a-coffee.png",
  //   text: Strings.buyMeACoffeeUsername,
  // },
  // {
  //   name: Strings.koFi,
  //   url: Strings.koFiLink,
  //   icon: "/images/ko-fi.png",
  //   text: Strings.buyMeACoffeeUsername,
  // },
];

export default socialLinks;

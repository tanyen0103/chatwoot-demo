import DiscordIcon from "icons/Discord";
import FacebookIcon from "icons/Facebook";
import GithubIcon from "icons/Github";
import InstagramIcon from "icons/Instagram";
import LinkedInIcon from "icons/LinkedIn";
import YoutubeIcon from "icons/Youtube";
;

const socialList = [
  {
    key: "https://www.github.com/chatwoot",
    label: "Github",
    icon: <GithubIcon className="icon w-6 h-6" />,
  },
  {
    key: "https://discord.gg/cJXdrwS",
    label: "Discord",
    icon: <DiscordIcon className="icon w-6 h-6" />,
  },
  {
    key: "https://www.linkedin.com/company/chatwoot",
    label: "Linkedin",
    icon: <LinkedInIcon className="icon w-6 h-6" />,
  },
  {
    key: "https://www.youtube.com/chatwoot",
    label: "Youtube",
    icon: <YoutubeIcon className="icon w-6 h-6" />,
  },
  {
    key: "https://www.facebook.com/chatwoot",
    label: "Facebook",
    icon: <FacebookIcon className="icon w-6 h-6" />,
  },
  {
    key: "https://www.instagram.com/chatwoot",
    label: "Instagram",
    icon: <InstagramIcon className="icon w-6 h-6" />,
  },
];

const FooterExtraInfo = () => {
  return (
    <div className="pt-8 mt-8 border-t border-gray-100 md:flex md:items-center md:justify-between">
      <div className="flex space-x-6 md:order-2">
        {socialList.map((item) => (
          <a
            key={item.key}
            href={item.key}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-gray-400 cursor-pointer hover:text-gray-500"
          >
            <span className="sr-only">{item.label}</span>
            {item.icon}
          </a>
        ))}
      </div>

      <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
        © Chatwoot Inc © 2023, All rights reserved
      </p>
    </div>
  );
};

export default FooterExtraInfo;

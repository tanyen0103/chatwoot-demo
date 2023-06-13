import FooterExtraInfo from "./FooterExtraInfo";
import FooterHeading from "./FooterHeading";
import FooterSubcription from "./FooterSubcription";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return (
    <footer className="relative bg-white" aria-labelledby="footer-heading">
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:pt-24 lg:pb-12 lg:px-8 xl:px-0">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <FooterHeading />
          <FooterNavigation />
        </div>
        <FooterSubcription />
        <FooterExtraInfo />
      </div>
    </footer>
  );
};

export default Footer;

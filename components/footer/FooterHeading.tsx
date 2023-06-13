import Logo from "icons/Logo";
import Image from "next/image";
;

const FooterHeading = () => {
  return (
    <div className="col-span-2 space-y-8">
      <Logo className="w-auto h-10"/>
      <p className="text-base text-gray-500">
        Opensource customer engagement platform. An alternative to Intercom,
        Zendesk &amp; Salesforce Service Cloud.
      </p>
      <div className="space-y-2">
        <h3 className="text-base font-medium text-gray-900">Backed By</h3>
        <div className="flex items-center space-x-2">
          <Image
            src="/images/yc.png"
            alt="Y Combinator"
            className="w-auto h-9"
            width={36}
            height={36}
          />
          <Image
            src="/images/goat-capital.png"
            alt="Goat Capital"
            className="w-auto h-9"
            width={78}
            height={36}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterHeading;

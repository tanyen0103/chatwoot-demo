const footerMenu = [
  {
    key: "/product",
    label: "Product",
    children: [
      {
        key: "/features/shared-inbox",
        label: "Shared Inbox",
      },
      { key: "/features/Shared Inbox", label: "Shared Inbox" },
      { key: "/features/Live Chat", label: "Live Chat" },
      { key: "/features/Channels", label: "Channels" },
      { key: "/features/Automations", label: "Automations" },
      { key: "/features/Chatbots", label: "Chatbots" },
      { key: "/features/Mobile Apps", label: "Mobile Apps" },
      { key: "/features/Integrations", label: "Integrations" },
    ],
  },
  {
    key: "/support",
    label: "Support",
    children: [
      { key: "/Blog", label: "Blog" },
      { key: "/Careers", label: "Careers" },
      { key: "/Team", label: "Team" },
      { key: "/Changelog", label: "Changelog" },
      { key: "/Status", label: "Status" },
      { key: "/Chatwoot Connect", label: "Chatwoot Connect" },
    ],
  },
  {
    key: "/company",
    label: "Company",
    children: [
      { key: "/Self Hosted Chatwoot", label: "Self Hosted Chatwoot" },
      { key: "/Product Documentation", label: "Product Documentation" },
      { key: "/API Documentation", label: "API Documentation" },
      { key: "/Contribution guide", label: "Contribution guide" },
      { key: "/Handbook", label: "Handbook" },
    ],
  },
  {
    key: "/legal",
    label: "Legal",
    children: [
      { key: "/Security", label: "Security" },
      { key: "/Privacy Policy", label: "Privacy Policy" },
      { key: "/Terms of service", label: "Terms of service" },
    ],
  },
];
const FooterNavigation = () => {
  return (
    <>
      {footerMenu.map((item) => (
        <div key={item.key}>
          <h3 className="text-base font-medium text-gray-900">{item.label}</h3>
          <ul role="list" className="mt-4 space-y-4">
            {item.children.map((subItem) => (
              <li key={subItem.key}>
                <a
                  href={subItem.key}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterNavigation;

import HeaderMobilePopoverMenu from "components/headermobile/HeaderMobilePopoverMenu";
import GithubIcon from "icons/Github";


export default function HeaderRight() {
  return (
    <div className="flex items-center gap-x-5 md:gap-x-6">
      <a
        className="text-sm flex-space-x-2 flex items-center px-2 py-1 rounded-md font-semibold w-24 relative overflow-hidden group text-slate-700"
        href="https://github.com/chatwoot/chatwoot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="icon h-5 w-5" />
        <span className="absolute left-8 group-hover:mb-11 transition-all duration-100">
          15,205
        </span>
        <span className="absolute left-7 mt-11 group-hover:mt-[unset] transition-all duration-100">
          {" "}
          Star us{" "}
        </span>
      </a>
      <a
        href="https://app.chatwoot.com/app/login?utm_source=navbar-link"
        rel="noopener noreferrer"
        className="navbar-link hidden sm:inline-block"
      >
        {" "}
        Sign in{" "}
      </a>
      <a
        href="https://app.chatwoot.com/app/auth/signup?utm_source=navbar-link"
        rel="noopener noreferrer"
        className="group navbar-register-link hidden sm:inline-block"
      >
        {" "}
        Create a free account{" "}
      </a>
      
      <HeaderMobilePopoverMenu />
    </div>
  );
}

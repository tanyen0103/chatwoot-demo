import Image from "next/image"
import logo from "public/images/home/logo.svg"

const CaseStudy = ({ className }: { className: string }) => {
  return (
    <figure className={className}>
      <blockquote className="p-12 pb-6 text-xl font-semibold leading-8 tracking-tight text-gray-900">
        <p>
          “Chatwoot offers us the ability to customize the omnichannel
          experience the way we want it, as opposed to other players. Plus: the
          Chatwoot team is always available to help. All I need to do is drop a
          message; they readily respond to any queries we ask.”
        </p>
      </blockquote>
      <a
        href="/case-studies/ponea-health"
        className="pl-12 pb-6 block mt-2 text-base"
      >
        Read Case Study →
      </a>
      <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
        <Image
          className="h-10 w-10 flex-none rounded-full bg-gray-50"
          src="/images/home/dennis.webp"
          alt="Dennis Henry"
          width={40}
          height={40}
        />
        <div className="flex-auto">
          <div className="font-semibold">Dennis Henry</div>
          <div className="text-gray-600">Tech Lead</div>
        </div>
        <Image
          className="h-10 w-auto flex-none"
          src={logo}
          alt="Dennis Henry"
          width={150}
          height={40}
        />
      </figcaption>
    </figure>
  )
}

export default CaseStudy
import Image from "next/image"

const DashboardApps = () => {
  return (
    <div className="col-span-8 min-h-[24rem] sm:col-span-4 bg-slate-200 relative feature-card">
      <Image
          src="/images/home/dashboard-apps.webp"
          alt="dapps"
          className="w-full h-full object-cover"
          width={558}
          height={400}
        />
        <div className="absolute bottom-0 left-0 w-full p-8">
          <h2 className="text-white text-3xl font-semibold">Dashboard Apps</h2>
          <p className="text-white/80 font-medium mt-2 mb-4">
            Embed your own custom apps, and view all your customer data on a
            single dashboard.
          </p>
          <a
            href="/blog/dashboard-apps"
            className="bg-white/90 backdrop-blur rounded-md px-4 py-2 text-slate-900 text-sm font-medium"
          >
            Learn More →
          </a>
        </div>
    </div>
  )
}

export default DashboardApps

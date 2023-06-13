import AutoMateTasksImage from "icons/AutoMateTasksImage"


const AutomateTasks = () => {
  return (
    <>
      <div className="col-span-8 md:col-span-5 h-[] bg-slate-900 dots feature-card relative feature-card">
        <AutoMateTasksImage className="w-full h-auto static md:absolute top-1/2 translate-y-6 md:-translate-y-1/2" />
        <div className="static md:absolute -translate-y-6 md:translate-y-0 bottom-8 left-8 max-w-sm p-4 md:p-0">
          <h2 className="text-2xl font-bold text-white">
            Automate <br />
            your repeated tasks
          </h2>
          <p className="text-slate-300 text-lg mt-2 font-medium">
            Setup Automation Rules to handle all the grunt work. So, your
            customers get all your attention.
          </p>
          <a href="/features/automations" className="text-white mt-2 block">
            Learn More →
          </a>
        </div>
      </div>
    </>
  )
}

export default AutomateTasks

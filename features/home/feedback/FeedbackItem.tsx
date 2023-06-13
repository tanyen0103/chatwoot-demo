import Image from "next/image"

const FeedbackItem = ({ item }: { item: any }) => {
  return (
    <figure className="rounded-2xl bg-white/50 hover:bg-white transition-colors duration-300 backdrop-blur p-6 shadow-lg ring-1 ring-gray-900/5">
      <blockquote className="text-gray-600">
        <p>{item.content}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          className="h-10 w-10 rounded-full bg-gray-50"
          height="40"
          width="40"
          src={item.avatar}
          alt={item.name}
        />
        <div>
          <div className="font-semibold">{item.name}</div>
          {item.jobTitle && (
            <div className="text-gray-600">
              <span>{item.jobTitle}</span>
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  )
}

export default FeedbackItem

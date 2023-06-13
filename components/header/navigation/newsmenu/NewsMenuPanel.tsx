import { NewsMenuItem as NewsMenuItemType } from "../../../../types/Menu";
import { NewsItem } from "./NewsItem";
import { NewsMenuItem } from "./NewsMenuItem";

const NewsMenuPanel = ({news}:{news: NewsMenuItemType}) => {
  return (
    <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
      <div className="mx-auto max-w-7xl px-0 sm:px-6 z-20 relative">
        <div className="grid grid-cols-4 gap-12">
          {news.categories.map((item) => (
            <NewsMenuItem key={item.name} {...item} />
          ))}
          <div className="col-span-2 bg-slate-50">
            <div className="p-6">
              <div className="mt-4 space-y-8">
                {news.news.map((newsItem) => (
                  <NewsItem key={newsItem.name} {...newsItem} />
                ))}
                <div>
                  <a
                    href="/videos"
                    className="text-woot font-normal text-sm mb-4"
                  >
                    All Videos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMenuPanel;

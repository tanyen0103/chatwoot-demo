import HeroHomeSection from "features/home/HeroHomSection";
import ClientBrandsSection from "features/home/ClientBrandsSection";
import CustomerEngagementSection from "features/home/CustomerEngagementSection";
import MobileAppsSection from "features/home/MobileDownloadSection";
import OmnichannelSupportCenterSection from "features/home/OmnichannelSupportCenterSection";
import OpenSourceSection from "features/home/OpenSourceSection";
import ReportSection from "features/home/ReportSection";
import HostSection from "features/home/HostSection";
import FeedbackSection from "features/home/feedback/FeedbackSection";

export default function Home() {
  return (
    <main className="min-h-min">
      <HeroHomeSection />
      <ClientBrandsSection />
      <OmnichannelSupportCenterSection />
      <CustomerEngagementSection />
      <OpenSourceSection />
      <ReportSection />
      <FeedbackSection />
      <HostSection />
      <MobileAppsSection />
    </main>
  );
}

import { LandingLayout } from "@/layout/landing";
import {
  DiscoverView,
  HeroView,
  HowWorkView,
  InspirationalView,
  SustainableView,
  WhyUseView,
} from "@/views/home";

const HomePage: React.FC = () => {
  return (
    <LandingLayout>
      <main>
        <HeroView />
        <WhyUseView />
        <DiscoverView />
        <HowWorkView />
        <InspirationalView />
        <SustainableView />
      </main>
    </LandingLayout>
  );
};
export default HomePage;

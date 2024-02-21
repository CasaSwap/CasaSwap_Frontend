import { LandingLayout } from "@/layout/landing";
import {
  DiscoverView,
  HeroView,
  HowWorkView,
  InspirationalView,
  SustainableView,
  TestimoniesView,
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
        <TestimoniesView />
      </main>
    </LandingLayout>
  );
};
export default HomePage;

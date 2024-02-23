import { LandingLayout } from "@/layout/landing";
import {
  DiscoverView,
  HeroView,
  HowWorkView,
  InspirationalView,
  OldWhyView,
  PressView,
  SustainableView,
  TestimoniesView,
  WhyUseView,
  DestinationView,
  BlogView,
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
        <PressView />
        <OldWhyView />
        <BlogView />
        <DestinationView />
      </main>
    </LandingLayout>
  );
};
export default HomePage;

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { StickyNav } from "@/components/StickyNav";
import { OverviewSection } from "@/components/OverviewSection";
import { TechStackSection } from "@/components/TechStackSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CTAFooter } from "@/components/CTAFooter";
import { ConsultationModal } from "@/components/ConsultationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <StickyNav />
      <OverviewSection />
      <TechStackSection />
      <BenefitsSection />
      <CurriculumSection />
      <ProjectsSection />
      <CTAFooter onOpenModal={() => setIsModalOpen(true)} />
      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;

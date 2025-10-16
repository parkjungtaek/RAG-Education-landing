import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { StickyNav } from "@/components/StickyNav";
import { OverviewSection } from "@/components/OverviewSection";
import { TechStackSection } from "@/components/TechStackSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { ProjectsSection, projects } from "@/components/ProjectsSection";
import { ModulesSection } from "@/components/ModulesSection";
import { CTAFooter } from "@/components/CTAFooter";
import { ConsultationModal } from "@/components/ConsultationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectSelect = (projectId: string) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);

      setTimeout(() => {
        const modulesSection = document.getElementById('modules');
        if (modulesSection) {
          modulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const selectedProject = selectedProjectId
    ? projects.find(p => p.id === selectedProjectId)
    : null;

  const connectedModules = selectedProject?.connectedModules || [];

  return (
    <div className="min-h-screen">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <StickyNav />
      <OverviewSection />
      <TechStackSection />
      <BenefitsSection />
      <CurriculumSection />
      <ProjectsSection
        selectedProjectId={selectedProjectId}
        onProjectSelect={handleProjectSelect}
      />
      <ModulesSection
        selectedProjectId={selectedProjectId}
        connectedModules={connectedModules}
        selectedProject={selectedProject}
      />
      <CTAFooter onOpenModal={() => setIsModalOpen(true)} />
      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;

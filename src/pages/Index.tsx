import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import {
  CatalogSection,
  PurchasesSection,
  ReviewsSection,
  SupportSection,
  ContactsSection,
  ProfileSection,
  Footer,
} from "@/components/OtherSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen grid-bg" style={{ background: "var(--dark-bg)" }}>
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navTo={navTo}
      />

      <div className="pt-16">
        {activeSection === "home" && <HomeSection navTo={navTo} />}
        {activeSection === "catalog" && <CatalogSection navTo={navTo} />}
        {activeSection === "purchases" && <PurchasesSection navTo={navTo} />}
        {activeSection === "reviews" && <ReviewsSection />}
        {activeSection === "support" && <SupportSection />}
        {activeSection === "contacts" && <ContactsSection />}
        {activeSection === "profile" && <ProfileSection />}
        <Footer />
      </div>
    </div>
  );
}

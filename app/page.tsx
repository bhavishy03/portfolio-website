import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutMeSection } from "@/components/about-me-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  const personalData = {
    name: "Shubhan Chourasiya",
    title: "Data Analyst | MIS Specialist",
    location: "Indore, Madhya Pradesh, India",
    about: `I am a passionate and detail-oriented Data Analyst with over 15 months of hands-on experience in requirement analysis, data modeling, and software design. I specialize in turning complex datasets into meaningful insights that support informed decision-making and business growth.

With a strong foundation in data analysis, MIS, and team leadership, I thrive in dynamic environments where precision and timely execution are key. I take pride in my ability to lead teams, streamline data processes, and deliver impactful analysis that drives strategic planning.`,
    experience: [
      {
        title: "MIS Data Analyst (IT) | Team Leader & Trainer",
        company: "MMC Convert, Indore",
        duration: "February 2023 – May 2024",
        description: [
          "Supervised and trained junior analysts and data entry operators, ensuring quality and consistency across deliverables.",
          "Collected, structured, and maintained large datasets to support real-time data analysis and reporting.",
          "Designed and managed relational databases for streamlined access to business-critical information.",
          "Conducted detailed data trend analyses and provided accurate forecasting models.",
          "Played a key role in end-to-end project lifecycles—from data capture and organization to final reporting.",
          "Supported the accounting department in accurate data entry and documentation while maintaining confidentiality.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Makhanlal Chaturvedi University",
        duration: "2022 – Present",
      },
      {
        degree: "Diploma in Computer Applications",
        institution: "Makhanlal Chaturvedi University",
        duration: "2021",
      },
      {
        degree: "Higher Secondary Education (PCM)",
        institution: "Saraswati Higher Secondary School, Indore",
        duration: "",
      },
    ],
    skills: {
      core: [
        "Data Analysis & Modeling",
        "MIS & Database Management",
        "Forecasting & Strategic Reporting",
        "Financial & Accounting Data Entry",
        "Team Leadership & Staff Training",
        "Effective Business Communication",
        "Process Optimization & Planning",
      ],
      technical: [
        "Microsoft Excel (Advanced functions, pivot tables, VLOOKUP, dashboards)",
        "Database Systems (MySQL, Microsoft Access)",
        "Programming Knowledge (SQL, Python)",
        "Data Visualization Tools (Power BI, Tableau)",
        "Accounting Tools (Basic understanding and experience with accounting software)",
      ],
      languages: ["English – Proficient", "Hindi – Native"],
    },
    contact: {
      mobile: "+91 91313 42253",
      email: "shubhanchourasiya33@gmail.com",
      location: "Bholaram, Indore – 452001, Madhya Pradesh",
    },
    objective:
      "I strongly believe that data is the new oil—with the right tools and mindset, it can unlock immense value for any organization. My mission is to help businesses make smarter decisions by implementing efficient data systems and delivering meaningful analytics. I’m always eager to explore new technologies and strategies that push the boundaries of what data can achieve.",
    callToAction:
      "Looking to collaborate or hire for data analytics or MIS projects? Let’s connect and discuss how I can bring value to your organization!",
  };

  return (
    <div className="min-h-screen bg-light-background text-light-text">
      <AnimatedBackground />
      <Header />
      <main className="container relative z-10 mx-auto px-4 pt-4 pb-8 md:px-6 md:pb-10 lg:px-8">
        <HeroSection data={personalData} />
        <Separator className="my-16 bg-light-border h-px w-2/3 mx-auto" />
        <AboutMeSection data={personalData} />
        <Separator className="my-16 bg-light-border h-px w-2/3 mx-auto" />
        <SkillsSection data={personalData.skills} />
        <Separator className="my-16 bg-light-border h-px w-2/3 mx-auto" />
        <ExperienceSection data={personalData} />
        <Separator className="my-16 bg-light-border h-px w-2/3 mx-auto" />
        <ContactSection data={personalData} />
      </main>
      <Footer />
    </div>
  );
}

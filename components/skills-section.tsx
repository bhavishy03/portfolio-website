'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BrainIcon, CodeIcon, DatabaseIcon, LineChartIcon, UsersIcon, BarChartIcon, FileTextIcon, LightbulbIcon, HandshakeIcon } from 'lucide-react';
import { TiltCard } from "./tilt-card";

interface SkillsSectionProps {
  data: {
    core: string[];
    technical: string[];
    languages: string[];
  };
}

const skillIcons: { [key: string]: React.ElementType } = {
  "Data Analysis & Modeling": LineChartIcon,
  "MIS & Database Management": DatabaseIcon,
  "Forecasting & Strategic Reporting": BarChartIcon,
  "Financial & Accounting Data Entry": FileTextIcon,
  "Team Leadership & Staff Training": UsersIcon,
  "Effective Business Communication": HandshakeIcon,
  "Process Optimization & Planning": LightbulbIcon,
  "Microsoft Excel": CodeIcon,
  "Database Systems": DatabaseIcon,
  "Programming Knowledge": CodeIcon,
  "Data Visualization Tools": LineChartIcon,
  "Accounting Tools": FileTextIcon,
  "English": UsersIcon,
  "Hindi": UsersIcon,
};

export function SkillsSection({ data }: SkillsSectionProps) {
  const section = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

  const CardBlock = ({ title, Icon, list }: { title: string, Icon: React.ElementType, list: string[] }) => (
    <TiltCard className="group">
      <Card className="h-full bg-white/70 backdrop-blur border-light-border transition-colors group-hover:border-light-accent/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <Icon className="h-7 w-7 text-light-accent" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-light-muted">
            {list.map((skill, i) => {
              const Base = skill.split('(')[0].trim()
              const Ico = skillIcons[Base]
              return (
                <li key={i} className="flex items-start">
                  {Ico && <Ico className="mr-2 mt-1 h-4 w-4 text-light-accent" />}
                  {skill}
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </TiltCard>
  )

  return (
    <motion.section id="skills" className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32" variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">My Skills</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardBlock title="Core Competencies" Icon={BrainIcon} list={data.core} />
        <CardBlock title="Technical Proficiency" Icon={CodeIcon} list={data.technical} />
        <CardBlock title="Languages" Icon={UsersIcon} list={data.languages} />
      </div>
    </motion.section>
  );
}

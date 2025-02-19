import Image from 'next/image';
import Framed from '@/assets/images/framed.png';
import SkillsCard from '@/components/ui/SkillsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRight } from '@fortawesome/pro-regular-svg-icons';

export default function Skills() {
  return (
    <div className="mt-16 ps-16 pb-32 bg-blue-700 min-h-[700px] text-blue-100">
      <Image src={Framed} alt="Framed" className="w-full h-auto max-w-[60%] float-end" />
      <h2 className="text-6xl font-medium text-balance max-w-4xl leading-normal pt-64">
        <span className="text-8xl">Lead.<br/> Design.<br/> Storytell.<br/></span> Elevate Your Digital Experience.
      </h2>

      <ul className="skills-card-grid gap-4 mt-16 pe-16">
        <SkillsCard
          className="skills-1"
          title="Expert leadership to transform your creative team"
          description="I transform creative teams into well-balanced groups that collaborate effectively and play to their strengths. With the right leadership and strategy, I help teams level up in efficiency, teamwork, and job satisfaction."
        />
        <SkillsCard
          className="skills-2"
          title="Content design that drives action"
          description="Storytelling is strategy. I design content that guides users seamlessly, keeping them engaged and informed. Whether refining messaging, structuring information, or crafting compelling content, I help make every word count."
        />
        <SkillsCard
          className="skills-3"
          title="Design systems for scalable, cohesive experiences"
          description="Great design systems give teams confidence and clarity. I build flexible, accessible systems that bridge design and development for a seamless workflow. Whether you need a new system, a refresh, or better adoption, I'll help you create a system that works—so you can focus on creating, not reinventing."
        />
        <div className="skills-4 bg-blue-800 p-9 flex flex-col gap-4 text-right items-end">
          <FontAwesomeIcon icon={faArrowUpRight} className="text-blue-100 text-7xl inline-block" />
          <h3 className="text-3xl font-semibold text-balance">Always building towards the future</h3>
        </div>
      </ul>
    </div>
  );
} 
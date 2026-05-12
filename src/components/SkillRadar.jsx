import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import skillsData from '../data/skills.json';

const SkillRadar = () => {
  // Flatten skills for the radar chart or pick top skills
  const radarData = [
    ...skillsData.frontend.slice(0, 2),
    ...skillsData.backend.slice(0, 1),
    ...skillsData.languages.slice(0, 1),
    ...skillsData.tools.slice(0, 2),
  ].map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="text-text-light font-heading font-bold text-sm">{payload[0].payload.subject}</p>
          <p className="text-primary font-mono text-xs mt-0.5">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-100 md:h-125 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke="rgba(0,245,255,0.10)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#00F5FF"
            fill="#00F5FF"
            fillOpacity={0.12}
            strokeWidth={1.5}
            animationBegin={500}
            animationDuration={1500}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar;

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
        <div className="glass p-3 rounded-lg border border-primary/30 shadow-xl">
          <p className="text-text-light font-bold">{`${payload[0].payload.subject}`}</p>
          <p className="text-primary">{`Level: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-100 md:h-125 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
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

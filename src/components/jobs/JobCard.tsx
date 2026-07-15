import React from 'react';

interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="glow-card p-6 md:p-8 rounded-xl border border-gray-800/60 bg-gray-900/35 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
            {job.company}
          </h3>
          <p className="text-sm font-semibold text-blue-500 tracking-wide mt-0.5 uppercase">
            {job.role}
          </p>
        </div>
        <span className="inline-flex px-3 py-1 bg-gray-950 border border-gray-800 rounded-full text-xs text-gray-400 font-medium self-start md:self-center">
          {job.period}
        </span>
      </div>

      <ul className="space-y-2.5 mb-6 text-gray-400 text-sm leading-relaxed">
        {job.description.map((bullet, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-blue-500 select-none">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {job.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-gray-950 border border-gray-800/80 hover:border-blue-500/30 rounded text-xs text-gray-400 group-hover:text-gray-200 transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

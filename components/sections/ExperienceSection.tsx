"use client";
import { TextReveal } from "../magicui/text-reveal";
import { Timeline } from "../ui/timeline";

const ExperienceSection = () => {
  const data = [
    {
      title: "Dec 2024 - Jun 2025",
      content: (
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h4 className="font-bold text-lg mb-2">
            BullForce - Software Engineer Intern
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Developed Retail Algo Distribution Platform with scalable, modular
              design
            </li>
            <li>
              Conducted UX audit for Mobile Stock Trading App, improving
              navigation
            </li>
            <li>
              Refactored Expert Recommendation System into reusable React
              components
            </li>
            <li>
              Built Blog Publishing System with real-time content creation
            </li>
            <li>Implemented structured logging with Winston + Grafana/Loki</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              React.js
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Node.js
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              PostgreSQL
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Grafana
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2023 - Dec 2024",
      content: (
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h4 className="font-bold text-lg mb-2">
            BusyFit - React/AWS Developer
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Developed SaaS application for employee benefits management</li>
            <li>
              Built backend services using AWS Lambda, DynamoDB, and API Gateway
            </li>
            <li>Automated workflows with SNS, Slack, and EventBridge</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              React.js
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Go
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              AWS
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              DynamoDB
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Sept 2023 - Dec 2023",
      content: (
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h4 className="font-bold text-lg mb-2">
            Valsco Technology - Frontend Developer
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Developed user interfaces with ReactJS and state management</li>
            <li>Collaborated with designers using Figma</li>
            <li>Improved application performance and UX</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              ReactJS
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Redux
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800">
              Figma
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2021 - May 2025",
      content: (
        <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h4 className="font-bold text-lg mb-2">
            Vellore Institute of Technology
          </h4>
          <p className="text-sm mb-2">
            Bachelor of Technology - Computer Science & Engineering
          </p>
          <p className="text-sm">CGPA: 8.41/10</p>
        </div>
      ),
    },
    {
      title: "Certifications",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h4 className="font-bold text-lg mb-2">
              AWS Certified Solutions Architect
            </h4>
            <p className="text-sm">
              Designing scalable and secure AWS architectures
            </p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h4 className="font-bold text-lg mb-2">
              AWS Certified Cloud Practitioner
            </h4>
            <p className="text-sm">
              Core AWS services, cloud security, and cost management
            </p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h4 className="font-bold text-lg mb-2">
              React - The Complete Guide
            </h4>
            <p className="text-sm">State management and API integration</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        title="My Professional Journey"
        description="Detailed timeline of my education, work experience, and certifications"
      />
    </div>
  );
};

export default ExperienceSection;

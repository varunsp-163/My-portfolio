import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        A Little Bit About Me
      </h1>
      <p className="text-xl mb-4 text-center">
        Hello, I'm Varun S P — a passionate Full Stack Developer, AWS Cloud
        Enthusiast, and Master's student in Cybersecurity at Macquarie
        University, Sydney.
      </p>
      <p className="text-xl mb-6 text-center">
        I hold a Bachelor's in Computer Science and Engineering from VIT Vellore
        with a CGPA of 8.41. I'm driven by curiosity and a deep interest in
        scalable systems, cloud infrastructure, and cybersecurity.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Skills and Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <p>C++, GoLang, JavaScript, Java, SQL</p>
        </div>
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          <p>ReactJS, NextJS, Redux, Tailwind CSS, ChakraUI, MUI, HTML, CSS</p>
        </div>
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Backend & DevOps</h3>
          <p>AWS, NodeJS, Postgres, DynamoDB, MongoDB, Docker, Kubernetes</p>
        </div>
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Tools</h3>
          <p>GitHub, Postman, Vercel, Firebase, IaC, Jira, Scrum, Grafana</p>
        </div>
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            <a
              href="https://www.credly.com/badges/59a4d4b8-2872-47fe-8324-cd57021d38ae"
              target="_blank"
              className="text-blue-400 hover:text-blue-600"
            >
              AWS Certified Cloud Practitioner
            </a>
          </h3>
          <p>
            Foundational expertise in cloud implementation, cost management, and
            security within AWS.
          </p>
        </div>
        <div className="bg-gray-800 border border-blue-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            <a
              href="https://www.credly.com/badges/d7f3a630-f66e-47dd-bdf1-193014bfcc70"
              target="_blank"
              className="text-blue-400 hover:text-blue-600"
            >
              AWS Solutions Architect – Associate
            </a>
          </h3>
          <p>
            Skilled in designing secure, scalable, and fault-tolerant systems
            using AWS architecture best practices.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-gray-800 border border-green-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            BullForce, Bengaluru – Dec 2024 - Present
          </h3>
          <p className="italic">Software Engineer Intern</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Refactored the Expert Recommendation System, improving
              maintainability and reducing onboarding time by 30%.
            </li>
            <li>
              Built a real-time Blog Publishing System, cutting manual effort by
              40%.
            </li>
            <li>
              Engineered an investment engine managing ₹3M+ portfolios with
              enhanced ROI tracking.
            </li>
            <li>
              Fixed 12+ critical transactional bugs and integrated structured
              logging using Winston & Grafana.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> React, Node.js, PostgreSQL, Sequelize, MUI,
            Grafana, GitLab
          </p>
        </div>

        <div className="bg-gray-800 border border-green-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            <a
              href="https://drive.google.com/file/d/1pjiCCAn-4YVxyk4WwuS-ByibYQ2UGShX/view?usp=sharing"
              target="_blank"
              className="underline underline-offset-8"
            >
              BusyFit
            </a>
            , Hyderabad (Remote) – Oct 2023 - Mar 2024
          </h3>
          <p className="italic">React/AWS Developer</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Developed scalable frontend & backend modules for a SaaS platform
              using React and AWS.
            </li>
            <li>
              Implemented secure backend flows with Lambda, API Gateway, and
              DynamoDB.
            </li>
            <li>
              Integrated Slack and SNS for automated system notifications and
              alerts.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> React, GoLang, AWS (Lambda, S3,
            EventBridge), TipTap
          </p>
        </div>

        <div className="bg-gray-800 border border-green-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            <a
              className="underline underline-offset-8"
              href="https://drive.google.com/file/d/1bEhQV7DMqXW9V-rtJnBbWKTUP1aYbB2e/view?usp=sharing"
              target="_blank"
            >
              Valsco Technology Pvt. Ltd
            </a>
            , Delhi (Remote) - Sept 2023 - Dec 2023
          </h3>
          <p className="italic">Frontend Developer</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Built responsive interfaces in React, collaborated with design
              teams using Figma, and mentored juniors.
            </li>
            <li>
              Improved UI responsiveness and optimized React performance with
              hooks and state management.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> ReactJS, Tailwind CSS, Redux, Vercel
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Projects</h2>
      <div className="space-y-6">
        <div className="bg-gray-800 border border-red-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            Real-Time Human Detection in Disaster Scenarios
          </h3>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Used YOLOv8 and PP-YOLOe in a cascading model to boost accuracy to
              90.2% on UAV imagery.
            </li>
            <li>
              Fused RGB, thermal, and multispectral data to improve detection
              robustness.
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-red-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            Lung Cancer Detection Using Deep Learning
          </h3>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Built a hybrid CNN using VGG16 + U-Net++ achieving 96% accuracy in
              multi-class classification.
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-red-600 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            RAG-Email |{" "}
            <a
              className="underline"
              href="https://github.com/varunsp-163/Rag-Email"
            >
              Code
            </a>
          </h3>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Built an AI email client with Next.js, Pinecone for semantic
              search, NeonDB, and Clerk auth.
            </li>
            <li>
              Fully deployed on AWS with responsive UI using Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;

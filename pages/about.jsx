import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="text-center w-full">
      <h1 className="text-3xl font-bold mb-4">A Little Bit About Me</h1>
      <p className="text-lg">
        Hello, I'm Varun S P. I'm a Front-end web developer/AWS cloud developer
        and Tech Enthusiast from Bangalore, Karnataka.
      </p>

      <p className="text-lg mt-4">
        I am pursuing my graduation in Computer Science and Engineering from VIT
        Vellore.
      </p>

      <h2 className="text-2xl mt-6 mb-2">Skills and Certifications</h2>
      <div className="gap-3">
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Languages: C/C++, Java, Python, JavaScript, SQL
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Technologies & Tools: AWS, EC2, DynamoDB, S3, SQS, Lambda,
          EventBridge, ReactJS, Node.js, Cognito, AWS Amplify, Tailwind CSS,
          Bootstrap, Git, Github, Material UI, Chakra UI, Firebase, Next.js,
          Redux, Figma, Vercel, MongoDB, Postman
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          <a
            className="underline hover:underline-offset-4"
            href={
              "https://www.credly.com/badges/59a4d4b8-2872-47fe-8324-cd57021d38ae"
            }
          >
            AWS Certified Cloud Practitioner
          </a>
          : Demonstrated foundational knowledge of AWS cloud services and
          solutions, ensuring effective cloud implementation and management.
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          <a
            className="underline hover:underline-offset-4"
            href={
              "https://www.credly.com/badges/d7f3a630-f66e-47dd-bdf1-193014bfcc70"
            }
          >
            AWS Certified Solutions Architect – Associate
          </a>
          : Proficient in designing and deploying scalable, highly available,
          and fault-tolerant systems on AWS, leveraging best practices for
          secure and robust cloud architecture.
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          <a
            className="underline hover:underline-offset-4"
            href={
              "https://drive.google.com/file/d/1R5DpUpF0kUrePPaXS64oR79fBr2SKUcs/view?usp=sharing"
            }
          >
            React
          </a>{" "}
          - The Complete Guide
        </div>
      </div>

      <h2 className="text-2xl mt-6 mb-2">Work Experience</h2>
      <div className="gap-3">
        <div className="border-2 border-green-500 text-white py-2 px-4 m-2 rounded">
          BusyFit, Hyderabad (Remote) &ndash; Oct 2023 - Present
          <br />
          React/AWS Developer
          <ul className="list-disc list-inside">
            <li>
              Implemented various AWS services and Go-lang features, including
              deploying infrastructure using IaC, managing user credentials with
              Cognito, and utilizing DynamoDB for data storage.
            </li>
            <li>
              Worked with EventBridge for event management and monitored logs
              via CloudWatch.
            </li>
            <li>
              Leveraged S3 buckets to create signed URLs using Go-lang and used
              AWS API Gateway.
            </li>
            <li>
              Developed a POC for implementing the RAG model with Gemini AI
              using AWS Bedrock, creating an event to sync with the knowledge
              base and extract required fields from a document in S3.
            </li>
            <li>
              Optimized cloud architecture for performance and cost efficiency.
            </li>
          </ul>
          Skills: React.js, AWS, DynamoDB, S3, SQS, Lambda, EventBridge,
          CloudWatch, API Gateway, HuggingFace, Python, JavaScript, OpenAI,
          Gemini AI
        </div>
        <div className="border-2 border-green-500 text-white py-2 px-4 m-2 rounded">
          Valsco Technology Pvt. Ltd, Delhi &ndash; Sept 2023 - Dec 2023
          <br />
          Frontend Developer - Remote (Certificate)
          <ul className="list-disc list-inside">
            <li>
              Developed and maintained user interfaces using ReactJS, focusing
              on state management with hooks.
            </li>
            <li>
              Collaborated with designers using Figma to ensure precise
              implementation of design specifications.
            </li>
            <li>
              Enhanced application performance and user experience through
              efficient state management and responsive design practices.
            </li>
            <li>
              Implemented dynamic data fetching and state updates to improve
              user interactions.
            </li>
            <li>
              Conducted code reviews and provided mentorship to junior
              developers.
            </li>
          </ul>
          Skills: ReactJS, HTML, CSS, Responsive Designs, Figma, Vercel
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

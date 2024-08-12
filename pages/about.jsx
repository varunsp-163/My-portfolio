import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        A Little Bit About Me
      </h1>
      <p className="text-xl mb-4 text-center">
        Hello, I'm Varun S P. I'm a Front-end web developer/AWS cloud developer
        and Tech Enthusiast from Bangalore, Karnataka.
      </p>
      <p className="text-xl mb-6 text-center">
        I am pursuing my graduation in Computer Science and Engineering from VIT
        Vellore.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Skills and Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-blue-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <strong className="text-lg">Languages:</strong> C/C++, Java, Python,
          JavaScript, SQL
        </div>
        <div className="bg-gray-800 border border-blue-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <strong className="text-lg">Technologies & Tools:</strong> AWS, EC2,
          DynamoDB, S3, SQS, Lambda, EventBridge, ReactJS, Node.js, Cognito, AWS
          Amplify, Tailwind CSS, Bootstrap, Git, Github, Material UI, Chakra UI,
          Firebase, Next.js, Redux, Figma, Vercel, MongoDB, Postman
        </div>
        <div className="bg-gray-800 border border-blue-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <a
            className="block text-blue-400 hover:text-blue-600 transition duration-300"
            href="https://www.credly.com/badges/59a4d4b8-2872-47fe-8324-cd57021d38ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Cloud Practitioner
          </a>
          <p className="mt-2">
            Demonstrated foundational knowledge of AWS cloud services and
            solutions, ensuring effective cloud implementation and management.
          </p>
        </div>
        <div className="bg-gray-800 border border-blue-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <a
            className="block text-blue-400 hover:text-blue-600 transition duration-300"
            href="https://www.credly.com/badges/d7f3a630-f66e-47dd-bdf1-193014bfcc70"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Solutions Architect – Associate
          </a>
          <p className="mt-2">
            Proficient in designing and deploying scalable, highly available,
            and fault-tolerant systems on AWS, leveraging best practices for
            secure and robust cloud architecture.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-gray-800 border border-green-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            BusyFit, Hyderabad (Remote) &ndash; Apr 2024 - Present
          </h3>
          <p className="italic">React/AWS Developer</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Made a POC for implementing the RAG model with Gemini AI using AWS
              Bedrock and creating an event to sync with the knowledge base and
              extract required fields from a document in S3.
            </li>
            <li>
              Extracted required fields from uploaded text files using AWS
              Bedrock for efficient processing.
            </li>
            <li>
              Integrated useFetch hook for optimized API interactions, improving
              code efficiency and maintainability. Designed and developed
              responsive user interfaces (UI) ensuring cross-device
              compatibility.
            </li>
            <li>
              Managed application state using Redux for centralized and
              predictable state management. Implemented modern React hooks for
              streamlined component logic. Deployed frontend applications using
              AWS Amplify.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> React.js, AWS, DynamoDB, S3, SQS, Lambda,
            EventBridge, CloudWatch, API Gateway, HuggingFace, Python,
            JavaScript, OpenAI, Gemini AI
          </p>
        </div>
        <div className="bg-gray-800 border border-green-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            <a
              href="https://drive.google.com/file/d/1pjiCCAn-4YVxyk4WwuS-ByibYQ2UGShX/view?usp=sharing"
              target="_blank"
              className="underline underline-offset-8"
            >
              BusyFit
            </a>
            , Hyderabad (Remote) &ndash; Oct 2023 - Mar 2024
          </h3>
          <p className="italic">React/AWS Developer</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Implemented AWS services using Infrastructure-as-Code (IAC) and
              created IAM roles for secure access management. Utilized AWS SDK
              and OpenAPI with DynamoDB clients for efficient data operations.
            </li>
            <li>
              Leveraged DynamoDB for scalable and high-performance data storage.
              Developed serverless functions using AWS Lambda in GoLang for
              seamless API operations via API Gateway.
            </li>
            <li>
              Managed event-driven architecture using EventBridge for
              streamlined event processing. Monitored application logs
              effectively using CloudWatch for enhanced troubleshooting and
              performance monitoring.
            </li>
            <li>
              Implemented file storage solutions using S3 buckets. Ensured
              secure API endpoints and user authentication with API Gateway and
              Cognito.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> React.js, AWS, DynamoDB, S3, Lambda,
            EventBridge, CloudWatch, API Gateway, Python, Gemini AI
          </p>
        </div>
        <div className="bg-gray-800 border border-green-600 text-gray-200 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">
            <a
              className="underline underline-offset-8"
              href="https://drive.google.com/file/d/1bEhQV7DMqXW9V-rtJnBbWKTUP1aYbB2e/view?usp=sharing"
              target="_blank"
            >
              Valsco Technology Pvt. Ltd
            </a>
            , Delhi (Remote) &ndash; Sept 2023 - Dec 2023
          </h3>
          <p className="italic">Frontend Developer</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>
              Developed and maintained user interfaces using ReactJS, focusing
              on state management with hooks. Collaborated with designers using
              Figma to ensure precise implementation of design specifications.
            </li>
            <li>
              Enhanced application performance and user experience through
              efficient state management and responsive design practices.
            </li>
            <li>
              Implemented dynamic data fetching and state updates to improve
              user interactions. Conducted code reviews and provided mentorship
              to junior developers.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Skills:</strong> ReactJS, HTML, CSS, Responsive Designs,
            Figma, Vercel
          </p>
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

import React from "react";

const AboutPage = () => {
  return (
    <div className=" w-auto h-auto text-center">
      <h1 className="text-3xl font-bold mb-4">A Little Bit About Me</h1>
      <p className="text-lg">
        Hello, I'm Varun S P. I'm a Front-end web developer and Tech Enthusiast
        from Bangalore, Karnataka.
      </p>

      <p className="text-lg mt-4">
        I am pursuing my graduation in Computer Science and Engineering from VIT
        Vellore.
      </p>

      <h2 className="text-2xl mt-6 mb-2">Skills and Expertise</h2>
      <div className="gap-3">
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Languages: C, C++, Python, Java, JavaScript
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Web Development: HTML, CSS, JavaScript, React.js, Tailwind CSS,
          Bootstrap, Material UI, Chakra UI
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Database: MySQL, MongoDB, Mongoose, PostgreSQL
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Version Control and Collaboration: Git, GitHub, Jira, Confluence,
          Bitbucket
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Cloud Services: Firebase, Vercel, AWS (In Progress: AWS Cloud
          Practitioner Course)
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Other Tools and Technologies: Redux, Figma, Next.js, Google OAuth API,
          Postman, Go
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          Courses: OOPs, Computer Programming: Java, Computer Programming:
          Python, Digital System Design, Data Structures and Algorithms (DSA),
          Computer Architecture and Organisation, Operating Systems (OS),
          Database Management Systems (DBMS), Computer Networks, Compiler
          Design.
        </div>
        <div className="border-2 border-blue-500 text-white py-2 px-4 m-2 rounded">
          In Progress: AWS Cloud Practitioner Course (AWS Academy)
        </div>
      </div>

      <h2 className="text-2xl mt-6 mb-2">
        I'm open for freelancing and internships/contracts/jobs
      </h2>
    </div>

  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;

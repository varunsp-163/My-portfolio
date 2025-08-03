import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-800 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: July 29, 2025
      </p>

      <p className="mb-4">
        This Privacy Policy explains how the{" "}
        <strong>Timetable Extractor Chrome Extension</strong>
        (“we”, “our”, or “the extension”) handles your data.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          1. Data Collection
        </h2>
        <p>
          The extension does <strong>not collect, store, or transmit</strong>{" "}
          any personal data. All timetable data is processed entirely in your
          browser and never leaves your local environment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          2. Permissions
        </h2>
        <p className="mb-2">
          We request the following Chrome permissions strictly to enable core
          functionality:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            <code className="bg-gray-100 px-1 rounded">activeTab</code>: To
            access and read the current timetable page.
          </li>
          <li>
            <code className="bg-gray-100 px-1 rounded">scripting</code>: To
            inject scripts for extracting data.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          3. No Third-Party Sharing
        </h2>
        <p>
          We do <strong>not share</strong> or transmit any user data to external
          services or third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          4. Analytics
        </h2>
        <p>
          This extension does not use Google Analytics or any third-party
          tracking tools.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          5. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy occasionally. All changes will be
          reflected on this page with the updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">6. Contact</h2>
        <p>
          For questions or concerns, please email:
          <br />
          <a
            href="mailto:spvarun47g@gmail.com"
            className="text-blue-500 underline"
          >
            spvarun47@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

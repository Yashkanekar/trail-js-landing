import React, { useState } from "react";
import { Walkthrough, useWalkthrough } from "trail-js";
import {
  Play,
  Github,
  Download,
  CheckCircle,
  Zap,
  Target,
  Settings,
} from "lucide-react";
import CodeBlock from "./CodeBlock";
import { walkthroughSteps } from "../data/walkthroughSteps";
import { stepCodeExamples } from "../data/stepCodeExamples";

const LandingPage: React.FC = () => {
  const { isActive, goToStep, currentStepIndex } = useWalkthrough();
  const [activeTab, setActiveTab] = useState("installation");

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "DOM Element Targeting",
      description: "Step-by-step guides with precise element targeting",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Conditional Progression",
      description: "canGoNext validations for smart user flows",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Async Hooks",
      description: "beforeNext hooks for side effects and API calls",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Highly Customizable",
      description: "Custom content, styling, and navigation controls",
    },
  ];

  const startDemo = () => {
    goToStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧭</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">trail-js</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Yashkanekar/trail-js"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.npmjs.com/package/trail-js"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Download className="w-5 h-5" />
              <span>npm</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center" id="hero">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          React Walkthrough Library
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A lightweight, highly-customizable, and feature-rich walkthrough
          library for React apps. Guide users through product features with
          interactive steps and tooltips.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <button
            id="start-demo-btn"
            onClick={startDemo}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Try Interactive Demo</span>
          </button>
        </div>

        {/* Installation */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
          id="installation-section"
        >
          <CodeBlock
            language="bash"
            code="npm install trail-js"
            title="Quick Installation"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16" id="features-section">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            See It In Action
          </h2>

          {/* Interactive Demo Area */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo UI */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Interactive Demo
              </h3>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <button
                  id="submit-button"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Form
                </button>
              </div>

              {!isActive && (
                <button
                  onClick={startDemo}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Walkthrough</span>
                </button>
              )}
            </div>

            {/* Code Display */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  Current Step Code
                </h3>
                {isActive && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Step {currentStepIndex + 1} of {walkthroughSteps.length}
                  </span>
                )}
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                <CodeBlock
                  language="javascript"
                  code={
                    isActive
                      ? stepCodeExamples[currentStepIndex]
                      : stepCodeExamples[0]
                  }
                  title={
                    isActive
                      ? `Step ${currentStepIndex + 1} Configuration`
                      : "Example Step Configuration"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="container mx-auto px-6 py-16" id="usage-examples">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Usage Examples
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {["installation", "basic", "validation", "custom"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                        activeTab === tab
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab === "installation"
                        ? "Setup"
                        : tab === "basic"
                        ? "Basic Usage"
                        : tab === "validation"
                        ? "With Validation"
                        : "Custom Navigation"}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "installation" && (
                <CodeBlock
                  language="typescript"
                  code={`import { WalkthroughProvider, Walkthrough, useWalkthrough } from "trail-js";

const App = () => (
  <WalkthroughProvider steps={steps}>
    <YourApp />
    <Walkthrough />
  </WalkthroughProvider>
);`}
                  title="Basic Setup"
                />
              )}

              {activeTab === "basic" && (
                <CodeBlock
                  language="typescript"
                  code={`const steps = [
  {
    selector: "#start-button",
    content: "Click this button to get started!",
    placement: "bottom",
  },
  {
    selector: "#name-input",
    content: "Enter your name here",
    placement: "top",
  },
];`}
                  title="Basic Steps Configuration"
                />
              )}

              {activeTab === "validation" && (
                <CodeBlock
                  language="typescript"
                  code={`{
  selector: "#email-input",
  content: "Please enter a valid email",
  canGoNext: {
    validate: () => {
      const email = document.getElementById("email-input")?.value || "";
      return /\\S+@\\S+\\.\\S+/.test(email);
    },
    errorString: "Valid email required!",
  },
}`}
                  title="Step with Validation"
                />
              )}

              {activeTab === "custom" && (
                <CodeBlock
                  language="typescript"
                  code={`{
  selector: "#submit-button",
  content: "Ready to submit?",
  customNavigation: ({ next, back, skip }) => (
    <div className="flex space-x-2">
      <button onClick={back}>← Previous</button>
      <button onClick={next}>Continue →</button>
      <button onClick={skip}>Skip Tour</button>
    </div>
  ),
}`}
                  title="Custom Navigation"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🧭</span>
            <span className="text-2xl font-bold">trail-js</span>
          </div>
          <p className="text-gray-400 mb-6">
            Made with ❤️ for the React community
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Yashkanekar/trail-js"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/trail-js"
              className="text-gray-400 hover:text-white"
            >
              npm Package
            </a>
          </div>
        </div>
      </footer>

      {/* Walkthrough Component */}
      <Walkthrough />
    </div>
  );
};

export default LandingPage;

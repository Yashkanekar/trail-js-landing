import React from "react";
import { Code } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-colors"
          >
            Copy
          </button>
        </div>
      )}
      <pre
        className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm ${
          title ? "rounded-b-lg" : "rounded-lg"
        }`}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

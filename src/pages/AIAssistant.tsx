import React from "react";
import AIMessageBar from "@/components/ui/ai-assistant";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIAssistantPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-4 flex flex-col">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-indigo-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Smart AI Assistant
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Interact with an intelligent assistant that understands your queries and provides instant responses.
          </p>
        </div>
      </div>

      {/* AI Assistant Component */}
      <div className="flex-1 flex items-center justify-center">
        <AIMessageBar />
      </div>
    </div>
  );
};

export default AIAssistantPage;

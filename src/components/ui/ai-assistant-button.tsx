import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AIAssistantButtonProps {
  className?: string;
}

export function AIAssistantButton({ className }: AIAssistantButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ai-assistant");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 backdrop-blur-sm border rounded-full text-white transition-all duration-200 bg-white/10 border-white/20 hover:bg-white/20 group",
        className
      )}
    >
      <div className="relative">
        <MessageCircle className="h-5 w-5" />
        <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="hidden sm:inline text-sm">
        AI Assistant
      </span>
    </button>
  );
}

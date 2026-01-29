"use client";

import {
  Button,
  Loading,
  Skeleton,
  Progress,
} from "@/components";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export default function RootPage() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
  };

  const showFullScreenLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12 max-w-4xl mx-auto">
      {isLoading && (
        <Loading 
          fullScreen 
          size={48} 
          description="잠시만 기다려주세요..." 
        />
      )}

      <header className="space-y-2 pb-8 border-b border-gray-200">
        <h1 className="text-title-1 font-bold text-gray-900">Feedback Components Showcase</h1>
        <p className="text-gray-500">디자인 시스템의 피드백 요소들을 하나씩 점검합니다.</p>
      </header>

      {/* 1. Loading */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">1. Loading</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border">
            <Loading size={16} />
            <span className="text-caption-2 text-gray-400">Small (16px)</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border">
            <Loading size={24} />
            <span className="text-caption-2 text-gray-400">Default (24px)</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border">
            <Loading size={40} description="Loading..." />
            <span className="text-caption-2 text-gray-400">With Text</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border">
            <Button
              variant="outline"
              onClick={showFullScreenLoading}
            >
              Show Fullscreen
            </Button>
            <span className="text-caption-2 text-gray-400">Fullscreen (Overlay)</span>
          </div>
        </div>
      </section>

      {/* 2. Skeleton */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">2. Skeleton</h2>
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        
        <div className="space-y-2 p-4 bg-white rounded-lg border">
          <Skeleton className="h-4 w-[100%]" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </section>

      {/* 3. Sonner (Toast) */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">3. Sonner (Toast)</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })}
          >
            Default Toast
          </Button>
          <Button
            variant="default"
            onClick={() => toast.success("Successfully saved!")}
          >
            Success
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("Check your connection.")}
          >
            Warning
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.info("New update available.")}
          >
            Info
          </Button>
        </div>
      </section>

      {/* 4. Progress */}
      <section className="space-y-4">
        <h2 className="text-title-3 font-bold text-gray-900">4. Progress</h2>
        <div className="space-y-6 p-6 bg-white rounded-lg border">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Dark Gray (Default)</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          
          <Button onClick={startProgress}>
            Start Progress
          </Button>
        </div>
      </section>
    </div>
  );
}

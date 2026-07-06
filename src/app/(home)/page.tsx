"use client"
import { useEffect } from "react";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { SuperhumanWidget } from "./components/SuperhumanWidget";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SpotlightPreview />
      <SuperhumanWidget />
    </div>
  );
}

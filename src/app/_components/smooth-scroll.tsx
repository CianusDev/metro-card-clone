"use client";
import * as React from "react";

export const SmoothScroll: React.FC = () => {
  React.useEffect(() => {
    // Ajoute un style global pour le scroll smooth
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      // Nettoie le style lors du démontage
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return null;
};

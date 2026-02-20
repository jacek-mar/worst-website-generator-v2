"use client";
import { useEffect } from 'react';

export function TabTitleChanger() {
  useEffect(() => {
    const original = document.title;
    const messages = [
      "WAIT",
      "COME BACK",
      "ARE U THERE?",
      "👀 HEY",
      "STILL HERE?",
      "PLEASE",
      "DON'T LEAVE",
      "NO REALLY",
      original,
    ];
    let i = 0;
    const id = setInterval(() => {
      document.title = messages[i % messages.length]!;
      i++;
    }, 2500);
    return () => {
      clearInterval(id);
      document.title = original;
    };
  }, []);

  return null;
}

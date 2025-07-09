"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Wrap the async logic in a regular function
    const initScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const overlay = document.getElementById('loading-overlay');
            if (overlay) {
                overlay.classList.add('hidden');
                overlay.addEventListener('transitionend', () => {
                overlay.remove();
          });
            }
        const ScrollReveal = (await import("scrollreveal")).default;
        
        const sr = ScrollReveal({
          origin: "bottom",
          distance: "30px",
          duration: 1000,
          delay: 50,
          
        });
        sr.reveal(`.menu_item, .menulogo`);
        sr.reveal(`.main_sec_title, .list-item, .top_button, .posts-sec, .main_sec_button, .sec-title`, { duration: 1500, reset: true });

      }


    };

    initScrollReveal();
  }, []); // Empty dependency array means this runs once on mount
}
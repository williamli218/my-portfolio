// hooks/useActiveSection.ts
"use client"

import { useEffect, useState, useCallback } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

    const updateActiveSection = useCallback(() => {
        let currentId = sectionIds[0] ?? "";

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();

            // section counts as "current" once its top has scrolled past
            // the offset line (e.g. just below the sticky nav)
            if (rect.top <= offset) {
                currentId = id;
            }
        }

        setActiveId(currentId);
    }, [sectionIds, offset]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        updateActiveSection(); // run once on mount
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [updateActiveSection]);

    return activeId;
}
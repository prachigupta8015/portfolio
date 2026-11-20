"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Contact section providing communication channels, availability status badge,
 * direct email link, resume download button, and footer copyright.
 */
export function Contact() {
  const { version } = useVersion();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle"
  );

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(version.email);
      ok = true;
    } catch {
      // Fallback for browsers/iframes that block the async Clipboard API.
      const field = document.createElement("textarea");
      field.value = version.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      field.remove();
    }
    setCopyState(ok ? "copied" : "failed");
    setTimeout(() => setCopyState("idle"), 2500);
  };

  return (
    <Section id={SECTION_IDS.CONTACT} aria-label="Contact" className="mb-16">
      <SectionHeading>Let&apos;s talk</SectionHeading>

      {/* Availability Status Badge */}
      {version.availability && (
        <div className="mb-6">
          <AvailabilityBadge
            text={version.availability.text}
            open={version.availability.open}
          />
        </div>
      )}

      <p className="text-muted mb-8 max-w-[55ch] text-[1.05rem] leading-relaxed">
        {version.cta}
      </p>

      {/* Prominent CTA email link */}
      <div className="mb-8">
        <a
          href={`mailto:${version.email}`}
          className="text-cta text-[clamp(1.6rem,4.5vw,3rem)] text-fg border-line hover:border-accent hover:text-accent inline-block border-b pb-1 font-semibold break-all transition-colors duration-300"
        >
          {version.email}
        </a>
      </div>

      {/* Secondary actions: copy email, résumé, socials */}
      <div className="mb-20 flex flex-wrap items-center gap-3">
        <Button variant="primary" onClick={copyEmail}>
          <FontAwesomeIcon
            icon={copyState === "copied" ? faCheck : faCopy}
            className="mr-2 h-3.5 w-3.5"
          />
          <span aria-live="polite">
            {copyState === "copied"
              ? "Email copied"
              : copyState === "failed"
                ? "Couldn't copy, select the email above"
                : "Copy email"}
          </span>
        </Button>
        {version.resumeUrl && version.resumeUrl !== "#" && (
          <Button
            variant="outline"
            href={version.resumeUrl}
            download={version.resumeFileName || true}
          >
            <FontAwesomeIcon icon={faArrowDown} className="mr-2 h-3 w-3" />
            Download résumé
          </Button>
        )}
        {version.socials?.linkedin && (
          <Button variant="outline" href={version.socials.linkedin} external>
            <FontAwesomeIcon icon={faLinkedinIn} className="mr-2 h-3.5 w-3.5" />
            LinkedIn
          </Button>
        )}
        {version.socials?.github && (
          <Button variant="outline" href={version.socials.github} external>
            <FontAwesomeIcon icon={faGithub} className="mr-2 h-3.5 w-3.5" />
            GitHub
          </Button>
        )}
      </div>

      {/* Semantic footer note */}
      <footer className="border-line text-muted flex flex-col items-baseline justify-between gap-4 border-t pt-12 text-[0.85rem] sm:flex-row">
        <span>
          Designed &amp; built with Next.js, Tailwind CSS &amp; Framer Motion.
        </span>
        <span>
          &copy; {version.name}.
        </span>
      </footer>
    </Section>
  );
}

import { VERSIONS } from "@/data/versions";
import { DEFAULT_VERSION_KEY } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

/**
 * schema.org Person structured data, built from the default portfolio version
 * so search engines get the same name, role and links shown on the page.
 */
export function PersonJsonLd() {
  const v = VERSIONS[DEFAULT_VERSION_KEY];
  const current = v.experience?.[0];
  const school = v.education?.[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: v.name,
    jobTitle: v.role,
    url: SITE_URL,
    image: v.photo ? `${SITE_URL}${v.photo}` : undefined,
    email: v.email ? `mailto:${v.email}` : undefined,
    address: v.location
      ? { "@type": "PostalAddress", addressLocality: v.location }
      : undefined,
    sameAs: [v.socials?.github, v.socials?.linkedin].filter(Boolean),
    knowsAbout: v.stack,
    worksFor: current
      ? { "@type": "Organization", name: current.org, url: current.companyUrl }
      : undefined,
    alumniOf: school
      ? { "@type": "CollegeOrUniversity", name: school.org }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

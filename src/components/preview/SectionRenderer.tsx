"use client";
import type { Generation, GeneratedSection } from '@/lib/chaos';
import { getSchemeById } from '@/lib/color-schemes';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { FormSection } from './sections/FormSection';
import { PricingSection } from './sections/PricingSection';
import { GallerySection } from './sections/GallerySection';
import { VideoSection } from './sections/VideoSection';
import { MapSection } from './sections/MapSection';
import { FooterSection } from './sections/FooterSection';
import { StatsSection } from './bonus-sections/StatsSection';
import { TeamSection } from './bonus-sections/TeamSection';
import { ComparisonSection } from './bonus-sections/ComparisonSection';
import { BlogPreviewSection } from './bonus-sections/BlogPreviewSection';
import { TimelineSection } from './bonus-sections/TimelineSection';

interface Props {
  section: GeneratedSection;
  generation: Generation;
}

export function SectionRenderer({ section, generation }: Props) {
  const colorScheme = getSchemeById(generation.settings.colorSchemeId);
  switch (section.type) {
    case 'hero':
      return <HeroSection section={section} generation={generation} colorScheme={colorScheme} />;
    case 'features':
      return <FeaturesSection section={section} />;
    case 'testimonials':
      return <TestimonialsSection section={section} />;
    case 'faq':
      return <FaqSection section={section} />;
    case 'form':
      return <FormSection section={section} />;
    case 'pricing':
      return <PricingSection section={section} />;
    case 'gallery':
      return <GallerySection section={section} />;
    case 'video':
      return <VideoSection section={section} />;
    case 'map':
      return <MapSection section={section} />;
    case 'footer':
      return <FooterSection section={section} generation={generation} />;
    case 'stats':
      return <StatsSection section={section} />;
    case 'team':
      return <TeamSection section={section} />;
    case 'comparison':
      return <ComparisonSection section={section} />;
    case 'blog-preview':
      return <BlogPreviewSection section={section} />;
    case 'timeline':
      return <TimelineSection section={section} />;
    default: {
      const unknownType = (section as { type: string }).type;
      return (
        <section
          data-type={unknownType}
          style={{
            padding: '4rem 2rem',
            borderBottom: '2px solid var(--border)',
            background: 'var(--bg)',
          }}
        >
          <h2 style={{ color: 'var(--a1)', fontFamily: 'var(--font-heading)' }}>
            [{unknownType.toUpperCase()}] — {section.headline}
          </h2>
          <p style={{ color: 'var(--text)', opacity: 0.7 }}>
            {unknownType} section — items: {section.itemCount}
          </p>
        </section>
      );
    }
  }
}

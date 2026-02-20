export type ContentPools = {
  hero: {
    headlines: string[];
    subheadlines: string[];
    cta_primary: string[];
    cta_secondary: string[];
    badge_texts: string[];
  };
  features: {
    section_titles: string[];
    card_headlines: string[];
    card_bodies: string[];
    card_icons_labels: string[];
  };
  testimonials: {
    section_titles: string[];
    quotes: string[];
    names: string[];
    titles: string[];
    companies: string[];
    star_captions: string[];
  };
  about: { section_titles: string[]; paragraphs: string[] };
  stats: { labels: string[]; values: string[]; captions: string[] };
  faq: { section_titles: string[]; questions: string[]; answers: string[] };
  form: {
    section_titles: string[];
    field_labels: string[];
    placeholders: string[];
    submit_texts: string[];
    success_messages: string[];
    error_messages: string[];
  };
  footer: { taglines: string[]; copyright_suffixes: string[]; legal_micro_text: string[] };
  nav: { link_labels: string[] };
  trust_bar: { section_titles: string[]; logo_names: string[] };
  cta_banner: { headlines: string[]; subtext: string[]; cta_texts: string[] };
};

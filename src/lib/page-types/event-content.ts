import type { ContentPools } from "./content-pools";

export const eventContent: ContentPools = {
  hero: {
    headlines: [
      "[EVENT_NAME] [YEAR] — The [SUPERLATIVE] Event In [FIELD]",
      "Join [NUMBER]+ [ATTENDEE_TYPE]s For [DAYS] Days Of [VAGUE_PROMISE]",
      "The Conference That [PROMISES] — [DATE_RANGE]",
      "[EVENT_NAME]: Where [INDUSTRY] Meets [OTHER_INDUSTRY] (On Purpose)",
      "Don't Miss [EVENT] [YEAR] — [PERCENT]% Of Last Year's Attendees Said They'd Return",
    ],
    subheadlines: [
      "Tickets selling fast. Number sold: undisclosed. Remaining: also undisclosed. Act fast.",
      "Early bird pricing ends [DATE]. Early bird has been endangered for 3 months.",
      "[CITY] Convention Center. [DATE]. Arrive early. Parking: figure it out.",
      "Featuring [NUMBER]+ speakers. Most confirmed. All announced.",
      "Virtual option available for those who prefer the experience of being physically absent.",
    ],
    cta_primary: ["Get Tickets — From $[PRICE]", "Register Now (Limited Spots)", "Buy Tickets Before Price Increases", "Claim Your Seat", "Register — Early Bird (Possibly)"],
    cta_secondary: ["View Full Schedule", "See Speakers", "Request Group Rate", "Watch Recap (Last Year)"],
    badge_texts: ["🎟️ SOLD OUT LAST YEAR", "⚡ ONLY [N] LEFT", "🏆 [N]TH ANNUAL", "🎤 [N]+ SPEAKERS", "📅 [DATE]"],
  },
  features: {
    section_titles: ["What To Expect", "The [EVENT] Experience", "Why Attend This Year"],
    card_headlines: ["World-Class Speakers", "Networking Opportunities", "Workshops & Sessions", "Expo Hall", "VIP Experience", "Virtual Attendance"],
    card_bodies: [
      "40+ speakers from across the industry. Several are household names in their households.",
      "Network with peers, mentors, and people you'll connect with on LinkedIn and never speak to again.",
      "Interactive workshops for all experience levels. Bring pen, notebook, and open mind (pen provided).",
      "200+ exhibitors showcasing the latest and also some things from a few years ago.",
      "VIP access includes priority seating, priority lunch, and a tote bag that says VIP.",
      "Virtual attendees receive access to recorded sessions, 2-5 days after the event.",
    ],
    card_icons_labels: ["🎤 Speakers: Confirmed (Mostly)", "🤝 Networking: Ample Opportunity", "📚 Content: Substantial"],
  },
  testimonials: {
    section_titles: ["What Past Attendees Say", "Testimonials From [LAST_YEAR] Attendees"],
    quotes: [
      "Best [EVENT] I've attended this year. Possibly top 3 ever. Definitely top 5.",
      "I met my current business partner here. We're still in business. The meeting was worth it.",
      "The keynote ran 12 minutes over. The speaker was worth it. The lunch was also fine.",
      "Exhausting but energizing. Contradictory, I know. Both true.",
      "I learned something on every day except the networking happy hour. Still worth attending.",
      "The Wi-Fi in the main hall worked most of the time. Excellent for a conference.",
      "Better than the year I didn't go, based on what I heard from people who did.",
    ],
    names: ["Conference Regular, Year 4", "A Speaker's Guest", "First-Time Attendee", "VIP Attendee (Self-Upgraded)", "Exhibitor"],
    titles: ["[INDUSTRY] Professional", "Director of Something Relevant", "Founder", "Attendee"],
    companies: ["A Company In The Space", "That Firm You've Heard Of", "An Exhibitor", "A Sponsor"],
    star_captions: ["⭐⭐⭐⭐⭐ on Eventbrite", "4.7 overall satisfaction (exit survey, 23% response rate)"],
  },
  about: {
    section_titles: ["About [EVENT_NAME]", "Now In Its [N]th Year", "The [EVENT] Story"],
    paragraphs: [
      "[EVENT_NAME] began [N] years ago as a small gathering of [NUMBER] professionals who wanted to talk about [TOPIC]. It has grown to [CURRENT_ATTENDANCE]+ attendees, which means we need a bigger venue, which we have secured.",
      "Every year we raise the bar. Last year's bar was already quite high. This year's bar required a ladder. We found a ladder. Register to see how high we've managed to raise it.",
    ],
  },
  stats: {
    labels: ["Attendees Expected", "Speakers Confirmed", "Sessions Available", "Exhibitors", "Years Running", "Satisfaction Rate"],
    values: ["2,500+", "40+", "60+", "200+", "[N]", "94%*"],
    captions: ["*based on pre-registration", "*of 47 announced", "*including workshops", "*floor space sold out", "*current edition", "*exit survey, 2022"],
  },
  faq: {
    section_titles: ["Event FAQ", "Before You Register"],
    questions: ["Where is the event?", "Can I get a refund?", "Is there a virtual option?", "What's included?", "Can I transfer my ticket?", "Are meals provided?"],
    answers: [
      "[VENUE], [CITY]. Address confirmed. Parking situation: check our parking FAQ (coming soon).",
      "Refunds available until 30 days before the event. After that: transfer only. After event: no.",
      "Yes. Virtual access includes livestream of main stage and recorded sessions. Workshops: recorded only.",
      "All-access badge includes: sessions, expo, meals (Day 1 and Day 2 lunch), opening reception, and the feeling of having been there.",
      "Tickets are transferable. Transfer fee: $25. We know. We know.",
      "Breakfast (coffee/pastry), lunch both days, and opening reception drinks. Everything else: your expense.",
    ],
  },
  form: {
    section_titles: ["Register Now", "Secure Your Ticket", "Book Your Spot"],
    field_labels: ["Full Name", "Job Title", "Company", "Email", "Ticket Type", "Dietary Restrictions"],
    placeholders: ["First Last (as on badge)", "Your Title (or aspirational title)", "Employer / Organization", "For confirmation and 6 follow-up emails", "General / VIP / Group / Speaker", "None / Vegetarian / Vegan / Gluten-free / All of the above"],
    submit_texts: ["Register Now", "Complete Registration", "Get My Ticket", "Secure My Spot", "I'm Going"],
    success_messages: ["Registered! Check your email for confirmation. And 5 more emails about the event.", "You're confirmed! Badge pickup starts 1 hour before the event. Bring ID.", "Registration complete! Hotel block closes [DATE]. Book soon."],
    error_messages: ["Registration failed. Please try again. Your seat is not yet assigned.", "Payment error. Your card was not charged. Please try another card.", "Something went wrong. Please email registrations@ if this continues."],
  },
  footer: {
    taglines: ["[EVENT_NAME] [YEAR] — Mark Your Calendar.", "[CITY] — [DATE_RANGE].", "Organized with care by [ORGANIZER]."],
    copyright_suffixes: ["All speakers subject to change. Agenda subject to change. Venue subject to change.", "Cancellation policy: see Terms."],
    legal_micro_text: ["Registration fees are non-refundable within 30 days of event. Ticket transfer permitted for fee. By registering, attendees consent to photography and filming for promotional use."],
  },
  nav: { link_labels: ["Home", "Speakers", "Schedule", "Tickets", "Sponsors", "Venue", "Register →"] },
  trust_bar: {
    section_titles: ["Sponsored By", "Media Partners", "Supporting Organizations"],
    logo_names: ["A Large Company (Gold Sponsor)", "A Medium Company (Silver)", "A Small Company (Bronze)", "IndustryMag", "PodcastPartner", "AssociationName"],
  },
  cta_banner: {
    headlines: ["Tickets Going Fast", "Last Chance For Early Bird Pricing", "Don't Miss [EVENT] [YEAR]"],
    subtext: ["[N] spots remaining. We say this every year. This year it might be true.", "Price increases [DATE]. Register now to lock in current rate.", "Hundreds of peers will be there. Be one of the hundreds."],
    cta_texts: ["Get Tickets", "Register Now", "Reserve My Seat", "Buy Early Bird"],
  },
};

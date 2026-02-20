import type { ContentPools } from "./content-pools";

export const localContent: ContentPools = {
  hero: {
    headlines: [
      "Welcome To [BUSINESS_NAME] — [CITY]'s [SUPERLATIVE] [BUSINESS_TYPE]",
      "[BUSINESS_TYPE] You Can Trust. Probably. We've Been Here Since [YEAR].",
      "Serving [CITY] And Surrounding Areas (Depending On What You Need)",
      "The [BUSINESS_TYPE] [CITY] Deserves. Also The One It Has.",
      "Family-Owned Since [YEAR]. Family Still Involved. For Better Or Worse.",
    ],
    subheadlines: [
      "Open Mon–Sat 9–6, Sun 10–4, Holidays by chance.",
      "Voted Best [CATEGORY] by a survey we conducted in our parking lot.",
      "Serving customers since [YEAR]. Walk-ins welcome. Appointments preferred. Walk-ins still welcome.",
      "Call us at [PHONE]. We answer most of the time. Try the other line if no answer.",
      "Licensed and bonded in [STATE] since [YEAR].",
    ],
    cta_primary: [
      "Call Now — We'll Pick Up (Probably)",
      "Book Appointment",
      "Get Directions (We're Near The Old [LANDMARK])",
      "See Hours (They Change Seasonally)",
      "Contact Us — Real People Answer",
    ],
    cta_secondary: ["Read Our Reviews (Selected)", "View Services", "Meet Our Staff (2 of 4)", "See Our Work"],
    badge_texts: ["⭐ RATED #1 LOCALLY", "✅ LICENSED & BONDED*", "🏪 FAMILY OWNED", "📅 SINCE [YEAR]", "🤝 LOCAL BUSINESS"],
  },
  features: {
    section_titles: ["Why [CITY] Trusts Us", "Our Services", "What We Offer (Current Menu)"],
    card_headlines: ["Expert Team", "Quality Service", "Fair Pricing", "Quick Turnaround", "Personal Attention", "Satisfaction Guarantee"],
    card_bodies: [
      "Our team has combined experience of [YEARS] years. Some of it in this field specifically.",
      "We take pride in every job. Pride levels may vary by job complexity and day of week.",
      "Competitive pricing based on what we think the market will bear. Very fair.",
      "Most jobs completed in the time frame we estimate, which is itself an estimate.",
      "You're not a number here. You are a customer, which is a valued category.",
      "We guarantee satisfaction, which we define as the work being done and paid for.",
    ],
    card_icons_labels: ["🔧 Available: During Hours", "📞 Responsive: Usually", "⭐ Rated: Well, Mostly"],
  },
  testimonials: {
    section_titles: ["What Our Customers Say", "Local Reviews", "Community Feedback"],
    quotes: [
      "They fixed my [THING]. It works now. I paid the invoice. Everyone did their part.",
      "Showed up within the window they gave me. The window was 4 hours but they showed up.",
      "Very professional. Wore shoe covers. Didn't judge the state of my house. 5 stars.",
      "Price was what they quoted. No surprises. This surprised me.",
      "Called, they answered, they came, they fixed it, they left. Perfect sequence of events.",
      "Friendly staff. One of them remembered my name from last time. Possibly guessing.",
      "Would recommend to neighbors. Have recommended to neighbors. Neighbors seem satisfied.",
      "They found the problem, explained it in terms I didn't understand, fixed it anyway.",
    ],
    names: ["Bob from [NEIGHBORHOOD]", "Linda S.", "Jerry K.", "The Hendersons", "A Local Customer", "Google Reviewer", "Patricia M."],
    titles: ["Homeowner", "Local Customer", "Returning Client", "Neighbor", "Business Owner"],
    companies: ["", "", "", "", ""],
    star_captions: ["★★★★★ Google (47 reviews)", "4.8 Yelp (some removed)", "⭐⭐⭐⭐⭐ Facebook"],
  },
  about: {
    section_titles: ["About [BUSINESS_NAME]", "Our Story", "Part Of This Community"],
    paragraphs: [
      "[BUSINESS_NAME] was founded by [FOUNDER] in [YEAR] with the vision of providing [SERVICES] to the [CITY] area. Since then, we've grown from a one-person operation to a team of [NUMBER]. Community is important to us, which is why we sponsor the little league team and attend the annual fair.",
      "We're not the biggest [BUSINESS_TYPE] in [CITY]. We're also not the smallest. We're in the middle range, which we think is the sweet spot. We know our customers by name, or at least recognize their faces.",
    ],
  },
  stats: {
    labels: ["Years In Business", "Jobs Completed", "Customers Served", "5-Star Reviews", "Miles Radius", "Staff Members"],
    values: ["[X]+ years", "1,200+", "3,500+", "247", "25", "[N]"],
    captions: ["*since founding", "*verified completions", "*repeat customers counted multiple times", "*displayed on Google", "*some conditions", "*full and part-time combined"],
  },
  faq: {
    section_titles: ["Frequently Asked", "Common Questions From Our Community"],
    questions: ["Are you accepting new customers?", "Do you serve [AREA]?", "What are your hours?", "Do you offer emergency service?", "How do I schedule?", "What payment do you accept?"],
    answers: [
      "Yes! We are always happy to welcome new customers. Please call first.",
      "We serve [CITY] and most surrounding areas. Edge cases: call and we'll let you know.",
      "Mon–Fri 8–5, Sat 9–3. Closed Sundays and major holidays. Minor holidays: open, possibly.",
      "Emergency service available. Emergency rates apply. Emergency is defined by the situation.",
      "Call, email, or use the form below. Online booking also available. Walk-in also fine.",
      "Cash, check, all major credit cards, Venmo (personal, awkward, but accepted).",
    ],
  },
  form: {
    section_titles: ["Book An Appointment", "Request A Quote", "Get In Touch"],
    field_labels: ["Your Name", "Phone Number", "Service Needed", "Preferred Date", "Address", "Notes"],
    placeholders: ["First Last", "(555) 555-5555", "Describe what you need done", "Any date works, but not all dates work for us", "Street address in our service area", "Anything we should know? We'll handle the rest."],
    submit_texts: ["Book Now", "Request Quote", "Send Message", "Schedule Visit", "Contact Us"],
    success_messages: ["Got it! We'll call you back within 1 business day. Or same day if we're not busy.", "Request received. One of our team will be in touch to confirm.", "Thanks! Expect a call from us. Check your spam if you don't hear back in 2 days."],
    error_messages: ["Couldn't send your message. Please try calling directly.", "Something went wrong. Try the form again, or just call us — it's faster anyway."],
  },
  footer: {
    taglines: ["Proudly serving [CITY] since [YEAR].", "Local business. Local people. Local results.", "Your neighbors. Your [BUSINESS_TYPE]."],
    copyright_suffixes: ["Licensed and insured in [STATE]. License #[NUMBER].", "Veteran-owned. Family-owned. Community-focused."],
    legal_micro_text: ["*Guarantee applies to workmanship for 90 days under normal use. Pricing valid at time of estimate. Travel fees may apply outside primary service area."],
  },
  nav: { link_labels: ["Home", "Services", "About Us", "Reviews", "Gallery", "Contact", "Book Now"] },
  trust_bar: {
    section_titles: ["Certified & Trusted", "Memberships & Affiliations"],
    logo_names: ["BBB Accredited", "Chamber of Commerce Member", "[CITY] Business Association", "HomeAdvisor Pro", "Angi Certified", "Licensed By [STATE]"],
  },
  cta_banner: {
    headlines: ["Ready To Schedule?", "Don't Wait — [PROBLEM] Gets Worse With Time", "Call Or Click — We're Ready"],
    subtext: ["We have openings this week. They fill fast, but we have them right now.", "Small issues become big problems. We know because we fix them at both stages.", "Same-day estimates available for most services. No obligation."],
    cta_texts: ["Book Appointment", "Call Now", "Get Free Quote", "Schedule Today"],
  },
};

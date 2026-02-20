import type { ContentPools } from "./content-pools";

export const campaignContent: ContentPools = {
  hero: {
    headlines: [
      "Together We Can [VAGUE_POSITIVE_CHANGE] [BROAD_ISSUE]",
      "[NUMBER] People Have Already Signed. You're Next. Or You're The [NUMBER+1]th.",
      "The [ISSUE] Crisis Is Real. This Petition Is Also Real. Sign Both.",
      "Be The Change You Wish To See (Signature Required, Will Take 8 Seconds)",
      "Enough Is Enough. Sign Now. Share. Tell People. See What Happens.",
    ],
    subheadlines: [
      "Every signature makes a difference. Statistically uncertain, but emotionally true.",
      "[NUMBER]+ people have signed. Our goal: [GOAL]. Current: [PERCENT]% there. Adjusting goal.",
      "No donation required. Donation option available. Donation appreciated. No pressure.",
      "This campaign is endorsed by [CELEBRITY] (endorsement was a like on Instagram).",
      "Change happens when people come together. This website is a form of togetherness.",
    ],
    cta_primary: ["Sign The Petition", "Add Your Name", "Join The Movement", "Stand With Us", "Sign Now — Takes 10 Seconds"],
    cta_secondary: ["Share This Page", "Learn More About The Issue", "Donate (Optional)", "Follow Our Updates"],
    badge_texts: ["✍️ [N]K SIGNATURES", "🌍 GLOBAL CAMPAIGN", "📢 TRENDING NOW", "⚡ URGENT", "💚 JOIN THE CAUSE"],
  },
  features: {
    section_titles: ["Why This Matters", "The Facts You Need To Know", "What We're Asking For"],
    card_headlines: ["The Problem", "The Solution", "Your Role", "Our Goals", "The Impact", "The Timeline"],
    card_bodies: [
      "The problem has existed for [N] years and is getting [DIRECTION]. Something must be done. This is something.",
      "The solution is straightforward: [SOLUTION]. Experts agree this would help. Some experts disagree but fewer.",
      "Your signature sends a signal. Signals aggregate into pressure. Pressure produces outcomes. Sometimes.",
      "Goal 1: [SIGNATURES] signatures. Goal 2: Media attention. Goal 3: Official response. Goal 4: TBD.",
      "If successful, this campaign could [IMPACT]. If not, it raised awareness, which is still something.",
      "We're calling for action by [DATE]. [DATE] was last quarter. We have extended the timeline.",
    ],
    card_icons_labels: ["📊 Progress: Ongoing", "🎯 Goal: Achievable (Revised)", "⏰ Deadline: Extended"],
  },
  testimonials: {
    section_titles: ["Voices From The Community", "Why We Sign", "People Like You"],
    quotes: [
      "I signed because I care about this issue and clicking took less effort than not clicking.",
      "This campaign represents exactly what I believe in, and also showed up on my feed.",
      "I've shared this with 12 people. 3 signed. That's a 25% conversion rate. I'm proud.",
      "This matters. Full stop. Or nearly full stop — I added context in my share.",
      "Been following this cause for [N] years. Finally something I can do from my phone.",
      "Signed and donated. The donation was $5. I feel that $5 worth of change is coming.",
      "My whole office signed. 8 people. We talked about it at lunch. Real action.",
    ],
    names: ["A Concerned Citizen", "Someone Who Cares", "A Parent", "A Professional Who Also Cares", "Youth Activist", "Retired Advocate"],
    titles: ["Petition Signer #[N]", "Supporter", "Community Member", "Concerned Individual"],
    companies: ["", "", "", ""],
    star_captions: ["[N] shares on BlortSpace", "[N]K views (organic)", "Featured by [COALITION]"],
  },
  about: {
    section_titles: ["About This Campaign", "Who We Are", "Our Mission"],
    paragraphs: [
      "This campaign was started by [ORGANIZATION], who witnessed [ISSUE] firsthand and decided that the appropriate response was to collect signatures on the internet. We have since collected [NUMBER] signatures, some of which are from people who fully read the petition text.",
      "We are a [SIZE] coalition of [DESCRIPTOR] people united by our commitment to [CAUSE] and our ability to use online petition platforms. All signature counts are real, all stories are real (anonymized), and all goals are aspirational but achievable.",
    ],
  },
  stats: {
    labels: ["Signatures", "Goal", "Days Active", "Countries", "Shares", "% To Goal"],
    values: ["[N],234", "[ROUND_NUMBER]", "[N]", "47", "[N],891", "[PERCENT]%*"],
    captions: ["*and counting!", "*revised from original [HIGHER]", "*since launch", "*at least one signer from each", "*across platforms (estimated)", "*goal recently adjusted"],
  },
  faq: {
    section_titles: ["Questions About This Campaign", "How This Works"],
    questions: ["Does this actually work?", "Who sees the signatures?", "Is my data safe?", "Can I unsign?", "Who is behind this campaign?", "Where does the donation go?"],
    answers: [
      "Petitions have contributed to policy changes. Correlation with signatures: varies. Worthwhile: yes.",
      "Signatures are compiled and submitted to [RECIPIENT]. They are aware we exist. They read some of them.",
      "Your name and email are stored on our platform. Email used for campaign updates and 4–6 follow-ups.",
      "Yes. Email us with your name and we'll remove your signature. We'll also send 1 email to confirm.",
      "This campaign is organized by [ORGANIZATION]. We are a [TYPE] organization. About us: above.",
      "Donations fund campaign operations: platform costs, outreach, and staff time. Breakdown: available on request.",
    ],
  },
  form: {
    section_titles: ["Add Your Signature", "Sign The Petition", "Join [N]K Signatories"],
    field_labels: ["First Name", "Last Name", "Email", "Zip / Postal Code", "Comment (Optional)", "Display Name Publicly?"],
    placeholders: ["First", "Last", "you@example.com", "For geographic data (not shared)", "Why you're signing (encouraged)", "Yes / No / Anonymous"],
    submit_texts: ["Sign Petition", "Add My Name", "I Stand With This", "Sign Now", "Count Me In"],
    success_messages: ["Signed! You are now number [N]. Thank you. Please share.", "Thank you for signing! Share to amplify the impact.", "Your signature has been recorded. Confirmation email sent. Share if you're willing."],
    error_messages: ["Signing failed. Please try again.", "We couldn't verify your email domain. Please use a different email.", "You may have already signed. If not, please try again."],
  },
  footer: {
    taglines: ["Because change requires action, and action requires a signature.", "Organized by [ORG] — [YEAR].", "A people-powered campaign."],
    copyright_suffixes: ["All signatures are real. Some are from other countries, which is fine.", "This campaign is not affiliated with any political party (unless it is; check the about page)."],
    legal_micro_text: ["Signature data stored per privacy policy. Email used for campaign communications only, and also for a monthly newsletter unless you opt out."],
  },
  nav: { link_labels: ["Home", "The Issue", "The Petition", "Sign Now", "Share", "Donate", "Updates"] },
  trust_bar: {
    section_titles: ["Endorsed By", "Supported By", "Coalition Partners"],
    logo_names: ["[Celebrity] (liked our post)", "[Org Name] (listed us as 'similar')", "[Media Outlet] (mentioned once)", "Global [Issue] Alliance", "The [City] Chapter of Something", "[Influencer] (reshared)"],
  },
  cta_banner: {
    headlines: ["Every Signature Counts", "[N] Away From Our Goal — Help Us Get There", "Share And Double The Impact"],
    subtext: ["We're [N] signatures from [MILESTONE]. Your signature could be the one that gets us there.", "Sharing this page brings in an average of 2.3 more signatures. That math is good.", "The goal grows closer. So does [DATE]. Both require action."],
    cta_texts: ["Sign Now", "Share This", "Reach The Goal", "Add My Name"],
  },
};

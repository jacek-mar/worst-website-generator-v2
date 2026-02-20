import type { ContentPools } from "./content-pools";

export const financeContent: ContentPools = {
  hero: {
    headlines: [
      "Your Money Is Working. It Should Be Working Harder. For Us.",
      "Financial Freedom™ Is [NUMBER] Steps Away",
      "Invest Smarter With Our AI (Past Performance: [PERCENT]% Annually)",
      "The [INVESTMENT_TYPE] Platform That Changes How You Think About Losing Money",
      "Build Wealth With Confidence And Our Software Subscription",
    ],
    subheadlines: [
      "Not financial advice. Unless it works, in which case it was advice.",
      "Join 50,000+ investors who trust us with their financial future (we take that seriously-ish).",
      "Past performance does not guarantee future results. We show past performance anyway.",
      "Start with as little as $1. Or more. More is better for both of us.",
      "Risk is part of investing. Your risk tolerance is our concern (and also yours).",
    ],
    cta_primary: [
      "Start Investing Today (Not Financial Advice)",
      "Open Account — Takes 5 Minutes (And Your SSN)",
      "Get Started — No Minimum*",
      "See Live Rates (Refreshed Hourly)",
      "Claim Your Free Analysis (Terms: It's A Sales Call)",
    ],
    cta_secondary: ["Learn More (About Our Product)", "Speak To An Advisor (Ours)", "Calculate Returns (Optimistic Scenario)", "View Disclaimer"],
    badge_texts: ["📈 UP 847% (BACKTEST)", "✅ FDIC INSURED (CONDITIONS)", "🔒 BANK-LEVEL SECURITY", "⚡ TRADE IN SECONDS", "🏆 AWARD: 2019"],
  },
  features: {
    section_titles: ["Why Serious Investors Choose Us", "Platform Capabilities", "Tools For Every Level Of Risk Tolerance"],
    card_headlines: ["AI-Driven Analysis", "Real-Time Market Data", "Diversified Portfolio", "Tax Optimization", "Automatic Rebalancing", "Expert Research"],
    card_bodies: [
      "Our AI analyzes 10,000 data points per second to produce recommendations that you can choose to follow.",
      "Data delayed 15 minutes. Real-time upgrade available at Real-Time tier pricing.",
      "We diversify your portfolio across assets we believe in. Belief is not a guarantee.",
      "Tax optimization strategies that minimize liability within legal boundaries. Boundaries are defined by current law.",
      "Automatic rebalancing to maintain your allocation. Rebalancing triggers transaction fees. Fees enable rebalancing.",
      "Research produced by our team, who are qualified to produce research.",
    ],
    card_icons_labels: ["📊 Data: Many", "⚡ Execution: Fast (Usually)", "🔐 Secure: Yes (Industry Standard)"],
  },
  testimonials: {
    section_titles: ["Investor Testimonials (Results Not Typical)", "Success Stories (Your Results Will Differ)"],
    quotes: [
      "I invested my savings and most of them are still there. Honestly impressed.",
      "The interface is intuitive. The returns are less so, but the interface is great.",
      "My advisor called me back within 3 hours of leaving a message. Service-oriented.",
      "Better returns than my savings account. That's a low bar but they cleared it.",
      "I don't fully understand what I'm invested in but the number mostly goes up.",
      "They explained everything clearly. I understood 40% of it. That 40% was reassuring.",
    ],
    names: ["R. Smith", "Investor #4872", "A. P.", "Margaret (65, retired-ish)", "T.J.", "An Investor"],
    titles: ["Self-Directed Investor", "Retired(ish) Professional", "First-Time Investor", "Cautious Participant"],
    companies: ["", "", "", ""],
    star_captions: ["⭐⭐⭐⭐⭐ (no negative reviews displayed)", "4.8★ (methodology: unknown)"],
  },
  about: {
    section_titles: ["About Our Platform", "Our Investment Philosophy", "Who We Are"],
    paragraphs: [
      "Founded by people with financial backgrounds, our platform democratizes access to investment tools previously only available to those with access to investment tools. We charge a fee for this. The fee funds continued democratization.",
      "Our investment philosophy is: invest money, wait, hopefully get more money back. This philosophy, while simple, is supported by extensive research that we have read summaries of.",
    ],
  },
  stats: {
    labels: ["Assets Under Management", "Annual Return (Backtest)", "Active Accounts", "Countries Available", "Years Operating", "Support Response"],
    values: ["$2.4B+", "847% (historical)", "120,000+", "14", "8", "< 4 hrs*"],
    captions: ["*AUM quoted at peak", "*backtest 2010-2023, not predictive", "*includes dormant accounts", "*varies by regulation", "*in current form", "*during business hours"],
  },
  faq: {
    section_titles: ["Investment FAQ", "Common Questions (Answered Carefully)"],
    questions: ["Is my money safe?", "What are the fees?", "Can I withdraw anytime?", "Is this FDIC insured?", "Do I need experience?", "What's the minimum investment?"],
    answers: [
      "Your money is as safe as market conditions allow. Our systems are secure.",
      "Fees range from 0.25% to 1.5% depending on plan, plus transaction fees, plus spreads. See our 47-page fee schedule.",
      "Withdrawals processed in 1-3 business days pending verification. Some positions are illiquid. See our liquidity disclosure.",
      "Cash positions in partner accounts are FDIC insured up to $250,000. Investments are not deposits and are not insured.",
      "No experience required! That said, experience helps. We recommend our beginner course ($49).",
      "Minimum investment: $1. Optimal investment: More than $1.",
    ],
  },
  form: {
    section_titles: ["Open Your Account", "Start Investing", "Get Your Free Analysis"],
    field_labels: ["Legal Name", "Date of Birth", "SSN (Last 4)", "Annual Income Range", "Risk Tolerance", "Investment Goal"],
    placeholders: ["As on government ID", "MM/DD/YYYY", "For verification only", "$0–$50K / $50K–$100K / $100K+", "Conservative / Moderate / Aggressive / Whatever", "Retirement / Wealth Building / Just Curious"],
    submit_texts: ["Open Account", "Start Investing", "Get Started", "Submit Application", "Begin Journey"],
    success_messages: ["Account opening initiated! Verification takes 1-3 business days. Welcome, tentatively.", "Application received. Our team will review and contact you within a week or so."],
    error_messages: ["Verification failed. Please double-check your information.", "We couldn't open your account at this time. Please try again or call us."],
  },
  footer: {
    taglines: ["Invest confidently. Results vary. Invest anyway.", "Financial services for the financially minded."],
    copyright_suffixes: ["Not a licensed financial advisor in all jurisdictions.", "Investing involves risk. Please read our risk disclosure (42 pages)."],
    legal_micro_text: ["Past performance does not guarantee future results. All investments carry risk of loss including principal. This platform is not a fiduciary. Investment decisions are your responsibility. Securities offered through a registered entity in some jurisdictions."],
  },
  nav: { link_labels: ["Invest", "Rates", "Learn (Premium)", "Tools (Free Trial)", "Portfolio", "Sign In", "Open Account →"] },
  trust_bar: {
    section_titles: ["Regulated & Recognized", "Coverage & Compliance"],
    logo_names: ["SEC Filing #847", "FINRA Member", "BBB Accredited (Pending)", "Forbes 'To Watch'", "TechCrunch (mentioned)", "CrunchBase (profile)"],
  },
  cta_banner: {
    headlines: ["Start Building Wealth Today", "Your Future Self Is Watching", "Time In Market > Timing The Market (Probably)"],
    subtext: ["Every day you wait is a day your money isn't growing. Or losing. Depends on the market.", "Compound interest works best when you start immediately. This is not financial advice.", "Historically, markets go up. Also down. Mostly up, over long periods."],
    cta_texts: ["Open Account", "Start Investing", "Get Free Analysis", "See Returns"],
  },
};

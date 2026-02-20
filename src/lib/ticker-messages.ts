export const TICKER_MESSAGES: Record<string, Array<{ text: string; prefix: string }>> = {
  portfolio: [
    { text: "Available for hire. Extremely available. Please.", prefix: "💼 STATUS:" },
    { text: "Last updated: today (specifically because you are viewing this)", prefix: "📅" },
    { text: "References available upon proof of serious intent", prefix: "📋" },
  ],
  startup: [
    { text: "Series A closing in 48 hours (has been closing for 6 months)", prefix: "🚀 FUNDING:" },
    { text: "10,000 users! (counting test accounts)", prefix: "📈 METRIC:" },
    { text: "Now AI-powered (definition of AI may vary)", prefix: "🤖 UPDATE:" },
  ],
  product: [
    { text: "Only 3 left in stock! (restocked every 20 minutes)", prefix: "⚡ URGENT:" },
    { text: "FREE SHIPPING on orders over $999", prefix: "🚚" },
    { text: "Price guaranteed for the next 11 minutes 59 seconds", prefix: "🔥 DEAL:" },
  ],
  finance: [
    { text: "Past performance does not guarantee future results (but we show it anyway)", prefix: "⚠️ DISCLAIMER:" },
    { text: "Markets are up. Also down. Simultaneously.", prefix: "📊" },
    { text: "Your investment is 100% safe (not financial advice)", prefix: "🛡️" },
  ],
  local: [
    { text: "NOW OPEN • ALWAYS OPEN • NEVER CLOSED • (check hours)", prefix: "🏪" },
    { text: "Serving the community since [YEAR]. A good year.", prefix: "⭐" },
    { text: "Voted Best in Category by us, for us (2019)", prefix: "🏆" },
  ],
  event: [
    { text: "LIMITED TICKETS REMAIN (refresh to see number reset to 47)", prefix: "🎫 URGENT:" },
    { text: "Speakers announced! Some are real!", prefix: "📢" },
    { text: "LAST CHANCE — event may or may not have already happened", prefix: "⏰" },
  ],
  campaign: [
    { text: "SIGN NOW — every signature makes a difference (statistically unclear)", prefix: "✍️ ACTION:" },
    { text: "We've reached 42% of our goal! Goal has been revised upward.", prefix: "📊" },
    { text: "Share on BlortSpace, Twittle, and LinkedOut", prefix: "🔗 SHARE:" },
  ],
};

export function getTickerMessages(category: string): string[] {
  const msgs = TICKER_MESSAGES[category] ?? TICKER_MESSAGES.startup!;
  return msgs.map((m) => `${m.prefix} ${m.text}`);
}

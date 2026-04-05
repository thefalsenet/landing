import type { BlogContentBlock } from "./blog-types";

/** Full body for “Why We Built an AI That Knows Your Reading History” */
export const whyWeBuiltAiReadingHistoryBlocks: BlogContentBlock[] = [
  { type: "p", text: "**Reading is solitary.**" },
  {
    type: "p",
    text: "You finish a book that changes something in your thinking. You write notes. Highlight passages. Maybe post a quote online. Then what?",
  },
  {
    type: "p",
    text: "Your reading history just sits there. No one's watching it. No one's connecting the patterns. No one's asking: what does it all add up to?",
  },
  { type: "hr" },
  { type: "h2", text: "How This Started" },
  {
    type: "p",
    text: "A friend said something to me last year that stuck around.",
  },
  {
    type: "p",
    text: "\"I've read 40 books. Finished most of them. But I can't tell you what they mean together. Somewhere along the way I went from reading history to reading philosophy. Didn't notice it was happening until you mentioned it.\"",
  },
  { type: "p", text: '"How did you miss that?" I asked.' },
  { type: "p", text: '"Who would notice?"' },
  { type: "p", text: "That's the real problem." },
  {
    type: "p",
    text: "Real readers—the ones who actually think—have no way to understand their reading as a whole. Goodreads just tracks what you read. That's not the same thing. BookTok shows you what's popular. Not what matters to you. ChatGPT answers questions about books fine, but it forgets you exist the second you log off.",
  },
  { type: "hr" },
  { type: "h2", text: "What We Built" },
  {
    type: "p",
    text: "The Library Agent is an AI that knows your actual reading history.",
  },
  { type: "p", text: "Not the internet's books. Yours." },
  { type: "p", text: "Not trends. Your patterns." },
  { type: "p", text: "It works like this:" },
  {
    type: "p",
    text: "You've read 32 books. You finished 28. You abandoned 4. All 4 were over 400 pages. All 4 were the same genre.",
  },
  {
    type: "p",
    text: "You probably never noticed that. The agent does. It doesn't judge. It just says what it sees.",
  },
  { type: "hr" },
  { type: "h2", text: "Three Things It Does" },
  {
    type: "h3",
    text: "One: It Shows You Patterns You've Missed",
  },
  {
    type: "p",
    text: "You don't need another algorithm telling you what to read. You need someone who actually understands what you've been reading.",
  },
  { type: "p", text: "The agent sees:" },
  {
    type: "ul",
    items: [
      "Books you start and abandon (and why the pattern matters)",
      "How your reading has shifted over time",
      "The gaps—subjects you keep circling but never directly tackle",
      "Connections between books you read years apart",
    ],
  },
  { type: "p", text: "This isn't complicated. It's just paying attention." },
  { type: "h3", text: "Two: One Book, Not Ten" },
  {
    type: "p",
    text: "You don't want a list. You want a conversation.",
  },
  {
    type: "p",
    text: 'When you ask for a recommendation, the agent doesn\'t hand you five "readers also enjoyed" suggestions. It recommends one book and explains why, based on your actual history.',
  },
  {
    type: "p",
    text: "\"You finished Hobbes last month. Your notes say his view of human nature felt too dark. Locke's Second Treatise pushes back on that directly. And @username has three pages of notes that you'll probably disagree with.\"",
  },
  {
    type: "p",
    text: "That's a recommendation. Not a suggestion. An actual conversation.",
  },
  {
    type: "h3",
    text: "Three: Build Learning Paths That Make Sense",
  },
  {
    type: "p",
    text: 'When you say "I want to understand political philosophy in four months," the agent doesn\'t pull a list from the internet.',
  },
  {
    type: "p",
    text: "It builds a path based on what you've actually read. Skips books you've covered. Orders them by logic, not alphabetically. Tells you when you need to slow down and think before moving forward.",
  },
  {
    type: "p",
    text: "It's a thinking partner, not a search result.",
  },
  { type: "hr" },
  { type: "h2", text: "Why This Matters" },
  {
    type: "p",
    text: "Reading is how we think.",
  },
  { type: "p", text: "But most readers think alone." },
  {
    type: "p",
    text: "You spend weeks with an idea. The book ends. You move to the next one. The thought disappears into your notes.",
  },
  { type: "p", text: "That shouldn't be how it works." },
  {
    type: "p",
    text: "Your reading history is evidence of how you think. It's a map of what you've grappled with, rejected, come back to. It's your intellectual life written out.",
  },
  {
    type: "p",
    text: "That story should be visible. To you. To people who read like you do. To anyone paying attention.",
  },
  { type: "hr" },
  { type: "h2", text: "What We're Not Building" },
  {
    type: "p",
    text: "We're not another recommendation algorithm. The internet has plenty, and most of them are designed to keep you scrolling, not to help you understand.",
  },
  {
    type: "p",
    text: "We're not a social network where you perform for followers. Twitter already exists.",
  },
  {
    type: "p",
    text: "We're not a note-taking app. Those are fine on their own.",
  },
  { type: "hr" },
  { type: "h2", text: "What We're Actually Building" },
  {
    type: "p",
    text: "A thinking partner that knows you.",
  },
  {
    type: "p",
    text: "Not from what you search or click. From what you read.",
  },
  {
    type: "p",
    text: "Not from what you perform. From what you're genuinely thinking about.",
  },
  {
    type: "p",
    text: "Not from a database. From your own history.",
  },
  { type: "hr" },
  { type: "h2", text: "The Philosophy" },
  {
    type: "p",
    text: "Three things guide what we build:",
  },
  {
    type: "p",
    text: "**Honesty, not flattery.** The agent doesn't say \"great taste\" or \"you're such a thoughtful reader.\" It says what it sees. Sometimes that's uncomfortable. That's the point.",
  },
  {
    type: "p",
    text: "**Slow, not fast.** The agent doesn't stream words like ChatGPT. It thinks, then responds completely. Reading is slow. We're not going to pretend otherwise.",
  },
  {
    type: "p",
    text: "**Context, not advice.** The agent shows you your own history. It doesn't tell you what to read. You decide. It's a mirror and a compass, not a guide.",
  },
  { type: "hr" },
  { type: "h2", text: "Why Now" },
  {
    type: "p",
    text: "Most AI is being used to make things faster and flashier.",
  },
  {
    type: "p",
    text: "We're using it to make something deeper.",
  },
  {
    type: "p",
    text: "Because readers have been waiting for this. Not an algorithm. Not another app. A partner that actually understands what you've been reading.",
  },
  {
    type: "p",
    text: "We've been testing with early users. What we're hearing:",
  },
  {
    type: "ul",
    items: [
      '"Finally, someone is paying attention."',
      "\"I didn't realize I'd shifted what I was reading until you pointed it out.\"",
      '"This is what I\'ve been looking for."',
    ],
  },
  {
    type: "p",
    text: "That's when you know you've found something real.",
  },
  { type: "hr" },
  { type: "h2", text: "What Happens Next" },
  {
    type: "p",
    text: "Waitlist opens April 2026.",
  },
  {
    type: "p",
    text: "Fair selection. Random queue, not first-come. Everyone has the same odds.",
  },
  {
    type: "p",
    text: "Early access for 500 people.",
  },
  {
    type: "p",
    text: "50% off the first month.",
  },
  {
    type: "p",
    text: "If you've been reading seriously and wondering what it all means, join us.",
  },
  { type: "hr" },
  { type: "h2", text: "Who This Is For" },
  {
    type: "p",
    text: "The person who didn't realize they'd stopped reading one genre and started another.",
  },
  {
    type: "p",
    text: "The person whose notes are scattered, invisible.",
  },
  {
    type: "p",
    text: "The person who finished a book that changed something but has no one to talk to about it.",
  },
  {
    type: "p",
    text: "The person who knows reading is how they think, but has never had a tool that reflected that back.",
  },
  { type: "hr" },
  { type: "h2", text: "The Waitlist" },
  {
    type: "p",
    text: "[Join the waitlist](/app/agent/waitlist). Random selection starts April 2026. 50% off your first month. Built for people who actually read.",
  },
  { type: "hr" },
  {
    type: "p",
    text: "**P.S.** — If you've ever wondered why nobody built this, it's because it requires understanding that reading isn't about consumption. It's about thinking. Thinking is slow. Most tech companies hate slow. We don't.",
  },
  { type: "hr" },
  {
    type: "p",
    text: "**Share if you know someone who reads like this.**",
  },
];

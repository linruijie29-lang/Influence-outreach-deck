import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Zap,
  Users,
  AlertCircle,
  CheckCircle2,
  BarChart,
  Bot,
  XCircle,
  ArrowRight,
  RefreshCw,
  Play,
  Flame,
  Calendar,
  ExternalLink
} from 'lucide-react';

const SlideCard = ({ children }) => (
  <div className="w-full h-full max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-14 flex flex-col justify-center relative animate-fade-in overflow-y-auto">
    {children}
  </div>
);

// --- SLIDE COMPONENTS ---

const Slide1 = () => (
  <SlideCard>
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-6">
      <div className="uppercase tracking-widest text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-2">
        Influence Intern Onboarding
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
        Outreach 101
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
        Everything you need to know about reaching the right people, the right way.
      </p>
      <div className="mt-12 pt-8 border-t border-gray-100 w-full max-w-md">
        <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
          Built by the Influence Growth Team
        </p>
      </div>
    </div>
  </SlideCard>
);

const Slide2 = () => (
  <SlideCard>
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Introduction</span>
        <h2 className="text-4xl font-bold text-gray-900">What is Outreach?</h2>
      </div>
      <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl">
        Outreach is reaching out to someone who does not know you yet but should.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl">
        The format does not matter. The goal does. You want to start a real conversation with someone who has a problem your product solves. Every message aims to do 3 things:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-[#FFF8F2] p-8 rounded-2xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Awareness</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Get on their radar. Let them know you and your company exist.</p>
          </div>
        </div>
        <div className="bg-[#FFF8F2] p-8 rounded-2xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Trust</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Show you understand their exact problem and industry context intimately.</p>
          </div>
        </div>
        <div className="bg-[#FFF8F2] p-8 rounded-2xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Action</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Provide real value immediately to encourage a natural reply or conversation.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide3 = () => (
  <SlideCard>
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">The Hard Truths</span>
        <h2 className="text-4xl font-bold text-gray-900">Why Outreach Matters</h2>
      </div>
      
      <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
        No matter how good your product is, <span className="underline decoration-orange-400 decoration-2">it does not sell itself.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 space-y-4">
          <div className="flex items-center space-x-3 text-red-700">
            <XCircle className="w-6 h-6 shrink-0" />
            <h3 className="text-xl font-bold">90% of Startups Fail</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Most of them actually built decent products. They failed simply because they never figured out how to get in front of the right people in time.
          </p>
        </div>

        <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100 space-y-4">
          <div className="flex items-center space-x-3 text-green-700">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <h3 className="text-xl font-bold">Founders Who Win</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Winners put themselves in front of prospective customers on purpose. If you are not doing deliberate outreach, you are betting on pure luck. And luck does not scale.
          </p>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide4 = () => (
  <SlideCard>
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Acquisition Channels</span>
        <h2 className="text-4xl font-bold text-gray-900">The 4 Ways to Sell Your Product</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-[#FFF8F2] p-6 rounded-xl border border-orange-100/40">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <TrendingUp className="mr-2 text-blue-500 w-5 h-5"/> SEO & Social Media
            </h3>
            <p className="text-gray-600 text-sm">
              These channels <strong>compound</strong> over time. They are long-term plays that take months to generate predictable pipeline but pay off immensely down the line.
            </p>
          </div>
          
          <div className="bg-[#FFF8F2] p-6 rounded-xl border border-orange-100/40">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <BarChart className="mr-2 text-green-600 w-5 h-5"/> Paid Ads
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Makes money today, but represents an incredibly competitive market.
            </p>
            <p className="text-xs text-gray-500 italic bg-white/60 p-2 rounded border border-gray-100">
              You are competing for general eyeballs against massive players with infinite pockets like Google, ChatGPT, and enterprise corporations.
            </p>
          </div>
        </div>

        <div className="bg-gray-950 rounded-2xl p-8 text-white flex flex-col justify-center shadow-md space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-orange-400">Outreach</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Outreach is the active engine that makes money today. However, typical cold email is now just as saturated as paid ads. You compete against immense noise inside the inbox.
          </p>
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
            <h4 className="text-white font-semibold text-sm mb-1">The Warm Outreach Advantage</h4>
            <p className="text-xs text-gray-400">
              Warm outreach bypasses the direct competitor bidding war by capitalizing on immediate, hyper-specific buyer intent signals rather than fighting for general attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide5 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Methodology</span>
        <h2 className="text-4xl font-bold text-gray-900">Cold vs. Warm Outreach</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FFF8F2] p-8 rounded-2xl border border-red-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-lg font-bold">Cold: Spray & Pray</h3>
            </div>
            <div className="text-red-700 font-extrabold text-3xl">1 - 2% Reply Rate</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Blasting generic messages to random, static lists. It relies on sheer brute force. Because nobody asked and nobody cares, virtually no one replies.
            </p>
          </div>
          <div className="mt-6 bg-red-50 text-red-800 p-3 rounded-lg text-xs font-medium">
            Requires blasting 1,000+ messages to book just a couple of calls.
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-green-500/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="text-lg font-bold">Warm: Intent-Driven</h3>
            </div>
            <div className="text-green-700 font-extrabold text-3xl">25 - 40% Reply Rate</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reaching out specifically to people who are actively demonstrating they need what you sell. By meeting them right at the moment of interest, replies skyrocket.
            </p>
          </div>
          <div className="mt-6 bg-green-50 text-green-800 p-3 rounded-lg text-xs font-medium">
            Yields the exact same results as cold blasting with only 30-40 targeted messages.
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-5 rounded-xl border border-orange-100 flex items-start space-x-3 mt-4">
        <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
        <div className="text-xs text-orange-900 leading-relaxed">
          <strong>The Platform Limit Rule:</strong> Email providers and LinkedIn enforce strict daily sending thresholds to combat spam. Because you can only physically send so many messages per account before risking a ban, warm outreach is mathematically mandatory to maximize yield out of those limited slots.
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide6 = () => (
  <SlideCard>
    <div className="space-y-6 text-center flex flex-col items-center">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Targeting Strategy</span>
        <h2 className="text-4xl font-bold text-gray-900">Warm = ICP + Signal</h2>
      </div>
      
      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
        Defining an Ideal Customer Profile (ICP) is the starting line for any campaign. But warm outreach relies on pairing that profile with an active event.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-6 w-full max-w-3xl">
        <div className="bg-gray-50 px-6 py-5 rounded-xl border border-gray-200 text-center w-full md:w-1/3">
          <div className="text-xs font-bold uppercase text-gray-400 mb-1">Who they are</div>
          <span className="font-extrabold text-xl text-gray-800">ICP</span>
        </div>
        <div className="text-3xl text-gray-300 font-light">+</div>
        <div className="bg-gray-50 px-6 py-5 rounded-xl border border-gray-200 text-center w-full md:w-1/3">
          <div className="text-xs font-bold uppercase text-gray-400 mb-1">What they did</div>
          <span className="font-extrabold text-xl text-gray-800">Signal / Intent</span>
        </div>
        <div className="text-3xl text-gray-300 font-light">=</div>
        <div className="bg-orange-500 text-white px-6 py-5 rounded-xl shadow-sm text-center w-full md:w-1/3">
          <div className="text-xs font-bold uppercase text-orange-100 mb-1">Actionable</div>
          <span className="font-extrabold text-xl">Warm Lead</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 text-left w-full max-w-4xl">
        <h3 className="text-md font-bold mb-4 text-gray-900 uppercase tracking-wider text-center md:text-left">What counts as a high-value signal?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-start bg-gray-50/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5"/> They just raised funding, expanded teams, or hired.</div>
          <div className="flex items-start bg-gray-50/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5"/> They publicly posted asking about a specific problem.</div>
          <div className="flex items-start bg-gray-50/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5"/> They are actively hiring for specific hard-to-fill skillsets.</div>
          <div className="flex items-start bg-gray-50/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5"/> They are interacting with competitor accounts or reviews.</div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide7 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
          <Mail className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Email Strategy</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900">The Email Blueprint</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Four Simple Rules</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="bg-orange-50 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 mr-3 shrink-0 shadow-sm">1</span>
              <div><strong>Short Subject Line:</strong> Under 7 words. It should look like an internal note, not a marketing blast.</div>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-50 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 mr-3 shrink-0 shadow-sm">2</span>
              <div><strong>Immediate Context:</strong> Start with them (e.g., saw you are hiring, saw you launched, saw you posted).</div>
            </li>
            <li className="flex items-start text-red-600 font-semibold">
              <XCircle className="w-6 h-6 mr-3 shrink-0 mt-0.5" />
              <div>Never open with generic variations of "Quick question" or ask for a demo in the first message.</div>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-50 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 mr-3 shrink-0 shadow-sm">3</span>
              <div><strong>Value Loop:</strong> Offer to send a free teardown or custom asset before asking for any time.</div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
            <div className="absolute -top-3 left-6 bg-green-600 text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-sm">
              Example Sequence
            </div>
            <div className="text-gray-800 space-y-3 text-sm mt-2">
              <p className="text-xs text-gray-400 border-b pb-2">Subject: your recent linkedin post about scale</p>
              <p>Hey [Name],</p>
              <p>Saw you mentioned struggling with [specific technical problem] the other day.</p>
              <p>We solved this recently for a similar team. I put together a quick teardown of how to fix it.</p>
              <p className="font-semibold text-green-700 bg-green-50 p-2 rounded text-xs">
                Happy to send it over if you are interested?
              </p>
            </div>
          </div>

          <div className="bg-gray-950 p-4 rounded-xl text-white text-center flex items-center justify-between">
            <div className="text-left">
              <p className="text-xs text-gray-400">Step 1: Get consent</p>
              <p className="text-sm font-bold text-orange-400">Step 2: Share value & ask for demo</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide8 = () => {
  const [demoSpintax, setDemoSpintax] = useState(0);
  const options = [
    { intro: "Hey", greeting: "saw your post", signoff: "Best" },
    { intro: "Hi", greeting: "noticed you launched", signoff: "Cheers" },
    { intro: "Hello", greeting: "congrats on hiring for", signoff: "Thanks" }
  ];

  return (
    <SlideCard>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
            <Bot className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-500">Email Technology</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900">What is Spintax?</h2>
        
        <p className="text-md text-gray-600 max-w-4xl">
          To protect email deliverability, you cannot send identical templates to hundreds of prospects. You must use <strong>Spintax</strong> (spinning syntax) to write dynamic, highly randomized emails.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#FFF8F2] p-6 rounded-xl border border-purple-100/50 space-y-3">
            <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wider">How Spintax Looks in Code</h3>
            <div className="bg-white p-4 rounded border border-purple-100 font-mono text-xs text-gray-700 leading-relaxed">
              {"{"}Hey|Hi|Hello{"}"} [Name],<br /><br />
              {"{"}saw your post|noticed you launched|congrats on hiring for{"}"} X...<br /><br />
              {"{"}Best|Cheers|Thanks{"}"},
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">How Servers Read It</h3>
                <button 
                  onClick={() => setDemoSpintax((prev) => (prev + 1) % 3)}
                  className="flex items-center space-x-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 transition-colors"
                >
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Spin Email</span>
                </button>
              </div>
              <div className="bg-purple-50/50 p-4 rounded border border-purple-100/50 text-xs text-purple-950 min-h-[110px] transition-all">
                <p className="font-semibold mb-2">{options[demoSpintax].intro} [Name],</p>
                <p className="mb-2">I {options[demoSpintax].greeting} X yesterday and...</p>
                <p>{options[demoSpintax].signoff},</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-400">
              Spintax forces mail servers to view every email sent as a completely unique, manually drafted message.
            </p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
};

const Slide9 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
          <Bot className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-purple-500">AI Personalization</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900">The AI Personalization Leap</h2>
      
      <p className="text-md text-gray-600 max-w-3xl">
        AI is completely rewriting the rules of spintax and deliverability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <div className="flex items-center text-gray-500 font-bold tracking-wide uppercase text-xs">
            <XCircle className="w-4 h-4 mr-2" /> Old Variable Replacing
          </div>
          <p className="text-sm text-gray-600">
            Most outreach tools just substitute basic merge tags:
          </p>
          <div className="bg-gray-50 p-3 rounded font-mono text-xs text-red-600">
            "Hey <span className="bg-red-50 px-1 rounded">{"{first_name}"}</span>, saw you work at <span className="bg-red-50 px-1 rounded">{"{company}"}</span>."
          </div>
          <p className="text-xs text-gray-500">
            Email servers easily spot that the core structural template is 100% identical. This triggers spam filters and tanks deliverability.
          </p>
        </div>

        <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100 space-y-4">
          <div className="flex items-center text-purple-700 font-bold tracking-wide uppercase text-xs">
            <CheckCircle2 className="w-4 h-4 mr-2" /> The New AI Customization
          </div>
          <p className="text-sm text-gray-700">
            Instead of standard templates, modern AI writes uniquely customized paragraphs based on raw intent signals.
          </p>
          <div className="bg-white p-3 rounded font-mono text-xs text-purple-700 border border-purple-100 shadow-sm">
            "Hey [Name], loved your point in yesterday's blog about migrating databases to RDS..."
          </div>
          <p className="text-xs text-purple-600 font-medium">
            Because AI dynamically formats the entire body for each recipient, it creates perfect, natural spintax organically.
          </p>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide10 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Linkedin className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-500">LinkedIn Strategy</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900">The LinkedIn Loop</h2>
      
      <p className="text-md text-gray-600 max-w-4xl">
        LinkedIn is where decision-makers actively work. It requires a relationship-first approach. Never jump steps or pitch in your first DM.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#FFF8F2] p-5 rounded-xl border-t-4 border-blue-400 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase mb-2">Step 01</div>
            <h4 className="font-bold text-base text-gray-900 mb-2">Find Intent</h4>
            <p className="text-xs text-gray-600">Locate key people showing intent: recent role changes, job postings, or active content engagement.</p>
          </div>
        </div>

        <div className="bg-[#FFF8F2] p-5 rounded-xl border-t-4 border-blue-500 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase mb-2">Step 02</div>
            <h4 className="font-bold text-base text-gray-900 mb-2">Engage</h4>
            <p className="text-xs text-gray-600">Leave a thoughtful, non-generic comment on their recent posts. Get on their mental radar first.</p>
          </div>
        </div>

        <div className="bg-[#FFF8F2] p-5 rounded-xl border-t-4 border-blue-600 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase mb-2">Step 03</div>
            <h4 className="font-bold text-base text-gray-900 mb-2">Short DM</h4>
            <p className="text-xs text-gray-600">Keep connection requests and first messages under 30 words. No sales pitches—just open a dialogue.</p>
          </div>
        </div>

        <div className="bg-[#FFF8F2] p-5 rounded-xl border-t-4 border-blue-700 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase mb-2">Step 04</div>
            <h4 className="font-bold text-base text-gray-900 mb-2">Earn the Call</h4>
            <p className="text-xs text-gray-600">Once they respond, present a specific insight. Only suggest a call after building direct rapport.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide11 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Linkedin className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-500">LinkedIn Rules</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900">Understanding LinkedIn Platform Limits</h2>
      
      <p className="text-md text-gray-600 max-w-3xl">
        LinkedIn handles compliance very differently than traditional email servers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900">LinkedIn Spintax doesn't matter</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Unlike email, LinkedIn filters don't primarily look for similar strings of text. They focus completely on user actions and platform engagement signals.
            </p>
          </div>
          <div className="mt-4 bg-white p-3 rounded border border-gray-200 text-xs text-gray-500">
            Do not worry about complex spintax on LinkedIn.
          </div>
        </div>

        <div className="bg-red-50/50 p-6 rounded-xl border border-red-100 space-y-3">
          <h3 className="text-base font-bold text-red-950">The Two Metrics LinkedIn Tracks</h3>
          <ul className="space-y-2 text-xs text-red-900">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <strong>Invite volume:</strong> Weekly invite thresholds are highly restricted.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <strong>Unanswered DMs:</strong> Sending many outbound messages without getting replies flags your account as a commercial spam bot.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide12 = () => (
  <SlideCard>
    <div className="space-y-6 text-center flex flex-col items-center justify-center h-full py-4">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Niche Ecosystems</span>
        <h2 className="text-4xl font-bold text-gray-900">Community Channels</h2>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
        Email and LinkedIn are your scalable primary channels. However, specialized communities are perfect for uncovering high-intent buyers talking about their problems in real time.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-4">
        <div className="bg-[#FFF8F2] p-5 rounded-xl border border-gray-200 flex flex-col items-center justify-center space-y-2">
          <MessageSquare className="text-orange-500 w-8 h-8" />
          <span className="font-bold text-base text-gray-800">Reddit</span>
          <span className="text-[10px] text-gray-400">High intent problems</span>
        </div>
        <div className="bg-[#FFF8F2] p-5 rounded-xl border border-gray-200 flex flex-col items-center justify-center space-y-2">
          <MessageSquare className="text-purple-500 w-8 h-8" />
          <span className="font-bold text-base text-gray-800">Slack</span>
          <span className="text-[10px] text-gray-400">Direct operator access</span>
        </div>
        <div className="bg-[#FFF8F2] p-5 rounded-xl border border-gray-200 flex flex-col items-center justify-center space-y-2">
          <MessageSquare className="text-green-500 w-8 h-8" />
          <span className="font-bold text-base text-gray-800">WhatsApp</span>
          <span className="text-[10px] text-gray-400">Direct instant dialogue</span>
        </div>
        <div className="bg-[#FFF8F2] p-5 rounded-xl border border-gray-200 flex flex-col items-center justify-center space-y-2">
          <MessageSquare className="text-blue-400 w-8 h-8" />
          <span className="font-bold text-base text-gray-800">Telegram</span>
          <span className="text-[10px] text-gray-400">Niche founder channels</span>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl border border-gray-100 mt-6 max-w-2xl">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Strategic Warning:</strong> These platforms are incredibly high-yield for individual relationships, but they do not scale systematically. Use them as tactical signal indicators, but focus your structural volume on Email and LinkedIn.
        </p>
      </div>
    </div>
  </SlideCard>
);

const Slide13 = () => (
  <SlideCard>
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
          <Bot className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-orange-500">The Core Technology</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900">The Influence Platform</h2>
      
      <p className="text-md text-gray-600 max-w-3xl leading-relaxed">
        Everything we have discussed is exactly why we built the Influence platform. Instead of fighting manual limits, our system handles the entire warm outreach cycle programmatically.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-[#FFF8F2] p-6 rounded-xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1.5 text-base">Intent Sourcing</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Continuously scrapes public signals (hiring posts, community questions, competitor drops) to build active lists.</p>
          </div>
        </div>
        <div className="bg-[#FFF8F2] p-6 rounded-xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <Bot className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1.5 text-base">AI Engine Calibration</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Drafts hyper-tailored, personalized intro value offers dynamically, eliminating standard repetitive spam templates.</p>
          </div>
        </div>
        <div className="bg-[#FFF8F2] p-6 rounded-xl border border-orange-100/50 flex flex-col justify-between">
          <div>
            <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-1.5 text-base">Deliverability Control</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Rotates emails, spaces out delivery, and ensures sending schedules always map safely beneath platform guardrails.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

const Slide14 = () => (
  <SlideCard>
    <div className="flex flex-col items-center justify-center text-center space-y-10 py-6 h-full">
      <div className="bg-orange-500 p-4 rounded-full text-white animate-pulse">
        <Flame className="w-12 h-12" />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
          Time to Get Building
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          No more theory. Let's find some signals, draft some high-value angles, and start filling the pipeline today.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
        <a 
          href="https://owninfluence.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white hover:bg-orange-50/50 text-gray-900 border border-gray-200 hover:border-orange-200 p-5 rounded-2xl flex items-center justify-between font-bold shadow-sm transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 text-orange-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-lg">owninfluence.com</span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
        </a>

        <a 
          href="https://cal.com/luis-vale/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-950 hover:bg-gray-900 text-white p-5 rounded-2xl flex items-center justify-between font-bold shadow-md transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-gray-800 text-orange-400 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-lg">Book 30 min Sync</span>
          </div>
          <Play className="w-4 h-4 fill-white" />
        </a>
      </div>
    </div>
  </SlideCard>
);

// --- MAIN CONTROLLER APP ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />,
    <Slide12 key="12" />,
    <Slide13 key="13" />,
    <Slide14 key="14" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col font-sans bg-[#FFF8F2] overflow-hidden select-none">
      
      {/* Slide Content Area */}
      <div className="flex-grow overflow-hidden relative px-4 md:px-12 py-6 flex items-center justify-center">
        {slides[currentSlide]}
      </div>

      {/* Navigation Footer */}
      <div className="h-20 bg-white border-t border-gray-200/80 flex items-center justify-between px-6 md:px-10 shadow-sm z-10 shrink-0">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            currentSlide === 0 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-700 bg-gray-50 hover:bg-orange-50 hover:text-orange-700'
          }`}
        >
          <ChevronLeft className="mr-1.5 w-4 h-4" /> Prev
        </button>

        {/* Progress Indicators */}
        <div className="hidden md:flex space-x-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-orange-500' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="text-xs font-semibold text-gray-400 md:hidden">
          {currentSlide + 1} / {slides.length}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            currentSlide === slides.length - 1 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-700 bg-gray-50 hover:bg-orange-50 hover:text-orange-700'
          }`}
        >
          Next <ChevronRight className="ml-1.5 w-4 h-4" />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}
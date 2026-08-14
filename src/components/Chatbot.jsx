import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Clock, MapPin, Phone, FlaskConical, Home, Stethoscope, ChevronRight, Bot, User } from 'lucide-react';

/* =========================================================================
   CHATBOT KNOWLEDGE BASE & CONVERSATION FLOWS
   
   All clinic-specific data lives here for easy editing.
   ========================================================================= */

const CLINIC_INFO = {
  name: "Aashree Health Point",
  phone1: "9443343502",
  phone2: "7858974548",
  whatsapp: "919443343502",
  email: "healthpointaashree@gmail.com",
  address: "1332, Rishi Raj Narayan Rd, Niva Park Extension, Brahmapur, Kolkata - 700096",
  landmark: "Near Niva Park Extension, Near Tolly Turf Arena",
  timingWeekday: "Mon–Sat: 9:00 AM – 1:00 PM & 5:00 PM – 9:00 PM",
  timingSunday: "Sunday: 9:00 AM – 1:00 PM (Evening Closed)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aashree+Health+point%2C+1332%2C+Rishi+Raj+Narayan+Rd%2C+Niva+Park+Extension%2C+Brahmapur%2C+Kolkata%2C+West+Bengal+700096",
};

const QUICK_REPLIES = {
  main: [
    { id: 'timings', icon: Clock, label: 'Clinic Timings' },
    { id: 'tests', icon: FlaskConical, label: 'Lab Tests' },
    { id: 'home_collection', icon: Home, label: 'Home Collection' },
    { id: 'doctor', icon: Stethoscope, label: 'Doctor Info' },
    { id: 'location', icon: MapPin, label: 'Location' },
    { id: 'contact', icon: Phone, label: 'Contact Us' },
  ],
  tests_sub: [
    { id: 'tests_blood', label: 'Blood Tests' },
    { id: 'tests_diabetes', label: 'Diabetes Panel' },
    { id: 'tests_thyroid', label: 'Thyroid Tests' },
    { id: 'tests_general', label: 'Full Body Checkup' },
    { id: 'tests_report', label: 'Report Timing' },
    { id: 'back_main', label: '← Back to Menu' },
  ],
  home_sub: [
    { id: 'home_how', label: 'How It Works' },
    { id: 'home_area', label: 'Service Area' },
    { id: 'home_doctor_visit', label: 'Home Doctor Visit' },
    { id: 'back_main', label: '← Back to Menu' },
  ],
};

const RESPONSES = {
  welcome: {
    text: `👋 Hello! Welcome to **${CLINIC_INFO.name}**.\n\nI'm here to help you with clinic timings, lab tests, home collection, directions, and more.\n\nWhat would you like to know?`,
    quickReplies: 'main',
  },
  timings: {
    text: `🕐 **Clinic Timings**\n\n📅 **${CLINIC_INFO.timingWeekday}**\n\n🟠 **${CLINIC_INFO.timingSunday}**\n\n*Home sample collection timings can be arranged upon request.*`,
    quickReplies: 'main',
  },
  tests: {
    text: `🔬 **Our Lab Tests (NABL Certified)**\n\nWe offer a comprehensive range of diagnostic tests. What are you looking for?`,
    quickReplies: 'tests_sub',
  },
  tests_blood: {
    text: `🩸 **Blood Tests Available:**\n\n• Complete Blood Count (CBC)\n• Hemoglobin (Hb)\n• ESR\n• Blood Group & Rh Typing\n• Liver Function Test (LFT)\n• Kidney Function Test (KFT)\n• Lipid Profile\n• Uric Acid\n• Vitamin D & B12\n• Iron Studies\n\nFor pricing and more tests, please contact us directly.`,
    quickReplies: 'tests_sub',
  },
  tests_diabetes: {
    text: `💉 **Diabetes Panel:**\n\n• Fasting Blood Sugar (FBS)\n• Post-Prandial Blood Sugar (PPBS)\n• HbA1c (Glycated Hemoglobin)\n• Fasting Insulin\n• Glucose Tolerance Test (GTT)\n• Urine Microalbumin\n\nOur doctor specializes in diabetology and can help manage your diabetes care plan.`,
    quickReplies: 'tests_sub',
  },
  tests_thyroid: {
    text: `🦋 **Thyroid Tests:**\n\n• TSH (Thyroid Stimulating Hormone)\n• Free T3 & Free T4\n• Total T3 & Total T4\n• Anti-TPO Antibodies\n• Thyroglobulin\n\nFor pricing, call or WhatsApp us.`,
    quickReplies: 'tests_sub',
  },
  tests_general: {
    text: `✅ **Full Body Checkup Includes:**\n\n• CBC, ESR\n• Fasting Blood Sugar & HbA1c\n• Lipid Profile\n• Liver & Kidney Function Tests\n• Thyroid Profile (TSH)\n• Urine Routine\n• Vitamin D & B12\n\nContact us for the latest package pricing!`,
    quickReplies: 'tests_sub',
  },
  tests_report: {
    text: `📋 **Report Turnaround:**\n\n• **Routine tests** (CBC, Sugar, Urine): 12–24 hours\n• **Specialized tests** (Thyroid, Vitamins): 24–48 hours\n• **Culture/Sensitivity**: 2–3 days\n\nReports are sent digitally via **WhatsApp or Email** — no need to revisit the clinic!`,
    quickReplies: 'tests_sub',
  },
  home_collection: {
    text: `🏠 **Home Blood Sample Collection**\n\nWe offer convenient doorstep blood sample collection across South Kolkata.\n\nWhat would you like to know?`,
    quickReplies: 'home_sub',
  },
  home_how: {
    text: `📝 **How Home Collection Works:**\n\n1️⃣ **Call or WhatsApp** us with your test requirements\n2️⃣ **Schedule** a convenient time slot\n3️⃣ Our certified **phlebotomist visits** your home with sterile equipment\n4️⃣ Samples are safely transported to our **NABL-certified lab**\n5️⃣ **Reports delivered** digitally via WhatsApp/Email\n\nSimple, safe, and convenient! 🏡`,
    quickReplies: 'home_sub',
  },
  home_area: {
    text: `📍 **Home Collection Service Area:**\n\n• Brahmapur & Niva Park Extension\n• Bansdroni & Garia\n• Tollygunge & Jadavpur\n• Narendrapur & Sonarpur\n• And surrounding South Kolkata areas\n\nNot sure if we cover your area? Just ask us!`,
    quickReplies: 'home_sub',
  },
  home_doctor_visit: {
    text: `👨‍⚕️ **Home Doctor Visits:**\n\nAvailable for:\n• Elderly patients\n• Mobility-impaired patients\n• Post-operative recovery\n• Bedridden patients\n\nHome visits are subject to the doctor's schedule. Call us to book a slot.`,
    quickReplies: 'home_sub',
  },
  doctor: {
    text: `👨‍⚕️ **Our Medical Team**\n\nOur on-site doctor's chamber offers:\n\n• **General Physician Consultations**\n• **Diabetology & Sugar Management**\n• **Routine Health Checkups**\n• **Prescription & Follow-up Care**\n\nWalk-in consultations are available during clinic hours. No prior appointment needed for general consultations.`,
    quickReplies: 'main',
  },
  location: {
    text: `📍 **Clinic Location:**\n\n**${CLINIC_INFO.address}**\n\n🏢 Landmark: ${CLINIC_INFO.landmark}\n\n[📌 Open in Google Maps](${CLINIC_INFO.mapsUrl})\n\nWe're easily accessible from Bansdroni, Garia & Tollygunge.`,
    quickReplies: 'main',
  },
  contact: {
    text: `📞 **Contact Aashree Health Point:**\n\n📱 **Primary:** [+91 ${CLINIC_INFO.phone1}](tel:${CLINIC_INFO.phone1})\n📱 **Alternate:** [+91 ${CLINIC_INFO.phone2}](tel:${CLINIC_INFO.phone2})\n💬 **WhatsApp:** [Chat Now](https://wa.me/${CLINIC_INFO.whatsapp})\n📧 **Email:** ${CLINIC_INFO.email}\n\nWe're happy to help with any queries!`,
    quickReplies: 'main',
  },
  back_main: {
    text: `Sure! What else can I help you with? 😊`,
    quickReplies: 'main',
  },
  fallback: {
    text: `I'm sorry, I didn't quite understand that. For detailed queries, please reach out to us directly:\n\n📱 **Call:** [+91 ${CLINIC_INFO.phone1}](tel:${CLINIC_INFO.phone1})\n💬 **WhatsApp:** [Chat Now](https://wa.me/${CLINIC_INFO.whatsapp})\n\nOr try one of these quick options:`,
    quickReplies: 'main',
  },
};

/* Simple keyword matching for free-text input */
const KEYWORD_MAP = [
  { keywords: ['time', 'timing', 'hour', 'open', 'close', 'when', 'schedule'], response: 'timings' },
  { keywords: ['test', 'lab', 'blood', 'diagnostic', 'report', 'checkup', 'cbc'], response: 'tests' },
  { keywords: ['home', 'collection', 'pickup', 'doorstep', 'sample'], response: 'home_collection' },
  { keywords: ['doctor', 'physician', 'consultation', 'consult', 'diabetes', 'sugar'], response: 'doctor' },
  { keywords: ['location', 'address', 'where', 'direction', 'map', 'find'], response: 'location' },
  { keywords: ['contact', 'phone', 'call', 'whatsapp', 'number', 'email'], response: 'contact' },
  { keywords: ['price', 'cost', 'fee', 'charge', 'rate', 'package'], response: 'tests' },
  { keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste'], response: 'welcome' },
  { keywords: ['thank', 'thanks', 'bye', 'okay'], response: 'thanks' },
];

RESPONSES.thanks = {
  text: `You're welcome! 😊 Feel free to reach out anytime. Stay healthy! 💚\n\nIf you need anything else, I'm here to help.`,
  quickReplies: 'main',
};

function matchKeywords(input) {
  const lower = input.toLowerCase().trim();
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  return 'fallback';
}

/* =========================================================================
   SIMPLE MARKDOWN-LIKE RENDERER (bold, links, line breaks)
   ========================================================================= */
function renderMessageText(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Process bold (**text**)
    const parts = [];
    let remaining = line;
    let key = 0;

    while (remaining.length > 0) {
      // Check for links [text](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
      // Check for bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

      if (linkMatch && (!boldMatch || linkMatch.index < boldMatch.index)) {
        if (linkMatch.index > 0) {
          parts.push(<span key={key++}>{remaining.slice(0, linkMatch.index)}</span>);
        }
        parts.push(
          <a 
            key={key++} 
            href={linkMatch[2]} 
            target={linkMatch[2].startsWith('tel:') || linkMatch[2].startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-hover font-semibold"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
      } else if (boldMatch) {
        if (boldMatch.index > 0) {
          parts.push(<span key={key++}>{remaining.slice(0, boldMatch.index)}</span>);
        }
        parts.push(<strong key={key++} className="font-bold text-ink">{boldMatch[1]}</strong>);
        remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      } else {
        parts.push(<span key={key++}>{remaining}</span>);
        remaining = '';
      }
    }

    if (line.trim() === '') {
      return <br key={`br-${i}`} />;
    }
    return <div key={`line-${i}`} className="leading-relaxed">{parts}</div>;
  });
}

/* =========================================================================
   CHATBOT COMPONENT
   ========================================================================= */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', responseKey: 'welcome', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addBotResponse = (responseKey) => {
    setIsTyping(true);
    // Simulate brief typing delay for natural feel
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        responseKey, 
        timestamp: new Date() 
      }]);
      setIsTyping(false);
    }, 400 + Math.random() * 400);
  };

  const handleQuickReply = (replyId) => {
    // Add user's selection as a message
    const label = [...QUICK_REPLIES.main, ...QUICK_REPLIES.tests_sub, ...QUICK_REPLIES.home_sub]
      .find(r => r.id === replyId)?.label || replyId;
    
    setMessages(prev => [...prev, { 
      type: 'user', 
      text: label, 
      timestamp: new Date() 
    }]);
    
    addBotResponse(replyId);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { 
      type: 'user', 
      text: trimmed, 
      timestamp: new Date() 
    }]);
    setInputValue('');

    const responseKey = matchKeywords(trimmed);
    addBotResponse(responseKey);
  };

  const currentQuickReplies = messages.length > 0 
    ? RESPONSES[messages[messages.length - 1].responseKey]?.quickReplies 
    : 'main';

  return (
    <>
      {/* =====================================================================
          FLOATING CHAT TRIGGER BUTTON
          ===================================================================== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-[60] w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          isOpen 
            ? 'bg-ink text-cream rotate-0 scale-95 hover:bg-ink/90' 
            : 'bg-primary text-white hover:bg-primary-dark hover:scale-110 hover:shadow-xl shadow-warm-lg'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
        style={{ 
          boxShadow: isOpen 
            ? '0 4px 20px rgba(0,0,0,0.2)' 
            : '0 4px 24px rgba(118,147,130,0.4), 0 0 0 4px rgba(118,147,130,0.1)' 
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" 
              style={{ animationDuration: '2.5s' }} 
            />
          </>
        )}
      </button>

      {/* Unread badge when closed */}
      {!isOpen && (
        <span className="fixed bottom-[4.2rem] right-4 sm:bottom-[4.8rem] z-[61] bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-coral-glow pointer-events-none animate-bounce"
          style={{ animationDuration: '2s', animationDelay: '3s' }}
        >
          1
        </span>
      )}

      {/* =====================================================================
          CHAT WINDOW
          ===================================================================== */}
      <div 
        className={`fixed z-[59] transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          bottom: '5.5rem',
          right: '1.25rem',
          width: 'min(380px, calc(100vw - 2rem))',
          height: 'min(560px, calc(100vh - 8rem))',
          transformOrigin: 'bottom right',
        }}
      >
        <div className="w-full h-full bg-cream rounded-2xl shadow-2xl border border-ink-border/60 flex flex-col overflow-hidden">
          
          {/* ─── Chat Header ─── */}
          <div className="bg-primary px-4 py-3.5 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif font-bold text-white text-sm leading-tight truncate">
                Aashree Health Point
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-white/80 font-medium">Online • Typically replies instantly</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-lg hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ─── Messages Area ─── */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 scrollbar-thin scrollbar-thumb-ink-border/30 scrollbar-track-transparent">
            
            {messages.map((msg, idx) => {
              if (msg.type === 'bot') {
                const response = RESPONSES[msg.responseKey];
                if (!response) return null;
                return (
                  <div key={idx} className="flex gap-2 items-start animate-fade-in">
                    <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="max-w-[85%] space-y-2">
                      <div className="bg-white rounded-2xl rounded-tl-md px-3.5 py-2.5 text-xs text-ink-light shadow-warm-sm border border-ink-border/40">
                        {renderMessageText(response.text)}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="flex justify-end animate-fade-in">
                    <div className="max-w-[80%] bg-primary text-white rounded-2xl rounded-tr-md px-3.5 py-2.5 text-xs shadow-warm">
                      {msg.text}
                    </div>
                  </div>
                );
              }
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-2 items-start animate-fade-in">
                <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-warm-sm border border-ink-border/40">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-ink-muted/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-ink-muted/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-ink-muted/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Reply Buttons (shown after last bot message) */}
            {!isTyping && currentQuickReplies && QUICK_REPLIES[currentQuickReplies] && (
              <div className="flex flex-wrap gap-1.5 pl-9 pt-1 animate-fade-in">
                {QUICK_REPLIES[currentQuickReplies].map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-subtle text-primary-dark text-[11px] font-semibold border border-primary/20 hover:bg-primary hover:text-white hover:border-primary active:scale-[0.95] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {reply.icon && <reply.icon className="w-3 h-3" />}
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ─── Input Area ─── */}
          <form 
            onSubmit={handleSendMessage} 
            className="shrink-0 px-3 py-2.5 border-t border-ink-border/50 bg-cream-50 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-white border border-ink-border/60 rounded-xl px-3.5 py-2.5 text-xs text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center hover:bg-accent-hover active:scale-[0.93] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-coral-glow"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* ─── Powered By Footer ─── */}
          <div className="shrink-0 px-3 py-1.5 text-center text-[9px] text-ink-muted/60 bg-cream-50 border-t border-ink-border/30">
            Aashree Health Point • Quick Assist Bot
          </div>

        </div>
      </div>
    </>
  );
}

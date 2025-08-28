import { useState } from "react";

// FAQ data
const faqs = [
  {
    id: "item-1",
    title: "What exactly does Swish Strokes do?",
    content:
      "No, you don't have to track your mood daily. You can choose to track your mood as often as you like. The app adapts to your needs and provides personalized guidance based on your recent activity.",
    icon: "💡",
  },
  {
    id: "item-2",
    title: "Do I have to track my mood manually every day?",
    content:
      "No, you don't have to track your mood daily. You can choose to track your mood as often as you like. The app adapts to your needs and provides personalized guidance based on your recent activity.",
    icon: "🎯",
  },
  {
    id: "item-3",
    title: "What happens after I pick my mood?",
    content:
      "Once you select a mood, Swish Strokes curates a personalized playlist, suggests creative tools, and offers activities tailored to your current emotional state. This helps you engage in meaningful experiences aligned with your mood.",
    icon: "🎵",
  },
  {
    id: "item-4",
    title: "Can I view my mood history?",
    content:
      "Yes, you can view your mood history at any time. The app keeps a record of your past moods, allowing you to reflect on your emotional journey over time.",
    icon: "📅",
  },
  {
    id: "item-5",
    title: "What are the challenges and tournaments?",
    content:
      "Swish Strokes offers various challenges and tournaments to encourage consistent engagement. These include daily streaks, weekly goals, and community competitions to help you stay motivated and connected.",
    icon: "🏆",
  },
  {
    id: "item-6",
    title: "Is my personal data safe?",
    content:
      "Absolutely. Swish Strokes does not collect or store any of your personal content. There are no ads, no tracking, and no third-party data sharing. Your feelings, your pace, your space.",
    icon: "🔐",
  },
  {
    id: "item-7",
    title: "Is this app built specifically for Sri Lankans?",
    content:
      "Swish Strokes is proudly developed with a local-first mindset. It's designed to suit the cultural tone, emotional needs, and preferences of Sri Lankan users—but it’s calming and helpful for anyone around the world.",
    icon: "🌍",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div id="FAQ" className="max-w-[800px] mx-auto p-6 text-white">
      <div className="space-y-4">
        {faqs.map((item) => {
          const open = openItem === item.id;
          return (
            <div
              key={item.id}
              className={`border border-white/20 rounded-lg bg-transparent transition-all duration-300 ${
                open ? "bg-white/5" : ""
              }`}
            >
              {/* Trigger */}
              <button
                onClick={() => setOpenItem(open ? null : item.id)}
                className="w-full px-4 py-3 text-left text-sm md:text-base flex items-center justify-between"
                aria-expanded={open}
                aria-controls={`panel-${item.id}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base text-[#9737ff]">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </div>

                {/* show + icon only when closed */}
                {!open && (
                  <img
                    src="/images/Button - Icon.png"
                    alt="Expand"
                    className="h-[20px] w-[20px] md:h-[28px] md:w-[28px]"
                  />
                )}
              </button>

              {/* Content */}
              <div
                id={`panel-${item.id}`}
                className={`px-4 pb-4 pt-0 text-sm text-white/80 relative transition-[max-height,opacity] duration-300 ease-out ${
                  open
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {open && (
                  <>
                    <button
                      className="absolute top-1 right-4 cursor-pointer z-10"
                      onClick={() => setOpenItem(null)}
                      aria-label="Collapse"
                    >
                      <img
                        src="/images/Button - Icon (1).png"
                        alt="Collapse"
                        className="h-[20px] w-[20px] md:h-[28px] md:w-[28px]"
                      />
                    </button>
                    <div className="pr-12">{item.content}</div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

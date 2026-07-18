import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}
const FAQ_RESPONSES: Record<string, string> = {
  courses: "We offer Noorani Qaida, Quran Reading with Tajweed, Hifz Program, Quran with Translation, Quran with Tafseer, and Islamic Studies courses. Each course is taught by certified teachers with years of experience.",
  timing: "Our classes are available 24/7 with flexible scheduling. You can choose morning, afternoon, or evening slots based on your timezone and convenience.",
  enrollment: "To enroll, click on the 'Free Trial' button and fill out the registration form. We'll contact you within 24 hours to schedule your first free class.",
  teachers: "All our teachers are certified Quran instructors with Ijazah. We have both male and female teachers available to accommodate your preferences.",
  price: "Our pricing varies by course and package. Please visit our Pricing page or contact us for detailed information about course fees.",
  contact: "You can reach us at +1 (234) 567-890 or through our Contact page. We're available 24/7 to answer your questions.",
  trial: "Yes! We offer a completely free trial class so you can experience our teaching quality before enrolling. Click 'Free Trial' to get started."
};
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const welcomeText = "As-salamu alaykum! Welcome to Mushaf Al Noor Academy. How can I help you today? Ask me about our courses, timing, enrollment, or anything else!";

  // Show welcome message with typing animation when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setShowWelcome(true);
      // Add the welcome message after animation starts
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: welcomeText,
          isBot: true,
          timestamp: new Date()
        }]);
        setShowWelcome(false);
      }, 1500);
    }
  }, [isOpen]);
  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("course") || lowerMessage.includes("class")) {
      return FAQ_RESPONSES.courses;
    }
    if (lowerMessage.includes("time") || lowerMessage.includes("schedule") || lowerMessage.includes("when")) {
      return FAQ_RESPONSES.timing;
    }
    if (lowerMessage.includes("enroll") || lowerMessage.includes("register") || lowerMessage.includes("join")) {
      return FAQ_RESPONSES.enrollment;
    }
    if (lowerMessage.includes("teacher") || lowerMessage.includes("instructor")) {
      return FAQ_RESPONSES.teachers;
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("fee")) {
      return FAQ_RESPONSES.price;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return FAQ_RESPONSES.contact;
    }
    if (lowerMessage.includes("trial") || lowerMessage.includes("free")) {
      return FAQ_RESPONSES.trial;
    }
    if (lowerMessage.includes("salam") || lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Wa alaykum as-salam! How can I assist you with your Quran learning journey today?";
    }
    return "Thank you for your question! For specific inquiries, please contact us at +1 (234) 567-890 or visit our Contact page. You can also ask me about our courses, timing, enrollment process, teachers, pricing, or free trial.";
  };
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };
  return <>
      {/* Chat Button */}
      <AnimatePresence>
      {!isOpen && <motion.div initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0,
        opacity: 0
      }} className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50">
            <Button onClick={() => setIsOpen(true)} size="icon" aria-label="Open chat" className="h-11 w-11 sm:h-12 sm:w-12 rounded-full shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90 text-primary-foreground">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </motion.div>}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} className="fixed bottom-4 left-4 right-4 sm:right-auto sm:bottom-8 sm:left-8 w-auto sm:w-[85vw] sm:max-w-[380px] h-[70vh] max-h-[520px] bg-card rounded-2xl shadow-2xl border-2 border-primary/20 z-50 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Mushaf Al Noor Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {/* Typing animation for welcome message */}
                {showWelcome && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[80%] rounded-2xl px-4 py-2.5 bg-secondary text-secondary-foreground">
                      <div className="flex items-center gap-1">
                        <motion.span
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {messages.map(message => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <motion.div
                      initial={message.isBot ? { x: -20 } : { x: 20 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.isBot ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"}`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? "opacity-60" : "opacity-80"}`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === "Enter" && handleSend()} placeholder="Type your message..." className="flex-1" />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}
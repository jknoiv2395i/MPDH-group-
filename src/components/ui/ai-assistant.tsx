import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, Mic, MicOff, Send, X, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

interface AIAssistantProps {
  className?: string
}

const MPHD_DATA = {
  company: {
    name: "MPHD Group",
    founded: 2011,
    experience_years: 14,
    vision: "Main chahti hoon ki MPHD Group India ka sabse trusted real estate partner bane, jo intelligent, legally secure aur future-ready solutions de, taaki aap apne goals confidently achieve kar sakein.",
    core_values: ["Imandari", "Transparency", "Precision", "Long-term Value"],
    usp: [
      "Pan-India operations",
      "End-to-End legal & documentation support",
      "1,300+ vendor & supplier contacts",
      "Compliance & regulatory expertise",
      "Personalized, transparent, result-oriented service",
      "Trusted by leading construction & infrastructure companies"
    ]
  },
  services: [
    {
      name: "Property Purchase, Sale ya Rent",
      description: "Main aapko personally guide karti hoon tailored property solutions ke saath – residential, commercial aur industrial assets ke liye.",
      features: [
        "Door-to-door property assistance",
        "Negotiation aur deal structuring",
        "Documentation aur legal compliance"
      ]
    },
    {
      name: "SearchRent",
      description: "Ye hamara specialized rental division hai jo tenants, homeowners aur corporates ke liye smooth experience banata hai.",
      features: [
        "Verified tenant sourcing",
        "Corporate housing partnerships",
        "Property management",
        "Rental agreements"
      ]
    },
    {
      name: "Corporate & Institutional Real Estate Solutions",
      description: "Main aapke business ke liye perfect property find karne mein help karti hoon – chahe aap startup ho ya MNC.",
      features: [
        "Office spaces",
        "Guest houses aur staff quarters",
        "Hotels, lodges, temporary housing",
        "Labour accommodations"
      ]
    },
    {
      name: "Casting Yard Installation",
      description: "Main ensure karti hoon ki aapka metro, highway ya large-scale project ke liye casting yard setup hassle-free ho.",
      features: [
        "Land identification",
        "NA (Non-Agricultural) land conversion",
        "Government approvals aur compliance",
        "Water use exemption certificate"
      ]
    },
    {
      name: "Vendor Network Access",
      description: "India bhar ke 1,300+ verified vendors tak aapka access main manage karti hoon.",
      features: [
        "Construction materials",
        "Equipment rentals",
        "Manpower services",
        "Facility management"
      ]
    },
    {
      name: "Legal Services",
      description: "Main aapke liye complete real estate legal support arrange karti hoon taaki aapka process secure ho.",
      features: [
        "Document verification & title search",
        "Property registration & stamp duty assistance",
        "Sale deeds, lease agreements, MoUs",
        "Land conversion & mutation",
        "Government approvals & NOCs",
        "Power of attorney drafting",
        "Litigation & dispute resolution"
      ]
    }
  ],
  faq: [
    {
      question: "MPHD Group kahan operate karta hai?",
      answer: "Hum Pan-India operate karte hain, chahe aap urban area mein ho ya rural area mein, main aapko assist karungi."
    },
    {
      question: "Kya aap sirf property brokerage provide karte ho?",
      answer: "Nahi ji, hum complete solutions dete hain – legal, documentation, compliance, vendor support aur strategic guidance, jisme main aapko personally guide karungi."
    },
    {
      question: "Kya MPHD Group legal disputes mein help karta hai?",
      answer: "Haan bilkul, humare legal experts aapke liye litigation support aur dispute resolution handle karte hain, aur main process simple banane ke liye aapke saath hoongi."
    },
    {
      question: "SearchRent kya hai?",
      answer: "SearchRent hamara specialized rental division hai jo tenant verification, property management aur corporate housing smoothly handle karta hai."
    },
    {
      question: "Kya aap casting yards setup karte ho?",
      answer: "Haan, hum un few companies mein se hain jo complete casting yard installation with legal compliance provide karte hain, aur main aapke project ke liye har step coordinate karungi."
    },
    {
      question: "Kya main free consultation call book kar sakta hoon?",
      answer: "Bilkul! Main khud ensure karungi ki aapko free consultation call mil sake. Bas apna naam, phone number aur preferred time batayein, main schedule karwa dungi."
    }
  ],
  contact: {
    methods: [
      "Website par enquiry form",
      "Instant query ke liye ChatBot",
      "Social media platforms",
      "Free consultation call booking"
    ],
    free_consultation: {
      description: "Mere saath ya humare expert agent ke saath free consultation call book karein taaki aapke property requirements par friendly aur professional guidance mil sake.",
      how_to_book: "Bas apna naam, phone number aur preferred time share kijiye. Main confirmation ke saath call schedule karwa dungi."
    }
  }
}

export function AIAssistant({ className }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! Main MPHD Group ki AI assistant hoon. Main aapko real estate, property services, aur hamari company ke baare mein puri jaankari de sakti hoon. Aap mujhse kuch bhi pooch sakte hain!',
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)
  const [synthesis] = useState(window.speechSynthesis)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = 'hi-IN'

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setCurrentMessage(transcript)
        setIsListening(false)
      }

      recognitionInstance.onerror = () => {
        setIsListening(false)
      }

      recognitionInstance.onend = () => {
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startListening = () => {
    if (recognition) {
      setIsListening(true)
      recognition.start()
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      setIsListening(false)
    }
  }

  const speakText = (text: string) => {
    if (synthesis) {
      synthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      
      const voices = synthesis.getVoices()
      const femaleIndianVoice = voices.find(voice => 
        voice.lang.includes('hi') || 
        voice.name.toLowerCase().includes('hindi') ||
        voice.name.toLowerCase().includes('indian') ||
        (voice.name.toLowerCase().includes('female') && voice.lang.includes('en-IN'))
      ) || voices.find(voice => voice.name.toLowerCase().includes('female'))

      if (femaleIndianVoice) {
        utterance.voice = femaleIndianVoice
      }
      
      utterance.lang = 'hi-IN'
      utterance.rate = 0.9
      utterance.pitch = 1.1
      
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      
      synthesis.speak(utterance)
    }
  }

  const generateResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase()
    
    // Company info queries
    if (lowercaseMessage.includes('company') || lowercaseMessage.includes('mphd') || lowercaseMessage.includes('group')) {
      return `MPHD Group ek 14 saal purani company hai jo 2011 mein start hui thi. ${MPHD_DATA.company.vision} Hamari core values hain: ${MPHD_DATA.company.core_values.join(', ')}. Hum Pan-India operate karte hain aur 1,300+ vendors ke saath connected hain.`
    }
    
    // Services queries
    if (lowercaseMessage.includes('service') || lowercaseMessage.includes('seva') || lowercaseMessage.includes('property')) {
      return `Hum ye main services provide karte hain:\n\n1. Property Purchase, Sale ya Rent - Main aapko personally guide karti hoon\n2. SearchRent - Specialized rental division\n3. Corporate Real Estate Solutions\n4. Casting Yard Installation\n5. Vendor Network Access\n6. Complete Legal Services\n\nKya aap kisi specific service ke baare mein jaanna chahte hain?`
    }
    
    // Legal services
    if (lowercaseMessage.includes('legal') || lowercaseMessage.includes('kanuni') || lowercaseMessage.includes('document')) {
      const legalService = MPHD_DATA.services.find(s => s.name === 'Legal Services')
      return `${legalService?.description} Hamari legal services include karti hain: ${legalService?.features.join(', ')}.`
    }
    
    // Rental services
    if (lowercaseMessage.includes('rent') || lowercaseMessage.includes('searchrent') || lowercaseMessage.includes('kiraydar')) {
      const rentalService = MPHD_DATA.services.find(s => s.name === 'SearchRent')
      return `${rentalService?.description} SearchRent ke features: ${rentalService?.features.join(', ')}.`
    }
    
    // FAQ responses
    for (const faq of MPHD_DATA.faq) {
      if (lowercaseMessage.includes(faq.question.toLowerCase().slice(0, 10))) {
        return faq.answer
      }
    }
    
    // Contact and consultation
    if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('consultation') || lowercaseMessage.includes('call') || lowercaseMessage.includes('phone')) {
      return `${MPHD_DATA.contact.free_consultation.description} ${MPHD_DATA.contact.free_consultation.how_to_book} Main aapke liye arrange kar dungi!`
    }
    
    // Default response
    return `Main aapko MPHD Group ke baare mein puri jaankari de sakti hoon. Aap pooch sakte hain:\n- Hamari services ke baare mein\n- Legal aur documentation support\n- Property buying/selling/renting\n- Corporate solutions\n- Free consultation booking\n- SearchRent ke baare mein\n\nKya specific kuch jaanna chahte hain?`
  }

  const sendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    }

    const assistantResponse = generateResponse(currentMessage)
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: assistantResponse,
      sender: 'assistant',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage, assistantMessage])
    speakText(assistantResponse)
    setCurrentMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-200"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm">AI Assistant</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold">MPHD AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg text-sm",
                    message.sender === 'user'
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {message.sender === 'assistant' && (
                    <button
                      onClick={() => speakText(message.text)}
                      className="mt-2 text-gray-600 hover:text-gray-800"
                      disabled={isSpeaking}
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Apna sawal likhiye..."
                  className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  rows={1}
                />
              </div>
              
              <button
                onClick={isListening ? stopListening : startListening}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isListening 
                    ? "bg-red-500 text-white" 
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                )}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              
              <button
                onClick={sendMessage}
                disabled={!currentMessage.trim()}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { DM_Sans } from "next/font/google"
import { LucideSend } from "lucide-react"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export default function AIAssistant() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessage = { sender: "user", text: input.trim() }
    setMessages([...messages, newMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      })

      const data = await response.json()
      const aiMessage = { sender: "ai", text: data.response || "I'm still processing your request." }
      setMessages((prevMessages) => [...prevMessages, aiMessage])
    } catch (error) {
      const errorMessage = { sender: "ai", text: "Something went wrong. Try again later." }
      setMessages((prevMessages) => [...prevMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`${dmSans.className} min-h-screen flex items-center justify-center bg-blue-50 px-6`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-blue-100"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="bg-blue-500 text-white p-5 flex items-center space-x-4 rounded-t-2xl"
        >
          <div className="relative w-14 h-14">
            <Image src="/images/bot.png" alt="AI Avatar" layout="fill" className="rounded-full" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Lily, Your AI Tutor</h1>
            <p className="text-sm text-blue-100">Powered by Gemini</p>
          </div>
        </motion.div>

        {/* Chat messages */}
        <div className="h-[60vh] overflow-y-auto p-6 space-y-4 bg-blue-50">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-xl shadow ${
                    msg.sender === "ai"
                      ? "bg-blue-500 text-white rounded-bl-none"
                      : "bg-blue-200 text-blue-900 rounded-br-none"
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start items-center space-x-2"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.2 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.4 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="p-6 bg-white border-t border-blue-100"
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="w-full p-4 bg-white rounded-full border border-blue-300 focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-gray-400 pr-14 shadow-sm"
              placeholder="Type your message..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full text-white transition hover:bg-blue-600"
              disabled={isLoading}
            >
              <LucideSend className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
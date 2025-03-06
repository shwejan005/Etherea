"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#1E293B] rounded-xl overflow-hidden shadow-xl"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="bg-blue-600 p-4 flex items-center space-x-4 rounded-t-xl"
        >
          <div className="relative w-12 h-12">
            <Image src="/images/bot.png" alt="AI Avatar" layout="fill" className="rounded-full" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Lily, Your AI Assistant</h1>
            <p className="text-gray-200 text-sm">Powered by AI</p>
          </div>
        </motion.div>

        {/* Chat messages */}
        <div className="h-[55vh] overflow-y-auto p-6 space-y-4">
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
                  className={`max-w-[75%] px-4 py-3 rounded-lg ${
                    msg.sender === "ai" ? "bg-blue-600 text-white" : "bg-[#334155] text-white"
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
                className="w-2 h-2 bg-blue-600 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.2 }}
                className="w-2 h-2 bg-blue-600 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.4 }}
                className="w-2 h-2 bg-blue-600 rounded-full"
              />
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input section */}
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="p-6 bg-[#1E293B] border-t border-blue-600"
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="w-full p-4 bg-[#1E293B] rounded-full border border-blue-600 focus:ring-2 focus:ring-blue-600 text-white placeholder-gray-400 pr-24"
              placeholder="Type your message..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="absolute right-2 top-2 bg-blue-600 px-6 py-2 rounded-full font-medium text-white transition-colors hover:bg-blue-500"
              disabled={isLoading}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
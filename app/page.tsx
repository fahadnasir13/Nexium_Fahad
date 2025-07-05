'use client'

import { useState } from "react"
import { quotes } from "@/data/quotes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const topics = ["success", "life", "motivation"]

export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setResults([])

    if (!topic.trim()) {
      setError("Please enter a topic.")
      return
    }

    setLoading(true)
    setTimeout(() => {
      const matched = quotes
        .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
        .slice(0, 5)
        .map(q => q.quote)

      setResults(matched.length ? matched : ['No quotes found for this topic.'])
      setLoading(false)
    }, 700)
  }

  const handleTagClick = (tag: string) => {
    setTopic(tag)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gradient-to-tr from-indigo-100 to-pink-100">
      <div className="w-full max-w-2xl mt-12">
        <h1 className="text-4xl font-bold text-center mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-purple-600" /> Quote Generator
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Click a tag or enter a topic (e.g., life, success, motivation)
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {topics.map((t) => (
            <Badge
              key={t}
              onClick={() => handleTagClick(t)}
              className="cursor-pointer capitalize transition hover:scale-105 hover:bg-purple-200"
            >
              {t}
            </Badge>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            placeholder="Enter a topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button type="submit">Get</Button>
        </form>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

        <div className="mt-8 space-y-4">
          {loading ? (
            <p className="text-center text-gray-500 animate-pulse">Loading quotes...</p>
          ) : (
            results.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-4 shadow-lg hover:shadow-xl transition relative bg-white backdrop-blur-md border-l-4 border-purple-400">
                  <p className="text-gray-800 italic mb-2">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(quote)}
                    className="absolute top-2 right-2 text-xs"
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

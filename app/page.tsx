"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Quote, Search, Sparkles, RefreshCw, Moon, Sun, Heart, Copy, Share2 } from "lucide-react"
import { quotesDatabase } from "@/lib/quotes-data"

interface QuoteItem {
  text: string
  author: string
  category: string
}

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("")
  const [quotes, setQuotes] = useState<QuoteItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const generateQuotes = async () => {
    if (!topic.trim()) return

    setIsLoading(true)
    setHasSearched(true)

    // Simulate API delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1200))

    const searchTerm = topic.toLowerCase().trim()

    // Filter quotes by topic/category
    const filteredQuotes = quotesDatabase.filter(
      (quote) =>
        quote.category.toLowerCase().includes(searchTerm) ||
        quote.text.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm),
    )

    // If no direct matches, show random quotes from general categories
    const finalQuotes =
      filteredQuotes.length >= 3
        ? filteredQuotes.slice(0, 3)
        : [
            ...filteredQuotes,
            ...quotesDatabase.filter(
              (q) => q.category === "motivation" || q.category === "success" || q.category === "life",
            ),
          ].slice(0, 3)

    // Shuffle and select 3 quotes
    const shuffled = finalQuotes.sort(() => 0.5 - Math.random())
    setQuotes(shuffled.slice(0, 3))
    setIsLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateQuotes()
  }

  const regenerateQuotes = () => {
    if (topic.trim()) {
      generateQuotes()
    }
  }

  const copyQuote = (quote: QuoteItem) => {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Dark Mode Toggle */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <div></div> {/* Spacer */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                Quote Generator
              </h1>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="h-12 w-12 rounded-full border-2 hover:scale-110 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-slate-700" />}
            </Button>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring quotes tailored to your interests. Enter any topic and get three carefully curated quotes
            to motivate and inspire your journey.
          </p>
        </div>

        {/* Enhanced Search Form */}
        <Card className="mb-12 shadow-2xl border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <CardHeader className="relative text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-slate-800 dark:text-white">
              <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Find Your Inspiration
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
              Enter a topic, theme, or keyword to discover relevant quotes
            </CardDescription>
          </CardHeader>
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="topic" className="text-base font-semibold text-slate-700 dark:text-slate-300">
                  Topic or Theme
                </Label>
                <div className="relative">
                  <Input
                    id="topic"
                    type="text"
                    placeholder="e.g., success, motivation, leadership, love, wisdom..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="h-14 text-lg px-6 bg-white/70 dark:bg-slate-700/70 border-2 border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300"
                    disabled={isLoading}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="h-5 w-5 text-blue-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={!topic.trim() || isLoading}
                  className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-3 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-3 h-5 w-5" />
                      Generate Quotes
                    </>
                  )}
                </Button>
                {hasSearched && !isLoading && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={regenerateQuotes}
                    className="h-14 px-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl transition-all duration-300"
                  >
                    <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Loading State */}
        {isLoading && (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="animate-pulse shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <CardContent className="relative p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-xl"></div>
                      <div className="w-16 h-6 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-lg w-3/4"></div>
                      <div className="h-4 bg-blue-100 dark:bg-blue-900 rounded w-full"></div>
                      <div className="h-4 bg-blue-100 dark:bg-blue-900 rounded w-5/6"></div>
                      <div className="h-4 bg-blue-100 dark:bg-blue-900 rounded w-2/3"></div>
                    </div>
                    <Separator className="bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-700" />
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-blue-200 dark:bg-blue-800 rounded w-1/3"></div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Enhanced Quotes Display */}
        {!isLoading && quotes.length > 0 && (
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Quotes about "{topic}"
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Here are {quotes.length} inspiring quotes for you
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {quotes.map((quote, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl shadow-xl hover:-translate-y-2 overflow-hidden"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="relative p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl shadow-lg">
                        <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1 text-sm font-semibold shadow-lg">
                        #{index + 1}
                      </Badge>
                    </div>

                    <div className="flex-1 space-y-6">
                      <blockquote className="text-xl leading-relaxed font-medium text-slate-800 dark:text-slate-200 italic relative">
                        <span className="text-6xl text-blue-200 dark:text-blue-800 absolute -top-4 -left-2 font-serif">
                          "
                        </span>
                        <span className="relative z-10">{quote.text}</span>
                        <span className="text-6xl text-blue-200 dark:text-blue-800 absolute -bottom-8 -right-2 font-serif">
                          "
                        </span>
                      </blockquote>

                      <div className="space-y-4">
                        <Separator className="bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-700" />

                        <div className="flex items-center justify-between">
                          <cite className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent not-italic">
                            — {quote.author}
                          </cite>
                          <Badge
                            variant="outline"
                            className="border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-300 px-3 py-1"
                          >
                            {quote.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-6 border-t border-blue-100 dark:border-blue-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyQuote(quote)}
                        className="hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110"
                      >
                        <Copy className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-all duration-300 hover:scale-110"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-green-50 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all duration-300 hover:scale-110"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced No Results State */}
        {!isLoading && hasSearched && quotes.length === 0 && (
          <Card className="text-center py-16 shadow-2xl border-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <CardContent className="relative">
              <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-xl">
                <Quote className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                No Quotes Found
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                Try searching for a different topic or theme like success, motivation, or wisdom
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setTopic("")
                  setHasSearched(false)
                }}
                className="border-2 border-blue-200 hover:border-blue-500 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:hover:border-blue-400 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/30 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Enhanced Footer */}
        <div className="text-center mt-16 pt-12 border-t border-blue-200 dark:border-blue-800">
          <div className="inline-flex items-center gap-2 mb-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm shadow-lg">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover wisdom from great minds across history and cultures
            </p>
            <Sparkles className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-slate-500 dark:text-slate-400">Let inspiring quotes guide your journey to success</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

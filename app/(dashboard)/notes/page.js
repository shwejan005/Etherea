"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StickyNote, ExternalLink, Plus, Search, Settings, Menu } from 'lucide-react'

export default function NotesPage() {
  const [isHovering, setIsHovering] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Recent Notes</h2>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Miro Board Card */}
          <Link 
            href="https://miro.com/app/board/uXjVL7k1J6o=/"
            target="_blank"
            className="block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Card className={`h-full transition-all duration-300 ${isHovering ? 'shadow-lg transform -translate-y-1 border-blue-500' : 'shadow border-transparent'}`}>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Project Notes</span>
                  <ExternalLink className={`h-4 w-4 text-blue-500 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
                </CardTitle>
                <CardDescription>Collaborative whiteboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
                  <StickyNote className="h-12 w-12 text-blue-500" />
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Access your Miro board with all project notes and diagrams
                </p>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                Last edited: Today at 10:30 AM
              </CardFooter>
            </Card>
          </Link>

          {/* Sample Notes */}
          {[
            { title: "Meeting Notes", desc: "Team sync discussion points", date: "Yesterday" },
            { title: "Ideas", desc: "New feature brainstorming", date: "2 days ago" }
          ].map((note, i) => (
            <Card key={i} className="h-full shadow hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle>{note.title}</CardTitle>
                <CardDescription>{note.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md"></div>
                <p className="mt-4 text-sm text-gray-600">
                  {i === 0 ? 'Discussion points from our weekly team meeting' : 'Collection of ideas for the upcoming release'}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                Last edited: {note.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LucideArrowRight, LucideBrain } from 'lucide-react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'

const dmSans = DM_Sans({
  subsets: ['latin']
})


const Header = async () => {

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 text-white p-2 rounded-lg">
          <LucideBrain className="h-6 w-6" />
        </div>
        <span className="text-xl font-bold text-blue-500">Etherea</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/ai" className="text-blue-950 hover:text-blue-500 transition-colors">
          AI Chat
        </Link>
        <Link href="/notes" className="text-blue-950 hover:text-blue-500 transition-colors">
          Notes
        </Link>
        <Link href="#" className="text-blue-950 hover:text-blue-500 transition-colors">
          About
        </Link>
        <Link href="#" className="text-blue-950 hover:text-blue-500 transition-colors">
          Contact
        </Link>
      </nav>

      <SignedOut>
        <SignInButton>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            Get Started
            <LucideArrowRight className="h-4 w-4" />
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </header>
  )
}

export default Header
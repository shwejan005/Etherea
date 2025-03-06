import React from 'react'
import ModeToggle from '../ModeToggle' 
import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link' 
import { Button } from './button' 
import UserMenu from './user-menu' 
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin']
})


const Header = async () => {

  return (
    <header className={`px-4 mb-8 border-b border-primary/20`}>

      <nav className='py-6 px-6 flex justify-between items-center'>
        <Link href='/' className={`${dmSans.className} text-2xl`}>
          ETHEREA
        </Link>

        <div className='flex items-center justify-center gap-4'>
          <ModeToggle />
          
          <SignedOut>
            <SignInButton forceRedirectUrl='/onboarding'>
              <Button>
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>

      </nav>
    </header>
  )
}

export default Header
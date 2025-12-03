"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "./ToggleTheme";
export default function AppBar() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 absolute top-0 left-0 w-full  text-white z-50 px-20">
      <span>Uptime</span>
      <div className="flex gap-4 justify-center items-center">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

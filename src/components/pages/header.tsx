"use client";

// import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-4 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">GymPro</span>
          </Link>
          <div className="flex items-center space-x-8 ">
            <Link
              href="#features"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link href="/sign-in" passHref>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-orange-500"
              >
                Login
              </Button>
            </Link>
            <Link href="/sign-up" passHref>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

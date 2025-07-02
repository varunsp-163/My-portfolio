
'use client'
import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "motion/react";


const HeroSection = () => {
    const { setTheme } = useTheme()
    return (
        <>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="h-[40rem] w-full rounded-md dark:bg-neutral-950 bg-white relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "none" }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 py-4 text-center text-5xl font-bold tracking-tighter md:text-6xl lg:text-8xl"
                    >
                        Hello, I am <br />{" "}
                        <AuroraText speed={2}>Varun S P</AuroraText> {" "} 👋
                    </motion.h1>

                </div>
                <BackgroundBeams />
            </div>
        </>
    )
}

export default HeroSection

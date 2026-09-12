"use client";
import Navbar from "@/components/navbar";
import { AlgorithmCards } from "./components/algorithm-cards";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric-grid bg-grid-size opacity-10 pointer-events-none"></div>
      <Navbar title="Advanced DSA Canvas"/>
      <header className="border-b-2 border-foreground bg-background text-foreground relative z-10">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase">
            Algorithm Visualizer
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl font-medium">
            Interactive structural visualizations for dynamic programming, sliding windows, and complex graph traversals.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-16 px-4 relative z-10">
        <AlgorithmCards />
      </main>
      <Footer/>
    </div>
  )
}
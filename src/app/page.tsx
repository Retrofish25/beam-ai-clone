"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        {/* ... demás secciones limpias ... */}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/90 via-blue-900/20 to-slate-900/90 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">meduzia</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/agentes" className="text-gray-300 hover:text-white transition-colors">
              Agentes
            </Link>
            <Link href="/soluciones" className="text-gray-300 hover:text-white transition-colors">
              Soluciones
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5491172389359"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" className="text-white">
                Solicitar Demo
              </Button>
            </a>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1 md:hidden">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="pt-24 pb-16 relative overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 beam-grid opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-8 ${
            isIntersecting ? "animate-fade-in-up" : ""
          }`}
        >
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Nuevo Lanzamiento
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ecosistema de Agentes
            <br />
            que operan y escalan por vos
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            La plataforma de agentes más avanzada para automatizar procesos de
            negocio. Meduzia revoluciona tu marketing, publicidad, ventas y
            atención al cliente a través de Agentes IA que operan de manera
            continua, reducen costos y mejoran la productividad.
          </p>
          <a
            href="https://wa.me/5491172389359"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-3 text-lg animate-glow hover-glow"
            >
              Solicitar Demo
            </Button>
          </a>
        </div>

        <div className="gradient-card glass-border rounded-2xl p-8 max-w-5xl mx-auto mt-16">
          {/* … contenido del video … */}
        </div>
      </div>
    </section>
  );
}

// … Sigue limpiando cada sección igual: elimina <<<<<<<, =======, >>>>>>>,
// quita duplicados y ajusta indentación para que quede un solo bloque por componente.


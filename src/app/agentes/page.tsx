"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FloatingParticles } from "@/components/FloatingParticles";
import Link from "next/link";

export default function AgentesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AgentsGallery />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/90 via-blue-900/20 to-slate-900/90 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            meduzia
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href="/agentes"
              className="text-blue-400 border-b-2 border-blue-400"
            >
              Agentes
            </Link>
            <Link
              href="/soluciones"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Soluciones
            </Link>
            <Link
              href="/contacto"
              className="text-gray-300 hover:text-white transition-colors"
            >
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
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
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
            Galería de Agentes
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Agentes de AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Colección completa de agentes de inteligencia artificial
            especializados. Cada agente está diseñado para automatizar tareas
            específicas y optimizar tu flujo de trabajo.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-3 text-lg animate-glow hover-glow mr-4"
            >
              ← Volver al Inicio
            </Button>
          </Link>
          <a
            href="https://wa.me/5491172389359"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg"
            >
              Solicitar Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function AgentsGallery() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const agents = [
    /* ... tu array de agentes ... */
    {
      title: "Agente de Data Analytics",
      category: "Análisis de Datos",
      description:
        "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: [
        "Procesamiento de datos",
        "Identificación de patrones",
        "Generación de insights",
        "Visualización automática",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"],
    },
    {
      title: "Agente de Facturación Inteligente",
      category: "Finanzas y Administración",
      description:
        "Genera facturas automáticamente, valida datos y gestiona cobros con integración contable.",
      workflows: [
        "Generación automática de facturas",
        "Validación de datos de clientes y montos",
        "Seguimiento de pagos y vencimientos",
        "Envío automático por email o API",
      ],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Facturación", "Pagos", "Cobros"],
    },
  ];

  return (
    <section ref={ref} className="py-20 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${
            isIntersecting ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Catálogo Completo de Agentes
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Más de 18 agentes especializados listos para transformar tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={`gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 hover-lift transition-all group cursor-pointer relative overflow-hidden ${
                isIntersecting ? "animate-slide-in-up" : ""
              }`}
              style={{ animationDelay: `${0.1 * (index % 6)}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${agent.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
              <CardContent className="p-0 relative z-10">
                {/* ... contenido interno de la tarjeta ... */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 border-t border-white/10 relative hero-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center ${
            isIntersecting ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿No encuentras el agente perfecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Creamos agentes personalizados para tus necesidades específicas.
            Nuestro equipo puede desarrollar la solución exacta que tu negocio
            requiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-3 text-lg animate-glow hover-glow"
            >
              Solicitar Agente Personalizado
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg"
            >
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <Link href="/" className="text-2xl font-bold text-white">
            meduzia
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="/agentes" className="text-gray-400 hover:text-white transition-colors">
            Agentes
          </Link>
          <Link
            href="/soluciones"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Soluciones
          </Link>
          <Link
            href="/contacto"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© Meduzia AI. Todos los derechos reservados 2025</p>
          <p className="mt-4 md:mt-0">Revolucionando el futuro de los negocios</p>
        </div>
      </div>
    </footer>
  );
}


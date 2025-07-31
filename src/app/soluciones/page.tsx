"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FloatingParticles } from "@/components/FloatingParticles";
import Link from "next/link";
import { useState } from "react";

interface SolutionData {
  industry: string;
  icon: string;
  problem: string;
  solution: string;
  agents: string[];
  benefits: string[];
  image: string;
  color: string;
}

export default function SolucionesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <IndustrySolutions />
        <TransformationMetrics />
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
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-white">
              meduzia
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href="/agentes"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agentes
            </Link>
            <Link
              href="/soluciones"
              className="text-blue-400 border-b-2 border-blue-400"
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
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
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
      <div className="absolute inset-0 beam-grid opacity-30"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-8 ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Soluciones por Industria
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <br />
            Industrias Completas
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Descubre cómo nuestros agentes de IA están revolucionando sectores
            enteros, optimizando procesos complejos y creando ventajas
            competitivas sostenibles en las industrias más exigentes del mundo.
          </p>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const solutions = [
    {
      industry: "Banca y Finanzas",
      icon: "",
      problem:
        "Procesos manuales lentos, alto riesgo de fraude y evaluación crediticia inconsistente",
      solution:
        "Combinación de agentes para análisis de riesgo, detección de fraude y automatización de procesos",
      agents: [
        "Risk Assessment AI",
        "Fraud Detection AI",
        "Document Processing AI",
      ],
      benefits: [
        "Reducción del 75% en tiempo de aprobación",
        "99.2% precisión en detección de fraude",
        "ROI del 340% en primer año",
      ],
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&auto=format",
      color: "from-emerald-500/20 to-blue-500/20",
    },
    {
      industry: "Salud y Medicina",
      icon: "",
      problem:
        "Gestión ineficiente de pacientes, diagnósticos tardíos y sobrecarga administrativa",
      solution:
        "Ecosystem de agentes para gestión de pacientes, análisis diagnóstico y automatización administrativa",
      agents: [
        "Patient Management AI",
        "Diagnostic Support AI",
        "Scheduling AI",
      ],
      benefits: [
        "Reducción del 60% en tiempo de diagnóstico",
        "95% satisfacción del paciente",
        "50% menos carga administrativa",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop&auto=format",
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      industry: "Retail y E-commerce",
      icon: "",
      problem:
        "Gestión de inventario compleja, atención al cliente 24/7 y personalización a escala",
      solution:
        "Suite de agentes para inventario inteligente, soporte multicanal y recomendaciones personalizadas",
      agents: [
        "Inventory Management AI",
        "Customer Service AI",
        "Recommendation AI",
      ],
      benefits: [
        "Reducción del 40% en stock muerto",
        "Disponibilidad 24/7",
        "Aumento del 65% en conversión",
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&auto=format",
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      industry: "Manufactura Industrial",
      icon: "",
      problem:
        "Fallos de equipo impredecibles, control de calidad manual y planificación de mantenimiento reactiva",
      solution:
        "Red de agentes para mantenimiento predictivo, control de calidad automático y optimización de producción",
      agents: [
        "Predictive Maintenance AI",
        "Quality Control AI",
        "Production Optimization AI",
      ],
      benefits: [
        "Reducción del 85% en downtime",
        "99.8% calidad del producto",
        "30% aumento en eficiencia",
      ],

      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&auto=format",
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      industry: "Recursos Humanos",
      icon: "",
      problem:
        "Procesos de reclutamiento lentos, sesgo en selección y gestión manual de empleados",
      solution:
        "Plataforma de agentes para reclutamiento inteligente, onboarding automático y gestión de talento",
      agents: [
        "Resume Screening AI",
        "Interview Scheduling AI",
        "Performance Analysis AI",
      ],
      benefits: [
        "Reducción del 70% en tiempo de contratación",
        "Eliminación del sesgo",
        "90% retención de talento",
      ],

      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop&auto=format",
      color: "from-teal-500/20 to-cyan-500/20",
    },
    {
      industry: "Legal y Compliance",
      icon: "",
      problem:
        "Revisión manual de documentos, compliance complejo y análisis de contratos tiempo-intensivo",
      solution:
        "Sistema de agentes para análisis legal automático, compliance monitoring y gestión de documentos",
      agents: [
        "Legal Document AI",
        "Compliance Monitor AI",
        "Contract Analysis AI",
      ],
      benefits: [
        "Reducción del 80% en tiempo de revisión",
        "100% compliance",
        "Ahorro del 60% en costos legales",
      ],

      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&auto=format",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      industry: "Logística y Transporte",
      icon: "",
      problem:
        "Optimización de rutas manual, gestión de flota ineficiente y seguimiento limitado",
      solution:
        "Ecosystem de agentes para optimización de rutas, gestión de flota y seguimiento en tiempo real",
      agents: ["Route Optimization AI", "Fleet Management AI", "Tracking AI"],
      benefits: [
        "Reducción del 45% en costos de combustible",
        "95% entrega a tiempo",
        "50% menos emisiones",
      ],

      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop&auto=format",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      industry: "Inmobiliario",
      icon: "",
      problem:
        "Gestión de propiedades manual, valoraciones inconsistentes y atención al cliente limitada",
      solution:
        "Plataforma de agentes para gestión de propiedades, valoración automática y atención 24/7",
      agents: ["Property Management AI", "Valuation AI", "Customer Service AI"],
      benefits: [
        "Reducción del 65% en tiempo de gestión",
        "Valoraciones 90% más precisas",
        "Satisfacción del 92%",
      ],

      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&auto=format",
      color: "from-rose-500/20 to-pink-500/20",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluciones que Transforman Industrias
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Cada industria tiene desafíos únicos. Nuestros agentes trabajan en
            conjunto para crear soluciones completas que revolucionan sectores
            enteros.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  index,
  isVisible,
}: { solution: SolutionData; index: number; isVisible: boolean }) {
  const isEven = index % 2 === 0;
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${isIntersecting ? "animate-slide-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      {/* Image Section */}
      <div
        className={`lg:w-1/2 ${isIntersecting ? (isEven ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"}`}
        style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
      >
        <Card className="gradient-card glass-border bg-transparent border-white/10 hover-lift group overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-50`}
            ></div>
            <img
              src={solution.image}
              alt={solution.industry}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <div className="text-4xl bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                {solution.icon}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Content Section */}
      <div
        className={`lg:w-1/2 space-y-6 ${isIntersecting ? (isEven ? "animate-slide-in-right" : "animate-slide-in-left") : "opacity-0"}`}
        style={{ animationDelay: `${0.4 + 0.1 * index}s` }}
      >
        <div>
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            {solution.industry}
          </Badge>
          <h3 className="text-3xl font-bold text-white mb-4">
            Transformación Digital Completa
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-2">
              Desafío Actual
            </h4>
            <p className="text-gray-300 leading-relaxed">{solution.problem}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-2">
              Nuestra Solución
            </h4>
            <p className="text-gray-300 leading-relaxed mb-3">
              {solution.solution}
            </p>
            <div className="flex flex-wrap gap-2">
              {solution.agents.map((agent, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-xs border-blue-500/30 text-blue-300"
                >
                  {agent}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              Resultados Comprobados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {solution.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
                >
                  <p className="text-white text-sm font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransformationMetrics() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const metrics = [
    { value: "8", label: "Industrias Transformadas", icon: "" },
    { value: "500+", label: "Empresas Implementadas", icon: "" },
    { value: "75%", label: "Promedio Reducción Costos", icon: "" },
    { value: "24/7", label: "Operación Continua", icon: "" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 border-t border-white/10 relative hero-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impacto Medible en Cada Sector
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Nuestras soluciones entregan resultados consistentes y medibles en
            todas las industrias donde operamos.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className={`gradient-card glass-border bg-transparent border-white/10 hover-lift p-8 text-center ${
                isIntersecting ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <p className="text-gray-300">{metric.label}</p>
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
      className="py-20 border-t border-white/10 relative section-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para ser la transformación de la industria?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Cada día que esperas es una ventaja competitiva que perdés. Comienza
            tu transformación digital hoy mismo con nuestros agentes
            especializados.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white mb-4 inline-block"
          >
            meduzia
          </Link>
          <p className="text-gray-400 mb-8">
            Transformando industrias con inteligencia artificial
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/agentes"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Agentes
            </Link>
            <Link href="/soluciones" className="text-blue-400">
              Soluciones
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-400 text-sm mt-8">
          <p>© Meduzia AI. Todos los derechos reservados 2025</p>
          <p className="mt-4 md:mt-0">
            Revolucionando el futuro de los negocios
          </p>
        </div>
      </div>
    </footer>
  );
}

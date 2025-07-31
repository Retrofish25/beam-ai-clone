"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FloatingParticles } from "@/components/FloatingParticles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AIAgentsSection />
        <WorkflowsSection />
        <BenefitsSection />
        <AgentOSSection />
        <NewsSection />
        <CTASection />
        <FAQSection />
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
            <div className="text-2xl font-bold text-white">meduzia</div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8">
            <a
              href="/agentes"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agentes
            </a>
            <a
              href="/soluciones"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Soluciones
            </a>
            <a
              href="/contacto"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contacto
            </a>
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
            Nuevo Lanzamiento
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ecosistema de Agentes
            <br />
            que operan y escalan por vos
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            La plataforma de agentes más avanzada para automatizar procesos de
            negocio. Meduzia revoluciona su marketing, publicidad, ventas y
            atención al cliente a través de Agentes IA que opreran de manera
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
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/duxhjhuma/image/upload/v1690000000/tu-thumbnail.jpg" // opcional
            >
              <source
                src="https://res.cloudinary.com/duxhjhuma/video/upload/f_mp4/background01_kbkk8s.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta la reproducción de video.
            </video>
            {/* Degradado interior opcional */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0f2b] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AIAgentsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
      setCurrentIndex(Math.min(agents.length - visibleCards, currentIndex + 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // approximate card width including gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const agents = [
    {
      title: "Generación de Contenido Viral",
      category: "Marketing y Publicidad",
      workflows: [
        "Tendencias virales",
        "Identificación de patrones y lenguajes",
        "Creación de contenido",
      ],
      image: "https://i.imgur.com/4bwCpVg.png",
    },
    {
      title: "Agente de Meta Ads",
      category: "Marketing y Publicidad",
      workflows: [
        "Automatización de campañas",
        "Creación de contenido con testeos en vivo",
        "Evaluación continua de performance",
        "escalado automático de anuncios ganadores",
      ],
      image: "https://i.imgur.com/ym41Mva.png",
    },
    {
      title: "Agentes Conversacionales",
      category: "Whatsapp y Llamadas",
      workflows: [
        "Atención automatizada vía WhatsApp y llamadas",
        "Seguimiento de leads y clientes",
        "Integración con CRM y workflows de negocio",
        "Reuniones, envíos o pagos",
      ],
      image: "https://i.imgur.com/qP4yLJo.png",
    },
    {
      title: "Automatización de Ventas",
      category: "Gestión de Clientes",
      workflows: [
        "Seguimiento automático de leads",
        "Priorización por scoring inteligente",
        "Integración con CRM y workflows de negocio",
        "Recomendaciones de acción según comportamiento",
      ],
      image: "https://i.imgur.com/xQoB4mr.png",
    },
    {
      title: "Analisis de Competencia",
      category: "Data",
      workflows: [
        "Monitoreo constante de competidores clave",
        "Comparación automatizada de precios, contenido y productos",
        "Detección de cambios en estrategias de marketing y posicionamiento",
        "Reportes periódicos con alertas de oportunidades",
      ],
      image: "https://i.imgur.com/kKZX3Pc.png",
    },
    {
      title: "Agente de Community Management",
      category: "Instagram, Tiktok, Youtube, Linkedin",
      workflows: [
        "Publicación en múltiples redes sociales",
        "Gestión automática de comentarios y mensajes",
        "Curación de contenido relevante para la comunidad",
      ],
      image: "https://i.imgur.com/5f1A8ui.png",
    },
    {
      title: "CRM Inteligente",
      category: "Gestión",
      workflows: [
        "Registro automático de interacciones multicanal",
        "Scoring dinámico de leads y clientes",
        "Seguimiento automatizado por etapa del funnel",
        "Sincronización con agentes de ventas, marketing y atención",
      ],
      image: "https://i.imgur.com/ZUsVwbD.png",
    },
    {
      title: "Prospección por Google Maps",
      category: "Ventas y Compras",
      workflows: [
        "Búsqueda automatizada de negocios o perfiles en zonas específicas",
        "Extracción de información clave",
        "Enriquecimiento de datos con otras fuentes públicas",
      ],
      image: "https://i.imgur.com/pcHrdrw.png",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Agentes IA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agentes IA
            <br />
            que superan el rendimiento humano
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Nuestros agentes automatizan tareas con eficiencia. Operan de forma
            continua aumentando la productividad y reduciendo errores.
            Permitiendo que los negocios escalen rápidamente sin costos
            adicionales en recursos humanos.
          </p>

          <Link href="/agentes">
            <Button className="gradient-primary text-white hover-glow">
              Ver todos los Agentes
            </Button>
          </Link>
        </div>
        <div
          className={`relative ${isIntersecting ? "animate-slide-in-up" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-white hover:bg-blue-600/30 hover-glow transition-all -ml-6"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-white hover:bg-blue-600/30 hover-glow transition-all -mr-6"
          >
            →
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {agents.map((agent, index) => (
              <Card
                key={index}
                className="gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 hover-lift transition-all flex-shrink-0 w-80 md:w-96 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105"
                  style={{ backgroundImage: `url(${agent.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <CardContent className="p-0 relative z-10">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-full"></div>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm">
                      {agent.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
                      {agent.title}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-300 uppercase tracking-wider font-medium drop-shadow">
                        workflows
                      </p>
                      {agent.workflows.map((workflow, idx) => (
                        <p key={idx} className="text-gray-200 drop-shadow">
                          {workflow}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({
              length: Math.max(1, agents.length - visibleCards + 1),
            }).map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`carousel-indicator ${
                  index === currentIndex ? "active" : "inactive"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const workflows = [
    {
      title: "Marketing Automatizado",
      category: "Marketing y Publicidad",
      description:
        "Automatizá todo tu flujo de trabajo de marketing con agentes de IA que crean lenguajes y contenido en múltiples canales para maximizar el alcance y la conversión.",
      actions: [
        "Busqueda de contenido en tendencia en RRSS",
        "Crear contenido con distintos ángulos de venta inspirado en lenguaje viral.",
        "Monitorear métricas de rendimiento y ajustar la estrategia en tiempo real.",
        "Probar variaciones creativas (copy, visuales, formatos) para detectar lo que mejor funciona.",
      ],
      icon: "https://i.imgur.com/kc4PAj7.png",
    },
    {
      title: "Atención al Cliente",
      category: "Ventas y Posventa",
      description:
        "Gestioná consultas de clientes de forma eficiente con agentes de IA que brindan respuestas rápidas y resuelven incidencias comunes sin intervención humana.",
      actions: [
        "Analizar el contenido de la consulta del cliente y aplicar reglas, contexto e información disponible para generar una respuesta adecuada.",
        "Enviar automáticamente la respuesta generada al cliente por el canal correspondiente.",
        "Encontrar nuevos insights, generar reportes en tiempo real, optimizar respuestas y derivar consultas a superiores.",
      ],
      icon: "https://ext.same-assets.com/2264316469/1242082632.png",
    },
    {
      title: "Gestión de Clientes y Operaciones",
      category: "Solución de Gestión General",
      description:
        "Automatiza la gestión de clientes, inventario, oportunidades y decisiones comerciales con agentes de IA que supervisan, analizan y accionan de forma continua.",
      actions: [
        "Actualizar automáticamente inventario, movimientos y alertas de stock.",
        "Monitorear el comportamiento de los clientes y generar seguimientos automatizados.",
        "Detectar oportunidades de venta o riesgo de abandono mediante patrones de uso.",
        "Generar reportes operativos y comerciales con insights accionables.",
        "Optimizar la asignación de recursos según demanda, rotación y performance.",
      ],
      icon: "https://ext.same-assets.com/2264316469/3883820722.png",
    },
  ];

  return (
    <section className="py-20 border-t border-white/10 relative gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Un sistema que revoluciona tu negocio.
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Marketing, Atención y Gestión.
            <br />
            Automatizamos el ciclo completo del cliente con IA
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Los agentes de Meduzia automatizan de punta a punta el recorrido del
            cliente: desde la generación del primer contacto con campañas
            virales y anuncios optimizados, hasta la atención automatizada en
            múltiples canales y la gestión operativa del negocio. Todo
            integrado, optimizando y escalando.
          </p>
          <Link href="/soluciones">
            <Button className="gradient-primary text-white">Ver más</Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <Card
              key={index}
              className="gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 transition-all"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={workflow.icon} alt="" className="w-8 h-8" />
                  <Badge className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {workflow.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {workflow.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {workflow.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Agentic Actions
                  </h4>
                  {workflow.actions.map((action, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{action}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 border-t border-white/10 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Benefits
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mejorá tu Marketing, Ventas y Eficiencia Operacional.
            <br />
            tu oportunidad de crear ventajas.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Implementá agentes de IA para escalar tus campañas, generar leads
            calificados y acelerar cada etapa del embudo comercial. Automatizá
            tareas repetitivas, identificá oportunidades en tiempo real y mejorá
            la conversión sin aumentar tus costos operativos.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1">
            <Card className="gradient-primary p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Integrar Agentes IA
                <br />
                en el organigrama de tu negocio.
              </h3>
            </Card>
          </div>

          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            <Card className="gradient-card glass-border bg-transparent border-white/10 p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">93%</div>
              <p className="text-gray-300 text-sm">
                tiempo reducido en tareas eliminadas
              </p>
            </Card>
            <Card className="gradient-card glass-border bg-transparent border-white/10 p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-300 text-sm">
                Automatización de las tareas repetitivas
              </p>
            </Card>
            <Card className="gradient-card glass-border bg-transparent border-white/10 p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <p className="text-gray-300 text-sm">Optimización de data</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentOSSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Sistema Meduzia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Plataforma Inteligente
            <br />
            sistemas de nivel empresarial con precisión y escalabilidad.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Meduzia es una plataforma nativa de agentes de IA diseñada para
            empresas que buscan escalar con tecnología confiable.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://ext.same-assets.com/2264316469/2832301244.svg"
            alt="Agent OS Architecture"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Streamlining Quotation Generation with AI Automation",
      category: "Financial Services & Banking",
      image: "https://ext.same-assets.com/2264316469/2114615059.jpeg",
    },
    {
      title:
        "Transforming Order Management with AI Agents for a Leading B2B Bakery Supplier",
      category: "Supply Chain & Logistics",
      image: "https://ext.same-assets.com/2264316469/3909368598.jpeg",
    },
    {
      title: "Automating Contact Management Across 5 Systems with Agentic AI",
      category: "Retail & E-Commerce",
      image: "https://ext.same-assets.com/2264316469/2760134810.jpeg",
    },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Case Studies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry Specific AI: One
            <br />
            Platform for All Your Needs
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Explore how AI delivers tangible results in diverse scenarios. From
            optimizing workflows to driving innovation, see concise examples of
            how our technology addresses specific challenges and enhances
            performance across various fields.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {study.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white mb-4 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">
                    Read Case Study →
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function MultiAgentSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Multi-Agent
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Autonomous
            <br />
            Agents to Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Why rely on a single agent when you can utilize the power of many?
            Beam's agentic AI systems integrate multiple agents for more
            comprehensive and cohesive automation strategy, boosting
            productivity across all levels of your organization.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://ext.same-assets.com/2264316469/1019656937.webp"
            alt="Multi-Agent Collaboration"
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const articles = [
    {
      title:
        "2025, el año de las Frontier Firms: 42% de líderes ya construyen sistemas multi-agente",
      author: "Microsoft WorkLab",
      date: "2025",
      image: "https://ext.same-assets.com/2264316469/329113509.png",
      url: "https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born",
      featured: true,
    },
    {
      title:
        "El futuro del trabajo: colaboración entre humanos y agentes de IA",
      image: "https://ext.same-assets.com/2264316469/3234034791.png",
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work",
    },
    {
      title:
        "Top agentes de IA 2025: Gemini, Copilot, Watsonx y más automatizan procesos",
      image: "https://ext.same-assets.com/2264316469/2123165345.png",
      url: "https://dig.watch/updates/top-7-ai-agents-transforming-business-in-2025",
    },
    {
      title:
        "Gartner: IA agentica resolverá 80% de problemas de clientes reduciendo costos 30%",
      image: "https://ext.same-assets.com/2264316469/4075020448.png",
      url: "https://www.crn.com/news/ai/2025/10-hottest-agentic-ai-tools-and-agents-of-2025-so-far",
    },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Noticias & Blogs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Novedades de la Industria IA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href={articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
                    ARTICLE
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {articles[0].title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span>by {articles[0].author}</span>
                    <span>•</span>
                    <span>{articles[0].date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <Link
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="gradient-card glass-border bg-transparent border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer">
                  <CardContent className="p-6 flex space-x-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
                        ARTICLE
                      </Badge>
                      <h4 className="text-white font-medium leading-tight">
                        {article.title}
                      </h4>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8"></div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 border-t border-white/10 relative hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Revolución IA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            "La IA no va a reemplazar a los humanos, pero los que la usen
            reemplazarán a los que no lo hagan."
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Con Meduzia podés revolucionar tu negocio. Menos tareas manuales,
            más decisiones automatizadas y una estructura que aprende y mejora
            sola. Es el momento de potenciar tu equipo con Agentes que ejecutan,
            analizan y escalan sin límites.
          </p>
        </div>

        <div className="gradient-card glass-border rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ZFiPWrdZxR0"
              title="Video de Medusia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es Meduzia?",
      answer:
        "Meduzia es una plataforma de agentes de inteligencia artificial que automatiza tareas críticas en marketing, ventas, atención al cliente y gestión de operaciones, mejorando la eficiencia y reduciendo costos operativos.",
    },
    {
      question: "¿Cómo pueden los agentes de IA escalar mi negocio?",
      answer:
        "Los agentes de IA de Meduzia operan 24/7, automatizando tareas repetitivas, analizando datos en tiempo real y tomando decisiones para ayudarte a escalar sin aumentar tu equipo humano.",
    },
    {
      question: "¿Qué tareas puede automatizar Meduzia?",
      answer:
        "Meduzia automatiza desde la generación de contenido y anuncios, hasta la atención al cliente, prospección, análisis competitivo, gestión de clientes y oportunidades comerciales, todo con agentes especializados.",
    },
    {
      question: "¿Cómo se integran los agentes con mis sistemas?",
      answer:
        "La arquitectura modular de Meduzia permite integrar fácilmente los agentes con CRM, herramientas de publicidad, plataformas de mensajería y otros sistemas ya existentes en tu negocio.",
    },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Como Meduzia puede ayudar a tu negocio a escalar de la mano de los
            Agentes de Inteligencia Artificial.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card glass-border border-white/10 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold text-white">beam</div>
            </div>
            <div className="flex space-x-4 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
            <div className="mb-6">
              <h4 className="text-white font-medium mb-4">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l px-3 py-2 text-white text-sm"
                />
                <Button className="bg-white text-black rounded-l-none px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Agent Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Agent Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agentic Workflows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AgentOS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Database, Memory & Rag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  BPO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HR & Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Debt Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agentic Insights Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Webinars{" "}
                  <Badge className="ml-1 text-xs bg-blue-500 text-white">
                    NEW
                  </Badge>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partner Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Beam Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agentic Automation 101
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Native{" "}
                  <Badge className="ml-1 text-xs bg-blue-500 text-white">
                    NEW
                  </Badge>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Request Demo
                </a>
              </li>
            </ul>

            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-400 text-sm">
          <p>© MEDUZIA AI. All rights reserved 2025</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-600 rounded"></div>
              <span>ES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

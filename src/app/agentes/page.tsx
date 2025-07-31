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
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-white">
              meduzia
            </Link>
          </div>
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
    {
      title: "Agente Creación de Contenido Viral",
      category: "Marketing",
      description:
        "Crea contenido basado en lenguaje viral, temas en tendencia y diferentes ángulos de venta para captar la atención de tu audiencia.",
      workflows: [
        "Análisis de tendencias en redes sociales",
        "Generación de copies con lenguaje viral",
        "Diseño de creatividades dinámicas",
        "Publicación automatizada en múltiples canales",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Contenido", "Social Media", "Automatización"],
    },
    {
      title: "Agente Buscador de Referencias y Tendencias",
      category: "Marketing",
      description:
        "Escanea múltiples plataformas para detectar contenidos de alto impacto, referencias virales y oportunidades creativas.",
      workflows: [
        "Monitoreo de TikTok, IG, Linkedin y YouTube",
        "Curación de contenido y referencias virales",
        "Identificación de patrones de éxito",
        "Sugerencias creativas automatizadas",
      ],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Tendencias", "Análisis", "Benchmark"],
    },
    {
      title: "Agente Meta Ads",
      category: "Publicidad y Marketing",
      description:
        "Lanza, optimiza y escala campañas publicitarias en Meta seleccionando creatividades ganadoras y controlando el presupuesto de forma automática.",
      workflows: [
        "Creación de campañas y conjuntos de anuncios",
        "Testing de múltiples ángulos y audiencias",
        "Detección automática de creatividades ganadoras",
        "Ajuste de presupuesto y optimización continua",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Meta Ads", "Performance", "Campañas"],
    },
    {
      title: "Agente de Optimización y Análisis de Contenido",
      category: "Contenido",
      description:
        "Evalúa, prueba y mejora el rendimiento de contenido en diferentes plataformas para maximizar conversiones y engagement.",
      workflows: [
        "A/B testing de copies y visuales",
        "Análisis de métricas de contenido",
        "Adaptación por canal y audiencia",
        "Generación de reportes y mejoras continuas",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Copy", "Creatividad", "Optimización"],
    },
    {
      title: "Agente de WhatsApp",
      category: "Conversación y Ventas",
      description:
        "Responde consultas, automatiza seguimientos y genera oportunidades en tiempo real desde WhatsApp.",
      workflows: [
        "Detección de intención en tiempo real",
        "Respuesta instantánea y personalizada",
        "Seguimiento automatizado de leads",
        "Escalamiento a humanos si es necesario",
      ],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["WhatsApp", "Chatbots", "Atención"],
    },
    {
      title: "Agente de Llamadas por Voz",
      category: "Conversación y Atención",
      description:
        "Realiza llamadas automatizadas para ventas, encuestas o seguimiento, con comprensión del lenguaje natural.",
      workflows: [
        "Marcado automático de números",
        "Reconocimiento de intención en llamadas",
        "Respuestas habladas personalizadas",
        "Derivación a humanos si es necesario",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Voz", "Callbots", "Conversación"],
    },
    {
      title: "Agente de Categorización y Scoring de Clientes",
      category: "Ventas y CRM",
      description:
        "Clasifica, puntúa y segmenta clientes en tiempo real para priorizar oportunidades y optimizar el ciclo comercial.",
      workflows: [
        "Evaluación de comportamiento y atributos",
        "Asignación de puntaje por nivel de interés",
        "Segmentación dinámica de base de datos",
        "Actualización automática de CRM",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["CRM", "Scoring", "Segmentación"],
    },
    {
      title: "Agente de Análisis de Competencia",
      category: "Marketing Digital",
      description:
        "Investiga y monitorea a tus competidores para detectar ventajas competitivas, cambios de estrategia y oportunidades.",
      workflows: [
        "Scraping de webs y redes sociales de competidores",
        "Análisis de precios, productos y comunicación",
        "Generación de benchmarks visuales",
        "Alertas por movimientos relevantes",
      ],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Competencia", "Benchmark", "Market Intelligence"],
    },
    {
      title: "Agente de Gestión de Inventario",
      category: "Operaciones y Logística",
      description:
        "Supervisa niveles de stock, predice demanda y automatiza órdenes de reposición en tiempo real.",
      workflows: [
        "Control automatizado de entradas y salidas",
        "Alertas por bajo stock",
        "Predicción de quiebres por IA",
        "Generación de órdenes a proveedores",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Inventario", "Stock", "Reposición"],
    },
    {
      title: "Agente de SEO Inteligente",
      category: "Marketing Digital",
      description:
        "Audita, mejora y posiciona tu sitio web en buscadores optimizando contenidos, enlaces y estructura técnica.",
      workflows: [
        "Análisis de keywords",
        "Detección de errores técnicos",
        "Recomendaciones de mejoras on-page",
        "Generación de contenido SEO",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["SEO", "Ranking", "Optimización Web"],
    },
    {
      title: "Agente de Gestion de Stock y Envíos",
      category: "Gestión de Proyectos",
      description:
        "Asiste en la planificación y seguimiento de proyectos, optimizando recursos y tiempos.",
      workflows: [
        "Planificación automática",
        "Seguimiento de progreso",
        "Gestión de recursos",
        "Alertas de riesgo",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Project Management", "Planning", "Resources"],
    },
    {
      title: "Agente Coordinador de Reuniones",
      category: "Creación de Contenido",
      description:
        "Genera contenido automatizado para blogs, redes sociales y materiales de marketing.",
      workflows: [
        "Generación de contenido",
        "Optimización SEO",
        "Adaptación de formatos",
        "Programación de publicación",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Content", "SEO", "Writing"],
    },
    {
      title: "Agente de Oportunidades en Sitio Web",
      category: "Seguridad Informática",
      description:
        "Monitorea amenazas de seguridad, detecta anomalías y responde automáticamente a incidentes.",
      workflows: [
        "Monitoreo de amenazas",
        "Detección de anomalías",
        "Respuesta automática",
        "Reportes de seguridad",
      ],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Security", "Monitoring", "Incident Response"],
    },
    {
      title: "Agente de Prospección en Google Maps",
      category: "Legal y Compliance",
      description:
        "Revisa y analiza documentos legales, identifica cláusulas importantes y verifica cumplimiento.",
      workflows: [
        "Análisis de contratos",
        "Identificación de cláusulas",
        "Verificación de compliance",
        "Gestión de documentos",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Legal", "Contracts", "Compliance"],
    },
    {
      title: "Agente de Últimas Noticias",
      category: "Desarrollo Profesional",
      description:
        "Personaliza programas de capacitación, evalúa progreso y recomienda contenido educativo.",
      workflows: [
        "Personalización de contenido",
        "Evaluación de progreso",
        "Recomendaciones de cursos",
        "Seguimiento de objetivos",
      ],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Training", "Development", "Learning"],
    },
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
      title: "Agente de Community Management",
      category: "Marketing Digital",
      description:
        "Gestiona comunidades en redes sociales automatizando interacciones y mejorando el engagement de tu marca.",
      workflows: [
        "Respuesta automática a mensajes y comentarios",
        "Moderación de comunidades con IA",
        "Identificación de oportunidades de interacción",
        "Generación de reportes de actividad y engagement",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Community", "Social Media", "Engagement"],
    },
    {
      title: "Agente de Google Ads Performance",
      category: "Publicidad",
      description:
        "Optimiza campañas de Google Ads en tiempo real para maximizar conversiones y reducir costos.",
      workflows: [
        "Creación y ajuste de campañas automáticamente",
        "Testing de palabras clave y anuncios",
        "Asignación dinámica de presupuestos",
        "Generación de reportes de rendimiento",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Google Ads", "Performance", "Publicidad"],
    },
    {
      title: "Agente de Seguimiento Comercial",
      category: "Ventas",
      description:
        "Automatiza el seguimiento de prospectos y clientes, asegurando que ningún lead se pierda en el pipeline.",
      workflows: [
        "Recordatorios automáticos de seguimiento",
        "Envío de emails y mensajes personalizados",
        "Actualización de estado en el CRM",
        "Alertas de leads de alta prioridad",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Ventas", "Seguimiento", "CRM"],
    },
    {
      title: "Agente de Pricing Dinámico",
      category: "Inteligencia Comercial",
      description:
        "Ajusta los precios de tus productos o servicios en función de la demanda, competencia y márgenes en tiempo real.",
      workflows: [
        "Análisis de elasticidad de precios",
        "Monitoreo de precios de la competencia",
        "Optimización automática de precios",
        "Reportes de rentabilidad y margen",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Precios", "Optimización", "Revenue"],
    },
    {
      title: "Agente de Actualización de Dashboards",
      category: "Análisis y Reportes",
      description:
        "Actualiza visualizaciones y dashboards automáticamente con los datos más relevantes de tu operación.",
      workflows: [
        "Integración con fuentes de datos",
        "Actualización automática en tiempo real",
        "Detección de anomalías en métricas",
        "Distribución programada de reportes",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Dashboards", "Reporting", "BI"],
    },
    {
      title: "Agente de Emails Automatizados",
      category: "Marketing y Comunicación",
      description:
        "Envía emails personalizados basados en comportamiento del usuario, campañas y triggers automatizados.",
      workflows: [
        "Segmentación dinámica de listas",
        "Envío automatizado según eventos",
        "Personalización con IA del contenido",
        "Análisis de tasas de apertura y respuesta",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Email", "Automatización", "Campañas"],
    },
    {
      title: "Agente de Data Analytics",
      category: "Análisis de Datos",
      description:
        "Analiza grandes volúmenes de datos para descubrir patrones, generar insights accionables y apoyar la toma de decisiones.",
      workflows: [
        "Procesamiento automatizado de datos",
        "Identificación de tendencias y anomalías",
        "Generación de reportes en tiempo real",
        "Recomendaciones inteligentes",
      ],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Insights", "Big Data"],
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
          className={`text-center mb-16 ${isIntersecting ? "animate-fade-in-up" : ""}`}
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
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-full"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {agent.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-blue-500/40 text-blue-200 bg-black/20 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="mb-3 text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm w-fit">
                    {agent.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight drop-shadow-lg">
                    {agent.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed drop-shadow">
                    {agent.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold drop-shadow">
                      Capacidades Principales
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {agent.workflows.map((workflow, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 shadow-sm"></div>
                          <p className="text-gray-200 text-xs drop-shadow">
                            {workflow}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20"></div>
                </div>
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
          className={`text-center ${isIntersecting ? "animate-fade-in-up" : ""}`}
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
        <div className="text-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white mb-4 inline-block"
          >
            meduzia
          </Link>
          <p className="text-gray-400 mb-8">
            Transformando negocios con inteligencia artificial
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Inicio
            </Link>
            <Link href="/agentes" className="text-blue-400">
              Agentes
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-400 text-sm mt-8">
          <p>© Meduzia AI. Todos los derechos reservados 2025</p>
          <p className="mt-4 md:mt-0">Hecho con ❤️ para automatizar el futuro</p>
        </div>
      </div>
    </footer>
  );
}

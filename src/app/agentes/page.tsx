'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { FloatingParticles } from '@/components/FloatingParticles'
import Link from 'next/link'

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
  )
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/90 via-blue-900/20 to-slate-900/90 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-white">meduzia</Link>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/agentes" className="text-blue-400 border-b-2 border-blue-400">Agentes</Link>
            <Link href="/soluciones" className="text-gray-300 hover:text-white transition-colors">Soluciones</Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white">Solicitar Demo</Button>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1 md:hidden">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section ref={ref} className="pt-24 pb-16 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 beam-grid opacity-30"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-8 ${isIntersecting ? 'animate-fade-in-up' : ''}`}>
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Galería de Agentes
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Agentes de AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Colección completa de agentes de inteligencia artificial especializados.
            Cada agente está diseñado para automatizar tareas específicas y optimizar tu flujo de trabajo.
          </p>
          <Link href="/">
            <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-3 text-lg animate-glow hover-glow mr-4">
              ← Volver al Inicio
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg">
            Solicitar Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

function AgentsGallery() {
  const { ref, isIntersecting } = useIntersectionObserver()

  const agents = [
    {
      title: "Agente Creación de Contenido Viral",
      category: "Marketing",
      description: "Analiza y evalúa CVs automáticamente, identificando candidatos que mejor se ajustan a los requisitos del puesto.",
      workflows: ["Análisis de CV", "Puntuación por roles", "Filtrado por aptitudes", "Detección de palabras clave"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["HR", "Recruiting", "Automation"]
    },
    {
      title: "Agente Buscador de Referencias y Tendencias",
      category: "Marketing",
      description: "Revisa y audita nóminas de manera automática, detectando errores y garantizando el cumplimiento normativo.",
      workflows: ["Revisión de datos", "Detección de errores", "Verificación de cumplimiento", "Reportes automáticos"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Payroll", "Audit", "Compliance"]
    },
    {
      title: "Agente Meta Ads",
      category: "Publicidad y Marketing",
      description: "Coordina y programa entrevistas automáticamente, optimizando calendarios y enviando confirmaciones.",
      workflows: ["Búsqueda de disponibilidad", "Sugerencias de horarios", "Confirmación de citas", "Recordatorios automáticos"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Scheduling", "Interviews", "Calendar"]
    },
    {
      title: "Agente de Optimización y Analisis de Contenido",
      category: "Atención al Cliente",
      description: "Proporciona soporte al cliente 24/7, resuelve consultas comunes y escalara casos complejos.",
      workflows: ["Análisis de consultas", "Respuestas automáticas", "Escalado inteligente", "Seguimiento de casos"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Support", "Customer", "24/7"]
    },
    {
      title: "Agente de Whatsapp",
      category: "Ventas y Marketing",
      description: "Automatiza procesos de ventas, desde la calificación de leads hasta el seguimiento de oportunidades.",
      workflows: ["Calificación de leads", "Emails de seguimiento", "Gestión de pipeline", "Análisis de conversión"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Sales", "CRM", "Lead Generation"]
    },
    {
      title: "Agente de Llamadas por Voz",
      category: "Operaciones",
      description: "Procesa y extrae información de documentos automáticamente, clasificándolos y validando datos.",
      workflows: ["Extracción de datos", "Clasificación de documentos", "Validación automática", "Archivo digital"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["OCR", "Document", "Processing"]
    },
    {
      title: "Agente de Categorización y Scoring de Clientes",
      category: "Finanzas y Contabilidad",
      description: "Analiza datos financieros, genera reportes y identifica tendencias y riesgos financieros.",
      workflows: ["Generación de reportes", "Análisis de tendencias", "Evaluación de riesgos", "Forecasting"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Finance", "Analytics", "Reporting"]
    },
    {
      title: "Agente de Analisis de Competencia",
      category: "Marketing Digital",
      description: "Gestiona contenido en redes sociales, programa publicaciones y analiza engagement.",
      workflows: ["Programación de posts", "Análisis de engagement", "Respuesta automática", "Reportes de performance"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Social Media", "Content", "Analytics"]
    },
    {
      title: "Inventory Management AI Agent",
      category: "Logística y Supply Chain",
      description: "Optimiza inventarios, predice demanda y automatiza órdenes de reposición.",
      workflows: ["Monitoreo de stock", "Predicción de demanda", "Órdenes automáticas", "Optimización de costos"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Inventory", "Supply Chain", "Forecasting"]
    },
    {
      title: "Agente de Optimización y Evaluación en Meta Ads",
      category: "Marketing Digital",
      description: "Personaliza y automatiza campañas de email marketing basadas en comportamiento del usuario.",
      workflows: ["Segmentación automática", "Personalización de contenido", "A/B Testing", "Análisis de performance"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Email", "Marketing", "Personalization"]
    },
    {
      title: "Agente de SEO",
      category: "Control de Calidad",
      description: "Automatiza procesos de control de calidad, detecta defectos y genera reportes de conformidad.",
      workflows: ["Inspección automática", "Detección de defectos", "Reportes de calidad", "Análisis de tendencias"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["QA", "Quality Control", "Inspection"]
    },
    {
      title: "Agente de Gestion de Stock y Envíos",
      category: "Gestión de Proyectos",
      description: "Asiste en la planificación y seguimiento de proyectos, optimizando recursos y tiempos.",
      workflows: ["Planificación automática", "Seguimiento de progreso", "Gestión de recursos", "Alertas de riesgo"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Project Management", "Planning", "Resources"]
    },
    {
      title: "Agente Coordinador de Reuniones",
      category: "Creación de Contenido",
      description: "Genera contenido automatizado para blogs, redes sociales y materiales de marketing.",
      workflows: ["Generación de contenido", "Optimización SEO", "Adaptación de formatos", "Programación de publicación"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Content", "SEO", "Writing"]
    },
    {
      title: "Agente de Oportunidades en Sitio Web",
      category: "Seguridad Informática",
      description: "Monitorea amenazas de seguridad, detecta anomalías y responde automáticamente a incidentes.",
      workflows: ["Monitoreo de amenazas", "Detección de anomalías", "Respuesta automática", "Reportes de seguridad"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Security", "Monitoring", "Incident Response"]
    },
    {
      title: "Agente de Prospección en Google Maps",
      category: "Legal y Compliance",
      description: "Revisa y analiza documentos legales, identifica cláusulas importantes y verifica cumplimiento.",
      workflows: ["Análisis de contratos", "Identificación de cláusulas", "Verificación de compliance", "Gestión de documentos"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Legal", "Contracts", "Compliance"]
    },
    {
      title: "Agente de Últimas Noticias",
      category: "Desarrollo Profesional",
      description: "Personaliza programas de capacitación, evalúa progreso y recomienda contenido educativo.",
      workflows: ["Personalización de contenido", "Evaluación de progreso", "Recomendaciones de cursos", "Seguimiento de objetivos"],
      image: "https://ext.same-assets.com/2264316469/348423250.png",
      tags: ["Training", "Development", "Learning"]
    },
    {
      title: "Agente de Facturación",
      category: "Mantenimiento Industrial",
      description: "Predice fallos en equipos, programa mantenimiento preventivo y optimiza costos operativos.",
      workflows: ["Monitoreo de equipos", "Predicción de fallos", "Programación de mantenimiento", "Optimización de costos"],
      image: "https://ext.same-assets.com/2264316469/3321369627.png",
      tags: ["Maintenance", "Predictive", "Industrial"]
    },
    {
      title: "Agente de Data Analytics",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente de Community Management",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente de Google Ads Prformance",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente de Seguimiento Comercial",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente Agente de Pricing Dinámico",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente de Agente de Actualización de Dashboards",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    },
    {
      title: "Agente de Emails",
      category: "Análisis de Datos",
      description: "Analiza grandes volúmenes de datos, identifica patrones y genera insights accionables.",
      workflows: ["Procesamiento de datos", "Identificación de patrones", "Generación de insights", "Visualización automática"],
      image: "https://ext.same-assets.com/2264316469/1476774670.png",
      tags: ["Analytics", "Big Data", "Insights"]
    }
  ]

  return (
    <section ref={ref} className="py-20 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isIntersecting ? 'animate-fade-in-up' : ''}`}>
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
                isIntersecting ? 'animate-slide-in-up' : ''
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
                      <Badge key={idx} variant="outline" className="text-xs border-blue-500/40 text-blue-200 bg-black/20 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="mb-3 text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm w-fit">
                    {agent.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight drop-shadow-lg">{agent.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed drop-shadow">{agent.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold drop-shadow">Capacidades Principales</p>
                    <div className="grid grid-cols-2 gap-1">
                      {agent.workflows.map((workflow, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 shadow-sm"></div>
                          <p className="text-gray-200 text-xs drop-shadow">{workflow}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 border-t border-white/10 relative hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center ${isIntersecting ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿No encuentras el agente perfecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Creamos agentes personalizados para tus necesidades específicas.
            Nuestro equipo puede desarrollar la solución exacta que tu negocio requiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-3 text-lg animate-glow hover-glow">
              Solicitar Agente Personalizado
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg">
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">meduzia</Link>
          <p className="text-gray-400 mb-8">
            Transformando negocios con inteligencia artificial
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
            <Link href="/agentes" className="text-blue-400">Agentes</Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-400 text-sm mt-8">
          <p>© Meduzia AI. Todos los derechos reservados 2025</p>
          <p className="mt-4 md:mt-0">Hecho con ❤️ para automatizar el futuro</p>
        </div>
      </div>
    </footer>
  )
}

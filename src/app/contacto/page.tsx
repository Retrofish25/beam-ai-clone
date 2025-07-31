"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function ContactoPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ContactFormSection />
        <ContactInfoSection />
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
            <Link href="/agentes" className="text-gray-300 hover:text-white transition-colors">
              Agentes
            </Link>
            <Link href="/soluciones" className="text-gray-300 hover:text-white transition-colors">
              Soluciones
            </Link>
            <Link href="/contacto" className="text-blue-400 border-b-2 border-blue-400">
              Contacto
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/5491172389359" target="_blank" rel="noopener noreferrer">
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
    <section ref={ref} className="pt-24 pb-16 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 beam-grid opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-8 ${isIntersecting ? "animate-fade-in-up" : ""}`}>
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Conecta con Nosotros
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Transformar
            <br />
            tu Negocio?
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Hablemos sobre cómo nuestros agentes de IA pueden automatizar tus
            procesos, reducir costos operativos y aumentar la eficiencia de tu
            empresa. Nuestro equipo de expertos está aquí para ayudarte.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envío
      await new Promise((r) => setTimeout(r, 2000));

      // Fallback mailto
      const subject = `Nueva consulta: ${formData.tipoConsulta} - ${formData.empresa}`;
      const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Empresa: ${formData.empresa}
Teléfono: ${formData.telefono}
Tipo de Consulta: ${formData.tipoConsulta}

Mensaje:
${formData.mensaje}
      `.trim();
      const mailtoLink = `mailto:info@retrofish.com.ar?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ nombre: "", email: "", empresa: "", telefono: "", tipoConsulta: "", mensaje: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section ref={ref} className="py-20 relative section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* INFO */}
          <div className={`space-y-8 ${isIntersecting ? "animate-slide-in-left" : ""}`}>
            <h2 className="text-4xl font-bold text-white mb-6">Hablemos de tu Proyecto</h2>
            <p className="text-xl text-gray-300 mb-8">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <div className="space-y-6">
              <ContactCard icon="📧" title="Email Directo" detail="info@retrofish.com.ar" />
              <ContactCard icon="⏰" title="Tiempo de Respuesta" detail="Menos de 24 horas" />
              <ContactCard icon="🎯" title="Consulta Personalizada" detail="100% gratuita y sin compromiso" />
            </div>
          </div>
          {/* FORM */}
          <div className={isIntersecting ? "animate-slide-in-right" : ""}>
            <Card className="gradient-card glass-border bg-transparent border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Nombre Completo *" htmlFor="nombre">
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </FormField>
                  <FormField label="Email Corporativo *" htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="nombre@empresa.com"
                      required
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </FormField>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Empresa *" htmlFor="empresa">
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange("empresa", e.target.value)}
                      placeholder="Nombre de tu empresa"
                      required
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </FormField>
                  <FormField label="Teléfono" htmlFor="telefono">
                    <Input
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </FormField>
                </div>

                <FormField label="Tipo de Consulta *" htmlFor="tipoConsulta">
                  <Select
                    onValueChange={(value) => handleInputChange("tipoConsulta", value)}
                    required
                  >
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Selecciona el tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="demo">Demo del Producto</SelectItem>
                      <SelectItem value="agente-personalizado">Agente Personalizado</SelectItem>
                      <SelectItem value="integracion">Integración Empresarial</SelectItem>
                      <SelectItem value="consultoria">Consultoría en IA</SelectItem>
                      <SelectItem value="soporte">Soporte Técnico</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField label="Mensaje *" htmlFor="mensaje">
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange("mensaje", e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={6}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                  />
                </FormField>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-semibold py-3 text-lg hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-green-400 text-sm mt-2 text-center">
                      ¡Gracias! Tu consulta ha sido enviada exitosamente.
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm mt-2 text-center">
                      Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
                    </p>
                  )}
                </div>

                <p className="text-gray-400 text-xs text-center">
                  Al enviar este formulario, aceptas que nos pongamos en contacto contigo sobre tu consulta.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 border-t border-white/10 relative hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isIntersecting ? "animate-fade-in-up" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Prefieres una Reunión Directa?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Agenda una llamada con nuestro equipo para una consulta personalizada.
          </p>
          <div className="flex justify-center">
            <a href="https://calendly.com/retrofishco/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg"
              >
                Ver Calendario Disponible
              </Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="🚀"
            title="Demo en Vivo"
            description="Ve nuestros agentes en acción con datos reales de tu industria"
            href="https://wa.me/5491172389359"
            buttonText="Solicitar Demo"
          />
          <ServiceCard
            icon="💡"
            title="Consultoría Gratuita"
            description="Análisis completo de tus procesos y recomendaciones personalizadas"
            href="https://calendly.com/retrofishco/30min"
            buttonText="Agendar Consulta"
          />
          <ServiceCard
            icon="🔧"
            title="Implementación"
            description="Plan completo de implementación con soporte técnico especializado"
            href="https://calendly.com/retrofishco/30min"
            buttonText="Crear Plan"
          />
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
          <Link href="/soluciones" className="text-gray-400 hover:text-white transition-colors">
            Soluciones
          </Link>
          <Link href="/contacto" className="text-blue-400">
            Contacto
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© Meduzia AI. Todos los derechos reservados 2025</p>
          <p className="mt-4 md:mt-0">Conectando el futuro de los negocios</p>
        </div>
      </div>
    </footer>
  );
}

/* Componentes Auxiliares */

function ContactCard({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <Card className="gradient-card glass-border bg-transparent border-white/10 p-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-gray-300">{detail}</p>
        </div>
      </div>
    </Card>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
  buttonText,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}) {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <Card
      ref={ref}
      className={`gradient-card glass-border bg-transparent border-white/10 hover-lift p-8 text-center ${
        isIntersecting ? "animate-scale-in" : ""
      }`}
      style={{ animationDelay: "0.1s" }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
          {buttonText}
        </Button>
      </a>
    </Card>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-white">
        {label}
      </Label>
      {children}
    </div>
  );
}

}

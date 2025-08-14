import { ArrowLeft, Shield, Eye, Lock, Users, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Seo
        title="Política de Privacidad | Luzé Rugs"
        description="Conoce cómo protegemos y utilizamos tu información personal en Luzé Rugs."
        noIndex={true}
      />
      <Header />

      <main className="flex-1">
        {/* Header de la página */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Política de Privacidad
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tu privacidad es importante para nosotros. Esta política describe cómo recopilamos,
                utilizamos y protegemos tu información personal.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Última actualización: {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">

            {/* Información que recopilamos */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Información que Recopilamos</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nombre y apellido</li>
                  <li>• Dirección de correo electrónico</li>
                  <li>• Número de teléfono</li>
                  <li>• Dirección de envío (si aplica)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Técnica</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dirección IP</li>
                  <li>• Tipo de navegador y dispositivo</li>
                  <li>• Páginas visitadas y tiempo de permanencia</li>
                  <li>• Cookies y tecnologías similares</li>
                </ul>
              </div>
            </section>

            {/* Cómo utilizamos la información */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cómo Utilizamos tu Información</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Servicio al Cliente</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Responder consultas y solicitudes</li>
                    <li>• Procesar pedidos y envíos</li>
                    <li>• Proporcionar soporte técnico</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Mejora del Servicio</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Analizar el uso del sitio web</li>
                    <li>• Mejorar nuestros productos</li>
                    <li>• Personalizar la experiencia</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compartir información */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Compartir Información</h2>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">No Vendemos tu Información</h3>
                <p className="text-yellow-800 mb-4">
                  Luzé Rugs no vende, alquila ni comercia tu información personal con terceros.
                </p>

                <h4 className="font-semibold text-yellow-900 mb-2">Excepciones:</h4>
                <ul className="space-y-2 text-yellow-800">
                  <li>• <strong>Proveedores de servicios:</strong> Solo para procesar pagos y envíos</li>
                  <li>• <strong>Requisitos legales:</strong> Cuando la ley lo requiera</li>
                  <li>• <strong>Protección de derechos:</strong> Para proteger nuestros derechos y seguridad</li>
                </ul>
              </div>
            </section>

            {/* Seguridad */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Seguridad de Datos</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Medidas Técnicas</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Encriptación SSL/TLS</li>
                      <li>• Firewalls de seguridad</li>
                      <li>• Acceso restringido a datos</li>
                      <li>• Copias de seguridad regulares</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Medidas Organizativas</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Capacitación del personal</li>
                      <li>• Políticas de acceso</li>
                      <li>• Auditorías regulares</li>
                      <li>• Procedimientos de respuesta</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tus derechos */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tus Derechos</h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Acceso</h3>
                  <p className="text-gray-600 text-sm">Solicitar una copia de tus datos personales</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Rectificación</h3>
                  <p className="text-gray-600 text-sm">Corregir información inexacta o incompleta</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Eliminación</h3>
                  <p className="text-gray-600 text-sm">Solicitar la eliminación de tus datos</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Portabilidad</h3>
                  <p className="text-gray-600 text-sm">Recibir tus datos en formato estructurado</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Limitación</h3>
                  <p className="text-gray-600 text-sm">Restringir el procesamiento de datos</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Oposición</h3>
                  <p className="text-gray-600 text-sm">Oponerte al procesamiento de datos</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies y Tecnologías Similares</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies Esenciales</h4>
                    <p className="text-gray-600 text-sm">Necesarias para el funcionamiento básico del sitio</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies Analíticas</h4>
                    <p className="text-gray-600 text-sm">Nos ayudan a entender cómo usas nuestro sitio</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies de Funcionalidad</h4>
                    <p className="text-gray-600 text-sm">Mejoran la funcionalidad y personalización</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4">
                  Puedes gestionar las cookies a través de la configuración de tu navegador.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacto</h2>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-900 mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales,
                  puedes contactarnos:
                </p>

                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> info@luzgrugs.com.ar</p>
                  <p><strong>WhatsApp:</strong> +54 349 852-8087</p>
                  <p><strong>Dirección:</strong> San Justo, Santa Fe, Argentina</p>
                </div>

                <p className="text-blue-700 text-sm mt-4">
                  Responderemos a tu consulta en un plazo máximo de 30 días hábiles.
                </p>
              </div>
            </section>

            {/* Cambios en la política */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cambios en esta Política</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
                  Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
                </p>

                <p className="text-gray-600 text-sm">
                  Te recomendamos revisar esta política periódicamente para estar informado sobre cómo
                  protegemos tu información.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

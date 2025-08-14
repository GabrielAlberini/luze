import React from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Scale, Users, Truck, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Seo
        title="Términos de Servicio | Luzé Rugs"
        description="Conoce los términos y condiciones que rigen el uso de nuestros servicios en Luzé Rugs."
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
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Términos de Servicio
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estos términos establecen las condiciones para el uso de nuestros servicios
                y la compra de productos en Luzé Rugs.
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

            {/* Aceptación de términos */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Aceptación de Términos</h2>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-900 mb-4">
                  Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones.
                  Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.
                </p>

                <p className="text-blue-800 text-sm">
                  Estos términos se aplican a todos los visitantes, usuarios y clientes de Luzé Rugs.
                </p>
              </div>
            </section>

            {/* Descripción del servicio */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción del Servicio</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nuestros Productos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Alfombras artesanales tufting</li>
                    <li>• Productos hechos a mano</li>
                    <li>• Diseños únicos y personalizados</li>
                    <li>• Materiales de alta calidad</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nuestros Servicios</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Venta online de productos</li>
                    <li>• Consultoría de diseño</li>
                    <li>• Envíos a todo el país</li>
                    <li>• Atención al cliente personalizada</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Uso del sitio web */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Uso del Sitio Web</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Uso Permitido</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Navegar y explorar nuestros productos</li>
                  <li>• Realizar consultas sobre nuestros servicios</li>
                  <li>• Contactarnos para obtener información</li>
                  <li>• Compartir contenido de manera respetuosa</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Uso Prohibido</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Usar el sitio para fines ilegales o fraudulentos</li>
                  <li>• Intentar acceder a áreas restringidas</li>
                  <li>• Interferir con el funcionamiento del sitio</li>
                  <li>• Copiar o reproducir contenido sin autorización</li>
                </ul>
              </div>
            </section>

            {/* Pedidos y pagos */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Pedidos y Pagos</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Proceso de Compra</h3>
                  <ol className="space-y-2 text-green-800">
                    <li>1. Selecciona el producto deseado</li>
                    <li>2. Contacta con nosotros vía WhatsApp o email</li>
                    <li>3. Confirmamos disponibilidad y precio</li>
                    <li>4. Realizas el pago por transferencia o efectivo</li>
                    <li>5. Procesamos tu pedido y coordinamos el envío</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Métodos de Pago</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Transferencia bancaria</li>
                    <li>• Pago en efectivo (solo local)</li>
                    <li>• Mercado Pago (próximamente)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Envíos y entregas */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Envíos y Entregas</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Cobertura de Envío</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Envíos a todo el país</li>
                    <li>• Entrega en domicilio</li>
                    <li>• Punto de retiro disponible</li>
                    <li>• Seguimiento del envío</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">Tiempos de Entrega</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Productos en stock: 3-5 días hábiles</li>
                    <li>• Productos personalizados: 2-3 semanas</li>
                    <li>• Envíos especiales: según disponibilidad</li>
                    <li>• Retrasos por fuerza mayor</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Política de devoluciones */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Política de Devoluciones</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Condiciones de Devolución</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Producto en estado original</li>
                      <li>• Empaque sin daños</li>
                      <li>• Dentro de los 7 días de recibido</li>
                      <li>• Notificación previa requerida</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Excepciones</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Productos personalizados</li>
                      <li>• Productos en oferta</li>
                      <li>• Daños por uso inadecuado</li>
                      <li>• Productos de liquidación</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-900 text-sm">
                    <strong>Nota:</strong> Los gastos de envío de devolución corren por cuenta del cliente,
                    excepto en casos de defectos de fabricación.
                  </p>
                </div>
              </div>
            </section>

            {/* Garantías */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Garantías</h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Calidad del Material</h3>
                  <p className="text-gray-600 text-sm">Garantizamos la calidad de los materiales utilizados en nuestros productos</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Trabajo Artesanal</h3>
                  <p className="text-gray-600 text-sm">Cada producto está hecho a mano con atención al detalle</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Durabilidad</h3>
                  <p className="text-gray-600 text-sm">Nuestros productos están diseñados para durar con el cuidado adecuado</p>
                </div>
              </div>
            </section>

            {/* Limitación de responsabilidad */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Limitación de Responsabilidad</h2>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Alcance de la Responsabilidad</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Luzé Rugs no será responsable por daños indirectos o consecuenciales</li>
                  <li>• La responsabilidad máxima se limita al valor del producto</li>
                  <li>• No cubrimos daños por uso inadecuado o negligencia</li>
                  <li>• Los productos artesanales pueden tener variaciones naturales</li>
                </ul>
              </div>
            </section>

            {/* Propiedad intelectual */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Propiedad Intelectual</h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imágenes,
                  diseños, logos y código, es propiedad de Luzé Rugs y está protegido por las leyes de
                  propiedad intelectual.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Permitido</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Compartir enlaces al sitio</li>
                      <li>• Usar para fines personales</li>
                      <li>• Referenciar con atribución</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prohibido</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Copiar sin autorización</li>
                      <li>• Usar para fines comerciales</li>
                      <li>• Modificar o alterar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Modificaciones */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modificaciones de Términos</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento.
                  Los cambios serán efectivos inmediatamente después de su publicación en esta página.
                </p>

                <p className="text-gray-600 text-sm">
                  Es tu responsabilidad revisar periódicamente estos términos para estar al tanto
                  de cualquier cambio.
                </p>
              </div>
            </section>

            {/* Ley aplicable */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ley Aplicable y Jurisdicción</h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Estos términos se rigen por las leyes de la República Argentina.
                  Cualquier disputa será resuelta en los tribunales competentes de San Justo, Santa Fe.
                </p>

                <p className="text-gray-600 text-sm">
                  En caso de que alguna disposición sea declarada inválida, las demás disposiciones
                  permanecerán en pleno vigor y efecto.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacto</h2>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-900 mb-4">
                  Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos:
                </p>

                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> info@luzgrugs.com.ar</p>
                  <p><strong>WhatsApp:</strong> +54 349 852-8087</p>
                  <p><strong>Dirección:</strong> San Justo, Santa Fe, Argentina</p>
                </div>

                <p className="text-blue-700 text-sm mt-4">
                  Responderemos a tu consulta en un plazo máximo de 48 horas hábiles.
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

export default TermsOfService;

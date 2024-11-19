import { useState } from "react";

const Legal = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedID, setselectedID] = useState(-1)

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const documents = [
    {
      name: "Cámara de Comercio",
      link: "/documents/2024 Abr 12- Certificado Existencia y Representacion Legal - Camara de Comercio.pdf",
    },
    { name: "RUT Avovite", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/b1e3f4a2-2f2a-4cff-921a-1c99fbe5df6d.pdf" },
    { name: "Contrato Estándar", link: "/documents/CONTRATO AVOVITE ESTANDAR.pdf" },
    {
      name: "Presentación corporativa",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/e315e6f7-86b0-4e12-a73b-ce0376cee78f.pdf",
    },
    {
      name: "Informe de gestión 2021",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/b6c9f4da-d37e-4ee9-b632-d210cad2e2a9.pdf",
    },
    {
      name: "Informe de gestión 2022",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/9d1e1b19-de0e-4851-8da0-7e729d800fcd.pdf",
    },
    {
      name: "Informe de gestión 2023",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/64df90a6-8a34-40cd-807b-2d804a30afc5.pdf",
    },
    { name: "Escritura finca 1", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/9655dafa-9b9a-4ca4-ab69-cb794090d474.pdf" },
    { name: "Escritura finca 2", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/16d06ed9-2caa-4be1-9941-e3c970c49885.pdf" },
    { name: "Escritura finca 3", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/6ca36c09-2be3-4378-88aa-498df5d1c078.pdf" },
    { name: "Escritura finca 4", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/edd4c5da-36e8-4677-8f00-d03b74db6de0.pdf" },
    { name: "Escritura finca 5", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/9832c73f-e15f-4323-8fac-4e1d4915ef77.pdf" },
    { name: "Escritura finca 6", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/04199712-cb8d-4c9c-933d-a835762403c2.pdf" },
    { name: "Póliza", link: "https://conexiones-star.concilbot.com/fileblocks/avovite/5a5b27d8-e03e-4b5c-96d2-8c1d55ceaf3c.pdf" },
    {
      name: "Simulador de cosechas y producción",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/9ced7417-4056-49eb-b099-150dcb8d650d.xlsx",
    },
    {
      name: "Certificado de uso de suelos",
      link: "https://conexiones-star.concilbot.com/fileblocks/avovite/32f55f32-dbe1-4dd9-ba58-da80c21f1f01.pdf",
    },
  ];

  const faqData = [
    {
      question: "¿Que es un vite y cómo funciona Avovite?",
      answer:
        "En Avovite tienes la oportunidad única de adquirir los frutos de nuestro cultivo de aguacate y complementarios de manera anticipada, mediante un contrato de compraventa de cosa futura (frutos). A esto lo llamamos un vite. Al adquirir un “vite“, esencialmente están asegurando una fracción equivalente a la producción de las futuras cosechas de un árbol, lo que te otorgará aguacates y cultivos complementarios, por un periodo de hasta de 20 años. En otras palabras, si por ejemplo se cuentan con 1000 árboles plantados, cada uno representa 1 vite. En consecuencia, al adquirir 1 vite, el tu como clientes recibirás el 0.1% de la cosecha proveniente de estos árboles. Por otro lado, los clientes también tienen flexibilidad en la gestión de esos frutos. Al poseer un “vite”, tienes la opción de recibir directamente los frutos cuando la cosecha esté lista; o alternativamente, si lo prefieres, Avovite por medio de terceros o por cuenta propia se encargará de gestionar la  comercialización de los frutos. En este proceso de reventa de los frutos, Avovite cobrará un 30% sobre el valor de la venta. Hemos desarrollado unos métodos específicos de producción y germinación, así como de manipulación y presentación de cultivos de aguacate mediante un programa técnico-agrícola, que en conjunto constituyen un know-how agrícola y comercial.",
    },
    {
      question:
        "¿Por qué avovite considera que para un cliente puede ser atractivo adquirir los frutos con aras de una reventa por cuenta propia o de terceros?",
      answer:
        "Esta innovadora dinámica de Avovite, al financiarse mediante la adquisición anticipada de los clientes y actuar como gestor de negociaciones, genera beneficios significativos para aquellos que adquieren los Vites. Al romper con el tradicional secretismo en las transacciones comerciales, los clientes obtienen acceso directo a los productos,  eliminando barreras y permitiendo una relación más transparente. Además, al integrar a los clientes en el y a los comercializadores en el proceso económico, se promueve una distribución más equitativa de recursos y oportunidades, transformando el agro en un espacio accesible para todos. Esta apertura y colaboración directa con los clientes y comercializadores resulta en un modelo más justo y beneficioso para todas las partes involucradas.",
    },
    {
      question: "¿Quiénes son los dueños de los terrenos?",
      answer:
        "Los terrenos donde se desarrolla el proyecto agrícola son de propiedad de Avovite SAS, y están ubicados en el municipio de Montebello – Antioquia, por ser terreno apto para la producción de aguacate Hass.  ",
    },
    {
      question: "¿Como determina avovite el valor a cobrar de cada Vite?",
      answer:
        "Avovite determina el valor de $2.200.000 mediante un exhaustivo proceso financiero. Se realiza una corrida financiera completa para cada lote de 20 hectáreas, que incluye un análisis detallado de costos. El valor de ejecución del proyecto se calcula considerando aspectos como inversión inicial, mantenimiento, cosecha, entre otros. Este valor se divide por el número aproximado de Vites a comercializar. Luego, se agrega un porcentaje correspondiente a AIU (Administrativos, Imprevistos y Otros), así como un porcentaje destinado a estrategias de marketing y una prima de utilidad en favor de la compañía. El precio resultante de $2.200.000 se compara con el precio por kilogramo que adquirirán los clientes, aproximadamente, y se realiza un análisis financiero detallado para un cliente que busque revender con Avovite. Este análisis incluye proyecciones de rentabilidad, considerando diversos escenarios y variables económicas.Para el cobro del 30% por reventa, Avovite examina los costos asociados a esta operación. Se define un margen de rentabilidad basado en los costos de empresas especializadas en servicios de corretaje. Este enfoque asegura que el porcentaje cobrado refleje de manera justa los servicios brindados por Avovite en el proceso de reventa, garantizando una relación equitativa entre la compañía y sus clientes.",
    },
    {
      question: "¿Cuál es el valor comercial de los terrenos?",
      answer:
        "Actualmente, el valor comercial de los terrenos de Avovite supera los cuatro mil millones de pesos colombianos. En mayo de 2022, se llevó a cabo un estudio para obtener el avalúo comercial de los predios. En dicho estudio, se consideraron el valor de los terrenos, las mejoras realizadas y el uso del suelo hasta el momento del avalúo. Como resultado de este análisis detallado, se determinó un valor total de $3.039.404.592.",
    },
    {
      question: "¿Cuál es el sustento financiero detrás del modelo de negocio?",
      answer:
        "Es crucial destacar que existe una explicación financiera razonable para que un cliente desee adquirir Vites con el objetivo de revenderlos. Al comprar los Vites por anticipado, los adquiere a un costo significativamente más bajo. Por ejemplo, en un escenario donde se espera que la producción se normalice a 150 kilos después del cuarto año de cosechas, el cliente podría estar adquiriendo aproximadamente 2730 kilos a lo largo de los 20 años del contrato. Al pagar $2.200.000 COP, (precio máximo actual) significa que estaría pagando sólo $805 pesos por kilo.\nIncluso al venderlos en el mercado nacional a los precios actuales ($2000 COP), el cliente estaría adquiriendo los productos a un precio promedio de aproximadamente el 40% del precio de mercado. Pero, además, consideremos otro escenario donde se produzcan 100 kilos por árbol desde el cuarto año de producción; en este caso, al comprar por anticipado, el cliente estaría pagando en promedio $1170,2 COP por kilo, un 50% sobre un precio actual de mercado ($2300 COP). Aunque esta operación es netamente ilustrativa para este requerimiento con el propósito de entender la razonabilidad financiera para el cliente nos permitimos construir estos escenarios calculando el Valor Actual Neto de un Flujo en estos escenarios.\n\nEs importante destacar que los clientes comprenden que al comprar de manera anticipada, están adelantándose a la inflación, la cual se les traslada a su favor en el proceso de comercialización. Esta estrategia no solo les permite asegurar precios más bajos sino que también representa un escenario de gana-gana, ya que nos brinda la capacidad para invertir más por árbol y nos hace más competitivos en el mercado.\n\nAunque la operación presentada anteriormente es meramente ilustrativa y tiene como único propósito brindar una comprensión conceptual, resulta esencial analizar la razonabilidad financiera de la adquisición anticipada de Vites con el fin de revender los frutos. En este contexto, hemos calculado el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR) de un flujo de ingresos asociado a la compra anticipada de Vites y posterior reventa. El VAN y la TIR son herramientas fundamentales para evaluar la rentabilidad de una inversión, teniendo en cuenta la pérdida de valor del dinero con el tiempo. Para simplificar, es crucial entender que el valor del dinero disminuye con el tiempo debido a la inflación y otros factores. El VAN nos indica si dicha adquisición y reventa generará ganancias o pérdidas en términos actuales, mientras que la TIR nos proporciona la tasa de retorno de la inversión. Estos cálculos permiten una interpretación más precisa de por qué los clientes pueden adquirir Vites a descuentos significativos, en el ejemplo del 50%, y aún considerar la operación como financieramente atractiva.\n\nEs crucial evitar malas interpretaciones al considerar que la adquisición anticipada de Vites, con un descuento del 50%, se traduce automáticamente en un negocio extraordinariamente rentable. La percepción de una ganancia sustancial se basa en el descuento aplicado al precio actual de los frutos. Sin embargo, es vital tener en cuenta el valor del dinero en el tiempo. La operación se evalúa considerando el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR), que son indicadores financiero-económicos que ponderan la pérdida de valor adquisitivo del dinero con el tiempo. En otras palabras, el descuento no se traduce directamente en un margen de beneficio, ya que el análisis financiero ajusta la percepción de rentabilidad para reflejar la depreciación del valor del dinero durante el período del contrato. Este enfoque más preciso ayuda a comprender que la adquisición anticipada, aunque presenta un descuento atractivo, se evalúa holísticamente, para evaluar la razonabilidad considerando la realidad económica y financiera a lo largo del tiempo de la adquisición dando una tasa interna de retorno del 10% la cual presenta razonabilidad para un negocio del sector real. Calculada con una tasa de descuento u oportunidad del 11% y una inflación año tras año del 5%.",
    },
    {
      question: "¿Cuánto tardan en producirse las cosechas?",
      answer:
        "Por factores climatológicos principalmente no podemos dar una fecha específica de producción, sin embargo, en nuestro contrato aclaramos que:\n\nEl proceso de germinación y maduración de los frutos objeto del contrato, tendrá un tiempo aproximado que en términos generales será de entre 26-30 meses, durante los cuales los frutos y cosechas tendrán las siguientes etapas:\n\n– Preparación del terreno y fertilización.\n– Siembra.\n– Proceso de germinación.\n– Administración del desarrollo del árbol (fertilización foliar, fertilización radicular, poda, entre otros).\n– Desarrollo del fruto.\nDebido a que una buena parte de nuestros árboles ya se encuentran sembrados, entregaremos frutos a nuestros clientes en el año 2024.",
    },
    {
      question: "¿Cómo funciona la comercialización de frutos en general?",
      answer:
        "En este enfoque, la empresa que comercializa el aguacate vende directamente al mercado internacional. Este proceso involucra la identificación de mercados extranjeros, la negociación de acuerdos comerciales y logística internacional para enviar los productos directamente a los compradores internacionales. En este caso, el comercializador puede optar por vender el aguacate a intermediarios especializados en exportación. Estos terceros exportadores se encargarán de la logística y la venta internacional. La deshidratación del aguacate implica la eliminación de la mayor parte del contenido de agua, lo que facilita su transporte y aumenta su vida útil. Los productos deshidratados pueden ser más fáciles de exportar y almacenar. Si hay una demanda significativa en el mercado nacional, se puede optar por comercializar y vender el aguacate a nivel local.",
    },
    {
      question: "¿Cómo garantizan la transparencia en las operaciones?",
      answer:
        "Garantizamos la transparencia en nuestras operaciones mediante diversas medidas. Mostramos y exhibimos los documentos que demuestran que AVOVITE es propietaria de los predios donde se producen los frutos que serán objeto de las operaciones. Actualmente, estamos en proceso de desarrollo de una plataforma dedicada, donde los clientes podrán acceder y revisar información detallada sobre nuestro cultivo de manera continua y podrán allí revisar la información detallada de las cosechas con transparencia. Además, compartiremos todas las tablas de producción, que detallan aspectos clave del proceso agrícola. Nuestros clientes pueden visitar en cualquier momento el cultivo, con previo agendamiento y seguimiento de protocolos de higiene e inocuidad. ",
    },
    {
      question: "¿Cómo se lleva la contabilidad?",
      answer:
        "En el contexto de nuestra operación, la gestión contable se ve influida por la naturaleza de nuestro producto, el fruto. Dado que las ventas de los vites representan una entrega de frutos a los clientes, este proceso se registra contablemente como un anticipo. Aunque se genera un flujo de efectivo asociado a estas transacciones, la contabilidad refleja que la compañía aún no ha obtenido ingresos contables, ya que los productos no han sido entregados. Es importante señalar que esta metodología implica que, a pesar de contar con entradas de efectivo, la empresa no reporta utilidades hasta que los aguacates maduren y estén listos para la entrega. Este enfoque refleja una representación fiel de la realidad financiera de la empresa, ya que reconoce las obligaciones pendientes de cumplimiento. Una vez que los frutos alcanzan la madurez necesaria y están listos para la entrega, la compañía emitirá facturas electrónicas a cada cliente por el total producido durante el período correspondiente. Este proceso permite sincronizar la generación de ingresos contables con la entrega efectiva de los productos, garantizando una presentación precisa de la situación financiera de la empresa; los clientes podrán descargar estas facturas directamente desde nuestra app. En términos de proyección a largo plazo, si el cliente paga $2´200.000 por el valor de la cosecha de 20 años, la compañía factura anualmente la cantidad correspondiente, distribuyendo los ingresos de manera proporcional a la producción anual. Este enfoque contable asegura la transparencia en la presentación de los resultados financieros a lo largo del tiempo, permitiendo una gestión precisa de las operaciones y una toma de decisiones informada. En un ejemplo práctico donde Avovite entregue 50 kilos al cliente, deberá reconocer el valor de estos frutos en los ingresos y dar de baja el correspondiente de los $2.200.000 de anticipo.",
    },
    {
      question: "¿Hay reuniones o actualizaciones periódicas para los clientes?",
      answer:
        "Sí, en Avovite, reconocemos la importancia de mantener una comunicación constante y transparente con nuestros clientes, proporcionamos actualizaciones periódicas para mantenerlos informados sobre el progreso del cultivo, eventos relevantes y cualquier cambio significativo en nuestras operaciones. Nuestro objetivo es construir una comunidad informada y comprometida, brindando la oportunidad para que los clientes estén al tanto de los desarrollos en tiempo real, sumado al hecho que pueden visitar el área de terreno donde están plantados los cultivos.",
    },
    {
      question: "¿Que representa para el cliente esto en términos contables?",
      answer:
        "Este ingreso que reconoce Avovite representa para el cliente un Costo de Venta si decide realizar la Comercialización. En un Ejemplo donde avovite Reconozca $110.000 pesos por 50 kilos de frutos entregados al cliente y este decida comercializarlos a un valor de mercado de $7.000 COP el Cliente tendrá un ingreso de  $350.000 y un costo de ventas de $110.000 COP, teniendo una utilidad bruta de $230.000 ",
    },
    {
      question: "¿Pueden retractarse los clientes de la compra?",
      answer:
        "Avovite cumple cabalmente con todos los requisitos establecidos en materia mercantil en relación con el derecho de retracto, según las directrices de la Superintendencia de Industria y Comercio. Es fundamental destacar que, a diferencia de otras transacciones de compraventa de cosa futura, como las ventas sobre planos de inmuebles, Avovite no ha contemplado ninguna penalidad por retracto hasta la fecha. En el ámbito de las ventas sobre planos, es común que las constructoras apliquen penalidades, aproximadamente del 30%, debido a que el pago del cliente (anticipo) inicia el proceso de construcción. Esta penalidad se justifica por la naturaleza del proceso, ya que la inversión del cliente contribuye al avance de la obra. No obstante, en el caso de Avovite, aunque esta es para el avance de cultivo se aplica esta misma lógica.",
    },
    {
      question: "¿Avovite garantiza algún tipo de rentabilidad?",
      answer:
        "No, AVOVITE, en cumplimiento de lo estipulado en  el Código de Comercio, tiene el firme compromiso de entregar los frutos a los clientes que adquieren dichas cosechas. Al adquirirlas de forma anticipada, los clientes obtienen los frutos a un valor muy por debajo del precio de mercado y pueden decidir utilizarlos para su consumo personal, comercializarlos por cuenta propia o dejar que AVOVITE se encargue de la reventa, ya sea directamente o a través de terceros. Sin embargo, AVOVITE no garantiza una producción específica, ya sea mínima o máxima, ya que las cosechas pueden variar debido a diversas condiciones fuera de nuestro control, como el clima, entre otras. Tampoco se garantiza una utilidad fija, incluso si el cliente decide que AVOVITE realice la reventa, ya que esta puede fluctuar en función de la oferta y demanda del aguacate Hass. Por lo tanto, la utilidad dependerá tanto de las cosechas, que están relacionadas con la producción total del cultivo, como del precio de venta del producto, el cual está influenciado por la oferta y demanda, y puede fluctuar por diversas razones del mercado. Las proyecciones presentadas son ejemplos basados en escenarios potenciales y no garantizan resultados específicos ni futuros. Es importante tener en cuenta que, mientras una fluctuación negativa podría reducir el margen de utilidad, una fluctuación positiva en el precio, la calidad y la cantidad de producción de las cosechas podría incrementarlo.",
    },
    {
      question: "¿Cómo maneja Avovite el componente social?",
      answer:
        "Nuestra finca de aproximadamente 66 hectáreas, está ubicada en la vereda Los Zarcitos, situada en el municipio de Montebello. La armonía del entorno rural de esta vereda es el hogar de 62 familias que encuentran su sustento y arraigo en estas tierras. Consciente de la importancia de preservar y fortalecer la relación entre la comunidad y su entorno, nuestra empresa se ha comprometido con los principios fundamentales de sostenibilidad. Es preciso señalar que estas familias, arraigadas profundamente en su entorno, consumen el agua generada en nuestras fincas, estableciendo así un vínculo esencial entre la empresa y la comunidad local. Esta aproximación no sólo refleja nuestro compromiso con la sostenibilidad ambiental, sino que también subraya la responsabilidad inherente que asumimos en la gestión cuidadosa de este recurso fundamental. La conexión directa entre nuestras operaciones y el abastecimiento de agua para las familias de Los Zarcitos resalta la importancia de nuestra labor en la preservación y gestión sostenible de los recursos hídricos. Implementamos prácticas que garantizan la calidad y disponibilidad del agua, contribuyendo así al bienestar diario de quienes consideran esta comunidad como su hogar. Adicionalmente, hemos priorizado el componente social al optar por contratar en el cultivo personal residente de la zona. Esta decisión no solo busca impulsar la economía local, sino que también fortalecer los lazos comunitarios. Al emplear a trabajadores que son residentes de la región, no solo queremos fomentar la inclusión y participación activa en el desarrollo local, sino que también contribuir al bienestar social al generar empleo directo en la comunidad. En línea con nuestro compromiso hacia la sostenibilidad y el desarrollo equitativo en la región, hemos contribuido y seguiremos contribuyendo al desarrollo y mejora de las vías de la vereda. Asimismo, hemos llevado a cabo diversos aportes en materia de capacitación agrícola, concientización y posteriormente tecnificación, con el objetivo de mejorar la calidad de vida de la comunidad local. Buscamos que la comunidad sea aún más productiva y adquiera una variedad de habilidades que les permitan enfrentar los desafíos y aprovechar las oportunidades emergentes. Este compromiso no sólo refleja nuestra visión a largo plazo, sino que también reafirma nuestro papel activo en el fomento del desarrollo sostenible y el fortalecimiento de capacidades locales. Nos enorgullece destacar que hemos sido referentes en el cultivo de aguacate, siendo reconocidos por nuestras prácticas. Como muestra de nuestro compromiso con el conocimiento y la educación, la Universidad Nacional (UNAD), realizó capacitaciones técnicas en nuestro cultivo de aguacate. En esta ocasión, estudiantes de la universidad asistieron al cultivo para recibir dicha clase impartida por nuestro agrónomo, quien, tomando como referencia los árboles cultivados, compartió valiosos conocimientos y experiencias. Esta actividad contó con la participación activa de los trabajadores de la finca; consolidando así la integración de la comunidad local en nuestro enfoque de desarrollo sostenible y de investigación.",
    },
    {
      question: "¿Qué tan viable es dicha reventa?",
      answer:
        "Según informes de Bancolombia la tasa de crecimiento de la demanda mundial del aguacate se estima en el 5% por año, es una industria que va en auge desde la comida, más de 120 usos médicos, fabricación de cosméticos, plástico renovable y otros que se derivan del aguacate. El aguacate es una fruta mundialmente reconocida y con alta tendencia en la demanda y poca oferta de terrenos aptos para la producción de esta fruta. Hoy tenemos intenciones de compra por parte de las comercializadoras para 300 Toneladas semanales. ",
    },
    {
      question: "¿Cómo maneja Avovite el componente ambiental?",
      answer:
        "En lo ambiental, hemos mantenido una gestión responsable del agua y hemos evitado desviar cauces de ríos, utilizar sistemas de riego; o crear reservorios  teniendo en consideración que los cultivos de aguacate Hass han sido criticados por alto consumo de agua. Es importante poner en perspectiva la cantidad de agua necesaria para recolectar un kilo de aguacate en comparación con otros alimentos. En una producción por hectárea de 8,000 kilos por año, se necesitarán alrededor de 1,000 litros de agua para cada kilo de aguacate. Además, en comparación con otros alimentos, el aguacate consume una cantidad de agua similar o inferior, como se muestra en la siguiente tabla de la cantidad de agua necesaria para obtener determinados alimentos. Esto es importante debido a que a parte de los tubérculos y remolachas de azúcar el aguacate consume la misma cantidad de agua o menos que otros alimentos que ingerimos. En el caso de las hortalizas, aunque el consumo del aguacate por Kg de alimento es superior, nutritivamente, su consumo por Kilocaloría o por gramos de grasa es igual o inferior”. Además, hemos implementado prácticas sostenibles como la reutilización de residuos orgánicos para el compostaje y la NO utilización de pesticidas y herbicidas, lo que incentiva a conservar la fauna y flora en los alrededores de la vereda.",
    },
  ];

  return (
    <>
      <section className="bg-white py-10 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-gray-800 mb-8" style={{ lineHeight: '1.2' }}>Documentos y <br /> Recursos Legales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <div
                onClick={() => window.open(doc.link, "_blank")}
                key={index}
                onMouseEnter={() => setselectedID(index)}
                onMouseLeave={() => setselectedID(-1)}
                className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow aspect-square text-center text-gray-800 font-semibold cursor-pointer h-[200px] w-full"
              >
                <span className="mb-2 text-xl">{doc.name}</span>

                {selectedID === index ? (
                  <img src="/icons/descarga.png" className="w-11" />
                ) : <span className="text-2xl">→</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-w-7xl mx-auto">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-16 gap-x-8">
            {faqData.map((faq, index) => (
              <div key={index} className="w-full">
                <div
                  className="flex items-start justify-between gap-6 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <p className="font-semibold text-gray-800 w-4/5 text-lg">{faq.question}</p>
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 transition-transform transform ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600 transition-opacity duration-300 ease-in-out opacity-100">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Legal
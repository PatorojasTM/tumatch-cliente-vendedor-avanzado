/* ============================================================
   TuMatch · CLIENTE VENDEDOR · AVANZADO · 2026
   7 módulos · 5 preguntas a rendir (banco rotativo de 20 por módulo)
   Prueba Final: 14 preguntas a rendir (banco rotativo de 40)
   Bloqueo: 5 errores acumulados = 10 min (en módulos y en prueba final)
   ============================================================ */

const WHATSAPP_NUMBER = "56934107448";
const WHATSAPP_MESSAGE = "Hola TuMatch, terminé el taller avanzado Cliente Vendedor y quiero activar mi perfil de corredor captador+gestor de vendedores.";

const FRIENDLY_MISS = [
  "Tómate tu tiempo, evalúa bien las respuestas. Una decisión pensada vale más que diez apuradas.",
  "Respira y relee con calma. Este material lo vas a usar con clientes reales.",
  "Mejor estudia con calma para obtener mejores resultados: cada error bien entendido suma más que una respuesta correcta al azar.",
  "Tranquilidad. Relee el enunciado, piensa cuál encaja con lo que haría TuMatch y vuelve.",
  "Todo corredor top se equivocó varias veces aprendiendo. Ajusta y sigue.",
];

/* ============================================================
   BANCO DE PREGUNTAS · 20 POR MÓDULO
   ============================================================ */
const quizBank = {
1: [
  { q:"¿Cuál es la capa más importante del ACM?", opts:["Comparables en venta","Comparables vendidos (cierres 6–12 meses)","Comparables de otra comuna","Avalúo fiscal SII"], correct:1, why:"Los precios de cierre son la realidad del mercado; lo publicado es intención.", whyNot:["Son intención, no realidad.","","Distorsiona; debe ser misma zona.","Avalúo fiscal rara vez refleja mercado."] },
  { q:"Una propiedad publicada 90 días sin cerrar:", opts:["Solo le faltan fotos","Está 'quemada': portales la esconden y compradores la ignoran","Subirá de precio","Es ideal para inversión"], correct:1, why:"Tras 90 días el algoritmo y los compradores la penalizan.", whyNot:["Síntoma, no causa.","","Al revés.","No lo determina el tiempo en portal."] },
  { q:"El 'precio piso' es:", opts:["El más bajo del sector","El mínimo aceptable del vendedor, que NO se comparte con el comprador","El valor SII","El precio lista"], correct:1, why:"Es información interna del corredor y el cliente, nunca se revela al comprador.", whyNot:["Se refiere a ESTA propiedad, no al sector.","","No guarda relación directa.","Es el publicado, muy distinto."] },
  { q:"Herramienta TuMatch para estimar precio:", opts:["/herramientas/rentabilidad","/herramientas/estimacion-de-precio","/herramientas/calculadora-comision","/herramientas/promociones"], correct:1, why:"El módulo oficial Estimación de Precio entrega UF/m² actualizado por zona.", whyNot:["Es para cap rate, no estimación de precio.","","Calcula honorarios, no precio.","Es catálogo de beneficios."] },
  { q:"Piso 1 vs piso 12 orientación norte, mismo edificio:", opts:["Valen igual","El 12 vale típicamente +13–18% más (1,5%/piso aprox.)","El 1 vale más","Depende del color"], correct:1, why:"Cada piso sobre el 3° suma ~1,5%; tope técnico ~pisos 12–15.", whyNot:["No; el piso y la altura impactan.","","Contradice la regla.","Anecdótico."] },
  { q:"Un cliente exige publicar 15% sobre ACM. ¿Qué haces?", opts:["Lo rechazas","Aceptas con plazo: 30 días a su precio, luego ajuste al ACM firmado por escrito","Publicas y ves qué pasa","Lo aceptas sin condiciones"], correct:1, why:"Preserva la relación y pacta el ajuste desde el día 0.", whyNot:["Pierdes el mandato.","","Te sube los costos sin control.","Pierdes tiempo y dinero sin compromiso."] },
  { q:"La 3ª capa del ACM son:", opts:["Propiedades en venta","Comparables RETIRADOS (90+ días sin cerrar)","Rumor del dueño del edificio","Avalúo fiscal"], correct:1, why:"Los retirados marcan el techo real del precio aceptado.", whyNot:["Es la 2ª capa.","","Anecdótico, no técnico.","Ya vimos que no aplica."] },
  { q:"El delta ideal precio lista vs precio objetivo:", opts:["Idéntico","3–5% arriba (margen de negociación sin asustar compradores)","15% arriba","30% arriba"], correct:1, why:"Ese margen permite negociar cerrando cerca del objetivo.", whyNot:["Pierdes espacio de negociación.","","Te saca del radar del buen comprador.","Propiedad queda quemada."] },
  { q:"Estacionamiento independiente en zona céntrica:", opts:["+20 UF","+250–600 UF según comuna","Nada","–100 UF"], correct:1, why:"Es un bien escaso en comunas densas.", whyNot:["Subestimado.","","Sí agrega valor.","Contradice el mercado."] },
  { q:"En el CRM, la ficha del vendedor debe incluir:", opts:["Solo teléfono","ACM con comparables, fotos, acuerdo de precio firmado","Una nota mental","El logo de TuMatch"], correct:1, why:"Trazabilidad completa del caso es requisito TuMatch.", whyNot:["Insuficiente para trabajar el caso.","","No es profesional ni auditable.","No tiene utilidad técnica."] },
  { q:"Comparables vendidos se obtienen de:", opts:["Solo portales","CBR + escrituras + precios de cierre reportados + red TuMatch","Solo redes sociales","Olfato"], correct:1, why:"Los precios de cierre efectivos se cruzan con múltiples fuentes.", whyNot:["Los portales muestran publicación, no cierre.","","Poco confiable.","No es técnico."] },
  { q:"Ajuste por estado 'obra gruesa vs terminado':", opts:["Ninguno","–8% a –18% si requiere remodelación","Siempre +10%","+25%"], correct:1, why:"Es un costo de trabajo y tiempo para el comprador.", whyNot:["Ignora el costo real.","Contradice el sentido.","Agrega valor que no está.","Exagerado."] },
  { q:"Orientación norte vs poniente, mismo piso:", opts:["Igual","Norte +3–6% por luz y menos sol poniente","Poniente +10%","Depende del edificio"], correct:1, why:"Norte = luz todo el día, templado; poniente = calor intenso tarde.", whyNot:["Ignora el impacto.","No; al revés.","","Parcialmente; pero el patrón es consistente."] },
  { q:"Antes de mostrarle precio al cliente, tú:", opts:["Le dices tu número","Proyectas el CRM con ACM y 10 comparables para que vea evidencia, no opinión","Se lo pones por WhatsApp","Te ríes y esperas"], correct:1, why:"La evidencia proyectada reduce el sesgo de anclaje y construye confianza.", whyNot:["Es opinión sin respaldo.","Frío y no visual.","Contradice el objetivo del encuentro.","No profesional."] },
  { q:"La tasación bancaria suele ser:", opts:["Mayor que comercial","Menor que comercial (conservadora para garantizar crédito)","Igual siempre","Aleatoria"], correct:1, why:"El banco protege su colateral con una visión conservadora.", whyNot:["Generalmente al revés.","","Son objetivos distintos.","Hay metodología regulada."] },
  { q:"Bodega en edificio:", opts:["+20 a +60 UF","+60 a +180 UF","+1000 UF","Nada"], correct:1, why:"Rango habitual; mayor en comunas céntricas y edificios con pocas bodegas.", whyNot:["Subestimado.","","Irreal.","Sí agrega valor."] },
  { q:"Cuando el precio objetivo ya está definido, al cliente le compartes:", opts:["Nada","Precio lista (público), precio objetivo (reservado con él), piso (reservado para ti)","Solo el piso","Los tres al comprador"], correct:1, why:"Cada nivel se usa en un contexto distinto.", whyNot:["Oculta al cliente.","","Incompleto.","Expone posición negociadora."] },
  { q:"Ajuste por cada 10 m² de diferencia entre comparable y propiedad:", opts:["0%","±2–4%","±15%","±30%"], correct:1, why:"Es un ajuste proporcional no lineal por economías del metro adicional.", whyNot:["Ignora impacto real.","","Sobredimensionado.","Irreal."] },
  { q:"¿Por qué es crítico firmar el precio acordado por escrito en el CRM?", opts:["Por moda","Porque evita el renegociar el precio cada 2 semanas cuando no hay ofertas","Es ilegal no hacerlo","TuMatch lo exige sin razón"], correct:1, why:"El acuerdo escrito ancla la decisión y protege la relación corredor-vendedor.", whyNot:["Es protección real.","","No es ilegal, es buena práctica.","Hay razón técnica fuerte."] },
  { q:"Amenities (piscina, quincho, gym):", opts:["No afectan","Suman +2–5% al edificio completo","Bajan el precio","Suman +30%"], correct:1, why:"Son factor secundario pero medible.", whyNot:["Sí aplican, moderadamente.","Contradice el mercado.","","Sobredimensionado."] },
],
2: [
  { q:"Motivación real del vendedor se descubre con:", opts:["Redes sociales","Pregunta abierta: '¿Qué vas a hacer con el dinero de la venta?'","Estimación de precio","Una llamada ciega"], correct:1, why:"La respuesta revela urgencia, plazo y flexibilidad de precio.", whyNot:["Superficial.","","No da info emocional.","No saca info clave."] },
  { q:"El sesgo de anclaje aplicado al vendedor:", opts:["Nunca lo afecta","Fija una cifra inicial y hace doler cada rebaja desde ahí","Solo afecta compradores","Es un mito"], correct:1, why:"Kahneman lo demostró: el número inicial se convierte en referencia emocional.", whyNot:["Es uno de los sesgos más robustos.","","Afecta a ambos lados.","Está ampliamente validado."] },
  { q:"Contra el ancla 'mi vecino vendió en X', la respuesta profesional es:", opts:["Discutir","Mostrar 6 comparables del edificio con fechas y precios de cierre actualizados","Decirle que está mal","Ignorarlo"], correct:1, why:"Evidencia neutra desancla mejor que opinión.", whyNot:["Genera resistencia.","","Confrontacional.","No responde la objeción."] },
  { q:"LAARC significa:", opts:["Listen · Argue · Attack · Refuse · Close","Listen · Acknowledge · Assess · Respond · Confirm","Lead · Ask · Advise · Rest · Close","Ninguna de las anteriores"], correct:1, why:"Marco clásico de objection handling basado en escucha activa.", whyNot:["Contradice la escucha empática.","","Omite reconocimiento.","Es LAARC real."] },
  { q:"Si el cliente dice 'no tengo apuro', tu mejor respuesta:", opts:["'Ok, llámame'","'Perfecto. Solo asegúrate que pagar GC + contrib. + costo oportunidad (~0,5% mensual) y perder 7% cada 30 días sobre ACM esté OK para ti'","'Bájale el precio ya'","'No te creo'"], correct:1, why:"Refrasea la 'falta de apuro' en un costo mensual medible.", whyNot:["Pierdes influencia.","","Arrogante y prematuro.","Agresivo."] },
  { q:"El 'silencio estratégico' tras plantear el precio objetivo:", opts:["1 segundo","7 segundos (el primero que habla, cede)","1 minuto","No sirve"], correct:1, why:"Técnica de negociación probada en sales: el silencio empuja al otro a hablar.", whyNot:["Muy corto, no genera efecto.","","Incómodo y contraproducente.","Contradice la evidencia en sales."] },
  { q:"Objeción 'prefiero publicarla yo mismo, me ahorro comisión'. Respuesta:", opts:["Regalarle comisión","Datos: FSBO vende 12% más barato y demora 2,3× más en promedio","Reírse","Aceptar y retirarse"], correct:1, why:"Dato duro demuestra que la comisión se paga sola.", whyNot:["Destruye modelo.","","Falta de empatía.","Pierde al cliente."] },
  { q:"SPIN Selling. La 'I' de SPIN es:", opts:["Interés","Implicación · '¿qué pasa si no vendes en 6 meses?'","Intuición","Intercambio"], correct:1, why:"La implicación conecta el problema con consecuencias.", whyNot:["No aplica al framework.","","Abstracto.","No corresponde."] },
  { q:"Frente al cliente emocional ('tiene recuerdos, no la voy a regalar'):", opts:["Contradecirlo","Validar el valor emocional, luego proponer que el mejor homenaje es una familia nueva que la quiera","Insistir en el precio","Ofrecerle terapia"], correct:1, why:"Validar antes de redirigir usa empatía, no fuerza.", whyNot:["Destruye relación.","","Repite lo que no funcionó.","Impropio."] },
  { q:"4 señales de urgencia real:", opts:["Plazo duro, costo de mantención, segundo mandato, liquidez para nueva compra","Solo el precio","Solo familia","Solo DICOM"], correct:0, why:"Son los 4 detectores clásicos en el manual TuMatch.", whyNot:["","Insuficiente.","Parcial.","No aplica al diagnóstico."] },
  { q:"Cliente dice 'otro corredor me ofrece más caro'. Mejor respuesta:", opts:["'Ok bye'","'Sobreprecio inicial es técnica conocida. ¿Te muestro 3 mandatos del último año con ese patrón que terminaron bajando el precio a los 60 días?'","'Mentira'","'Te pago yo la diferencia'"], correct:1, why:"Desarma la táctica con evidencia y posiciona tu criterio profesional.", whyNot:["Pierdes oportunidad.","","Agresivo y pierde relación.","Imposible económicamente."] },
  { q:"Al detectar motivación por divorcio, lo correcto es:", opts:["No hacer nada","Reconocer que hay firmas pendientes, pedir acreditación + fecha objetivo, y alinear precio con urgencia","Proponer más precio","Esperar"], correct:1, why:"El divorcio implica plazo legal y posible co-propiedad; debe gestionarse con cuidado.", whyNot:["Pierde info crítica.","","Contrario a la realidad.","Demora el caso."] },
  { q:"'La gente habla mucho, escucha poco'. Ratio ideal al captar vendedor:", opts:["90/10 tú","70/30 tú","30/70 tú (cliente habla más)","100/0 él"], correct:2, why:"Escucha activa: el cliente habla 70%, tú guías con preguntas.", whyNot:["Eliminas la info del cliente.","Aún hablas demasiado.","","No extraes nada valor dialogando."] },
  { q:"Una buena pregunta tipo 'Necesidad-pago' (SPIN):", opts:["'¿Cuánto cobras?'","'Si cerramos al precio ACM en 60 días, ¿te sirve?'","'¿Firmas ya?'","'¿Vendes sí o no?'"], correct:1, why:"La N conecta solución con necesidad real del cliente.", whyNot:["No es SPIN.","","Presión sin valor.","Cierre sin contexto."] },
  { q:"Cuando el cliente se ancla emocional ('no voy a regalarla'), lo peor que puedes hacer:", opts:["Validar","Argumentar contra el valor emocional","Proponer alternativa","Silenciar"], correct:1, why:"Discutir el valor emocional siempre escala resistencia.", whyNot:["Es lo correcto.","","Correcto cuando acompaña validación.","Tiene su momento."] },
  { q:"El punto de fricción emocional en venta por herencia:", opts:["No hay","Co-propietarios con expectativas distintas + posesión efectiva pendiente","Solo el banco","Es igual que venta normal"], correct:1, why:"Cada heredero quiere cosas distintas; el proceso legal es largo.", whyNot:["Es el más cargado emocionalmente.","","No es el único bloqueo.","Muy distinto."] },
  { q:"Una buena pregunta tipo 'Problema' (SPIN):", opts:["'¿Vendes?'","'¿Qué te llevó a pensar en vender hoy?'","'¿Cuánto?'","'¿Tienes DICOM?'"], correct:1, why:"Abre el para qué emocional y revela motivaciones.", whyNot:["Cerrada.","","Cerrada y transaccional.","Fuera de timing."] },
  { q:"Si detectas que el cliente no está listo para vender (dudoso), lo correcto es:", opts:["Empujarlo a firmar","Dejar puerta abierta con touch trimestral; no forzar mandato","Bloquearlo","Insultarlo"], correct:1, why:"Forzar un mandato sin motivación real termina en propiedad quemada.", whyNot:["Te saldrá caro.","","Pierdes futura opción.","Inaceptable."] },
  { q:"Lenguaje no verbal profesional con el vendedor:", opts:["Brazos cruzados, mirando el celular","Postura abierta, contacto visual, mirror discreto de su ritmo","Agresivo","Distante"], correct:1, why:"Mirroring genera rapport sin manipular.", whyNot:["Destruye rapport.","","Cierra al cliente.","Cierra al cliente."] },
  { q:"Cuando el cliente dice 'déjame pensarlo', lo peor es:", opts:["Validar + agendar próximo paso concreto","Presionar para firma inmediata","Aceptar sin más","Enojarse"], correct:1, why:"Presionar a 'déjame pensarlo' lo ahuyenta.", whyNot:["Es lo correcto.","","Pierdes seguimiento.","Destruye relación."] },
],
3: [
  { q:"Un inversionista de renta típicamente busca:", opts:["Colegios cerca","Cap rate bruto > 5,5%, seminuevo, cerca de metro o polo laboral","Más dormitorios","Piscina grande"], correct:1, why:"Su métrica es yield y vacancia baja.", whyNot:["Irrelevante para él.","","No le importa el tamaño per se.","Nice to have, no driver."] },
  { q:"Primera vivienda familia busca:", opts:["Cap rate","Ubicación con colegios, espacio, estacionamiento y seguridad","IVA recuperable","Arriendo asegurado"], correct:1, why:"Compra por habitar, no por rentar.", whyNot:["No sabe ni le importa.","","No aplica a su decisión.","No le resuelve nada."] },
  { q:"Una casa antigua en terreno de 300 m² con coef. 3,0 constructibilidad:", opts:["Vale como casa habitada","Vale 2–4× como terreno para desarrollador","Es para primera vivienda","Vale menos que depto moderno"], correct:1, why:"La constructibilidad alta se paga por m² futuro (900 m² edificables × UF/m² del sector).", whyNot:["Subestima el activo.","","No aprovecha valor.","Contradice realidad."] },
  { q:"Perfil 'upgrader familiar':", opts:["Compra sin vender","Compra condicionado a venta de su propiedad actual","Solo inversión","Arrienda"], correct:1, why:"Es el perfil del que cambia por crecimiento familiar y necesita liquidez de su actual.", whyNot:["Inusual.","","No es el perfil.","No aplica."] },
  { q:"Propiedad no regularizada es perfecta para:", opts:["Primera vivienda con subsidio","Comprador cash (asume el riesgo de regularización)","Inversionista con crédito","DS1"], correct:1, why:"El cash no depende de banco ni SERVIU y puede absorber el costo de regularización.", whyNot:["Imposible, SERVIU lo bloquea.","","Banco no financia.","SERVIU lo bloquea."] },
  { q:"Depto 1D1B metro centro: perfil principal?", opts:["Familia 4 miembros","Inversionista o soltero primera vivienda","Upgrader","Adulto mayor con perro"], correct:1, why:"Tipología pequeña cerca de metro = arriendo corto o soltero.", whyNot:["Muy pequeño.","","Necesita más m².","Depende, pero no es principal."] },
  { q:"Matching propiedad ↔ perfil en el CRM se hace para:", opts:["Enviar spam","Cruzar automáticamente tu propiedad con leads compradores compatibles","Llenar la ficha","Generar un reporte"], correct:1, why:"El CRM dispara alerta de matching a ambos lados.", whyNot:["Equivocación.","","Es un efecto, no el propósito.","Tangencial."] },
  { q:"A un inversionista le vendes con:", opts:["Decoración","Cap rate, caja neta mensual, vacancia del sector, IVA si aplica","Colegios cercanos","Pileta"], correct:1, why:"Habla su idioma: números, yield, riesgo.", whyNot:["Irrelevante.","","No le importa.","Nice to have."] },
  { q:"A un primera vivienda le vendes con:", opts:["Cap rate","Metros, orientación, colegios, dividendo estimado y subsidio aplicable","IVA","Caprate"], correct:1, why:"Habla de hogar y capacidad de pago.", whyNot:["No entiende, aleja.","","No aplica.","No aplica."] },
  { q:"Si el comprador NO matchea con tu propiedad:", opts:["Fuerza la venta","Lo derivas a otra propiedad TuMatch y lo mantienes como lead comprador","Lo ignoras","Lo acusas"], correct:1, why:"Protege la relación y rentabiliza el lead en la red.", whyNot:["Destruye relación y tiempo.","","Pierdes un activo.","Inapropiado."] },
  { q:"¿Quién compra una propiedad con constructibilidad alta?", opts:["Primera vivienda","Inmobiliaria / desarrollador","Primera vivienda sin visión","Inversionista renta tradicional"], correct:1, why:"Paga por m² edificables futuros.", whyNot:["No le interesa.","","No aprovecha el valor.","Su caja viene de arriendo, no desarrollo."] },
  { q:"Seminuevo (comprado a empresa 2a mano) puede dar al inversionista:", opts:["Nada","Beneficio IVA recuperable vía SpA si aplica","Subsidio DS49","Dividendo menor"], correct:1, why:"Propiedades nuevas vendidas como seminuevas mantienen el IVA recuperable.", whyNot:["Ventaja real.","","No aplica.","No relacionado."] },
  { q:"Target del extranjero / residente fuera:", opts:["Ubicación emocional","Activo de resguardo y diversificación, con gestor remoto y reportería","Piscina","Colegios"], correct:1, why:"Compra por portfolio, no por vivir.", whyNot:["Infrecuente.","","Lo valora pero no es el driver.","Fuera de su uso."] },
  { q:"Doble-match (upgrader compra contigo lo próximo):", opts:["Imposible","Le vendes su propiedad y le buscas la próxima; dos lados, dos comisiones","Solo si es familia","Solo en arriendo"], correct:1, why:"Un mismo lead, dos operaciones con doble comisión.", whyNot:["Es perfectamente posible.","","No es exclusivo de familia.","Aplica a compraventa también."] },
  { q:"InvestmentAnalysisCard del CRM se activa al:", opts:["Ningún caso","Etiquetar un lead como 'Comprador Inversión'","Publicar foto","Enviar email"], correct:1, why:"El CRM detecta el perfil y muestra cap rate + comparables de caja.", whyNot:["Es funcional y útil.","","No conecta la funcionalidad.","Tampoco."] },
  { q:"Un lead comprador primera vivienda con ingreso $900.000 líquido:", opts:["Puede todo","Dividendo máx ≈ $225.000 · crédito financiable UF ~1.000–1.400","Compra UF 5.000","DS1 tramo 3"], correct:1, why:"Regla del pulgar: dividendo ≤ 25% renta líquida.", whyNot:["Ignora CMF.","","Irreal.","Tramo 3 es clase media más consolidada."] },
  { q:"Mejor match para depto 3D 2B en Ñuñoa con piscina:", opts:["Inversionista renta clásica","Upgrader familiar o primera vivienda alto ingreso","Comprador cash oportunista","DS49"], correct:1, why:"3D 2B con amenities no da cap rate competitivo; es producto de familia.", whyNot:["Cap rate bajo.","","Posible pero secundario.","Fuera de tramo."] },
  { q:"Al inversionista no le importan los colegios porque:", opts:["Los odia","No vivirá ahí · su arrendatario puede interesarse, pero es secundario en su decisión","Siempre tiene hijos adultos","Porque vive lejos"], correct:1, why:"Su métrica es yield; colegios son factor indirecto para el arrendatario.", whyNot:["Sesgado.","","No siempre.","Irrelevante a la decisión."] },
  { q:"Cuando hay recepción final pendiente, el comprador ideal es:", opts:["Primera vivienda con crédito","Cash","DS1","Arrendatario"], correct:1, why:"Sin recepción final banco y SERVIU no operan.", whyNot:["Imposible financiar.","","Imposible de tomar el subsidio.","Fuera del caso."] },
  { q:"En la ficha del CRM, el perfil del lead comprador se marca:", opts:["Al cierre","Desde el primer contacto (determina InvestmentCard, matching y tono del chat)","Nunca","Solo si gana > $10M"], correct:1, why:"Desde el día 1 el CRM personaliza la experiencia.", whyNot:["Tarde.","","Pierdes la personalización.","No es barrera."] },
],
4: [
  { q:"Pie mínimo para crédito hipotecario primera vivienda 2026:", opts:["0%","10–20%","30–40%","50%"], correct:1, why:"Regla CMF con algunos bancos al 10% por subsidio o convenio.", whyNot:["No existe.","","Inversión.","Muy alto."] },
  { q:"Ratio dividendo / renta líquida máximo recomendado:", opts:["10%","25%","50%","80%"], correct:1, why:"Regla del pulgar CMF / bancos para aprobar crédito.", whyNot:["Subdimensionado.","","Te deja sin capacidad.","Impago seguro."] },
  { q:"Propiedad no regularizada NO puede ser comprada por:", opts:["Cash","Comprador con crédito hipotecario y con subsidio","Nadie","Primera vivienda cash"], correct:1, why:"Banco y SERVIU exigen escritura + recepción final + planos coincidentes.", whyNot:["Sí puede.","","Sí puede el cash.","Sí puede."] },
  { q:"Subsidio DS49:", opts:["Clase alta","Vulnerabilidad alta, SIN crédito, propiedad hasta 1.500 UF","Con crédito, UF 3.000","Para inversionistas"], correct:1, why:"Es el subsidio de no deuda para el primer quintil.", whyNot:["Justo al revés.","Es DS1.","Contradice el propósito.","No aplica."] },
  { q:"Leasing habitacional NO requiere:", opts:["Pagos","Pie inicial grande (el banco compra la propiedad)","Contrato","Evaluación"], correct:1, why:"El banco adquiere y arrienda con opción de compra.", whyNot:["Requiere.","","Siempre hay.","Siempre hay."] },
  { q:"Arriendo con opción de compra conviene cuando:", opts:["Nunca","Comprador no califica hoy y vendedor no tiene urgencia total; mercado congelado","Siempre","Solo en arriendo puro"], correct:1, why:"Combina caja mensual con cierre futuro a precio fijo.", whyNot:["Tiene uso real.","","Solo nicho.","Es un esquema compra."] },
  { q:"DFL2 beneficia al:", opts:["Solo vendedor","Comprador: 50% menos contribuciones 10–20 años, rentas no tributan hasta 2 propiedades por RUT","Solo primera vivienda","A nadie"], correct:1, why:"Es un paquete tributario significativo para el futuro dueño.", whyNot:["Comprador lo recibe.","","Beneficia a cualquier dueño.","Es real y relevante."] },
  { q:"Ley del Mono (20.898):", opts:["Prohíbe ampliaciones","Permite regularizar ampliaciones hasta ciertos m² y plazos","Solo arriendo","No existe"], correct:1, why:"Es el marco para regularizar construcciones sin permiso.", whyNot:["Al revés.","","No tiene que ver.","Sí existe."] },
  { q:"Certificado de dominio vigente debe:", opts:["Tener más de 1 año","Ser de los últimos 30 días al momento del cierre","No importa","Ser imaginario"], correct:1, why:"Banco y notario exigen frescura máxima 30 días.", whyNot:["Queda obsoleto.","","Sí importa.","No profesional."] },
  { q:"Si la propiedad tiene ampliación no regularizada y el comprador es con crédito:", opts:["Puede igual","La tasación bancaria ignora los m² no declarados y el crédito no alcanza","No importa","Se regulariza en un día"], correct:1, why:"Banco tasa sobre planos; lo no declarado no se considera.", whyNot:["No puede.","","Sí importa.","Irreal; toma 3–12 meses."] },
  { q:"Plazo típico de gestión bancaria post-promesa:", opts:["1 día","30–60 días","6 meses","Años"], correct:1, why:"Evaluación, tasación bancaria, escritura y CBR toma ese rango.", whyNot:["Irreal.","","Demasiado.","Incluso peor."] },
  { q:"DS1 Tramo 1 financia propiedades hasta:", opts:["UF 500","UF 1.400 (aprox. subsidio hasta 700 UF)","UF 5.000","UF 10.000"], correct:1, why:"Es el tramo de menor precio y mayor subsidio.", whyNot:["Muy bajo.","","Es DS49 o superior tramo.","Fuera de rango."] },
  { q:"Estudio de títulos típico revisa:", opts:["Nada","10 años atrás de transferencias en CBR","1 año","50 años"], correct:1, why:"Es la ventana estándar para acreditar tradición.", whyNot:["Es obligatorio.","","Insuficiente.","Excesivo."] },
  { q:"Antigüedad laboral mínima dependiente:", opts:["1 mes","12 meses","5 años","20 años"], correct:1, why:"Banco pide al menos 1 año continuo demostrable.", whyNot:["No califica.","","Excesivo.","No realista."] },
  { q:"Gastos comunes al día en el cierre:", opts:["No importan","Son requisito; se pide certificado al administrador","Solo si pide el banco","Nunca"], correct:1, why:"Sin certificado no se cierra; el notario lo pide.", whyNot:["Sí importan.","","Es requisito siempre.","Siempre se pide."] },
  { q:"Leasing habitacional vs crédito tradicional, cuota es:", opts:["Más baja","15–25% más alta","Igual","No tiene cuota"], correct:1, why:"El spread por riesgo del banco y la propiedad a su nombre eleva la cuota.", whyNot:["Al revés.","","No; difiere.","Obviamente tiene."] },
  { q:"Arriendo con opción de compra: precio final se fija:", opts:["Al final","Al inicio, por escritura notarial, con plazo máximo para ejercer la opción","Cuando guste","Nunca"], correct:1, why:"Sin precio fijo al inicio, el esquema pierde sentido y es manipulable.", whyNot:["Abre espacio a abuso.","","Sin seguridad jurídica.","Ilegal."] },
  { q:"¿Por qué preguntarle al comprador por su forma de pago antes de aceptar oferta?", opts:["Curiosidad","Define si la operación es viable en 30 días o en 90+ (cash vs crédito vs leasing)","No aporta","Es indiscreto"], correct:1, why:"Plazo y probabilidad de cierre cambian radicalmente.", whyNot:["Tiene impacto operacional.","","Define todo el proceso.","Es estándar."] },
  { q:"Propiedad DFL2 con 140 m² útiles:", opts:["Pierde el beneficio si pasa de 140","Mantiene el beneficio hasta 140 m² exactos; sobre eso, se pierde la calificación","No aplica","Es obligatorio"], correct:1, why:"El corte legal es 140 m² útiles construidos.", whyNot:["Correcto parcialmente — técnicamente pierde calificación al superar.","","Sí aplica cuando corresponde.","No es obligatorio; es un régimen."] },
  { q:"La escritura pública se firma en:", opts:["Redes sociales","Notaría · entre vendedor, comprador y banco (si hay crédito)","WhatsApp","Ministerio"], correct:1, why:"La escritura pública se otorga ante notario.", whyNot:["Ilegal.","","Impropio.","Fuera de su rol."] },
],
5: [
  { q:"Cap rate bruto se calcula como:", opts:["Arriendo mensual / precio","(Arriendo anual / precio) × 100","Precio / arriendo","Ingreso neto / m²"], correct:1, why:"Fórmula estándar: ingreso anual bruto sobre valor del activo.", whyNot:["Da mensual, no anual.","","Invertido.","No es cap rate."] },
  { q:"Cap rate bueno en Chile (bruto) según TuMatch:", opts:["2%","> 5,5%","> 20%","< 1%"], correct:1, why:"Sobre 5,5% bruto comienza a ser competitivo vs DAP + riesgo premium.", whyNot:["Muy bajo.","","Irreal.","Pérdida segura."] },
  { q:"Cap rate neto bajo la tasa de un DAP + 1%:", opts:["Es excelente","Se vende solo a primera vivienda; olvida inversionistas","Siempre bueno","Imposible"], correct:1, why:"Si el yield no supera el costo de oportunidad, no atrae inversión.", whyNot:["Al revés.","","Ignora costo de oportunidad.","Muy frecuente."] },
  { q:"Payback = 100 / cap rate neto %. Si cap neto es 5%:", opts:["5 años","20 años","100 años","50 años"], correct:1, why:"100/5 = 20 años.", whyNot:["Matemática incorrecta.","","Fuera de rango.","No aplica."] },
  { q:"Arriendo mensual estimado (fórmula rápida TuMatch):", opts:["Precio × 0,001","Precio × ratio zona (0,0045–0,0070)","Precio × 0,05","Precio × 0,10"], correct:1, why:"Ratio mensual bruto típico del sector residencial Chile.", whyNot:["Subestima.","","Irreal.","Imposible."] },
  { q:"Constructibilidad alta en terreno de 300 m² con coef 3,0:", opts:["300 m²","900 m² construibles","30 m²","3 m²"], correct:1, why:"Coef × terreno = m² construibles totales.", whyNot:["Ignora coef.","","Dividido, no multiplicado.","Irrelevante."] },
  { q:"Plan Regulador Comunal define:", opts:["Color de la fachada","Coef. constructibilidad, altura, rasantes, uso de suelo","Quién puede comprar","Precio"], correct:1, why:"Norma urbanística comunal que rige qué se puede edificar.", whyNot:["Irrelevante al PRC.","","No define compradores.","No es tarifa."] },
  { q:"Coeficiente de ocupación de suelo 0,5 en terreno 300 m²:", opts:["150 m² huella máxima","300 m² huella","Nada","50 m² huella"], correct:0, why:"COS × terreno = huella máxima construible en primer piso.", whyNot:["","No puedes cubrir todo.","No aplica.","Fórmula incorrecta."] },
  { q:"Parque a &lt; 400 m suma al valor:", opts:["0%","3–7%","30%","–5%"], correct:1, why:"Benchmark de estudios urbanos chilenos.", whyNot:["Ignora evidencia.","","Sobredimensionado.","Al revés."] },
  { q:"Para un primera vivienda familia, lo más importante del sector es:", opts:["Cap rate","Colegios + seguridad + accesibilidad + áreas verdes","IVA","Arriendo futuro"], correct:1, why:"Compra para habitar, no para rentar.", whyNot:["No entiende.","","No aplica a su decisión.","No aplica."] },
  { q:"Metro a &lt; 8 min caminando sube el precio:", opts:["0%","8–15%","50%","–10%"], correct:1, why:"Benchmark de plusvalía urbana chilena.", whyNot:["Ignora evidencia.","","Sobredimensionado.","Al revés."] },
  { q:"Vacancia típica a considerar en cap rate neto:", opts:["0%","8% (aprox.)","50%","Varía pero se omite"], correct:1, why:"Un mes al año sin arriendo es el supuesto prudente estándar.", whyNot:["Irreal.","","Irreal.","Omitirla infla el cap."] },
  { q:"Herramienta CRM para cap rate:", opts:["/herramientas/estimacion-de-precio","/herramientas/rentabilidad","/herramientas/calculadora-comision","Ninguna"], correct:1, why:"Es la herramienta específica de yield y payback.", whyNot:["Es para estimación de precio.","","Calcula honorarios.","Sí existe."] },
  { q:"Plusvalía histórica del sector se mide con:", opts:["Opinión","Variación UF/m² de los últimos 5 años en la zona","Sentimiento","El clima"], correct:1, why:"Es la serie técnica defendible.", whyNot:["No profesional.","","Sin valor.","Sin relación."] },
  { q:"Altura máxima PRC 21 m significa aprox:", opts:["21 pisos","7 pisos aprox (3 m por piso)","3 pisos","42 pisos"], correct:1, why:"Regla habitual: altura / 3 = pisos.", whyNot:["Irreal.","","Subestima.","Irreal."] },
  { q:"El rasante vertical inclinado vs deslindes:", opts:["No existe","Limita la envolvente del edificio hacia los lindes","Aplica solo a casas","Solo en zona rural"], correct:1, why:"Es clave en zonas densas; marca la silueta permitida.", whyNot:["Es norma estándar PRC.","","Aplica a cualquier construcción.","Urbanismo total."] },
  { q:"Vender casa con constructibilidad alta a primera vivienda:", opts:["Ideal","Es dejar mucho dinero en la mesa; debe ir a desarrollador","Solo eso se puede","Da igual"], correct:1, why:"El desarrollador paga el terreno por m² futuro.", whyNot:["Miopía.","","Hay más opciones.","Destruye valor para el cliente."] },
  { q:"Ratio arriendo/precio mensual típico residencial Chile 2026:", opts:["0,01% – 0,05%","0,45% – 0,70%","3% – 5%","10%+"], correct:1, why:"Rango habitual bruto mensual.", whyNot:["Muy bajo.","","Irreal.","Imposible."] },
  { q:"Certificado de informaciones previas (CIP):", opts:["Es un invento","Documento DOM con zonificación, coef, restricciones del terreno","Es un post","No existe"], correct:1, why:"Es obligatorio para entender qué se puede construir.", whyNot:["Es oficial y válido.","","Es legal.","Sí existe."] },
  { q:"Cash-on-cash del inversionista:", opts:["Cap rate bruto","Retorno sobre capital propio invertido (pie) considerando apalancamiento","Ninguna","Dividendo"], correct:1, why:"Es el retorno efectivo sobre lo aportado, no sobre el precio total.", whyNot:["Ignora apalancamiento.","","Es métrica válida.","Es gasto, no retorno."] },
],
6: [
  { q:"Foto profesional vs celular — impacto en visualizaciones:", opts:["Igual","15× más visualizaciones aprox","–20%","No cambia"], correct:1, why:"Benchmark de estudios de marketing inmobiliario.", whyNot:["Contradice evidencia.","","Al revés.","Importa mucho."] },
  { q:"Lente ideal para fotografía inmobiliaria interior:", opts:["Tele 70–200","Gran angular 16–35 mm (o 10–22 APS-C)","Ojo de pez","Macro 100 mm"], correct:1, why:"Captura amplitud sin distorsionar líneas.", whyNot:["No entra la habitación.","","Deforma visualmente, se ve barato.","No sirve para espacios."] },
  { q:"HDR (High Dynamic Range) sirve para:", opts:["Video","Balancear ventanas quemadas e interiores oscuros","Ruido","Nada"], correct:1, why:"Combina bracketing para rescatar alto y bajo rango.", whyNot:["Es foto.","","Fuera de propósito.","Sirve y mucho."] },
  { q:"Altura de cámara recomendada:", opts:["30 cm","1,40–1,50 m (altura pecho)","2,2 m","Ojos"], correct:1, why:"Es la altura más natural para espacios residenciales.", whyNot:["Distorsiona.","","Excesivo.","Cambia la sensación espacial."] },
  { q:"Apertura recomendada:", opts:["f/1,4","f/8 – f/11","f/22 siempre","f/0,95"], correct:1, why:"Da profundidad de campo pareja sin perder nitidez por difracción.", whyNot:["Baja profundidad.","","Pierde nitidez por difracción.","No existe en el gear típico."] },
  { q:"Gemini AI debe usarse para:", opts:["Sustituir al corredor","Generar copy SEO (título + descripción) con prompts estructurados","Firmar contratos","Hacer estimaciones de precio"], correct:1, why:"Es una herramienta de texto y análisis; el corredor ejecuta y valida con el CRM.", whyNot:["Jamás.","","No puede.","La estimación de precio es una herramienta del CRM TuMatch, no de Gemini."] },
  { q:"Buen prompt para Gemini incluye:", opts:["'Describe esto'","Rol + tarea + datos técnicos + formato + tono","Un emoji","Nada"], correct:1, why:"Especificar rol, tarea, datos, formato y tono produce output profesional.", whyNot:["Output genérico.","","Irrelevante.","Output basura."] },
  { q:"Título SEO efectivo:", opts:["'Depto lindo en venta'","Tipo + dormitorios + comuna + hito + diferencial (máx 70 char)","Emoji fiesta","LIQUIDACIÓN 🔥🔥🔥"], correct:1, why:"Estructura cubre palabras clave + gancho concreto.", whyNot:["Sin keywords ni gancho.","","No posiciona.","Ahuyenta profesionales."] },
  { q:"Primer párrafo SEO = meta-description. Debe tener:", opts:["Más de 300 caracteres","Aproximadamente 160 caracteres con comuna, m², dormitorios, hito y UF","Solo emojis","Una rima"], correct:1, why:"Google lo corta en ~160; las keywords tempranas posicionan.", whyNot:["Se corta.","","Imposible posicionar.","No es SEO."] },
  { q:"Orden recomendado de shots en video tour:", opts:["Al azar","Entrada → living → cocina → dormitorio principal → baños → resto → terraza → fachada","Fachada primero","Solo baño"], correct:1, why:"Sigue el recorrido mental del comprador al visitar.", whyNot:["Confunde.","","La fachada va al final como cierre.","Inútil."] },
  { q:"Golden hour es:", opts:["Mediodía","30 min después del amanecer / antes del atardecer","Medianoche","Cualquier hora"], correct:1, why:"Luz cálida y sombras largas = belleza visual máxima.", whyNot:["Luz dura y plana.","","Sin luz natural.","Falta técnica."] },
  { q:"Staging ligero incluye:", opts:["Cambiar muros","Des-personalizar (quitar fotos familiares), ordenar, flores, cortinas abiertas","Nada","Demoler"], correct:1, why:"Pequeños arreglos visuales, sin construcción.", whyNot:["Es obra, no staging.","","Pierdes oportunidad.","No es staging."] },
  { q:"Publicar desde el CRM TuMatch permite:", opts:["Nada","Distribución multicanal automática + matching con leads compatibles","Cobrar más","Imprimir"], correct:1, why:"Un punto de publicación, muchos portales + red interna.", whyNot:["Es funcional y valioso.","","No afecta precio.","Irrelevante."] },
  { q:"Refresh del aviso en portales se recomienda:", opts:["Nunca","Cada 14 días (editar foto portada o primer bullet)","Cada hora","Solo al inicio"], correct:1, why:"Portales premian frescura; mejora posicionamiento.", whyNot:["Pierdes visibilidad.","","Spam.","Decae rápido."] },
  { q:"Tour 360° impacta:", opts:["Nada","Duplica cierres remotos y reduce visitas fallidas 50%","Aleja compradores","Solo para ventas rurales"], correct:1, why:"Permite pre-filtrar al comprador antes de la visita.", whyNot:["Tiene impacto real.","","Al revés.","Aplica universal."] },
  { q:"Dron aplica en:", opts:["Nunca","Casas con jardín, propiedades con vista, edificios en altura, lotes grandes","Cualquier depto interior","Baños"], correct:1, why:"Su valor es mostrar lo que cámara interior no puede.", whyNot:["Tiene uso real.","","No aporta en interior.","Absurdo."] },
  { q:"SEO inmobiliario: palabras clave deben:", opts:["Forzarse 20 veces","Aparecer 2–3 veces naturalmente (comuna, hito, tipo)","Estar en mayúsculas","Ser en inglés"], correct:1, why:"Densidad natural evita penalización de spam.", whyNot:["Penaliza.","","No es buena práctica.","Irrelevante local."] },
  { q:"Balance de blancos:", opts:["Cambiar cada foto","Consistente en todo el tour (~5400 K cálido living)","Aleatorio","No importa"], correct:1, why:"Consistencia construye percepción profesional.", whyNot:["Visualmente inconsistente.","","Parece amateur.","Sí importa."] },
  { q:"Matching del CRM se activa por:", opts:["Fotos","Cruce de atributos de la propiedad con perfil etiquetado de lead comprador","Color","Redacción"], correct:1, why:"Atributos estructurados (m², dormitorios, sector) vs criterios del lead.", whyNot:["Secundario.","","Irrelevante.","Tangencial."] },
  { q:"Gemini con foto + datos técnicos + prompt maestro:", opts:["Produce basura","Genera título + bullets + descripción + hashtags en segundos","No acepta fotos","Solo código"], correct:1, why:"Gemini es multimodal; acepta imágenes y contexto técnico.", whyNot:["Con prompt correcto no.","","Acepta imagen.","También texto."] },
],
7: [
  { q:"Comisión estándar al vendedor en Chile:", opts:["0,5%","2% + IVA del precio de venta","10%","20%"], correct:1, why:"Es el estándar del mercado chileno.", whyNot:["Irreal.","","Exagerado.","Imposible."] },
  { q:"Se paga al corredor:", opts:["Por adelantado","Al cierre · firma de escritura","Por cada visita","Nunca"], correct:1, why:"La comisión se gatilla con el cierre efectivo.", whyNot:["Riesgo para el cliente.","","Impropio.","Absurdo."] },
  { q:"Captador del lado vendedor recibe:", opts:["5%","10% del lado (referido 5% + acuerdo 5%)","30%","50%"], correct:1, why:"Anexo N°2 Referidos y Captación 2026.", whyNot:["Solo referido; falta acuerdo.","","Aplica a arrendador/comprador.","Supera el tope."] },
  { q:"Team Leader sobre cada corredor de su equipo:", opts:["0%","7,5% sobre la comisión del lado","50%","100%"], correct:1, why:"Es el modelo de gobierno del TL.", whyNot:["No hay TL sin incentivo.","","Irreal.","Irreal."] },
  { q:"Exclusividad del mandato mínima recomendada:", opts:["30 días","90 días (extensible)","10 años","Sin plazo"], correct:1, why:"Tiempo suficiente para ejecutar plan completo de marketing.", whyNot:["Insuficiente para el plan completo.","","Irreal.","Pierde disciplina."] },
  { q:"Si el cliente pide bajar comisión de 2% a 1%:", opts:["Se la regalas","Negocias contraparte: exclusividad extra, dos propiedades, doble lado","Cortas llamada","Cobras 3%"], correct:1, why:"Nunca regales margen sin contraparte concreta.", whyNot:["Mata modelo.","","Pierdes cliente.","Injustificado."] },
  { q:"Herramienta CRM para comisiones:", opts:["/herramientas/estimacion-de-precio","/herramientas/calculadora-comision","/herramientas/rentabilidad","Ninguna"], correct:1, why:"Es la herramienta específica de cálculo de honorarios.", whyNot:["Es para estimación de precio.","","Es para yield.","Sí existe."] },
  { q:"Mandato sin exclusividad típicamente resulta en:", opts:["Mejor precio","Sobreexposición, caos de precios y propiedad quemada en 60 días","Más rápido","Igual"], correct:1, why:"Demasiados actores = confusión para el comprador y dilución de esfuerzo.", whyNot:["Al revés.","","Contradictorio.","Muy distinto."] },
  { q:"Gestor con TL en lado vendedor puede llegar a:", opts:["100%","Hasta 60% del lado (30% captador + 30% gestión)","200%","No aplica"], correct:1, why:"Tope TuMatch con TL es 60%.", whyNot:["Irreal.","","Irreal.","Aplica perfectamente."] },
  { q:"Oferta del comprador en el flujo de cierre:", opts:["Por WhatsApp","Por escrito, con vigencia, monto, forma de pago","Verbal","Con emoticon"], correct:1, why:"Documento formal evita ambigüedad.", whyNot:["Riesgo legal.","","Sin prueba.","Absurdo."] },
  { q:"Promesa de compraventa incluye:", opts:["Precio y poco más","Plazos, arras/garantía (10%), cláusulas sobre regularización y condiciones resolutorias","Ninguna","Firmas ilegibles"], correct:1, why:"Protege ambas partes ante eventualidades.", whyNot:["Insuficiente.","","Sin valor.","Inválido."] },
  { q:"Doble lado (vendes y compras para el mismo cliente):", opts:["Imposible","Permite bajar comisión 0,25% a cada lado sin afectar margen","Ilegal","Triple comisión"], correct:1, why:"Eficiencia operativa permite pequeña concesión comercial.", whyNot:["Es común.","","Es legítimo si se informa a ambos.","No hay triple."] },
  { q:"Inscripción CBR ocurre:", opts:["Antes de firmar","Después de firmar escritura pública en notaría","Nunca","En la municipalidad"], correct:1, why:"La escritura notarial se inscribe en CBR para transferir dominio.", whyNot:["Imposible.","","Obligatorio.","No corresponde."] },
  { q:"Post-venta bien hecho incluye:", opts:["Nada","Agradecimiento, testimonio con permiso, pedir referidos, touch trimestral en CRM","Ghosting","Llamar al año"], correct:1, why:"Un cliente feliz genera 2–4 referidos en 12 meses.", whyNot:["Desperdicias activo.","","Destruye relación.","Muy tarde."] },
  { q:"Mínimo TuMatch al vendedor:", opts:["5 UF","30 UF + IVA (propiedades bajo UF 1.500)","100 UF","Sin mínimo"], correct:1, why:"Cubre costos operacionales básicos del corredor.", whyNot:["Destruye economía.","","Excesivo para propiedad pequeña.","No sustentable."] },
  { q:"Estudio de títulos lo hace:", opts:["El corredor","Un abogado especializado revisando 10 años en CBR","El vendedor","Nadie"], correct:1, why:"Profesional jurídico, no corredor.", whyNot:["Fuera de competencia.","","Imposible.","Destruye seguridad jurídica."] },
  { q:"Entrega de llaves y acta post-cierre:", opts:["Innecesario","Incluye lecturas de medidores, inventario, certificado no deuda GC, firmas","Al azar","Por WhatsApp"], correct:1, why:"Acta formal previene reclamos posteriores.", whyNot:["Protege a ambos.","","Caos.","Invalido legalmente."] },
  { q:"Walk-away del caso ocurre cuando:", opts:["Siempre","Comisión baja de 1,5% neto al corredor y el caso no compensa su tiempo","Nunca","Solo si pierde un pariente"], correct:1, why:"Mejor dejar ir que trabajar por bajo costo: libera capacidad para casos mejores.", whyNot:["Extremo.","","Todo vale tu tiempo.","Impropio."] },
  { q:"Para acreditar pago al vendedor:", opts:["Efectivo","Vale vista o transferencia documentada","Criptomoneda","No se documenta"], correct:1, why:"Es el medio aceptado en transacciones inmobiliarias Chile.", whyNot:["Riesgo.","","No aceptado.","Siempre se documenta."] },
  { q:"Gastos que absorbe el corredor (NO el cliente):", opts:["Todos los del cliente","Fotos profesionales, publicación en portales, matching del CRM","El 100% de lo necesario","Los impuestos del cliente"], correct:1, why:"Son costos comerciales del corredor por captar.", whyNot:["No; hay límites.","","Exagerado.","Irrelevante."] },
],
};

/* ============================================================
   BANCO FINAL · 40 preguntas mezcla de todos los temas
   ============================================================ */
const finalBank = [
  { q:"Capa más importante del ACM:", opts:["En venta","Vendidos","Avalúo fiscal","Retirados"], correct:1, why:"Los cierres son la realidad.", whyNot:["Son intención.","","No representa mercado.","Es la 3ª capa útil, no la principal."] },
  { q:"Propiedad no regularizada + comprador con crédito:", opts:["Puede comprar","Imposible: tasación bancaria ignora m² no declarados","Depende","Solo si pide SERVIU"], correct:1, why:"Banco no financia m² que no están en plano.", whyNot:["No puede.","","Sí se puede definir.","Al revés."] },
  { q:"Comisión captador vendedor TuMatch 2026:", opts:["5%","10%","30%","0%"], correct:1, why:"Referido 5% + acuerdo 5% = 10%.", whyNot:["Incompleto.","","Aplica a arrendador/comprador.","Falso."] },
  { q:"Cap rate bueno (bruto) en Chile:", opts:["2%","> 5,5%","1%","–5%"], correct:1, why:"Yield competitivo vs DAP.", whyNot:["Muy bajo.","","Pérdida.","Pérdida."] },
  { q:"Foto profesional vs celular — visualizaciones:", opts:["Igual","15× más","–20%","No importa"], correct:1, why:"Benchmark de marketing inmobiliario.", whyNot:["Ignora evidencia.","","Al revés.","Sí importa."] },
  { q:"Ratio dividendo / renta líquida máximo:", opts:["25%","50%","80%","10%"], correct:0, why:"Regla CMF.", whyNot:["","Te rechaza el banco.","Impago.","Subestimado."] },
  { q:"Constructibilidad alta vende mejor a:", opts:["Primera vivienda","Desarrollador inmobiliario","Inversionista renta","DS1"], correct:1, why:"Paga por m² futuro.", whyNot:["Desperdicia valor.","","No usa ese valor.","No aplica."] },
  { q:"Herramienta CRM para estimación de precio:", opts:["/herramientas/rentabilidad","/herramientas/estimacion-de-precio","/herramientas/calculadora-comision","/herramientas/promociones"], correct:1, why:"Específica de precio.", whyNot:["Yield.","","Comisión.","Beneficios."] },
  { q:"LAARC significa:", opts:["Listen·Acknowledge·Assess·Respond·Confirm","Lead·Ask·Advise·Rest·Close","Listen·Argue·Attack·Refuse·Close","Nada"], correct:0, why:"Framework de objection handling.", whyNot:["","Inventado.","Destructivo.","Es real."] },
  { q:"Exclusividad mínima recomendada:", opts:["30 días","90 días","1 año","Sin plazo"], correct:1, why:"Tiempo para ejecutar plan.", whyNot:["Insuficiente.","","Excesivo.","Pierde disciplina."] },
  { q:"Subsidio sin deuda:", opts:["DS1","DS49","DFL2","FOGAPE"], correct:1, why:"Para primer quintil, sin crédito.", whyNot:["Con crédito.","","Es tributario, no subsidio.","No es subsidio habitacional."] },
  { q:"Gran angular ideal para fotografía inmobiliaria:", opts:["70–200 mm","16–35 mm","Ojo de pez","85 mm fijo"], correct:1, why:"Capta amplitud sin distorsión.", whyNot:["Tele, no angular.","","Deforma.","Retrato, no espacios."] },
  { q:"Primer para Gemini debe incluir:", opts:["'Describe'","Rol + tarea + datos + formato + tono","Un emoji","Nada"], correct:1, why:"Estructura genera output profesional.", whyNot:["Genérico.","","Irrelevante.","Basura."] },
  { q:"DFL2 da al comprador:", opts:["Más crédito","50% menos contribuciones 10–20 años + rentas sin impuesto hasta 2 propiedades","Subsidio","Plazo mayor"], correct:1, why:"Paquete tributario.", whyNot:["No es eso.","","No es subsidio.","No relacionado."] },
  { q:"Motivación real se descubre con:", opts:["Pregunta cerrada","'¿Qué vas a hacer con el dinero?'","Estimación de precio","Nada"], correct:1, why:"Abre urgencia, plazo y flexibilidad.", whyNot:["Superficial.","","No revela emoción.","Sin info."] },
  { q:"Silencio estratégico tras plantear precio:", opts:["1 seg","7 seg","1 min","Indefinido"], correct:1, why:"El primero que habla cede.", whyNot:["Muy corto.","","Incómodo.","No aplica."] },
  { q:"A un inversionista le vendes con:", opts:["Colegios","Cap rate + caja neta + vacancia","IVA","Nada"], correct:1, why:"Habla su idioma.", whyNot:["Irrelevante.","","Es un plus, no el driver.","No aplica."] },
  { q:"Leasing habitacional cuota vs crédito:", opts:["Igual","15–25% más alta","Menor","Sin cuota"], correct:1, why:"Spread por riesgo.", whyNot:["Al revés.","","Al revés.","Obvio que tiene."] },
  { q:"Certificado de dominio vigente: frescura máxima:", opts:["1 año","30 días","5 años","Sin caducidad"], correct:1, why:"Banco y notario exigen máximo 30 días.", whyNot:["Obsoleto.","","Obsoleto.","Falso."] },
  { q:"Payback con cap neto 5%:", opts:["5 años","20 años","50 años","1 año"], correct:1, why:"100/5=20.", whyNot:["Matemática mala.","","Mal.","Mal."] },
  { q:"Matching del CRM se activa al:", opts:["Nada","Etiquetar lead y crear ficha de propiedad","Publicar","Cerrar"], correct:1, why:"Atributos estructurados cruzados.", whyNot:["Es funcional.","","Secundario.","Tarde."] },
  { q:"Altura de cámara recomendada:", opts:["30 cm","1,40–1,50 m","2,2 m","Al ojo"], correct:1, why:"Altura de pecho natural.", whyNot:["Distorsiona.","","Excesivo.","Cambia sensación."] },
  { q:"Plazo típico gestión bancaria post-promesa:", opts:["1 día","30–60 días","1 semana","1 año"], correct:1, why:"Evaluación + escritura + CBR.", whyNot:["Irreal.","","Insuficiente.","Demasiado."] },
  { q:"Cuando el precio objetivo ya está definido, al cliente le compartes:", opts:["Todo al comprador","Precio lista público, objetivo con él, piso solo tuyo","Nada","Solo piso"], correct:1, why:"Cada nivel tiene su contexto.","whyNot":["Expone negociación.","","Oculta información necesaria.","Incompleto."] },
  { q:"Gastos que NO se cobran al cliente:", opts:["Todos","Fotos, publicación portales, matching CRM","Ninguno","Solo IVA"], correct:1, why:"Son costos de captación del corredor.", whyNot:["Exagerado.","","Falso.","No corresponde."] },
  { q:"TuMatch sobre cada corredor del equipo TL cobra:", opts:["0%","7,5%","30%","50%"], correct:1, why:"Modelo oficial 2026.", whyNot:["No sustentable.","","Irreal.","Irreal."] },
  { q:"Arriendo con opción de compra conviene cuando:", opts:["Siempre","Comprador no califica hoy y vendedor sin urgencia total","Nunca","Solo empresas"], correct:1, why:"Caja mensual + cierre futuro fijo.", whyNot:["No.","","Tiene uso real.","No es exclusivo."] },
  { q:"Vender 15% sobre ACM:", opts:["Excelente","Acepta con plazo (30 días) + ajuste firmado","Sin problema","Empuja precio"], correct:1, why:"Protege relación y controla daño.", whyNot:["Propiedad quemada.","","Ingenuo.","Contradice ACM."] },
  { q:"Foto con ventana quemada:", opts:["Ideal","Usar HDR con 3–5 bracketing","Subexponer","No hacer nada"], correct:1, why:"Balance alto y bajo rango.", whyNot:["Amateur.","","Pierdes interior.","Imagen mala."] },
  { q:"Cap rate neto calcula:", opts:["Sin descuentos","Incluye GC, contribuciones, seguros, vacancia (~8%)","Cobra arriendo mensual","Arbitrario"], correct:1, why:"Es la realidad del inversionista.", whyNot:["Es bruto.","","Incompleto.","Sin rigor."] },
  { q:"Doble lado (upgrader compra contigo próximo):", opts:["Imposible","Dos lados, dos comisiones","Ilegal","Triple comisión"], correct:1, why:"Eficiencia operativa del corredor.", whyNot:["Es común.","","Legítimo.","No hay triple."] },
  { q:"Propietario con casa antigua en terreno 300 m² + coef 3,0:", opts:["Valor solo de la casa","Valor 2–4× como activo desarrollo","Vale menos","Igual que vecino moderno"], correct:1, why:"Se paga por m² futuros edificables.", whyNot:["Subestima.","","Contradice.","No entiende."] },
  { q:"Refresh del aviso en portales:", opts:["Nunca","Cada 14 días (editar foto/bullet)","Cada hora","Solo inicio"], correct:1, why:"Portales premian frescura.", whyNot:["Pierdes visibilidad.","","Spam.","Decae rápido."] },
  { q:"Estudio de títulos lo hace:", opts:["Corredor","Abogado en CBR 10 años atrás","Vendedor","Nadie"], correct:1, why:"Profesional jurídico.", whyNot:["Fuera de rol.","","Imposible.","Riesgo enorme."] },
  { q:"Ancla '300M porque mi vecino vendió en 300':", opts:["Discutir","Mostrar 10 comparables con fechas y cierres actualizados","Gritar","Aceptar"], correct:1, why:"Evidencia desancla, opinión no.", whyNot:["Escala resistencia.","","Destruye relación.","Pierdes margen."] },
  { q:"Herramienta de comisión:", opts:["/rentabilidad","/calculadora-comision","/estimacion-de-precio","Ninguna"], correct:1, why:"Específica de honorarios.", whyNot:["Yield.","","Precio.","Existe."] },
  { q:"Golden hour es:", opts:["Mediodía","30 min post amanecer / pre atardecer","Medianoche","Cualquier hora"], correct:1, why:"Luz cálida + sombras largas.", whyNot:["Luz plana.","","Sin luz.","Falta técnica."] },
  { q:"Post-venta debe incluir:", opts:["Nada","Agradecimiento + testimonio + referidos + touch trimestral","Ghosting","Llamar al año"], correct:1, why:"Genera 2–4 referidos/año.", whyNot:["Desperdicio.","","Destructivo.","Tarde."] },
  { q:"Subsidio DS1 Tramo 3 propiedades hasta:", opts:["UF 1.400","UF 3.000","UF 10.000","UF 500"], correct:1, why:"Tramo más alto con subsidio de 300 UF.", whyNot:["Es Tramo 1.","","Fuera de rango.","Muy bajo."] },
  { q:"Walk-away del caso ocurre con comisión neta:", opts:["Cualquier baja","< 1,5% neto al corredor","Cualquier número","Nunca"], correct:1, why:"Mejor dejar ir que malbaratar tiempo.", whyNot:["Demasiado laxo.","","No todo vale.","Extremo."] },
];

/* ============================================================
   APP CORE
   ============================================================ */
const App = (() => {
  const TOTAL_MODULES = 7;
  const STORAGE_KEY = 'tumatch_taller_cliente_vendedor_avanzado_v1';
  const QUESTIONS_PER_MODULE = 5;
  const FINAL_QUESTIONS = 14;
  const MAX_WRONGS = 5;
  const MAX_WRONGS_FINAL = 5;
  const LOCK_MINUTES = 10;

  const MODULE_NAMES = [
    'Inicio',
    'Estimación de Precio · ACM y CRM',
    'Psicología del Vendedor · Urgencia y Objeciones',
    'Perfiles de Comprador según la Propiedad',
    'Financiamiento · Crédito, Leasing, Subsidio, Regularización',
    'Caprate, Arriendo, Sector y Constructibilidad',
    'Fotografía, Video, Gemini AI y SEO',
    'Cierre Profesional · Comisiones y Mandato',
    'Prueba Final · 14 preguntas (banco 40)'
  ];

  const state = {
    current: 0,
    unlocked: 1,
    completedModules: [],
    finalPassed: false,
    locks: {},
    wrongCount: {},
    finalLockUntil: 0,
    finalWrongCount: 0,
  };

  /* html2canvas lazy-loaded on first certificate download */
  let _html2canvasPromise = null;
  function ensureHtml2Canvas() {
    if (typeof window.html2canvas === 'function') return Promise.resolve(window.html2canvas);
    if (_html2canvasPromise) return _html2canvasPromise;
    _html2canvasPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      s.crossOrigin = 'anonymous';
      s.onload = () => resolve(window.html2canvas);
      s.onerror = () => { _html2canvasPromise = null; reject(new Error('No se pudo cargar la librería de descarga.')); };
      document.head.appendChild(s);
    });
    return _html2canvasPromise;
  }

  function escapeHTML(s) {
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      const clean = {
        current: Number.isInteger(parsed.current) && parsed.current >= 0 && parsed.current <= 9 ? parsed.current : 0,
        unlocked: Number.isInteger(parsed.unlocked) && parsed.unlocked >= 1 && parsed.unlocked <= TOTAL_MODULES + 2 ? parsed.unlocked : 1,
        completedModules: Array.isArray(parsed.completedModules)
          ? [...new Set(parsed.completedModules.filter(n => Number.isInteger(n) && n >= 1 && n <= TOTAL_MODULES))]
          : [],
        finalPassed: typeof parsed.finalPassed === 'boolean' ? parsed.finalPassed : false,
        locks: (parsed.locks && typeof parsed.locks === 'object') ? parsed.locks : {},
        wrongCount: (parsed.wrongCount && typeof parsed.wrongCount === 'object') ? parsed.wrongCount : {},
        finalLockUntil: Number.isFinite(parsed.finalLockUntil) ? parsed.finalLockUntil : 0,
        finalWrongCount: Number.isFinite(parsed.finalWrongCount) ? parsed.finalWrongCount : 0,
      };
      // Tamper mitigation: cap locks to current time + LOCK_MINUTES max
      const now = Date.now();
      const maxLock = now + LOCK_MINUTES * 60 * 1000;
      Object.keys(clean.locks).forEach(k => {
        const v = Number(clean.locks[k]);
        if (!Number.isFinite(v) || v > maxLock) clean.locks[k] = 0;
      });
      if (clean.finalLockUntil > maxLock) clean.finalLockUntil = 0;
      Object.assign(state, clean);
    } catch(e) {
      try { localStorage.removeItem(STORAGE_KEY); } catch(_) {}
    }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
  }
  function shuffle(arr) {
    const a = [...arr];
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }
  function pickQuestions(pool, n) { return shuffle(pool).slice(0, n).map(shuffleOpts); }
  function shuffleOpts(q) {
    const ixs = shuffle(q.opts.map((_, i) => i));
    const newOpts = ixs.map(i => q.opts[i]);
    const newWhyNot = q.whyNot ? ixs.map(i => q.whyNot[i] || '') : null;
    const newCorrect = ixs.indexOf(q.correct);
    return Object.assign({}, q, { opts: newOpts, correct: newCorrect, whyNot: newWhyNot, __origCorrect: q.correct });
  }
  function randomMiss() { return FRIENDLY_MISS[Math.floor(Math.random() * FRIENDLY_MISS.length)]; }

  function show(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    const el = document.getElementById(moduleId);
    if (!el) return;
    el.classList.add('active');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'});
    // Focus management: move focus to the first heading of the active module
    const heading = el.querySelector('h1, h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      requestAnimationFrame(() => heading.focus({preventScroll: true}));
    }
  }

  function goToModule(n) {
    if (n === 0) { show('mod-0'); state.current = 0; save(); renderNav(); updateProgress(); return; }
    if (n >= 1 && n <= TOTAL_MODULES) {
      if (n > state.unlocked) { showLockedWarning(n); return; }
      state.current = n; show('mod-' + n); mountModule(n);
      save(); renderNav(); updateProgress(); return;
    }
    if (n === 8) {
      if (state.unlocked <= TOTAL_MODULES) { showLockedWarning(8); return; }
      state.current = 8; show('mod-final'); mountFinalTest();
      save(); renderNav(); updateProgress(); return;
    }
    if (n === 9) {
      state.current = 9; show('mod-done'); mountConclusion();
      save(); renderNav(); updateProgress();
    }
  }

  function showLockedWarning(n) {
    const nm = n === 8 ? 'Prueba Final' : MODULE_NAMES[n];
    alert('Contenido bloqueado 🔒\n\nDebes completar los módulos anteriores para desbloquear "' + nm + '".');
  }
  function startModule(n) { goToModule(n); }

  function restart() {
    if (!confirm('¿Seguro que quieres reiniciar el taller desde cero? Perderás tu progreso.')) return;
    state.current = 0; state.unlocked = 1; state.completedModules = [];
    state.finalPassed = false; state.locks = {}; state.wrongCount = {};
    state.finalLockUntil = 0; state.finalWrongCount = 0;
    save(); goToModule(0);
  }

  function renderNav() {
    const nav = document.getElementById('modnavInner');
    if (!nav) return;
    const items = [
      {n:0, label:'Inicio'},
      ...Array.from({length:TOTAL_MODULES}, (_,i)=>({n:i+1, label:'M'+(i+1)})),
      {n:8, label:'Prueba Final'},
    ];
    nav.innerHTML = items.map(it => {
      let cls = 'modnav-btn';
      if (state.current === it.n) cls += ' active';
      if (it.n >= 1 && it.n <= TOTAL_MODULES) {
        if (state.completedModules.includes(it.n)) cls += ' done';
        else if (it.n > state.unlocked) cls += ' locked';
      }
      if (it.n === 8 && state.unlocked <= TOTAL_MODULES) cls += ' locked';
      if (it.n === 8 && state.finalPassed) cls += ' done';
      return '<button class="' + cls + '" onclick="App.goToModule(' + it.n + ')"><span class="mod-n">' +
        (it.n===0?'':it.n===8?'★':('0'+it.n).slice(-2)) + '</span>' + it.label + '</button>';
    }).join('');
  }

  function updateProgress() {
    const TOTAL_Q = TOTAL_MODULES * QUESTIONS_PER_MODULE + FINAL_QUESTIONS;
    const moduleCorrect = state.completedModules.length * QUESTIONS_PER_MODULE;
    const finalCorrect = state.finalPassed ? FINAL_QUESTIONS : 0;
    let inProgressCorrect = 0;
    if (state.current >= 1 && state.current <= TOTAL_MODULES && !state.completedModules.includes(state.current)) {
      const qs = quizState[state.current];
      if (qs) inProgressCorrect = Math.min(qs.correct || 0, QUESTIONS_PER_MODULE);
    }
    const totalCorrect = moduleCorrect + finalCorrect + inProgressCorrect;
    const pct = Math.min(100, Math.round(totalCorrect / TOTAL_Q * 100));
    const fill = document.getElementById('progressFill');
    const num = document.getElementById('progressNum');
    if (fill) fill.style.width = pct + '%';
    if (num) num.textContent = pct + '%';
  }

  function mountModule(n) { renderQuizGate(n); }

  /* ---------- QUIZ GATE ---------- */
  const quizState = {};

  function isLocked(moduleN) { const until = state.locks[moduleN]; return until && Date.now() < until; }
  function lockRemainingMs(moduleN) { return Math.max(0, (state.locks[moduleN] || 0) - Date.now()); }

  function renderQuizGate(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    if (!container) return;
    if (state.completedModules.includes(moduleN)) { container.innerHTML = renderQuizDoneInlineHTML(moduleN); return; }
    if (isLocked(moduleN)) { renderLockedState(moduleN); return; }
    if (!quizState[moduleN]) {
      const pool = quizBank[moduleN];
      quizState[moduleN] = { current: pickQuestions(pool, QUESTIONS_PER_MODULE), index: 0, correct: 0, wrongs: 0, answered: false };
    }
    renderCurrentQuestion(moduleN);
  }

  function renderLockedState(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const remMs = lockRemainingMs(moduleN);
    const remMin = Math.ceil(remMs / 60000);
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">🔒</div>' +
        '<div class="quiz-locked-title">Quiz bloqueado temporalmente</div>' +
        '<div class="quiz-locked-desc">Acumulaste ' + MAX_WRONGS + ' errores. Mejor estudia con calma para obtener mejores resultados. Vuelve en <strong id="lock-timer-' + moduleN + '">' + remMin + ' min</strong>.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkLock(' + moduleN + ')">Reintentar ahora</button>' +
      '</div>';
    const id = 'lock-timer-' + moduleN;
    const tick = () => {
      const ms = lockRemainingMs(moduleN);
      const el = document.getElementById(id);
      if (!el) return;
      if (ms <= 0) { renderQuizGate(moduleN); return; }
      const s = Math.ceil(ms / 1000);
      const mm = Math.floor(s / 60);
      const ss = (s % 60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkLock(moduleN) {
    if (!isLocked(moduleN)) {
      state.wrongCount[moduleN] = 0;
      delete state.locks[moduleN];
      delete quizState[moduleN];
      save(); renderQuizGate(moduleN);
    } else {
      const ms = lockRemainingMs(moduleN);
      const mm = Math.floor(ms/60000);
      const ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('Aún bloqueado. Quedan ' + mm + ':' + ss + '.');
    }
  }

  function renderCurrentQuestion(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const qs = quizState[moduleN];
    const q = qs.current[qs.index];
    const mn = MODULE_NAMES[moduleN];
    const lifeLeft = Math.max(0, MAX_WRONGS - (state.wrongCount[moduleN] || 0));
    const dots = Array.from({length:QUESTIONS_PER_MODULE}, (_, i) => {
      let c = 'qp-dot'; if (i < qs.index) c += ' done'; else if (i === qs.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" role="radio" aria-checked="false" onclick="App.answerQuestion(' + moduleN + ', ' + i + ')" onkeydown="App.optKeydown(event,' + moduleN + ',' + i + ')" data-i="' + i + '" tabindex="' + (i === 0 ? '0' : '-1') + '">' +
        '<span class="opt-letter" aria-hidden="true">' + String.fromCharCode(65+i) + '</span><span>' + escapeHTML(opt) + '</span>' +
      '</button>'
    )).join('');

    container.innerHTML =
      '<div class="quiz-gate-head">' +
        '<div class="quiz-icon" aria-hidden="true">🎯</div>' +
        '<div><div class="quiz-title">Quiz · ' + escapeHTML(mn) + '</div>' +
        '<div class="quiz-sublabel">5 preguntas · banco rotativo de 20 · desbloquea el siguiente módulo</div></div>' +
      '</div>' +
      '<div class="quiz-sub">Responde correctamente las 5. Si fallas, la pregunta rota. <strong>Tras ' + MAX_WRONGS + ' errores acumulados se bloquea 10 minutos.</strong></div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress" aria-hidden="true">' + dots + '</div>' +
        '<div class="quiz-progress-label">' + qs.correct + '/' + QUESTIONS_PER_MODULE + ' correctas</div>' +
        '<div class="quiz-life-label" aria-live="polite">Intentos · ' + lifeLeft + '/' + MAX_WRONGS + '</div>' +
      '</div>' +
      '<div class="quiz-q">' +
        '<div class="quiz-q-label">Pregunta ' + (qs.index + 1) + ' de ' + QUESTIONS_PER_MODULE + '</div>' +
        '<div class="quiz-q-text" id="qtext-' + moduleN + '">' + escapeHTML(q.q) + '</div>' +
        '<div class="quiz-opts" role="radiogroup" aria-labelledby="qtext-' + moduleN + '">' + opts + '</div>' +
        '<div class="quiz-feedback" id="feedback-' + moduleN + '" aria-live="polite" role="status"></div>' +
        '<div class="quiz-next" id="next-' + moduleN + '"></div>' +
      '</div>';
  }

  function optKeydown(e, moduleN, i) {
    const container = document.getElementById('quiz-' + moduleN);
    if (!container) return;
    const btns = container.querySelectorAll('.quiz-opt:not(.disabled)');
    if (!btns.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (i + 1) % btns.length;
      btns.forEach((b, idx) => b.setAttribute('tabindex', idx === next ? '0' : '-1'));
      btns[next].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (i - 1 + btns.length) % btns.length;
      btns.forEach((b, idx) => b.setAttribute('tabindex', idx === prev ? '0' : '-1'));
      btns[prev].focus();
    }
  }

  function buildWrongFeedbackHTML(q, optIdx) {
    const otherRows = q.opts.map((opt, i) => {
      if (i === q.correct) return '';
      const wn = (q.whyNot && q.whyNot[i]) ? q.whyNot[i] : '';
      return '<div class="fb-otherwrong"><span class="fb-x" aria-hidden="true">✗</span><strong>' + String.fromCharCode(65+i) + '.</strong> ' + escapeHTML(opt) + (wn ? ' <em>— ' + escapeHTML(wn) + '</em>' : '') + '</div>';
    }).join('');
    return (
      '<div class="quiz-feedback-title">✗ Respuesta incorrecta</div>' +
      '<div class="friendly-miss">' + escapeHTML(randomMiss()) + '</div>' +
      '<div class="quiz-feedback-body">' +
        '<div class="fb-block fb-block-wrong">' +
          '<div class="fb-label">Tu respuesta:</div>' +
          '<div class="fb-text"><span class="fb-x" aria-hidden="true">✗</span> ' + String.fromCharCode(65+optIdx) + '. ' + escapeHTML(q.opts[optIdx]) + '</div>' +
        '</div>' +
        '<div class="fb-block fb-block-right">' +
          '<div class="fb-label">Respuesta correcta:</div>' +
          '<div class="fb-text"><span class="fb-check" aria-hidden="true">✓</span> ' + String.fromCharCode(65+q.correct) + '. ' + escapeHTML(q.opts[q.correct]) + '</div>' +
        '</div>' +
        '<div class="fb-why-label">¿Por qué es la correcta?</div>' +
        '<div class="fb-why">' + escapeHTML(q.why) + '</div>' +
        (otherRows ? '<div class="fb-why-label">¿Por qué no las otras?</div><div class="fb-others">' + otherRows + '</div>' : '') +
      '</div>'
    );
  }

  function answerQuestion(moduleN, optIdx) {
    const qs = quizState[moduleN];
    if (qs.answered) return;
    const q = qs.current[qs.index];
    const isCorrect = optIdx === q.correct;
    qs.answered = true;
    const container = document.getElementById('quiz-' + moduleN);
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      b.setAttribute('aria-disabled', 'true');
      if (i === optIdx) b.setAttribute('aria-checked', 'true');
      if (i === q.correct) b.classList.add('correct');
      if (i === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-' + moduleN);
    if (isCorrect) {
      qs.correct++; updateProgress();
      fb.className = 'quiz-feedback correct show';
      fb.innerHTML = '<div class="quiz-feedback-title">✓ Respuesta correcta</div><div class="quiz-feedback-body"><div class="fb-why-label">Por qué es la correcta:</div><div class="fb-why">' + escapeHTML(q.why) + '</div></div>';
    } else {
      qs.wrongs++;
      state.wrongCount[moduleN] = (state.wrongCount[moduleN] || 0) + 1;
      save();
      fb.className = 'quiz-feedback wrong show';
      fb.innerHTML = buildWrongFeedbackHTML(q, optIdx);
      if (state.wrongCount[moduleN] >= MAX_WRONGS) {
        state.locks[moduleN] = Date.now() + LOCK_MINUTES * 60 * 1000;
        save();
        setTimeout(() => renderLockedState(moduleN), 2500);
        return;
      }
    }
    const nx = document.getElementById('next-' + moduleN);
    const isLast = qs.index === QUESTIONS_PER_MODULE - 1;
    if (isCorrect) {
      nx.innerHTML = isLast
        ? '<button class="btn btn-success" onclick="App.finishQuiz(' + moduleN + ')">Finalizar quiz →</button>'
        : '<button class="btn btn-primary" onclick="App.nextQuestion(' + moduleN + ')">Siguiente pregunta →</button>';
    } else {
      const pool = quizBank[moduleN];
      const usedQs = new Set(qs.current.map(x => x.q));
      const candidates = pool.filter(p => !usedQs.has(p.q));
      if (candidates.length > 0) {
        const newQ = candidates[Math.floor(Math.random() * candidates.length)];
        qs.current[qs.index] = shuffleOpts(newQ);
      } else {
        qs.current[qs.index] = shuffleOpts(q);
      }
      nx.innerHTML = '<button class="btn btn-ghost" onclick="App.retryQuestion(' + moduleN + ')">Reintentar con nueva pregunta →</button>';
    }
  }

  function nextQuestion(moduleN) { const qs=quizState[moduleN]; qs.index++; qs.answered=false; renderCurrentQuestion(moduleN); }
  function retryQuestion(moduleN) { const qs=quizState[moduleN]; qs.answered=false; renderCurrentQuestion(moduleN); }
  function finishQuiz(moduleN) {
    const qs = quizState[moduleN];
    if (qs.correct >= QUESTIONS_PER_MODULE) {
      if (!state.completedModules.includes(moduleN)) state.completedModules.push(moduleN);
      state.unlocked = Math.max(state.unlocked, moduleN + 1);
      if (state.unlocked > TOTAL_MODULES + 1) state.unlocked = TOTAL_MODULES + 1;
      state.wrongCount[moduleN] = 0;
      save(); renderNav(); updateProgress();
      const container = document.getElementById('quiz-' + moduleN);
      container.innerHTML = renderQuizDoneInlineHTML(moduleN);
    }
  }

  function renderQuizDoneInlineHTML(moduleN) {
    const nextN = moduleN + 1;
    const isLast = moduleN === TOTAL_MODULES;
    const nextLabel = isLast ? 'Ir a la Prueba Final →' : 'Ir al Módulo ' + nextN + ' →';
    const nextTarget = isLast ? 8 : nextN;
    const modName = MODULE_NAMES[moduleN];
    const fecha = new Date().toLocaleDateString('es-CL', {year:'numeric', month:'long', day:'numeric'});
    const savedName = localStorage.getItem('tumatch_cert_name_cv_adv') || '';
    const nameHtml = savedName ? escapeHTML(savedName) : '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre ↓</span>';
    const modNum = String(moduleN).padStart(2,'0');
    return (
      '<div class="quiz-done">' +
        '<div class="quiz-done-icon" aria-hidden="true">✓</div>' +
        '<div class="quiz-done-title">¡Módulo ' + modNum + ' aprobado!</div>' +
        '<div class="quiz-done-desc">Te ganaste un certificado del Módulo ' + modNum + '. Descárgalo y continúa.</div>' +

        '<div class="mini-cert-name-form">' +
          '<label for="miniCertNameInput-' + moduleN + '">Tu nombre para este certificado</label>' +
          '<input id="miniCertNameInput-' + moduleN + '" type="text" autocomplete="name" placeholder="Ej. María José Pérez González" value="' + escapeHTML(savedName) + '" oninput="App.updateMiniCertName(' + moduleN + ', this.value)">' +
        '</div>' +

        '<div class="mini-cert" id="miniCert-' + moduleN + '">' +
          '<div class="mini-cert-border">' +
            '<div class="mini-cert-corner tl"></div><div class="mini-cert-corner tr"></div><div class="mini-cert-corner bl"></div><div class="mini-cert-corner br"></div>' +
            '<div class="mini-cert-logo"><img src="assets/tumatch_horizontal_positivo.jpg" alt="TuMatch"></div>' +
            '<div class="mini-cert-eyebrow">Academia de Corredores · Nivel Avanzado</div>' +
            '<div class="mini-cert-modpill">Módulo ' + modNum + ' · Aprobado 5/5</div>' +
            '<h3 class="mini-cert-title">' + modName + '</h3>' +
            '<div class="mini-cert-divider"></div>' +
            '<p class="mini-cert-intro">Se otorga el presente reconocimiento a</p>' +
            '<div class="mini-cert-name" id="miniCertName-' + moduleN + '">' + nameHtml + '</div>' +
            '<p class="mini-cert-body">Por haber completado satisfactoriamente el <strong>Módulo ' + modNum + '</strong> del taller <em>Cliente Vendedor · Avanzado</em> con 5 respuestas correctas (banco rotativo de 20 preguntas).</p>' +
            '<div class="mini-cert-footer">' +
              '<div class="mini-cert-date">Santiago, ' + fecha + '</div>' +
              '<div class="mini-cert-stamp-mini">' +
                '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">' +
                  '<circle cx="60" cy="60" r="56" fill="none" stroke="#0D1B2A" stroke-width="2.5"/>' +
                  '<circle cx="60" cy="60" r="50" fill="none" stroke="#047857" stroke-width="1.5"/>' +
                  '<circle cx="60" cy="60" r="44" fill="none" stroke="#D4A017" stroke-width="0.6"/>' +
                  '<text x="60" y="52" font-family="Cinzel, serif" font-size="8" font-weight="800" letter-spacing="1.5" text-anchor="middle" fill="#0D1B2A">MÓDULO</text>' +
                  '<text x="60" y="73" font-family="Cinzel, serif" font-size="20" font-weight="900" letter-spacing="1.5" text-anchor="middle" fill="#047857">' + modNum + '</text>' +
                  '<text x="60" y="88" font-family="Cinzel, serif" font-size="6.5" font-weight="700" letter-spacing="1.2" text-anchor="middle" fill="#0D1B2A">APROBADO</text>' +
                '</svg>' +
              '</div>' +
              '<div class="mini-cert-signblock">' +
                '<div class="mini-cert-signline"></div>' +
                '<div class="mini-cert-signname">TuMatch Inmobiliario SpA</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="mini-cert-actions">' +
          '<button class="btn btn-primary" onclick="App.downloadMiniCert(' + moduleN + ')">⬇️ Descargar PNG del módulo</button>' +
          '<button class="btn btn-ghost" onclick="App.goToModule(' + nextTarget + ')">' + nextLabel + '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function updateMiniCertName(moduleN, v) {
    try { localStorage.setItem('tumatch_cert_name_cv_adv', v); } catch(e){}
    const el = document.getElementById('miniCertName-' + moduleN);
    if (!el) return;
    if (v && v.trim()) {
      el.textContent = v;
    } else {
      el.innerHTML = '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre ↓</span>';
    }
  }
  function downloadMiniCert(moduleN) {
    const el = document.getElementById('miniCert-' + moduleN);
    if (!el) return;
    ensureHtml2Canvas()
      .then(h2c => h2c(el, {scale:2, backgroundColor:'#FAF8F4'}))
      .then(canvas => {
        const link = document.createElement('a');
        link.download = 'Certificado_TuMatch_CV_Avanzado_Modulo_' + String(moduleN).padStart(2,'0') + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      })
      .catch(err => alert(err.message || 'No se pudo generar el PNG. Revisa tu conexión.'));
  }

  /* ---------- PRUEBA FINAL ---------- */
  function isFinalLocked() { return state.finalLockUntil && Date.now() < state.finalLockUntil; }
  function finalLockRemainingMs() { return Math.max(0, (state.finalLockUntil || 0) - Date.now()); }

  function mountFinalTest() {
    const container = document.getElementById('quiz-final');
    if (state.finalPassed) {
      container.innerHTML = '<div class="quiz-done"><div class="quiz-done-icon">🏆</div><div class="quiz-done-title">Prueba final aprobada</div><div class="quiz-done-desc">Puedes volver a descargar tu certificado.</div><button class="btn btn-primary" onclick="App.goToModule(9)">Ver certificado →</button></div>';
      return;
    }
    if (isFinalLocked()) { renderFinalLocked(); return; }
    if (!quizState.final) {
      quizState.final = { current: pickQuestions(finalBank, FINAL_QUESTIONS), index: 0, correct: 0, wrongs: 0, answered: false };
    }
    renderFinalQuestion();
  }

  function renderFinalLocked() {
    const container = document.getElementById('quiz-final');
    const remMs = finalLockRemainingMs();
    const remMin = Math.ceil(remMs / 60000);
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">🔒</div>' +
        '<div class="quiz-locked-title">Prueba Final bloqueada temporalmente</div>' +
        '<div class="quiz-locked-desc">Acumulaste ' + MAX_WRONGS_FINAL + ' errores. Mejor estudia con calma para obtener mejores resultados. Vuelve en <strong id="final-lock-timer">' + remMin + ' min</strong>.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkFinalLock()">Reintentar ahora</button>' +
      '</div>';
    const tick = () => {
      const ms = finalLockRemainingMs();
      const el = document.getElementById('final-lock-timer'); if (!el) return;
      if (ms <= 0) { mountFinalTest(); return; }
      const s = Math.ceil(ms / 1000), mm = Math.floor(s/60), ss = (s%60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkFinalLock() {
    if (!isFinalLocked()) {
      state.finalWrongCount = 0; state.finalLockUntil = 0;
      delete quizState.final;
      save(); mountFinalTest();
    } else {
      const ms = finalLockRemainingMs(), mm = Math.floor(ms/60000), ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('Aún bloqueada. Quedan ' + mm + ':' + ss + '.');
    }
  }

  function renderFinalQuestion() {
    const container = document.getElementById('quiz-final');
    const qs = quizState.final; const q = qs.current[qs.index];
    const lifeLeft = Math.max(0, MAX_WRONGS_FINAL - (state.finalWrongCount || 0));
    const dots = Array.from({length:FINAL_QUESTIONS}, (_, i) => {
      let c = 'qp-dot'; if (i < qs.index) c += ' done'; else if (i === qs.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" role="radio" aria-checked="false" onclick="App.answerFinal(' + i + ')" onkeydown="App.optKeydown(event,\'final\',' + i + ')" data-i="' + i + '" tabindex="' + (i === 0 ? '0' : '-1') + '"><span class="opt-letter" aria-hidden="true">' + String.fromCharCode(65+i) + '</span><span>' + escapeHTML(opt) + '</span></button>'
    )).join('');
    container.innerHTML =
      '<div class="quiz-gate-head"><div class="quiz-icon" aria-hidden="true">🏆</div><div><div class="quiz-title">Prueba Final · Cliente Vendedor Avanzado</div>' +
      '<div class="quiz-sublabel">14 preguntas · banco rotativo de 40 · 14/14 para certificarte</div></div></div>' +
      '<div class="quiz-sub">Responde correctamente las 14. Si fallas, la pregunta rota. <strong>Tras ' + MAX_WRONGS_FINAL + ' errores acumulados la prueba se bloquea 10 minutos.</strong></div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress" aria-hidden="true">' + dots + '</div>' +
        '<div class="quiz-progress-label">' + qs.correct + '/' + FINAL_QUESTIONS + ' correctas</div>' +
        '<div class="quiz-life-label" aria-live="polite">Intentos · ' + lifeLeft + '/' + MAX_WRONGS_FINAL + '</div>' +
      '</div>' +
      '<div class="quiz-q"><div class="quiz-q-label">Pregunta ' + (qs.index + 1) + ' de ' + FINAL_QUESTIONS + '</div>' +
        '<div class="quiz-q-text" id="qtext-final">' + escapeHTML(q.q) + '</div>' +
        '<div class="quiz-opts" role="radiogroup" aria-labelledby="qtext-final">' + opts + '</div>' +
        '<div class="quiz-feedback" id="feedback-final" aria-live="polite" role="status"></div>' +
        '<div class="quiz-next" id="next-final"></div>' +
      '</div>';
  }

  function answerFinal(optIdx) {
    const qs = quizState.final;
    if (qs.answered) return;
    const q = qs.current[qs.index];
    const isCorrect = optIdx === q.correct;
    qs.answered = true;
    const container = document.getElementById('quiz-final');
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      b.setAttribute('aria-disabled', 'true');
      if (i === optIdx) b.setAttribute('aria-checked', 'true');
      if (i === q.correct) b.classList.add('correct');
      if (i === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-final');
    if (isCorrect) {
      qs.correct++; updateProgress();
      fb.className = 'quiz-feedback correct show';
      fb.innerHTML = '<div class="quiz-feedback-title">✓ Correcta</div><div class="quiz-feedback-body"><div class="fb-why-label">Por qué:</div><div class="fb-why">' + escapeHTML(q.why) + '</div></div>';
    } else {
      qs.wrongs++;
      state.finalWrongCount = (state.finalWrongCount || 0) + 1;
      save();
      fb.className = 'quiz-feedback wrong show';
      fb.innerHTML = buildWrongFeedbackHTML(q, optIdx);
      if (state.finalWrongCount >= MAX_WRONGS_FINAL) {
        state.finalLockUntil = Date.now() + LOCK_MINUTES * 60 * 1000;
        save();
        setTimeout(() => renderFinalLocked(), 2500);
        return;
      }
    }
    const nx = document.getElementById('next-final');
    const isLast = qs.index === FINAL_QUESTIONS - 1;
    if (isCorrect) {
      nx.innerHTML = isLast
        ? '<button class="btn btn-success" onclick="App.finishFinal()">Finalizar prueba →</button>'
        : '<button class="btn btn-primary" onclick="App.nextFinal()">Siguiente pregunta →</button>';
    } else {
      const usedQs = new Set(qs.current.map(x => x.q));
      const candidates = finalBank.filter(p => !usedQs.has(p.q));
      if (candidates.length) qs.current[qs.index] = shuffleOpts(candidates[Math.floor(Math.random()*candidates.length)]);
      else qs.current[qs.index] = shuffleOpts(q);
      nx.innerHTML = '<button class="btn btn-ghost" onclick="App.retryFinal()">Reintentar con nueva pregunta →</button>';
    }
  }

  function nextFinal() { const qs=quizState.final; qs.index++; qs.answered=false; renderFinalQuestion(); }
  function retryFinal() { const qs=quizState.final; qs.answered=false; renderFinalQuestion(); }
  function finishFinal() {
    const qs = quizState.final;
    if (qs.correct >= FINAL_QUESTIONS) {
      state.finalPassed = true;
      state.finalWrongCount = 0; state.finalLockUntil = 0;
      save(); renderNav(); updateProgress(); goToModule(9);
    }
  }

  /* ---------- CERTIFICADO / CIERRE ---------- */
  function mountConclusion() {
    const wrap = document.getElementById('done-content');
    const now = new Date();
    const fecha = now.toLocaleDateString('es-CL', {year:'numeric', month:'long', day:'numeric'});
    const waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);
    const savedName = localStorage.getItem('tumatch_cert_name_cv_adv') || '';
    const nameHtml = savedName ? escapeHTML(savedName) : '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre aquí</span>';
    const modulesListHtml = [];
    for (let i=1; i<=TOTAL_MODULES; i++) {
      modulesListHtml.push('<li><span class="cert-mod-n">' + String(i).padStart(2,'0') + '</span><span>' + MODULE_NAMES[i] + '</span></li>');
    }
    wrap.innerHTML =
      '<div class="sec-header" style="text-align:center;margin-bottom:30px">' +
        '<div class="sec-tag" style="margin:0 auto 14px"><span class="dot"></span>¡Eres corredor Cliente Vendedor AVANZADO TuMatch!</div>' +
        '<h2 class="sec-h2" style="margin:0 auto">Nivel Avanzado · Cliente Vendedor</h2>' +
        '<p class="sec-desc" style="margin:0 auto;max-width:720px">Dominas ACM + CRM, psicología y objeciones profundas, perfiles de comprador, financiamiento y regularización, cap rate, constructibilidad, fotografía + Gemini + SEO y comisiones. Descarga tu certificado y contáctanos para activar tu perfil como gestor de vendedores.</p>' +
      '</div>' +

      '<div class="cert-name-form" style="max-width:520px;margin:0 auto 24px;background:var(--ui-surface);border:1.5px solid var(--ui-border);border-radius:14px;padding:20px 22px;display:flex;flex-direction:column;gap:10px">' +
        '<label style="font-family:\'Cinzel\',serif;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--tealDk)">Tu nombre para el certificado</label>' +
        '<input id="certNameInput" type="text" autocomplete="name" placeholder="Ej. María José Pérez González" value="' + escapeHTML(savedName) + '" oninput="App.updateCertName(this.value)" style="font-family:\'DM Sans\',sans-serif;font-size:16px;padding:12px 14px;border:1.5px solid var(--ui-border);border-radius:10px;color:var(--ui-text);background:var(--ui-bg);outline:none;transition:border-color .15s">' +
      '</div>' +

      '<div class="tm-cert" id="cert">' +
        '<div class="tm-cert-border">' +
          '<div class="tm-cert-corner tl"></div><div class="tm-cert-corner tr"></div><div class="tm-cert-corner bl"></div><div class="tm-cert-corner br"></div>' +

          '<div class="tm-cert-logo-block"><img class="tm-cert-logo-img" src="assets/tumatch_horizontal_positivo.jpg" alt="TuMatch Inmobiliario"></div>' +

          '<div class="tm-cert-eyebrow">Certificado Oficial · Academia de Corredores</div>' +
          '<h1 class="tm-cert-title">Cliente Vendedor · AVANZADO<em>Programa Oficial de Corredores · 2026</em></h1>' +
          '<div class="tm-cert-divider"></div>' +
          '<div class="tm-cert-subtitle">Nivel Avanzado · TuMatch Inmobiliario SpA</div>' +

          '<p class="tm-cert-intro">Se otorga el presente reconocimiento a</p>' +
          '<div class="tm-cert-name" id="tmCertName">' + nameHtml + '</div>' +

          '<p class="tm-cert-body">Por haber completado satisfactoriamente los siete módulos avanzados del taller y aprobado la prueba final con 14 de 14 correctas (banco rotativo de 40 preguntas), acreditando dominio en estimación profesional de precio y CRM, psicología del cliente vendedor y manejo de objeciones profundas, perfiles de comprador, financiamiento (crédito, leasing, subsidio, arriendo con opción de compra, regularización), cap rate, constructibilidad, fotografía profesional asistida por Gemini AI, SEO inmobiliario y estructura de comisiones TuMatch 2026.</p>' +

          '<div class="tm-cert-modules-block">' +
            '<div class="tm-cert-modules-title">Módulos aprobados</div>' +
            '<ol class="tm-cert-modules">' + modulesListHtml.join('') + '</ol>' +
            '<div class="tm-cert-final-badge"><span class="badge-label">Calificación final</span><span class="badge-score">14<span class="badge-slash">/</span>14</span><span class="badge-sub">Prueba final aprobada</span></div>' +
          '</div>' +

          '<div class="tm-cert-footer">' +
            '<div class="tm-cert-date">Santiago, ' + fecha + '</div>' +
            '<div class="tm-cert-seal">' +
              '<div class="tm-cert-seal-mark"><img src="assets/tumatch_simbolo_positivo.jpg" alt="TuMatch"></div>' +
              '<div class="tm-cert-seal-label">Sello de<br>certificación</div>' +
            '</div>' +
            '<div class="tm-cert-sign">' +
              '<div class="tm-cert-stamp">' +
                '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="tm-cert-stamp-svg">' +
                  '<defs><path id="tmStampArcTop" d="M 34,120 A 86,86 0 0 1 206,120" fill="none"/><path id="tmStampArcBottom" d="M 38,120 A 82,82 0 0 0 202,120" fill="none"/></defs>' +
                  '<circle cx="120" cy="120" r="114" fill="none" stroke="#0D1B2A" stroke-width="4"/>' +
                  '<circle cx="120" cy="120" r="108" fill="none" stroke="#D4A017" stroke-width="0.8"/>' +
                  '<circle cx="120" cy="120" r="100" fill="none" stroke="#047857" stroke-width="2.2"/>' +
                  '<circle cx="120" cy="120" r="76" fill="none" stroke="#0D1B2A" stroke-width="1" stroke-dasharray="1 3"/>' +
                  '<text font-family="Cinzel, serif" font-size="12" font-weight="800" letter-spacing="4.5" fill="#0D1B2A"><textPath href="#tmStampArcTop" startOffset="50%" text-anchor="middle">TUMATCH · INMOBILIARIO</textPath></text>' +
                  '<text font-family="Cinzel, serif" font-size="9" font-weight="700" letter-spacing="5" fill="#047857"><textPath href="#tmStampArcBottom" startOffset="50%" text-anchor="middle">CLIENTE VENDEDOR AVANZADO · 2026</textPath></text>' +
                  '<text x="120" y="108" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="3.5" text-anchor="middle" fill="#0D1B2A">APROBADO</text>' +
                  '<text x="120" y="140" font-family="Cinzel, serif" font-size="28" font-weight="900" letter-spacing="3" text-anchor="middle" fill="#047857">14/14</text>' +
                  '<text x="120" y="168" font-family="EB Garamond, serif" font-style="italic" font-weight="600" font-size="13" text-anchor="middle" fill="#0D1B2A">avanzado TuMatch</text>' +
                '</svg>' +
              '</div>' +
              '<div class="tm-cert-sign-line"></div>' +
              '<div class="tm-cert-sign-name">Patricio Rojas</div>' +
              '<div class="tm-cert-sign-role">Representante · TuMatch Inmobiliario SpA</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="tm-cert-actions">' +
        '<button class="btn btn-primary" onclick="App.downloadCert()">⬇️ Descargar PNG</button>' +
        '<button class="btn btn-ghost" onclick="window.print()">🖨️ Imprimir</button>' +
        '<button class="btn btn-ghost" onclick="App.restart()">↻ Reiniciar taller</button>' +
      '</div>' +
      '<div style="text-align:center;margin:40px 0 20px">' +
        '<div style="font-family:\'Cinzel\',serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--tealDk);margin-bottom:16px;font-weight:800">Paso final · Activa tu perfil avanzado</div>' +
        '<a class="whatsapp-cta" href="' + waUrl + '" target="_blank" rel="noopener" id="whatsappCta">' +
          '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 0h-.008C7.172 0 0 7.174 0 16c0 3.502 1.128 6.745 3.046 9.377L1.052 31.35l6.18-1.975A15.92 15.92 0 0 0 16.004 32C24.832 32 32 24.826 32 16S24.832 0 16.004 0zm9.308 22.59c-.386 1.09-1.922 1.996-3.146 2.26-.836.178-1.93.32-5.604-1.202-4.696-1.944-7.718-6.716-7.954-7.026-.224-.31-1.876-2.494-1.876-4.754 0-2.26 1.15-3.366 1.612-3.836.384-.388.836-.564 1.118-.564.27 0 .544.01.782.024.25.014.586-.094.916.696.338.808 1.15 2.794 1.252 2.996.102.202.17.436.034.702-.136.268-.204.432-.406.662-.202.23-.424.52-.606.696-.202.196-.412.406-.18.80.232.392 1.03 1.7 2.214 2.752 1.524 1.356 2.812 1.78 3.204 1.984.392.202.622.17.85-.102.23-.27.984-1.15 1.244-1.544.26-.394.52-.328.878-.196.358.136 2.274 1.076 2.666 1.27.392.196.652.294.748.458.098.162.098.938-.288 2.026z"/></svg>' +
          'Contactar a TuMatch por WhatsApp' +
        '</a>' +
        '<p style="margin:18px auto 0;max-width:520px;font-family:\'EB Garamond\',serif;font-size:17px;color:var(--ui-text-soft);line-height:1.6;font-style:italic">+56 9 3410 7448 — activamos tu perfil gestor de vendedores, asignamos Team Leader y coordinamos firma del Anexo N°2 2026.</p>' +
      '</div>';
  }

  function saveCertName(v) { try { localStorage.setItem('tumatch_cert_name_cv_adv', v); } catch(e){} }
  function updateCertName(v) {
    saveCertName(v);
    const el = document.getElementById('tmCertName');
    if (!el) return;
    if (v && v.trim()) {
      el.textContent = v;
    } else {
      el.innerHTML = '<span style="color:rgba(13,27,42,.35);font-style:italic">Escribe tu nombre aquí</span>';
    }
  }
  function downloadCert() {
    const el = document.getElementById('cert');
    if (!el) return;
    ensureHtml2Canvas()
      .then(h2c => h2c(el, {scale:2, backgroundColor:'#FAF8F4'}))
      .then(canvas => {
        const link = document.createElement('a');
        link.download = 'Certificado_TuMatch_Cliente_Vendedor_Avanzado.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      })
      .catch(err => alert(err.message || 'No se pudo generar el PNG. Revisa tu conexión.'));
  }

  /* ---------- THEME ---------- */
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('tumatch_theme_cv_adv', next); } catch(e){}
    updateLogoForTheme();
  }
  function updateLogoForTheme() {
    const theme = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const img = theme === 'dark' ? 'assets/tumatch_horizontal_negativo.jpg' : 'assets/tumatch_horizontal_positivo.jpg';
    const bImg = document.getElementById('brandLogoImg');
    const hImg = document.getElementById('heroLogoImg');
    if (bImg) bImg.src = img;
    if (hImg) hImg.src = img;
  }

  function updateResumeBanner() {
    const banner = document.getElementById('resumeBanner');
    if (!banner) return;
    const hasProgress = state.completedModules.length > 0 || state.current > 0;
    if (!hasProgress) { banner.style.display = 'none'; return; }
    banner.style.display = 'flex';
    const nextN = state.finalPassed ? 9 : Math.min(state.unlocked, 8);
    const txt = state.finalPassed
      ? 'Ya estás certificado. Puedes volver a descargar tu certificado.'
      : 'Próximo paso: ' + (nextN === 8 ? 'Prueba Final' : 'Módulo ' + nextN + ' · ' + MODULE_NAMES[nextN]) + '.';
    const tEl = document.getElementById('resumeBannerText');
    if (tEl) tEl.textContent = txt;
    const bEl = document.getElementById('resumeBannerBtn');
    if (bEl) bEl.onclick = () => goToModule(nextN);
  }

  function init() {
    load();
    try {
      const savedTheme = localStorage.getItem('tumatch_theme_cv_adv');
      if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    } catch(e) {}
    renderNav(); updateProgress(); updateResumeBanner(); updateLogoForTheme();
    const t = document.getElementById('themeToggle');
    if (t) t.addEventListener('click', toggleTheme);
  }

  return {
    init, goToModule, startModule, restart,
    answerQuestion, nextQuestion, retryQuestion, finishQuiz,
    answerFinal, nextFinal, retryFinal, finishFinal,
    toggleTheme, saveCertName, updateCertName, downloadCert, checkLock, checkFinalLock,
    updateMiniCertName, downloadMiniCert, optKeydown,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);

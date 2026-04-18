# TuMatch · Cliente Vendedor · Nivel Avanzado

Taller oficial de la **Academia de Corredores TuMatch Inmobiliario** para corredores que ya dominan la captación básica y quieren profundizar en el trabajo con clientes vendedores.

**Deploy en producción:** https://tumatch-cliente-vendedor-avanzado.vercel.app

## Estructura

7 módulos avanzados + prueba final de certificación:

1. **Estimación profesional de precio · ACM y CRM Tasación** — 3 capas del ACM, herramienta `/herramientas/tasacion`, ajustes técnicos, precio lista/objetivo/piso, registro en CRM.
2. **Psicología del vendedor · Urgencia real y objeciones profundas** — motivación real vs declarada, anclaje (Kahneman), SPIN, LAARC, 5 objeciones profundas con guion verificado, silencio estratégico.
3. **Perfiles de comprador según tipo de propiedad** — primera vivienda, inversionista, upgrader familiar, cash, extranjero. Matriz propiedad ↔ perfil. Doble-match.
4. **Financiamiento del comprador** — crédito hipotecario, subsidios DS1/DS49, leasing habitacional, arriendo con opción de compra, regularización (Ley del Mono), impacto no-regularización sobre crédito/subsidio/cash, DFL2.
5. **Caprate, valor de arriendo, sector y constructibilidad** — cap rate bruto/neto, payback, análisis de sector, Plan Regulador Comunal, coeficiente de constructibilidad, por qué el desarrollador paga 2–4× sobre casa habitada.
6. **Fotografía, video, Gemini AI y SEO en el CRM** — gear mínimo, HDR, golden hour, staging, video tour, dron, prompt maestro para Gemini, SEO inmobiliario, publicación multicanal CRM → portales.
7. **Cierre profesional · comisiones corredor y al cliente** — distribución TuMatch 2026, herramienta `/herramientas/calculadora-comision`, negociar sin regalar, exclusividad, flujo de cierre paso a paso, post-venta.

## Mecánica de quizzes

- **Por módulo**: 5 preguntas rendidas, banco rotativo de 20 por módulo.
- **Prueba final**: 14 preguntas rendidas, banco rotativo de 40.
- **Bloqueo**: 5 errores acumulados → 10 minutos de cooldown (mensaje simpático: *"Mejor estudia con calma para obtener mejores resultados"*).
- Posición de alternativas aleatoria en cada render.
- En error: respuesta correcta + por qué es correcta + por qué NO las otras.

## Tecnología

- HTML estático + CSS (tokens TuMatch: navy, teal, gold, cream) + JS vanilla.
- Dark/light theme con toggle y persistencia en `localStorage`.
- Responsive (breakpoints a 820px, 700px, 600px).
- Progreso persistente por `localStorage` (clave `tumatch_taller_cliente_vendedor_avanzado_v1`).
- Certificado PNG descargable con `html2canvas`.
- Al certificarse: CTA WhatsApp oficial +56 9 3410 7448 con mensaje pre-armado.

## Herramientas TuMatch referenciadas

El taller integra el uso del CRM `tumatch-leads.vercel.app`:

- `/leads` — clasificación de perfiles
- `/herramientas/tasacion` — estimación de precio
- `/herramientas/rentabilidad` — cap rate y payback
- `/herramientas/calculadora-comision` — honorarios del corredor
- `/herramientas/calculadora-hipotecaria` — dividendo del comprador

## Estructura de archivos

```
cliente-vendedor-avanzado/
├── index.html         # 7 módulos + prueba final + certificado
├── styles.css         # tokens TuMatch + layout base
├── styles-extra.css   # componentes específicos del taller
├── app.js             # quiz engine, router, persistencia, certificado
└── assets/            # logos TuMatch
```

## Uso local

Basta con servir la carpeta como estático. Opciones:

```bash
# Con python
python -m http.server 8080

# Con node
npx serve .
```

---

© 2026 TuMatch Inmobiliario SpA · Academia de Corredores · Contacto WhatsApp +56 9 3410 7448

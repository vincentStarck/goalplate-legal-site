# Política de Privacidad

> **Traducción de cortesía.** Esta es una traducción al español proporcionada únicamente para tu comodidad. La versión en inglés es la versión legalmente vinculante; en caso de cualquier conflicto o discrepancia entre esta traducción y el original en inglés, prevalece la versión en inglés. Puedes consultar la versión en inglés en [goalplate.app/privacy](/privacy).

**Fecha de entrada en vigor:** 2026-05-10
**Última actualización:** 2026-05-10
**Versión de la política:** 1.0

---

## 1. Quiénes somos

GoalPlate (la "app", "nosotros", "nos", "nuestro") es operada por **Eric Vicente Zepeda Juarez, operando como GoalPlate** (un empresario individual; aún no constituido como sociedad). Puedes contactarnos en **privacy@goalplate.app**.

Esta política explica qué datos personales recopilamos sobre ti cuando usas GoalPlate, cómo los usamos, con quién los compartimos, cuánto tiempo los conservamos y los derechos que tienes sobre ellos.

## 2. Qué datos recopilamos

### Datos que nos proporcionas al crear una cuenta

Cuando inicias sesión con Apple, Google o Facebook, el proveedor de autenticación nos proporciona:

- Tu **dirección de correo electrónico**
- Tu **nombre para mostrar** (cuando el proveedor lo expone)
- Un **identificador estable** (UID de Firebase) que usamos para vincular tus datos internamente

No vemos ni almacenamos tu contraseña. Con "Iniciar sesión con Apple", recibimos un correo electrónico de retransmisión privada si eliges esa opción.

### Datos que nos proporcionas al usar la app

- **Datos de objetivos** — el tipo, la meta, la fecha límite, los registros de progreso y los consejos de coaching generados por IA para cada objetivo que creas (fitness, presupuesto, sostenibilidad)
- **Perfil de fitness** (solo si creas un objetivo de fitness) — sexo biológico, año de nacimiento, estatura, peso, nivel de actividad. Los usamos para calcular estimaciones de calorías (TMB/GET)
- **Recetas** — la indicación que escribiste, la receta que generó la IA, los filtros dietéticos que seleccionaste, el idioma y si la guardaste o la hiciste pública
- **Planes de comidas** — las semanas, los espacios de comidas y los detalles por espacio que creas
- **Preferencias** — idioma, sistema de unidades (métrico/imperial), horarios de notificaciones
- **Registro de consentimiento** — cuándo aceptaste estos documentos, qué versión y la dirección IP de la solicitud (conservado como evidencia de que la aceptación ocurrió)
- **Estado de suscripción** — tu nivel actual y cualquier problema de facturación, recibido de RevenueCat (RevenueCat ve tus eventos de compra de Apple/Google; nosotros recibimos un resumen)

### Datos que recopilamos automáticamente

- **Tokens de notificaciones push** — cuando activas las notificaciones, Firebase Cloud Messaging nos proporciona un token para tu dispositivo para poder enviarte recordatorios y resúmenes semanales
- **Registros de diagnóstico** — Azure Application Insights recopila informes de errores anonimizados, rutas de solicitudes y métricas de rendimiento para que podamos diagnosticar problemas
- **Contadores de uso** — recuentos de cuántas recetas e imágenes destacadas has generado este mes (usados para hacer cumplir las cuotas de suscripción). Se restablecen mensualmente y se eliminan automáticamente después de 90 días

### Datos que NO recopilamos

- No tenemos rastreadores publicitarios en la app
- No vendemos tus datos a terceros
- No accedemos a tus contactos, fotos ni ubicación
- No almacenamos los datos de tu tarjeta de pago — esos permanecen con Apple, Google y RevenueCat

## 3. Cómo usamos tus datos

| Finalidad | Datos usados | Base jurídica (RGPD) |
|---|---|---|
| Operar el servicio (generar recetas, hacer seguimiento de objetivos, almacenar planes de comidas) | Cuenta, objetivos, recetas, planes de comidas, preferencias | Ejecución del contrato que aceptaste |
| Personalizar las sugerencias de IA (adaptar las recetas a tu perfil y filtros dietéticos) | Perfil de fitness, preferencias dietéticas, indicación | Interés legítimo en ofrecerte un producto útil |
| Enviar las notificaciones push que activaste (recordatorios, resumen semanal) | Token de notificaciones, datos de objetivos, preferencias | Consentimiento (puedes desactivarlas por tipo en Ajustes) |
| Cobrarte por los niveles de pago | Estado de suscripción de RevenueCat | Ejecución del contrato |
| Detectar y corregir errores, prevenir el abuso | Registros de diagnóstico, contadores de uso | Interés legítimo en mantener el servicio en funcionamiento |
| Cumplir con requerimientos legales | Lo que especifique el requerimiento | Obligación legal |

No usamos tus datos para publicidad, elaboración de perfiles para decisiones crediticias, ni para ninguna decisión automatizada que tenga efectos legales o significativos sobre ti.

## 4. Con quién compartimos tus datos (subencargados)

GoalPlate funciona sobre infraestructura de terceros. Cada subencargado ve únicamente los datos que necesita para hacer su trabajo:

| Subencargado | Qué ven | Su finalidad | Dónde |
|---|---|---|---|
| **Microsoft Azure** (Cosmos DB, Functions, Application Insights, Azure OpenAI) | Todos tus datos de cuenta, objetivos, recetas y planes de comidas; indicaciones de recetas y respuestas de la IA | Alojamiento, cómputo, inferencia de IA | West US 3 (Phoenix, Arizona, EE. UU.) |
| **Google Firebase** (Autenticación, Cloud Messaging) | Correo electrónico, UID de Firebase, tokens de notificaciones, eventos de inicio de sesión | Identidad y entrega de notificaciones | Centros de datos de Google (varias regiones) |
| **RevenueCat** | Un ID de usuario seudonimizado, nivel de suscripción, eventos de transacción de las tiendas | Gestión de suscripciones y webhooks | Estados Unidos |
| **Apple** (Iniciar sesión con Apple, App Store) | Identificador de Apple ID, eventos de pago de las compras de App Store | Identidad y facturación | Centros de datos de Apple |
| **Google** (Inicio de sesión de Google, Play Store) | Identificador de cuenta de Google, eventos de pago de las compras de Play Store | Identidad y facturación | Centros de datos de Google |
| **Meta** (Inicio de sesión de Facebook) | Identificador de cuenta de Facebook, cuando eliges iniciar sesión con Facebook | Identidad | Centros de datos de Meta |

No vendemos tus datos, no los prestamos, no los compartimos con fines publicitarios ni los transferimos a nadie fuera de la lista anterior, salvo según se describe en la sección 9 (requerimientos legales).

## 5. Transferencias internacionales

GoalPlate opera desde Estados Unidos y procesa principalmente los datos en Estados Unidos (Microsoft Azure West US 3). Algunos subencargados operan en regiones adicionales (véase la sección 4). Cuando recibimos datos de jurisdicciones con normas más estrictas sobre transferencias transfronterizas (UE/EEE, Reino Unido, California), nos basamos en las cláusulas contractuales tipo o el mecanismo equivalente que cada subencargado publica.

## 6. Cuánto tiempo conservamos tus datos

- **Datos de cuenta, objetivos, recetas, planes de comidas, preferencias** — se conservan hasta que elimines tu cuenta. Puedes eliminar tu cuenta dentro de la app en cualquier momento (Ajustes → Eliminar mi cuenta); a continuación, eliminamos en cascada cada registro en todos nuestros sistemas.
- **Contadores de uso** — se eliminan automáticamente 90 días después del mes en que se crearon
- **Registros de diagnóstico** en Azure Application Insights — se conservan durante el período de retención predeterminado de Azure (actualmente 90 días)
- **Tokens de notificaciones** — se invalidan cuando desinstalas la app o cierras sesión
- **Copias de seguridad** — copias de seguridad incrementales de Cosmos DB conservadas según la política estándar de Microsoft (normalmente hasta 30 días)
- **Registro de consentimiento** — se conserva mientras exista tu cuenta y luego se elimina junto con la cuenta

Si nos pides que eliminemos tu cuenta, no podremos recuperarla. La eliminación es permanente e inmediata.

## 7. Tus derechos

Según el lugar donde vivas, tienes algunos o todos los siguientes derechos:

- **Acceso** — ver qué tenemos sobre ti (la mayor parte ya es visible en la app; para el resto, contáctanos)
- **Eliminación** — eliminar tu cuenta dentro de la app, o pedirnos que la eliminemos a través de privacy@goalplate.app
- **Rectificación** — corregir datos inexactos a través de tu perfil en la app, o pedírnoslo
- **Portabilidad** — solicitar una exportación de tus datos en un formato legible por máquina
- **Retirar el consentimiento** — desactivar notificaciones específicas en Ajustes, o eliminar tu cuenta para revocar todos los consentimientos a la vez
- **Oposición** — oponerte al tratamiento basado en interés legítimo
- **Reclamación** — presentar una reclamación ante la autoridad competente de tu jurisdicción. En California, es la [Agencia de Protección de la Privacidad de California](https://cppa.ca.gov/). En la UE/EEE, tu autoridad nacional de protección de datos. Estados Unidos en su conjunto no cuenta con una autoridad federal comparable para reclamaciones generales de privacidad del consumidor.

Para ejercer un derecho, escribe a **privacy@goalplate.app**. Responderemos dentro del plazo exigido por tu legislación local (45 días según la CCPA, 30 días según el RGPD).

## 8. Privacidad de los menores

GoalPlate no está dirigida a menores de 13 años. Confirmamos la edad en el primer inicio. Si crees que hemos recopilado datos de un menor de 13 años, contáctanos y los eliminaremos.

En algunos estados miembros de la UE, la edad mínima para consentir el tratamiento de datos es de 16 años. Si tienes entre 13 y 16 años en una jurisdicción de ese tipo, utiliza la app únicamente con el consentimiento de un padre, madre o tutor.

## 9. Divulgaciones legales

Podemos divulgar tus datos cuando lo exija un requerimiento legal válido (orden judicial, citación, solicitud gubernamental lícita) o cuando tengamos la creencia de buena fe de que la divulgación es necesaria para proteger nuestros derechos, tu seguridad o la seguridad de otras personas.

## 10. Seguridad

Usamos TLS para todo el tráfico de red, ciframos los datos en reposo en Azure Cosmos DB, firmamos los tokens de autenticación y limitamos el acceso interno al mínimo necesario. Ningún sistema es perfectamente seguro; si descubrimos una vulneración que afecte a tus datos, te notificaremos a ti y a las autoridades correspondientes según lo exija tu legislación local.

## 11. Cambios en esta política

Cuando modifiquemos esta política de forma sustancial:

1. Publicaremos la nueva versión en la misma URL con una "Última actualización" actualizada
2. Aumentaremos la versión de la política (actual: 1.0)
3. Te volveremos a solicitar el consentimiento la próxima vez que abras la app

Para ediciones menores (correcciones de erratas, aclaraciones), actualizamos el documento sin volver a solicitar el consentimiento.

## 12. Contacto

- **Consultas generales:** privacy@goalplate.app

Si no recibes respuesta en un plazo de 30 días, puedes presentar una reclamación ante la autoridad de protección de datos de tu jurisdicción (véase la sección 7).

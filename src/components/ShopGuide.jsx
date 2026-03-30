
import heroImg from '../assets/hero-img.jpg'
import Hero from './Hero'

function ShopGuide() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-8">
            <Hero
                title="Guia de compra de tablas"
                subtitle="Usa una referencia clara para elegir medidas y volumen segun tu cuerpo, tu nivel y las olas que sueles surfear."
                image={heroImg}
                imageAlt="Surf en el mar"
                eyebrow="Shop Guide"
                showButton={false}
                heightClass="h-[50vh] min-h-[22rem]"
                containerClassName="mt-6 rounded-3xl border border-base-300 shadow-lg"
                overlayClassName="bg-black/45"
            />

            <section className="mt-10 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">Proceso recomendado</h2>

                <ul className="steps steps-vertical mt-6 w-full lg:steps-horizontal">
                    <li className="step step-primary">Perfil real</li>
                    <li className="step step-primary">Litros objetivo</li>
                    <li className="step step-primary">Largo-ancho-grosor</li>
                    <li className="step">Tipo de ola</li>
                    <li className="step">Prueba y ajuste</li>
                </ul>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <article className="card border border-base-300 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title">A. Largo</h3>
                        <p className="text-sm opacity-85">
                            Mas largo ayuda a remar y entrar antes en la ola. Menos largo da mas giro y respuesta.
                        </p>
                    </div>
                </article>

                <article className="card border border-base-300 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title">B. Ancho</h3>
                        <p className="text-sm opacity-85">
                            Mas ancho aumenta estabilidad. Menos ancho mejora cambios de canto y control en maniobras.
                        </p>
                    </div>
                </article>

                <article className="card border border-base-300 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title">C. Grosor</h3>
                        <p className="text-sm opacity-85">
                            A mayor grosor, mas flotabilidad y remada. A menor grosor, mas sensibilidad en la ola.
                        </p>
                    </div>
                </article>

                <article className="card border border-base-300 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title">D. Volumen</h3>
                        <p className="text-sm opacity-85">
                            Es la referencia mas practica para comparar tablas. Resume largo, ancho y grosor en litros.
                        </p>
                    </div>
                </article>
            </section>

            <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">Rangos orientativos de volumen</h2>
                <p className="mt-2 text-sm opacity-80 md:text-base">
                    Referencia general para empezar. Ajusta segun forma fisica y frecuencia de surf.
                </p>

                <div className="mt-5 overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Nivel</th>
                                <th>Volumen sugerido</th>
                                <th>Tipo de tabla frecuente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Inicio</td>
                                <td>40L o mas</td>
                                <td>Softboard, funboard, longboard</td>
                            </tr>
                            <tr>
                                <td>Intermedio</td>
                                <td>30L a 39L</td>
                                <td>Funboard, fish, shortboard con mas volumen</td>
                            </tr>
                            <tr>
                                <td>Avanzado</td>
                                <td>17L a 30L</td>
                                <td>Shortboard performance, step-up segun ola</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Como leer medidas en la tabla</h3>
                    <p className="mt-2 text-sm opacity-85">
                        Suelen venir escritas en el stringer (centro de la tabla): largo x ancho x grosor + litros.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm opacity-90">
                        <li><strong>Largo:</strong> nose a tail.</li>
                        <li><strong>Ancho:</strong> punto mas ancho de canto a canto.</li>
                        <li><strong>Grosor:</strong> zona mas gruesa del deck al bottom.</li>
                        <li><strong>Volumen:</strong> flotabilidad total en litros.</li>
                    </ul>
                </article>

                <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Conversion rapida</h3>
                    <p className="mt-2 text-sm opacity-85">
                        Las medidas de surf se expresan en pies y pulgadas.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="badge badge-outline badge-lg">1 pulgada = 2.54 cm</span>
                        <span className="badge badge-outline badge-lg">1 ft = 12 pulgadas</span>
                        <span className="badge badge-outline badge-lg">1 ft = 30.48 cm</span>
                    </div>
                </article>
            </section>

            <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">Frecuencia de surf y estrategia</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <article className="rounded-xl border border-base-300 p-4">
                        <h3 className="font-semibold">1 a 2 veces al mes</h3>
                        <p className="mt-2 text-sm opacity-85">
                            Prioriza volumen y estabilidad para disfrutar mas olas con menos frustracion.
                        </p>
                    </article>
                    <article className="rounded-xl border border-base-300 p-4">
                        <h3 className="font-semibold">1 a 2 veces por semana</h3>
                        <p className="mt-2 text-sm opacity-85">
                            Puedes bajar un poco litros y buscar un equilibrio entre remada y maniobra.
                        </p>
                    </article>
                    <article className="rounded-xl border border-base-300 p-4">
                        <h3 className="font-semibold">3+ veces por semana</h3>
                        <p className="mt-2 text-sm opacity-85">
                            Tienes margen para probar tablas mas exigentes y ajustar fino segun spot.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mt-8 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">Señales de ajuste incorrecto</h2>
                <div className="mt-5 overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Si te pasa esto...</th>
                                <th>Puede significar...</th>
                                <th>Ajuste recomendado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Te cuesta remar y entrar en olas faciles</td>
                                <td>Poco volumen para tu nivel actual</td>
                                <td>Subir litros y/o largo</td>
                            </tr>
                            <tr>
                                <td>Sientes la tabla torpe al girar</td>
                                <td>Exceso de volumen o de largo</td>
                                <td>Bajar un poco largo o ancho</td>
                            </tr>
                            <tr>
                                <td>Te hundes esperando la serie</td>
                                <td>Falta de flotabilidad</td>
                                <td>Aumentar grosor o litros</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8 rounded-2xl border border-success/30 bg-success/10 p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">Checklist antes de comprar</h2>
                <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
                    <li>1. Define tu nivel real y no el ideal.</li>
                    <li>2. Estima litros objetivo segun peso y frecuencia.</li>
                    <li>3. Elige el shape segun tu ola habitual.</li>
                    <li>4. Verifica medidas en stringer o ficha tecnica.</li>
                    <li>5. Si puedes, prueba un modelo parecido antes de cerrar compra.</li>
                    <li>6. Prioriza progresion y constancia por encima de estetica.</li>
                </ul>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Factores que mas cambian tu eleccion</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm opacity-90">
                        <li>Peso y altura corporal.</li>
                        <li>Tipo de ola donde surfeas normalmente.</li>
                        <li>Frecuencia semanal de surf.</li>
                        <li>Edad, movilidad y condicion fisica actual.</li>
                    </ul>
                </article>

                <article className="rounded-2xl border border-warning/30 bg-warning/10 p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Error comun a evitar</h3>
                    <p className="mt-3 text-sm opacity-90">
                        Comprar una tabla demasiado chica por estetica o por copiar a un pro. Si aun estas
                        consolidando remada y take off, mas litros te van a hacer progresar mas rapido.
                    </p>
                </article>
            </section>

        </div>
    )
}

export default ShopGuide
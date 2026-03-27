
function ShopGuide() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Guía de Tablas de Surf</h1>
            <p className="mb-4">
                En esta guía encontrarás información sobre los diferentes tipos de tablas de surf, sus características y para qué tipo de surfistas son más adecuadas.
            </p>
            <h2 className="text-2xl font-semibold mb-3">¿Cómo elegir tú tabla ideal?</h2>
            <h3 className="text-2xl font-semibold mb-3">
                ¿Cuáles son las partes de la tabla y para qué sirven?
            </h3>
            <p>
                Si nos metemos un poco más en la física de las tablas, vemos que hay un montón de modelos pensados para distintos tipos 
                de olas. Cada tabla tiene sus propias características, que hacen que funcione mejor en ciertas condiciones que en otras. 
                Por eso, la idea es repasar cuáles son los aspectos más importantes que influyen en el rendimiento de una tabla y entender 
                por qué algunas rinden mejor dependiendo de la ola que te toque.
            </p>
            <h4 className="text-2xl font-semibold mb-3">¿Qué es el volumen?</h4>
            <p className="mb-4">
                Las tablas de surf pueden estar hechas de diferentes materiales, cada uno con sus propias ventajas y desventajas:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Poliestireno Expandido (EPS):</strong> Ligero y resistente, ideal para principiantes y surfistas que buscan una tabla fácil de manejar.</li>
                <li><strong>Poliuretano (PU):</strong> Más pesado que el EPS, pero ofrece una sensación más tradicional y es preferido por surfistas avanzados.</li>
                <li><strong>Epoxy:</strong> Más duradero y resistente a los impactos, ideal para surfistas que buscan una tabla de alta calidad.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-3">Consejos para Elegir tu Tabla de Surf</h2>
            <p className="mb-4">
                Al elegir una tabla de surf, considera tu nivel de habilidad, el tipo de olas que planeas surfear y tus preferencias personales. Es recomendable consultar con expertos en tiendas de surf para obtener recomendaciones personalizadas.
            </p>
        </div>

    )
}

export default ShopGuide;
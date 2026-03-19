
function ShopGuide() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Guía de Tablas de Surf</h1>
            <p className="mb-4">
                En esta guía encontrarás información sobre los diferentes tipos de tablas de surf, sus características y para qué tipo de surfistas son más adecuadas.
            </p>
            <h2 className="text-2xl font-semibold mb-3">Tipos de Tablas de Surf</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Shortboard:</strong> Ideal para surfistas avanzados que buscan maniobrabilidad y velocidad en olas grandes.</li>
                <li><strong>Longboard:</strong> Perfecta para principiantes y surfistas que disfrutan de un estilo más relajado y fluido en olas pequeñas a medianas.</li>
                <li><strong>Fish:</strong> Tabla corta y ancha, excelente para olas pequeñas y medianas, proporcionando estabilidad y facilidad de remada.</li>
                <li><strong>Funboard:</strong> Combina características de shortboard y longboard, ideal para surfistas intermedios que buscan versatilidad.</li>
                <li><strong>Gun:</strong> Diseñada para olas grandes y rápidas, con una forma estrecha y puntiaguda para mayor control.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-3">Materiales de las Tablas de Surf</h2>
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
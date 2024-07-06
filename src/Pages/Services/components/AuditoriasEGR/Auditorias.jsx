import './Auditorias.css'

const textos = {
    lista: [
        {
            id: 0,
            texto: 'Administrativo y Organizacional',
        },
        {
            id: 1,
            texto: 'Visibilidad Financiera',
        },
        {
            id: 2,
            texto: 'Área comercial',
        },
        {
            id: 3,
            texto: 'Regimen Tarifario',
        },
        {
            id: 4,
            texto: 'Área técnica operativa',
        },
        {
            id: 5,
            texto: 'Programa de prestación del servicio de aseo',
        },
        {
            id: 6,
            texto: 'Plan de emergencia y contingencia',
        },

    ],

    texto1: 'Realizamos auditorías externas de gestión y resultados de acuerdo con la normativa vigente para cada uno de los servicios públicos domiciliarios (acueducto, alcantarillado y aseo), en los tópicos:',
    texto2: 'De igual manera, realizamos auditorías externas de gestión y resultados a los servicios de energía, gas y zonas de difícil gestión (ZDG) conforme a lo establecido en la Ley 142 de 1994; modificada por la Ley 689 de 2001, resoluciones SSPD 20211000555175 del 5 de octubre de 2021 y 20221000470165 del 16 de mayo de 2022 y las demás reglamentación del sector de energía y gas.'
}

export const Auditorias = () => {
    return (
        <div className='auditorias-container'>
            <p>
                {textos.texto1}
            </p>
            <ul>
                {textos.lista.map(item => (
                    <li key={item.id}>{item.texto}</li>
                ))}
            </ul>
            <p>
                {textos.texto2}
            </p>
        </div>
    )
}

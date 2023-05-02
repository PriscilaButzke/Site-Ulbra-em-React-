import './style.css'
import logoUlbra from '../../assets/ulbra.png'


function Aside() {
    return (
        <aside className="left">
        {/* <!-- Imagem --> */}
        <img src={logoUlbra} width="160px" alt="Logo do colégio Ulbra São Lucas"/>

        {/* <!-- Menu de listas --> */}
        <ul>
            <li>
                <a href="#inicio" className="active">Inicio</a>
            </li>
            <li>
                <a href="#carreira">Carreira</a>
            </li>
            <li>
                <a href="#contato">Contato</a>
            </li>
            <li>
                <a href="#sobre">Sobre</a>
            </li>
        </ul>
    </aside>
    )
}
export default Aside
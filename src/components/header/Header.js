import './header.scss'

const Header = () => {
    return (
        <header>
            <p className="page__name">Заявки</p>
            <input type="search" placeholder="Поиск"/>
        </header>
    )
}

export default Header
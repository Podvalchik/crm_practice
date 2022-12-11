import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__wrapper">
                <div className="nav__user">
                    <div className="nav__name">NastyaNOGAY</div>
                    <div className="nav__post">Администратор</div>
                </div>
                <div className="nav__list">
                    <ul>
                        <li>Заявки</li>
                        <li>Календарь</li>
                        <li>Группы</li>
                        <li>Клиенты</li>
                        <li>Расписание</li>
                        <li>Статистика</li>
                        <li>Сотрудники</li>
                        <li>Настройки</li>
                        <li>Выйти</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
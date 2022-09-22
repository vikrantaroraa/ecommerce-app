import '../css/Footer.css';

const Header = () => {
    return(
        <div className="footer">
            <div className="navigation__bar">
                <div className="logo">AmazeKart</div>
                <div className="navigation-link__men">MEN</div>
                <div className="navigation-link__men">WOMEN</div>
                <div className="navigation-link__men">KIDS</div>
                <div className="navigation-link__men">BEAUTY</div>
                <div className="navigation-link__men">DECOR</div>
            </div>
            <div className="search__input">
                <input placeholder="Search for products, brands and more"/>
            </div>
            <div className="header__actions">
                <span>Profile</span>
                <span>Wishlist</span>
                <span>Bag</span>
            </div>
        </div>
    )
    
}

export default Header;
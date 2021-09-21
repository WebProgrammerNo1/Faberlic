import './menulist.css'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import FaceIcon from '@material-ui/icons/Face';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import { Link } from "react-router-dom"

const MenuList = ({ menuOpen, setMenuOpen, }) => {

    // const [selected, setSelected] = useState("Mahsulotlar")

    const List = [
        {
            id: "1",
            icon: <PermIdentityOutlinedIcon className="icon1" />,
            title: <Link to="/Register">"Kirish va ro'yxatdan o'tish"</Link>,
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "2",
            icon: <ShoppingBasketOutlinedIcon className="icon1" />,
            title: "Mahsulotlar",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "3",
            icon: <WhatshotOutlinedIcon className="icon1" />,
            title: "Yangi",
        },
        {
            id: "4",
            icon: <FaceIcon className="icon1" />,
            title: "Parvarish",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "5",
            icon: <FaceOutlinedIcon className="icon1" />,
            title: "Pardoz",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "6",
            i: <i class="fas fa-tshirt"></i>,
            title: "Moda",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "7",
            i: <i class="fab fa-product-hunt"></i>,
            title: "Parfyumeriya",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "8",
            icon: <HomeOutlinedIcon className="icon1" />,
            title: <Link to="/">Uy</Link>,
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "9",
            icon: <HealingOutlinedIcon className="icon1" />,
            title: "Sog'liqni Saqlash",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "10",
            i: <i class="fas fa-apple-alt"></i>,
            title: "Mahsulotlar",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "11",
            icon: <BusinessCenterOutlinedIcon className="icon1" />,
            title: "Biznes",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "12",
            icon: <CardGiftcardOutlinedIcon className="icon1" />,
            title: "Aksiya",
        },
        {
            li4: "Batafsil"
        },
        {
            id: "13",
            icon: <BusinessRoundedIcon className="icon1" />,
            title: "Kompaniya",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "14",
            icon: <WidgetsOutlinedIcon className="icon1" />,
            title: "Xizmat",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "15",
            i: <i class="far fa-map"></i>,
            title: "Ixtiyoriy",
            i1: <i1 class="fas fa-chevron-right"></i1>
        },
        {
            id: "16",
            i: <i class="fas fa-satellite-dish"></i>,
            title: "Jonli efir",
        },
    ]

    return (
        <div className={"menu " + (menuOpen && 'active2')}>
            <div className="None menuHeader text-center p-2">
                <h5>Menu</h5>
                <div className={"dnone d-flex justify-content-end closss " + (menuOpen && 'dnone')} onClick={() => setMenuOpen(!menuOpen)}>
                    <ClearRoundedIcon />
                </div>
            </div>
            <div className="left">
                <ul className="ul1">
                    {List.map((item) => (
                        <li className="li2">
                            {item.icon}
                            <i>{item.i}</i>
                            <a href="/#">{item.title}</a>
                            <h3>{item.li4}</h3>
                            <i className="i1">{item.i1}</i>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right1 ipadNone">
                <h2>Mahsulotlar</h2>
                <div className="bigBox-1">
                    <div className="miniBox-1">
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="miniBox-1">
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="miniBox-1">
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                        <div className="item-1">
                            <h3 className="h3-1">
                                <Link to="/" className="link--1">Yangi Moda</Link>
                            </h3>
                            <ul className="ul-1">
                                <Link className="link-1">Ayollar uchun</Link>
                                <Link className="link-1">Erkaklar uchun</Link>
                                <Link className="link-1">O'g'il bolalar uchun</Link>
                                <Link className="link-1">Qizlar uchun</Link>
                                <Link className="link-1">Katalogdagi obrazlar</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList;
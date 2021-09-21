import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/footerImg/footerlogo-v11.webp";
import yandexZen from "../../images/footerImg/Yandex_Zen_logo_icon.svg";
import app from "../../images/footerImg/appstore-banner.png";
import googlePlay from "../../images/footerImg/googleplay-banner.webp";
import { faFacebookF, faInstagram, faOdnoklassniki, faVk, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const youtobe = <FontAwesomeIcon icon={faYoutube} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const ok = <FontAwesomeIcon icon={faOdnoklassniki} />;
const face = <FontAwesomeIcon icon={faFacebookF} />;
const vk = <FontAwesomeIcon icon={faVk} />;



export const Footer = () => {
	return (
		<FooterWrapper>
			<div className='container'>
				<div className='footerRow'>
					<div className='footerLogo'>
						<a href='/#'>
							<img src={logo} alt='error img ' />
						</a>
					</div>
					<div className='footerMenu'>
						<div className='Company d-flex pright'>
							<span>Kompaniya</span>
							<Link to=''>Faberlic haqida</Link>
							<Link to=''>Korporativ qadriyatlar</Link>
							<Link to=''>Ilmiy ishlanmalar markazi</Link>
							<Link to=''>O'Z Ishlab Chiqarish</Link>
							<Link to=''>Yangiliklar</Link>
							<Link to=''>Katalog yangiliklari</Link>
						</div>
						<div className='Service d-flex pright'>
							<span>Xizmat</span>
							<Link to=''>Qanday qilib buyurtma berish kerak</Link>
							<Link to=''>Ro'yxatdan o'tish</Link>
							<Link to=''>To'lov</Link>
							<Link to=''>Yetkazib berish</Link>
							<Link to=''>Qaytish</Link>
							<Link to=''>Savol va Javob</Link>
						</div>
						<div className='Optional d-flex pright'>
							<span>Ixtiyoriy</span>
							<Link to=''>Hamkorlik</Link>
							<Link to=''>Topshirish Punktlari</Link>
							<Link to=''>Katalogni varaqlash</Link>
						</div>
					</div>
						
					<div className="footerMenu2">
						<div className='Company w-310'>
							<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} >
								<Typography><span>Kompaniya</span></Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<li><Link to=''>Faberlic haqida</Link></li>
									<li><Link to=''>Korporativ qadriyatlar</Link></li>
									<li><Link to=''>Ilmiy ishlanmalar markazi</Link></li>
									<li><Link to=''>O'Z Ishlab Chiqarish</Link></li>
									<li><Link to=''>Yangiliklar</Link></li>
									<li><Link to=''>Katalog yangiliklari</Link></li>
								</Typography>
							</AccordionDetails>
						</Accordion>
						</div>
						<div className='Service w-310'>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />} >
									<Typography><span>Xizmat</span></Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<li><Link to=''>Qanday qilib buyurtma berish kerak</Link></li>
										<li><Link to=''>Ro'yxatdan o'tish</Link></li>
										<li><Link to=''>To'lov</Link></li>
										<li><Link to=''>Yetkazib berish</Link></li>
										<li><Link to=''>Qaytish</Link></li>
										<li><Link to=''>Savol va Javob</Link></li>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
						<div className='Optional w-310'>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />} >
									<Typography><span>Ixtiyoriy</span></Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<li><Link to=''>Hamkorlik</Link></li>
										<li><Link to=''>Topshirish Punktlari</Link></li>
										<li><Link to=''>Katalogni varaqlash</Link></li>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</div>

					<div className='footerSocialNetwork'>
						<span>Ijtimoiy tarmoq</span>
						<ul>
							<li>
								<a href='/#'>{insta}</a>
							</li>
							<li>
								<a href='/#'>{vk}</a>
							</li>
							<li>
								<a href='/#'>{face}</a>
							</li>
							<li>
								<a href='/#'>{ok}</a>
							</li>
							<li>
								<a href='/#'>{youtobe}</a>
							</li>
							<li>
								<a href='/#'>
									<img src={yandexZen} alt='error img' />
								</a>
							</li>
						</ul>
						<div className='footerLaast'>
							<p>Ilovani yuklab oling</p>
							<div className='lastImg'>
								<a href='/#'>
									<img src={app} alt='' />
								</a>
								<a href='/#'>
									<img src={googlePlay} alt='' />
								</a>
							</div>
							<p className='lastP'>
								Copyright © 2021 ОАО «Фаберлик»
							</p>
						</div>
					</div>
				</div>
			</div>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.div`
	background-color: #fafafa;
	li{
		list-style-type: none;
	}
	span {
		font-size: 15px;
		line-height: 1.125rem;
		font-weight: 700;
		margin-bottom: 15px;
		color: #222;
	}

	a {
		font-size: 13px;
		color: #1c1c1c;
		text-decoration: none;

		line-height: 1.625rem;
		&:hover {
			text-decoration: underline;
		}
	}

	.container {
		padding: 32px 80px 37px;
	}
	.footerRow {
		display: flex;
		padding-top: 50px;
	}
	.footerLogo img {
		width: 83px;
	}
	.footerMenu {
		display: flex;
		margin: 0 60px;
	}
	.d-flex {
		display: flex;
		flex-direction: column;
	}

	.pright {
		padding: 0 60px;
	}
	.footerMenu2{
		display: none;
	}
	.footerSocialNetwork {
		padding-left: 30px;
		ul {
			display: flex;
			flex-wrap: wrap;
			width: 150px;
			margin-top: 15px;

			li {
				list-style-type: none;
				margin: 0 18px 13px 0;
				overflow: hidden;

				a {
					font-size: 20px;
				}
				img {
					width: 18px;
					height: 18px;
				}
			}
		}
		.footerLaast {
			display: flex;
			flex-direction: column;
			font-size: 13px;
			.lastImg {
				margin: 12px 0;
				overflow: hidden;
				a {
					margin: 0 10px;
				}
			}
			p {
				margin-left: 10px;
				color: #222;
			}
			.lastP {
				color: #b3b3b3;
			}
		}
	}


	//***@media css**//


@media only screen and ( min-width: 1025px){
     .container {
        width: 100%;
     }
	 span {
		font-size: 15px;
		line-height: 1.125rem;
		font-weight: 700;
		margin-bottom: 15px;
		color: #222;
	}
	ul, li{
		margin: 0;
		padding: 0;
	}

	a {
		font-size: 13px;
		color: #1c1c1c;
		text-decoration: none;

		line-height: 1.625rem;
		&:hover {
			text-decoration: underline;
		}
	}

	.container {
		padding: 32px 60px 37px;
	}
	.footerRow {
		display: flex;
		padding-top: 50px;
	}
	.footerLogo img {
		width: 83px;
	}
	.footerMenu {
		display: flex;
		margin: 0 60px;
	}
	.d-flex {
		display: flex;
		flex-direction: column;
	}

	.pright {
		padding: 0 40px;
	}
	.footerSocialNetwork {
		padding-left: 30px;
		ul {
			display: flex;
			flex-wrap: wrap;
			width: 150px;
			margin-top: 15px;

			li {
				list-style-type: none;
				margin: 0 18px 13px 0;
				overflow: hidden;

				a {
					font-size: 20px;
				}
				img {
					width: 18px;
					height: 18px;
				}
			}
		}
		.footerLaast {
			display: flex;
			flex-direction: column;
			font-size: 13px;
			.lastImg {
				margin: 12px 0;
				overflow: hidden;
				a {
					margin: 0 10px;
				}
			}
			p {
				margin-left: 10px;
				color: #222;
			}
			.lastP {
				color: #b3b3b3;
			}
		}
	}





}

 @media only screen and (min-width:960px) and ( max-width: 1025px){
     .container {
        width: 100%;
		padding: 32px 0 37px;
		.pright {
    	padding: 0 25px;
}
     }
    .footerRow{
        display: block;
		padding-top: 0;
		.footerMenu {
			margin:40px 0;
			.pright {
				padding: 0 80px 0 0;
			}
		}
		.footerSocialNetwork {
			padding-left:0;
			display: flex;
			flex-direction: column;
			align-items: center;
			ul {
				width: 320px;
				li{
					margin-right: 30px;
				}
			}
			p{
				text-align: center;
				margin: 15px 0;
			}





	}
}




} 

@media only screen and (min-width:768px) and ( max-width: 960px){
	.container {
		width: 100%;
		padding: 32px 50px 37px;
	}
	.footerRow{
        display: block;
		padding-top: 0;
		.footerMenu{
			margin: 0;
			.pright{
				padding:30px 40px 40px 0 ;
			}
		}
		.footerSocialNetwork {
			padding-left: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align:center;
			ul{
				width: 390px;
				margin-bottom: 20px;
				li{
					margin: 0 20px 13px;
				}
			}
			.lastImg{
				margin: 30px 0;
			}
		}
	}

}

@media only screen and (min-width:500px) and ( max-width: 768px){
	.container {
			width: 100%;
	}
	.footerLogo img {
    	display: none;
	}
	.footerRow {
    display: flex;
	flex-direction: column;
    padding-top: 50px;

	.footerMenu{
		display: none;
	}
	.footerMenu2{
		display: block;
		margin-left: 8px;

		.MuiPaper-elevation1{
			box-shadow:none;
			border-radius: 0;
			background-color: #fafafa;
		}
		.MuiIconButton-root {
			padding: 0;
		}
		.MuiAccordionSummary-root {
    		min-height: 0;
		}
		.MuiIconButton-edgeEnd {
    		margin-right: 0;
		}
		.MuiAccordionSummary-content {
			margin:0;
		}
}
	}
	.w-310{
		width: 300px;
	}
	.footerSocialNetwork {
			padding-left: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align:center;
			ul{
				width: 300px;
				margin-bottom: 20px;
				li{
					margin: 0 15px 10px;
				}
			}
			.footerLaast{
				.lastImg{
					margin: 30px 0;
				}
			}
		}
}

@media only screen and (min-width:360px) and ( max-width: 500px){
	.container {
		width: 100%;
	}
	.footerLogo img {
    	display: none;
	}
	.footerRow {
    display: flex;
	flex-direction: column;
    padding-top: 50px;

	.footerMenu{
		display: none;
	}
	.footerMenu2{
		display: block;
		margin-left: 8px;

		.MuiPaper-elevation1{
			box-shadow:none;
			border-radius: 0;
			background-color: #fafafa;
		}
		.MuiIconButton-root {
			padding: 0;
		}
		.MuiAccordionSummary-root {
    		min-height: 0;
		}
		.MuiIconButton-edgeEnd {
    		margin-right: 0;
		}
		.MuiAccordionSummary-content {
			margin:0;
		}
}
	}
	.w-310{
		width: 250px;
	}
	.footerSocialNetwork {
			padding-left: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align:center;
			span{
				margin: 15px 0;
			}
			ul{
				width: 252px;
				margin-bottom: 20px;
				li{
					margin: 0 12px 10px;
				}
			}
			.footerLaast{
				.lastImg{
					display: flex;
					margin: 30px 0;
				}
			}
		}


}


`;

export default Footer;

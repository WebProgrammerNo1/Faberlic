import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import discountBg from "../../images/discount.webp";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useState } from "react";

const data = [
	
	{
		title: "Гель «Трансформер» iSeul",
		price: "323 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "259 000 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	},
	{
		title: "iSeul ko'z atrofidagi teri uchun gidrogelli patchlar",
		price: "550 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "420 000 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	},
	{
		title: "Крем Blur Beautylab",
		price: "420 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "291 000 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	},
	{
		title: "Bioglow yuz uchun softner",
		price: "178 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "146 000 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	},
	{
		title: "Biomica tiklantiruvchi tonik-zardob",
		price: "129 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "96 900 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	},
	{
		title: "Oceanum ko'z atrofidagi teri uchun gidrogeleviy patchlar",
		price: "550 000 UZS",
		youPrice: "Sizning narxingiz",
		discount: "420 000 UZS",
		btn1: "Savatga qo'shish",
		btn2: "Batafsilroq",
	}
	
];
console.log(data);
const Discount = () => {
	const [open, setOpen] = useState(-1);
	
	return (
		<DiscountWrapper>
			<div className='block'>
				<div className='discount'>
					<img src={discountBg} alt='' />
					{data?.map((v, i) => 
						<div className='discountblock' key={i}>
							<div onMouseEnter={() => setOpen(i)} className='plusIcon1'>
								<span>+</span>
							</div>
							<div className={`dnone  + ${i === open && "dblock"}`}>
								<div className='triangle'></div>
								<div className='shopping'>
									<p className='close' onClick={() => setOpen("d-none")}>
										<ClearIcon />
									</p>
									<Link to=''>{v.title}</Link>
									<div className='titleBlock'>
										<p>{v.price}</p>
										<div className='price'>
											<span>{v.youPrice}</span>
											<span>{v.discount}</span>
										</div>
									</div>
									<Button variant='contained' className='btn'>
										{v.btn1}
									</Button>
									<Link to='' className='lastA'>
										{v.btn2}
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</DiscountWrapper>
	);
};

const DiscountWrapper = styled.div`
	.block {
		.discount {
			position: relative;
			img {
				max-width: 100%;
				min-width: 100%;
				max-height: 100%;
			}
			.discountBlock {
				.plusIcon1 {
					position: absolute;
					top: 105px;
					left: 125px;
					width: 55px;
					height: 55px;
					border-radius: 50%;
					background: hsla(0, 0%, 100%, 0.8);
					span {
						font-size: 45px;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}
				.d-none {
					display: none;
				}
				.d-block {
					display: block;
					transition: all 0.15s ease 0s;
				}
				.triangle {
					position: absolute;
					top: 162px;
					left: 132px;
					border-left: 20px solid transparent;
					border-right: 20px solid transparent;
					border-bottom: 20px solid #fff;
					z-index: 22;
				}
				.shopping {
					position: absolute;
					width: 300px;
					top: 181px;
					left: 110px;
					margin: 0 auto;
					display: flex;
					padding: 20px 20px 25px;
					flex-direction: column;
					background: #fff;
					border: 1px solid #f5f5f5;
					z-index: 12;
					&:hover {
						box-shadow: 0 -2px 25px hsl(0deg 0% 64% / 60%);
					}
					.close {
						text-align: right;
						margin: -10px -10px 0 0;
					}

					.btn {
						color: #fff;
						border-radius: 0;
						background-color: #000;
						margin: 0 9%;
						&:hover {
							background: #303030;
							color: #fff;
							box-shadow: 0 0 12px 0 rgb(47 47 47 / 67%);
						}
					}
					a {
						padding: 0 9%;
						font-size: 13px;
						text-decoration: none;
						line-height: 1.4rem;
						color: #3b3b3b;
						&:hover {
							text-decoration: underline;
						}
					}
					.titleBlock {
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 12px 0 17px;
						font-size: 16px;
						line-height: 22px;
						p {
							text-decoration: line-through;
						}
						.price {
							display: flex;
							flex-direction: column;
							color: #000;
							padding-left: 5px;
							margin-left: 15px;
							font-size: 12px;
							border-left: 1px solid #dadada;
							span:nth-child(2) {
								color: #e0727f;
								font-weight: 700;
							}
						}
					}

					.lastA {
						text-align: center;
						padding-top: 10px;
					}
				}
			}
			.discountBlock:nth-child(2) {
				z-index: 2;
				.plusIcon1 {
					position: absolute;
					top: 325px;
					left: 95px;
				}
				.triangle {
					position: absolute;
					top: 380px;
					left: 105px;
				}
				.shopping {
					position: absolute;
					top: 400px;
					left: 85px;
				}
			}
			.discountBlock:nth-child(3) {
				z-index: 3;
				.plusIcon1 {
					position: absolute;
					top: 348px;
					left: 847px;
				}
				.triangle {
					position: absolute;
					top: 405px;
					left: 855px;
				}
				.shopping {
					position: absolute;
					top: 424px;
					left: 830px;
				}
			}
			.discountBlock:nth-child(4) {
				z-index: 4;
				.plusIcon1 {
					position: absolute;
					top: 337.5px;
					left: 1103.5px;
				}
				.triangle {
					position: absolute;
					top: 393px;
					left: 1111px;
				}
				.shopping {
					position: absolute;
					top: 412px;
					left: 1091px;
				}
			}
			.discountBlock:nth-child(5) {
				z-index: 4;
				.plusIcon1 {
					position: absolute;
					top: 254px;
					left: 1269px;
				}
				.triangle {
					position: absolute;
					top: 310px;
					left: 1272px;
				}
				.shopping {
					position: absolute;
					top: 329px;
					left: 1209px;
				}
			}
			.discountBlock:nth-child(6) {
				.plusIcon1 {
					position: absolute;
					top: 92.5px;
					left: 1405.5px;
				}
				.triangle {
					position: absolute;
					top: 149px;
					left: 1413px;
				}
				.shopping {
					position: absolute;
					top: 168px;
					left: 1209px;
				}
			}
		}
	}

	//**@media css**//

	@media only screen and (min-width: 1025px) {
		.container {
			width: 100%;
		}
		.block {
			.discount {
				.discountBlock {
					.plusIcon1 {
						top: 90px;
						left: 110px;
					}
					.triangle {
						top: 148px;
						left: 117px;
					}
					.shopping {
						top: 168px;
						left: 90px;
					}
				}
				.discountBlock:nth-child(2) {
					.plusIcon1 {
						top: 275px;
						left: 85px;
					}
					.triangle {
						top: 330px;
						left: 93px;
					}
					.shopping {
						top: 350px;
						left: 65px;
					}
				}
				.discountBlock:nth-child(3) {
					.plusIcon1 {
						top: 270px;
						left: 716px;
					}
					.triangle {
						top: 327px;
						left: 723px;
					}
					.shopping {
						top: 345px;
						left: 696px;
					}
				}
				.discountBlock:nth-child(4) {
					.plusIcon1 {
						top: 262.5px;
						left: 971.5px;
					}
					.triangle {
						top: 318px;
						left: 979px;
					}
					.shopping {
						top: 338px;
						left: 860px;
					}
				}
				.discountBlock:nth-child(5) {
					.plusIcon1 {
						top: 209px;
						left: 1107px;
					}
					.triangle {
						top: 266px;
						left: 1116px;
					}
					.shopping {
						top: 286px;
						left: 968px;
					}
				}
				.discountBlock:nth-child(6) {
					.plusIcon1 {
						top: 55.5px;
						left: 1188.5px;
					}
					.triangle {
						top: 112px;
						left: 1197px;
					}
					.shopping {
						top: 132px;
						left: 964px;
					}
				}
			}
		}
	}

	@media only screen and (min-width: 960px) and (max-width: 1025px) {
		.container {
			width: 100%;
		}
		.block {
			.discount {
				.discountBlock {
					.plusIcon1 {
						top: 63px;
						left: 70px;
						width: 45px;
						height: 45px;
						span {
							font-size: 40px;
						}
					}
					.triangle {
						top: 110px;
						left: 73px;
					}
					.shopping {
						top: 130px;
						left: 50px;
					}
				}
				.discountBlock:nth-child(2) {
					.plusIcon1 {
						top: 200px;
						left: 60px;
					}
					.triangle {
						top: 246px;
						left: 62px;
					}
					.shopping {
						top: 265px;
						left: 42px;
					}
				}
				.discountBlock:nth-child(3) {
					.plusIcon1 {
						top: 200px;
						left: 520px;
					}
					.triangle {
						top: 246px;
						left: 523px;
					}
					.shopping {
						top: 265px;
						left: 500px;
					}
				}
				.discountBlock:nth-child(4) {
					.plusIcon1 {
						top: 200px;
						left: 650px;
					}
					.triangle {
						top: 246px;
						left: 653px;
					}
					.shopping {
						top: 265px;
						left: 620px;
					}
				}
				.discountBlock:nth-child(5) {
					.plusIcon1 {
						top: 150px;
						left: 790px;
					}
					.triangle {
						top: 197px;
						left: 793px;
					}
					.shopping {
						top: 216px;
						left: 610px;
					}
				}
				.discountBlock:nth-child(6) {
					.plusIcon1 {
						top: 6px;
						left: 870px;
					}
					.triangle {
						top: 52px;
						left: 873px;
					}
					.shopping {
						top: 71px;
						left: 630px;
					}
				}
			}
		}
		.footerRow {
			display: block;
		}
	}

	@media only screen and (min-width: 768px) and (max-width: 960px) {
		.container {
			width: 100%;
		}
		.block {
			.discount {
				.discountBlock {
					.plusIcon1 {
						width: 45px;
						height: 45px;
						top: 51px;
						left: 54px;
						span {
							font-size: 40px;
						}
					}
					.triangle {
						top: 99px;
						left: 58px;
					}
					.shopping {
						top: 119px;
						left: 18px;
					}
				}
				.discountBlock:nth-child(2) {
					.plusIcon1 {
						top: 156px;
						left: 41px;
					}
					.triangle {
						top: 203px;
						left: 44px;
					}
					.shopping {
						top: 223px;
						left: 33px;
					}
				}
				.discountBlock:nth-child(3) {
					.plusIcon1 {
						top: 146px;
						left: 384px;
					}
					.triangle {
						top: 193px;
						left: 386px;
					}
					.shopping {
						top: 212px;
						left: 346px;
					}
				}
				.discountBlock:nth-child(4) {
					.plusIcon1 {
						top: 136.5px;
						left: 490.5px;
					}
					.triangle {
						top: 183px;
						left: 495px;
					}
					.shopping {
						top: 202px;
						left: 329px;
					}
				}
				.discountBlock:nth-child(5) {
					.plusIcon1 {
						top: 129px;
						left: 622px;
					}
					.triangle {
						top: 177px;
						left: 624px;
					}
					.shopping {
						top: 197px;
						left: 426px;
					}
				}
				.discountBlock:nth-child(6) {
					.plusIcon1 {
						top: 24.5px;
						left: 598.5px;
					}
					.triangle {
						top: 69px;
						left: 601px;
					}
					.shopping {
						top: 89px;
						left: 436px;
					}
				}
			}
		}
	}

	@media only screen and (min-width: 500px) and (max-width: 768px) {
		.container {
			width: 100%;
		}
		.block {
			.discount {
				.discountBlock {
					.plusIcon1 {
						width: 30px;
						height: 30px;
						top: 30px;
						left: 30px;
						span {
							font-size: 30px;
						}
					}
					.triangle {
						top: 62px;
						left: 30px;
						border-left: 15px solid transparent;
						border-right: 15px solid transparent;
						border-bottom: 15px solid #fff;
					}
					.shopping {
						width: 229px;
						top: 76px;
						left: 10px;
						display: flex;
						padding: 10px 10px 10px;
					}
				}
				.discountBlock:nth-child(2) {
					.plusIcon1 {
						top: 94px;
						left: 28px;
					}
					.triangle {
						top: 125px;
						left: 28px;
					}
					.shopping {
						top: 140px;
						left: 15px;
					}
				}
				.discountBlock:nth-child(3) {
					.plusIcon1 {
						top: 89px;
						left: 238px;
					}
					.triangle {
						top: 120px;
						left: 238px;
					}
					.shopping {
						top: 135px;
						left: 100px;
					}
				}
				.discountBlock:nth-child(4) {
					.plusIcon1 {
						top: 101.5px;
						left: 324.5px;
					}
					.triangle {
						top: 129px;
						left: 324px;
					}
					.shopping {
						top: 142px;
						left: 221px;
					}
				}
				.discountBlock:nth-child(5) {
					.plusIcon1 {
						top: 70px;
						left: 380px;
					}
					.triangle {
						top: 100px;
						left: 384px;
					}
					.shopping {
						top: 114px;
						left: 232px;
					}
				}
				.discountBlock:nth-child(6) {
					.plusIcon1 {
						top: 2.5px;
						left: 406.5px;
					}
					.triangle {
						top: 32px;
						left: 406px;
					}
					.shopping {
						top: 47px;
						left: 231px;
					}
				}
			}
		}
	}

	@media only screen and (min-width: 360px) and (max-width: 500px) {
		.container {
			width: 100%;
		}
		.block {
			.discount {
				.discountBlock {
					.plusIcon1 {
						width: 30px;
						height: 30px;
						top: 15px;
						left: 30px;
						span {
							font-size: 30px;
						}
					}
					.triangle {
						top: 45px;
						left: 30px;
						border-left: 15px solid transparent;
						border-right: 15px solid transparent;
						border-bottom: 15px solid #fff;
					}
					.shopping {
						width: 229px;
						top: 60px;
						left: 10px;
						display: flex;
						padding: 10px 10px 10px;
					}
				}
				.discountBlock:nth-child(2) {
					.plusIcon1 {
						top: 84px;
						left: 20px;
					}
					.triangle {
						top: 113px;
						left: 20px;
					}
					.shopping {
						top: 128px;
						left: 11px;
					}
				}
				.discountBlock:nth-child(3) {
					.plusIcon1 {
						top: 60px;
						left: 180px;
					}
					.triangle {
						top: 90px;
						left: 180px;
					}
					.shopping {
						top: 104px;
						left: 52px;
					}
				}
				.discountBlock:nth-child(4) {
					.plusIcon1 {
						top: 80px;
						left: 250px;
					}
					.triangle {
						top: 108px;
						left: 255px;
					}
					.shopping {
						top: 123px;
						left: 103px;
					}
				}
				.discountBlock:nth-child(5) {
					.plusIcon1 {
						top: 70px;
						left: 310px;
					}
					.triangle {
						top: 100px;
						left: 305px;
					}
					.shopping {
						top: 114px;
						left: 117px;
					}
				}
				.discountBlock:nth-child(6) {
					.plusIcon1 {
						top: 0px;
						left: 320px;
					}
					.triangle {
						top: 30px;
						left: 320px;
					}
					.shopping {
						top: 44px;
						left: 132px;
					}
				}
			}
		}
	}
`;

export default Discount;

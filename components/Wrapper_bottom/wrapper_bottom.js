import Logo from '../../public/assets/logo.d073e42f';
import Modal from '../Modal';
import { useState } from 'react';
import Catalog from './catalog';
import DropDownServe from './DropDownServe';
export default function WrapperBottom() {
	const [showModalMore, setShowModalMore] = useState(false);
	const [showModalService, setShowModalService] = useState(false);
	const [posY, setPosY] = useState(0);
	const getPosition = (e, seter) => {
        console.log(e.target.getBoundingClientRect())
		seter(true);
		const pos = e.target.getBoundingClientRect().top;
		setPosY(pos);
	};
	return (
		<section className="wrapper_bottom">
			<div className="wrapper_bottom__logo">
				<Logo />
			</div>
			<div className="wrapper_bottom__menu">
				<ul>
					<li>Тракторы</li>
					<li>Комбайны</li>
					<li>Пресс-подборщики</li>
					<li>Картофелеуборочный комбайн</li>
					<li>Телескопические погрузчики</li>
					<li onClick={(e) => getPosition(e, setShowModalMore)}>
						<span>Больше</span>
						<svg
							className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							data-testid="KeyboardArrowDownIcon"
						>
							<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
						</svg>
					</li>
					{showModalMore && (
						<Modal
							onClose={() => setShowModalMore(false)}
							show={showModalMore}
							posY={`${posY + 45}px`}
						>
							<Catalog />
						</Modal>
					)}
					<hr className="vertical-split" />
					<li onClick={(e) => getPosition(e, setShowModalService)}>
						<span>Услуги</span>
						<svg
							className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							data-testid="KeyboardArrowDownIcon"
						>
							<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
						</svg>
					</li>
					{showModalService && (
						<Modal
							onClose={() => setShowModalService(false)}
							show={showModalService}
                            height={'250px'}
                            width={'815px'}
                            left={`500px`}
							posY={`${posY + 45}px`}
						>
							<DropDownServe />
						</Modal>
					)}
				</ul>
			</div>
		</section>
	);
}

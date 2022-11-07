import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import s from '../styles/modal.module.scss';
import styled from 'styled-components';
const Modal = ({ onClose, children, posY, width, height, left, top }, props) => {
	const [isBrowser, setIsBrowser] = useState(false);

	// create ref for the StyledModalWrapper component
	const modalWrapperRef = React.useRef();

	// check if the user has clickedinside or outside the modal
	const backDropHandler = (e) => {
		if (!modalWrapperRef?.current?.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		setIsBrowser(true);

		// attach event listener to the whole windor with our handler
		window.addEventListener('click', backDropHandler);

		// remove the event listener when the modal is closed
		return () => window.removeEventListener('click', backDropHandler);
	}, []);
	const modalContent = (
		<div className={s.overlay}>
			<StyledModal 
            height={height}
            width={width} 
            top={posY} 
            left={left}
            className={s.modal}
            ref={modalWrapperRef}
             >
				<div className={s.modalBody}>{children}</div>
			</StyledModal>
		</div>
	);

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
};

const StyledModal = styled.div`
	display: flex;
	position: absolute;
	border-radius: 0;
	border: 1px solid black;
	top: ${(props) => props.top || '0'};
    right: ${(props) => props.right || '0'};
    left: ${(props) => props.left || '0'};
	flex-direction: ${(props) => props.direction || 'row'};
	align-items: ${(props) => props.align || 'center'};
	justify-content: ${(props) => props.justify || 'center'};
	margin: ${(props) => props.margin || '0 auto'};
	height: ${(props) => props.height || '500px'};
	width: ${(props) => props.width || '98%'};
	align-self: ${(props) => props.align_self || 'auto'};
`;

export default Modal;

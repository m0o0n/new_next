// import React, { useState } from "react";
// import Modal from '../components/Modal'

// export default function Home() {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setShowModal(true)}>Open Modal</button>
//             {showModal && <Modal
//                 onClose={() => setShowModal(false)}
//                 show={showModal}
//             >
//                 Hello from the modal!
//             </Modal>}
//         </div>
//     )
// }

import { MainLayout } from '../components/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import Modal from '../components/Modal';
export default function Home() {
	const { t } = useTranslation('common');
	const [showModal, setShowModal] = useState(false);
	return (
		<MainLayout footer title={'Main Page'}>
			<h1>{t('greeting')}</h1>
			<button onClick={() => setShowModal(true)}>Open Modal</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)} show={showModal}>
					Hello from the modal!
				</Modal>
			)}
		</MainLayout>
	);
}

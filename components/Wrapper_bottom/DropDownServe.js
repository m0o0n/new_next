import useTranslation from 'next-translate/useTranslation';
import s from '../../styles/dropDownServe.module.scss';
import Link from 'next/link';
export default function DropDownServe() {
	
	return (
        <div className={s.container}>
            <div className={s.element}>
                <div className={s.imgTitle}>
                    <div><svg class="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeInherit css-y6k23j" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteSearchOutlinedIcon"><path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path></svg></div>
                    <h6>Inspection</h6>
                </div>
                <span>Detect any problems</span>
                <div className={s.button}>READ MORE</div>
            </div>

            <div className={s.element}>
                <div className={s.imgTitle}>
                    <div><svg class="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeInherit css-y6k23j" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CreditScoreOutlinedIcon"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z"></path></svg></div>
                    <h6>Secure Payment</h6>
                </div>
                <span>Flexible and safe</span>
                <div className={s.button}>READ MORE</div>
            </div>

            <div className={s.element}>
                <div className={s.imgTitle}>
                    <div><svg class="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeInherit css-y6k23j" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingOutlinedIcon"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg></div>
                    <h6>Easy Transport</h6>
                </div>
                <span>Buy from any country</span>
                <div className={s.button}>READ MORE</div>
            </div>

            <div className={s.element}>
                <div className={s.imgTitle}>
                    <div><svg class="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeInherit css-y6k23j" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedOutlinedIcon"><path d="M23 11.99 20.56 9.2l.34-3.69-3.61-.82L15.4 1.5 12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 11.99l2.44 2.79-.34 3.7 3.61.82 1.89 3.2 3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69 2.44-2.8zm-3.95 1.48-.56.65.08.85.18 1.95-1.9.43-.84.19-.44.74-.99 1.68-1.78-.77-.8-.34-.79.34-1.78.77-.99-1.67-.44-.74-.84-.19-1.9-.43.18-1.96.08-.85-.56-.65L3.67 12l1.29-1.48.56-.65-.09-.86-.18-1.94 1.9-.43.84-.19.44-.74.99-1.68 1.78.77.8.34.79-.34 1.78-.77.99 1.68.44.74.84.19 1.9.43-.18 1.95-.08.85.56.65 1.29 1.47-1.28 1.48z"></path><path d="m10.09 13.75-2.32-2.33-1.48 1.49 3.8 3.81 7.34-7.36-1.48-1.49z"></path></svg></div>
                    <h6>Full Warranty</h6>
                </div>
                <span>Up to 6 months</span>
                <div className={s.button}>READ MORE</div>
            </div>

        </div>
		
	);
}



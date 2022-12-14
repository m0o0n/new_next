import { useRouter } from 'next/router';
export default function WrapperTop() {
	const router = useRouter();
	const { locales, locale } = router;
	return (
		<section className="wrapper_top">
			<div className="wrapper_top__phone">
				<svg
					className="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall css-ewv0me"
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					data-testid="CallOutlinedIcon"
				>
					<path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path>
				</svg>
				<a tabIndex="0" href="tel:+494087407541">
					+49(0) 40 874 075 41
				</a>
			</div>
			<div className="wrapper_top__menu">
				<ul>
					<li>Sell with E-FARM</li>
					<li>About us</li>
					<li>Why E-FARM</li>
					<li>
						<span>More</span>
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
				</ul>
				<hr className="vertical-split" />
				<div className="wrapper_top__languageSwicher">
					<div className="wrapper_top__languageSwicher_flag"></div>
					<select
						onChange={(e) => {
							Router.push(router.asPath, router.asPath, {
								locale: e.target.value,
							});
						}}
						defaultValue={locale}
					>
						{locales.map((lang) => {
							return (
								<option key={lang} value={lang}>
									{lang}
								</option>
							);
						})}
					</select>
				</div>
				<hr className="vertical-split" />
				<div className="wrapper_top__search">
					<svg
						className="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall searchOverlay_clickable__Shrwb css-ewv0me"
						focusable="false"
						aria-hidden="true"
						viewBox="0 0 24 24"
						data-testid="SearchIcon"
					>
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
					</svg>{' '}
				</div>
			</div>
		</section>
	);
}

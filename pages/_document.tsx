import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		const html = `window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
			page_path: window.location.pathname,
		});`;

		return (
			<Html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

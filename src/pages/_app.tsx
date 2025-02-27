import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

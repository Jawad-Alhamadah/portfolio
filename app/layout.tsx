import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jawad alhamadah - Web Developer',
	description:
		'Welcome to my portfolio! I am a passionate web developer creating modern, responsive, and user-friendly websites. Specializing in both frontend and backend technologies and interactive user interfaces, I build engaging web experiences that make an impact.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Jawad alhamadah',
	],
	authors: [{ name: 'Jawad alhamadah' }],
	creator: 'Jawad alhamadah',
	openGraph: {
		title: 'Jawad alhamadah - Web Developer Portfolio',
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Jawad alhamadah - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jawad alhamadah - Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: 'Jawad alhamadah - Web Developer',
	// 	description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
	// 	creator: '@yourusername',
	// 	images: ['/og-image.jpg'],
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

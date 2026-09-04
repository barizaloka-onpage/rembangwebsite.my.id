<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const siteTitle = 'Kabupaten Rembang - Portal Informasi Karya Pemuda Rembang';
	const siteDesc = 'Portal informasi independen Kabupaten Rembang, Jawa Tengah buatan Pemuda Rembang Asli. Temukan sejarah R.A. Kartini, wisata pantai, kuliner khas, dan 14 kecamatan.';
	const siteOgImage = '/og-image.png';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDesc} />

	<!-- Favicon & Icons -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/logo.png" />

	<!-- OpenGraph (WhatsApp, Telegram, Facebook, LinkedIn) -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kabupaten Rembang - Pemuda Rembang Asli" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDesc} />
	<meta property="og:image" content={siteOgImage} />
	<meta property="og:image:secure_url" content={siteOgImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />

	<!-- Twitter / X Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDesc} />
	<meta name="twitter:image" content={siteOgImage} />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased dark:bg-slate-950 dark:text-slate-100">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

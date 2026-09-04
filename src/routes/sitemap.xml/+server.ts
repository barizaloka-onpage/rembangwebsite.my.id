import { getAllWisata, getAllKuliner, getAllKecamatan } from '$lib/contentLoader';
import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://rembangwebsite.my.id';

export const GET: RequestHandler = async () => {
	const staticPages = [
		'',
		'/profil',
		'/wisata',
		'/kuliner',
		'/kebudayaan',
		'/kecamatan'
	];

	const wisata = getAllWisata();
	const kuliner = getAllKuliner();
	const kecamatan = getAllKecamatan();

	const wisataUrls = wisata.map((item) => `/wisata/${item.id}`);
	const kulinerUrls = kuliner.map((item) => `/kuliner/${item.id}`);
	const kecamatanUrls = kecamatan.map((item) => `/kecamatan/${item.slug}`);

	const allPages = [
		...staticPages,
		...wisataUrls,
		...kulinerUrls,
		...kecamatanUrls
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6'}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

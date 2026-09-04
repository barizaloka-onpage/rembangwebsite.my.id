export interface WisataContent {
	id: string;
	nama: string;
	kategori: 'pantai' | 'sejarah' | 'alam' | 'religi';
	lokasi: string;
	deskripsi: string;
	fitur: string[];
	body: string;
}

export interface KulinerContent {
	id: string;
	nama: string;
	kategori: 'makanan' | 'minuman' | 'oleh-oleh';
	deskripsi: string;
	bahanUtama: string[];
	lokasiKhas: string;
	body: string;
}

export interface KecamatanContent {
	slug: string;
	nama: string;
	pusatPemerintahan: string;
	jumlahDesa: number;
	luasKm2: number;
	potensiUtama: string;
	deskripsi: string;
	body: string;
}

export interface BudayaContent {
	nama: string;
	kategori: 'tradisi' | 'kerajinan' | 'kesenian';
	deskripsi: string;
	asal: string;
	body: string;
}

function parseFrontmatter(rawContent: string) {
	const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
	const match = rawContent.match(frontmatterRegex);
	if (!match) return { metadata: {} as Record<string, any>, body: rawContent.trim() };

	const rawYaml = match[1];
	const body = match[2].trim();
	const metadata: Record<string, any> = {};

	const lines = rawYaml.split('\n');
	let currentKey = '';

	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;

		if (trimmed.startsWith('- ') && currentKey) {
			if (!Array.isArray(metadata[currentKey])) {
				metadata[currentKey] = [];
			}
			metadata[currentKey].push(trimmed.slice(2).trim());
		} else if (trimmed.includes(':')) {
			const colonIdx = trimmed.indexOf(':');
			const key = trimmed.slice(0, colonIdx).trim();
			const value = trimmed.slice(colonIdx + 1).trim();

			currentKey = key;
			if (value === '') {
				metadata[key] = [];
			} else if (value.startsWith('[') && value.endsWith(']')) {
				metadata[key] = value
					.slice(1, -1)
					.split(',')
					.map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
			} else if (!isNaN(Number(value)) && value !== '') {
				metadata[key] = Number(value);
			} else {
				metadata[key] = value.replace(/^['"]|['"]$/g, '');
			}
		}
	}

	return { metadata, body };
}

// Vite Glob Import for all Markdown files
const rawMarkdownFiles = import.meta.glob('/src/content/**/*.md', {
	query: '?raw',
	eager: true
}) as Record<string, { default: string } | string>;

function getFilesFromFolder(folder: string) {
	const results: { path: string; metadata: Record<string, any>; body: string }[] = [];
	const prefix = `/src/content/${folder}/`;

	for (const [path, contentObj] of Object.entries(rawMarkdownFiles)) {
		if (path.startsWith(prefix) && path.endsWith('.md')) {
			const rawText = typeof contentObj === 'string' ? contentObj : contentObj.default;
			const { metadata, body } = parseFrontmatter(rawText);
			results.push({ path, metadata, body });
		}
	}
	return results;
}

export function getAllWisata(): WisataContent[] {
	return getFilesFromFolder('wisata').map(({ metadata, body }) => ({
		id: metadata.id || '',
		nama: metadata.nama || '',
		kategori: metadata.kategori || 'pantai',
		lokasi: metadata.lokasi || '',
		deskripsi: body || metadata.deskripsi || '',
		fitur: Array.isArray(metadata.fitur) ? metadata.fitur : [],
		body
	}));
}

export function getAllKuliner(): KulinerContent[] {
	return getFilesFromFolder('kuliner').map(({ metadata, body }) => ({
		id: metadata.id || '',
		nama: metadata.nama || '',
		kategori: metadata.kategori || 'makanan',
		deskripsi: body || metadata.deskripsi || '',
		bahanUtama: Array.isArray(metadata.bahanUtama) ? metadata.bahanUtama : [],
		lokasiKhas: metadata.lokasiKhas || '',
		body
	}));
}

export function getAllKecamatan(): KecamatanContent[] {
	return getFilesFromFolder('kecamatan').map(({ metadata, body }) => ({
		slug: metadata.slug || '',
		nama: metadata.nama || '',
		pusatPemerintahan: metadata.pusatPemerintahan || '',
		jumlahDesa: Number(metadata.jumlahDesa) || 0,
		luasKm2: Number(metadata.luasKm2) || 0,
		potensiUtama: metadata.potensiUtama || '',
		deskripsi: body || metadata.deskripsi || '',
		body
	}));
}

export function getAllBudaya(): BudayaContent[] {
	return getFilesFromFolder('kebudayaan').map(({ metadata, body }) => ({
		nama: metadata.nama || '',
		kategori: metadata.kategori || 'kesenian',
		deskripsi: body || metadata.deskripsi || '',
		asal: metadata.asal || '',
		body
	}));
}

export function getWisataById(id?: string): WisataContent | undefined {
	if (!id) return undefined;
	return getAllWisata().find((w) => w.id === id);
}

export function getKulinerById(id?: string): KulinerContent | undefined {
	if (!id) return undefined;
	return getAllKuliner().find((k) => k.id === id);
}

export function getKecamatanBySlug(slug?: string): KecamatanContent | undefined {
	if (!slug) return undefined;
	return getAllKecamatan().find((k) => k.slug === slug.toLowerCase());
}

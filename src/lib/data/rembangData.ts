import {
	getAllWisata,
	getAllKuliner,
	getAllKecamatan,
	getAllBudaya,
	getWisataById,
	getKulinerById,
	getKecamatanBySlug,
	type WisataContent,
	type KulinerContent,
	type KecamatanContent,
	type BudayaContent
} from '$lib/contentLoader';

export type Wisata = WisataContent;
export type Kuliner = KulinerContent;
export type Kecamatan = KecamatanContent;
export type Budaya = BudayaContent;

export const DATA_BERANDA = {
	heroTagline: 'Pesona Bahari, Sejarah Kartini, & Akulturasi Budaya Lasem',
	julukan: ['Kota Garam', 'Kota Santri', 'Bumi Kartini', 'The Little Chinese Town'],
	statistik: [
		{ label: 'Luas Wilayah', value: '1.014,08 km²' },
		{ label: 'Jumlah Kecamatan', value: '14 Kecamatan' },
		{ label: 'Jumlah Desa/Kelurahan', value: '294 Desa / 7 Kel' },
		{ label: 'Panjang Garis Pantai', value: '64 km' }
	]
};

export const DATA_PROFIL = {
	hariJadi: '27 Juli 1741',
	semboyan: 'Rembang BANGKIT (Bersih, Asri, Niat, Gigih, Kritis, Indah, Tenteram)',
	sejarah: `Nama Rembang diyakini berasal dari kata "Rembang" yang berarti perambangan atau pemotongan tebu/pohon, atau kata "Ngrembang" (membelah/merambah). Pada tanggal 27 Juli 1741, seorang adipati yang bernama Ingabehi Wongsojedjo resmi diangkat menjadi Adipati Rembang, yang kemudian ditetapkan sebagai hari jadi Kabupaten Rembang. 

Kabupaten Rembang sangat lekat dengan perjuangan Pahlawan Nasional R.A. Kartini yang menghabiskan akhir hayatnya di sini dan memelopori pendidikan kaum wanita. Selain itu, Rembang (khususnya Lasem) memiliki sejarah akulturasi budaya Tionghoa dan Jawa yang harmonis sejak abad ke-14.`,
	visi: 'Mewujudkan Kabupaten Rembang yang Gemah Ripah Loh Jinawi, Sejahtera, Maju, dan Berdaya Saing.',
	misi: [
		'Meningkatkan kualitas sumber daya manusia yang berakhlak mulia dan berdaya saing.',
		'Memperkuat perekonomian berbasis potensi maritim, pertanian, pariwisata, dan industri kreatif.',
		'Mewujudkan tata kelola pemerintahan yang bersih, transparan, dan akuntabel.',
		'Pembangunan infrastruktur yang berkelanjutan dan ramah lingkungan.'
	]
};

export const LIST_WISATA: Wisata[] = getAllWisata();
export const LIST_KULINER: Kuliner[] = getAllKuliner();
export const LIST_KECAMATAN: Kecamatan[] = getAllKecamatan();
export const LIST_BUDAYA: Budaya[] = getAllBudaya();

export { getWisataById, getKulinerById, getKecamatanBySlug };

<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 text-slate-300 border-t border-slate-800">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
			<!-- Col 1: About -->
			<div class="space-y-4 md:col-span-1">
				<div class="flex items-center gap-3">
					<span class="text-lg font-bold text-white tracking-tight">Kabupaten Rembang</span>
				</div>
				<p class="text-sm text-slate-400 leading-relaxed">
					Website informasi independen Kabupaten Rembang yang dibangun oleh karya Pemuda Rembang Asli. Wadah apresiasi pesona bahari, sejarah R.A. Kartini, warisan Lasem, dan kuliner daerah.
				</p>
			</div>

			<!-- Col 2: Navigation Links -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-white">Navigasi Utama</h3>
				<ul class="mt-4 space-y-2 text-sm">
					<li><a href="/" class="hover:text-blue-400 transition-colors">Beranda</a></li>
					<li><a href="/profil" class="hover:text-blue-400 transition-colors">Profil & Sejarah</a></li>
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Destinasi Wisata</a></li>
					<li><a href="/kuliner" class="hover:text-blue-400 transition-colors">Kuliner Khas</a></li>
					<li><a href="/kebudayaan" class="hover:text-blue-400 transition-colors">Seni & Budaya</a></li>
					<li><a href="/kecamatan" class="hover:text-blue-400 transition-colors">14 Kecamatan</a></li>
					<li><a href="/masjid" class="hover:text-blue-400 transition-colors">Masjid & Syiar Islam</a></li>
					<li><a href="/universitas-ut-rembang" class="hover:text-blue-400 transition-colors">UT Rembang</a></li>
				</ul>
			</div>

			<!-- Col 3: Wisata Populer -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-white">Wisata Unggulan</h3>
				<ul class="mt-4 space-y-2 text-sm text-slate-400">
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Pantai Karang Jahe</a></li>
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Museum R.A. Kartini</a></li>
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Kota Tua Lasem (Tiongkok Kecil)</a></li>
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Hutan Mangrove Pasarbanggi</a></li>
					<li><a href="/wisata" class="hover:text-blue-400 transition-colors">Pasujudan Sunan Bonang</a></li>
				</ul>
			</div>

			<!-- Col 4: Karya Pemuda Rembang -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-white">Komunitas Pemuda</h3>
				<ul class="mt-4 space-y-3 text-sm text-slate-400">
					<li class="flex items-start gap-2">
						<span class="text-blue-400 flex-shrink-0">🚀</span>
						<span>Inisiatif Independen Pemuda Asli Rembang</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-blue-400 flex-shrink-0">📍</span>
						<span>Rembang, Jawa Tengah, Indonesia</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-blue-400 flex-shrink-0">💡</span>
						<span>Mengangkat Potensi Daerah ke Tingkat Nasional</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
			<p>© {currentYear} Rembang Website — Karya Pemuda Rembang Asli. Tidak berafiliasi dengan instansi pemerintah.</p>
			<div class="flex gap-6">
				<a href="/profil" class="hover:text-slate-400">Profil Daerah</a>
				<a href="/kecamatan" class="hover:text-slate-400">14 Kecamatan</a>
				<a href="/wisata" class="hover:text-slate-400">Pariwisata</a>
			</div>
		</div>
	</div>
</footer>

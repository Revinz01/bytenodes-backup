# ByteNodes - Next.js Migration Guide

## Migrasi dari Vite ke Next.js dengan App Router

Project ini telah berhasil dimigrasi dari Vite React ke Next.js 15 dengan App Router.

### Perubahan Utama

1. **Struktur Routing**: Menggunakan Next.js App Router (folder-based routing)
2. **Supabase**: Telah dihapus karena tidak digunakan
3. **SEO**: Metadata API Next.js untuk SEO optimization
4. **React Router**: Diganti dengan Next.js native routing dan next/link

### Setup Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Buat file `.env.local` berdasarkan `.env.local.example`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ByteNodes
```

### Struktur Folder Baru

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout dengan metadata
│   ├── page.tsx           # Homepage
│   ├── services/
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── docs/
│   ├── terms/
│   ├── privacy/
│   ├── cookies/
│   ├── acceptable-use/
│   ├── sla/
│   ├── refund/
│   ├── robots.ts          # SEO: robots.txt
│   ├── sitemap.ts         # SEO: sitemap.xml
│   └── opengraph-image.tsx # SEO: Open Graph image
├── components/
│   ├── pages/             # Page content components
│   └── ...                # Existing components
├── providers/             # Client-side providers
└── ...                    # Existing folders
```

### Fitur SEO yang Ditambahkan

1. **Metadata API**: Setiap halaman memiliki metadata unik (title, description, Open Graph)
2. **Sitemap**: Auto-generated sitemap.xml
3. **Robots.txt**: Auto-generated robots.txt
4. **Open Graph Images**: Dynamic OG images
5. **Structured Data**: Ready untuk schema.org markup
6. **Semantic HTML**: Proper heading hierarchy
7. **Meta Tags**: Twitter cards, Open Graph tags

### Komponen yang Diupdate

- `Navbar`: Menggunakan next/link dan next/image
- `Footer`: Menggunakan next/link
- `Hero`: Menggunakan next/link
- `Services`: Menggunakan next/link
- Semua komponen menggunakan "use client" directive jika menggunakan hooks

### Performance Optimizations

Next.js memberikan banyak optimizations out-of-the-box:
- Automatic code splitting
- Image optimization dengan next/image
- Font optimization
- Static generation untuk pages yang tidak dinamis
- Streaming SSR untuk pages kompleks

### Tips Pengembangan

1. Server Components adalah default di Next.js 15
2. Gunakan "use client" hanya untuk komponen yang membutuhkan interactivity
3. Metadata di-generate di server untuk SEO optimal
4. next/link menggunakan prefetching otomatis

### Migration Checklist

- [x] Setup Next.js configuration
- [x] Migrate routing structure
- [x] Remove Supabase integration
- [x] Update all react-router-dom Link to next/link
- [x] Add SEO metadata to all pages
- [x] Create sitemap.xml
- [x] Create robots.txt
- [x] Add Open Graph images
- [x] Update package.json dependencies
- [x] Create provider components for client-side state
- [x] Test all routes

### Known Issues & Solutions

1. **Image imports**: Gunakan next/image untuk optimisasi
2. **Client hooks**: Tambahkan "use client" directive
3. **Environment variables**: Gunakan NEXT_PUBLIC_ prefix untuk client-side

### Deployment

Project ini siap di-deploy ke:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

Untuk Vercel:
```bash
vercel
```

### Support

Untuk pertanyaan atau issues, hubungi:
- Discord: https://discord.gg/2PMmPp6Yx8

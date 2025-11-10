import React from 'react'
import Spline from '@splinetool/react-spline'
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react'

const palette = {
  blueGray: '#8A95A5', // muted blue-grey
  blueGrayDeep: '#6F7A89',
  beige: '#D7C6A3', // warm neutral beige/gold accent
  beigeDeep: '#C4AD7B',
  olive: '#7A8D5A',
  oliveDeep: '#5F7245',
  white: '#FFFFFF',
  offWhite: '#FAFAF9',
}

function SectionHeader({ overline, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {overline && (
        <p className="tracking-[0.2em] uppercase text-[12px] text-gray-500 mb-3">
          {overline}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-playfair text-[#23303E] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Button({ children }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300"
      style={{
        borderColor: palette.beigeDeep,
        color: palette.blueGrayDeep,
      }}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: palette.beigeDeep }} />
      </span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition -rotate-45 group-hover:rotate-0 duration-300" stroke={palette.oliveDeep}><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  )
}

const products = [
  {
    title: 'Silk Midi Dress',
    img: 'https://images.unsplash.com/photo-1548778943-5dde6f7cb3ea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Textured Knit Set',
    img: 'https://images.unsplash.com/photo-1520975922284-9bd6b22466f1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Minimal Gold Hoops',
    img: 'https://images.unsplash.com/photo-1617038260897-3b2c9c7ccac8?q=80&w=1600&auto=format&fit=crop',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342452485-86ff0a8bdee6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1600&auto=format&fit=crop',
]

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#2A3542]">
      {/* HERO */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        {/* subtle background with organic lines */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(80% 60% at 80% 10%, #FFF3E9 0%, rgba(255,243,233,0.6) 35%, transparent 70%), linear-gradient(180deg, #ffffff 0%, #F7F7F6 100%)`
        }} />
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 400 400\"><defs><linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"${palette.blueGray}\" stop-opacity=\"0.15\"/><stop offset=\"1\" stop-color=\"${palette.beige}\" stop-opacity=\"0.15\"/></linearGradient></defs><path d=\"M0,200 C60,160 120,240 200,200 C280,160 340,240 400,200\" fill=\"none\" stroke=\"url(#g)\" stroke-width=\"1\"/><path d=\"M0,260 C60,220 120,300 200,260 C280,220 340,300 400,260\" fill=\"none\" stroke=\"url(#g)\" stroke-width=\"1\"/></svg>`)}')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px'
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center px-6 md:px-10 lg:px-16">
          <div className="max-w-xl">
            <p className="tracking-[0.25em] text-xs text-gray-500 uppercase">Meraki Boutique</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-playfair leading-[1.1] text-[#1F2A36]">
              Unleash the Diva in You
            </h1>
            <p className="mt-4 text-[17px] text-gray-600">
              Where timeless elegance meets modern charm.
            </p>
            <div className="mt-8">
              <Button>Explore Collection</Button>
            </div>
          </div>

          <div className="relative h-[50vh] md:h-[70vh]">
            <div className="absolute inset-0 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* soft halo */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-32 blur-2xl rounded-full"
              style={{ background: `radial-gradient(60% 100% at 50% 50%, ${palette.beige}33, transparent)` }} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-20 md:py-28 bg-[rgba(250,250,249,0.8)]">
        <div className="absolute inset-0 pointer-events-none" style={{background: `linear-gradient(180deg, transparent 0%, ${palette.offWhite} 100%)`}} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeader
            overline="About"
            title="Meraki Boutique celebrates individuality and confidence through curated designs made to inspire."
          />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeader
            overline="Collections"
            title="Quiet luxury, effortless silhouettes"
            subtitle="Explore pieces crafted with natural textures, refined details, and serene sophistication."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p, idx) => (
              <article key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* gold/olive hover wash */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" style={{ background: `linear-gradient(120deg, ${palette.beige}66, ${palette.olive}55)` }} />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]">{p.title}</h3>
                  <span className="rounded-full px-3 py-1 text-xs tracking-wide bg-white/70 backdrop-blur-sm" style={{ color: palette.blueGrayDeep, border: `1px solid ${palette.beigeDeep}`}}>View</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / LIFESTYLE */}
      <section className="relative py-20 md:py-28 bg-[#F7F7F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeader
            overline="Lifestyle"
            title="Textures of nature and moments of poise"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl">
                <img src={src} alt="Meraki Lifestyle" className="w-full h-64 object-cover md:h-72 lg:h-64 transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000026] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              overline="Contact"
              title="Visit us or say hello"
              subtitle="We'd love to help curate your next favorite look."
            />
            <div className="mt-8 space-y-4 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0" size={20} color={palette.oliveDeep} />
                <p>First Floor, Mall of Kallat, Mananthavady</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="shrink-0" size={20} color={palette.oliveDeep} />
                <a href="tel:+919496099980" className="hover:underline">+91 9496099980</a>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="shrink-0" size={20} color={palette.oliveDeep} />
                <a href="mailto:hello@merakiboutique.example" className="hover:underline">hello@meraki-boutique.com</a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border p-6 md:p-8 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]" style={{ borderColor: palette.beigeDeep }}>
              <p className="text-sm text-gray-600">Send a message</p>
              <form className="mt-4 grid gap-4">
                <input type="text" placeholder="Your name" className="w-full rounded-md border px-4 py-3 text-sm outline-none focus:ring-2" style={{ borderColor: '#E6E6E6', focusRingColor: palette.beigeDeep }} />
                <input type="email" placeholder="Email address" className="w-full rounded-md border px-4 py-3 text-sm outline-none focus:ring-2" style={{ borderColor: '#E6E6E6' }} />
                <textarea placeholder="Message" rows="4" className="w-full rounded-md border px-4 py-3 text-sm outline-none focus:ring-2" style={{ borderColor: '#E6E6E6' }} />
                <div>
                  <button type="button" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: palette.oliveDeep }}>Send</button>
                </div>
              </form>
            </div>
            <div className="absolute -z-10 -top-8 -right-6 w-40 h-40 rounded-full blur-2xl" style={{ background: `${palette.olive}33` }} />
            <div className="absolute -z-10 -bottom-8 -left-6 w-40 h-40 rounded-full blur-2xl" style={{ background: `${palette.beige}33` }} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10" style={{ borderColor: '#EDEBE7' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: `1px solid ${palette.beigeDeep}`, color: palette.beigeDeep }}>
              M
            </div>
            <span className="font-playfair text-xl tracking-wide">Meraki</span>
          </div>
          <div className="flex items-center gap-4 text-[#6B6F75]">
            <a href="#" className="p-2 rounded-full border" style={{ borderColor: palette.beigeDeep }} aria-label="Instagram">
              <Instagram size={18} color={palette.beigeDeep} />
            </a>
            <a href="#" className="p-2 rounded-full border" style={{ borderColor: palette.beigeDeep }} aria-label="Facebook">
              <Facebook size={18} color={palette.beigeDeep} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Meraki Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

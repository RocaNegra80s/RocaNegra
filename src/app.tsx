import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Disc, Music, FileText, ChevronRight, Instagram, Users, ExternalLink, Image as ImageIcon, Volume2 } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Galería de fotos corregida (Se quita el prefijo 'public/' para que carguen en GitHub Pages)
  const [fotosBanda] = useState<string[]>([
    '1000630748.jpg', 
    '1000633420.jpg',
    'IMG-20200703-WA0016.jpg',
    '1000346669-colorized.jpg',
    '1761107024025.jpg',
    '1762153814650-jpg',
    '1762200712762.jpg',
    '1762201458829.jpg',
    '1764207230276.jpg',
    '1763085426258.jpg',
    'IMG-20200704-WA0028.jpg',
    'IMG-20200704-WA0065.jpg',
    'IMG-20200705-WA0004.jpg',
    'IMG-20200705-WA0004.jpg',
    'IMG-20200705-WA0008.jpg',
    'IMG-20200705-WA0009.jpg',
    'image.png',
    'image-2.png',
    'image-18.png',
  ]);

  // Estado para controlar qué foto se está visualizando en pantalla completa
  const [fotoSeleccionada, setFotoSeleccionada] = useState<string | null>(null);

  // Inyectamos Google Fonts para cargar la tipografía gótica/medieval "Cinzel Decorative"
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Fira+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Lógica para detectar el botón "Atrás" del celular y cerrar la foto sin salir de la página
  useEffect(() => {
    const manejarPopState = (event: PopStateEvent) => {
      if (fotoSeleccionada) {
        setFotoSeleccionada(null);
      }
    };

    window.addEventListener('popstate', manejarPopState);
    return () => {
      window.removeEventListener('popstate', manejarPopState);
    };
  }, [fotoSeleccionada]);

  // Función para abrir la foto agregando un estado "fantasma" al historial
  const abrirFoto = (foto: string) => {
    setFotoSeleccionada(foto);
    window.history.pushState({ fotoAbierta: true }, "");
  };

  // Función para cerrar la foto manualmente y limpiar el historial si es necesario
  const cerrarFoto = () => {
    setFotoSeleccionada(null);
    if (window.history.state?.fotoAbierta) {
      window.history.back();
    }
  };

  const canciones = [
    {
      titulo: "Scanner",
      spotifyEmbed: "https://open.spotify.com/embed/track/2GuEZY1kRAXnbwnA0HVkKD", 
      spotifyUrl: "https://open.spotify.com/intl-es/track/2GuEZY1kRAXnbwnA0HVkKD", 
      youtubeUrl: "https://youtu.be/G9nszebM864?si=519eomkLnuFB9eBZ", 
      letra: `Sueño enjaulado al cerebro de aquel
Que una mancha asesina mato
Con su vida ella se alimentó 


Una esperanza en su vientre formo
Y en la izquierda 6 cuerdas que
Amarraban solo una canción 


Para escenarios él se preparó 
Pero para la muerte no
Tal vez fue su peor error


Dios es aquel que deja insastisfacer 
Verdades hechas en piel


Tres cabezas que pensaban Igual
Y que nada pudieron hacer 
Más que el solo mensaje acojer


Basta decir que es una historia mas
El show debe continuar 


Sólo canciones quedaron aquí
El epitafio en mármol quedó 
Pero no es la herencia mayor 


En el silencio un grito se ahogó 
Pero el eco no se frustró
En el tiempo hostil se forjo


Dios es aquel que deja insastisfacer 
Verdades hechas en piel.`
    },
    {
      titulo: "RocaNegra",
      spotifyEmbed: "https://open.spotify.com/embed/track/4UCQwcjqJN02rQ4sR4KDCI", 
      spotifyUrl: "https://open.spotify.com/intl-es/track/4UCQwcjqJN02rQ4sR4KDCI",
      youtubeUrl: "https://youtu.be/C1nrl-5MekA?si=geLwqT0yEP_Nt2pd",
      letra: `Como fuego del suelo emergió 
Al salir la tierra resquebro
Nació fuerte para combatir
Las penumbras tristes del sufrir


Es la fuerza y el temple también
Es la fuerza y el temple también 


Como hierba mala por doquier
Se dibuja en almas de papel
En las tumbas frías encontró
Polvo seco la generación 


Va más lejos que el viento y la ley
Va más lejos que el viento y la ley


Roca negra vivirá
Roca negra más alla


Aunque muras ella existirá 
En las cosas que te cubrirán
Para hacer de ti pequeña voz
Que verán todos con gran dolor


Fue, será y es ahora también 
Fue, será y es ahora también 


Roca negra vivirá
Roca negra más alla.`
    },
    {
      titulo: "Tinieblas",
      spotifyEmbed: "https://open.spotify.com/embed/track/4JQ3aO7Mg3aB1SEjXlsAsM",
      spotifyUrl: "https://open.spotify.com/intl-es/track/4JQ3aO7Mg3aB1SEjXlsAsM",
      youtubeUrl: "https://youtu.be/g9ncWRr0gmA?si=Z8Mm7wmxEOApe89M",
      letra: `Al ver todo lo que he visto
La belleza de un rosal
Analizó yo el destino
Hasta donde he de llegar 


Allá afuera vuela balas 
Y las bombas de Napalm
Van cortandonos las alas
Cercenando humanidad


Nube negra tristeza 
Fría noche de mar 
Nube negra tristeza 
Fría noche de mar 


Yo recuerdo que te amo
Que en mi mente ti estás
Construyendo un tiempo bueno
Que nos da algo en que pensar


Nube negra tristeza 
Fría noche de mar 
Nube negra tristeza 
Fría noche de 


(Solo)


Nube negra tristeza 
Fría noche de 
Nube negra tristeza 
Fría noche de mar 


Toda esta habladuría
No sé si de algo servirá
Para ver si la alegría
Por fin luego llegará


Para ver si la alegría 
Por fin luego llegará 
.`
    }
  ];

  // Lista de audios (Se quita el prefijo 'public/' para usar rutas relativas correctas)
  const audiosEstudio = [
    { titulo: "Estudio 1", archivo: "audios/roca negraTrack 5.wav", duracion: "4:25" },
    { titulo: "Estudio 2", archivo: "audios/roca negraTrack 6.wav", duracion: "5:25" },
    { titulo: "Estudio 3", archivo: "audios/roca negraTrack 2.wav", duracion: "4:45" }
  ];

  // Función para extraer el ID de YouTube automáticamente
  const obtenerEmbedUrl = (url: string) => {
    try {
      let videoId = "";
      if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      } else if (url.includes("v=")) {
        videoId = url.split("v=")[1].split("&")[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      return ""; 
    }
  };

  // Integrantes de la banda (Se quita el prefijo 'public/')
  const integrantes = [
    { nombre: "Pato", instrumento: "Voz / Guitarra / Líder", img: "public/Pato.JPG" },
    { nombre: "Pancho", instrumento: "Guitarra Solista", img: "public/Pancho.JPG" },
    { nombre: "Danny", instrumento: "Bajo y Coros", img: "public/Danny.JPG" },
    { nombre: "Jimmy", instrumento: "Batería / Percusión", img: "public/Jimmy.JPG" }
  ];

  // Webs amigas
  const websAmigas = [
    { nombre: "Vilu Metal", rol: "Metal Chileno", url: "https://instagram.com/vilumetalchile" },
    { nombre: "Repudio", rol: "Punk", url: "https://instagram.com/repudiobanda" },
    { nombre: "Eternal Metal", rol: "Metal Online", url: "https://instagram.com/eternalmetal" }
  ];

return (
    <div 
      className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-900 selection:text-white"
      style={{ 
        fontFamily: "'Fira Sans', sans-serif",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('1000633420.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Barra de Navegación */}
      <nav className="fixed top-0 left-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-red-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="1000630748.jpg" alt="RocaNegra Logo" className="h-10 w-10 rounded-full border border-red-800 object-cover" />
              <span className="text-xl font-bold tracking-widest text-red-600 font-gothic" style={{ fontFamily: "'Cinzel Decorative', serif" }}>ROCA NEGRA</span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-semibold">
              <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#musica" className="hover:text-red-500 transition-colors">Música</a>
              <a href="#audios" className="hover:text-red-500 transition-colors">Estudio</a>
              <a href="#letras" className="hover:text-red-500 transition-colors">Letras</a>
              <a href="#videos" className="hover:text-red-500 transition-colors">Videos</a>
              <a href="#galeria" className="hover:text-red-500 transition-colors">Fotos</a>
              <a href="#banda" className="hover:text-red-500 transition-colors">La Banda</a>
            </div>

            {/* Botón Móvil */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-400 hover:text-white focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-red-900/40 px-2 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Home</a>
            <a href="#musica" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Música</a>
            <a href="#audios" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Estudio</a>
            <a href="#letras" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Letras</a>
            <a href="#videos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Videos</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">Fotos</a>
            <a href="#banda" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500 transition-all uppercase text-sm font-semibold tracking-wider">La Banda</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="relative group mb-8">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-red-800 to-black rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img src="1000630748.jpg" alt="RocaNegra Logo Circular" className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-neutral-950 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" />
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>ROCA NEGRA</h1>
        <p className="text-neutral-400 text-sm md:text-lg tracking-widest max-w-lg uppercase">Heavy Metal - Santiago, Chile</p>
      </section>

      {/* Música Section */}
      <section id="musica" className="py-20 px-4 bg-neutral-950/80 border-t border-red-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <Disc className="h-8 w-8 text-red-600" /> REPRODUCTORES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canciones.map((cancion, idx) => (
              <div key={idx} className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800/80 hover:border-red-900/50 transition-all duration-300 flex flex-col justify-between h-96">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-500 tracking-wide" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{cancion.titulo}</h3>
                  <div className="w-full h-40 bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center">
                    <iframe 
                      src={cancion.spotifyEmbed} 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <a href={cancion.spotifyUrl} target="_blank" rel="noreferrer" className="w-full bg-green-700/10 hover:bg-green-700/20 text-green-400 text-xs font-semibold py-2 px-4 rounded border border-green-800/40 flex items-center justify-center gap-2 transition-all">
                    Escuchar en Spotify
                  </a>
                  <a href={cancion.youtubeUrl} target="_blank" rel="noreferrer" className="w-full bg-red-950/20 hover:bg-red-900/30 text-red-400 text-xs font-semibold py-2 px-4 rounded border border-red-900/40 flex items-center justify-center gap-2 transition-all">
                    Ver Video en YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grabaciones de Estudio */}
      <section id="audios" className="py-20 px-4 bg-neutral-900/40 border-t border-red-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <Volume2 className="h-8 w-8 text-red-600" /> GRABACIONES DE ESTUDIO
          </h2>
          <div className="space-y-4">
            {audiosEstudio.map((audio, idx) => (
              <div key={idx} className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-500">{audio.titulo}</h3>
                  <span className="text-xs text-neutral-500">Demo • {audio.duracion}</span>
                </div>
                <audio controls className="w-full md:w-2/3 accent-red-600 h-10">
                  <source src={audio.archivo} type="audio/wav" />
                  Tu navegador no soporta el reproductor de audio.
                </audio>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letras Section */}
      <section id="letras" className="py-20 px-4 bg-neutral-950/80 border-t border-red-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <FileText className="h-8 w-8 text-red-600" /> LETRAS DE CANCIONES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canciones.map((cancion, idx) => (
              <div key={idx} className="bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800/60 max-h-[500px] overflow-y-auto">
                <h3 className="text-xl font-bold mb-4 text-red-500 sticky top-0 bg-neutral-950/90 py-2 border-b border-neutral-800" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{cancion.titulo}</h3>
                <pre className="text-xs text-neutral-400 whitespace-pre-wrap leading-relaxed font-sans" style={{ fontFamily: "'Fira Sans', sans-serif" }}>
                  {cancion.letra}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 bg-neutral-900/40 border-t border-red-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <Youtube className="h-8 w-8 text-red-600" /> VIDEOS OFICIALES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canciones.map((cancion, idx) => (
              <div key={idx} className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={obtenerEmbedUrl(cancion.youtubeUrl)}
                    title={cancion.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-red-500 uppercase text-sm tracking-wider" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{cancion.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 px-4 bg-neutral-950/80 border-t border-red-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <ImageIcon className="h-8 w-8 text-red-600" /> GALERÍA DE FOTOS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fotosBanda.map((foto, idx) => (
              <div 
                key={idx} 
                onClick={() => abrirFoto(foto)}
                className="group relative aspect-square bg-neutral-900 rounded-xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-red-900 transition-all duration-300"
              >
                <img 
                  src={foto} 
                  alt={`RocaNegra Foto ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs tracking-widest uppercase">Ver Imagen</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Pantalla Completa */}
        {fotoSeleccionada && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button onClick={cerrarFoto} className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-900/80 p-3 rounded-full border border-neutral-800">
              <X className="h-6 w-6" />
            </button>
            <img 
              src={fotoSeleccionada} 
              alt="Foto Seleccionada" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-neutral-800" 
            />
          </div>
        )}
      </section>

      {/* Integrantes Section */}
      <section id="banda" className="py-20 px-4 bg-neutral-900/40 border-t border-red-950/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-red-600 flex items-center justify-center gap-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            <Users className="h-8 w-8 text-red-600" /> INTEGRANTES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {integrantes.map((miembro, idx) => (
              <div key={idx} className="bg-neutral-950/80 p-6 rounded-2xl border border-neutral-800 text-center hover:border-red-900/40 transition-all">
                <img src={miembro.img} alt={miembro.nombre} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-900" />
                <h3 className="text-xl font-bold text-red-500" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{miembro.nombre}</h3>
                <p className="text-xs text-neutral-500 uppercase mt-1 tracking-wider">{miembro.instrumento}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webs Amigas */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>WEBS AMIGAS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {websAmigas.map((web, idx) => (
              <a 
                key={idx} 
                href={web.url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 hover:border-red-900/40 transition-all flex flex-col items-center justify-center hover:scale-105"
              >
                <span className="text-red-500 font-bold tracking-wider text-sm" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{web.nombre}</span>
                <span className="text-xs text-neutral-500 mt-1">{web.rol}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-4 text-center">
        <p className="text-neutral-500 text-xs tracking-wider mb-4 uppercase">© 2026 ROCANEGRA. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-neutral-400">
          <a href="https://instagram.com" className="hover:text-red-500 transition-colors"><Instagram className="h-5 w-5" /></a>
          <a href="https://youtube.com" className="hover:text-red-500 transition-colors"><Youtube className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
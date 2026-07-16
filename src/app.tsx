import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Disc, Music, FileText, ChevronRight, Instagram, Users, ExternalLink, Image as ImageIcon, Volume2 } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Galería de fotos fija de la banda (Se mantiene idéntica)
  const [fotosBanda] = useState<string[]>([
    'public/1000630748.jpg', 
    'public/1000633420.jpg',
    'public/IMG-20200703-WA0016.jpg',
    'public/1000346669-colorized.jpg',
    'public/1761107024025.jpg',
    'public/1762153814650-jpg',
    'public/1762200712762.jpg',
    'public/1762201458829.jpg',
    'public/1764207230276.jpg',
    'public/1763085426258.jpg',
    'public/IMG-20200704-WA0028.jpg',
    'public/IMG-20200704-WA0065.jpg',
    'public/IMG-20200705-WA0004.jpg',
    'public/IMG-20200705-WA0008.jpg',
    'public/IMG-20200705-WA0009.jpg',
    'public/image.png',
    'public/image-2.png',
    'public/image-18.png',
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
      // Si el usuario presiona "Atrás" y hay una foto abierta, la cerramos
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

  // Lista de archivos de audio locales en tu carpeta public/
  const audiosEstudio = [
    { titulo: "Estudio 1", archivo: "/audios/roca negraTrack 5.wav", duracion: "4:25" },
    { titulo: "Estudio 2", archivo: "/audios/roca negraTrack 6.wav", duracion: "5:25" },
    { titulo: "Estudio 3", archivo: "/audios/roca negraTrack 2.wav", duracion: "4:45" }
  ];

  // Función para extraer el ID de YouTube automáticamente e inyectarlo en el iframe reproducible
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

  // Integrantes de la banda
  const integrantes = [
    { nombre: "Pato", instrumento: "Voz / Guitarra / Líder", img: "public/Pato.JPG" },
    { nombre: "Pancho", instrumento: "Guitarra Solista", img: "public/Pancho.JPG" },
    { nombre: "Danny", instrumento: "Bajo y Coros", img: "public/Danny.JPG" },
    { nombre: "Jimmy", instrumento: "Batería / Percusión", img: "public/Jimmy.JPG" }
  ];

  // Webs amigas / Redes amigas
  const websAmigas = [
    { nombre: "Vilu Metal", rol: "Metal Chileno", url: "https://instagram.com/vilumetalchile" },
    { nombre: "Repudio", rol: "Punk", url: "https://instagram.com/repudiobanda" },
    { nombre: "Eternal Metal", rol: "Metal Online", url: "https://instagram.com/eternalmetal" }
  ];

  return (
    <div 
      className="min-h-screen bg-[url('/Moonlit Gothic Manor in Whispering Fog - ChatbotsPlace.JFIF')] bg-cover bg-fixed bg-center text-neutral-100 font-sans selection:bg-red-900 selection:text-white"
      style={{ fontFamily: "'Fira Sans', sans-serif" }}
    >
      {/* Capa de oscuridad sobre el fondo general */}
      <div className="min-h-screen bg-black/85">

        {/* Barra de Navegación */}
        <nav className="fixed top-0 left-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-red-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <img src="/1000630748.jpg" alt="RocaNegra Logo" className="h-10 w-10 rounded-full border border-red-800 object-cover" />
                <span className="text-xl font-bold tracking-widest text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>ROCA NEGRA</span>
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

              {/* Botón de Menú Móvil */}
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
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Home</a>
              <a href="#musica" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Música</a>
              <a href="#audios" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Estudio</a>
              <a href="#letras" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Letras</a>
              <a href="#videos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Videos</a>
              <a href="#galeria" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">Fotos</a>
              <a href="#banda" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-red-500">La Banda</a>
            </div>
          )}
        </nav>

        {/* Sección Hero */}
        <header id="home" className="pt-24 min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Central Redondo */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-800 to-black rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/1000630748.jpg" 
                alt="RocaNegra Logo Circular" 
                className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-neutral-900 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            {/* Título en tipografía gótica */}
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-widest text-neutral-100 mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              ROCA NEGRA
            </h1>
            <p className="text-red-600 font-semibold tracking-widest text-base md:text-lg mb-8 uppercase">
              Metal Alternativo / Heavy Rock de la Tierra
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-5 mb-8">
              <a href="https://www.instagram.com/rocanegra80s" target="_blank" rel="noreferrer" className="bg-neutral-900/80 hover:bg-red-800 p-3 rounded-full text-neutral-300 hover:text-white transition-all hover:scale-110 border border-neutral-800">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCXHKS9syNZv2dVZ7f5DuQLw" target="_blank" rel="noreferrer" className="bg-neutral-900/80 hover:bg-red-800 p-3 rounded-full text-neutral-300 hover:text-white transition-all hover:scale-110 border border-neutral-800">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@rocanegra80s" target="_blank" rel="noreferrer" className="bg-neutral-900/80 hover:bg-red-800 p-3 rounded-full text-neutral-300 hover:text-white transition-all hover:scale-110 border border-neutral-800">
                <span className="font-bold text-sm tracking-tighter">TikTok</span>
              </a>
            </div>
          </div>
        </header>

        {/* Sección Música (Spotify) */}
        <section id="musica" className="py-24 bg-neutral-950/90 px-4 border-t border-red-950/20 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              REPRODUCTORES
            </h2>
            <p className="text-center text-neutral-400 mb-16 max-w-lg mx-auto text-sm tracking-wider uppercase">Reproduce nuestros temas en la web o accede a Spotify</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {canciones.map((cancion, idx) => (
                <div key={idx} className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-red-900/60 transition-all flex flex-col justify-between shadow-xl backdrop-blur-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-4 justify-center">
                      <Music className="h-5 w-5 text-red-500" />
                      <h3 className="text-xl font-bold text-neutral-200 tracking-wider uppercase">{cancion.titulo}</h3>
                    </div>
                    {/* Reproductor Spotify Incrustado Oficial */}
                    <div className="rounded-lg overflow-hidden mb-6 bg-black/50 p-1 border border-neutral-800">
                      <iframe
                        src={cancion.spotifyEmbed}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-md"
                      ></iframe>
                    </div>
                  </div>
                  {/* Botonera */}
                  <div className="flex flex-col gap-2">
                    <a 
                      href={cancion.spotifyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full bg-green-700/10 hover:bg-green-700/20 text-green-400 text-xs font-semibold py-2 px-4 rounded border border-green-800/40 flex items-center justify-center gap-2 transition-all"
                    >
                      <Disc className="h-4 w-4" /> Escuchar en Spotify <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href={cancion.youtubeUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full bg-red-950/20 hover:bg-red-900/30 text-red-400 text-xs font-semibold py-2 px-4 rounded border border-red-900/40 flex items-center justify-center gap-2 transition-all"
                    >
                      <Youtube className="h-4 w-4" /> Ver Video en YouTube <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Especial: Audios directos */}
        <section id="audios" className="py-24 bg-neutral-900/10 px-4 border-t border-red-950/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              GRABACIONES DE ESTUDIO
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-lg mx-auto text-sm tracking-wider uppercase">Demos y grabaciones de audio directo</p>
            
            <div className="space-y-4">
              {audiosEstudio.map((audio, idx) => (
                <div key={idx} className="bg-neutral-950/80 p-5 rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-950/40 p-3 rounded-lg border border-red-900/30">
                      <Volume2 className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-neutral-200 tracking-wide text-lg">{audio.titulo}</h4>
                      <span className="text-xs text-neutral-500 uppercase font-mono">Archivo de Audio • {audio.duracion}</span>
                    </div>
                  </div>
                  
                  {/* Reproductor de audio HTML5 directo */}
                  <div className="w-full sm:w-auto">
                    <audio controls className="w-full sm:w-72 accent-red-600">
                      <source src={audio.archivo} type="audio/mpeg" />
                      Tu navegador no soporta el formato de audio.
                    </audio>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Letras */}
        <section id="letras" className="py-24 bg-neutral-900/30 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              LETRAS
            </h2>
            <p className="text-center text-neutral-400 mb-16 max-w-lg mx-auto text-sm tracking-wider uppercase">Poesía oscura y riffs de metal</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {canciones.map((cancion, idx) => (
                <div key={idx} className="bg-neutral-950/80 p-8 rounded-2xl border border-neutral-900 shadow-lg text-center backdrop-blur-md">
                  <h3 className="text-2xl font-bold mb-6 text-red-500 tracking-wider uppercase pb-3 border-b border-red-950/30" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    {cancion.titulo}
                  </h3>
                  <p 
                    className="text-base text-neutral-300 tracking-wide leading-relaxed whitespace-pre-line italic font-light"
                    style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '0.9rem' }}
                  >
                    {cancion.letra}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Videos de YouTube */}
        <section id="videos" className="py-24 bg-neutral-950/90 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>VIDEOS OFICIALES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {canciones.map((cancion, idx) => {
                const embedUrl = obtenerEmbedUrl(cancion.youtubeUrl);
                return (
                  <div key={idx} className="bg-neutral-900/40 p-4 rounded-2xl border border-neutral-800 shadow-xl">
                    <h3 className="text-lg font-bold mb-4 text-neutral-300 text-center uppercase" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{cancion.titulo}</h3>
                    
                    {/* Contenedor responsivo */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800">
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={cancion.titulo}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="flex items-center justify-center h-full bg-neutral-950 text-neutral-500 text-xs">
                          Video no disponible
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección de Fotos de la Banda con Zoom e integración de botón atrás */}
        <section id="galeria" className="py-24 bg-neutral-950/40 px-4 border-t border-b border-red-950/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              FOTOS DE LA BANDA
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-lg mx-auto text-sm tracking-wider uppercase">En vivo, backstage y sesiones (Haz clic para agrandar)</p>

            {/* Grid de Fotos de la Banda */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {fotosBanda.map((foto, idx) => (
                <div 
                  key={idx} 
                  onClick={() => abrirFoto(foto)}
                  className="relative group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 aspect-video shadow-xl cursor-pointer"
                >
                  <img 
                    src={foto} 
                    alt={`Foto de la Banda ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs tracking-wider text-red-500 font-bold uppercase" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Ver en pantalla completa</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox / Modal para visualizar fotos ampliadas */}
        {fotoSeleccionada && (
          <div 
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-all"
            onClick={cerrarFoto}
          >
            {/* Botón de cerrar manual */}
            <button 
              onClick={(e) => { e.stopPropagation(); cerrarFoto(); }}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-950/70 p-3 rounded-full border border-neutral-800/80 transition-colors z-[10000]"
            >
              <X className="h-7 w-7" />
            </button>
            <div 
              className="max-w-4xl max-h-[85vh] flex items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={fotoSeleccionada} 
                alt="Foto ampliada" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-neutral-800 shadow-2xl" 
              />
            </div>
          </div>
        )}

        {/* Sección de la Banda con Integrantes */}
        <section id="banda" className="py-24 bg-neutral-900/30 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-red-600" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              LA BANDA
            </h2>
            <p className="text-center text-neutral-400 mb-16 max-w-lg mx-auto text-sm tracking-wider uppercase">Los creadores de la tormenta</p>
            
            {/* Grid de integrantes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {integrantes.map((miembro, idx) => (
                <div key={idx} className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-900 hover:border-red-800/50 transition-all text-center group">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-red-600 transition-colors mb-4">
                    <img src={miembro.img} alt={miembro.nombre} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-350" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-200" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{miembro.nombre}</h4>
                  <p className="text-xs text-red-500 font-semibold uppercase tracking-wider mt-1">{miembro.instrumento}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-950/60 p-8 rounded-2xl border border-neutral-900 max-w-3xl mx-auto text-center backdrop-blur-sm">
              <p className="text-neutral-400 text-lg leading-relaxed italic">
                "RocaNegra es pura fuerza y sonido crudo. Una propuesta nacida de las venas del metal alternativo para estremecer los escenarios con riffs pesados y letras de profunda introspección espiritual."
              </p>
            </div>
          </div>
        </section>

        {/* Sección Especial: Redes & Webs Amigas */}
        <section className="py-20 bg-neutral-950/80 px-4 border-t border-red-950/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 text-neutral-300 tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>WEBS AMIGAS & ALIADOS</h3>
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
    </div>
  );
}

export default App;
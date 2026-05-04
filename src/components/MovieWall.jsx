import React from 'react';
import { motion } from 'framer-motion';

const movies = [
  { title: "RRR", poster: "https://filmifiles.com/wp-content/uploads/2022/03/img_0603.jpg" },
  { title: "Pushpa: The Rise", poster: "https://img.ap7am.com/froala-uploads/20241017fr6710ac0068685.jpg" },
  { title: "Devara", poster: "https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { title: "Game Changer", poster: "https://image.tmdb.org/t/p/original/gDStKH2GKyk5uIX46FAuPddTotZ.jpg" },
  { title: "Leo", poster: "https://i.pinimg.com/originals/46/37/db/4637dbeccdf457d9086f4e19e3737863.jpg" },
  { title: "Adipurush", poster: "https://www.cinejosh.com/newsimg/newsmainimg/stay-tuned-for-adipurush-review_b_1606231200.jpg" },
  { title: "Sita Ramam", poster: "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg" },
  { title: "Thandel", poster: "https://andhrawatch.com/wp-content/uploads/2024/09/thandel.jpg" },
  { title: "Kantara", poster: "https://panmovies.com/wp-content/uploads/al_opt_content/IMAGE/panmovies.com/wp-content/uploads/2025/09/Kantara-2-Movie-Review-2025-Star-Cast-Climax-Story-Rishab-Shetty-Kantara-2-Movie-Review-1024x576.png" },
  { title: "Kanguva", poster: "https://juksun.com/wp-content/uploads/2023/05/Kanguva-Movie-Poster-4.jpg" },
  { title: "Kubera", poster: "https://images.filmibeat.com/ph-big/2024/11/kubera-release-date-cast-crew-plot-more-about-dhanushs-upcoming-gritty-thriller1731736849_2.jpg" }
];

const MovieWall = () => {
  return (
    <section className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-white">Movies I Worked On</h2>
        <p className="text-primary mt-2 uppercase tracking-widest text-sm">Featured Filmography</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="group relative aspect-[2/3] rounded-xl overflow-hidden glass-dark border border-white/10 cursor-pointer flex items-center justify-center text-center p-0 shadow-xl"
          >
            {/* Poster Image */}
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:brightness-50 transition-all duration-700 ease-out" 
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/60 to-transparent">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                {movie.title}
              </h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider text-glow translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Role: Roto Artist
              </p>
              <p className="text-silver text-xs mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-semibold">
                @ Phantom FX
              </p>
            </div>
            
            {/* Pop Border effect */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/80 rounded-xl transition-all duration-300 neon-border opacity-0 group-hover:opacity-100 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MovieWall;

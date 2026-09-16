"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { DiscordMark, TeslaMark } from "@/components/icons";

export default function SelectedWork() {
  const [tesla, discord, netflix] = projects;
  const netflixVideoRef = useRef<HTMLVideoElement>(null);

  const playNetflixPreview = () => {
    netflixVideoRef.current?.play();
  };

  const resetNetflixPreview = () => {
    const video = netflixVideoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal className="mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-2">
            Selected Work
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* 01 — Tesla: image nudges down, caption fades up from the top */}
          <Reveal delay={0.05}>
            <Link
              href="/work/tesla"
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-4">
                <div className="relative w-[78%] aspect-[3/2] overflow-hidden rounded-xl border border-white/15 shadow-xl">
                  <Image
                    src={tesla.heroImage.src}
                    alt={tesla.heroImage.alt}
                    fill
                    sizes="(min-width: 640px) 40vw, 78vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 top-9 flex flex-col items-center gap-2 opacity-0 -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/80">
                  <TeslaMark className="h-3 w-3 text-white" />
                </span>
                <span className="font-display text-sm font-extrabold text-white">
                  {site.name}
                </span>
                <span className="font-mono text-[11px] tracking-wide text-white/70">
                  Tesla &middot; Homepage Redesign
                </span>
              </div>

              <span className="absolute inset-x-4 bottom-4 font-mono text-[11px] text-white opacity-0 translate-y-1.5 transition-all delay-75 duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {tesla.index} &middot; {tesla.category}
              </span>
            </Link>
          </Reveal>

          {/* 02 — Discord: phone shifts aside, caption slides in from the left */}
          <Reveal delay={0.1}>
            <Link
              href="/work/discord"
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-x-[42%]">
                <div className="relative h-[84%] aspect-[458/930] overflow-hidden rounded-[1.6rem] border-2 border-white/15 shadow-xl">
                  <Image
                    src="/images/discord/forum-notifications-screen-dark-mode.png"
                    alt="Discord forum notification settings screen, dark mode"
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 pl-6 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/80">
                  <DiscordMark className="h-[18px] w-[18px]" />
                </span>
                <span className="font-display text-sm font-extrabold text-white">
                  {site.name}
                </span>
                <span className="font-mono text-[11px] tracking-wide text-white/70">
                  Discord &middot; Notifications &amp; Search
                </span>
              </div>

              <span className="absolute inset-x-4 bottom-4 font-mono text-[11px] text-white opacity-0 translate-y-1.5 transition-all delay-75 duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {discord.index} &middot; {discord.category}
              </span>
            </Link>
          </Reveal>

          {/* 03 — Netflix: hero card zooms in slightly, caption fades up from the top */}
          <Reveal delay={0.15}>
            <Link
              href="/work/netflix"
              onMouseEnter={playNetflixPreview}
              onMouseLeave={resetNetflixPreview}
              onFocus={playNetflixPreview}
              onBlur={resetNetflixPreview}
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                <div className="relative w-[78%] aspect-[16/10] overflow-hidden rounded-xl border border-white/15 shadow-xl">
                  <video
                    ref={netflixVideoRef}
                    src="/videos/netflix/prototype-demo-hover.mp4"
                    poster={netflix.heroImage.src}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 top-9 flex flex-col items-center gap-2 opacity-0 -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/15">
                  <Image
                    src="/images/netflix/logo-icon.jpg"
                    alt="Netflix"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="font-display text-sm font-extrabold text-white">
                  {site.name}
                </span>
                <span className="font-mono text-[11px] tracking-wide text-white/70">
                  Netflix &middot; Homepage Redesign
                </span>
              </div>

              <span className="absolute inset-x-4 bottom-4 font-mono text-[11px] text-white opacity-0 translate-y-1.5 transition-all delay-75 duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {netflix.index} &middot; {netflix.category}
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

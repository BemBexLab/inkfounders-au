export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F3E1] px-6 py-16 text-[#1D3028] sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-36 h-80 w-80 rounded-full border border-[#1D3028]/10 sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-36 h-[26rem] w-[26rem] rounded-full border border-[#1D3028]/10 sm:h-[36rem] sm:w-[36rem]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-16 sm:mb-20">
          <video
            aria-label="Ink Founders"
            role="img"
            width="194"
            height="75"
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-[194px]"
          >
            <source src="/logovideo/inkfounder_logo_animate.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1D3028]/15 bg-white/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#536259] sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#B76E3B]" />
          A new chapter is in the works
        </div>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-7xl md:text-8xl">
          Stories deserve
          <br />
          <span className="font-serif italic text-[#B76E3B]">a beautiful</span>{" "}
          beginning.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-[#536259] sm:mt-9 sm:text-lg sm:leading-8">
          We’re putting the finishing touches on a new home for authors and the
          stories they can’t wait to share. Ink Founders will be back soon.
        </p>

        <div
          aria-hidden="true"
          className="mt-12 flex items-center gap-3 sm:mt-16"
        >
          <span className="h-px w-12 bg-[#B76E3B]/45 sm:w-20" />
          <span className="h-2 w-2 rotate-45 border border-[#B76E3B]" />
          <span className="h-px w-12 bg-[#B76E3B]/45 sm:w-20" />
        </div>

        <p className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-[#536259]/75 sm:mt-14">
          Good things take a little writing
        </p>
      </div>
    </main>
  );
}

import { siteContent } from "@shared/content";

export function AboutMeBlock() {
  const coach = siteContent.coach;
  return (
    <section
      id="about-me"
      className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 py-16 px-6 border-b border-border"
    >
      <div className="max-w-lg mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          About Me
        </h2>

        {/* Image placeholder */}
        <div className="w-full h-48 rounded-md overflow-hidden bg-gray-200 dark:bg-neutral-800">
          <img
            src={siteContent.images.coach.main}
            alt={`${coach.name} portrait`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 text-left">
          <h3 className="text-xl font-semibold">{coach.name}</h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {coach.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
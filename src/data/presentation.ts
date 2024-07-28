type SocialType = {
  label: string;
  url: string;
};

type PresentationType = {
  title: string;
  description: string;
  mail: string;
  social: SocialType[];
};

const presentation: PresentationType = {
  title: "Hi, I'am Slimane",
  description:
    "Full-Stack Developer with expertise in React, Next.js, Django, and TypeScript. Proven ability to deliver robust web solutions, including a car rental platform and a job portal. Skilled in Agile methodologies, problem-solving, and teamwork. Dedicated to continuous learning and delivering high-quality software.",
  mail: "slimane.sedrati@outlook.com",
  social: [
    { label: "Github", url: "https://github.com/Slimanesedrati" },
    { label: "𝕏", url: "https://x.com/Slimanesedrati" },
  ],
};

export default presentation;

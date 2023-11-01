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
    "Enthusiastic software engineering student and front-end developer from Algeria, deeply engaged in the world of NextJS, TypeScript, and IoT. Curious about AI and ML, I'm passionate about creating amazing web experiences and exploring the potential of IoT. Let's collaborate to craft exceptional web and IoT solutions! 🚀💫🌐",
  mail: "Slimanesedrati2000@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/Slimanesedrati" },
    { label: "𝕏", url: "https://x.com/Slimanesedrati" },
  ],
};

export default presentation;

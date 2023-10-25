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
    "Passionate software engineering student and frontend developer from Algeria. Currently working with NextJS and Typescript. Curious about AI and ML. Let's create amazing web experiences together! 🚀💫",
  mail: "Slimanesedrati2000@gmail.com",
  social: [
    { label: "Github", url: "https://github.com/Slimanesedrati" },
    { label: "𝕏", url: "https://x.com/Slimanesedrati" },
  ],
};

export default presentation;

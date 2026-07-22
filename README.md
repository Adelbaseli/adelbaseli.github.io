# adelbaseli.github.io

This is my personal portfolio site, built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**. It's where I keep my work experience, education, skills, and a running list of projects, most of which are papers I've published on privacy-preserving sensing and human-robot interaction, each with a figure pulled from the paper and a short write-up of what it actually does.

Live at: [adelbaseli.github.io](https://adelbaseli.github.io)

## Where this started

I didn't build this from scratch. The base layout, the glassmorphism cards, the dark/light theme toggle, the animation setup, all of that came from [rkeshs/my-portfolio](https://github.com/rkeshs/my-portfolio), a template shared by Rishikesh S. under the MIT License. I kept the original [LICENSE](LICENSE) file as-is, since the MIT license requires that, and everything visual and structural you see here is built on top of that foundation. From there I rewrote the content, added the projects section with clickable detail modals and paper links, swapped in my own color palette, and have been filling it in with my own work since.

## Stack

- **Astro** for the static site
- **React** for the interactive bits (project cards, theme toggle, animations)
- **Tailwind CSS** for styling
- **Framer Motion** for the animations
- **Lucide** for icons

## Running it locally

```bash
git clone https://github.com/Adelbaseli/adelbaseli.github.io.git
cd adelbaseli.github.io
bun install
bun dev
```

Then open `http://localhost:4321`.

To build and preview the production version:

```bash
bun run build
bun run preview
```

## Structure

Almost everything content-related lives in [src/lib/data.ts](src/lib/data.ts): work experience, education, skills, projects, and awards are all plain arrays there, so updating the site is mostly editing that one file. Project images live in `public/projects/`, and the PDFs of the papers themselves are in `public/papers/`.

## License

The original template is MIT-licensed by Rishikesh S. (see [LICENSE](LICENSE)). My own additions, content, and the papers linked from this site are mine.

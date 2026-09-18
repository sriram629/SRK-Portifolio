# SRK Portfolio

An original React + TypeScript portfolio with a procedural Three.js sculpture and GSAP scroll choreography.

## Local development

```sh
npm ci
npm run dev
```

Production: `npm run build`, then `npm run preview`. Validation: `npm run lint`.

## Design and implementation

- A metallic connected-core sculpture rotates gently and separates in response to native page scroll. Geometry is generated in code; no model downloads are needed.
- Project panels enter with perspective and stack on desktop. Mobile uses a normal document flow.
- Motion respects the operating system's reduced-motion preference. The footer motion control switches to a static CSS sculpture and removes sticky stacking.
- WebGL failure leaves the CSS illustration visible. Off-screen and hidden-tab rendering stops; pixel density is capped at 1.5. Three.js loads in a separate lazy chunk.
- Native links, keyboard-accessible project details, visible focus states, a skip link, and a responsive mobile menu remain available.
- The project interface illustrations are original HTML/CSS studies, explicitly labeled as sample content. They are not screenshots of the deployed applications.

## Editing

- `src/App.tsx`: sections, project descriptions, and original project illustrations.
- `src/constants/data.ts`: contact, social, résumé, and repository URLs.
- `src/components/Scene.tsx`: procedural scene and resource lifecycle.
- `src/App.css`: layout, visuals, responsive rules.
- `docs/content-audit.md`: source evidence and unverified claims.

The original résumé PDF is retained. Its contents have not been rewritten as part of the website redesign.

## References studied

- https://david-hckh.com/ — continuity between scenes, camera-led narrative.
- https://bruno-simon.com/ — a coherent 3D visual identity and explicit quality controls.
- https://www.14islands.com/ — editorial scale, restraint, and work-first presentation.
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — scroll-linked animation lifecycle.

The design and procedural geometry were created for this portfolio; reference-site assets and code were not copied.

## Hosting

The project remains a Vite static build. Vercel build command: `npm run build`; output directory: `dist`. Development changes are local on `dev`; they have not been pushed or deployed.

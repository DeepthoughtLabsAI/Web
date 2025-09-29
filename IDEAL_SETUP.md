# Ideal Clean Setup: Deepthought Labs AI Web Project

This document outlines the step-by-step process to set up a clean and robust web engineering environment for the Deepthought Labs AI Web project, incorporating recommendations from the strategic audit and ensuring compatibility for animations and testing.

## 1. Prerequisites

Ensure you have the following installed on your system:

*   **Node.js:** Latest LTS version (e.g., 20.x). You can download it from [nodejs.org](https://nodejs.org/).
*   **pnpm:** A fast, disk space efficient package manager.
    *   Install via npm: `npm install -g pnpm`
    *   Verify installation: `pnpm -v`
*   **Git:** For version control.

## 2. Project Initialization

Start by creating a new Next.js project.

1.  **Create a new Next.js application:**
    ```bash
    pnpm create next-app deepthought-labs-ai-web --typescript --eslint --tailwind --app --src-dir --use-pnpm
    ```
    *   `--typescript`: Initialize with TypeScript.
    *   `--eslint`: Configure ESLint.
    *   `--tailwind`: Configure Tailwind CSS.
    *   `--app`: Use the App Router.
    *   `--src-dir`: Create a `src` directory.
    *   `--use-pnpm`: Use pnpm as the package manager.

2.  **Navigate into your new project directory:**
    ```bash
    cd deepthought-labs-ai-web
    ```

## 3. Core Dependencies (Animations)

Install the animation libraries recommended in the strategic audit.

1.  **Install GSAP and Framer Motion:**
    ```bash
    pnpm add gsap framer-motion
    ```
2.  **Install Lucide React (for icons):**
    ```bash
    pnpm add lucide-react
    ```

## 4. Storybook Setup (for Component Isolation & VRT)

Set up Storybook for isolated component development and prepare for Visual Regression Testing (VRT).

1.  **Initialize Storybook:**
    ```bash
    npx storybook init
    ```
    *   This command will detect your Next.js project and install necessary Storybook packages, including `@storybook/nextjs-vite`. It will also create the `.storybook` directory and add default scripts to `package.json`.

2.  **Configure PostCSS for Storybook/Vite Compatibility:**
    *   Open `postcss.config.mjs`.
    *   Modify it to use the object-based format for plugins:
        ```javascript
        // postcss.config.mjs
        const config = {
          plugins: {
            "@tailwindcss/postcss": {},
          },
        };
        export default config;
        ```

3.  **Configure `.storybook/main.ts`:**
    *   Open `.storybook/main.ts`.
    *   Ensure the `framework` entry is correctly set and add `mergeConfig` import and `viteFinal` for `framer-motion` optimization (as discussed during debugging).
    *   Add essential Storybook addons.

    ```typescript
    // .storybook/main.ts
    import type { StorybookConfig } from "@storybook/nextjs-vite";
    import { mergeConfig } from 'vite';

    const config: StorybookConfig = {
      "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
      ],
      "addons": [
        "@chromatic-com/storybook", // Will be installed later
        "@storybook/addon-docs",
        "@storybook/addon-onboarding",
        "@storybook/addon-a11y",
        "@storybook/addon-vitest",
        "@storybook/nextjs-vite" // Explicitly add for resolution
      ],
      "framework": {
        "name": "@storybook/nextjs-vite",
        "options": {
          viteFinal: async (config, { configType }) => {
            const newConfig = mergeConfig(config, {
              // Add custom Vite config here if needed
            });

            if (configType === 'PRODUCTION') {
              newConfig.optimizeDeps = newConfig.optimizeDeps || {};
              newConfig.optimizeDeps.include = [
                ...(newConfig.optimizeDeps.include || []),
                'framer-motion', // Ensure framer-motion is optimized
              ];
            }
            return newConfig;
          },
        }
      },
      "staticDirs": [
        "..\\public"
      ]
    };
    export default config;
    ```
    *Note: The `npx storybook init` command should have already added most of these addons. Verify and adjust as needed.*

4.  **Verify Storybook Scripts:**
    *   Check `package.json` for `storybook` and `build-storybook` scripts. They should look something like:
        ```json
        "storybook": "storybook dev -p 6006",
        "build-storybook": "storybook build"
        ```
    *   **Crucially, if you encounter "command not found" errors with `pnpm run storybook` or `pnpm run build-storybook`, you might need to explicitly use `pnpm dlx` or `pnpm exec` in these scripts, e.g.:**
        ```json
        "storybook": "pnpm dlx storybook dev -p 6006",
        "build-storybook": "pnpm dlx storybook build"
        ```
        *This is a workaround for `pnpm`'s executable resolution issues we faced.*

## 5. Chromatic Setup (for Visual Regression Testing)

Integrate Chromatic for automated VRT.

1.  **Install Chromatic:**
    ```bash
    pnpm add -D chromatic
    ```
    *   `npx storybook init` might have already installed `@chromatic-com/storybook`. Ensure `chromatic` itself is installed as a dev dependency.

2.  **Add Chromatic Script to `package.json`:**
    *   Add a script to run Chromatic. Replace `YOUR_CHROMATIC_PROJECT_TOKEN` with your actual token.
        ```json
        "chromatic": "pnpm dlx chromatic --project-token=YOUR_CHROMATIC_PROJECT_TOKEN"
        ```
        *Again, `pnpm dlx` is used here for robustness.*

## 6. Testing Setup

Implement the tiered testing approach recommended in `chat.md`.

1.  **Jest & React Testing Library (Unit/Integration):**
    *   Next.js `create-next-app` usually sets up Jest. Verify `jest.config.ts` and `jest.setup.ts`.
    *   Ensure `@testing-library/react` and `@testing-library/jest-dom` are installed (they should be with `create-next-app`).

2.  **Vitest (Component Testing - integrated with Storybook):
    *   `npx storybook init` should have installed `@storybook/addon-vitest` and configured `vitest.config.ts`.
    *   Verify `vitest.config.ts` and `vitest.shims.d.ts`.

3.  **Playwright (End-to-End):
    *   Install Playwright:
        ```bash
        pnpm add -D playwright @playwright/test
        npx playwright install --with-deps
        ```
    *   Verify `playwright.config.ts`.

## 7. Linting and TypeScript

Ensure code quality and type safety.

1.  **ESLint & TypeScript:
    *   `create-next-app` configures ESLint and TypeScript.
    *   Verify `.eslintrc.json` (or `eslint.config.mjs` for flat config) and `tsconfig.json`.
    *   Ensure `eslint-plugin-storybook` is installed (it should be with Storybook init).

## 8. Verification Steps

After completing the setup, verify everything is working.

1.  **Run Storybook locally:
    ```bash
    pnpm run storybook
    ```
    *   Open your browser to the URL provided (usually `http://localhost:6006`).
    *   Verify that the default Storybook UI loads and any example stories render.

2.  **Run Storybook build:
    ```bash
    pnpm run build-storybook
    ```
    *   This should create a static build of your Storybook in `storybook-static` directory.

3.  **Run Chromatic build:
    ```bash
    pnpm run chromatic
    ```
    *   This should build your Storybook, upload it to Chromatic, and run visual tests. Monitor the output for success or any errors.

4.  **Run Unit Tests:
    ```bash
    pnpm run test
    ```

5.  **Run Next.js development server:
    ```bash
    pnpm run dev
    ```
    *   Open your browser to `http://localhost:3000` (or whatever port Next.js uses).
    *   Verify your Next.js application loads.

---
# WEB dev Challenge 2025 - F Module

Welcome to the **Dev Challenge 2025**! Follow the steps below to set up your repository and deploy your project successfully.

## 🚀 Getting Started

### 1️⃣ Fork the Repository
You need to fork the official repository before making any changes. Follow these steps:

1. Click the **Fork** button in the top-right corner of this repository.
2. Name your repository in the following format:
   ```
   module-f-react-{your-number}
   ```
   Example: `module-f-react-1`
3. Click **Create Fork**.

### 2️⃣ Enable GitHub Actions
GitHub Actions are disabled by default when forking a repository. To enable them:

1. Go to your forked repository.
2. Click on the **Actions** tab.
3. You should see a message saying workflows are disabled.
4. Click **Enable workflows** to activate GitHub Actions.

### 3️⃣ Configure `vite.config.js`
Your `vite.config.js` file must be configured correctly to deploy via GitHub Pages.

1. Open the `vite.config.js` file in your repository.
2. Make sure the `base` field matches your repository name:
   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   
   export default defineConfig({
     plugins: [react()],
     base: "/module-f-react-{your-number}/",  // Replace with your actual repository name
   });
   ```
3. Save and commit the changes.

### 4️⃣ Deploying to GitHub Pages
Once you've committed all necessary changes:

1. Push your changes to your repository.
2. GitHub Actions will automatically build and deploy your project.
3. After deployment, your site will be available at:
   ```
   https://{your-github-username}.github.io/module-f-react-{your-number}/
   ```

## 🎯 Competition Rules
- Do **not** change the repository structure.
- Ensure that your project builds and runs without errors.
- The final deployed version must be accessible via GitHub Pages.

Good luck and happy coding! 🚀

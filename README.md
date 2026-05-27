# 💖 Anniversary Surprise

A cute, interactive, and romantic web application built as a special 1st Anniversary surprise! This website is full of sweet micro-interactions, animations, and hidden easter eggs designed to make your significant other smile.

## ✨ Features

- 🔐 **Custom Authentication**: A personalized login screen that only unlocks if the correct nickname and anniversary date are entered.
- 🌧️ **Falling Hearts Background**: A continuous, CSS-animated background of falling pink hearts that runs seamlessly across all pages.
- 🏃‍♂️ **"Catch Me If You Can" Button**: A playful "Do you love me?" screen where the "No" button runs away from the cursor.
- 💌 **Interactive 3D Envelope**: A CSS-styled, responsive envelope that realistically opens up to reveal a personalized, scrollable anniversary letter.
- 🪁 **Paper Plane Easter Egg**: A paper airplane that randomly glides across the screen after opening the letter. Catch it to unlock a secret page!
- 🎬 **Secret Video Vault**: A hidden page containing an embedded YouTube video with a special message.

## 🛠️ Tech Stack

- **React.js** (Vite)
- **TypeScript**
- **Tailwind CSS** (for rapid and responsive styling)
- **Pure CSS Animations** (for the envelope, falling hearts, and paper plane flight path)

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mrizkiaditya/anniversary-surprise.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🎨 Customization Guide

Want to fork this and make it for your own partner? It's super easy! Just edit the following files:

1. **`src/pages/Login.tsx`**
   Update the `correctNames` array and `correctDate` string to match your partner's nicknames and your anniversary date.
2. **`src/components/EnvelopeLetter.tsx`**
   Replace the paragraphs with your own romantic message inside the letter.
3. **`src/pages/EasterEgg.tsx`**
   Change the `src` attribute of the `<iframe>` to embed your own YouTube video or memory montage.

---

_Built with ❤️ for a special someone._

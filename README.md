✨ Quote Generator – Inspire Your Mind

A clean, responsive, and dynamic web app built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion** that displays inspirational quotes with elegant animations and share/copy features. Users can filter quotes by topic and enjoy a fresh feed updated in real-time.

> 🔗 Live Demo: (https://quotegenerator-git-main-fahadnasir13s-projects.vercel.app/))

---

## 🚀 Features

- ✅ **Hover & Motion Effects:** Each quote card animates smoothly using Framer Motion and Tailwind transitions.
- ✅ **Copy / Share Buttons:** Easily copy or share quotes with `lucide-react` icons.
- ✅ **Random Quote Feed:** Automatically loads quotes from various topics on each visit.
- ✅ **Topic Filtering:** Badge-style filters to select topics like "Life", "Love", "Motivation", etc.
- ✅ **Background Gradients:** Optional gradient themes for visual appeal per topic.
- ✅ **Live Quote Refresh:** (Optional) Auto-refresh quotes every few seconds using Real-Time Clock effect.

---

## 🧠 Tech Stack

| Tech         | Purpose                                      |
|--------------|----------------------------------------------|
| Next.js 15   | React framework for SSR, routing, performance|
| Tailwind CSS | Utility-first styling                        |
| TypeScript   | Static typing and safety                     |
| pnpm         | Fast and efficient package management        |
| Framer Motion| Card hover and animation effects             |
| lucide-react | Beautiful open-source icons                  |
| Vercel       | CI/CD & live deployment                      |

---

## 📁 Folder Structure

```bash
.
├── app/
│   ├── page.tsx         # Main UI logic & rendering
│   └── layout.tsx       # Global layout and metadata
├── components/
│   ├── QuoteCard.tsx    # Reusable animated quote component
│   ├── TopicFilter.tsx  # Badge filters for topics
│   └── Header.tsx       # App title and description
├── lib/
│   └── quotes.ts        # Quotes data source (local or API)
├── public/
│   └── favicon.ico      # Static assets
├── styles/
│   └── globals.css      # Tailwind base styling
├── pnpm-lock.yaml       # Dependency lock file
├── package.json         # Scripts and dependencies
└── README.md            # You are here :)

⚙️ Getting Started Locally
1. Clone the Repo

git clone https://github.com/fahadnasir13/Nexium_Fahad.git
cd Nexium_Fahad/internship/assignment-1

2. Install Dependencies
bash

pnpm install
If you're using npm or yarn, convert accordingly.

3. Run Locally

pnpm dev
Open http://localhost:3000 to see your app in action.

☁️ Deploying to Vercel
Already deployed.

🧪 Customization Tips
✏️ Modify quotes or add an API in lib/quotes.ts.

🎨 Update background gradients by editing card styles.

🕐 Enable RTC updates using setInterval() in the useEffect hook.

🧩 Future Enhancements (Ideas)
🌐 Connect to a real quote API (e.g., ZenQuotes, Quotable).

❤️ Like/save favorite quotes (localStorage or backend).

🧠 Add AI-generated quotes via GPT.

📱 Make it a PWA (Progressive Web App).

🗂 Export quotes to image format for sharing on Instagram/Twitter.

🧑‍💻 Author

Fahad Nasir
GitHub: @fahadnasir13
LinkedIn: linkedin.com/in/fahadnasir15

📄 License
This project is open-source and available under the MIT License.

“The right quote at the right time can change a life. Make it yours.

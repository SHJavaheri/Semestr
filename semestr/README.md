# 🎓 Semestr

**Semestr** is a modern, offline-first productivity dashboard designed for students to take control of their semester. With a sleek, glass-inspired UI and rich features, Semestr centralizes everything a student needs — deadlines, notes, progress tracking, study tools, and more — all in one elegant space.

---
## 😁 Why I Made This

Throughout my university years, staying organized was one of my biggest struggles. Everything I needed was scattered across different platforms, lecture notes buried in a school portal, personal notes in cloud drives, deadlines on a separate calendar, Gmail for course updates, Spotify for focus, and practice exams floating around in yet another folder. I found myself wasting time just piecing together the tools I needed before I could even begin studying.

Now that I’ve graduated, I’m building the tool I wish I had from the start: **Semestr**, a sleek, offline-first productivity dashboard that brings everything into one cohesive, glass-themed space. From tracking deadlines and reviewing notes to organizing projects and staying motivated, Semestr is designed to help students manage their entire degree in one single, elegant interface.

And as a gesture to students and schools alike, **Semestr will always be completely free to use**, no subscriptions, no paywalls, just a tool built by a student, for students.

I'm hoping to finish this project before the next fall semester begins. You can follow my progress on my website below, and feel free to reach out with suggestions, feedback, or collaboration ideas!

🌐 **Website**: [https://shjavaheri.github.io/](https://shjavaheri.github.io/)

---

## ✨ Features (there will be more :D)

- 🟦 **Dashboard Overview** – Glanceable panels for:
  - Weekly progress tracker
  - Upcoming deadlines (manual + Google Calendar toggle)
  - Recently opened notes & resources
  - Study timer, motivational quotes, and Spotify player
- 📝 **Note & File Organization** – Upload, pin, and revisit lecture notes and personal files (coming soon)
- 📅 **Calendar Sync** – Switch between your custom task list and Google Calendar integration
- ⏱️ **Focus Tools** – Built-in timers and reminders for deep work
- 🎧 **Spotify Integration** – Study with your favorite playlists embedded in the dashboard

---

## 🖼️ Preview (NOT READY YET)

> ![dashboard-preview](assets/dashboard-preview.png)  
> *(Dark mode glass UI — panels resize responsively with consistent proportions)*

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Rust](https://www.rust-lang.org/tools/install)
- Tauri CLI:  
  ```bash
  cargo install tauri-cli
  ```

### Setup

```bash
git clone https://github.com/YOUR_USERNAME/semestr.git
cd semestr
npm install
npm run tauri dev
```

---

## 📁 Current Folder Structure

```
semestr/
├── src-tauri/          # Tauri (Rust) backend config
├── public/             # Static assets
├── src/                # React components & pages
│   └── components/     # Custom UI components like ProgressCircle
├── Dashboard.css       # Main styling file
├── App.tsx             # Main UI layout
└── README.md
```
---

## 💡 Roadmap

- [x] Custom progress tracker
- [x] Deadline list with toggle
- [ ] "Where You Left Off" file preview
- [ ] Note-taking module
- [ ] Study timer with alerts
- [ ] Google Calendar integration
- [ ] Spotify player widget
- [ ] More Ideas Soon!!!

---

## 📜 License

MIT License.  
Built with ❤️ for students who needed it.

---

## 🤝 Contributing

Contributions, ideas, and feature suggestions are welcome!  
Please open an issue or fork the repo and submit a PR, or shoot me an email!

**Website**: [https://shjavaheri.github.io/](https://shjavaheri.github.io/)

**Email**: SeyedHamidJavaheri@gmail.com

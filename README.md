# PitchIQ 🏏

### The world's first AI cricket command centre

> Coach any live match worldwide. Make real-time decisions.
> Get an ELO rating. Beat the actual captain.

![PitchIQ War Room](public/og-preview.png)

## What is this?

No cricket app lets you _coach_. Cricbuzz shows scores. ESPNCricinfo shows stats. **PitchIQ puts you in the dugout.**

- 🧠 **Coach Mode** — Pick your XI, call the toss, decide who bowls every over. AI tells you if your call was better than the real captain's.
- ⚡ **ELO Rating** — Chess-style global coaching leaderboard. Every decision affects your rank.
- 🔮 **AI Verdict Engine** — "If Ashwin had bowled instead of Bumrah, here's what would have happened." Real data, real counterfactuals.
- 🌍 **Every match worldwide** — IPL, Tests, BBL, PSL, Women's, U19, Associates. Not just India. Not just men.
- 🔊 **Audio Mode** — AI reads ball-by-ball commentary aloud. For commuters, drivers, visually impaired fans.
- 📊 **CricViz-level analytics** — Wagon wheel, win probability, pressure index, bowler fatigue, pitch deterioration, vulnerability map. Free.

## Live Demo

👉 **[pitchiq.vercel.app](https://pitchiq.vercel.app)** ← coming soon

## Current Status

| Phase           | Features                                        | Status      |
| --------------- | ----------------------------------------------- | ----------- |
| P1 — MVP        | Live score, scorecard, wagon wheel, analytics   | 🔨 Building |
| P2 — Coach Mode | Over decisions, AI verdict, ELO, DRS judge      | ⏳ Planned  |
| P3 — AI Deep    | Alt universe report, NL chat, weekly challenges | ⏳ Planned  |
| P4 — Social     | Watch party, rival coach, prediction streak     | ⏳ Planned  |
| P5 — Launch     | Open source launch, README, community           | ⏳ Planned  |

## Tech Stack

| Layer        | Tech                                        |
| ------------ | ------------------------------------------- |
| Frontend     | Next.js 16 (App Router) + TypeScript        |
| Styling      | Tailwind CSS                                |
| Graphics     | D3.js + SVG (wagon wheel, radar, pitch map) |
| Charts       | Chart.js                                    |
| State        | Zustand                                     |
| Backend      | Node.js + Socket.io                         |
| Database     | Firebase Firestore                          |
| Auth         | Firebase Auth                               |
| AI           | Gemini 2.5 Flash                            |
| Cricket Data | CricketData.org API                         |
| Hosting      | Vercel + Render                             |

## Project Structure

```
pitchiq/
├── app/                    # Next.js App Router pages
│   ├── match/[matchId]/    # Live match screen
│   ├── coach/              # Coach Mode dashboard
│   ├── social/             # Watch party, rival coach
│   ├── profile/            # User profile + ELO
│   └── api/                # Next.js API routes
├── components/
│   ├── match/              # Scorecard, wagon wheel, analytics
│   ├── coach/              # Decision cards, DRS, ELO
│   └── ui/                 # Shared War Room components
├── lib/
│   ├── cricket/service.ts  # API abstraction layer
│   ├── firebase.ts
│   └── gemini.ts
└── server/                 # Socket.io Node.js server
```

## Contributing

This is open source and I'm looking for contributors. Especially:

- **Backend developers** — Node.js, WebSocket, API integration
- **React/Next.js developers** — component building
- **Cricket data enthusiasts** — API knowledge, stats

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get started.

Good first issues are labelled on the Issues tab.

## About

Built by **Gandhrav Bharde** — Mechanical Engineering student at SIT Lonavala (Savitribai Phule Pune University). Previously built [EngineX](https://github.com/gandharvbharde25/EngineX) — an AI engineering tutor.

---

⭐ **Star this repo** to follow the build journey

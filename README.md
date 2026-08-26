# BrickHill V1

First functional prototype of a classic brick-avatar gaming website.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Deploy to Render

1. Upload this project to a GitHub repository.
2. Create a new **Web Service** in Render.
3. Connect the repository.
4. Build command: `npm install`
5. Start command: `npm start`

Render will provide the `PORT` environment variable automatically.

## V1 includes

- Classic block avatar matching the supplied reference proportions
- Custom avatar colors
- Username saved in browser storage
- Profile section
- Game listing API
- Two starter games: Classic Obby and Build & Chill
- Shop and friends placeholders
- Responsive website
- Express server ready for Render

## Next version

- Real registration/login
- PostgreSQL database
- Password hashing and sessions
- Inventory
- Friends
- `.brk` map importer
- Actual browser game client

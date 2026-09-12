# Vantage — Opportunity Discovery Platform

Vantage is a frontend platform where people can discover and apply to internships, scholarships, grants, and fellowships. Built as a submission for [internship name] internship task.

 **Live Site:** [vantage-hub1.netlify.app]
 **GitHub Repo:** [https://github.com/IBK-LTD/Vantage-hub.git]
 **Demo:** []

---

## Features

- **Homepage** — hero section with search, category shortcuts, and featured opportunities
- **Browse/Listing page** — full opportunity list with live search, category filters, and deadline sorting
- **Opportunity Details page** — full opportunity information with a working Apply form and success confirmation
- **Save/Bookmark system** — save opportunities for later using browser local storage, view them on a dedicated Saved page
- **Profile page** — user profile view with saved-opportunities count synced to real data
- **Fully responsive** — adapts from mobile (1 column) to tablet (2 columns) to desktop (3 columns)
- **Zero backend required** — fully static frontend, opportunity data stored in a local JS file

---

## Tech Stack

- HTML5, vanilla JavaScript (no framework)
- Tailwind CSS (via CDN, loaded locally for offline development)
- Browser `localStorage` for saving/bookmarking opportunities
- No backend/database — all opportunity data lives in `js/data.js`

---

## Project Structure

vantage/
├── index.html # Homepage
├── listing.html # Browse/Listing page
├── details.html # Opportunity Details page
├── saved.html # Saved Opportunities page
├── profile.html # Profile page
├── js/
│ ├── data.js # Opportunity data (8 sample opportunities)
│ ├── storage.js # Save/bookmark logic (localStorage)
│ ├── card.js # Reusable opportunity card component
│ ├── home.js # Homepage logic (featured cards + search redirect)
│ ├── listing.js # Listing page logic (search, filter, sort)
│ ├── saved.js # Saved page logic
│ └── tailwind-cdn.js # Local copy of Tailwind CDN script (offline-friendly)
└── README.md


---

## How to Run Locally

1. Clone or download this repository
2. Open `index.html` directly in a browser, or use a local server (e.g. VS Code's "Live Server" extension) for the best experience
3. No installation, build step, or dependencies required — everything runs client-side

---

## AI Tool Disclosure

In line with the task's honesty requirement, here is exactly where AI tools were used:

- **UI Design:** Initial screen designs (Homepage, Listing, Details) were generated using **Google Stitch AI**, based on a custom design brief I wrote specifying color palette, layout requirements, and component structure.
- **Development assistance:** I used **Claude (Anthropic)** to help debug JavaScript issues, structure reusable components (like the opportunity card function), and troubleshoot responsive layout issues.
- **What I did myself:** I defined the project requirements and design brief, tested and debugged the application across pages, made UX decisions (e.g. save/bookmark behavior, page structure, data model design), and iteratively refined the AI-generated output based on functional testing.

All functionality — search, filtering, sorting, dynamic routing, save/bookmark persistence, and the apply flow — was wired up through iterative development and testing, not automatically generated.

---

## Known Limitations

- No backend — application submissions are simulated (a success message shows, but nothing is actually sent anywhere)
- Sample data includes 8 opportunities for demonstration purposes
- Region-based filtering (Worldwide/Remote/etc.) is present in the UI but not currently functional


## About

Vantage solves a simple problem: opportunities (internships, scholarships, 
grants, fellowships) are scattered across dozens of sites, newsletters, and 
social posts, making them hard to discover and compare. Vantage brings them 
into one searchable, filterable platform.

**How it works:**
1. A visitor lands on the **Homepage**, sees featured opportunities, and can 
   search directly or browse by category (Internships, Scholarships, Grants, 
   Fellowships).
2. Searching or clicking "View all" takes them to the **Listing page**, 
   where they can further filter by category, sort by deadline, and search 
   by keyword — all updating instantly without a page reload.
3. Clicking any opportunity opens its **Details page**, showing full 
   information (description, requirements, compensation, deadline) and an 
   **Apply Now** button that opens an application form.
4. Users can **bookmark** any opportunity from anywhere in the app (a click 
   on the bookmark icon) — these are saved in the browser and accessible 
   anytime from the **Saved** page in the bottom navigation.
5. A lightweight **Profile** page rounds out the experience, showing the 
   user's saved-opportunity count pulled live from their actual saved list.

The whole app is frontend-only — there's no backend or database. Opportunity 
data lives in a single JavaScript file, and saved/bookmarked items are stored 
in the browser's local storage, so nothing requires a server to function.
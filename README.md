# Sports-day-registration

## Project Overview

This repository contains a college sports day registration portal with multiple static pages for event landing, registration, dashboards, login, and profile management.

## Key Pages

### Root pages
- `index.html` — Main landing page entry point for the site.
- `landing.html` — Bright white/blue event landing page with featured sports, gallery, and quick navigation for event registration and login.
- `profile.html` — Department profile page showing department login/account details.
- `result.html` — Event result page with performance summaries.
- `dashboard.html` — Dashboard overview page for event administrators or department managers.
- `Event_Dash_Schedule.html` — Event schedule dashboard page with schedule and event timings.
- `event-logs.html` — Logs page for tracking event activity and history.

### Client login pages
- `client/login/dep_eve_login.html` — Combined Department and Event Management login page with tabbed login selection.
- `client/login/admin_login.html` — Admin login page for portal administrators.

### Registration pages
- `client/Registration_Home/New registration/new_registration.html` — Registration hub with solo/team event choices and navigation to the correct registration form.
- `client/Reg_Form/Solo_Reg/Solo_Reg.html` — Solo event registration form.
- `client/Reg_Form/Team_Reg/Team_Reg_Final.html` — Team event registration form.

## Assets
- `client/src/assets/images/` — Local image assets used across the landing page, registration pages, and gallery.

## Notes
- `client/README.md` currently contains the default React + Vite template text and is not specific to the sports day portal.
- Many pages use local static HTML/CSS/JS and can be viewed by opening them directly in a browser.
- `client/index.html`, `client/src/`, and `client/vite.config.js` indicate a Vite-based client app setup, but the portal mostly uses static HTML pages in the `client/` directory.

## Recommended Start
1. Open `client/landing.html` in a browser to view the landing experience.
2. Use `client/login/dep_eve_login.html` to access department or event management login.
3. Use `client/Registration_Home/New registration/new_registration.html` to reach registration forms.

## Contact
For changes to pages or assets, update the corresponding HTML file in the `client/` folder and verify paths for local images and links.

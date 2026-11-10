# Higher Sights Counseling — website redesign concept

A cleaner, faster redesign of highersightscounseling.com, made as a proposal for the practice. **This is not the official site.**

## What's improved
- **Client Login** button in the header of every page (the current site has none) → `https://app.highersightsportal.com`
- Crisis numbers visible at the top of every page, updated to **988** (the current site lists the retired 1-800-273-8255 number)
- A "What do you need today?" box that sends new clients, current clients, and insurance questions to the right place
- **Searchable provider directory** (`providers.html`): 157 providers, search by name, concern, therapy approach, or language, plus quick filters (Children, Couples, EMDR, Spanish…)
- Getting-started steps, insurance list, parking/entry directions, and FAQ all on the home page and not buried in sub-pages
- Plain HTML/CSS. No WordPress or Elementor, works on phones, loads fast

## Two versions
- **Version 1** (`index.html`, `providers.html`): calm teal/sand palette, serif headings.
- **Version 2** (`index-v2.html`, `providers-v2.html`): same layout and buttons, but with Higher Sights' own look: black header with their logo, their aurora banner photo behind the top section, their green-to-cyan button gradient, magenta/blue accents, and Poppins font. Colors live in `theme-v2.css`.

The bar at the very top of every page switches between the two.

## Files
- `index.html` / `index-v2.html`: home page
- `providers.html` / `providers-v2.html`: provider directory
- `theme-v2.css`: version 2 colors (loaded on top of `style.css`)
- `style.css`: styles
- `providers.js`: provider data (edit this to add/remove providers)
- `directory.js`: search/filter logic

## Preview
Open `index.html` (or `index-v2.html`) in a browser. Provider photos, the logo, and the banner load from the current site.

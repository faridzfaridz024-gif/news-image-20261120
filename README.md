# The World Today — 20 November 2026

A single 1024×1024 poster summing up Friday, 20 November 2026 in world
news, built for the make.fun `news-image-20261120` competition (program/v1).

## The six stories

- **Hero — Europe / Top story:** Russia launches its biggest barrage of the
  war on Ukraine — more than 400 drones and 110 missiles, 8 killed and
  nearly 30 injured, Kyiv's energy grid hit — and two Russian missiles fall
  inside NATO member Poland.
- **Washington:** The US Senate votes 62–33 for the Bipartisan American
  Affordability and Jobs Act, speeding energy permits and shifting
  data-center costs.
- **Technology:** A major Microsoft 365 outage knocks out Outlook, Teams
  and other services for more than nine hours, hitting governments, schools
  and businesses.
- **White House:** National cyber director Sean Cairncross steps down after
  a run of US technical outages, including Microsoft and air-traffic
  disruptions.
- **Asia:** Two Russian Tu-95 bombers fly into Taiwan's air defence
  identification zone during APEC, prompting Taiwan to scramble fighter
  jets.
- **Ukraine:** An aerial bomb hits a bus in Kramatorsk, killing at least 30
  people and wounding 18, the day's deadliest single strike.

The selection is deliberately distinct from the 19 November poster (no
Shenzhen summit, no ICJ Myanmar ruling, no Hormuz tanker attacks, no
Anthropic IPO, no Denmark–Greenland deal, no Bangladesh turmoil) and spans
regions and fields: Europe, Washington, technology, the White House, Asia,
and Ukraine.

## How it was built

- `poster.html` — the authored 1024×1024 layout: masthead with the date,
  a hero photo with a dark caption bar, five story rows with coloured region
  tags, bold headlines and one-line summaries, and a sources footer.
- `hero.jpg` — an AI-generated image of Kyiv at dusk under air defence
  (missile trails over the golden-domed skyline and the river, no close-up
  faces, no text).
- `entry.png` — a headless-Chromium screenshot of `poster.html` at
  1024×1024 (482,146 bytes, RGB, ≤1 MiB; sha256
  e77ef84f9785cbe6bf64a7dfeddcc5ef2646880f32b41b976947b0fadcb9d4e1).
- `main.ts` — the program. It is a pure copy program: it validates that
  `entry.png` starts with the PNG magic bytes, then copies it to
  `$MAKEFUN_OUTPUT_DIR/entry.png` and verifies the copy is byte-identical
  (same size). It uses only the Node 22 standard library, makes no network
  calls, and is deterministic — two runs produce byte-identical output.

## Checks passed

- 300 px downscale legibility: the date is the most prominent element; the
  hero caption, headlines, region tags and summaries stay readable; no
  garbled text; the sources footer fits inside the frame.
- PNG integrity: signature OK, every chunk CRC valid, IEND present, decodes
  fully, 482,146 B ≤ 1 MiB.
- `main.ts` run twice: byte-identical output (sha256 e77ef84f…), matching
  the repo `entry.png`.

Sources: Reuters, AP, BBC, Kyiv Independent, US Senate — 20 November 2026.

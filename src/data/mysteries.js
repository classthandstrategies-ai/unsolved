/**
 * Curated dataset of genuinely unresolved historical mysteries.
 *
 * Editorial rules for every entry (this is a research archive, not a mystery
 * blog, so honesty is the product):
 *   - `summary`     : the documented, agreed-upon facts of what happened.
 *   - `unexplained` : the SPECIFIC thing that remains unresolved — not a vague
 *                     "nobody knows", but the precise open question.
 *   - `theories`    : the leading explanations, labelled by how supported they
 *                     actually are. No invented theories.
 *   - `unsolvedMeaning` : an honest framing distinguishing "genuinely no
 *                     evidence either way" from "likely explained but unproven"
 *                     from "probably mundane / possibly a hoax" — and, where it
 *                     applies, "actually solved" (kept deliberately as a foil).
 *   - `sources`     : honest pointers to where the documented account lives.
 *   - `wikipedia`   : the exact Wikipedia article title. Used to fetch a real
 *                     lead image + attribution at runtime (see src/lib/wikimedia.js).
 *                     To add a new mystery, this is the only "media" you supply.
 *
 * Coordinates are placed at the locus of the mystery (where the event occurred,
 * where an object most plausibly originated, or where a celestial signal was
 * detected from), with the holding/site location noted in prose where it differs.
 */
export const MYSTERIES = [
  // ── Ciphers & undeciphered documents ──────────────────────────────────────
  {
    id: 'voynich-manuscript',
    title: 'The Voynich Manuscript',
    category: 'ciphers',
    wikipedia: 'Voynich manuscript',
    era: 'c. 1404–1438 (parchment carbon-dated)',
    location: { lat: 45.07, lng: 9.69, place: 'Northern Italy (presumed origin)' },
    summary:
      'An illustrated codex of roughly 240 vellum pages written in an unknown script, filled with drawings of unidentifiable plants, astronomical diagrams, and bathing figures. Radiocarbon dating places the parchment in the early 15th century. It is held at Yale University’s Beinecke Library (MS 408).',
    unexplained:
      'No one has produced a verifiable translation or even established what kind of writing system the text is. Its statistical structure resembles natural language in some respects but defies every attempted cipher key, and not one of its plants or star charts has been conclusively matched to a real referent.',
    theories: [
      'A genuine cipher or shorthand encoding a real language (no proposed key has survived scrutiny).',
      'An unknown or constructed natural language, possibly phonetic.',
      'An elaborate hoax or "asemic" gibberish — though the consistent internal statistics make pure randomness unlikely.',
    ],
    unsolvedMeaning:
      'Genuinely undeciphered. Periodic headlines announce "solutions," but none has been accepted by linguists or cryptographers. We cannot even confirm whether it carries meaning at all.',
    sources: [
      'Beinecke Rare Book & Manuscript Library, Yale University (MS 408, fully digitized)',
      'Reddy & Knight, "What We Know About the Voynich Manuscript" (2011)',
    ],
  },
  {
    id: 'zodiac-ciphers',
    title: 'The Zodiac Killer’s Ciphers',
    category: 'ciphers',
    wikipedia: 'Zodiac Killer',
    era: '1969–1970',
    location: { lat: 38.0, lng: -122.0, place: 'San Francisco Bay Area, California' },
    summary:
      'An unidentified serial killer sent four cryptograms to Northern California newspapers. The 408-character cipher was solved within days in 1969; the 340-character "Z340" resisted attack for 51 years until an international team cracked it in December 2020. Two shorter ciphers, "Z13" and "Z32," remain.',
    unexplained:
      'The killer’s identity — never established — and the two unsolved short ciphers. The Z13 cipher purportedly encodes the killer’s name; with only 13 symbols it may carry too little information to ever solve uniquely.',
    theories: [
      'Z13 names the killer, but 13 characters is likely insufficient to confirm any single solution.',
      'Z32 supposedly marks a buried bomb location; without a crib it is similarly underdetermined.',
      'Numerous named suspects exist; none has been confirmed by evidence.',
    ],
    unsolvedMeaning:
      'Mostly solved, with a hard residue. The headline ciphers are decrypted; what is genuinely unresolved is the identity, plus two ciphers that may be mathematically unsolvable from the text alone.',
    sources: [
      'San Francisco Chronicle archives; FBI records',
      'Oranchak/Blake/Samsin Z340 solution (2020)',
    ],
  },
  {
    id: 'beale-ciphers',
    title: 'The Beale Ciphers',
    category: 'ciphers',
    wikipedia: 'Beale ciphers',
    era: 'Published 1885 (events claimed 1820s)',
    location: { lat: 37.34, lng: -79.52, place: 'Bedford County, Virginia' },
    summary:
      'Three cipher texts, published in an 1885 pamphlet, supposedly reveal the location of a buried cache of gold and silver left by an adventurer named Thomas J. Beale. The second cipher was decoded using the Declaration of Independence as a key; the first (location) and third (heirs) ciphers remain undecoded.',
    unexplained:
      'Whether the unsolved ciphers encode anything real — and if so, where the treasure lies. No key text has been found that yields coherent plaintext for ciphers one and three.',
    theories: [
      'A genuine book cipher whose key documents are simply lost.',
      'A 19th-century hoax built around the pamphlet sale — statistical analyses and historical gaps strongly support this.',
    ],
    unsolvedMeaning:
      'Possibly a puzzle with no answer. There is real reason to believe the Beale ciphers may encode nothing at all — "unsolved" here may mean "unsolvable because fabricated."',
    sources: ['The Beale Papers (1885 pamphlet)', 'Cryptanalytic critiques by Gillogly (1980)'],
  },
  {
    id: 'phaistos-disc',
    title: 'The Phaistos Disc',
    category: 'ciphers',
    wikipedia: 'Phaistos Disc',
    era: 'c. 2nd millennium BCE (Middle/Late Minoan)',
    location: { lat: 35.052, lng: 24.814, place: 'Phaistos, Crete, Greece' },
    summary:
      'A fired-clay disc about 16 cm across, found in 1908 at the Minoan palace of Phaistos, stamped on both sides with 241 tokens in a spiral comprising 45 distinct signs. The signs were impressed with individual seals — arguably the earliest known "movable type." It is held at the Heraklion Archaeological Museum.',
    unexplained:
      'The meaning and language of the inscription. With only one substantial object bearing this exact sign system, there is no bilingual key and far too little text to decipher by frequency analysis.',
    theories: [
      'A genuine Minoan-era text (prayer, hymn, list, or record) in an undocumented script.',
      'Occasional authenticity doubts have been raised but are not the mainstream view.',
    ],
    unsolvedMeaning:
      'Genuinely undecipherable on current evidence. The obstacle is data, not cleverness: a single short artifact in an isolated script cannot be cracked without more examples or a bilingual.',
    sources: ['Heraklion Archaeological Museum', 'Yves Duhoux and other Aegean-script scholarship'],
  },
  {
    id: 'kryptos-k4',
    title: 'Kryptos (Section K4)',
    category: 'ciphers',
    wikipedia: 'Kryptos',
    era: 'Installed 1990',
    location: { lat: 38.951, lng: -77.146, place: 'CIA Headquarters, Langley, Virginia' },
    summary:
      'A sculpture by Jim Sanborn on the grounds of CIA headquarters bears four encrypted messages. Three were solved by 1999. The fourth, "K4" — 97 characters — has resisted all public attempts for over three decades. Sanborn has released clues: the plaintext includes the words BERLIN, CLOCK, and the letters at positions 26–34 are NORTHEAST.',
    unexplained:
      'The plaintext of the final 97 characters, and the ultimate "riddle" the full solution is said to pose even after decryption.',
    theories: [
      'A unique, deliberately hard cipher of Sanborn’s own design; the released cribs narrow it but no public solver has closed it.',
      'Some suspect transcription quirks in the sculpture complicate brute-force attacks.',
    ],
    unsolvedMeaning:
      'Solvable in principle, simply not yet solved. There is a definite answer held by the artist — this is an open puzzle, not an epistemic void.',
    sources: ['Jim Sanborn’s released clues (1990–present)', 'Elonka Dunin’s Kryptos archive'],
  },
  {
    id: 'linear-a',
    title: 'Linear A',
    category: 'ciphers',
    wikipedia: 'Linear A',
    era: 'c. 1800–1450 BCE (Minoan Crete)',
    location: { lat: 35.3, lng: 25.1, place: 'Crete (Minoan sites), Greece' },
    summary:
      'The primary script of Minoan Crete, found on tablets and offering vessels. Its sister script Linear B was famously deciphered in 1952 as an early form of Greek — and Linear A shares many of the same signs, so we can sound many of them out.',
    unexplained:
      'When the shared signs are read with their Linear B values, the result is not Greek or any known language. The underlying Minoan language remains unidentified, so the readable sounds spell words we cannot understand.',
    theories: [
      'An isolate or non-Indo-European language with no known living relatives.',
      'Proposed links to Anatolian or other language families exist but are unconfirmed.',
    ],
    unsolvedMeaning:
      'Partly readable, wholly un-understood. We can pronounce much of it but cannot translate it — a genuine gap awaiting either a bilingual text or far more material.',
    sources: ['Corpus of Mycenaean and Minoan inscriptions', 'John Younger’s Linear A texts'],
  },
  {
    id: 'rongorongo',
    title: 'Rongorongo',
    category: 'ciphers',
    wikipedia: 'Rongorongo',
    era: 'Possibly pre-19th century',
    location: { lat: -27.12, lng: -109.37, place: 'Rapa Nui (Easter Island)' },
    summary:
      'A system of glyphs carved into wooden objects on Rapa Nui, comprising a few dozen surviving inscribed artifacts scattered across the world’s museums. It was first reported to outsiders in the 1860s, by which point the knowledge to read it had already been lost on the island.',
    unexplained:
      'Whether rongorongo is true writing (encoding language), proto-writing, or a mnemonic/decorative device — and, if writing, what it says. No undisputed reading of any text exists.',
    theories: [
      'A genuine logographic or mixed script recording Rapa Nui language (one fragment may be a lunar calendar).',
      'Proto-writing or a memory aid rather than full writing.',
    ],
    unsolvedMeaning:
      'Genuinely undeciphered, with even its nature in question. The collapse of Rapa Nui society and loss of its readers may make it permanently unreadable absent new evidence.',
    sources: ['Steven Fischer and Jacques Guy’s competing analyses', 'CEIPP rongorongo corpus'],
  },
  {
    id: 'rohonc-codex',
    title: 'The Rohonc Codex',
    category: 'ciphers',
    wikipedia: 'Rohonc Codex',
    era: 'Surfaced early 19th century',
    location: { lat: 47.3, lng: 16.4, place: 'Historically Rohonc (Rechnitz), Hungary' },
    summary:
      'A 448-page illustrated manuscript in an unknown script of around 200 symbols, donated to the Hungarian Academy of Sciences in 1838. Its religious-looking illustrations depict Christian, pagan, and Islamic scenes together.',
    unexplained:
      'The script, language, and even the authenticity of the codex. The symbol set is far larger than a typical alphabet, complicating attempts to treat it as a simple cipher.',
    theories: [
      'A genuine devotional text in a constructed or obscure script.',
      'A 19th-century forgery, possibly by antiquarian Sámuel Literáti Nemes, a known hoaxer — a leading suspicion.',
    ],
    unsolvedMeaning:
      'Undeciphered and possibly fabricated. As with the Beale ciphers, "unsolved" may ultimately mean "there was never a real message."',
    sources: [
      'Hungarian Academy of Sciences',
      'Benedek Láng, "Why Don’t We Decipher an Outdated Cipher System?" (2010)',
    ],
  },
  {
    id: 'indus-script',
    title: 'The Indus Script',
    category: 'ciphers',
    wikipedia: 'Indus script',
    era: 'c. 2600–1900 BCE',
    location: { lat: 27.0, lng: 68.0, place: 'Indus Valley (Mohenjo-daro / Harappa)' },
    summary:
      'Short strings of symbols — typically five signs long — stamped on thousands of seals, tablets, and pottery from the Bronze Age Indus Valley Civilisation. Around 400 distinct signs are known.',
    unexplained:
      'Whether the symbols encode a spoken language at all, and if so which one. The texts are extremely short, there is no confirmed bilingual, and the underlying language (possibly Dravidian) is unknown.',
    theories: [
      'A logo-syllabic writing system recording an unknown (perhaps proto-Dravidian) language — the mainstream view.',
      'A controversial minority argues the signs are non-linguistic symbols, not writing.',
    ],
    unsolvedMeaning:
      'Genuinely undeciphered, with its very status as writing still debated. Decipherment is blocked by short texts, no bilingual, and an unknown language.',
    sources: [
      'Asko Parpola, "Deciphering the Indus Script" (1994)',
      'Rao et al. on conditional entropy (2009)',
    ],
  },
  {
    id: 'dorabella-cipher',
    title: 'The Dorabella Cipher',
    category: 'ciphers',
    wikipedia: 'Dorabella Cipher',
    era: '1897',
    location: { lat: 52.11, lng: -2.33, place: 'Great Malvern, England' },
    summary:
      'An 87-character note written by the composer Edward Elgar to a young friend, Dora Penny, using a single alphabet of squiggles oriented in different directions. Dora herself never managed to read it, and it has resisted solution ever since.',
    unexplained:
      'The plaintext. The message is very short and Elgar was a playful, allusive writer, so it may not map cleanly to ordinary English even if the symbol-to-letter scheme were found.',
    theories: [
      'A simple substitution cipher whose key is lost; the short length frustrates frequency analysis.',
      'A private, whimsical, or deliberately unsolvable note rather than a meaningful message.',
    ],
    unsolvedMeaning:
      'Possibly unsolvable from the text alone. With so few characters and a single recipient who couldn’t read it, there may be too little information to ever confirm a unique solution.',
    sources: ['The Elgar Birthplace Museum', 'Elgar Society publications'],
  },
  // ── Disappearances ─────────────────────────────────────────────────────────
  {
    id: 'mary-celeste',
    title: 'The Mary Celeste',
    category: 'disappearances',
    wikipedia: 'Mary Celeste',
    era: 'December 1872',
    location: { lat: 38.3, lng: -17.0, place: 'Atlantic Ocean, near the Azores' },
    summary:
      'The American brigantine Mary Celeste was found adrift and unmanned between the Azores and Portugal, under partial sail and seaworthy. Her cargo of denatured alcohol was largely intact, but the lifeboat and the entire crew of ten — Captain Briggs, his family, and seven sailors — were gone, never seen again.',
    unexplained:
      'Why a competent captain would order a seaworthy ship abandoned into a small lifeboat in open ocean. The specific trigger for the evacuation is the unresolved point.',
    theories: [
      'Alcohol fumes created a feared (but harmless) vapour or minor blast, prompting a precautionary evacuation to a towed lifeboat that was then lost — the favoured modern theory.',
      'A faulty pump or misread sounding made the crew believe the ship was sinking.',
      'Waterspout or sudden weather. (Piracy and mutiny were investigated and dismissed.)',
    ],
    unsolvedMeaning:
      'Likely mundane, never proven. Several ordinary maritime explanations fit, but no log entry or survivor confirms which occurred — not the supernatural legend it became.',
    sources: [
      'Gibraltar Vice-Admiralty Court salvage hearings (1873)',
      'Conan Doyle’s 1884 fiction is responsible for many myths',
    ],
  },
  {
    id: 'roanoke-colony',
    title: 'The Lost Colony of Roanoke',
    category: 'disappearances',
    wikipedia: 'Roanoke Colony',
    era: '1587–1590',
    location: { lat: 35.93, lng: -75.71, place: 'Roanoke Island, North Carolina' },
    summary:
      'An English colony of about 115 settlers vanished between 1587 and 1590. Returning governor John White found the settlement dismantled with no sign of struggle and the word "CROATOAN" carved into a post — a prearranged signal pointing to nearby Croatoan Island (modern Hatteras).',
    unexplained:
      'The colonists’ ultimate fate. No bodies or definitive colony artifacts have been conclusively identified at a single relocation site.',
    theories: [
      'Assimilation with the Croatoan and other coastal Algonquian peoples — the leading theory, consistent with the carved message.',
      'Dispersal inland; some archaeological hints suggest small groups moved.',
      'Death by famine, disease, or conflict during the multi-year gap.',
    ],
    unsolvedMeaning:
      'Probably resolved in outline, unproven in fact. Assimilation is widely accepted as likeliest, but no single piece of evidence closes the case. "Lost" overstates it.',
    sources: ['John White’s narratives (1590)', 'First Colony Foundation excavations'],
  },
  {
    id: 'somerton-man',
    title: 'The Somerton Man (Tamám Shud)',
    category: 'disappearances',
    wikipedia: 'Somerton Man',
    era: 'December 1948',
    location: { lat: -35.004, lng: 138.515, place: 'Somerton Park beach, Adelaide, Australia' },
    summary:
      'An unidentified man was found dead against a seawall in Adelaide. The labels were cut from his clothes, and a hidden pocket held a scrap torn from a rare copy of the Rubáiyát reading "Tamám Shud" ("it is finished"). The matching book held faint pencilled lines resembling a code.',
    unexplained:
      'The cause of death (no poison was conclusively identified), the meaning of the pencilled "code," and why his identifying details were so deliberately erased.',
    theories: [
      'A Cold War espionage angle (cut labels, the cipher, a nearby weapons range) — popular but unproven.',
      'Suicide by an undetected poison.',
      'In 2022, researchers using DNA from the exhumed body identified him, with strong confidence, as Carl "Charles" Webb, a Melbourne-born engineer.',
    ],
    unsolvedMeaning:
      'Identity now likely resolved; circumstances genuinely not. The "who" appears answered by DNA genealogy, while the "how and why he died" remains unexplained.',
    sources: [
      'South Australia Police case file; 1949 inquest',
      'Abbott/Fitzpatrick DNA identification (2022)',
    ],
  },
  {
    id: 'amelia-earhart',
    title: 'The Disappearance of Amelia Earhart',
    category: 'disappearances',
    wikipedia: 'Amelia Earhart',
    era: 'July 1937',
    location: {
      lat: -4.67,
      lng: -174.52,
      place: 'Central Pacific (near Howland Island / Nikumaroro)',
    },
    summary:
      'Pioneering aviator Amelia Earhart and navigator Fred Noonan vanished over the central Pacific during an attempt to circumnavigate the globe, en route to tiny Howland Island. Radio messages indicate they were low on fuel and could not find the island. No confirmed wreckage has ever been recovered.',
    unexplained:
      'Precisely where and how they came down. Despite one of the largest search efforts in history then and decades of expeditions since, no piece of the aircraft has been positively identified.',
    theories: [
      'Crashed and sank near Howland after running out of fuel — the simplest, most-supported explanation.',
      'Landed and died as castaways on Nikumaroro (TIGHAR hypothesis) — suggestive artifacts, no proof.',
      'Various capture/spy theories — unsupported by evidence.',
    ],
    unsolvedMeaning:
      'Almost certainly a fatal ditching at sea; the exact site and final hours remain unconfirmed. This is "we know roughly what happened, not exactly where."',
    sources: ['US Navy/Coast Guard 1937 search reports', 'TIGHAR Nikumaroro expedition findings'],
  },
  {
    id: 'mh370',
    title: 'Malaysia Airlines Flight 370',
    category: 'disappearances',
    wikipedia: 'Malaysia Airlines Flight 370',
    era: 'March 2014',
    location: { lat: -35.0, lng: 92.0, place: 'Southern Indian Ocean (presumed crash zone)' },
    summary:
      'A Boeing 777 with 239 people aboard lost contact en route from Kuala Lumpur to Beijing, then turned far off course. Satellite "handshake" data placed its final position in the remote southern Indian Ocean. Confirmed debris later washed ashore on Indian Ocean coasts, but the main wreckage has never been located.',
    unexplained:
      'The exact crash location and, above all, the cause. Whether the diversion was a deliberate act, a hijacking, a fire, or another emergency has never been established.',
    theories: [
      'A deliberate diversion (by someone in the cockpit) followed by a controlled or uncontrolled descent — a widely discussed but unproven reading of the flight path.',
      'An onboard fire or depressurisation incapacitating the crew (a "ghost flight").',
    ],
    unsolvedMeaning:
      'A crash in the southern Indian Ocean is near-certain from satellite data and recovered debris; the precise site and the human cause remain genuinely unresolved.',
    sources: ['Malaysian ICAO safety investigation report (2018)', 'ATSB search reports'],
  },
  {
    id: 'db-cooper',
    title: 'D. B. Cooper',
    category: 'disappearances',
    wikipedia: 'D. B. Cooper',
    era: 'November 1971',
    location: { lat: 45.9, lng: -122.6, place: 'Pacific Northwest, near the Columbia River, USA' },
    summary:
      'A man using the alias "Dan Cooper" hijacked a Boeing 727 over the Pacific Northwest, collected a $200,000 ransom, and parachuted from the rear stairs into the night. He was never found. In 1980, a boy unearthed a small bundle of the ransom cash along the Columbia River.',
    unexplained:
      'Who he was and whether he survived the jump. The FBI worked the case for 45 years and closed it in 2016 without an identification.',
    theories: [
      'He died on landing in rough terrain — plausible given the conditions, but no body or main parachute was ever found.',
      'He survived and disappeared into a new life; numerous named suspects exist, none confirmed.',
    ],
    unsolvedMeaning:
      'Genuinely unsolved as to identity and fate. The crime mechanics are fully understood; the man is not. The recovered cash deepened rather than closed the case.',
    sources: ['FBI NORJAK case file', 'Citizen Sleuths forensic analyses of the recovered tie'],
  },
  {
    id: 'flannan-isles',
    title: 'The Flannan Isles Lighthouse Keepers',
    category: 'disappearances',
    wikipedia: 'Flannan Isles',
    era: 'December 1900',
    location: { lat: 58.288, lng: -7.587, place: 'Flannan Isles, Outer Hebrides, Scotland' },
    summary:
      'Three lighthouse keepers vanished from the remote Eilean Mòr light. A relief crew found the lamp ready but unlit, a meal seemingly interrupted in early accounts (later disputed), and damage to equipment high above the normal reach of the sea. The logbook recorded a fierce storm.',
    unexplained:
      'How three experienced keepers came to leave the lighthouse and disappear during a storm, when standing orders required at least one to remain.',
    theories: [
      'Swept away by a freak wave while two or three tried to secure storm-damaged equipment near the western landing — the leading, physically plausible explanation.',
      'An accident during a rescue attempt of one another.',
    ],
    unsolvedMeaning:
      'Most likely a tragic accident of sea and weather, but with no witnesses or bodies it can never be confirmed. Many lurid embellishments are later inventions.',
    sources: ['Northern Lighthouse Board records', 'Keeper Joseph Moore’s relief report (1900)'],
  },
  {
    id: 'sodder-children',
    title: 'The Sodder Children',
    category: 'disappearances',
    wikipedia: 'Sodder children disappearance',
    era: 'December 1945',
    location: { lat: 38.05, lng: -81.1, place: 'Fayetteville, West Virginia, USA' },
    summary:
      'On Christmas Eve, a fire destroyed the Sodder family home. Five of the children were never accounted for, yet no remains were found in the ashes and the fire’s heat seemed insufficient to cremate them completely. The parents spent decades convinced the children had been taken.',
    unexplained:
      'Whether the five children died in the fire or survived and disappeared. The absence of identifiable remains is the crux.',
    theories: [
      'They died in the fire and their remains were destroyed or overlooked in a hurried search — the conventional explanation.',
      'They were abducted (possibly amid local tensions); a later photo purportedly of one grown son fuelled this, unconfirmed.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved. Competing fire-vs-abduction accounts each have gaps, and no physical evidence settles it either way.',
    sources: ['West Virginia State Police records', 'Contemporary Charleston Gazette reporting'],
  },
  {
    id: 'frederick-valentich',
    title: 'The Disappearance of Frederick Valentich',
    category: 'disappearances',
    wikipedia: 'Frederick Valentich',
    era: 'October 1978',
    location: { lat: -39.0, lng: 144.0, place: 'Bass Strait, off Victoria, Australia' },
    summary:
      'A 20-year-old pilot flying a light aircraft over Bass Strait radioed that an unidentified aircraft was circling above him, that his engine was rough, and then — after a metallic scraping sound — fell silent. Neither he nor the plane was found, though a possible engine cowl flap was recovered years later.',
    unexplained:
      'What he saw and what caused the crash. No wreckage was conclusively recovered to determine a mechanical cause.',
    theories: [
      'Spatial disorientation: he may have flown into the water while inverted, mistaking his own lights (reflected) for another craft — the leading explanation.',
      'Fuel mismanagement or mechanical failure.',
      'The "UFO" report is unexplained but is not evidence of an actual craft.',
    ],
    unsolvedMeaning:
      'Most likely a fatal crash from disorientation; the radio account is genuinely puzzling but does not establish anything extraterrestrial. The lack of wreckage keeps the cause unconfirmed.',
    sources: [
      'Australian Department of Transport investigation',
      'Air-traffic-control transcript (1978)',
    ],
  },
  {
    id: 'percy-fawcett',
    title: 'The Disappearance of Percy Fawcett',
    category: 'disappearances',
    wikipedia: 'Percy Fawcett',
    era: '1925',
    location: { lat: -12.0, lng: -53.0, place: 'Mato Grosso (Amazon), Brazil' },
    summary:
      'British explorer Percy Fawcett, his son Jack, and Raleigh Rimell vanished in the Brazilian Amazon while searching for a lost city Fawcett called "Z." His last letters were upbeat; the party was never heard from again, and many would-be rescuers died or vanished trying to find them.',
    unexplained:
      'How and where the three men died. No conclusive remains have been authenticated despite numerous expeditions and rumours.',
    theories: [
      'Death by starvation, illness, or drowning in the deep forest — the most likely outcome.',
      'Killed by an Indigenous group whose territory they entered; later accounts and contested bones point this way without proof.',
    ],
    unsolvedMeaning:
      'They almost certainly died in the Amazon; the exact manner and location are unknown and probably unrecoverable. The "Lost City of Z" itself echoes real (later-confirmed) Amazonian settlements.',
    sources: ['Royal Geographical Society archives', 'David Grann, "The Lost City of Z" (2009)'],
  },
  {
    id: 'louis-le-prince',
    title: 'The Disappearance of Louis Le Prince',
    category: 'disappearances',
    wikipedia: 'Louis Le Prince',
    era: 'September 1890',
    location: { lat: 47.32, lng: 5.04, place: 'Between Dijon and Paris, France' },
    summary:
      'Louis Le Prince, who had shot some of the earliest known motion-picture footage, boarded a train from Dijon to Paris and was never seen again. No body or luggage was found on the train, and he vanished weeks before he planned to publicly demonstrate his moving-picture camera.',
    unexplained:
      'What became of him. There was no body, no clear evidence of accident or crime, and his disappearance came at a pivotal moment in his career and in patent disputes over motion pictures.',
    theories: [
      'Accident or suicide — possible but unsupported by any recovered body (a 2003 archival photo of a drowning victim has been proposed as him, unconfirmed).',
      'Foul play linked to family finances or motion-picture patent rivalries — speculated, unproven.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved. With no body and no documentation of his fate, every theory rests on circumstance rather than evidence.',
    sources: [
      'Leeds and French municipal records',
      'Christopher Rawlence, "The Missing Reel" (1990)',
    ],
  },
  {
    id: 'carroll-deering',
    title: 'The Carroll A. Deering',
    category: 'disappearances',
    wikipedia: 'Carroll A. Deering',
    era: 'January 1921',
    location: { lat: 35.26, lng: -75.53, place: 'Diamond Shoals, Outer Banks, North Carolina' },
    summary:
      'A five-masted schooner ran aground on the Outer Banks with sails set and no crew aboard. Food was found prepared in the galley, the ship’s log, navigation equipment, anchors, and lifeboats were missing, and the steering gear was damaged.',
    unexplained:
      'What happened to the eleven-man crew. The ship was abandoned in apparent haste, but the cause and the crew’s fate were never determined.',
    theories: [
      'Mutiny or abandonment after a navigational or mechanical crisis — the abandoned meal and missing log suggest a sudden, ordered evacuation.',
      'Piracy or rum-running interference during Prohibition; a US federal investigation explored this but reached no conclusion.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved, but firmly within human/maritime causes. The "Bermuda Triangle" framing is a later overlay on a likely mundane disaster at sea.',
    sources: ['US federal multi-agency investigation (1921)', 'National Archives shipping records'],
  },
  // ── Unexplained events & incidents ──────────────────────────────────────────
  {
    id: 'dyatlov-pass',
    title: 'The Dyatlov Pass Incident',
    category: 'events',
    wikipedia: 'Dyatlov Pass incident',
    era: 'February 1959',
    location: { lat: 61.757, lng: 59.457, place: 'Kholat Syakhl, Ural Mountains, Russia' },
    summary:
      'Nine experienced ski-hikers died on the slope of Kholat Syakhl in the northern Urals. Their tent was cut open from the inside and the bodies were scattered downslope, some in their socks. Most died of hypothermia; a few had severe internal injuries without corresponding external wounds.',
    unexplained:
      'Why nine seasoned mountaineers cut their way out of a sheltered tent into a −25°C night, inadequately dressed, and why a subset sustained high-force trauma with little external bruising.',
    theories: [
      'A delayed slab avalanche or katabatic wind — a 2021 study (Gaume & Puzrin) showed a small slab slide could plausibly cause both the panic and the injuries.',
      'A 2020 Russian investigation officially concluded an avalanche, though relatives dispute it.',
    ],
    unsolvedMeaning:
      'A plausible natural explanation now exists and is gaining acceptance, but it is not universally confirmed and key details are still debated. Not paranormal.',
    sources: [
      'Russian Prosecutor-General’s 2020 findings',
      'Gaume & Puzrin, Communications Earth & Environment (2021)',
    ],
  },
  {
    id: 'tunguska-event',
    title: 'The Tunguska Event',
    category: 'events',
    wikipedia: 'Tunguska event',
    era: '30 June 1908',
    location: { lat: 60.886, lng: 101.894, place: 'Podkamennaya Tunguska River, Siberia' },
    summary:
      'A colossal explosion over remote Siberia flattened an estimated 80 million trees across some 2,000 km², with an energy release on the order of 10–15 megatons. The first scientific expedition did not reach the site until 1927 — and found no impact crater.',
    unexplained:
      'The precise nature of the object: no crater and no large fragments were recovered, so the size, composition (stony asteroid vs. icy comet), and exact altitude of the airburst are still argued over.',
    theories: [
      'An asteroid or comet airburst — the firm scientific consensus; the object exploded several kilometres up.',
      'A stony asteroid roughly 50–60 m across is the most-supported candidate.',
      'Fringe ideas (antimatter, a black hole) have been raised and rejected.',
    ],
    unsolvedMeaning:
      'Broadly explained, narrowly open. The cause — a cosmic airburst — is settled science. What remains is the impactor’s exact identity, a question of detail.',
    sources: ['Kulik expedition reports (1927–1930s)', 'Boslough & Crawford airburst modelling'],
  },
  {
    id: 'lead-masks-case',
    title: 'The Lead Masks Case',
    category: 'events',
    wikipedia: 'Lead Masks Case',
    era: 'August 1966',
    location: { lat: -22.901, lng: -43.083, place: 'Vintém Hill, Niterói, Brazil' },
    summary:
      'Two electronics technicians were found dead on Vintém Hill near Rio de Janeiro, lying beside crude lead eye-masks. A notebook read, in part, "16:30 be at the agreed place. 18:30 swallow capsules, after effect protect metals wait for mask sign." No external trauma was evident and autopsies were inconclusive.',
    unexplained:
      'How and why the men died, and the purpose of the masks and instructions. The toxicology of the era could not determine whether they were poisoned.',
    theories: [
      'Accidental or intentional poisoning during a clandestine experiment or séance — the men were interested in spiritualism.',
      'A drug or capsule ingestion that went wrong.',
      'Foul play; never substantiated.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved, plausibly mundane. Inconclusive forensics mean no cause of death was confirmed — "unsolved" here reflects the limits of 1966 toxicology.',
    sources: ['Brazilian police case file (1966)', 'Contemporary reporting in O Globo'],
  },
  {
    id: 'max-headroom-intrusion',
    title: 'The Max Headroom Broadcast Intrusion',
    category: 'events',
    wikipedia: 'Max Headroom signal hijacking',
    era: '22 November 1987',
    location: { lat: 41.878, lng: -87.636, place: 'Chicago, Illinois' },
    summary:
      'Two Chicago television stations had their signals hijacked in one evening. Viewers saw a person in a Max Headroom mask in a bizarre ~90-second segment with distorted audio. The intrusion overrode a transmitter on the Sears Tower. The FCC investigated; no perpetrator was ever caught.',
    unexplained:
      'Who carried out the intrusion. The technical method (overpowering the studio-to-transmitter link) is understood, but the individuals were never identified or charged.',
    theories: [
      'A technically skilled broadcast/RF insider or hobbyist with access to suitable equipment — the consensus profile, never confirmed.',
      'Various later online claims of identification exist but none has been verified.',
    ],
    unsolvedMeaning:
      'Mechanism known, perpetrator unknown. Not a mystery of physics but a crime that was simply never solved.',
    sources: ['FCC investigation records', 'Contemporary Chicago Tribune coverage'],
  },
  {
    id: 'hinterkaifeck-murders',
    title: 'The Hinterkaifeck Murders',
    category: 'events',
    wikipedia: 'Hinterkaifeck murders',
    era: 'March 1922',
    location: { lat: 48.6, lng: 11.36, place: 'near Ingolstadt, Bavaria, Germany' },
    summary:
      'Six members of a farm family were killed with a mattock at an isolated Bavarian homestead. In the days before, the farmer had reported footprints in the snow leading to the house but none leading away, and strange noises. Whoever killed them apparently stayed on the farm for days afterward, feeding the animals.',
    unexplained:
      'Who committed the murders and why. Despite hundreds of suspects interviewed over a century, no one was ever charged, and the killer’s apparent residence at the scene remains chilling and unexplained.',
    theories: [
      'A robbery or personal grudge by someone local who knew the farm — the focus of the original investigation.',
      'Numerous named suspects over the decades; modern re-examinations have produced leads but no proof.',
    ],
    unsolvedMeaning:
      'A genuinely unsolved mass murder. The evidence is consistent with a human killer who knew the property; identity was never established and the case is effectively cold.',
    sources: ['Bavarian police archives', 'Polizeipräsidium München re-investigations'],
  },
  {
    id: 'black-dahlia',
    title: 'The Black Dahlia',
    category: 'events',
    wikipedia: 'Black Dahlia',
    era: 'January 1947',
    location: { lat: 34.016, lng: -118.331, place: 'Leimert Park, Los Angeles, USA' },
    summary:
      'Elizabeth Short, a 22-year-old woman, was found murdered and mutilated in a vacant Los Angeles lot. The case drew enormous press attention (the "Black Dahlia" nickname) and one of the largest investigations in LAPD history, but no one was ever charged.',
    unexplained:
      'The identity of the killer. Dozens of people confessed falsely; many suspects were proposed over the decades, none conclusively tied to the crime.',
    theories: [
      'A lone killer with medical/anatomical knowledge, suggested by the precision of the mutilation — never identified.',
      'Various named-suspect books (including by a former detective’s son) make cases that remain unproven.',
    ],
    unsolvedMeaning:
      'A genuinely unsolved homicide. The flood of false confessions and decades of speculation have produced no verified perpetrator.',
    sources: ['LAPD case files', 'FBI records on Elizabeth Short'],
  },
  {
    id: 'villisca-axe-murders',
    title: 'The Villisca Axe Murders',
    category: 'events',
    wikipedia: 'Villisca axe murders',
    era: 'June 1912',
    location: { lat: 40.93, lng: -94.976, place: 'Villisca, Iowa, USA' },
    summary:
      'Eight people — six of them children — were killed with an axe in their home in the small town of Villisca, Iowa. The killer apparently waited in the attic, and covered mirrors and victims’ faces. Several suspects were investigated and two trials were held, but no one was convicted.',
    unexplained:
      'Who killed the family. The crime scene yielded few usable leads by the standards of 1912 forensics, and the trials ended without a conviction.',
    theories: [
      'A travelling serial killer responsible for similar axe murders across the Midwest — a much-discussed but unproven link.',
      'A local suspect (a state senator was tried twice) — acquitted/hung jury; never resolved.',
    ],
    unsolvedMeaning:
      'A genuinely unsolved mass murder, hampered by early-20th-century investigative methods and a contaminated crime scene.',
    sources: ['Montgomery County, Iowa court records', 'Iowa state investigation files'],
  },
  {
    id: 'isdal-woman',
    title: 'The Isdal Woman',
    category: 'events',
    wikipedia: 'Isdal Woman',
    era: 'November 1970',
    location: { lat: 60.36, lng: 5.42, place: 'Isdalen valley, Bergen, Norway' },
    summary:
      'A partly burned body of an unidentified woman was found in a valley near Bergen. Labels were removed from her clothing, her belongings were found with serial numbers scratched off, and she had travelled under multiple false identities, fuelling espionage speculation. Coded notes were among her effects.',
    unexplained:
      'Her identity and the cause of death. Isotope analysis of her teeth (2016 onward) suggested origins around the German/French border, but she has never been named.',
    theories: [
      'An intelligence operative living under aliases during the Cold War — circumstantial, never confirmed.',
      'Suicide vs. homicide is itself unresolved; the scene and injuries are ambiguous.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved on both identity and cause. Modern forensic geolocation has narrowed her origins without closing the case.',
    sources: [
      'Norwegian (Bergen) police case file',
      'NRK / BBC "Death in Ice Valley" forensic project',
    ],
  },
  {
    id: 'dancing-plague-1518',
    title: 'The Dancing Plague of 1518',
    category: 'events',
    wikipedia: 'Dancing plague of 1518',
    era: 'July 1518',
    location: { lat: 48.583, lng: 7.747, place: 'Strasbourg (then Holy Roman Empire)' },
    summary:
      'In Strasbourg, a woman began dancing uncontrollably in the street; within weeks dozens, then reportedly hundreds, joined, dancing for days. Contemporary records note that some collapsed or died from exhaustion. Authorities, bizarrely, at first encouraged it by providing musicians and a stage.',
    unexplained:
      'What caused the compulsive, sustained dancing. The episode is well-documented, but its mechanism is not settled.',
    theories: [
      'Mass psychogenic illness (a stress-induced collective episode amid famine and disease) — the leading explanation.',
      'Ergot poisoning from contaminated rye — generally doubted, since ergotism causes convulsions and gangrene, not coordinated dancing.',
    ],
    unsolvedMeaning:
      'A real, documented event with an unconfirmed cause. The likeliest reading is psychological/social, but no contemporaneous medical evidence can prove it.',
    sources: [
      'Strasbourg municipal chronicles (1518)',
      'John Waller, "A Time to Dance, a Time to Die" (2008)',
    ],
  },
  {
    id: 'vela-incident',
    title: 'The Vela Incident',
    category: 'events',
    wikipedia: 'Vela incident',
    era: 'September 1979',
    location: {
      lat: -47.0,
      lng: 40.0,
      place: 'South Atlantic / Indian Ocean (near the Prince Edward Islands)',
    },
    summary:
      'A US Vela satellite detected a characteristic "double flash" over the southern oceans — the optical signature associated with an atmospheric nuclear explosion. A later US scientific panel concluded the signal might have been a sensor artifact (e.g., a micrometeoroid impact), but the finding remained contested.',
    unexplained:
      'Whether a clandestine nuclear test occurred and, if so, who conducted it. Declassified documents over the years have deepened rather than resolved the debate.',
    theories: [
      'A covert nuclear test (suspicion has centred on a possible Israeli–South African collaboration) — favoured by many analysts and later document releases.',
      'A non-nuclear instrument artifact — the official US panel’s ambiguous conclusion at the time.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved at the level of public evidence. The balance of later analysis leans toward a real test, but it has never been officially confirmed.',
    sources: [
      'US Office of Science and Technology Policy panel report (1980)',
      'Declassified National Security Archive documents',
    ],
  },
  {
    id: 'cicada-3301',
    title: 'Cicada 3301',
    category: 'events',
    wikipedia: 'Cicada 3301',
    era: '2012–2014',
    location: {
      lat: 52.23,
      lng: 21.01,
      place: 'Online (with physical clues posted in cities worldwide)',
    },
    summary:
      'An anonymous organisation calling itself "3301" posted elaborate, escalating internet puzzles — spanning cryptography, steganography, data security, literature, and even physical posters with QR codes in cities on multiple continents — apparently to recruit codebreakers. Three annual rounds appeared, then it went quiet.',
    unexplained:
      'Who created the puzzles and why. No individual or group has been verifiably identified, and the recruiter’s true purpose is unknown.',
    theories: [
      'A recruitment effort by an intelligence agency, security firm, or private collective seeking talent — the common assumption, unproven.',
      'An alternate-reality game or ideological/cryptographic community project.',
    ],
    unsolvedMeaning:
      'Unresolved as to authorship and intent. This is a mystery of identity and motive in the digital age, not of nature; the puzzles themselves were largely solved.',
    sources: [
      'Archived 3301 puzzle materials and community write-ups',
      'Contemporary reporting (The Guardian, 2014)',
    ],
  },
  {
    id: 'toynbee-tiles',
    title: 'The Toynbee Tiles',
    category: 'events',
    wikipedia: 'Toynbee tiles',
    era: 'Since the 1980s',
    location: { lat: 39.95, lng: -75.16, place: 'Streets of US cities (especially Philadelphia)' },
    summary:
      'Hundreds of small, cryptic messages — typically reading some variant of "TOYNBEE IDEA / IN MOVIE 2001 / RESURRECT DEAD / ON PLANET JUPITER" — have been found embedded in the asphalt of streets across the US and parts of South America since the 1980s.',
    unexplained:
      'Who created the tiles and what the message means. The embedding method (using layered materials that cars press into the road) is understood; the maker’s identity and intent are not confirmed.',
    theories: [
      'The work of a single reclusive Philadelphia individual identified circumstantially by the documentary "Resurrect Dead" — strongly suggested, never confirmed by the person.',
      'Later tiles are likely copycats, complicating attribution.',
    ],
    unsolvedMeaning:
      'Probably traceable to a known individual but not confirmed, with copycats muddying the record. A mystery of authorship rather than of phenomenon.',
    sources: [
      '"Resurrect Dead: The Mystery of the Toynbee Tiles" (2011)',
      'Tile-tracking community archives',
    ],
  },
  // ── Unexplained phenomena ────────────────────────────────────────────────────
  {
    id: 'taos-hum',
    title: 'The Taos Hum',
    category: 'phenomena',
    wikipedia: 'The Hum',
    era: 'Reported since the early 1990s',
    location: { lat: 36.407, lng: -105.573, place: 'Taos, New Mexico' },
    summary:
      'A fraction of residents around Taos report a persistent low-frequency hum, likened to a distant idling diesel engine. A 1993 University of New Mexico investigation surveyed residents and took acoustic measurements but could not isolate an external source matching what "hearers" described.',
    unexplained:
      'Whether the hum has an external acoustic source at all. Microphones did not reliably capture a signal corresponding to what hearers perceive, yet hearers’ reports are consistent.',
    theories: [
      'Low-frequency environmental or industrial noise below the detection threshold used.',
      'Otoacoustic emissions or heightened individual sensitivity to low frequencies (a perceptual cause).',
      'The "Hum" is reported worldwide (Bristol, Windsor), suggesting a general phenomenon.',
    ],
    unsolvedMeaning:
      'Real reports, ambiguous source. People genuinely hear something; whether the cause is external sound or a perceptual effect is unresolved — not supernatural.',
    sources: [
      'University of New Mexico Taos Hum study (1993)',
      'Glen MacPherson’s World Hum Database',
    ],
  },
  {
    id: 'wow-signal',
    title: 'The Wow! Signal',
    category: 'phenomena',
    wikipedia: 'Wow! signal',
    era: '15 August 1977',
    location: {
      lat: 40.07,
      lng: -83.073,
      place: 'Big Ear Radio Telescope, Ohio (signal from Sagittarius)',
    },
    summary:
      'Ohio State University’s Big Ear telescope recorded a strong, 72-second narrowband radio burst near the hydrogen line while scanning Sagittarius. The signal matched many expected hallmarks of a non-terrestrial point source. Astronomer Jerry Ehman circled the printout reading "6EQUJ5" and wrote "Wow!"',
    unexplained:
      'The signal’s source. It was never detected again despite repeated searches, and no confirmed natural or artificial origin has been established.',
    theories: [
      'A natural astrophysical source (e.g., scintillation of a background source) — possible but unconfirmed.',
      'Reflected terrestrial interference — considered unlikely given the frequency and tracking.',
      'A 2017 hydrogen-cloud/comet hypothesis was proposed but is widely regarded as not fitting the data.',
    ],
    unsolvedMeaning:
      'Genuinely unexplained — and honestly so. There is no confirmed cause and, because it never repeated, possibly never will be. This is "we do not know," not "it was aliens."',
    sources: ['Ehman, "The Big Ear Wow! Signal" retrospective', 'NAAPO records'],
  },
  {
    id: 'ball-lightning',
    title: 'Ball Lightning',
    category: 'phenomena',
    wikipedia: 'Ball lightning',
    era: 'Reported for centuries',
    location: {
      lat: 50.577,
      lng: -3.843,
      place: 'Reported worldwide; notable 1638 case at Widecombe, England',
    },
    summary:
      'Luminous, roughly spherical objects occasionally reported during thunderstorms, lasting seconds and sometimes passing through windows or along surfaces before vanishing or bursting. Eyewitness accounts span centuries, and a 2014 Chinese study captured a natural occurrence’s spectrum by chance.',
    unexplained:
      'A complete, accepted physical mechanism. Ball lightning is rare, unpredictable, and short-lived, making it extraordinarily hard to study under controlled conditions.',
    theories: [
      'Vaporised soil minerals oxidising in air — supported by the 2014 spectrum showing silicon, iron, and calcium.',
      'Microwave/plasma cavity models and other electromagnetic explanations.',
    ],
    unsolvedMeaning:
      'A real phenomenon with no single confirmed mechanism. Recent measurements favour the vaporised-soil model, but the science is not closed — this is "real, partially explained."',
    sources: ['Cen, Yuan & Xue, Physical Review Letters (2014)', 'Reviews by Mark Stenhoff'],
  },
  {
    id: 'hessdalen-lights',
    title: 'The Hessdalen Lights',
    category: 'phenomena',
    wikipedia: 'Hessdalen lights',
    era: 'Peaked early 1980s; still recorded',
    location: { lat: 62.93, lng: 11.18, place: 'Hessdalen valley, Norway' },
    summary:
      'Recurring light phenomena — bright, sometimes hovering or fast-moving — observed in a remote Norwegian valley, especially in the early 1980s. Unusually for such reports, the lights have been the subject of sustained scientific monitoring (Project Hessdalen) with automated cameras and instruments.',
    unexplained:
      'A complete explanation for all observed events. Instruments have recorded real optical and sometimes radar/field signals, but no single mechanism accounts for the full range of sightings.',
    theories: [
      'Ionised gas/plasma, possibly involving dust or combustion of valley minerals.',
      'Piezoelectric effects from the local geology, or burning gases — partial explanations only.',
    ],
    unsolvedMeaning:
      'A genuinely observed phenomenon under active study, without a complete accepted explanation. Unusually well-instrumented for this category — not anecdote alone.',
    sources: [
      'Project Hessdalen (Østfold University College)',
      'Teodorani, peer-reviewed monitoring reports',
    ],
  },
  {
    id: 'marfa-lights',
    title: 'The Marfa Lights',
    category: 'phenomena',
    wikipedia: 'Marfa lights',
    era: 'Reported since the late 19th century',
    location: { lat: 30.31, lng: -103.94, place: 'near Marfa, Texas, USA' },
    summary:
      'Distant glowing lights occasionally seen at night southeast of Marfa, Texas, looking toward the desert. They appear to flicker, split, and move. A viewing platform on US-67 now caters to spectators.',
    unexplained:
      'Whether any residual sightings have an exotic cause once ordinary ones are removed — believers maintain some lights predate car traffic.',
    theories: [
      'Headlights of vehicles on distant highways plus atmospheric refraction (mirage layering) — a 2004 student study reproduced the effect convincingly.',
      'Mirages of distant campfires or town lights in earlier eras.',
    ],
    unsolvedMeaning:
      'Largely explained as headlights and atmospheric optics, with enthusiasts disputing the residue. This sits near the "likely explained, not everyone convinced" end of the spectrum.',
    sources: [
      'University of Texas at Dallas physics students’ field study (2004)',
      'Texas Department of Transportation viewing-area notes',
    ],
  },
  {
    id: 'naga-fireballs',
    title: 'The Naga Fireballs',
    category: 'phenomena',
    wikipedia: 'Naga fireballs',
    era: 'Reported for decades (annually)',
    location: { lat: 17.87, lng: 102.74, place: 'Mekong River, Nong Khai, Thailand' },
    summary:
      'Reddish glowing orbs are reported rising silently from the Mekong River, particularly around the end of Buddhist Lent in October, drawing large crowds along the Thai–Lao border.',
    unexplained:
      'The physical source of the orbs. Reports are consistent and seasonal, but a definitive, measured cause has not been established.',
    theories: [
      'Combustion of flammable gases (methane/phosphine) released from riverbed sediment — the leading natural explanation.',
      'Human-made: a contested Thai documentary suggested tracer rounds fired from the Lao side; locals dispute this.',
    ],
    unsolvedMeaning:
      'Probably explainable by either natural gas combustion or human activity, but not definitively measured. A real, repeatable, but under-instrumented phenomenon.',
    sources: [
      'Thai scientific commentary (incl. Jessada Denduangboripant)',
      'Regional reporting on the annual event',
    ],
  },
  {
    id: '52-hertz-whale',
    title: 'The 52-Hertz Whale',
    category: 'phenomena',
    wikipedia: '52-hertz whale',
    era: 'Detected since 1989',
    location: { lat: 40.0, lng: -150.0, place: 'North Pacific Ocean' },
    summary:
      'Hydrophone arrays have tracked a whale whose calls occur at an unusually high ~52 Hz — far above the ~10–40 Hz of blue and fin whales. The calls have been recorded across the North Pacific for decades, migrating seasonally.',
    unexplained:
      'The species and biology behind the unusual frequency. The animal has never been seen, so whether it is a hybrid, a malformed individual, or a member of an unrecognised population is unknown.',
    theories: [
      'A hybrid blue/fin whale, whose anatomy could produce an atypical call frequency.',
      'A blue or fin whale with a deformity or simply an outlier — the calls’ pattern is otherwise whale-like.',
    ],
    unsolvedMeaning:
      'The recordings are unambiguously real; what is unresolved is the animal’s identity. The popular "world’s loneliest whale" framing is sentiment, not established fact.',
    sources: [
      'Watkins et al., Deep-Sea Research (2004)',
      'Woods Hole Oceanographic Institution recordings',
    ],
  },
  {
    id: 'tabbys-star',
    title: "Tabby's Star (KIC 8462852)",
    category: 'phenomena',
    wikipedia: "Tabby's Star",
    era: 'Anomaly reported 2015',
    location: {
      lat: 41.31,
      lng: -72.93,
      place: 'Star in Cygnus (studied from Yale and worldwide)',
    },
    summary:
      'A star monitored by the Kepler space telescope showed irregular, sometimes deep dips in brightness that did not fit a normal transiting planet. Citizen scientists flagged the anomaly; the star briefly became famous when an "alien megastructure" was floated as one (long-shot) possibility.',
    unexplained:
      'The precise cause of the irregular dimming. The dips are real and unusual in shape and timing, ruling out a simple planet.',
    theories: [
      'Uneven clouds of circumstellar dust — strongly supported, because the dimming is wavelength-dependent (a solid object would block all colours equally).',
      'Swarms of disrupted comets or debris.',
      'The "alien megastructure" idea has been effectively disfavoured by the dust evidence.',
    ],
    unsolvedMeaning:
      'Most likely circumstellar dust, with details still being worked out. A good example of an anomaly that drew sensational ideas but points to natural astrophysics — "we do not know exactly, and it is not aliens."',
    sources: ['Boyajian et al., MNRAS (2016)', 'Deeg et al. follow-up photometry'],
  },
  {
    id: 'oumuamua',
    title: 'ʻOumuamua',
    category: 'phenomena',
    wikipedia: 'ʻOumuamua',
    era: 'October 2017',
    location: { lat: 20.71, lng: -156.25, place: 'Detected from Haleakalā Observatory, Hawaii' },
    summary:
      'The first confirmed interstellar object detected passing through the Solar System. It was small, highly elongated or disc-like, tumbling, and — unusually — showed a slight non-gravitational acceleration as it departed, without the visible gas-and-dust coma a normal comet would display.',
    unexplained:
      'The cause of its non-gravitational acceleration despite no obvious outgassing, and its true shape and composition. It was discovered on its way out and is now too far to study.',
    theories: [
      'Outgassing of exotic, hard-to-see ices (such as hydrogen or nitrogen) provided gentle thrust — the leading natural explanation.',
      'A fragment of a nitrogen-ice "exo-Pluto." (A radiation-pressure "alien probe" idea exists but is a fringe minority view.)',
    ],
    unsolvedMeaning:
      'A natural interstellar object whose propulsion mechanism is debated, not evidence of alien technology. The data are simply too limited because it was caught on the way out.',
    sources: ['Meech et al., Nature (2017)', "'Oumuamua ISSI Team, Nature Astronomy (2019)"],
  },
  {
    id: 'sailing-stones',
    title: 'The Sailing Stones of Racetrack Playa',
    category: 'phenomena',
    wikipedia: 'Sailing stones',
    era: 'Puzzle from early 20th c.; solved 2014',
    location: { lat: 36.681, lng: -117.562, place: 'Racetrack Playa, Death Valley, California' },
    summary:
      'On a dry lakebed in Death Valley, rocks weighing up to hundreds of kilograms leave long trails as if they had slid across the mud — yet no one had ever seen them move. For decades the motion was a genuine geological puzzle.',
    unexplained:
      'Essentially nothing now — this entry is included deliberately as a foil. The puzzle was definitively solved.',
    theories: [
      'In 2014, time-lapse cameras and GPS-tagged rocks captured the mechanism directly: thin "windowpane" ice sheets form on a shallow flooded playa, then break up on sunny mornings and, pushed by light wind, shove the embedded rocks along the soft mud.',
    ],
    unsolvedMeaning:
      'Solved. Kept in the archive on purpose: it shows that some long-standing "mysteries" do get fully explained with patient measurement — the right outcome, and the standard the genuinely-open cases are measured against.',
    sources: ['Norris et al., PLOS ONE (2014)', 'Scripps Institution of Oceanography field study'],
  },
  {
    id: 'the-bloop',
    title: 'The Bloop',
    category: 'phenomena',
    wikipedia: 'Bloop',
    era: 'Recorded 1997; attributed 2000s',
    location: {
      lat: -50.0,
      lng: -100.0,
      place: 'South Pacific Ocean (off southern South America)',
    },
    summary:
      'An extraordinarily powerful ultra-low-frequency underwater sound was recorded in 1997 by NOAA hydrophones, loud enough to be picked up by sensors thousands of kilometres apart. Its "biological-sounding" profile briefly fuelled sea-monster speculation.',
    unexplained:
      'Little, now — another deliberate foil. The leading interpretation is well-supported.',
    theories: [
      'Icequakes: the sound matches the signature of large icebergs cracking and fracturing as they scrape the seabed near Antarctica — NOAA’s attribution after recording many similar "icequake" events.',
    ],
    unsolvedMeaning:
      'Effectively explained as icequakes, not biology. Included to make the point honestly: a spooky, "biological" sound turned out to be ordinary geophysics once more data arrived.',
    sources: [
      'NOAA Pacific Marine Environmental Laboratory acoustics program',
      'NOAA Vents Program iceberg recordings',
    ],
  },
  // ════ HISTORY · lost people, fleets, treasures & tombs ═══════════════════════
  {
    id: 'legio-ix-hispana',
    title: 'The Lost Ninth Legion (Legio IX Hispana)',
    category: 'disappearances',
    wikipedia: 'Legio IX Hispana',
    era: 'Last firmly attested c. 108 CE',
    location: { lat: 53.96, lng: -1.08, place: 'Britain (last attested at York / Eboracum)' },
    summary:
      'A veteran Roman legion well documented across the Republic and early Empire. Its last securely dated inscription is from around 108 CE at York, after which it vanishes from the record. A popular legend holds that it marched north into Caledonia and was annihilated.',
    unexplained:
      'When, where, and how the legion ceased to exist. The "destroyed in Scotland" story is romantic but unproven; scattered later evidence complicates every account.',
    theories: [
      'Disbanded or destroyed somewhere in the eastern Empire (e.g. a Jewish revolt or a Parthian/Armenian war) — supported by tile-stamps placing the legion at Nijmegen after Britain.',
      'Lost in an unrecorded northern British conflict — the popular but evidence-poor version.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved as to its end, but the dramatic "wiped out in Scotland" tale is likely a myth. This is "we lost track of it," not "it mysteriously evaporated."',
    sources: [
      'Roman epigraphic record (RIB, Nijmegen tile-stamps)',
      'Duncan Campbell, scholarship on the Ninth',
    ],
  },
  {
    id: 'ark-of-the-covenant',
    title: 'The Ark of the Covenant',
    category: 'disappearances',
    wikipedia: 'Ark of the Covenant',
    era: 'Vanishes from record by 587 BCE',
    location: { lat: 31.778, lng: 35.235, place: 'Jerusalem (last placed in the First Temple)' },
    summary:
      'The gold-covered chest described in the Hebrew Bible as housing the tablets of the Law. It is last clearly placed in Solomon’s Temple; after the Babylonian destruction of Jerusalem in 587 BCE it is never mentioned as recovered.',
    unexplained:
      'What became of it. No contemporary record describes its fate at the fall of the First Temple, and no physical trace has ever been authenticated.',
    theories: [
      'Looted or destroyed by the Babylonians along with the Temple’s other treasures — the most prosaic and likely outcome.',
      'Hidden before the conquest (traditions point to various sites); the Ethiopian claim at Axum is unverifiable.',
    ],
    unsolvedMeaning:
      'Most likely lost or destroyed in antiquity, with no evidence either way. Its "location" is a matter of faith and legend, not recoverable archaeology.',
    sources: ['Hebrew Bible (1 Kings, 2 Maccabees)', 'Archaeology of the First Temple period'],
  },
  {
    id: 'amber-room',
    title: 'The Amber Room',
    category: 'disappearances',
    wikipedia: 'Amber Room',
    era: 'Looted 1941; lost 1945',
    location: {
      lat: 54.71,
      lng: 20.51,
      place: 'Königsberg (Kaliningrad), Russia — last documented',
    },
    summary:
      'An opulent chamber panelled in amber, gold leaf, and mirrors, gifted to Russia by Prussia and installed near St Petersburg. Nazi forces looted it in 1941 and displayed it at Königsberg Castle; it was last documented there in 1945 amid the city’s destruction.',
    unexplained:
      'Whether it survived the war and, if so, where it is. No verified fragment of the original has ever resurfaced.',
    theories: [
      'Destroyed in the fire/bombing of Königsberg Castle in 1944–45 — the explanation most historians favour.',
      'Crated and hidden (a mine, a shipwreck, a bunker) — endlessly searched, never found.',
    ],
    unsolvedMeaning:
      'Probably destroyed, never confirmed. A faithful reconstruction now exists; the original’s fate sits at "likely lost to fire, not proven."',
    sources: ['Soviet and German wartime records', 'Catherine Palace reconstruction documentation'],
  },
  {
    id: 'princes-in-the-tower',
    title: 'The Princes in the Tower',
    category: 'disappearances',
    wikipedia: 'Princes in the Tower',
    era: '1483',
    location: { lat: 51.508, lng: -0.0759, place: 'Tower of London, England' },
    summary:
      'Edward V and his younger brother Richard, the sons of Edward IV, were lodged in the Tower of London in 1483 as their uncle took the throne as Richard III. They were seen less and less, then not at all. Bones found in 1674 were reburied as theirs but never conclusively tested.',
    unexplained:
      'Whether the boys were murdered, by whom, and when. No body has been positively identified, and the contemporary record is partisan on all sides.',
    theories: [
      'Murdered on Richard III’s orders — the traditional view, though much of the evidence is later Tudor narrative.',
      'Killed by another party (e.g. the Duke of Buckingham or Henry VII’s faction), or one/both survived — minority positions, unproven.',
    ],
    unsolvedMeaning:
      'Most historians believe the princes were murdered, but the culprit and even the fact of death are not proven. A genuine cold case of the 15th century.',
    sources: [
      'Contemporary chronicles (Crowland, Mancini)',
      'The 1674 Tower bones (untested for DNA)',
    ],
  },
  {
    id: 'franklin-expedition',
    title: "Franklin's Lost Expedition",
    category: 'disappearances',
    wikipedia: "Franklin's lost expedition",
    era: '1845–1848',
    location: { lat: 68.5, lng: -98.0, place: 'King William Island, Canadian Arctic' },
    summary:
      'Sir John Franklin’s two ships, HMS Erebus and Terror, and their 129 men vanished while seeking the Northwest Passage. After more than a century of searches, the wrecks were finally found — Erebus in 2014 and Terror in 2016 — broadly where Inuit testimony had long indicated.',
    unexplained:
      'The exact sequence of the disaster: why the ships were abandoned, the order of events, and the full role of cold, starvation, scurvy, lead exposure, and reported cannibalism.',
    theories: [
      'Ice entrapment, then a desperate overland retreat that killed everyone — the established outline, now supported by the wreck sites and Inuit accounts.',
      'Lead poisoning from tinned food or the water system contributed — debated in extent.',
    ],
    unsolvedMeaning:
      'Largely resolved in outline (the ships are found; they all died), with the precise human sequence still being reconstructed. A case where patient archaeology and respect for Inuit testimony cracked most of it.',
    sources: [
      'Parks Canada underwater archaeology (2014–present)',
      'Inuit oral history; McClintock/Rae 19th-c. searches',
    ],
  },
  {
    id: 'lost-army-of-cambyses',
    title: 'The Lost Army of Cambyses',
    category: 'disappearances',
    wikipedia: 'Cambyses II',
    era: 'c. 525 BCE',
    location: { lat: 25.5, lng: 25.5, place: 'Western Desert, Egypt (toward the Siwa Oasis)' },
    summary:
      'The Greek historian Herodotus reports that the Persian king Cambyses II sent 50,000 soldiers across the Egyptian desert to attack the oracle at Siwa, and that the entire army was buried by a catastrophic sandstorm and never seen again.',
    unexplained:
      'Whether the event happened at all, and if so where the army lies. Herodotus is essentially the only source, writing decades later.',
    theories: [
      'A genuine military disaster in the desert — possible, but the round number and lone source invite scepticism.',
      'A legend or exaggeration; sensational modern "discoveries" of the army have been debunked or unverified.',
    ],
    unsolvedMeaning:
      'Possibly more legend than event. The honest position is that we cannot confirm it occurred, let alone locate it — "unverified ancient claim," not a pinpointed lost army.',
    sources: [
      'Herodotus, Histories III',
      'Critical assessments by Egyptologists of "found army" claims',
    ],
  },
  {
    id: 'tomb-of-genghis-khan',
    title: 'The Tomb of Genghis Khan',
    category: 'disappearances',
    wikipedia: 'Genghis Khan',
    era: 'Hidden 1227',
    location: { lat: 48.5, lng: 109.0, place: 'Khentii Mountains region, Mongolia (presumed)' },
    summary:
      'The founder of the Mongol Empire died in 1227 and, by tradition, was buried in secret. Legend says the burial party killed those who witnessed it and that horses were driven over the grave to erase all trace; the sacred mountain Burkhan Khaldun is the likeliest region.',
    unexplained:
      'The precise location of the grave. Mongolia restricts excavation of culturally sensitive areas, and the deliberate concealment leaves almost nothing to find.',
    theories: [
      'A hidden grave in the Khentii highlands near Burkhan Khaldun — the strongest regional candidate.',
      'Various other sites proposed; none confirmed, and many searches are discouraged on cultural grounds.',
    ],
    unsolvedMeaning:
      'Genuinely unknown by design. Unlike most mysteries, this one was intentionally created — the location was concealed on purpose and may never be (or be allowed to be) found.',
    sources: ['The Secret History of the Mongols', 'Archaeological surveys around Burkhan Khaldun'],
  },
  {
    id: 'tomb-of-cleopatra',
    title: 'The Tomb of Cleopatra',
    category: 'disappearances',
    wikipedia: 'Cleopatra',
    era: 'After 30 BCE',
    location: { lat: 30.94, lng: 29.52, place: 'Alexandria region (Taposiris Magna?), Egypt' },
    summary:
      'Cleopatra VII and Mark Antony were, by ancient accounts, buried together near Alexandria after their deaths in 30 BCE. Much of ancient Alexandria’s royal quarter now lies underwater or beneath the modern city, and the tomb has never been located.',
    unexplained:
      'Where the tomb is. The relevant coastline has subsided and been built over, and no inscription or structure has been tied to the burial.',
    theories: [
      'Within or beneath modern/submerged Alexandria — consistent with the sources but inaccessible.',
      'At the temple of Taposiris Magna west of the city, where excavations led by Kathleen Martínez continue — a hopeful lead, not confirmed.',
    ],
    unsolvedMeaning:
      'Genuinely lost, largely for geological reasons. The tomb very probably existed; finding it is a question of access and luck, not of whether it was real.',
    sources: ['Plutarch, Life of Antony', 'Taposiris Magna excavation reports'],
  },
  {
    id: 'tomb-of-alexander',
    title: 'The Tomb of Alexander the Great',
    category: 'disappearances',
    wikipedia: 'Tomb of Alexander the Great',
    era: 'Lost by late antiquity',
    location: { lat: 31.2, lng: 29.9, place: 'Alexandria, Egypt (location lost)' },
    summary:
      'Alexander’s body was famously interred in Alexandria in a tomb known as the Soma, visited by Roman emperors including Augustus and Caracalla. References to it fade after the 3rd–4th centuries CE, and its location was forgotten.',
    unexplained:
      'Where the tomb stood and what became of the body. Dozens of searches over centuries have produced no confirmed find.',
    theories: [
      'Destroyed or buried under later Alexandria during riots, earthquakes, and rebuilding — the likeliest fate.',
      'Numerous claimed locations (Siwa, Venice via St Mark’s relics, etc.) — none substantiated.',
    ],
    unsolvedMeaning:
      'Genuinely lost. A real, once-famous monument whose site simply dropped out of the record — "we know it existed; we have no idea where it is now."',
    sources: [
      'Strabo and Roman-era accounts of the Soma',
      'Surveys of ancient Alexandria’s topography',
    ],
  },
  {
    id: 'honjo-masamune',
    title: 'The Honjō Masamune',
    category: 'disappearances',
    wikipedia: 'Masamune',
    era: 'Lost 1945–46',
    location: { lat: 35.68, lng: 139.76, place: 'Tokyo, Japan — surrendered to occupation forces' },
    summary:
      'One of the finest surviving swords by the master smith Masamune, a designated Japanese national treasure passed down by the Tokugawa shoguns. In the postwar disarmament, the family surrendered it (with other swords) to US occupation authorities in 1945–46, and it was never traced again.',
    unexplained:
      'Where the sword is. The receiving officer’s name on the handover (recorded as "Coldy Bimore") has never been reliably identified, and the blade has not resurfaced.',
    theories: [
      'Taken home as a war souvenir by a US serviceman, now in unwitting private hands — the leading possibility.',
      'Lost or destroyed in the chaotic postwar period.',
    ],
    unsolvedMeaning:
      'Genuinely missing, with a plausible mundane explanation (an unrecorded private collection). Recoverable in principle if it ever surfaces — a lost object, not an inexplicable one.',
    sources: ['Tokugawa family records', 'Japanese cultural-property loss registers'],
  },
  {
    id: 'harold-holt',
    title: 'The Disappearance of Harold Holt',
    category: 'disappearances',
    wikipedia: 'Harold Holt',
    era: 'December 1967',
    location: { lat: -38.3, lng: 144.62, place: 'Cheviot Beach, Victoria, Australia' },
    summary:
      'The serving Prime Minister of Australia went for a swim in rough surf at Cheviot Beach and was never seen again. A large search recovered no body, and he was presumed drowned. A coronial inquest was finally held decades later.',
    unexplained:
      'Strictly, only the absence of a body keeps it open. A 2005 inquest formally found accidental drowning by misadventure.',
    theories: [
      'Accidental drowning in dangerous surf — the official finding and overwhelmingly likely explanation.',
      'Fanciful claims (a faked death, defection to China by submarine) — wholly unsupported.',
    ],
    unsolvedMeaning:
      'Effectively resolved: he almost certainly drowned. Included to show how "no body" alone fuels conspiracy long after the evidence has spoken.',
    sources: ['Victorian Coroner’s 2005 finding', 'Contemporary search records'],
  },
  // ════ HISTORY · undeciphered scripts & inscriptions ══════════════════════════
  {
    id: 'proto-elamite',
    title: 'Proto-Elamite',
    category: 'ciphers',
    wikipedia: 'Proto-Elamite',
    era: 'c. 3100–2900 BCE',
    location: { lat: 32.19, lng: 48.25, place: 'Susa and the Iranian plateau' },
    summary:
      'One of the world’s oldest writing systems, found on over a thousand clay tablets from ancient Iran. Its numerical and accounting signs are partly understood, but the rest of the script has never been read.',
    unexplained:
      'The phonetic and lexical values of the non-numerical signs, and the underlying language. Scribal errors in the tablets and a lack of bilinguals frustrate decipherment.',
    theories: [
      'It records the Elamite language (or a related tongue) in a logo-numerical system — plausible but unconfirmed.',
      'High error rates suggest a young, unstandardised script, complicating analysis.',
    ],
    unsolvedMeaning:
      'Genuinely undeciphered beyond its numerals. A real script we can count in but cannot yet read — blocked by data, not effort.',
    sources: [
      'Cuneiform Digital Library Initiative (CDLI) Proto-Elamite corpus',
      'Jacob Dahl’s decipherment work',
    ],
  },
  {
    id: 'cascajal-block',
    title: 'The Cascajal Block',
    category: 'ciphers',
    wikipedia: 'Cascajal Block',
    era: 'c. 900 BCE (Olmec)',
    location: { lat: 18.0, lng: -96.1, place: 'Veracruz (Olmec heartland), Mexico' },
    summary:
      'A serpentine slab bearing 62 incised signs, reported in 2006 and dated to the Olmec period. If genuine and linguistic, it would be the earliest known writing in the Americas.',
    unexplained:
      'What it says — and even whether it is true writing. No other text in the same system is known, so there is nothing to compare it against.',
    theories: [
      'A genuine Olmec script recording language — the signs show patterning and reuse consistent with writing.',
      'A non-linguistic or ritual sign sequence; a minority also questions its archaeological context.',
    ],
    unsolvedMeaning:
      'Undeciphered, and its status as writing is unconfirmed. With a single unique artifact, decipherment is currently impossible — a true "no way to know yet."',
    sources: ['Rodríguez Martínez et al., Science (2006)', 'Mesoamerican epigraphy reviews'],
  },
  {
    id: 'singapore-stone',
    title: 'The Singapore Stone',
    category: 'ciphers',
    wikipedia: 'Singapore Stone',
    era: 'Possibly 10th–14th century',
    location: { lat: 1.287, lng: 103.851, place: 'Mouth of the Singapore River, Singapore' },
    summary:
      'A fragment of a large sandstone slab that once stood at the mouth of the Singapore River, bearing an undeciphered inscription. Most of the slab was blown up by colonial engineers in 1843; only a fragment survives in the National Museum of Singapore.',
    unexplained:
      'The language and content of the inscription. The script may be an old Indic-derived writing (Old Javanese or Sanskrit-influenced), but it has never been read.',
    theories: [
      'An Old Javanese or Sumatran inscription from a Srivijaya/Majapahit-era polity — the leading guess.',
      'Decipherment may be permanently impossible because most of the text was destroyed.',
    ],
    unsolvedMeaning:
      'Likely unsolvable — not just undeciphered but largely destroyed. A sober reminder that some "mysteries" are gaps blasted into the record.',
    sources: ['National Museum of Singapore', 'Epigraphic studies of Southeast Asian scripts'],
  },
  {
    id: 'shugborough-inscription',
    title: 'The Shugborough Inscription',
    category: 'ciphers',
    wikipedia: 'Shugborough inscription',
    era: '18th century',
    location: { lat: 52.8, lng: -2.0, place: 'Shugborough Hall, Staffordshire, England' },
    summary:
      'A sequence of letters — O U O S V A V V, flanked by D and M — carved beneath a relief on an 18th-century garden monument. Despite attention from cryptographers (and breathless treasure speculation), no reading has ever been confirmed.',
    unexplained:
      'What the letters stand for. They are almost certainly an initialism, but with no key and a single short string, candidate expansions cannot be verified.',
    theories: [
      'A private memorial initialism (e.g. a Latin devotional phrase for a deceased spouse) — the most sober reading.',
      'Romantic "Holy Grail / Templar" treasure claims — unsupported.',
    ],
    unsolvedMeaning:
      'Probably a personal, sentimental inscription whose key died with its makers — likely unsolvable, and almost certainly not a treasure map.',
    sources: [
      'Shugborough Estate (National Trust) records',
      'Cryptographic analyses of the cipher',
    ],
  },
  {
    id: 'cretan-hieroglyphs',
    title: 'Cretan Hieroglyphs',
    category: 'ciphers',
    wikipedia: 'Cretan hieroglyphs',
    era: 'c. 2100–1700 BCE',
    location: { lat: 35.3, lng: 25.1, place: 'Crete (Minoan sites), Greece' },
    summary:
      'A Minoan writing system found on seals, clay bars, and tablets, distinct from and partly overlapping the later Linear A. The corpus is small and the signs are often pictographic.',
    unexplained:
      'The language and the readings of the signs. As with Linear A, there is no bilingual and the underlying Minoan language is unknown.',
    theories: [
      'A logo-syllabic script recording the same (unknown) Minoan language as Linear A.',
      'Some signs may be administrative or heraldic rather than fully phonetic.',
    ],
    unsolvedMeaning:
      'Genuinely undeciphered, and entangled with the broader unread state of Minoan writing. Decipherment awaits more text or a bilingual.',
    sources: ['CHIC (Corpus Hieroglyphicarum Inscriptionum Cretae)', 'Aegean script scholarship'],
  },
  {
    id: 'vinca-symbols',
    title: 'The Vinča Symbols',
    category: 'ciphers',
    wikipedia: 'Vinča symbols',
    era: 'c. 5300 BCE',
    location: { lat: 44.76, lng: 20.62, place: 'Vinča (Danube basin), Serbia' },
    summary:
      'Abstract marks incised on Neolithic pottery and figurines across southeastern Europe, sometimes promoted as the "oldest writing in the world." They predate Mesopotamian cuneiform by millennia.',
    unexplained:
      'Whether the marks constitute writing at all. They show some recurring forms but lack the length, structure, and linguistic patterning expected of true script.',
    theories: [
      'Proto-writing or a symbol system (ownership marks, religious symbols) rather than language — the mainstream view.',
      'A minority claims an early true script; most scholars are unconvinced.',
    ],
    unsolvedMeaning:
      'Most likely NOT writing in the full sense, so "undeciphered" may be the wrong frame. An honest example of a "mystery" that is partly a category error.',
    sources: ['Shan Winn’s sign catalogue', 'Critiques in early-writing scholarship'],
  },
  {
    id: 'quipu',
    title: 'The Inca Quipu (Khipu)',
    category: 'ciphers',
    wikipedia: 'Quipu',
    era: 'c. 1400–1532 CE (and earlier)',
    location: { lat: -13.52, lng: -71.97, place: 'Andes (Inca Empire), Peru' },
    summary:
      'Knotted-cord devices used across the Andes to record information. The decimal, accounting-style khipu are largely understood: knot type and position encode numbers. But some khipu seem to carry non-numerical content.',
    unexplained:
      'Whether certain "narrative" khipu encode language — names, histories, or texts — and if so how. No bilingual khipu-to-Spanish key survives intact.',
    theories: [
      'Numerical khipu are decoded; some khipu additionally encode categorical or possibly phonetic data — an active research frontier.',
      'A few studies tie specific cords to village names or census categories, hinting at writing-like use.',
    ],
    unsolvedMeaning:
      'Partly solved (the numbers), partly open (possible narrative encoding). A rare case where decipherment is actively, measurably advancing.',
    sources: ['Harvard Khipu Database Project', 'Gary Urton’s khipu research'],
  },
  // ════ HISTORY · unexplained events, sites & identities ═══════════════════════
  {
    id: 'jack-the-ripper',
    title: 'Jack the Ripper',
    category: 'events',
    wikipedia: 'Jack the Ripper',
    era: '1888',
    location: { lat: 51.516, lng: -0.06, place: 'Whitechapel, London, England' },
    summary:
      'An unidentified serial killer murdered and mutilated at least five women (the "canonical five") in London’s Whitechapel district in 1888. The case generated taunting letters to the press and one of the most famous unsolved investigations in history.',
    unexplained:
      'The killer’s identity. Police files name several suspects, but none was charged, and the surviving evidence is fragmentary and contaminated by 130 years of handling.',
    theories: [
      'A local man with some anatomical knowledge — the broad contemporary profile, never pinned to an individual.',
      'Periodic "definitive" identifications (including DNA claims from a shawl) are widely disputed on chain-of-custody and method.',
    ],
    unsolvedMeaning:
      'Genuinely unsolved, and likely permanently: the evidence base is too degraded for confident identification. Beware confident "case closed" books.',
    sources: ['Metropolitan Police / City of London case files', 'Contemporary press archives'],
  },
  {
    id: 'man-in-the-iron-mask',
    title: 'The Man in the Iron Mask',
    category: 'events',
    wikipedia: 'Man in the Iron Mask',
    era: 'c. 1669–1703',
    location: {
      lat: 48.853,
      lng: 2.369,
      place: 'France (held at Pignerol, the Bastille, and elsewhere)',
    },
    summary:
      'A state prisoner held for decades under Louis XIV, moved between fortresses by the jailer Saint-Mars and required to keep his face covered (with a velvet mask; the "iron" is Voltaire’s embellishment). He died in the Bastille in 1703, his identity carefully hidden.',
    unexplained: 'Who he was and why his identity warranted such extraordinary secrecy.',
    theories: [
      'A valet named Eustache Dauger, possibly knowing a dangerous state secret — the leading scholarly candidate from the prison correspondence.',
      'Royal/political identities (a disgraced noble, an illegitimate relative) — popularised by fiction, unproven.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved, though the documentary trail favours a relatively obscure prisoner over the romantic "secret royal." The legend outran the evidence.',
    sources: ['Saint-Mars prison correspondence', 'Historians of the reign of Louis XIV'],
  },
  {
    id: 'kaspar-hauser',
    title: 'Kaspar Hauser',
    category: 'events',
    wikipedia: 'Kaspar Hauser',
    era: '1828–1833',
    location: { lat: 49.45, lng: 11.08, place: 'Nuremberg, Bavaria, Germany' },
    summary:
      'A teenage boy appeared in Nuremberg in 1828 claiming to have grown up in total isolation in a dark cell. He became a European sensation, and died in 1833 of a stab wound he said was inflicted by a stranger.',
    unexplained:
      'His true origins and the circumstances of his death — whether the fatal wound was murder or a self-inflicted bid for attention that went wrong.',
    theories: [
      'An impostor/fantasist who staged his own story (and possibly his own wounding) — supported by some inconsistencies.',
      'A genuine victim of confinement; the "hidden prince of Baden" theory is disfavoured by inconclusive later DNA tests.',
    ],
    unsolvedMeaning:
      'Both his origin and his death remain genuinely unresolved, with credible cases for fraud and for victimhood. The evidence does not settle it.',
    sources: ['Anselm von Feuerbach’s contemporary account', 'Later DNA analyses (inconclusive)'],
  },
  {
    id: 'late-bronze-age-collapse',
    title: 'The Late Bronze Age Collapse',
    category: 'events',
    wikipedia: 'Late Bronze Age collapse',
    era: 'c. 1200–1150 BCE',
    location: { lat: 35.0, lng: 30.0, place: 'Eastern Mediterranean & Near East' },
    summary:
      'Within roughly a half-century, a network of advanced civilizations — Mycenaean Greece, the Hittite Empire, and others — collapsed or contracted sharply. Cities were destroyed, trade networks failed, and writing systems were lost in some regions.',
    unexplained:
      'The cause. The collapse is well documented, but no single trigger accounts for the simultaneous failure across such a wide, interconnected region.',
    theories: [
      'A "perfect storm" of drought, famine, earthquakes, internal revolt, and the raids of the "Sea Peoples" — the leading multi-causal model.',
      'Single-cause explanations (just the Sea Peoples, or just climate) are now generally seen as insufficient.',
    ],
    unsolvedMeaning:
      'A real, dramatic collapse whose cause is genuinely debated — most likely a cascade of interacting stresses rather than one event. "Documented effect, contested cause."',
    sources: ['Eric Cline, "1177 B.C." (2014)', 'Paleoclimate and destruction-layer archaeology'],
  },
  {
    id: 'antikythera-mechanism',
    title: 'The Antikythera Mechanism',
    category: 'events',
    wikipedia: 'Antikythera mechanism',
    era: 'c. 2nd century BCE',
    location: { lat: 35.88, lng: 23.3, place: 'Antikythera shipwreck, Aegean Sea, Greece' },
    summary:
      'A corroded lump of bronze recovered from a Roman-era shipwreck in 1901 turned out to be an intricate geared device — an analog computer that modelled the movements of the Sun, Moon, and planets and predicted eclipses. Its sophistication has no known peer for over a millennium afterward.',
    unexplained:
      'Who built it, where, and why nothing comparable survives. Its astronomical function has been brilliantly reconstructed; its origin and the apparent loss of the technology have not.',
    theories: [
      'Made in a Greek scientific tradition (Rhodes/Corinth, perhaps linked to Hipparchus or Archimedes’ heirs) — strongly suggested, not pinned down.',
      'Such devices may have been rare luxury instruments whose knowledge simply was not transmitted.',
    ],
    unsolvedMeaning:
      'Function solved, provenance open. A triumph of decipherment that leaves a genuine historical puzzle: how such precision existed, then vanished from the record.',
    sources: ['Antikythera Mechanism Research Project', 'Freeth et al., Nature (2006, 2021)'],
  },
  {
    id: 'hanging-gardens-of-babylon',
    title: 'The Hanging Gardens of Babylon',
    category: 'events',
    wikipedia: 'Hanging Gardens of Babylon',
    era: 'Described c. 6th century BCE',
    location: { lat: 32.54, lng: 44.42, place: 'Babylon, Iraq (or possibly Nineveh)' },
    summary:
      'One of the Seven Wonders of the Ancient World, described by later Greek and Roman writers as a marvel of terraced, irrigated gardens. Yet no Babylonian text mentions them and no archaeological trace has been securely identified at Babylon.',
    unexplained:
      'Whether they existed as described and, if so, where. The wonder is known only from authors writing centuries later and far away.',
    theories: [
      'They existed at Babylon but their remains are unidentified or were destroyed.',
      'Stephanie Dalley’s theory: they were actually at Nineveh, built by the Assyrian king Sennacherib, and later misattributed.',
      'They are partly or wholly a literary embellishment.',
    ],
    unsolvedMeaning:
      'Genuinely uncertain even as to existence. The only Wonder whose very reality is in doubt — "famous, and possibly never built where we think, or at all."',
    sources: [
      'Classical sources (Strabo, Diodorus)',
      'Stephanie Dalley, "The Mystery of the Hanging Garden of Babylon" (2013)',
    ],
  },
  {
    id: 'plague-of-athens',
    title: 'The Plague of Athens',
    category: 'events',
    wikipedia: 'Plague of Athens',
    era: '430–426 BCE',
    location: { lat: 37.98, lng: 23.73, place: 'Athens, Greece' },
    summary:
      'An epidemic struck Athens during the Peloponnesian War, killing perhaps a quarter of the population (including the statesman Pericles) and helping to break Athenian power. Thucydides left a vivid clinical description as a survivor.',
    unexplained:
      'Which disease it was. Despite a detailed ancient account and some skeletal DNA work, the pathogen has never been settled.',
    theories: [
      'Candidates include typhoid fever (supported by a 2006 dental-pulp DNA study), typhus, smallpox, measles, and viral haemorrhagic fever — none conclusively confirmed.',
      'Ancient symptom descriptions don’t map cleanly onto a single modern disease.',
    ],
    unsolvedMeaning:
      'The event is firmly historical; the cause is genuinely undetermined. "Real epidemic, unidentified pathogen" — a limit of ancient and even modern evidence.',
    sources: [
      'Thucydides, History of the Peloponnesian War II',
      'Papagrigorakis et al., dental-pulp DNA study (2006)',
    ],
  },
  {
    id: 'green-children-of-woolpit',
    title: 'The Green Children of Woolpit',
    category: 'events',
    wikipedia: 'Green children of Woolpit',
    era: '12th century',
    location: { lat: 52.23, lng: 0.89, place: 'Woolpit, Suffolk, England' },
    summary:
      'Two medieval English chronicles report that two children with green-tinged skin appeared near the village of Woolpit, spoke an unknown language, and would at first eat only beans. The girl reportedly survived, lost her colour, and integrated; the boy died.',
    unexplained:
      'What, if anything, real lies behind the account. It survives only in two roughly contemporaneous chronicles, with all the embellishment that implies.',
    theories: [
      'A kernel of truth: malnourished or immigrant children (e.g. Flemish), the green tint due to dietary deficiency (chlorosis), the "unknown language" being foreign.',
      'A folk tale or moral allegory recorded as history.',
    ],
    unsolvedMeaning:
      'Probably an embellished account of something mundane, if anything at all. An honest reminder that medieval "records" sit on the border of history and folklore.',
    sources: [
      'Ralph of Coggeshall and William of Newburgh (12th c.)',
      'Folklore and medieval-history analyses',
    ],
  },
  {
    id: 'gobekli-tepe',
    title: 'Göbekli Tepe',
    category: 'events',
    wikipedia: 'Göbekli Tepe',
    era: 'c. 9500 BCE',
    location: { lat: 37.223, lng: 38.922, place: 'Şanlıurfa, southeastern Turkey' },
    summary:
      'A complex of monumental stone enclosures with carved T-shaped pillars, built by pre-pottery Neolithic people — before farming, cities, or writing. It overturned the assumption that monumental architecture required agricultural societies. It was also, strikingly, deliberately backfilled.',
    unexplained:
      'Its purpose, the beliefs it served, and why it was intentionally buried. The carvings are rich but we cannot read the worldview behind them.',
    theories: [
      'A ritual or ceremonial gathering site for hunter-gatherers — the leading interpretation.',
      'Why it was deliberately buried (ritual closure? preservation?) is genuinely unknown.',
    ],
    unsolvedMeaning:
      'A real, paradigm-shifting site whose function and burial are honestly unresolved. We know it matters; we cannot yet read what it meant.',
    sources: ['German Archaeological Institute excavations', 'Klaus Schmidt’s publications'],
  },
  {
    id: 'nazca-lines',
    title: 'The Nazca Lines',
    category: 'events',
    wikipedia: 'Nazca Lines',
    era: 'c. 500 BCE – 500 CE',
    location: { lat: -14.74, lng: -75.13, place: 'Nazca Desert, Peru' },
    summary:
      'Enormous geoglyphs — straight lines, geometric shapes, and stylised animals — etched into the Peruvian desert by removing surface stones. Many are best appreciated from the air, which long fuelled sensational speculation.',
    unexplained:
      'Their purpose. The makers (the Nazca culture) and method are well understood; why they made figures meant to be seen at such scale is not settled.',
    theories: [
      'Ritual pathways, water/fertility ceremonies, or astronomical/calendar markers — the mainstream, evidence-based candidates.',
      '"Alien runway" claims are pseudoarchaeology: the Nazca had the means and motive to make them from the ground.',
    ],
    unsolvedMeaning:
      'Who and how are answered; the precise purpose is genuinely open among several sober hypotheses. Not a mystery of impossibility — a mystery of meaning.',
    sources: [
      'Peruvian Ministry of Culture / UNESCO',
      'Archaeological studies (Reiche, Aveni, and others)',
    ],
  },
  {
    id: 'atlantis',
    title: 'Atlantis',
    category: 'events',
    wikipedia: 'Atlantis',
    era: 'Described c. 360 BCE',
    location: { lat: 36.14, lng: -5.35, place: 'Placed by Plato "beyond the Pillars of Heracles"' },
    summary:
      'An island civilization described by Plato in two dialogues as a powerful naval empire that sank into the sea in a single day and night. Plato presents it within a moral and political argument, not a travelogue.',
    unexplained:
      'Essentially nothing, archaeologically — this is another deliberate foil. There is no evidence of a real sunken advanced civilization matching the account.',
    theories: [
      'A philosophical allegory invented by Plato to illustrate his ideas about hubris and the ideal state — the overwhelming scholarly consensus.',
      'Possible faint inspiration from real events (e.g. the Minoan Thera eruption), heavily transformed.',
    ],
    unsolvedMeaning:
      'Almost certainly not a real lost place. Included precisely because it is the archetype of a "mystery" that endless searches keep alive despite the evidence pointing to invention.',
    sources: ['Plato, Timaeus and Critias', 'Mainstream classical scholarship on Plato’s myths'],
  },
  {
    id: 'oak-island-money-pit',
    title: 'The Oak Island Money Pit',
    category: 'events',
    wikipedia: 'Oak Island',
    era: 'Searched since 1795',
    location: { lat: 44.51, lng: -64.29, place: 'Oak Island, Nova Scotia, Canada' },
    summary:
      'Since 1795, treasure hunters have dug into a pit on a small Nova Scotian island, encountering apparent wooden platforms and "flood tunnels" said to protect buried riches. Generations of excavation (and several deaths) have followed; no treasure has ever been recovered.',
    unexplained:
      'Whether anything of value was ever buried there. After 200+ years, the central claim remains unverified.',
    theories: [
      'Natural geology: sinkholes in the underlying anhydrite/limestone and natural seepage explain the "pit" and "flood tunnels" — the leading scientific view.',
      'A human-made cache (pirate gold, Templar/Masonic treasure, Shakespeare manuscripts) — popular, but no supporting find in two centuries.',
    ],
    unsolvedMeaning:
      'Most likely a natural feature with no treasure — a self-perpetuating legend sustained by sunk-cost digging. The honest reading is "probably nothing there."',
    sources: ['Geological surveys of the island', 'Historical accounts of the excavations'],
  },
  {
    id: 'baghdad-battery',
    title: 'The Baghdad Battery',
    category: 'events',
    wikipedia: 'Baghdad Battery',
    era: 'Parthian/Sasanian era (c. 250 BCE – 650 CE)',
    location: { lat: 33.3, lng: 44.4, place: 'near Baghdad (Khujut Rabu), Iraq' },
    summary:
      'A set of clay jars containing a copper cylinder and an iron rod, sometimes claimed to be ancient electric batteries capable of generating a small voltage with an acidic electrolyte.',
    unexplained:
      'Their actual purpose. The "battery" reading is contested, and there is no evidence anyone in antiquity used them to produce electricity.',
    theories: [
      'Storage vessels for sacred scrolls (parchment that decayed, leaving residue and corrosion) — the explanation most archaeologists favour; similar scroll jars are known.',
      'A galvanic cell used for electroplating or medical/ritual tingling — popular but unsupported by any plated artifacts or texts.',
    ],
    unsolvedMeaning:
      'Probably not a battery at all. A good case where a sensational interpretation outran a likely mundane one — the honest answer leans to "scroll jar."',
    sources: [
      'Wilhelm König’s original 1938 description',
      'Critiques by archaeologists and conservators',
    ],
  },
  {
    id: 'sweating-sickness',
    title: 'The English Sweating Sickness',
    category: 'events',
    wikipedia: 'Sweating sickness',
    era: '1485–1551',
    location: { lat: 52.0, lng: -1.0, place: 'England (and briefly continental Europe)' },
    summary:
      'A terrifying epidemic disease that struck England in several waves, with sudden onset, drenching sweats, and often death within hours. It mostly spared the very young and old, disproportionately hit healthy adults, then vanished after 1551 and never returned.',
    unexplained:
      'What pathogen caused it. The disease’s rapid course and its complete disappearance leave no living example to study, and contemporary descriptions are imprecise by modern standards.',
    theories: [
      'A hantavirus (rodent-borne) — a frequently proposed candidate fitting some features.',
      'An unknown or now-extinct/altered viral or bacterial agent; relapsing fever and others have been suggested.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: a real, lethal, well-attested disease whose cause was never identified and which no longer exists to test. A true gap, not a legend.',
    sources: ['Tudor medical chronicles', 'Heyman et al. and other retrospective epidemiology'],
  },
  {
    id: 'tarim-mummies',
    title: 'The Tarim Mummies',
    category: 'events',
    wikipedia: 'Tarim mummies',
    era: 'c. 2000 BCE onward',
    location: { lat: 39.0, lng: 84.0, place: 'Tarim Basin, Xinjiang, China' },
    summary:
      'Naturally desiccated Bronze and Iron Age bodies preserved in the arid Tarim Basin, some with fair hair, woven tartan-like textiles, and "Western"-looking features. For decades this fuelled fierce debate about migrations of western peoples deep into East Asia.',
    unexplained:
      'Historically, their origins — but this is now largely answered, which is why the entry is honest about a moving target.',
    theories: [
      'A 2021 genome study found the earliest mummies were a genetically isolated, LOCAL population (descendants of Ancient North Eurasians), not recent migrants from the west — overturning the "lost Europeans" narrative.',
      'Their culture (textiles, dairying) was cosmopolitan even though their genes were local.',
    ],
    unsolvedMeaning:
      'Origins now largely resolved by ancient DNA. Included as a model case: a long-standing "mystery of vanished Westerners" that careful genetics turned into "indigenous population with borrowed culture."',
    sources: ['Zhang et al., Nature (2021)', 'Victor Mair’s textile and archaeological work'],
  },
  // ════ HISTORY · sky, climate & lost knowledge phenomena ══════════════════════
  {
    id: 'star-of-bethlehem',
    title: 'The Star of Bethlehem',
    category: 'phenomena',
    wikipedia: 'Star of Bethlehem',
    era: 'c. 7–4 BCE (if astronomical)',
    location: { lat: 31.705, lng: 35.2, place: 'Bethlehem (as described); an astronomical event' },
    summary:
      'The "star" that, in the Gospel of Matthew, led the Magi to Bethlehem. Astronomers and historians have long asked whether it corresponds to a real celestial event around the likely time of Jesus’s birth.',
    unexplained:
      'Whether it reflects an actual astronomical phenomenon and, if so, which one. The single brief textual source is theological, not observational.',
    theories: [
      'A planetary conjunction (e.g. Jupiter–Saturn in 7 BCE) or a triple conjunction — a popular naturalistic candidate.',
      'A comet or a nova; alternatively, a purely literary/theological symbol with no astronomical referent.',
    ],
    unsolvedMeaning:
      'Genuinely uncertain — possibly a real sky event, possibly a literary device. The honest position spans astronomy and the limits of a single ancient text.',
    sources: [
      'Gospel of Matthew',
      'Planetarium/astronomical retrocalculations; Colin Humphreys and others',
    ],
  },
  {
    id: 'miyake-event-774',
    title: 'The 774–775 Carbon-14 Spike',
    category: 'phenomena',
    wikipedia: '774–775 carbon-14 spike',
    era: '774–775 CE',
    location: {
      lat: 35.18,
      lng: 136.91,
      place: 'Recorded globally in tree rings (first identified in Japan)',
    },
    summary:
      'Tree rings worldwide record a sudden, sharp jump in radiocarbon (and beryllium-10 in ice cores) for the years 774–775 CE — far faster than ordinary variation. It was first reported by Fusa Miyake in 2012.',
    unexplained:
      'Originally the cause; now largely the frequency and risk. The spike is real and global, demanding an intense, brief burst of cosmic radiation.',
    theories: [
      'An extreme solar particle event — a giant solar flare/proton storm — is the leading explanation; a similar event today could cripple satellites and power grids.',
      'Alternatives (a nearby supernova, a comet) are considered less likely.',
    ],
    unsolvedMeaning:
      'Largely explained (a colossal solar storm), with open questions about how often such "Miyake events" occur — making it a rare "mystery that turned into a hazard warning."',
    sources: ['Miyake et al., Nature (2012)', 'Subsequent ice-core and tree-ring corroboration'],
  },
  {
    id: 'volcanic-winter-536',
    title: 'The Worst Year to Be Alive (536 CE)',
    category: 'phenomena',
    wikipedia: 'Volcanic winter of 536',
    era: '536–537 CE',
    location: {
      lat: 64.0,
      lng: -19.0,
      place: 'Global climate event (likely Icelandic / Central American eruptions)',
    },
    summary:
      'Contemporaries from the Mediterranean to China described a mysterious dimming of the Sun for 12–18 months beginning in 536 CE, with summer frosts, crop failures, and famine. It has been called the worst year in history to be alive.',
    unexplained:
      'Originally the cause of the dust veil; now chiefly which eruption(s) were responsible. The global dimming itself is firmly documented.',
    theories: [
      'A massive volcanic eruption (or several) loaded the atmosphere with sulfate — confirmed by ice-core sulfate spikes; a 2018 study points to an Icelandic eruption, with Ilopango (El Salvador) also implicated near this period.',
      'The dimming likely worsened the conditions for the Plague of Justinian shortly after.',
    ],
    unsolvedMeaning:
      'Cause largely explained (volcanism), with the exact volcano(es) still debated. A documented catastrophe whose mechanism science has mostly pinned down — the open part is "which mountain."',
    sources: [
      'Procopius and other 6th-c. accounts',
      'Sigl et al. ice-core chronology (2015); Loveluck et al. (2018)',
    ],
  },
  {
    id: 'lost-mummy-and-tomb-of-nefertiti',
    title: 'The Lost Mummy and Tomb of Nefertiti',
    category: 'disappearances',
    wikipedia: 'Nefertiti',
    era: '18th Dynasty, c. 1340 BC (Amarna Period)',
    location: { lat: 27.645, lng: 30.896, place: 'Amarna (Akhetaten), Minya Governorate, Egypt' },
    summary:
      "Nefertiti was the Great Royal Wife of Akhenaten and a central figure of the Amarna Period, yet no securely identified tomb or mummy of hers has ever been found. Her intended burial in the Royal Tomb at Amarna was likely never used, and she disappears from the record near the end of Akhenaten's reign. Several candidate mummies have been proposed but none confirmed.",
    unexplained:
      'Where was Nefertiti buried, and which (if any) surviving mummy is hers? Her remains have never been positively identified.',
    theories: [
      "The 'Younger Lady' (KV35YL) is Nefertiti — DISPROVEN/UNSUPPORTED: DNA showed she was Tutankhamun's mother, a daughter of Amenhotep III, not Nefertiti.",
      'A KV21 mummy (KV21B) is Nefertiti — WEAKLY SUPPORTED: confirmed 18th-Dynasty royal but DNA was insufficient for identification.',
      "Her tomb lies in hidden chambers behind Tutankhamun's burial (Reeves, 2015) — LARGELY REFUTED: later radar scans found no concealed chambers.",
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: candidate identifications have been tested and either disproven or left inconclusive, and no tomb attributable to her has been located.',
    sources: [
      "English Wikipedia, 'Nefertiti' (sections on burial and proposed mummies)",
      "Hawass et al., 'Ancestry and Pathology in King Tutankhamun's Family,' JAMA 303 (2010)",
    ],
  },
  {
    id: 'disputed-identity-of-the-kv55-mummy',
    title: 'The Disputed Identity of the KV55 Mummy',
    category: 'disappearances',
    wikipedia: 'KV55',
    era: '18th Dynasty, c. 1330s BC (Amarna Period)',
    location: { lat: 25.7402, lng: 32.6014, place: 'Tomb KV55, Valley of the Kings, Luxor, Egypt' },
    summary:
      "KV55 in the Valley of the Kings contained a disturbed royal burial with Amarna-era material and a damaged coffin whose cartouches were deliberately erased. The single male mummy found inside has been the subject of more than a century of dispute. Funerary 'magic bricks' name Akhenaten, but skeletal age estimates have long conflicted with that identification.",
    unexplained:
      'Is the KV55 body Akhenaten, his shadowy successor Smenkhkare, or another royal male? Anatomical age-at-death estimates and the inscriptional/genetic evidence have never been reconciled.',
    theories: [
      'The mummy is Akhenaten — SUPPORTED BY MANY: backed by the magic bricks naming him and 2010 DNA suggesting he fathered Tutankhamun.',
      'The mummy is Smenkhkare — SUPPORTED BY SOME: early and several later anatomical studies estimated death around age 20-26, too young for Akhenaten.',
      'The conflict reflects flawed CT age estimates rather than a wrong ID — PARTIAL: 2010 CT work argued for an older age (35-45), but critics dispute the skeletal basis.',
    ],
    unsolvedMeaning:
      'Likely-explained-but-unproven leaning toward Akhenaten on inscriptional/genetic grounds, yet the unresolved skeletal age dispute keeps the identification genuinely contested.',
    sources: [
      "English Wikipedia, 'KV55' (identity controversy)",
      'Hawass et al., JAMA 303 (2010); Filer, JEA studies on the skeletal age of the KV55 remains',
    ],
  },
  {
    id: 'lost-tomb-of-imhotep',
    title: 'The Lost Tomb of Imhotep',
    category: 'disappearances',
    wikipedia: 'Imhotep',
    era: '3rd Dynasty, c. 2600 BC (Old Kingdom)',
    location: { lat: 29.8711, lng: 31.2165, place: 'Saqqara necropolis, Egypt' },
    summary:
      'Imhotep was the architect of the Step Pyramid of Djoser and was later deified as a god of medicine. Despite his immense later cult, his own tomb has never been found and is generally assumed to lie somewhere at Saqqara. Searches over more than a century have not located it.',
    unexplained:
      'Where is Imhotep buried? No tomb securely attributable to him has ever been identified, despite his prominence.',
    theories: [
      'His tomb is an as-yet-unexcavated mastaba at Saqqara near the Step Pyramid — MAINSTREAM-PLAUSIBLE but undemonstrated.',
      'It was destroyed or remains buried beneath later Saqqara structures and cult installations — POSSIBLE.',
      'Some claimed identifications (e.g. with specific Saqqara galleries) — SPECULATIVE and unconfirmed.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the tomb of a famous historical individual that has simply never been located.',
    sources: [
      "English Wikipedia, 'Imhotep' ('The location of his tomb remains unknown')",
      "W.B. Emery's mid-20th-century Saqqara excavation reports searching for Imhotep's burial",
    ],
  },
  {
    id: 'the-enigma-of-pharaoh-smenkhkare',
    title: 'The Enigma of Pharaoh Smenkhkare',
    category: 'disappearances',
    wikipedia: 'Smenkhkare',
    era: '18th Dynasty, c. 1335 BC (end of Amarna Period)',
    location: { lat: 27.645, lng: 30.896, place: 'Amarna / Thebes, Egypt' },
    summary:
      "Smenkhkare appears briefly as a co-regent or successor of Akhenaten, but almost nothing about this ruler is securely known. Scholars dispute the pharaoh's sex, parentage, dates, and even whether 'Smenkhkare' and the female ruler Neferneferuaten were the same person. No certain tomb or mummy is agreed upon.",
    unexplained:
      'Who was Smenkhkare — a man, or Nefertiti ruling under a new name — and when and how long did this person reign?',
    theories: [
      'Smenkhkare was a distinct young male co-regent of Akhenaten — SUPPORTED BY MANY but on thin evidence.',
      'Smenkhkare was Nefertiti (or another woman) ruling as a king — DEBATED: tied to the Neferneferuaten identification.',
      'Smenkhkare and Neferneferuaten were two different rulers — DEBATED: no academic consensus on the sequence.',
    ],
    unsolvedMeaning:
      "Genuinely no evidence either way: the surviving record is so sparse that the ruler's identity and even sex remain open questions.",
    sources: [
      "English Wikipedia, 'Smenkhkare'",
      "Aidan Dodson, 'Amarna Sunset' (2009), on the late-Amarna succession debate",
    ],
  },
  {
    id: 'unknown-burial-of-ankhesenamun',
    title: 'The Unknown Fate of Ankhesenamun',
    category: 'disappearances',
    wikipedia: 'Ankhesenamun',
    era: '18th Dynasty, c. 1320s BC',
    location: { lat: 25.7402, lng: 32.6014, place: 'Valley of the Kings, Luxor, Egypt' },
    summary:
      "Ankhesenamun was a daughter of Akhenaten and Nefertiti and the wife of Tutankhamun. She vanishes from the record shortly after Tutankhamun's death, around the time of a disputed letter to a Hittite king requesting a foreign husband. No confirmed tomb or mummy has been identified for her.",
    unexplained:
      'When and how did Ankhesenamun die, and where is she buried? No burial has been securely attributed to her.',
    theories: [
      'One of the two KV21 queens (KV21A) is Ankhesenamun — TENTATIVE: royal 18th-Dynasty DNA but insufficient for positive ID.',
      'She married Ay and was buried in an unidentified Theban tomb — PLAUSIBLE: based on a ring linking their names.',
      'She is among unidentified Amarna-line mummies yet to be matched — SPECULATIVE.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: her death and burial are simply undocumented, and DNA testing of candidate mummies has so far been inconclusive.',
    sources: [
      "English Wikipedia, 'Ankhesenamun'",
      'Hawass et al., JAMA 303 (2010) on the KV21 mummies',
    ],
  },
  {
    id: 'dating-of-the-dendera-zodiac',
    title: 'The Disputed Dating of the Dendera Zodiac',
    category: 'ciphers',
    wikipedia: 'Dendera zodiac',
    era: 'Late Ptolemaic / early Roman, c. 50 BC',
    location: {
      lat: 26.1417,
      lng: 32.67,
      place: 'Temple of Hathor, Dendera, Egypt (relief now in the Louvre)',
    },
    summary:
      "The Dendera zodiac is a bas-relief star map from the ceiling of a chapel at the Hathor temple, now in the Louvre. After its early-19th-century removal it triggered the 'Dendera Affair,' with proposed dates ranging from c. 2500 BC to the 4th century AD and bitter debate over whether it threatened biblical chronology. Modern decipherment of its planetary configuration points to around 50 BC.",
    unexplained:
      'Beyond the now-favored ~50 BC date, the precise astronomical event(s) encoded and the full intended meaning of the configuration remain debated.',
    theories: [
      "It encodes a specific planetary alignment / eclipses dating it to c. 50 BC — WELL SUPPORTED: Cauville and Aubourg's reconstruction is the modern consensus.",
      'It is a general religious/astrological planisphere rather than a dated sky chart — PARTIALLY SUPPORTED.',
      "Very early datings (Fourier's ~2500 BC) — DISCREDITED: products of the historical 'Dendera Affair'.",
    ],
    unsolvedMeaning:
      'Recently/largely resolved for the date (~50 BC), but the exact astronomical content and symbolic intent remain a live scholarly question rather than a settled reading.',
    sources: [
      "English Wikipedia, 'Dendera zodiac'",
      'S. Cauville and E. Aubourg, studies dating the Dendera zodiac to c. 50 BC',
    ],
  },
  {
    id: 'lost-egyptian-labyrinth-of-hawara',
    title: 'The Lost Egyptian Labyrinth of Hawara',
    category: 'phenomena',
    wikipedia: 'Egyptian Labyrinth',
    era: '12th Dynasty, c. 1800 BC (Middle Kingdom)',
    location: {
      lat: 29.272,
      lng: 30.898,
      place: 'Hawara, near the Pyramid of Amenemhat III, Faiyum, Egypt',
    },
    summary:
      'Classical writers including Herodotus and Strabo described a vast multi-court mortuary complex beside the pyramid of Amenemhat III at Hawara, claiming it surpassed even the pyramids and held thousands of chambers. The structure was quarried away in antiquity, leaving only a vast field of limestone chips and fragments. Its plan survives mainly through the ancient descriptions.',
    unexplained:
      'What was the true layout, scale, and function of the Labyrinth, and how much (if anything) survives below the heavily quarried, waterlogged site?',
    theories: [
      'It was the funerary temple of Amenemhat III, exaggerated by classical authors — MAINSTREAM-PLAUSIBLE.',
      'Substantial subterranean remains survive beneath the rubble, hinted at by geophysical surveys — DISPUTED: a 2008 survey claimed a buried structure, but results are contested and unpublished in detail.',
      'The classical 3,000-chamber accounts are largely literary embellishment — LIKELY for the numbers, though the core building was real.',
    ],
    unsolvedMeaning:
      "Likely-explained-but-unproven: the building was real and is broadly understood as Amenemhat III's mortuary complex, but its plan and any surviving substructure cannot be confirmed because the site is destroyed and the water table blocks excavation.",
    sources: [
      "English Wikipedia, 'Egyptian Labyrinth'",
      "Herodotus, 'Histories' 2.148; Petrie's Hawara excavation reports",
    ],
  },
  {
    id: 'linear-elamite-script',
    title: 'Linear Elamite: A Script Newly Read but Still Contested',
    category: 'ciphers',
    wikipedia: 'Linear Elamite',
    era: 'c. 2300–1850 BCE (Bronze Age Elam)',
    location: { lat: 32.1897, lng: 48.2558, place: 'Susa and southern Iran' },
    summary:
      'Linear Elamite is a rare Bronze Age script from Elam, known from roughly 40–50 inscriptions, several on silver vessels. For over a century it resisted decipherment despite some bilingual material with Akkadian. In 2022 François Desset and colleagues published a claimed near-complete decipherment, arguing it is one of the earliest purely phonographic writing systems.',
    unexplained:
      "Whether Desset et al.'s readings are correct remains disputed; the degree to which the script is phonographic versus logographic, and the reliability of translations, are not settled.",
    theories: [
      'Near-complete phonographic decipherment (Desset 2022, partially accepted): argues the system is essentially an alphabet/syllabary that can now be read.',
      'Mixed phono-logographic system (competing view): contends only a portion is phonographic, with logograms that complicate the proposed readings.',
      'Cautious skepticism (held by some Assyriologists): full acceptance awaits independent verification and publication of detailed translations.',
    ],
    unsolvedMeaning:
      "Recently and only partially resolved: a major decipherment claim exists but has not achieved scholarly consensus, so the script's reading remains genuinely contested.",
    sources: [
      "F. Desset et al., 'The decipherment of Linear Elamite writing', Zeitschrift für Assyriologie (2022)",
      "Wikipedia 'Linear Elamite' (summary of the decipherment debate)",
    ],
  },
  {
    id: 'lost-city-of-akkad',
    title: 'The Lost City of Akkad (Agade)',
    category: 'disappearances',
    wikipedia: 'Akkad (city)',
    era: 'c. 2334–2154 BCE (Akkadian Empire)',
    location: {
      lat: 33.1,
      lng: 44.3,
      place: 'Somewhere in central Mesopotamia, likely near the Tigris–Diyala region, Iraq',
    },
    summary:
      'Akkad (Agade) was the capital of the Akkadian Empire founded by Sargon, the first empire to unite much of Mesopotamia. It is named in numerous cuneiform sources and dominated the region for over a century. Yet despite intensive searching, the city itself has never been located or excavated.',
    unexplained:
      "The physical site of Akkad is unknown; no excavation has confirmed any candidate location for one of antiquity's most important capitals.",
    theories: [
      'Buried beneath later alluvium near Baghdad/Kish (most-discussed, unproven): many scholars place it in central Mesopotamia, possibly under shifting river courses.',
      'Lies under an unexcavated or built-over tell (plausible): the site may survive but be inaccessible or unidentified among many mounds.',
      'Location near the Tigris east of the Diyala confluence (argued from texts, tentative): textual geography points to this zone, but no remains confirm it.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved: the city's existence is certain from texts, but its location is simply not known and no evidence currently favors one site decisively.",
    sources: [
      'B. Foster, Akkadian studies including scholarship on the Akkadian Empire and its capital',
      "Wikipedia 'Akkad (city)' and 'Akkadian Empire' (capital not yet located)",
    ],
  },
  {
    id: 'first-sealand-dynasty',
    title: 'The Enigmatic First Sealand Dynasty',
    category: 'disappearances',
    wikipedia: 'First Sealand dynasty',
    era: 'c. 1732–1475 BCE (Old Babylonian period)',
    location: {
      lat: 30.9,
      lng: 46.1,
      place: "Southern Mesopotamian marshlands ('the Sealand'), southern Iraq",
    },
    summary:
      'The First Sealand Dynasty ruled the marshy far south of Mesopotamia after the decline of the First Dynasty of Babylon. It is known from king lists and, more recently, from some 450 administrative tablets and excavations at Tell Khaiber. Despite this, the dynasty remains one of the most obscure in Mesopotamian history.',
    unexplained:
      "The dynasty's capital city has never been identified, and the chronology and even the correct forms of several kings' names remain uncertain.",
    theories: [
      "Capital at one of several proposed sites including Tell Khaiber or 'Dur-Enlil' (competing, none confirmed): proposed candidates exist but none is established.",
      'Records kept on perishable waxed wooden boards (plausible): may explain the scarcity of surviving documentation from the period.',
      'Conflicting king lists reflect genuine political fragmentation (debated): differences between King List A and B may encode real uncertainty rather than mere scribal error.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: recent finds have improved knowledge, but the seat of power and basic chronology remain unknown for lack of decisive evidence.',
    sources: [
      "S. Dalley, 'Babylonian Tablets from the First Sealand Dynasty in the Schøyen Collection' (2009)",
      'Tell Khaiber excavation reports (Ur Region Archaeology Project)',
    ],
  },
  {
    id: 'ten-lost-tribes-of-israel',
    title: 'The Fate of the Ten Lost Tribes of Israel',
    category: 'disappearances',
    wikipedia: 'Ten Lost Tribes',
    era: 'c. 732–720 BCE (Neo-Assyrian conquest)',
    location: {
      lat: 32.2806,
      lng: 35.1894,
      place: 'Samaria, northern Kingdom of Israel (West Bank/northern Israel)',
    },
    summary:
      "When the Neo-Assyrian Empire conquered the northern Kingdom of Israel (c. 732 and 720 BCE), it deported portions of its population, resettling them near the Khabur River and in Media. The biblical account (2 Kings 17) records the removal of 'Israel' to Assyria. Assyrian royal inscriptions of Tiglath-Pileser III and Sargon II corroborate mass deportations.",
    unexplained:
      'What became of the deported northern Israelites as distinct communities is unknown; whether any retained a separate identity rather than assimilating cannot be demonstrated.',
    theories: [
      'Assimilation into local populations (scholarly mainstream): historians generally conclude the deportees merged into surrounding peoples over generations.',
      'Most Israelites were never deported (well-supported): estimates suggest only a minority left, and much of the population remained, contributing to the later Samaritan community.',
      'Survival as identifiable communities elsewhere (popular tradition, unsupported): claims linking various groups worldwide to the lost tribes lack archaeological or documentary proof.',
    ],
    unsolvedMeaning:
      'Likely explained but unproven: the historical deportations are real and assimilation is the consensus, but the romantic searching for distinct survivors has no supporting evidence.',
    sources: [
      '2 Kings 17:6; Assyrian royal inscriptions of Tiglath-Pileser III and Sargon II',
      "I. Finkelstein & N. Silberman, 'The Bible Unearthed' (2001)",
    ],
  },
  {
    id: 'copper-scroll-treasure',
    title: "The Copper Scroll's Unfound Treasure",
    category: 'ciphers',
    wikipedia: 'Copper Scroll',
    era: '1st century CE (Second Temple period)',
    location: { lat: 31.7417, lng: 35.4592, place: 'Cave 3 near Qumran, Dead Sea, West Bank' },
    summary:
      'The Copper Scroll (3Q15) is a Dead Sea Scroll discovered in 1952, uniquely inscribed on copper rather than parchment. Written in Mishnaic Hebrew, it lists 64 locations said to hold large quantities of gold and silver. It is now held in the Jordan Museum in Amman.',
    unexplained:
      'The 64 cached treasure locations are described in obscure, abbreviated terms; none has been securely identified or recovered, and even whether the listed treasure was real is debated.',
    theories: [
      'Real Temple treasure hidden before 70 CE (widely entertained): the caches may be Jerusalem Temple wealth concealed during the Jewish–Roman war.',
      'Folklore or symbolic inventory (serious scholarly view): the impossibly large totals may indicate legend rather than literal deposits.',
      'Already looted or untraceable (plausible): even if real, the references are too vague and the landscape too changed to locate the sites.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the scroll is authentic, but whether its treasure existed and where remains unproven, with no recovered cache to settle the question.',
    sources: [
      "J. K. Lefkovits, 'The Copper Scroll 3Q15: A Reevaluation' (2000)",
      'Jordan Museum, Amman (current location of the scroll)',
    ],
  },
  {
    id: 'land-of-dilmun',
    title: 'The Disputed Land of Dilmun',
    category: 'phenomena',
    wikipedia: 'Dilmun',
    era: 'c. 3rd–1st millennium BCE',
    location: { lat: 26.1921, lng: 50.5354, place: 'Bahrain and the western Persian Gulf coast' },
    summary:
      'Dilmun was a prosperous trading polity named in Sumerian and Akkadian texts, serving as an entrepôt linking Mesopotamia with the Indus region. It is celebrated in myth as a pure, paradisiacal land. Most scholars center it on Bahrain and the adjacent Arabian coast, supported by major archaeological sites.',
    unexplained:
      'The precise boundaries and shifting extent of Dilmun across different periods, and exactly which sites its name covered at any given time, remain disputed.',
    theories: [
      'Bahrain-centered polity (mainstream): archaeology at Bahrain and eastern Arabia supports this core identification.',
      'Originally the eastern Arabian mainland (scholarly variant): the name may have first designated coastal and interior settlements in what is now eastern Saudi Arabia.',
      'An unidentified tell in southern Iraq for an early phase (Howard-Carter, minority): proposes a Mesopotamian location for early Dilmun, not generally accepted.',
    ],
    unsolvedMeaning:
      "Likely largely explained but with genuine open questions: Dilmun's general identity is settled, yet its exact territorial extent over time remains unresolved by the evidence.",
    sources: [
      "G. Bibby, 'Looking for Dilmun' (1969)",
      "D. Potts, 'The Arabian Gulf in Antiquity' (1990)",
    ],
  },
  {
    id: 'tomb-of-cyrus-the-great',
    title: 'The Tomb of Cyrus the Great and His Missing Remains',
    category: 'disappearances',
    wikipedia: 'Tomb of Cyrus',
    era: 'c. 530 BCE (Achaemenid Persian period)',
    location: { lat: 30.1944, lng: 53.1672, place: 'Pasargadae, Fars Province, Iran' },
    summary:
      'A stone gabled monument at Pasargadae in Iran is traditionally identified as the tomb of Cyrus the Great, founder of the Achaemenid Empire. Classical authors report that Alexander the Great visited and found it already plundered, with only a couch and coffin remaining. The modern attribution to Cyrus dates largely from the early 19th century.',
    unexplained:
      "Whether the structure truly is Cyrus's tomb, and what became of his body and the rich grave goods described in antiquity, remain unconfirmed; no remains have been identified inside.",
    theories: [
      'Authentic tomb of Cyrus (mainstream): location at Pasargadae and classical descriptions broadly fit, though no surviving identifying inscription confirms it.',
      "Misidentified monument (minority/historical doubt): earlier locals called it the 'Tomb of the Mother of Solomon,' and some details diverge from ancient accounts.",
      'Grave goods looted in antiquity (supported by sources): classical reports of plunder explain the absence of treasure, but the fate of the body itself is unrecorded.',
    ],
    unsolvedMeaning:
      "Likely explained but unproven: the identification is widely accepted yet rests on indirect evidence, and the fate of Cyrus's actual remains is genuinely unknown.",
    sources: [
      "Arrian, Anabasis 6.29 (Alexander's visit to the plundered tomb)",
      "D. Stronach, 'Pasargadae' (1978)",
    ],
  },
  {
    id: 'death-of-alexander-the-great',
    title: 'The Death of Alexander the Great',
    category: 'phenomena',
    wikipedia: 'Death of Alexander the Great',
    era: 'Hellenistic period, 323 BC',
    location: { lat: 32.5355, lng: 44.4275, place: 'Babylon (near modern Hillah, Iraq)' },
    summary:
      'Alexander III of Macedon died in Babylon in June 323 BC at age 32 after an illness of roughly ten to twelve days, following heavy drinking at banquets. Ancient sources (Plutarch, Arrian, Diodorus) describe a progressive fever, increasing weakness, and eventual inability to speak. No autopsy or contemporary medical record survives.',
    unexplained:
      'The precise cause of death remains undetermined: whether it was natural disease, an environmental toxin, or deliberate poisoning, and which specific illness if natural.',
    theories: [
      'Likely-supported (mainstream medical/historical view): natural causes such as malaria, typhoid fever, or another infectious disease, possibly aggravated by alcohol and prior wounds.',
      "Speculative but seriously discussed: poisoning by political rivals (e.g. via Antipater's faction), a claim already circulating in antiquity.",
      'Fringe/modern hypothesis: Guillain-Barré syndrome or West Nile virus, proposed in medical literature but unproven.',
    ],
    unsolvedMeaning:
      'Genuinely no decisive evidence either way: the symptom records are too vague and too late to confirm any single diagnosis, so the cause is unprovable rather than hoax or myth.',
    sources: [
      'Arrian, Anabasis of Alexander, Book VII',
      "A. B. Bosworth, 'Conquest and Empire: The Reign of Alexander the Great' (1988)",
    ],
  },
  {
    id: 'lost-books-of-livy',
    title: "The Lost Books of Livy's History of Rome",
    category: 'disappearances',
    wikipedia: 'Ab urbe condita (Livy)',
    era: 'Roman, written c. 27 BC – AD 17',
    location: { lat: 41.9028, lng: 12.4964, place: 'Rome, Italy' },
    summary:
      "Livy's monumental history of Rome, 'Ab urbe condita', originally comprised 142 books covering Rome from its founding to 9 BC. Only 35 books survive intact (1–10 and 21–45); the rest are known only through later summaries (the Periochae) and fragments. The missing books covered large stretches including most of the late Republic and Augustan era.",
    unexplained:
      'Whether substantial portions of the lost books survived into the medieval period and could yet be recovered, and exactly when and how the missing 107 books were lost.',
    theories: [
      'Likely-supported: gradual loss through the decline of copying, the cost of the enormous work, and the disappearance of papyrus/parchment over late antiquity and the early Middle Ages.',
      'Plausible recovery hope: portions may survive as palimpsests or in unexamined manuscripts; a fragment of Book 91 was rediscovered in the Vatican in the 18th century.',
      'Speculative: deliberate suppression of politically sensitive late-Republican books, considered unlikely by most scholars.',
    ],
    unsolvedMeaning:
      'Likely explained in mechanism (slow attrition of a huge text) but unresolved in fact: it remains genuinely unknown whether any lost books still exist undiscovered.',
    sources: [
      'Periochae (ancient summaries of Livy)',
      "Ronald Syme, 'Livy and Augustus', Harvard Studies in Classical Philology (1959)",
    ],
  },
  {
    id: 'death-of-germanicus',
    title: 'The Death of Germanicus',
    category: 'phenomena',
    wikipedia: 'Germanicus',
    era: 'Roman Empire, AD 19',
    location: { lat: 36.2021, lng: 36.1604, place: 'Antioch (near modern Antakya, Turkey)' },
    summary:
      'Germanicus Julius Caesar, the popular adopted grandson-heir of Emperor Tiberius, died at Antioch in AD 19 after a lingering illness. Before dying he openly accused the governor of Syria, Gnaeus Calpurnius Piso, of poisoning him; Tacitus reports rumors of curse-tablets and remains found in his quarters. Piso was later prosecuted in Rome and died, apparently by suicide, before the verdict.',
    unexplained:
      'Whether Germanicus was actually poisoned or murdered, and if so by whom and whether on imperial orders, versus dying of natural disease.',
    theories: [
      'Plausible: natural illness (a fever common to the eastern provinces), with poisoning a politically convenient rumor.',
      'Contemporary accusation: deliberate poisoning by Piso, possibly with the knowledge of Tiberius or Livia, as alleged at the trial.',
      'Uncertain: the surviving Senatus Consultum de Cn. Pisone patre documents the trial but does not resolve the cause of death.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: ancient toxicology was unable to distinguish poison from disease, so the murder allegation can be neither confirmed nor refuted.',
    sources: [
      'Tacitus, Annals, Books II–III',
      'Senatus Consultum de Cn. Pisone patre (bronze inscription, discovered 1990s)',
    ],
  },
  {
    id: 'death-of-the-emperor-tiberius',
    title: 'The Death of Emperor Tiberius',
    category: 'phenomena',
    wikipedia: 'Tiberius',
    era: 'Roman Empire, AD 37',
    location: { lat: 40.785, lng: 14.09, place: 'Misenum, Bay of Naples, Italy' },
    summary:
      'Emperor Tiberius died in March AD 37 at Misenum, aged 77. Ancient sources disagree on the circumstances: Tacitus and Suetonius report variant accounts in which the dying emperor was thought dead, revived, and was then smothered with bedclothes, possibly at the instigation of the praetorian prefect Macro and the heir Caligula.',
    unexplained:
      'Whether Tiberius died of natural old age or was hastened to death by smothering or other means as the rumors alleged.',
    theories: [
      'Plausible: natural death from old age and frailty, with sinister stories arising after the fact.',
      'Contemporary rumor: deliberate smothering by Macro and/or Caligula to secure the succession.',
      'Uncertain: the variant ancient accounts cannot be reconciled and none is firsthand.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the conflicting late sources make it impossible to confirm murder versus natural death.',
    sources: ['Tacitus, Annals, Book VI', 'Suetonius, Life of Tiberius'],
  },
  {
    id: 'lost-poetry-of-sappho',
    title: 'The Lost Poetry of Sappho',
    category: 'disappearances',
    wikipedia: 'Sappho',
    era: 'Archaic Greece, c. 600 BC',
    location: { lat: 39.1, lng: 26.55, place: 'Lesbos, Greece' },
    summary:
      'Sappho of Lesbos was celebrated in antiquity as one of the greatest lyric poets, and Alexandrian scholars compiled her work into roughly nine books. Today only one complete poem and a large number of fragments survive, many recovered from papyri; the bulk of her corpus is lost. New fragments have surfaced as recently as the 2000s and 2010s from papyri.',
    unexplained:
      "How and exactly when the vast majority of Sappho's poetry was lost, and whether substantial portions survive undiscovered in papyri or manuscripts.",
    theories: [
      'Mainstream: gradual loss through changing tastes, the difficulty of her Aeolic dialect, and the general attrition of ancient texts in late antiquity and Byzantium.',
      "Debated/possible-hoax adjacent: a 2014 'new Sappho' papyrus raised authenticity and provenance controversies, illustrating how fraught recovery can be.",
      'Discredited legend: the story that Christian authorities deliberately burned her works en masse is not supported by evidence.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved on survival: ongoing papyrus discoveries show more may yet be recovered, while the popular 'church burned Sappho' tale is closer to myth.",
    sources: [
      "Dirk Obbink, 'Two New Poems by Sappho', ZPE 189 (2014) [note: later provenance controversy]",
      "David A. Campbell, 'Greek Lyric I: Sappho and Alcaeus' (Loeb)",
    ],
  },
  {
    id: 'phantom-disappearance-of-the-sea-peoples',
    title: 'The Origin and Fate of the Sea Peoples',
    category: 'disappearances',
    wikipedia: 'Sea Peoples',
    era: 'Late Bronze Age, c. 1200 BC',
    location: { lat: 31.05, lng: 30, place: 'Eastern Mediterranean / Nile Delta, Egypt' },
    summary:
      "Egyptian inscriptions from the reigns of Merneptah and Ramesses III describe coalitions of seaborne raiders, the 'Sea Peoples', attacking Egypt and the Levant around the time of the Late Bronze Age collapse. The names of constituent groups (e.g. Peleset, Shardana, Lukka) are recorded, but their geographic origins and ultimate fate are poorly understood. They predate classical Greece and Rome but bear on Mycenaean-era Greek history.",
    unexplained:
      'Who exactly the Sea Peoples were, where they came from, and what role they played in the collapse of Late Bronze Age civilizations.',
    theories: [
      'Supported by some inscriptions/archaeology: a mix of displaced Aegean, Anatolian, and Mediterranean populations migrating amid systemic collapse.',
      'Debated: whether they were a cause or a symptom of the collapse, with climate, earthquake, and economic factors also implicated.',
      'Speculative: specific homeland identifications (e.g. Peleset = Philistines from the Aegean) that remain only partially evidenced.',
    ],
    unsolvedMeaning:
      'Genuinely no consensus: the sources are real but fragmentary and one-sided (chiefly Egyptian), so identity and origin remain open scholarly questions rather than fabrication.',
    sources: [
      'Medinet Habu inscriptions of Ramesses III',
      "Eric H. Cline, '1177 B.C.: The Year Civilization Collapsed' (2014)",
    ],
  },
  {
    id: 'lake-nemi-ships',
    title: 'The Nemi Ships of Caligula',
    category: 'events',
    wikipedia: 'Nemi ships',
    era: 'Roman Empire, 1st century AD',
    location: { lat: 41.718, lng: 12.706, place: 'Lake Nemi, Italy' },
    summary:
      'Two enormous luxury barges built during the reign of Emperor Caligula lay sunk in Lake Nemi for centuries. Recovered in the 1920s–1930s by draining the lake, they revealed advanced Roman engineering, including bronze fittings and possible plumbing, before both ships were destroyed by fire in 1944 during World War II.',
    unexplained:
      'Exactly why Caligula built such extravagant ships on a small lake, their full original purpose and design, and the precise cause of the 1944 fire that destroyed them.',
    theories: [
      'Supported: the ships served as floating palaces or ceremonial/religious vessels associated with the cult of Diana at Nemi.',
      'Disputed: the 1944 fire has been variously blamed on retreating German troops or on Allied artillery; responsibility was never conclusively established.',
      'Open: technical details remain partly conjectural because the physical evidence was destroyed before full study.',
    ],
    unsolvedMeaning:
      "Mixed: the ships' existence and recovery are fully documented, but their original purpose is partly inferred and the cause of their destruction remains genuinely disputed.",
    sources: [
      "Guido Ucelli, 'Le navi di Nemi' (1940)",
      'Museo delle Navi Romane, Nemi (museum records)',
    ],
  },
  {
    id: 'lost-comedies-of-menander',
    title: 'The Lost Plays of Menander',
    category: 'disappearances',
    wikipedia: 'Menander',
    era: 'Hellenistic Greece, c. 320–290 BC',
    location: { lat: 37.9838, lng: 23.7275, place: 'Athens, Greece' },
    summary:
      "Menander was the leading playwright of Greek New Comedy, credited with over a hundred plays and hugely influential on Roman comedy (Plautus and Terence). For most of post-antiquity his work was known only through quotations, until papyrus discoveries in the 20th century recovered substantial portions, including the nearly complete 'Dyskolos' published in 1959.",
    unexplained:
      'How the once-canonical corpus of Menander was almost entirely lost while lesser authors survived, and how much more may still be recoverable from papyri.',
    theories: [
      'Mainstream: loss in the transition from papyrus rolls to codices in late antiquity, when Menander was not among the texts selected for recopying into the Byzantine school canon.',
      'Supported by evidence: continued recovery is plausible, as Egyptian papyri keep yielding new fragments.',
      'Possible: shifting literary taste and the dominance of Aristophanes in school curricula contributed to neglect.',
    ],
    unsolvedMeaning:
      'Likely explained in mechanism but factually open: the disappearance is understood broadly, yet the full extent of what survives undiscovered is genuinely unknown.',
    sources: [
      'P. Bodmer papyri (Dyskolos), published 1959',
      "W. Geoffrey Arnott, 'Menander' (Loeb Classical Library)",
    ],
  },
  {
    id: 'venus-de-milo-missing-arms',
    title: 'The Missing Arms and Sculptor of the Venus de Milo',
    category: 'events',
    wikipedia: 'Venus de Milo',
    era: 'Hellenistic Greece, c. 150–125 BC',
    location: { lat: 36.7333, lng: 24.4167, place: 'Milos (Melos), Greece' },
    summary:
      'The Venus de Milo, an ancient Greek marble statue likely depicting Aphrodite, was discovered on the island of Milos in 1820 and is now in the Louvre. It was found already missing both arms, and an inscribed plinth that may have named the sculptor was reportedly recovered with it but later disappeared, complicating attribution.',
    unexplained:
      'Who sculpted the statue, what the original pose and attributes of the missing arms were, and what became of the inscribed base that might have settled the attribution.',
    theories: [
      'Supported: attribution to Alexandros of Antioch, based on the reportedly recovered (now lost) inscribed plinth.',
      "Disputed: claims that the plinth was suppressed because its later Hellenistic date undercut the Louvre's desire for a Classical masterpiece.",
      'Reconstructions of the arms (e.g. holding an apple or a shield) are conjectural and unproven.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved on key points: the statue is real and famous, but its authorship and original form remain uncertain because of the lost inscription and missing arms.',
    sources: [
      'Louvre Museum collection records, Venus de Milo',
      "Gregory Curtis, 'Disarmed: The Story of the Venus de Milo' (2003)",
    ],
  },
  {
    id: 'gunung-padang',
    title: 'Gunung Padang',
    category: 'phenomena',
    wikipedia: 'Gunung Padang',
    era: 'Disputed; surface terraces likely 1st millennium CE, with contested far older claims',
    location: {
      lat: -6.9942,
      lng: 107.056,
      place: 'Karyamukti, Cianjur Regency, West Java, Indonesia',
    },
    summary:
      "Gunung Padang is a hilltop in West Java covered with terraces built from columnar basalt blocks, the largest megalithic site in Indonesia. A 2023 paper led by geologist Danny Hilman Natawidjaja claimed buried construction phases dating back over 20,000 years, which would make it the world's oldest pyramid. The paper was retracted in 2024 after archaeologists and geologists objected to its dating methods.",
    unexplained:
      'The genuinely open question is how much of the hill below the visible terraces is human-built versus natural columnar basalt, and when the structures were actually made.',
    theories: [
      'Mainstream archaeology (well supported): the visible terraces are a real megalithic site, most likely built in roughly the 1st millennium CE atop a natural volcanic hill; the older dates came from soil, not artifacts.',
      'Natawidjaja team (disputed, retracted): deeper layers represent deliberate construction many thousands of years old.',
      "Partial natural formation (supported by geologists): much of the apparent 'structure' is natural andesite/basalt columns, not masonry.",
    ],
    unsolvedMeaning:
      "Likely explained but with genuine unresolved detail: the extraordinary 'oldest pyramid' claim is widely rejected and the supporting paper was retracted, but the precise extent and dating of the surface megalithic terraces is still legitimately studied.",
    sources: [
      'Wikipedia: Gunung Padang',
      "Artnet News, 'A Controversial Study on a Prehistoric Pyramid in Indonesia Is Retracted' (2024)",
    ],
  },
  {
    id: 'nabta-playa',
    title: 'Nabta Playa',
    category: 'phenomena',
    wikipedia: 'Nabta Playa',
    era: 'Neolithic, c. 7500–3500 BCE',
    location: { lat: 22.5067, lng: 30.725, place: 'Nubian Desert, southern Egypt' },
    summary:
      "Nabta Playa is a Neolithic site in the Egyptian Sahara built by cattle-herding pastoralists around a former seasonal lake. It contains a small 'calendar circle' of standing stones, lines of large megaliths, and stone-covered cattle burials, and is among the earliest known sites with possible deliberate astronomical alignment.",
    unexplained:
      'Whether the stone arrangements were intended as a functional astronomical or calendrical device, and which specific alignments — solstice sunrise, particular stars — were truly intended rather than coincidental.',
    theories: [
      'Calendrical/astronomical observatory (moderately supported): some stones align with the summer solstice sunrise, plausibly signaling the coming monsoon rains.',
      'Stellar alignment with Orion/Sirius (disputed): claims of star maps rely on contested back-calculations of ancient sky positions.',
      'Primarily ritual/ceremonial (supported): cattle burials and megaliths indicate a religious gathering place whose astronomy may be secondary.',
    ],
    unsolvedMeaning:
      'Genuinely no firm evidence either way on intent: the site is unquestionably real and important, but how deliberate and precise its astronomy was remains debated rather than settled.',
    sources: [
      'Wikipedia: Nabta Playa',
      "Malville et al., 'Megaliths and Neolithic astronomy in southern Egypt,' Nature (1998)",
    ],
  },
  {
    id: 'yonaguni-monument',
    title: 'Yonaguni Monument',
    category: 'phenomena',
    wikipedia: 'Yonaguni Monument',
    era: 'If natural, formed over geological time; submerged since end of last Ice Age',
    location: { lat: 24.435, lng: 122.99, place: 'Off Yonaguni Island, Ryukyu Islands, Japan' },
    summary:
      'The Yonaguni Monument is a large submerged sandstone formation off Yonaguni Island, discovered by a diver in 1987. It has flat terraces, straight edges, and right angles that some, notably geologist Masaaki Kimura, argue are human-shaped, while most marine geologists regard it as a natural product of bedding planes and jointing in the sandstone.',
    unexplained:
      "Whether any of the formation's terraces and angular features were modified or shaped by humans before sea levels rose, or whether all features are purely natural erosion.",
    theories: [
      'Natural formation (scientific consensus): parallel bedding and vertical jointing in sandstone produce the steps and angles via ordinary weathering.',
      'Human-made or modified monument (minority, Kimura): the regularity suggests deliberate terracing of a site later submerged.',
      'Natural feature with minor human use (intermediate): some researchers allow possible light modification of an essentially natural rock.',
    ],
    unsolvedMeaning:
      "Likely explained but unproven: the strong scientific consensus is 'natural,' and 'lost city' claims are considered pseudoarchaeology, though no excavation has definitively closed the question.",
    sources: [
      'Wikipedia: Yonaguni Monument',
      'R. Schoch, geological assessment of Yonaguni (cited in Wikipedia)',
    ],
  },
  {
    id: 'carnac-stones',
    title: 'Carnac stones',
    category: 'phenomena',
    wikipedia: 'Carnac stones',
    era: 'Neolithic, c. 4500–3300 BCE',
    location: { lat: 47.595, lng: -3.079, place: 'Carnac, Brittany, France' },
    summary:
      "The Carnac stones are the world's largest concentration of megalithic alignments, with more than 3,000 standing stones set in long rows near the Brittany coast, alongside dolmens and tumuli. They were erected by Neolithic communities over many centuries, but no contemporary record of their purpose survives.",
    unexplained:
      'Why thousands of stones were arranged in these specific long parallel rows, and what function the alignments served for their builders.',
    theories: [
      'Ritual/processional and territorial markers (well supported): associated tombs suggest ceremonial and ancestral use.',
      "Astronomical calendar/observatory (disputed): Alexander Thom argued for solar and lunar alignments and a 'megalithic yard,' but his statistical methods are widely challenged.",
      'Social/communal labor monument (supported): the rows may have expressed group identity or land claims.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way for the specific purpose: the site and its Neolithic origin are certain, but the intended function of the alignments remains unresolved.',
    sources: ['Wikipedia: Carnac stones'],
  },
  {
    id: 'sacsayhuaman',
    title: 'Sacsayhuamán',
    category: 'phenomena',
    wikipedia: 'Sacsayhuamán',
    era: 'Inca, 15th century CE (possibly earlier Killke phase)',
    location: { lat: -13.508, lng: -71.982, place: 'Above Cusco, Peru' },
    summary:
      'Sacsayhuamán is a walled Inca complex overlooking Cusco, famous for zigzag walls of polygonal limestone blocks, some weighing over 100 tons, fitted so tightly that a sheet of paper cannot pass between them. It was built in the 15th century under Inca rule, likely on an earlier Killke-period site.',
    unexplained:
      'The precise techniques by which the Inca quarried, transported, and fitted the largest blocks with such accuracy, and the exact construction sequence of the walls.',
    theories: [
      'Hammerstones, abrasion, and trial-fitting with mass labor (well supported): experiments show high precision is achievable with stone tools, ramps, and levers.',
      'Lost or special techniques such as heat or chemical softening (fringe, unsupported): no archaeological evidence backs stone-softening claims.',
      'Phased construction integrating natural bedrock (supported but details debated): the order of building individual walls is not fully reconstructed.',
    ],
    unsolvedMeaning:
      'Likely explained but with open detail: the builders (Inca) and broad methods are known and the precision is reproducible in principle, but exact logistics and sequence remain genuinely studied rather than fully settled.',
    sources: [
      'Wikipedia: Sacsayhuamán',
      "J.-P. Protzen, 'Inca Architecture and Construction at Ollantaytambo' (1993)",
    ],
  },
  {
    id: 'ggantija',
    title: 'Ġgantija',
    category: 'phenomena',
    wikipedia: 'Ġgantija',
    era: 'Neolithic, c. 3600–2500 BCE',
    location: { lat: 36.0472, lng: 14.2692, place: 'Xagħra, Gozo, Malta' },
    summary:
      "Ġgantija is the earliest of Malta's megalithic temples, a pair of curved-chamber structures built from enormous limestone blocks on Gozo, predating the Egyptian pyramids. It is part of the broader Maltese temple culture that flourished for roughly a millennium and then ceased temple-building around 2500 BCE.",
    unexplained:
      'Why this temple-building society, after centuries of monumental construction, abruptly stopped building and the wider culture declined.',
    theories: [
      'Resource exhaustion and environmental stress (well supported): worsening diet in skeletal remains and deforestation suggest overstretched resources.',
      'Social collapse from competitive monument-building (plausible): escalating ritual construction may have become unsustainable.',
      'Disruption by incoming Bronze Age population (supported): later cremating newcomers replaced the temple builders.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved on cause: the temples and the decline are well documented, but the trigger for the culture's collapse and abandonment of temple-building is still debated.",
    sources: ['Wikipedia: Ġgantija', 'UNESCO World Heritage Centre, Megalithic Temples of Malta'],
  },
  {
    id: 'hal-saflieni-hypogeum',
    title: 'Ħal Saflieni Hypogeum',
    category: 'phenomena',
    wikipedia: 'Ħal Saflieni Hypogeum',
    era: 'Neolithic, c. 4000–2500 BCE (Saflieni phase c. 3300–3000 BCE)',
    location: { lat: 35.8694, lng: 14.5072, place: 'Paola, Malta' },
    summary:
      "The Ħal Saflieni Hypogeum is a multi-level underground complex carved into Maltese limestone, used as both a sanctuary and a necropolis containing the remains of thousands of individuals. Its rock-cut chambers include the so-called 'Oracle Room,' notable for unusual acoustic resonance.",
    unexplained:
      "The full ritual function of the carved chambers, and whether the acoustic resonance of the 'Oracle Room' was deliberately engineered or incidental.",
    theories: [
      'Communal burial site and underground sanctuary (well supported): the mass of human remains and red-ochre decoration indicate funerary and cult use.',
      'Deliberately designed acoustics (disputed): the resonance is real, but whether Neolithic builders intended it is unproven.',
      'Continuation underground of the above-ground temple cult (supported): architectural features mimic the surface temples.',
    ],
    unsolvedMeaning:
      "Genuinely partly unresolved: the site's burial function is certain, but claims of intentional acoustic engineering are intriguing yet unproven.",
    sources: ['Wikipedia: Ħal Saflieni Hypogeum', 'Heritage Malta site documentation'],
  },
  {
    id: 'plain-of-jars',
    title: 'Plain of Jars',
    category: 'phenomena',
    wikipedia: 'Plain of Jars',
    era: 'Iron Age, c. 500 BCE – 500 CE (use into early 2nd millennium CE)',
    location: { lat: 19.431, lng: 103.153, place: 'Xiangkhoang Plateau, Laos' },
    summary:
      "The Plain of Jars is a landscape of thousands of large carved stone jars scattered across the highlands of central Laos. Excavations since Madeleine Colani's 1930s work have found human remains near and within jars, supporting a funerary interpretation, but the culture that made them is unidentified.",
    unexplained:
      'Who the jar-makers were, what language or society they belonged to, and exactly how the jars functioned in mortuary practice.',
    theories: [
      'Funerary vessels for secondary burial (well supported): nearby and contained human remains confirm a mortuary role, with evidence of repeated use by multiple individuals over generations.',
      'Storage of food, water, or fermented drink (weakly supported): a folklore-derived idea with little material backing.',
      'Trade-wealth display by a society on China–Vietnam routes (supported): foreign beads and bronze suggest prosperous makers.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved on identity: the burial role is increasingly confirmed, but the makers' identity remains unknown, and unexploded ordnance severely limits excavation.",
    sources: [
      'Wikipedia: Plain of Jars',
      'UNESCO World Heritage Centre, Megalithic Jar Sites in Xiengkhuang',
    ],
  },
  {
    id: 'nan-madol',
    title: 'Nan Madol',
    category: 'phenomena',
    wikipedia: 'Nan Madol',
    era: 'Megalithic construction c. 1180–1200 CE; abandoned by ~1820s',
    location: { lat: 6.8439, lng: 158.3344, place: 'Pohnpei, Federated States of Micronesia' },
    summary:
      "Nan Madol is a complex of about 90 artificial islets built of stacked columnar basalt 'logs' and coral fill, laced with canals, off the coast of Pohnpei. It was the ceremonial and political seat of the Saudeleur dynasty before being abandoned, and is sometimes called the 'Venice of the Pacific.'",
    unexplained:
      'Exactly how the builders, without metal tools, concrete, or large vessels, transported and stacked the enormous basalt columns onto reef islets, and precisely why the site was ultimately abandoned.',
    theories: [
      'Rafting or floating of basalt columns plus ramps and levers (most supported): the prevailing engineering explanation, though unverified in operational detail.',
      'Decline of the Saudeleur dynasty and political and resource change (supported): conquest tradition and resource strain explain abandonment.',
      'Environmental and logistical unsustainability (plausible): maintaining a reef city may have become untenable over time.',
    ],
    unsolvedMeaning:
      'Genuinely partly unresolved: the builders and rough timeline are known, but the construction logistics and the precise causes of abandonment are still debated.',
    sources: [
      'Wikipedia: Nan Madol',
      'McCoy et al., 230Th/U coral dating of Nan Madol, Quaternary Research (2016)',
    ],
  },
  {
    id: 'karahan-tepe',
    title: 'Karahan Tepe',
    category: 'phenomena',
    wikipedia: 'Karahan Tepe',
    era: 'Pre-Pottery Neolithic, c. 9400 BCE',
    location: { lat: 37.093, lng: 39.287, place: 'Şanlıurfa Province, Turkey' },
    summary:
      'Karahan Tepe is a Pre-Pottery Neolithic site near Göbekli Tepe with T-shaped pillars, carved human and animal imagery, and a rock-cut chamber containing rows of phallic pillars and a watching human-head sculpture. It shows that pre-agricultural hunter-gatherers built complex permanent ritual architecture.',
    unexplained:
      'What the enigmatic pillar rooms and carved faces meant, and how and why such sophisticated communal monuments arose among people who had not yet adopted farming.',
    theories: [
      'Ritual or cult complex (well supported): the carvings and special chambers point to ceremonial use.',
      'Settlement with integrated ritual buildings (supported): houses among the monuments suggest year-round occupation.',
      "Site in a wider 'Taş Tepeler' network linked to Göbekli Tepe (supported): shared iconography implies a regional tradition.",
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way on meaning: the site is securely dated and excavation is ongoing, but the symbolism and the social drivers behind its construction remain open.',
    sources: [
      'Wikipedia: Karahan Tepe',
      'Karul, N., excavation reports on Karahan Tepe / Taş Tepeler project',
    ],
  },
  {
    id: 'stone-spheres-of-costa-rica',
    title: 'Stone spheres of Costa Rica',
    category: 'phenomena',
    wikipedia: 'Stone spheres of Costa Rica',
    era: 'Pre-Columbian, c. 700–1530 CE',
    location: { lat: 8.945, lng: -83.481, place: 'Diquís Delta, Costa Rica' },
    summary:
      'More than 300 carved stone spheres, some nearly perfectly round and weighing up to about 15 tons, were made by the Diquís culture in southern Costa Rica. Many were moved from their original placements by farmers and treasure hunters before they were studied, destroying contextual information.',
    unexplained:
      'The original arrangement and intended purpose of the spheres, and how such near-perfect roundness was achieved with the available stone-working methods.',
    theories: [
      'Status or territorial markers near chiefly dwellings (best supported): some were found in alignments by elite structures.',
      'Astronomical or calendrical markers (weakly supported): proposed but lacking firm in-situ evidence.',
      'Hammering and sand-polishing of gabbro boulders (supported method): experiments support stone-tool manufacture, though the exact technique is uncertain.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved on purpose: the makers and manufacturing approach are reasonably understood, but because most spheres were displaced before study, their original meaning and arrangement may never be recoverable.',
    sources: [
      'Wikipedia: Stone spheres of Costa Rica',
      'J. Hoopes, University of Kansas, research on Diquís spheres',
    ],
  },
  {
    id: 'tomb-of-qin-shi-huang',
    title: 'The Sealed Inner Tomb of Qin Shi Huang',
    category: 'phenomena',
    wikipedia: 'Mausoleum of the First Qin Emperor',
    era: '210 BCE (Qin dynasty)',
    location: { lat: 34.3814, lng: 109.2783, place: "Lintong District, Xi'an, Shaanxi, China" },
    summary:
      "The first emperor of unified China, Qin Shi Huang, was buried in 210 BCE beneath a massive earthen mound near Xi'an, surrounded by the famous Terracotta Army discovered in 1974. The central burial chamber itself has never been excavated. The historian Sima Qian, writing about a century later, described an underground palace containing rivers of mercury and rigged crossbow traps.",
    unexplained:
      "The contents and condition of the unopened central burial chamber are unknown, including whether Sima Qian's account of mercury rivers and the emperor's intact tomb is accurate.",
    theories: [
      "Well-supported: soil tests have repeatedly detected anomalously high mercury concentrations over the mound, lending partial credence to Sima Qian's description.",
      'Plausible: Chinese authorities have deliberately left the chamber sealed pending preservation technology, so its state is genuinely undetermined.',
      'Speculative: claims of elaborate intact treasures and traps remain unverified historical text, not archaeological fact.',
    ],
    unsolvedMeaning:
      'Genuinely undetermined: the tomb is real and located, but deliberately unexcavated, so its actual contents cannot currently be confirmed or refuted.',
    sources: [
      'Sima Qian, Records of the Grand Historian (Shiji)',
      'Mausoleum of the First Qin Emperor, en.wikipedia.org',
    ],
  },
  {
    id: 'disappearance-of-the-jianwen-emperor',
    title: 'The Disappearance of the Jianwen Emperor',
    category: 'disappearances',
    wikipedia: 'Jianwen Emperor',
    era: '1402 CE (Ming dynasty)',
    location: { lat: 32.0603, lng: 118.7969, place: 'Nanjing, China' },
    summary:
      'The Jianwen Emperor, second ruler of the Ming dynasty, vanished in 1402 when his uncle Zhu Di seized the capital Nanjing and the imperial palace burned during the Jingnan campaign. A charred body was identified as his, but persistent contemporary doubts held that he had escaped. His uncle, who became the Yongle Emperor, is said to have spent years searching for him.',
    unexplained:
      'Whether the Jianwen Emperor died in the palace fire in 1402 or escaped and lived in hiding, and if so where, was never conclusively established.',
    theories: [
      'Plausible: he perished in the palace fire and the recovered body was genuinely his, as officially declared.',
      "Widely repeated in sources: he escaped disguised as a Buddhist monk and lived in obscurity, prompting Yongle's prolonged searches.",
      'Speculative: legends linking the maritime voyages of Zheng He partly to a search for the lost emperor are unproven.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: no remains were ever definitively confirmed, so his ultimate fate remains an open historical question.',
    sources: ['History of Ming (Mingshi)', 'Jianwen Emperor, en.wikipedia.org'],
  },
  {
    id: 'lost-tomb-of-genghis-khan',
    title: 'The Lost Tomb of Genghis Khan',
    category: 'disappearances',
    wikipedia: 'Tomb of Genghis Khan',
    era: '1227 CE (Mongol Empire)',
    location: {
      lat: 48.5,
      lng: 108.7,
      place: 'Khentii Province (Burkhan Khaldun region), Mongolia',
    },
    summary:
      "Genghis Khan, founder of the Mongol Empire, died in 1227 and was buried in secret according to Mongol custom. Accounts state that the burial party killed those who witnessed the procession and that the grave was concealed, possibly by trampling horses or diverting a river. Despite numerous archaeological searches, the tomb's location has never been found.",
    unexplained:
      "The precise location of Genghis Khan's grave and its contents remain unknown after nearly eight centuries.",
    theories: [
      'Well-supported by tradition: the burial site lies somewhere near the sacred mountain Burkhan Khaldun, which Genghis Khan reportedly favored.',
      'Plausible: deliberate concealment and the prohibition on disturbing the sacred area have kept it hidden.',
      'Speculative: various claimed discoveries and satellite-survey leads remain unconfirmed.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the burial is historically attested but the site has never been located or excavated.',
    sources: ['The Secret History of the Mongols', 'Tomb of Genghis Khan, en.wikipedia.org'],
  },
  {
    id: 'yamashita-treasure',
    title: "Yamashita's Gold",
    category: 'disappearances',
    wikipedia: "Yamashita's gold",
    era: 'World War II (1940s)',
    location: { lat: 14.5995, lng: 120.9842, place: 'Philippines (various alleged sites)' },
    summary:
      "Yamashita's gold refers to alleged caches of war loot supposedly hidden in the Philippines by Japanese forces under General Tomoyuki Yamashita during World War II. Treasure hunters have searched for decades, and a 1988 lawsuit (Roxas v. Marcos) involved claims that a hidden golden Buddha statue and treasure had been seized. No large hoard has ever been verifiably recovered.",
    unexplained:
      'Whether substantial Japanese-looted treasure was actually buried in the Philippines, and if so where, has never been established.',
    theories: [
      'Skeptical/likely myth: most historians regard the large-scale hoards as legend, noting the logistical implausibility and lack of physical evidence.',
      'Partly supported: the Roxas court case suggests at least some valuable objects existed, though not the fabled hoard.',
      'Speculative: proponents claim Allied or Marcos-era recovery operations secretly retrieved the gold.',
    ],
    unsolvedMeaning:
      'Possibly a myth: the core legend is widely doubted by historians and no verified hoard has surfaced, though limited individual claims exist.',
    sources: [
      'Roxas v. Marcos (Hawaii court records, 1988–1996)',
      "Yamashita's gold, en.wikipedia.org",
    ],
  },
  {
    id: 'peking-man-fossils',
    title: 'The Lost Peking Man Fossils',
    category: 'disappearances',
    wikipedia: 'Peking Man',
    era: 'Fossils c. 750,000 years old; lost 1941',
    location: { lat: 39.6864, lng: 115.9239, place: 'Zhoukoudian, near Beijing, China' },
    summary:
      'Peking Man is a collection of Homo erectus fossils excavated at Zhoukoudian near Beijing beginning in the 1920s. In late 1941, as war with Japan intensified, the original fossils were packed for shipment to the United States for safekeeping and disappeared during the chaos around the attack on Pearl Harbor. Only casts and descriptions survive.',
    unexplained:
      'The fate and location of the original Peking Man fossils, lost in transit in 1941, have never been determined.',
    theories: [
      'Plausible: the crates were lost or destroyed amid the Japanese capture of US Marine baggage and shipping near Qinhuangdao.',
      'Plausible: the fossils ended up scattered, buried, or aboard a sunken or seized vessel.',
      'Speculative: various claims that the fossils survive in a private holding remain unverified.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the fossils unquestionably existed and were photographed and cast, but their physical disappearance has never been solved.',
    sources: ["Franz Weidenreich's casts and publications", 'Peking Man, en.wikipedia.org'],
  },
  {
    id: 'heirloom-seal-of-the-realm',
    title: 'The Whereabouts of the Heirloom Seal of the Realm',
    category: 'disappearances',
    wikipedia: 'Heirloom Seal of the Realm',
    era: 'Carved 221 BCE; lost by 10th century CE',
    location: { lat: 34.3416, lng: 108.9398, place: "Chang'an (Xi'an), China" },
    summary:
      'The Heirloom Seal of the Realm was a jade imperial seal supposedly created for Qin Shi Huang and passed down as a symbol of the Mandate of Heaven through successive Chinese dynasties. It is recorded to have changed hands amid wars and was lost during the political turmoil of the Five Dynasties period around the 10th century CE. It was never reliably seen again.',
    unexplained:
      'Whether the seal genuinely survived through all the dynasties attributed to it, and what became of it after the 10th century, are both uncertain.',
    theories: [
      'Plausible: the seal was lost or destroyed in the warfare and dynastic collapse of the early 10th century.',
      "Skeptical: some scholars suspect later 'rediscovered' seals were forgeries used to legitimize rulers.",
      'Speculative: the original may have been destroyed much earlier and replaced by copies.',
    ],
    unsolvedMeaning:
      'Likely lost but unproven, with elements possibly mythologized: the seal is historically attested but its chain of custody and final fate cannot be verified.',
    sources: [
      'Records of the Grand Historian and dynastic histories',
      'Heirloom Seal of the Realm, en.wikipedia.org',
    ],
  },
  {
    id: 'mongol-invasion-fleet-kamikaze',
    title: 'The Kamikaze Typhoons and the Lost Mongol Invasion Fleet',
    category: 'events',
    wikipedia: 'Mongol invasions of Japan',
    era: '1274 and 1281 CE',
    location: { lat: 33.6, lng: 130.4, place: 'Hakata Bay, Kyushu, Japan' },
    summary:
      "Kublai Khan's Mongol-led forces attempted to invade Japan in 1274 and 1281, and both fleets were reportedly devastated by sudden typhoons later mythologized as 'kamikaze' (divine winds). The 1281 fleet was one of the largest naval forces in pre-modern history. Marine archaeology off Takashima has recovered ship remains and anchors confirming a wreck site.",
    unexplained:
      'The true scale of the losses and why such enormous fleets were so catastrophically destroyed remain debated, including how much was storm versus poor ship construction.',
    theories: [
      'Well-supported: archaeological finds confirm large numbers of vessels were wrecked near Takashima.',
      'Increasingly supported: analysis suggests many ships were hastily built river craft poorly suited to open sea, amplifying storm damage.',
      "Traditional/embellished: the 'divine wind' narrative was later amplified for nationalistic and religious purposes.",
    ],
    unsolvedMeaning:
      'Partly resolved, partly open: the invasions and wrecks are firmly documented, but the exact causes and magnitude of the destruction are still studied and debated.',
    sources: [
      'Takashima underwater excavation reports (Kyushu)',
      'Mongol invasions of Japan, en.wikipedia.org',
    ],
  },
  {
    id: 'awa-maru-sinking',
    title: 'The Sinking of the Awa Maru',
    category: 'events',
    wikipedia: 'Awa Maru',
    era: '1945 (World War II)',
    location: { lat: 25, lng: 119.5, place: 'Taiwan Strait' },
    summary:
      'The Awa Maru was a Japanese ocean liner sunk by the American submarine USS Queenfish in 1945 while traveling under a guaranteed safe-conduct as a Red Cross relief ship. Nearly all of its roughly 2,000 passengers died. Persistent rumors held that the ship carried looted gold, platinum, and other treasure, and China conducted a salvage operation in the late 1970s and 1980s.',
    unexplained:
      'Whether the Awa Maru carried a large cargo of looted gold and treasure, as long rumored, was never confirmed by the salvage efforts.',
    theories: [
      'Plausible: the ship carried valuable strategic materials, but the fabled gold hoard was likely exaggerated.',
      'Supported by salvage: Chinese recovery operations retrieved remains and some materials but reportedly not a vast treasure.',
      'Speculative: claims that treasure was secretly removed or never existed both circulate.',
    ],
    unsolvedMeaning:
      'Likely exaggerated but unresolved: the sinking is fully documented, but the treasure rumor was never substantiated despite salvage attempts.',
    sources: [
      'USS Queenfish action reports; Chinese 1977–1980 salvage accounts',
      'Awa Maru (1942), en.wikipedia.org',
    ],
  },
  {
    id: 'lost-records-of-zheng-he-voyages',
    title: "The Lost Records of Zheng He's Treasure Voyages",
    category: 'disappearances',
    wikipedia: 'Ming treasure voyages',
    era: '1405–1433 CE (Ming dynasty)',
    location: { lat: 32.0603, lng: 118.7969, place: 'Nanjing, China' },
    summary:
      'Between 1405 and 1433 the Ming admiral Zheng He led seven enormous maritime expeditions across the Indian Ocean with vast fleets. After the voyages ended, much of the detailed official documentation, including ship logs and records, was reportedly destroyed or suppressed by court officials opposed to the costly expeditions. Surviving accounts are fragmentary.',
    unexplained:
      'The full extent, exact routes, ship dimensions, and reasons for the deliberate destruction of the voyage records remain incompletely known.',
    theories: [
      'Well-supported: anti-expedition factions at court, notably the official Liu Daxia, are traditionally blamed for destroying or hiding the archives.',
      'Plausible: records were lost through ordinary neglect and later fires rather than a single deliberate act.',
      "Speculative: claims about the true size of the 'treasure ships' remain debated due to the missing records.",
    ],
    unsolvedMeaning:
      'Genuinely unresolved on the details: the voyages are firmly historical, but the loss of primary records leaves key facts permanently uncertain.',
    sources: [
      'Ming shi-lu and surviving accounts by Ma Huan and Fei Xin',
      'Ming treasure voyages, en.wikipedia.org',
    ],
  },
  {
    id: 'disappearance-of-the-koguryo-royal-tombs-occupant',
    title: 'The Unidentified Occupants of the Goguryeo Painted Tombs',
    category: 'phenomena',
    wikipedia: 'Complex of Koguryo Tombs',
    era: 'Goguryeo period (c. 5th century CE)',
    location: {
      lat: 41.1544,
      lng: 126.1872,
      place: "Ji'an, Jilin Province, China (Goguryeo tomb complex)",
    },
    summary:
      "The Complex of Koguryo Tombs comprises numerous mural-painted tombs of the Goguryeo kingdom, a UNESCO World Heritage Site with sites in both Ji'an (Jilin, China) and North Korea. Many of the elaborately decorated tombs lack inscriptions identifying their occupants, and most were looted in antiquity. The identities of the individuals buried in several of the most important painted tombs, including the Tomb of the Dancers at Ji'an, remain unknown.",
    unexplained:
      'The specific royal or noble identities of the occupants of many unlabeled Goguryeo tombs cannot be determined.',
    theories: [
      'Well-supported: looting removed grave goods and any identifying items, erasing direct evidence of identity.',
      "Plausible: the murals' iconography indicates high status but is not specific enough to name individuals.",
      'Speculative: tentative attributions to particular kings rest on circumstantial dating and location.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the tombs and their art are well documented, but the identities of many occupants are lost due to looting and the absence of inscriptions.',
    sources: [
      'UNESCO World Heritage nomination documents',
      'Complex of Koguryo Tombs, en.wikipedia.org',
    ],
  },
  {
    id: 'decline-of-mohenjo-daro',
    title: 'Why Mohenjo-daro Was Abandoned',
    category: 'events',
    wikipedia: 'Mohenjo-daro',
    era: 'Built c. 2500 BCE; declined/abandoned c. 1700 BCE',
    location: {
      lat: 27.3242,
      lng: 68.1378,
      place: 'Mohenjo-daro, Larkana District, Sindh (modern Pakistan)',
    },
    summary:
      'Mohenjo-daro was one of the largest cities of the Indus Valley Civilisation, with advanced grid planning, centralized drainage, and over 700 wells, housing tens of thousands of people. Around 1700 BCE it was abandoned along with the other great Indus cities, and the urban civilization broke down. No clear single cause has been established.',
    unexplained:
      'What caused the collapse and abandonment of Mohenjo-daro and the wider Indus urban system around 1700 BCE?',
    theories: [
      "Repeated flooding/silting of the Indus (Mortimer Wheeler's early view; now largely out of favour)",
      'Environmental degradation — recurrent minor floods plus exhaustion of land and resources (Gregory Possehl; reasonably supported)',
      'Shifting/drying rivers and monsoon weakening driving gradual de-urbanization (increasingly supported by paleoclimate data, but not site-specific proof)',
    ],
    unsolvedMeaning:
      "Likely explained but unproven: scholars favour gradual climatic and hydrological decline over any catastrophe, but no single demonstrated cause exists, and the older 'invasion/massacre' idea has been discredited.",
    sources: [
      "Gregory L. Possehl, 'The Indus Civilization: A Contemporary Perspective' (2002)",
      'en.wikipedia.org/wiki/Mohenjo-daro',
    ],
  },
  {
    id: 'mahendraparvata',
    title: 'Mahendraparvata, the Lost Mountain Capital',
    category: 'disappearances',
    wikipedia: 'Mahendraparvata',
    era: 'Founded c. 802 CE (early Khmer Empire)',
    location: {
      lat: 13.578,
      lng: 103.962,
      place: 'Phnom Kulen plateau, Siem Reap Province, Cambodia',
    },
    summary:
      'Mahendraparvata was an early capital of the Khmer Empire associated with the consecration of Jayavarman II in 802 CE on the Phnom Kulen plateau, predating Angkor Wat by about 350 years. Airborne LIDAR surveys in 2012–2013 (Damian Evans, Jean-Baptiste Chevance) revealed a buried grid of roads, dykes, ponds and dozens of previously unknown temples beneath the forest.',
    unexplained:
      'Why was this planned mountain city largely abandoned, and how fully was it ever occupied before the Khmer moved their capital to the lowlands?',
    theories: [
      'Water-management failure on the plateau made the site unsustainable (plausible, supported by hydrological mapping but not conclusive)',
      'It was always a ceremonial/short-lived royal seat that the court deliberately relocated to Hariharalaya (supported by historical texts)',
      'Population and political center simply shifted with imperial expansion toward Angkor (mainstream but underspecified)',
    ],
    unsolvedMeaning:
      "Genuinely open: the city's existence is now confirmed by LIDAR, but the scale of its population and the specific reason for its abandonment remain unestablished.",
    sources: [
      "Evans et al., 'Uncovering archaeological landscapes at Angkor using LiDAR', PNAS (2013)",
      'en.wikipedia.org/wiki/Mahendraparvata',
    ],
  },
  {
    id: 'disappearance-of-jim-thompson',
    title: 'The Disappearance of Jim Thompson',
    category: 'disappearances',
    wikipedia: 'Jim Thompson (designer)',
    era: '1967',
    location: { lat: 4.4716, lng: 101.387, place: 'Cameron Highlands, Pahang, Malaysia' },
    summary:
      "James H. W. Thompson, the American who revived the Thai silk industry, vanished on 26 March 1967 after stepping out for an afternoon walk from a bungalow in Malaysia's Cameron Highlands. An 11-day search by over 500 people across roughly 17 square miles found no body, clothing, or scent trail. Bone fragments found near Brinchang in 1985 were never confirmed as his.",
    unexplained:
      'What happened to Thompson — did he die in the jungle, suffer an accident, or was he abducted or killed?',
    theories: [
      'Accidental death or getting lost/falling in difficult terrain (most prosaic; a 2015 search analysis showed the original search likely had under 50% chance of finding remains even if present)',
      'Abduction or murder by business or political rivals (widely speculated, no evidence)',
      'Voluntary disappearance linked to his wartime OSS/intelligence background (popular but unsupported)',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: no remains or evidence has ever been verified, so even the most mundane explanation (he simply died in the forest) remains unconfirmed.',
    sources: [
      "William Warren, 'Jim Thompson: The Unsolved Mystery' (1970)",
      'en.wikipedia.org/wiki/Jim_Thompson_(businessman)',
    ],
  },
  {
    id: 'disappearance-of-michael-rockefeller',
    title: 'The Disappearance of Michael Rockefeller',
    category: 'disappearances',
    wikipedia: 'Michael Rockefeller',
    era: '1961',
    location: {
      lat: -5.65,
      lng: 138.1,
      place: 'Asmat coast, Dutch New Guinea (now South Papua, Indonesia)',
    },
    summary:
      'Michael Rockefeller, son of New York governor Nelson Rockefeller, disappeared on 19 November 1961 in the Asmat region after his catamaran overturned and he tried to swim 10–12 miles to shore. His companion René Wassing was rescued the next day; Rockefeller was never found and was declared dead in 1964. No remains were ever recovered.',
    unexplained:
      'Did Rockefeller drown or die of exposure attempting the swim, or was he killed by Asmat villagers after reaching shore?',
    theories: [
      'Drowning or death by exhaustion/sharks during the long swim (favoured by his family; consistent with currents and distance)',
      'Killed and consumed by Asmat men in revenge for earlier Dutch colonial killings (documented in missionary and later journalistic testimony, e.g. Carl Hoffman, but never physically proven)',
      'Colonial authorities suppressed findings, leaving the record incomplete (plausible context, not a cause of death)',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: credible drowning and cannibalism accounts both exist, no body was found, and the truth has never been established.',
    sources: ["Carl Hoffman, 'Savage Harvest' (2014)", 'en.wikipedia.org/wiki/Michael_Rockefeller'],
  },
  {
    id: 'roopkund-lake',
    title: 'The Skeleton Lake of Roopkund',
    category: 'phenomena',
    wikipedia: 'Roopkund',
    era: 'Deaths c. 800 CE and c. 1800 CE',
    location: {
      lat: 30.262,
      lng: 79.731,
      place: 'Roopkund glacial lake, Uttarakhand Himalayas, India',
    },
    summary:
      'Roopkund is a small glacial lake at about 5,020 m in the Indian Himalayas where the remains of more than 300 people have been found, first reported by a forest ranger in 1942. A 2019 ancient-DNA study showed the dead belong to genetically distinct groups deposited in at least two separate events, around 800 CE and around 1800 CE, including individuals of South Asian, eastern Mediterranean, and Southeast Asian ancestry.',
    unexplained:
      'Why were people of such different origins — including eastern Mediterranean ancestry — dying at a remote Himalayan lake, especially in the later c. 1800 CE event?',
    theories: [
      'The c. 800 CE deaths resulted from a sudden catastrophe such as a violent hailstorm (supported by some blunt-trauma skull injuries)',
      'The lake lay on a pilgrimage route, so groups died en route over centuries (plausible for the South Asian dead, not for the Mediterranean cluster)',
      "Multiple unrelated disasters over a millennium, with the later Mediterranean-ancestry group's presence still unexplained (the DNA-supported but incomplete picture)",
    ],
    unsolvedMeaning:
      'Recently part-resolved, still open: DNA disproved the single-event idea, but the cause of the later deaths and the route of the Mediterranean-ancestry travelers remain unexplained.',
    sources: [
      "Harney et al., 'Ancient DNA from the skeletons of Roopkund Lake', Nature Communications (2019)",
      'en.wikipedia.org/wiki/Roopkund',
    ],
  },
  {
    id: 'keezhadi-excavation-site',
    title: 'The Disputed Dating of Keezhadi',
    category: 'events',
    wikipedia: 'Keezhadi excavation site',
    era: 'Sangam period; disputed dates c. 6th century BCE onward',
    location: {
      lat: 9.862,
      lng: 78.191,
      place: 'Keezhadi, Sivaganga district, Tamil Nadu, India (near the Vaigai River)',
    },
    summary:
      'Keezhadi is a Sangam-era urban settlement near Madurai, under excavation since 2015. Radiocarbon results have been used to argue for occupation as early as the 6th century BCE (one sample reported at 580 BCE), which would push back the antiquity of Tamil literacy. In 2025 the Archaeological Survey of India asked lead excavator K. Amarnath Ramakrishna to revise his report, sparking a political dispute with Tamil Nadu.',
    unexplained:
      'Do the earliest radiocarbon dates truly apply to the inscribed and cultural layers, or are they compromised by mixed stratigraphy — and how old is Keezhadi really?',
    theories: [
      'The early dates are sound and Tamil-Brahmi literacy is older than long assumed (championed by Tamil Nadu archaeologists)',
      "Refuse pits and disturbed layers mixed materials, so carbon samples may not match the inscribed potsherds (the ASI's methodological objection)",
      'The dispute is partly political, with central and state authorities reading the same data differently (well documented, not a scientific resolution)',
    ],
    unsolvedMeaning:
      'Genuinely unresolved and contested: the scientific interpretation of the earliest dates is disputed among experts and entangled in politics, with no settled chronology.',
    sources: [
      'Reports of the Tamil Nadu State Department of Archaeology, Keezhadi excavations (2017–2025)',
      'en.wikipedia.org/wiki/Keezhadi_excavation_site',
    ],
  },
  {
    id: 'sigiriya',
    title: 'The Purpose and Painted Ladies of Sigiriya',
    category: 'events',
    wikipedia: 'Sigiriya',
    era: '5th century CE (reign of Kashyapa I, 477–495 CE)',
    location: {
      lat: 7.957,
      lng: 80.76,
      place: 'Sigiriya rock, near Dambulla, Central Province, Sri Lanka',
    },
    summary:
      "Sigiriya is a granite rock in Sri Lanka rising approximately 180 m above the surrounding plain, transformed by King Kashyapa I (477–495 CE) into a fortified royal complex with gardens, a Lion Gate, frescoes of women, and a polished 'mirror wall' bearing more than 1,500 ancient verses. After Kashyapa's defeat the capital returned to Anuradhapura and Sigiriya became a Buddhist monastery until around the 13th–14th century.",
    unexplained:
      'Was Sigiriya primarily a defensive fortress, a pleasure palace, or a religious/monastic complex — and who are the women depicted in the frescoes?',
    theories: [
      "Defensive citadel built by a usurper fearing his brother's return (traditional chronicle-based view)",
      "Pleasure palace and elaborate water-garden capital, with defence secondary (supported by the gardens' design)",
      'The fresco women are royal consorts, apsaras, or women in religious procession — identity unconfirmed (open question)',
    ],
    unsolvedMeaning:
      "Genuinely open on specifics: the broad history is well documented, but the site's primary function and the identity of the fresco figures remain unresolved scholarly debates rather than settled facts.",
    sources: [
      "UNESCO World Heritage nomination dossier, 'Ancient City of Sigiriya' (1982)",
      'en.wikipedia.org/wiki/Sigiriya',
    ],
  },
  {
    id: 'kuldhara',
    title: 'The Overnight Abandonment of Kuldhara',
    category: 'events',
    wikipedia: 'Kuldhara',
    era: 'Founded c. 13th century; abandoned by the 19th century',
    location: { lat: 26.823, lng: 70.737, place: 'Kuldhara, near Jaisalmer, Rajasthan, India' },
    summary:
      'Kuldhara was a prosperous Paliwal Brahmin village in the Thar Desert near Jaisalmer, founded around the 13th century, whose 410+ structures now stand empty. Census-type figures show a steep population decline through the 19th century, and most wells had dried up by 1815. Local legend instead claims the villagers vanished overnight after a tyrannical minister, leaving a curse against resettlement.',
    unexplained:
      'Did Kuldhara empty out gradually from water scarcity and economic pressure, or in a sudden coordinated exodus as the legend claims?',
    theories: [
      'Gradual depopulation from drying wells, declining agriculture, and taxation (best supported by documented population figures)',
      'A single overnight exodus to escape a predatory minister, Salim Singh (popular folklore, no documentary proof)',
      'An earthquake destroyed the settlement, per a 2017 study citing collapsed roofs and pillars (one scientific proposal, not widely confirmed)',
    ],
    unsolvedMeaning:
      "Likely explained but unproven: gradual environmental and economic decline is the evidence-based view, while the dramatic 'cursed overnight' story is folklore with no historical support.",
    sources: [
      "Reports on Jaisalmer's Paliwal villages and Kuldhara heritage conservation",
      'en.wikipedia.org/wiki/Kuldhara',
    ],
  },
  {
    id: 'padmanabhaswamy-temple-vault-b',
    title: 'The Sealed Vault B of Padmanabhaswamy Temple',
    category: 'events',
    wikipedia: 'Padmanabhaswamy Temple',
    era: 'Vault sealed since at least the 1880s; disputes ongoing',
    location: {
      lat: 8.4828,
      lng: 76.9434,
      place: 'Sree Padmanabhaswamy Temple, Thiruvananthapuram, Kerala, India',
    },
    summary:
      "When several underground vaults of Kerala's Padmanabhaswamy Temple were inventoried in 2011 under Supreme Court supervision, they yielded one of the largest hoards of temple treasure ever recorded. One chamber, 'Vault B' (Kallara B), was left unopened amid claims it has remained sealed since the 1880s and warnings tied to a 2011 divination ritual. Temple authorities and spiritual heads have repeatedly opposed opening it.",
    unexplained:
      "What does the still-sealed Vault B actually contain, and should it be opened given religious objections and unverified 'omen' warnings?",
    theories: [
      'It holds further immense treasure like the opened vaults (plausible given temple history)',
      "It is a sanctified chamber not meant to be opened, with opening risking 'divine displeasure' (the religious position, unfalsifiable)",
      'Accounts of cobras and a failed 1908 opening attempt are embellished tradition rather than fact (likely, but unverified)',
    ],
    unsolvedMeaning:
      "Genuinely open by choice: the vault's contents are unknown because it remains deliberately unopened amid legal and religious dispute, not because of any demonstrated supernatural barrier.",
    sources: [
      'Supreme Court of India proceedings on Padmanabhaswamy Temple administration (2011 onward)',
      'en.wikipedia.org/wiki/Padmanabhaswamy_Temple',
    ],
  },
  {
    id: 'classic-maya-collapse',
    title: 'The Classic Maya Collapse',
    category: 'events',
    wikipedia: 'Classic Maya collapse',
    era: 'c. 750–950 CE',
    location: {
      lat: 17.222,
      lng: -89.623,
      place: 'Southern Maya Lowlands (Tikal region), Petén, Guatemala',
    },
    summary:
      'Between roughly the 8th and 9th centuries CE, dozens of major southern-lowland Maya city-states, including Tikal, Palenque, Copán and Calakmul, ceased erecting dated monuments, halted monumental construction, and were largely depopulated within a few generations. Northern centres such as Chichen Itza persisted, and the Maya as a people never vanished, but the southern-lowland political order was not rebuilt.',
    unexplained:
      'There is still no agreed explanation for why the densely populated southern lowlands collapsed and were abandoned over a relatively short window while other regions continued. The relative weight of drought, warfare, and political-economic factors is unresolved.',
    theories: [
      'Well-supported (partial): A series of severe multi-decade droughts, documented in lake-sediment and speleothem records, stressed agriculture and water supplies.',
      'Well-supported (partial): Endemic inter-polity warfare plus overpopulation and environmental degradation (deforestation, soil exhaustion) eroded elite legitimacy.',
      'Plausible/debated: Shifts in trade routes from overland to coastal circuits undercut inland elite power, accelerating fragmentation.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved as to cause-weighting: most scholars accept a multi-causal collapse but cannot agree which factors were primary, and the term 'collapse' is increasingly reframed as transformation rather than extinction.",
    sources: [
      'Wikipedia: Classic Maya collapse',
      "Turner & Sabloff, 'Classic Period collapse of the Central Maya Lowlands', PNAS (2012)",
    ],
  },
  {
    id: 'the-abandonment-of-cahokia',
    title: 'The Abandonment of Cahokia',
    category: 'events',
    wikipedia: 'Cahokia',
    era: 'c. 1050–1400 CE',
    location: {
      lat: 38.661,
      lng: -90.061,
      place: 'Cahokia Mounds, near Collinsville, Illinois, USA',
    },
    summary:
      'Cahokia, the largest pre-Columbian settlement north of Mexico, rose rapidly around 1050 CE to perhaps 15,000–20,000 people with monumental earthen mounds, then steadily lost population after about 1200 and was essentially abandoned by around 1400. The Mississippian builders dispersed, leaving no written records.',
    unexplained:
      'Why a city of that scale was deliberately abandoned remains unexplained, and recent work has actively undercut a leading hypothesis (self-inflicted flooding from deforestation), deepening rather than resolving the question.',
    theories: [
      'Debated: Climatic stress, including Little Ice Age drought and shifting flood regimes, made the floodplain less reliable for maize agriculture.',
      'Debated: Political and social upheaval or factional conflict drove out-migration rather than a single environmental shock.',
      'Recently weakened: Overharvesting of timber causing recurrent destructive floods — sediment evidence now argues against this once-popular model.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: no consensus cause, and a formerly favored explanation was recently ruled out, so the abandonment is more open than it appeared a decade ago.',
    sources: [
      'Wikipedia: Cahokia',
      'Rankin et al., on Little Ice Age drought and Cahokia abandonment (2021)',
    ],
  },
  {
    id: 'the-collapse-of-tiwanaku',
    title: 'The Collapse of Tiwanaku',
    category: 'events',
    wikipedia: 'Tiwanaku',
    era: 'c. 1000–1100 CE (decline)',
    location: { lat: -16.554, lng: -68.673, place: 'Tiwanaku, near Lake Titicaca, Bolivia' },
    summary:
      'Tiwanaku was a major Andean state centered south of Lake Titicaca, with monumental architecture including the unfinished Pumapunku complex. Its political and ceremonial system unraveled around 1000–1100 CE, after which the urban core was abandoned and its raised-field agriculture ceased.',
    unexplained:
      'The cause and tempo of the collapse are disputed: chronologies differ on whether a prolonged drought preceded or followed the decline, leaving open whether environment or internal upheaval was decisive.',
    theories: [
      'Long-standing: A prolonged regional drought collapsed the raised-field agricultural base, scattering populations into the highlands.',
      'Competing: New climate chronologies suggest drought postdated the start of collapse, pointing instead to internal social or political upheaval as the trigger.',
      'Note on Pumapunku: Its incomplete state shows construction halted mid-project, consistent with abrupt disruption but not diagnostic of the cause.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: drought and social-collapse models compete, and refined climate dating has complicated the once-dominant drought-first narrative.',
    sources: [
      'Wikipedia: Tiwanaku',
      "Marsh et al., 'A Radiocarbon Chronology of the Pumapunku Complex', and related Tiwanaku climate studies",
    ],
  },
  {
    id: 'the-mesoamerican-crystal-skulls',
    title: 'The Mesoamerican Crystal Skulls',
    category: 'phenomena',
    wikipedia: 'Crystal skull',
    era: 'Claimed pre-Columbian; actually 19th century',
    location: {
      lat: 19.433,
      lng: -99.133,
      place: 'Said to be Mexico/Mesoamerica; provenance via European dealers',
    },
    summary:
      'Several quartz human-skull carvings, including specimens at the British Museum and the Smithsonian, were long promoted as pre-Columbian Aztec or Maya masterpieces. Scientific examination of every skull made available for study found tool marks from rotary lapidary wheels unknown in the Americas before contact.',
    unexplained:
      'The genuinely open historical question is who manufactured the skulls and through which workshops and dealers they entered museum collections, not whether they are ancient.',
    theories: [
      'Strongly supported: The skulls are 19th-century or later European-made carvings, likely linked to the Paris dealer Eugène Boban, not ancient Mesoamerican artifacts.',
      'Supported: Microscopy shows modern rotary-tool grinding inconsistent with pre-Columbian lapidary technique.',
      'Pseudoscientific (rejected): Paranormal claims of supernatural origin or powers have no evidentiary support.',
    ],
    unsolvedMeaning:
      'Effectively debunked as pre-Columbian artifacts: the ancient attribution is refuted by materials analysis. The only remaining open question is the precise modern manufacturing and dealer history.',
    sources: [
      'Wikipedia: Crystal skull',
      "Sax et al., 'The origins of two purportedly pre-Columbian Mexican crystal skulls', Journal of Archaeological Science (2008)",
    ],
  },
  {
    id: 'the-walam-olum',
    title: 'The Walam Olum',
    category: 'ciphers',
    wikipedia: 'Walam Olum',
    era: 'Published 1836; claimed ancient Lenape origin',
    location: {
      lat: 39.95,
      lng: -75.165,
      place: 'Mid-Atlantic / Delaware (Lenape) region, eastern USA',
    },
    summary:
      "The Walam Olum ('Red Record') is a purported pictographic migration narrative of the Lenape, published by Constantine Rafinesque in the 1830s. Linguistic and manuscript analyses in the 1980s–90s found that its 'Lenape' text matched published 19th-century word lists and that its glyphs were hybrids of printed Egyptian, Chinese, and Maya signs.",
    unexplained:
      'It remains debated how much, if any, authentic Lenape oral tradition Rafinesque drew upon when fabricating the document, and some Lenape descendants maintain it reflects real stories.',
    theories: [
      "Strongly supported: A 19th-century hoax composed by Rafinesque from already-printed Lenape vocabularies and borrowed pictographs (Oestreicher's analysis).",
      'Minority/cultural: Some Delaware community members hold that genuine Lenape narratives underlie the text.',
      'Historical-interest: Even as a forgery it shaped a century of scholarship before being discredited.',
    ],
    unsolvedMeaning:
      'Now widely judged a forgery: the authenticity question is largely resolved against it, with only the degree of any genuine source material still debated at the margins.',
    sources: [
      'Wikipedia: Walam Olum',
      "Oestreicher, 'Unmasking the Walam Olum' (1994); Archaeology Magazine, 'Walam Olum Hokum'",
    ],
  },
  {
    id: 'the-acre-geoglyphs',
    title: 'The Acre Geoglyphs of Amazonia',
    category: 'phenomena',
    wikipedia: 'Acre geoglyphs',
    era: 'c. 500 BCE – 1300 CE',
    location: { lat: -9.97, lng: -67.8, place: 'Acre state, western Brazilian Amazon' },
    summary:
      'Hundreds of large geometric ditched enclosures — circles, squares, and connected forms up to roughly 300 m across — have been revealed across Acre as deforestation exposed them. Dating shows they were built and used over roughly two millennia in forests that people had managed rather than clear-cut.',
    unexplained:
      'There is no consensus on what the enclosures were for: they show little evidence of dense habitation or defense, and their precise social and ceremonial function is unresolved.',
    theories: [
      'Leading: Ceremonial or ritual gathering places used periodically rather than permanently inhabited.',
      'Plausible: Multifunctional public or communal spaces, possibly for seasonal aggregation.',
      'Largely set aside: Purely defensive or residential roles, which the sparse occupation debris does not support.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved on function: their existence, age, and construction are documented, but archaeologists explicitly state there is no agreed interpretation of their purpose.',
    sources: [
      'Wikipedia: Acre geoglyphs',
      "Watling et al., 'Impact of pre-Columbian geoglyph builders on Amazonian forests', PNAS (2017)",
    ],
  },
  {
    id: 'the-lost-maya-codices',
    title: 'The Lost Maya Codices',
    category: 'events',
    wikipedia: 'Maya codices',
    era: 'Destroyed largely 16th century CE',
    location: {
      lat: 20.36,
      lng: -89.39,
      place: "Maní, Yucatán, Mexico (site of Landa's 1562 book burning)",
    },
    summary:
      'The Maya produced numerous folding bark-paper books recording calendrical, astronomical, ritual, and historical knowledge. Spanish colonial authorities, notably Bishop Diego de Landa at Maní in 1562, destroyed them en masse; only a handful of pre-conquest Maya books survive today.',
    unexplained:
      'How much Maya knowledge was irretrievably lost — and what those destroyed books contained — cannot be recovered, leaving large gaps in Maya history that the surviving codices and inscriptions only partly fill.',
    theories: [
      "Documented fact: Deliberate colonial destruction (Landa's auto-da-fé and similar acts) eliminated the great majority of Maya books.",
      'Contributing: Tropical climate and time destroyed many others that escaped burning, since organic bark paper rarely survives.',
      'Open: The full scope and content of the lost corpus is unknowable; estimates of how many books existed are inferential.',
    ],
    unsolvedMeaning:
      'The destruction is historically explained; what is permanently unsolved is the lost content — genuinely unrecoverable knowledge rather than an open whodunit.',
    sources: [
      'Wikipedia: Maya codices',
      "Landa, 'Relación de las cosas de Yucatán' (1566); Coe, 'Breaking the Maya Code'",
    ],
  },
  {
    id: 'paititi',
    title: 'Paititi, the Lost Inca Refuge',
    category: 'disappearances',
    wikipedia: 'Paititi',
    era: 'Post-1532 CE (Inca conquest aftermath)',
    location: {
      lat: -12.5,
      lng: -71,
      place: 'Madre de Dios montane forest, southeastern Peru (purported region)',
    },
    summary:
      'Paititi is a legendary Inca city or rich land said to lie in the rainforest east of the Andes, often linked to Inca treasure unaccounted for after the Spanish conquest. A 2001 Vatican-archive letter from missionary Andrés López, published by researcher Mario Polia, describes a gold-rich jungle settlement, and numerous expeditions have searched the region.',
    unexplained:
      'Whether Paititi was a real refuge settlement or a conflation of myth and colonial rumor is unresolved; no site matching the legend has been confirmed, though genuine Inca and pre-Inca ruins have been found in the search zone.',
    theories: [
      'Plausible: A real late-Inca refuge or frontier settlement in the eastern montane forest, since the Inca did retreat eastward (e.g., Vilcabamba).',
      'Skeptical: A legend amplified by El Dorado-style treasure lore and colonial documents, with no single lost city to find.',
      'Cautionary: Multiple modern expeditions have ended in deaths or disappearances, fueling the mystique without confirming the city.',
    ],
    unsolvedMeaning:
      'Possibly mythological but genuinely unresolved: there is real documentary basis for an eastern Inca refuge, but no verified site, so it sits between legend and unconfirmed history.',
    sources: ['Wikipedia: Paititi', 'Polia, on the López letter from the Vatican Archives (2001)'],
  },
  {
    id: 'the-maya-codex-of-mexico',
    title: 'The Maya Codex of Mexico (Grolier Codex)',
    category: 'ciphers',
    wikipedia: 'Maya Codex of Mexico',
    era: 'c. 1100–1250 CE; surfaced 1960s',
    location: {
      lat: 16.75,
      lng: -92.63,
      place: 'Reportedly a cave in Chiapas, Mexico; surfaced via the antiquities market',
    },
    summary:
      "First shown publicly in 1971 as the 'Grolier Codex,' this Maya bark-paper book presents a Venus almanac. Its looted, undocumented origin and unusually plain style fueled a 46-year dispute over whether it was a genuine pre-conquest manuscript or a modern forgery on ancient blank paper.",
    unexplained:
      'The remaining open question is its exact provenance and how it left Mexico, since the authenticity debate that defined it for decades has now been settled in its favor.',
    theories: [
      'Now favored/resolved: Multidisciplinary analysis of pigments, paper, and iconography concluded it is authentic, making it the oldest surviving book of the Americas; Mexico renamed it the Códice Maya de México in 2018.',
      'Former position: Skeptics long argued the crude drawings and absent archaeological context indicated a 20th-century fake.',
      'Still open: Its precise findspot and chain of custody remain undocumented because it was looted, not excavated.',
    ],
    unsolvedMeaning:
      'Authenticity recently resolved in its favor after 2016–2018 analyses; the entry qualifies as unsolved only in the narrow sense that its looted provenance and chain of custody remain undocumented.',
    sources: [
      'Wikipedia: Maya Codex of Mexico',
      'Coe, Houston, Miller & Taube, study declaring the Grolier Codex authentic (2015–2016)',
    ],
  },
  {
    id: 'who-built-great-zimbabwe',
    title: 'The Builders and Function of Great Zimbabwe',
    category: 'events',
    wikipedia: 'Great Zimbabwe',
    era: 'c. 1100–1450 CE',
    location: {
      lat: -20.2674,
      lng: 30.9337,
      place: 'Great Zimbabwe ruins, near Masvingo, Zimbabwe',
    },
    summary:
      'Great Zimbabwe is a vast medieval dry-stone city in southeastern Zimbabwe, the largest such complex in sub-Saharan Africa, with mortarless granite walls up to 11 metres high. Colonial-era writers attributed it to Phoenicians, Arabs or other outsiders; excavations by David Randall-MacIver (1905) and Gertrude Caton-Thompson (1929) established it as an indigenous Shona-Bantu construction. Much early stratigraphy was destroyed by treasure-hunters before scientific study.',
    unexplained:
      "The builders' African origin is settled, but the internal organization, exact function of structures like the Conical Tower, and the precise reasons for the site's 15th-century decline remain debated because so much context was destroyed before careful excavation.",
    theories: [
      'Indigenous Shona/Karanga capital and trade-and-ritual center — well supported, the scholarly consensus.',
      'Decline driven by environmental exhaustion (overgrazing, soil/water depletion) and shifting gold-trade routes — supported but not proven.',
      'Foreign (Phoenician/Sabaean) builders — discredited; a colonial-era racial fabrication with no evidence.',
    ],
    unsolvedMeaning:
      "The 'who built it' question is long resolved (indigenous African), but specific questions about function and collapse are genuinely open largely because early treasure-hunting destroyed the stratigraphic evidence.",
    sources: [
      'Caton-Thompson, G. (1931). The Zimbabwe Culture: Ruins and Reactions.',
      'Pikirayi, I. (2001). The Zimbabwe Culture: Origins and Decline of Southern Zambezian States.',
    ],
  },
  {
    id: 'zimbabwe-soapstone-birds',
    title: 'The Meaning of the Great Zimbabwe Soapstone Birds',
    category: 'phenomena',
    wikipedia: 'Zimbabwe Bird',
    era: 'c. 1100–1450 CE',
    location: { lat: -20.2674, lng: 30.9335, place: 'Great Zimbabwe, Zimbabwe' },
    summary:
      'At least eight carved soapstone birds, each roughly 40 cm tall and mounted on tall columns, were recovered from Great Zimbabwe. They blend avian and human features (lips rather than beaks, five-toed feet) and are stylistically unique — nothing comparable has been found anywhere else. One bird became the national emblem of Zimbabwe.',
    unexplained:
      "What the birds represent and what specific role they played in the city's ritual or political life is unknown, since no comparable iconography or explanatory texts survive.",
    theories: [
      'Emblems of royal authority or dynastic ancestors used in ritual — plausible and widely held, but inferential.',
      'Representations of a specific raptor (e.g. fish eagle or bateleur) as a messenger between living and ancestors — supported by some Shona ethnography, not conclusive.',
      'Generic religious totems with no fixed referent — possible; reflects genuine absence of evidence.',
    ],
    unsolvedMeaning:
      'Genuinely no decisive evidence either way; interpretations rest on later Shona ethnography and analogy, not on any contemporary explanatory source.',
    sources: [
      'Matenga, E. (1998). The Soapstone Birds of Great Zimbabwe.',
      "Metropolitan Museum of Art essay, 'Great Zimbabwe'.",
    ],
  },
  {
    id: 'decline-of-nok-culture',
    title: 'The Disappearance of the Nok Culture',
    category: 'disappearances',
    wikipedia: 'Nok culture',
    era: 'c. 1500 BCE – 300 CE',
    location: { lat: 9.6667, lng: 8.0833, place: 'Nok region, central Nigeria' },
    summary:
      'The Nok culture of central Nigeria produced distinctive large-scale terracotta figures and was among the earliest sub-Saharan societies to work iron. Its material record shows a sharp drop after roughly 300 CE, after which Nok terracotta and pottery effectively vanish from the archaeological layers.',
    unexplained:
      'There is no documented cause for the relatively abrupt decline and disappearance of Nok material culture around the early centuries CE.',
    theories: [
      'Environmental stress and resource overexploitation (including heavy charcoal use for iron-smelting) — discussed in recent research, not established.',
      'Epidemic, famine, or displacement by incoming groups — speculative, no direct evidence.',
      "Cultural continuity that simply changed material form (so 'disappearance' is partly an archaeological visibility artifact) — plausible, under-tested.",
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the archaeological record documents the decline but offers no evidence favoring any single cause.',
    sources: [
      'Breunig, P. (ed.) (2014). Nok: African Sculpture in Archaeological Context.',
      "Archaeology Magazine, 'The Nok of Nigeria.'",
    ],
  },
  {
    id: 'collapse-of-the-kingdom-of-aksum',
    title: 'The Collapse of the Kingdom of Aksum',
    category: 'events',
    wikipedia: 'Kingdom of Aksum',
    era: 'c. 1st–7th century CE (collapse 6th–7th c.)',
    location: { lat: 14.13, lng: 38.7167, place: 'Aksum, Tigray, Ethiopia' },
    summary:
      'Aksum was a major trading empire of the northern Ethiopian–Eritrean highlands, minting its own coinage and controlling Red Sea commerce via the port of Adulis. From the 6th–7th centuries it declined sharply, abandoned its coinage, and the capital lost regional dominance.',
    unexplained:
      'Scholars still debate the primary driver of the collapse; no single factor is demonstrably decisive for the specific 6th–7th century timing.',
    theories: [
      'Loss of Red Sea trade after the rise of the Caliphate and Arab control of the coasts — strongly supported as a major factor.',
      'Environmental degradation (deforestation, soil exhaustion, drought, locusts) — supported but criticized because such episodes recurred without collapse.',
      'The Plague of Justinian (Yersinia pestis) reaching Aksum via Yemen and Eritrean ports — plausible, hard to prove.',
    ],
    unsolvedMeaning:
      'Likely a combination of largely identified pressures, but which was decisive — and why collapse came exactly when it did — remains genuinely unproven.',
    sources: [
      'Phillipson, D.W. (2012). Foundations of an African Civilisation: Aksum and the Northern Horn.',
      'Munro-Hay, S. (1991). Aksum: An African Civilisation of Late Antiquity.',
    ],
  },
  {
    id: 'undeciphered-meroitic-language',
    title: 'The Undeciphered Meroitic Language',
    category: 'ciphers',
    wikipedia: 'Meroitic script',
    era: 'c. 300 BCE – 400 CE',
    location: { lat: 16.9333, lng: 33.75, place: 'Meroë, River Nile, Sudan' },
    summary:
      "The Kingdom of Kush at Meroë used the Meroitic script, with both hieroglyphic and cursive forms. F. Ll. Griffith deciphered the script's phonetic values around 1909, so the signs can be read aloud, but the underlying language is still only partially understood.",
    unexplained:
      'Although words can be transliterated, the grammar and most vocabulary of Meroitic remain untranslated, so the bulk of texts cannot be read for meaning.',
    theories: [
      "Meroitic belongs to the Northern Eastern Sudanic languages — increasingly supported (per Claude Rilly's work) but does not yet yield full translation.",
      "Decipherment is blocked mainly by the absence of a long bilingual 'Rosetta Stone'-type text — widely accepted as the core obstacle.",
      'It is a language isolate with no close living relatives — a minority view, weakening as linguistic links are proposed.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the writing is readable phonetically, but the language itself is not, pending a substantial bilingual text or further comparative linguistic work.',
    sources: [
      'Rilly, C. & de Voogt, A. (2012). The Meroitic Language and Writing System.',
      'Griffith, F.Ll. (1911–1912). Meroitic Inscriptions.',
    ],
  },
  {
    id: 'atlantic-voyage-predecessor-mansa-musa',
    title: "The Atlantic Voyage of Mansa Musa's Predecessor",
    category: 'disappearances',
    wikipedia: 'Mansa Musa',
    era: 'early 14th century CE',
    location: { lat: 19.9, lng: -17, place: 'Atlantic coast off West Africa (departure region)' },
    summary:
      "The 14th-century Egyptian writer al-Umari recorded Mansa Musa's account that his predecessor (often named Abu Bakr II) sent a large fleet across the Atlantic to find its far shore; one ship reportedly returned, after which the ruler led an even larger fleet himself and never came back. This single second-hand report is the entire documentary basis.",
    unexplained:
      'Whether such voyages actually occurred at the described scale — and what became of the ships — cannot be confirmed or refuted from the surviving evidence.',
    theories: [
      'The fleets sailed and were lost at sea (storms, currents) — consistent with the text if the account is genuine.',
      "The story is a court anecdote or exaggeration, possibly legitimizing Musa's accession — quite possible.",
      'The fleet reached the Americas (pre-Columbian contact) — popular but unsupported; no archaeological evidence exists.',
    ],
    unsolvedMeaning:
      'Possibly partly myth or court narrative: it rests on one second-hand account, and the trans-Atlantic-contact version is unsupported by any physical evidence.',
    sources: [
      'al-Umari, Masalik al-absar fi mamalik al-amsar (14th c.).',
      'Levtzion, N. & Hopkins, J.F.P. (1981). Corpus of Early Arabic Sources for West African History.',
    ],
  },
  {
    id: 'origins-of-the-igbo-ukwu-bronzes',
    title: 'The Origins of the Igbo-Ukwu Bronzes',
    category: 'phenomena',
    wikipedia: 'Igbo-Ukwu',
    era: 'c. 9th–10th century CE (disputed)',
    location: { lat: 6.0167, lng: 7.0167, place: 'Igbo-Ukwu, Anambra State, Nigeria' },
    summary:
      'Excavations at Igbo-Ukwu by Thurstan Shaw revealed hundreds of extraordinarily intricate leaded-bronze objects made by the lost-wax method, plus approximately 165,000 imported glass and carnelian beads. Radiocarbon dates point to roughly the 9th–10th century CE, making them among the oldest bronzes in West Africa with no obvious local antecedents.',
    unexplained:
      'How such technically sophisticated metalworking appears with no known local precursors — and whether the early radiocarbon dating is correct — remains contested.',
    theories: [
      'Indigenous innovation by an early Igbo polity with long-distance trade links (explaining the beads) — the mainstream view.',
      'The 9th-century radiocarbon dates are too early and the objects are later medieval — a minority dating dispute that persists.',
      'External technical influence from the Nile Valley or North Africa — proposed but lacking direct evidence.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved on two fronts: the source of the metallurgical tradition and a real, ongoing dispute over the radiocarbon chronology.',
    sources: [
      'Shaw, T. (1970). Igbo-Ukwu: An Account of Archaeological Discoveries in Eastern Nigeria.',
      'Igbo-Ukwu at 50 symposium papers, Azania: Archaeological Research in Africa (2020s).',
    ],
  },
  {
    id: 'location-of-the-land-of-punt',
    title: 'The Location of the Land of Punt',
    category: 'disappearances',
    wikipedia: 'Land of Punt',
    era: 'c. 2500–1000 BCE (recorded contacts)',
    location: { lat: 15, lng: 39.5, place: 'Horn of Africa / southern Red Sea coast (disputed)' },
    summary:
      "Punt was a wealthy land recorded in Egyptian texts as a source of gold, incense, ebony and exotic animals, most famously depicted in Hatshepsut's expedition reliefs at Deir el-Bahari. Despite over a millennium of documented trade, its physical location was never fixed by the Egyptians in modern geographic terms.",
    unexplained:
      'The exact location of Punt — and whether it was a single fixed polity — is still debated, ranging across Eritrea, Sudan, the Somali coast, the Ethiopian highlands and the Arabian side of the Red Sea.',
    theories: [
      'A region of the African Red Sea coast around Eritrea and eastern Sudan — currently the most accepted view.',
      'The broader Horn of Africa, supported by isotopic analysis of mummified baboons pointing to that region — strong recent evidence.',
      'An Arabian-side or trans-Red Sea location — minority view, weakened by recent data.',
    ],
    unsolvedMeaning:
      'Likely narrowing toward the African Red Sea coast and Horn of Africa (recent isotope work on mummified baboons), but not definitively resolved to a precise place or polity.',
    sources: [
      "Dominy, N. et al. (2020), 'Mummified baboons reveal the far reach of early Egyptian mariners,' eLife.",
      "Kitchen, K.A. (1993), 'The Land of Punt,' in The Archaeology of Africa.",
    ],
  },
  {
    id: 'construction-of-the-rock-hewn-churches-of-lalibela',
    title: 'The Construction of the Rock-Hewn Churches of Lalibela',
    category: 'phenomena',
    wikipedia: 'Rock-Hewn Churches, Lalibela',
    era: 'c. 7th–13th century CE (debated)',
    location: { lat: 12.0317, lng: 39.0411, place: 'Lalibela, Amhara Region, Ethiopia' },
    summary:
      "Lalibela's eleven monolithic churches were carved downward and inward out of solid volcanic rock, complete with interiors, columns and connecting tunnels. Tradition credits King Lalibela with building them in a single reign; archaeologists argue for multiple phases, some possibly reusing earlier Aksumite-era rock structures.",
    unexplained:
      'The precise dating, sequence of construction, and the engineering logistics — including where the substantial volume of excavated rock was deposited — are not fully established.',
    theories: [
      'Multi-phase construction over several centuries, partly reusing pre-existing rock-cut structures (per D. Phillipson) — the best-supported scholarly position.',
      'Single concentrated 12th–13th-century royal program as tradition holds — possible for some churches, but a 24-year single-reign timeline is considered unrealistic for all eleven.',
      'Supernatural or angelic construction as in local legend — folklore, not a historical explanation.',
    ],
    unsolvedMeaning:
      "Broadly explained (human, multi-phase carving) but genuinely unresolved in detail: dating and construction sequence remain open. The 'missing spoil' is a real but mundane engineering question, not evidence of mystery.",
    sources: [
      'Phillipson, D.W. (2009). Ancient Churches of Ethiopia.',
      "UNESCO World Heritage Centre, 'Rock-Hewn Churches, Lalibela.'",
    ],
  },
  {
    id: 'black-death-origin-and-spread',
    title: 'Black Death Origin and Spread',
    category: 'events',
    wikipedia: 'Black Death',
    era: 'Mid-14th century, 1346–1353',
    location: { lat: 45.031, lng: 35.383, place: 'Caffa (Feodosiya), Crimea' },
    summary:
      "The Black Death killed an estimated 30–60% of Europe's population between 1347 and 1351, one of the deadliest pandemics in human history. Modern ancient-DNA analysis has confirmed Yersinia pestis as the causative bacterium, tracing the outbreak to Central Asia. The precise ecological and social conditions that caused the bacterium to erupt into pandemic form in the 1340s are still debated.",
    unexplained:
      'Why the mid-14th-century outbreak was so catastrophically virulent compared to earlier and later plague epidemics, and why it disappeared from Western Europe after the 1350s only to return in waves, remains incompletely explained.',
    theories: [
      'Well supported: A confluence of climatic cooling (onset of Little Ice Age), famine, and rodent population disruption in Central Asia drove the initial epizootic and human spillover.',
      'Contested: A unique, more virulent strain of Y. pestis circulated in the 14th century that was later replaced — ancient-DNA studies show some genetic distinctiveness but no proven virulence difference.',
      'Speculative: Co-infection with anthrax or viral haemorrhagic fever explains mortality rates exceeding what bubonic plague alone typically causes — proposed but not substantiated by paleopathological evidence.',
    ],
    unsolvedMeaning:
      'Likely explained but unproven: Y. pestis is confirmed as the agent, but the specific ecological trigger for the 1340s pandemic scale and the reasons for its peculiar epidemiological pattern remain open research questions.',
    sources: [
      "Benedictow, O.J., 'The Black Death 1346-1353: The Complete History' (2004), Boydell Press.",
      "Spyrou, M.A. et al., 'Phylogeography of the second plague pandemic revealed through analysis of historical Y. pestis genomes', Nature Communications 10, 2019.",
    ],
  },
  {
    id: 'shroud-of-turin',
    title: 'Shroud of Turin',
    category: 'phenomena',
    wikipedia: 'Shroud of Turin',
    era: 'First attested c. 1354; radiocarbon-dated to 1260–1390',
    location: { lat: 45.0703, lng: 7.6869, place: 'Turin Cathedral, Turin, Italy' },
    summary:
      "The Shroud of Turin is a linen cloth bearing the negative image of a man bearing wounds consistent with crucifixion, venerated by many Catholics as the burial cloth of Jesus. In 1988, independent radiocarbon dating by three laboratories dated the cloth to 1260–1390 CE. The image's formation mechanism has not been fully replicated despite numerous scientific attempts.",
    unexplained:
      'How the image was formed — whether by a medieval artistic or chemical process, by decomposition gases, or by some other mechanism — has not been definitively established. The 1988 radiocarbon date is accepted by most scientists but disputed by some researchers who cite possible contamination.',
    theories: [
      'Well supported by radiocarbon evidence: The shroud is a medieval artifact, likely created c. 1300–1400, possibly as a devotional object — consistent with its first documented appearance in Lirey, France, c. 1354.',
      "Contested: The radiocarbon sample was taken from a repaired section and does not represent the cloth's true age — some textile and chemical analyses have been cited in support, but not independently replicated.",
      'Speculative: The image was produced by a burst of radiation during resurrection — asserted by some proponents but has no scientific basis and no testable mechanism.',
    ],
    unsolvedMeaning:
      'Likely explained but unproven: the balance of scientific evidence strongly favours a medieval origin, but the exact method of image formation has not been reproduced, and the radiocarbon-sample controversy means the authentication debate persists in specialist literature.',
    sources: [
      "Damon, P.E. et al., 'Radiocarbon dating of the Shroud of Turin', Nature 337, 1989, pp. 611–615.",
      "Nickell, J., 'Inquest on the Shroud of Turin' (1983, updated 1998), Prometheus Books.",
    ],
  },
  {
    id: 'death-of-edward-ii',
    title: 'Death of Edward II of England',
    category: 'disappearances',
    wikipedia: 'Edward II of England',
    era: 'Late Medieval, 1327',
    location: { lat: 51.691, lng: -2.458, place: 'Berkeley Castle, Gloucestershire, England' },
    summary:
      'Edward II was deposed in January 1327 and imprisoned at Berkeley Castle, where he was officially declared dead on 21 September 1327. His death was announced by his captors Roger Mortimer and Queen Isabella; a funeral was held and he was buried at Gloucester Cathedral. No contemporary independent witness confirmed seeing his corpse, and rumours of his survival circulated almost immediately.',
    unexplained:
      'Whether Edward II was actually murdered at Berkeley Castle or escaped and lived on the continent remains unresolved. A letter (the Fieschi Letter, c. 1337) purportedly written by a papal notary claims Edward escaped and lived as a hermit in Italy.',
    theories: [
      'Likely: Edward II was murdered at Berkeley Castle, probably by suffocation or other violent means arranged by Mortimer — the traditional view supported by the speed of the official announcement and political motive.',
      "Contested: The Fieschi Letter is genuine and Edward escaped; some Italian archival evidence has been cited as corroboration, though historians remain divided on the letter's reliability.",
      'Speculative: Edward was transferred to Corfe Castle and survived for years in secret captivity — based on a later chronicle account but lacking corroborating evidence.',
    ],
    unsolvedMeaning:
      "Genuinely no evidence either way: no autopsy, no independent deathbed witness, and the Fieschi Letter's authenticity and meaning remain debated by medievalists, leaving the manner and even fact of his death at Berkeley formally unproven.",
    sources: [
      "Ian Mortimer, 'The Greatest Traitor: The Life of Sir Roger Mortimer' (2003), Pimlico.",
      "Cuttino, G.P. and Lyman, T.W., 'Where is Edward II?', Speculum 53(3), 1978, pp. 522–544.",
    ],
  },
  {
    id: 'fate-of-the-templar-fleet',
    title: 'Fate of the Knights Templar Fleet',
    category: 'disappearances',
    wikipedia: 'Knights Templar',
    era: 'Late Medieval, 1307',
    location: {
      lat: 46.16,
      lng: -1.151,
      place: 'La Rochelle, France (last known departure point)',
    },
    summary:
      'When Philip IV of France ordered the arrest of the Knights Templar on 13 October 1307, the Templar fleet based at La Rochelle reportedly sailed before the arrests could be executed. No contemporary document records where the fleet went, what cargo it carried, or what became of the ships and men aboard.',
    unexplained:
      "The destination and fate of the Templar fleet that departed La Rochelle in October 1307 — including whether it carried the order's treasury, relics, or archives — is entirely undocumented.",
    theories: [
      'Plausible: The fleet sailed to Scotland, Portugal, or other kingdoms sympathetic to the Templars, where the order continued in altered form — circumstantial evidence exists for Templar activity in Portugal (which became the Order of Christ).',
      'Speculative: The fleet carried the Templar treasure or the Holy Grail to a hidden location — a popular legend with no documentary support.',
      'Possible: The fleet dispersed, with individual ships absorbed into local maritime commerce or other orders, leaving no single destination — consistent with the complete absence of any unified record.',
    ],
    unsolvedMeaning:
      "Genuinely no evidence either way: the fleet's departure is attested by a single near-contemporary source; its subsequent history is entirely absent from the historical record, making this one of the cleanest genuine historical unknowns of the medieval period.",
    sources: [
      "Barber, M., 'The Trial of the Templars' (2nd ed., 2006), Cambridge University Press.",
      "Nicholson, H., 'The Knights Templar: A New History' (2001), Sutton Publishing.",
    ],
  },
  {
    id: 'massacre-at-beziers',
    title: "Massacre at Béziers and the 'Kill Them All' Quote",
    category: 'events',
    wikipedia: 'Massacre at Béziers',
    era: 'Medieval, 1209',
    location: { lat: 43.3441, lng: 3.215, place: 'Béziers, Languedoc, France' },
    summary:
      "During the Albigensian Crusade, crusader forces sacked Béziers on 22 July 1209 and killed a large portion of its population. The chronicler Caesarius of Heisterbach, writing decades later, attributed to the papal legate Arnaud Amalric the phrase 'Kill them all, God will know his own' when asked how to distinguish Catholics from Cathars. Modern estimates of the death toll range widely from several thousand to the entire population.",
    unexplained:
      'Whether Arnaud Amalric actually uttered the famous command, and what the actual death toll of the massacre was, cannot be determined from surviving sources.',
    theories: [
      'Likely: A large-scale indiscriminate massacre did occur, as attested by multiple near-contemporary sources including a letter by Arnaud Amalric himself (though he does not mention the quote).',
      'Contested: The famous quote is a later literary invention by Caesarius, who was not present and wrote approximately 30 years after the event — most historians regard it as apocryphal.',
      "Uncertain: Death toll estimates range from 7,000 to 20,000; Arnaud Amalric's own letter to the Pope claims 20,000 killed, but this may be rhetorical exaggeration.",
    ],
    unsolvedMeaning:
      'Likely explained but unproven: the massacre itself is well-attested, but the famous quote is almost certainly a later invention, and the precise scale of killing cannot be verified from surviving archaeological or documentary evidence.',
    sources: [
      "Pegg, M.G., 'A Most Holy War: The Albigensian Crusade and the Battle for Christendom' (2008), Oxford University Press.",
      "Sumption, J., 'The Albigensian Crusade' (1978), Faber and Faber.",
    ],
  },
  {
    id: 'devil-s-bible-origin',
    title: "Codex Gigas (Devil's Bible) — Origin and Missing Pages",
    category: 'phenomena',
    wikipedia: 'Codex Gigas',
    era: 'Early 13th century (c. 1204–1230)',
    location: {
      lat: 49.951,
      lng: 15.793,
      place: 'Podlažice Monastery, Bohemia (now Czech Republic); now Stockholm, Sweden',
    },
    summary:
      'The Codex Gigas, the largest surviving medieval manuscript, was produced at the Benedictine monastery of Podlažice in Bohemia and contains a full Bible, several other complete texts, and a striking full-page illustration of the Devil. Ink and parchment analysis suggests it was the work of a single scribe over a period of decades. Eight pages have been cut from the manuscript at an unknown date; their content is entirely unknown.',
    unexplained:
      'What was written on the eight excised pages, who removed them, and why they were removed has never been established. The legend attributing the manuscript to a monk who made a pact with the Devil is obviously folkloric, but the remarkable uniformity of a single hand across such a vast work remains unusual.',
    theories: [
      "Plausible: The missing pages contained the monastery's rules or other institutional documents that became embarrassing or irrelevant and were removed for practical reasons — a reasonable but unproven explanation.",
      "Possible: The pages were removed during the manuscript's turbulent history (it was seized as war booty by Swedish forces in 1648) by someone who wanted the content suppressed.",
      'Speculative: The pages contained occult or heretical content — the legend-driven explanation with no evidentiary support.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the excised pages leave a documented gap in the manuscript, but no record of their removal or content has been identified in any archive.',
    sources: [
      'National Library of Sweden, Codex Gigas digital edition and research notes: https://www.kb.se/codex-gigas',
      "Broderick, H.R., 'The Devil in the Details', in 'Pen and Parchment: Drawing in the Middle Ages' (2009), Metropolitan Museum of Art.",
    ],
  },
  {
    id: 'roanoke-of-the-medieval-greenland-settlement',
    title: 'Disappearance of the Norse Greenland Western Settlement',
    category: 'disappearances',
    wikipedia: 'Western Settlement (Greenland)',
    era: 'Late Medieval, c. 1340s',
    location: {
      lat: 64.1814,
      lng: -51.6941,
      place: 'Western Settlement, Greenland (near modern Nuuk)',
    },
    summary:
      'The Norse Western Settlement in Greenland, established c. 985 CE, was found abandoned when Ivar Bárdsson visited around 1350, describing livestock roaming untended and no people present, either Christian or heathen. The Eastern Settlement persisted until the early 15th century. No mass graves, evidence of violent assault, or records of voluntary evacuation have been found at the Western Settlement.',
    unexplained:
      'What happened to the approximately 1,000–1,500 Norse inhabitants of the Western Settlement — whether they died in place, emigrated to Iceland or Norway, were assimilated into Inuit populations, or perished from famine — remains unresolved.',
    theories: [
      'Moderately supported: Climate deterioration (onset of Little Ice Age) combined with soil exhaustion and economic marginalisation made the settlement unsustainable, leading to emigration or gradual population decline — the leading modern view.',
      'Contested: Conflict with expanding Thule Inuit populations drove the Norse out or killed them — some evidence of Inuit presence nearby but no confirmed massacre site.',
      'Possible: Voluntary emigration to Iceland or North America, leaving behind only livestock — consistent with the absence of human remains but lacking documentary confirmation.',
    ],
    unsolvedMeaning:
      "Genuinely no evidence either way: archaeological work has not produced a mass death event, and no emigration records survive; the fate of the Western Settlement's population is one of the cleanest unresolved demographic mysteries of medieval Europe.",
    sources: [
      "Diamond, J., 'Collapse: How Societies Choose to Fail or Succeed' (2005), Viking Press, Chapter 6.",
      "Arneborg, J. et al., 'Change of Diet of the Greenland Vikings Determined from Stable Carbon Isotope Analysis', Radiocarbon 41(2), 1999, pp. 157–168.",
    ],
  },
  {
    id: 'holy-lance-of-antioch',
    title: 'Holy Lance of Antioch',
    category: 'phenomena',
    wikipedia: 'Holy Lance',
    era: 'Medieval, 1098 (First Crusade)',
    location: { lat: 36.2021, lng: 36.1604, place: 'Antioch (modern Antakya, Turkey)' },
    summary:
      'During the First Crusade, a monk named Peter Bartholomew reported visions directing him to dig beneath the floor of the Cathedral of St Peter in Antioch, where a lance was reportedly found in June 1098. The discovery rallied crusader morale before the decisive Battle of Antioch. The papal legate Adhemar of Le Puy was sceptical of its authenticity; a trial by fire was arranged, after which Peter Bartholomew died of his injuries.',
    unexplained:
      'Whether the object discovered at Antioch was planted, genuinely found, or was the actual lance used at the Crucifixion cannot be determined. Several competing relics claiming to be the Holy Lance exist across Europe.',
    theories: [
      "Likely: The relic was planted or fabricated to boost crusader morale during a desperate siege — Adhemar's contemporary scepticism and the implausibility of the find location support this view.",
      'Possible: An ancient lance head was genuinely found beneath the cathedral floor but was not the instrument of the Crucifixion — consistent with the physical discovery but not the theological claim.',
      "Speculative: The Antioch lance is identical with the lance in Vienna's Hofburg treasury — a later conflation with no documentary chain of custody connecting the two objects.",
    ],
    unsolvedMeaning:
      "Possibly a hoax or staged discovery: contemporary scepticism was strong, and the trial-by-fire outcome undermined the relic's credibility almost immediately. The theological claim is not historically verifiable by any method.",
    sources: [
      "France, J., 'Victory in the East: A Military History of the First Crusade' (1994), Cambridge University Press.",
      "Peters, E. (ed.), 'The First Crusade: The Chronicle of Fulcher of Chartres and Other Source Materials' (2nd ed., 1998), University of Pennsylvania Press.",
    ],
  },
  {
    id: 'children-s-crusade',
    title: "Children's Crusade",
    category: 'events',
    wikipedia: "Children's Crusade",
    era: 'Medieval, 1212',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      place: 'France and the Rhineland (origin points); Genoa and Brindisi (dispersal points)',
    },
    summary:
      'In 1212, two popular movements separately arose in France and the Rhineland in which large groups — described in sources as including children and the poor — marched toward the Mediterranean coast with the stated intention of reaching the Holy Land. The French movement, led by a shepherd boy named Stephen of Cloyes, dispersed at Marseille; the German movement, led by Nicholas of Cologne, largely dissolved in Italy. Sources are sparse, contradictory, and written decades after the events.',
    unexplained:
      'Whether the participants were primarily children or adults, whether the movements were genuinely directed toward crusade, and what ultimately became of the thousands of participants who did not return home is unknown.',
    theories: [
      "Contested: The 'children' designation is a mistranslation or misunderstanding of the Latin 'pueri', which could mean 'young people', 'the poor', or 'servants' rather than literal children — a view held by several modern historians including Peter Raedts.",
      'Possible: Some participants were sold into slavery in North Africa by unscrupulous merchants — reported by later chronicles but not corroborated by contemporary sources.',
      'Speculative: The movements were a coherent religious phenomenon analogous to other popular religious revivals of the period — plausible but difficult to distinguish from the evidence.',
    ],
    unsolvedMeaning:
      "Likely explained but unproven: modern scholarship has substantially demythologised the event, suggesting the 'children' were largely poor adults, but the sources are so thin and late that the full nature and outcome of the movements cannot be established with confidence.",
    sources: [
      "Raedts, P., 'The Children's Crusade of 1212', Journal of Medieval History 3(4), 1977, pp. 279–323.",
      "Dickson, G., 'The Children's Crusade: Medieval History, Modern Mythistory' (2008), Palgrave Macmillan.",
    ],
  },
  {
    id: 'uss-cyclops-disappearance',
    title: 'USS Cyclops Disappearance',
    category: 'disappearances',
    wikipedia: 'USS Cyclops (AC-4)',
    era: '1918',
    location: { lat: 23, lng: -70, place: 'Western Atlantic, between Barbados and Chesapeake Bay' },
    summary:
      'The USS Cyclops, a 19,000-ton US Navy collier carrying 309 crew and passengers, departed Barbados on 4 March 1918 and never arrived in Baltimore. No distress signal was sent, no wreckage was found, and the ship has never been located. It remains the largest single non-combat loss of life in US Navy history.',
    unexplained:
      'Why no distress call was sent, and whether the vessel sank, was captured, or met some other end remains entirely unknown — no confirmed debris or remains have ever been recovered.',
    theories: [
      'Structural failure or cargo shift (moderately supported): the ship was overloaded with manganese ore and had a known defective engine; a sudden capsize or flooding could explain the lack of distress signal.',
      'German submarine action (weakly supported): Germany denied any involvement and postwar records found no corroborating evidence.',
      'Sabotage or mutiny related to the commanding officer (speculative): Commander Worley was regarded as erratic and was of German birth, raising wartime suspicions, but no evidence supports a deliberate act.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way — the wreck has never been found despite searches, and the cause of loss remains completely open.',
    sources: [
      'Naval History and Heritage Command official record of USS Cyclops',
      'US Navy court records and Naval Historical Center loss investigation files, 1918',
    ],
  },
  {
    id: 'mv-joyita-mystery',
    title: 'MV Joyita Mystery',
    category: 'disappearances',
    wikipedia: 'MV Joyita',
    era: '1955',
    location: { lat: -13.5, lng: -172.5, place: 'South Pacific, between Samoa and Tokelau' },
    summary:
      'The MV Joyita, a 70-foot vessel carrying 25 people including passengers and crew, departed Western Samoa on 3 October 1955 and failed to arrive at Tokelau. She was found five weeks later, partly submerged and listing heavily, about 600 miles off course — with no one aboard. The cargo and most equipment were missing but the vessel itself was afloat due to her cork insulation.',
    unexplained:
      'What happened to all 25 people, why they apparently abandoned an essentially unsinkable vessel, and who removed the cargo and medical equipment remain unresolved.',
    theories: [
      'Flooding from a corroded seawater pipe caused the crew to abandon ship in panic (moderately supported): a faulty pipe was identified as likely source of flooding, but the vessel floated regardless.',
      'Piracy (speculative): the missing cargo and medical supplies suggested a deliberate removal, possibly by outside parties.',
      'Mutiny or foul play aboard (weakly supported): investigative reports noted suspicious cargo losses but found no direct evidence.',
    ],
    unsolvedMeaning:
      'Likely partially explained by mechanical failure causing abandonment, but the fate of all 25 people and the removal of cargo remain genuinely unresolved.',
    sources: [
      'New Zealand government official inquiry report, 1956',
      "Doris Druett, 'Deadly Voyage' (2006) — historical reconstruction of the Joyita disappearance",
    ],
  },
  {
    id: 'ghost-ship-ourang-medan',
    title: 'Ourang Medan Ghost Ship',
    category: 'phenomena',
    wikipedia: 'Ourang Medan',
    era: '1947',
    location: { lat: 2, lng: 98, place: 'Strait of Malacca, near Sumatra' },
    summary:
      'According to contemporary reports published in 1948, two American ships received a distress call from the Dutch freighter Ourang Medan in the Strait of Malacca, reporting that all officers and crew were dead. When a rescue vessel boarded, they allegedly found the entire crew dead with expressions of terror, with no sign of injury. The ship reportedly caught fire and exploded before salvage.',
    unexplained:
      'Whether the incident occurred at all is itself unresolved — no verified registry record of the Ourang Medan has been found in Dutch, British, or US maritime records.',
    theories: [
      'Possibly a hoax or literary fabrication (well supported): researchers including Matthias Haubold have found no verifiable shipping records, cargo manifests, or official reports confirming the vessel existed.',
      'Cargo of undeclared chemical or toxic agents causing asphyxiation (speculative, contingent on the ship existing): the sudden deaths without injury and subsequent fire are consistent with chemical cargo accidents, but the premise requires the vessel to have existed.',
      'Carbon monoxide or methane gas leak from the engine room (speculative): such accidents have occurred on real vessels and match some described symptoms.',
    ],
    unsolvedMeaning:
      'Possibly a hoax or myth — the fundamental question of whether this ship existed at all has not been resolved, making it one of the least reliably documented entries in maritime mystery literature.',
    sources: [
      "Roy Bainton, 'The Mammoth Book of Lost Ships' (2000) — critical analysis of the Ourang Medan legend",
      'Matthias Haubold, archival research published in Fortean Times (2003)',
    ],
  },
  {
    id: 'ss-baychimo-ghost-ship',
    title: 'SS Baychimo Ghost Ship',
    category: 'phenomena',
    wikipedia: 'SS Baychimo',
    era: '1931–1969',
    location: { lat: 71, lng: -156, place: 'Arctic Ocean, Beaufort Sea, Alaska coast' },
    summary:
      "The SS Baychimo, a Hudson's Bay Company cargo steamer, was abandoned in pack ice off Alaska in October 1931 after becoming trapped. The crew was evacuated but the vessel did not sink; instead it drifted freely in Arctic waters and was reportedly sighted numerous times over the following 38 years. The last reported sighting was in 1969 near Icy Cape, Alaska.",
    unexplained:
      'Whether the Baychimo eventually sank, grounded, or remains somewhere in Arctic waters is unknown, as no confirmed final resting place has been established despite searches.',
    theories: [
      'The vessel eventually broke up in pack ice (most likely): no steel hull could survive Arctic conditions indefinitely, and cessation of sightings after 1969 suggests eventual loss.',
      'The wreck is preserved on the Arctic seabed and could be located (plausible): the Alaskan government launched searches in the 2000s, suggesting official belief it could still be found.',
      'Some sightings were misidentifications of other vessels (possible): 38 years of reported sightings in remote waters inevitably involve some ambiguity.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way as to the final fate — the wreck has not been found, and the prolonged drift is historically documented, but its current resting place remains unknown.',
    sources: [
      'Alaska Department of Natural Resources, 2006 search initiative records',
      "Hudson's Bay Company archive reports and press accounts, 1931–1932",
    ],
  },
  {
    id: 'kaz-ii-ghost-yacht',
    title: 'Kaz II Ghost Yacht',
    category: 'disappearances',
    wikipedia: 'Kaz II',
    era: '2007',
    location: { lat: -18.2, lng: 146.8, place: 'Coral Sea, off Queensland, Australia' },
    summary:
      'On 20 April 2007, the 9.8-metre catamaran Kaz II was found drifting off the Queensland coast with its engine running, sails set, and a meal laid out — but all three crew members were missing. A thorough search found no survivors or bodies. The vessel showed no signs of collision or distress.',
    unexplained:
      'How and why all three experienced sailors vanished without any clear sign of emergency, and where their bodies went, has never been formally proven.',
    theories: [
      "Accidental man-overboard sequence (moderately supported): a coroner's inquest in 2008 concluded the most probable cause was that one crewman fell overboard and the other two fell in attempting rescue, consistent with the running engine and set sails.",
      'Sudden weather event or rogue wave (possible): conditions in the area can change rapidly, potentially sweeping crew from deck without warning.',
      'Foul play (speculative and officially discounted): investigators found no evidence of violence or third-party involvement.',
    ],
    unsolvedMeaning:
      'Likely explained by accidental man-overboard cascades, but officially unproven as no witnesses or bodies have confirmed the sequence of events.',
    sources: [
      "Queensland Coroner's Court finding, 2008 inquest into deaths of Derek Batten, Peter Tunstead, James Tunstead",
      'Australian Transport Safety Bureau incident report, 2007',
    ],
  },
  {
    id: 'disappearance-of-ss-waratah',
    title: 'Disappearance of SS Waratah',
    category: 'disappearances',
    wikipedia: 'SS Waratah',
    era: '1909',
    location: { lat: -33, lng: 29, place: 'South African coast, between Durban and Cape Town' },
    summary:
      'The SS Waratah, a British passenger-cargo liner, departed Durban on 26 July 1909 with 211 passengers and crew and was never seen again. She had completed one prior round voyage to Australia and was considered top-heavy by some passengers and a marine engineer who disembarked at Durban, citing concerns about her stability. Despite extensive searches at the time and repeated modern sonar surveys, no confirmed wreck has been found.',
    unexplained:
      'The exact location of the wreck and the precise cause of sinking — whether capsize, storm damage, or structural failure — remain unconfirmed.',
    theories: [
      "Capsize due to inherent instability in heavy weather (well supported): multiple witnesses documented the ship's excessive rolling and a formal inquiry highlighted her suspect stability, and severe storms struck the coast shortly after her departure.",
      'Collision with an unknown vessel (weakly supported): some contemporary accounts described sightings of a vessel in distress, but these were never verified.',
      'Possible wreck identification off the Eastern Cape (inconclusive): sonar anomalies identified in the 1980s and 2000s have not been positively confirmed as Waratah.',
    ],
    unsolvedMeaning:
      'Likely explained by capsize in a storm given strong evidence of instability, but unproven because the wreck has not been definitively located.',
    sources: [
      "UK Wreck Commissioner's Court formal inquiry report, 1910",
      "Clive Cussler and Craig Dirgo, 'The Sea Hunters' (1996) — account of sonar search expeditions",
    ],
  },
  {
    id: 'ghost-ship-high-aim-6',
    title: 'High Aim 6 Ghost Ship',
    category: 'disappearances',
    wikipedia: 'High Aim 6',
    era: '2003',
    location: {
      lat: -17.5,
      lng: 121.5,
      place: 'Indian Ocean, off the northwest coast of Australia',
    },
    summary:
      "On 8 January 2003, the Taiwanese fishing vessel High Aim 6 was found drifting off the Australian coast with no one aboard. The ship's logbook, food, and personal belongings were intact; the engine was functioning. Twelve crew members, including the captain, were missing.",
    unexplained:
      'What happened to the twelve crew members and why they left or were removed from a fully operational vessel remains unproven.',
    theories: [
      'Crew murdered by fellow crew members (moderately supported): Australian Federal Police investigation concluded that the Indonesian crew likely murdered the Taiwanese captain and officers, then fled, based on circumstantial evidence and interviews with suspects.',
      'Mass man-overboard accident (weakly supported): considered less plausible given the number of people involved and the intact state of the vessel.',
      'Trafficking or smuggling-related incident (speculative): the route and vessel type are associated with illegal fishing and people smuggling networks in the region.',
    ],
    unsolvedMeaning:
      'Likely explained by criminal activity aboard, per investigative conclusions, but no prosecutions were secured and the fate of all individuals was never formally proven.',
    sources: [
      'Australian Federal Police investigation summary, 2003',
      'Australian Broadcasting Corporation news archive reports, January–March 2003',
    ],
  },
  {
    id: 'loss-of-hms-erebus-and-terror-franklin-expedition',
    title: 'Franklin Expedition Loss of HMS Erebus and Terror',
    category: 'disappearances',
    wikipedia: "Franklin's lost expedition",
    era: '1845–1848',
    location: { lat: 70, lng: -98, place: 'Canadian Arctic Archipelago, King William Island' },
    summary:
      'The British Royal Navy expedition under Sir John Franklin, comprising HMS Erebus and HMS Terror with 129 men, departed in 1845 to navigate the Northwest Passage and was never heard from again. A note found in 1859 confirmed both ships became icebound near King William Island in September 1846, Franklin died in June 1847, and the remaining crew abandoned the ships in April 1848. None survived. Both wrecks were located — Erebus in 2014 and Terror in 2016.',
    unexplained:
      "While the broad fate is documented, the exact causes of the extraordinarily rapid crew deaths, the routes taken during the fatal march south, and the fate of specific individuals remain uncertain. The apparent re-occupation of HMS Terror after abandonment — suggested by the wreck's condition — is also unexplained.",
    theories: [
      'Lead poisoning from poorly soldered tin cans combined with scurvy and tuberculosis (well supported by forensic bone analysis): studies of skeletal remains from King William Island show elevated lead levels consistent with food tin contamination.',
      'Botulism from improperly preserved food (moderately supported): the rapid deterioration of a large crew is consistent with mass illness from contaminated provisions.',
      'Oral histories from Inuit witnesses suggest survivors reached and died near the Back River area (credibly documented): multiple Inuit accounts corroborate evidence of starvation and cannibalism among the last survivors.',
    ],
    unsolvedMeaning:
      'Largely explained in broad terms, but specific individual fates, the sequence of decisions, and questions about why Terror was apparently re-occupied after abandonment remain genuinely open.',
    sources: [
      "Owen Beattie and John Geiger, 'Frozen in Time: The Fate of the Franklin Expedition' (1987)",
      'Parks Canada Archaeological Reports, HMS Erebus (2014) and HMS Terror (2016) discovery documentation',
    ],
  },
  {
    id: 'disappearance-of-mv-bulk-jupiter',
    title: 'Sinking of MV Bulk Jupiter',
    category: 'disappearances',
    wikipedia: 'Bulk Jupiter',
    era: '2015',
    location: { lat: 10.5, lng: 107.5, place: 'South China Sea, off Vietnam' },
    summary:
      'The Bahamian-flagged bulk carrier MV Bulk Jupiter sank on 2 January 2015 in the South China Sea approximately 250 kilometres south of Ho Chi Minh City while carrying a cargo of bauxite. Of the 19 crew, only one survived. The vessel sank in approximately five minutes with no distress call.',
    unexplained:
      'The rapidity of sinking — approximately five minutes — and the failure to issue any distress signal have not been fully explained; the precise sequence of events leading to catastrophic flooding remains unknown.',
    theories: [
      'Liquefaction of bauxite cargo causing sudden shift and capsize (well supported): bauxite is known to liquefy under certain moisture conditions, and the International Maritime Organization has flagged this as a significant cargo risk; investigators considered this the most probable cause.',
      'Structural failure or collision (considered but not confirmed): no evidence of collision was found, and the vessel was not known to be in poor structural condition.',
      'Weather-related flooding (possible but insufficient alone): conditions were moderate, making weather alone an unlikely complete explanation.',
    ],
    unsolvedMeaning:
      'Likely explained by cargo liquefaction, which is well-documented as a hazard, but formally unproven because the wreck has not been inspected in detail.',
    sources: [
      'UK Marine Accident Investigation Branch (MAIB) safety bulletin on bauxite cargo liquefaction, 2015',
      'IMO Circular on liquefaction of solid bulk cargoes, 2015',
    ],
  },
  {
    id: 'los-angeles-class-disappearance-uss-scorpion',
    title: 'Sinking of USS Scorpion',
    category: 'disappearances',
    wikipedia: 'USS Scorpion (SSN-589)',
    era: '1968',
    location: { lat: 32.9, lng: -33.4, place: 'North Atlantic, southwest of the Azores' },
    summary:
      'The US Navy nuclear submarine USS Scorpion (SSN-589) was lost on 22 May 1968 with all 99 crew members while returning to Norfolk from the Mediterranean. The wreck was located in October 1968 approximately 400 miles southwest of the Azores at a depth of about 9,800 feet. The cause of sinking has never been officially determined.',
    unexplained:
      'The specific mechanism that caused the Scorpion to sink — whether a torpedo malfunction, structural failure, or external cause — has never been confirmed despite multiple investigations.',
    theories: [
      'Uncontrolled torpedo detonation (moderately supported): acoustic analysis of SOSUS recordings suggests an internal explosion prior to hull collapse, consistent with a malfunctioning torpedo warhead or hot-running torpedo.',
      'Structural failure or flooding (possible): the Scorpion had a history of maintenance issues and hydraulic problems.',
      'Soviet submarine action (speculative and officially discounted): conspiracy theories arose in the context of simultaneous Soviet and US submarine losses in 1968, but no evidence supports hostile action.',
    ],
    unsolvedMeaning:
      'Likely explained by an internal explosion, probably torpedo-related, but officially unresolved — the Court of Inquiry concluded the cause could not be determined with available evidence.',
    sources: [
      'US Navy Court of Inquiry report, 1968 (declassified portions)',
      "Ed Offley, 'Scorpion Down: Sunk by the Soviets, Buried by the Pentagon' (2007) — note: the book's central thesis of Soviet action is widely contested by naval historians",
    ],
  },
  {
    id: 'flight-19-disappearance',
    title: 'Flight 19 Disappearance',
    category: 'disappearances',
    wikipedia: 'Flight 19',
    era: '1945',
    location: {
      lat: 27,
      lng: -79.5,
      place: 'Atlantic Ocean east of Fort Lauderdale, Florida, USA',
    },
    summary:
      'Flight 19 was a training flight of five U.S. Navy TBM Avenger torpedo bombers that disappeared on December 5, 1945, during a navigation exercise over the Atlantic Ocean off Florida. All 14 airmen aboard were lost, and a PBM Mariner flying boat sent to search for them also disappeared with 13 crew. No confirmed wreckage of any of the six aircraft has ever been recovered.',
    unexplained:
      'The exact location where Flight 19 went down and why the experienced lead instructor, Lieutenant Charles Taylor, became so disoriented have never been definitively established from recovered physical evidence.',
    theories: [
      'Most supported: Navigator error and fuel exhaustion caused all five planes to ditch in the open ocean after Taylor mistakenly believed his compasses were malfunctioning and flew northeast instead of west.',
      'Moderately supported: The search aircraft PBM Mariner likely exploded mid-air due to fuel vapour ignition, a known hazard with that type — a ship in the area reported seeing an explosion.',
      'Unsupported/popular myth: The disappearances inspired Bermuda Triangle mythology, but naval investigations found no evidence of supernatural or anomalous causes.',
    ],
    unsolvedMeaning:
      'Likely explained but unproven due to lack of recovered wreckage: the probable cause (disorientation, fuel exhaustion, ocean ditching) is well-supported by the radio transcripts, but no physical confirmation has been made.',
    sources: [
      "U.S. Navy Board of Investigation report (1945), declassified and summarised in Lawrence David Kusche, 'The Bermuda Triangle Mystery — Solved' (1975).",
      "Wikipedia: 'Flight 19' — cites primary naval records and subsequent searches.",
    ],
  },
  {
    id: 'madeleine-mccann-disappearance',
    title: 'Madeleine McCann Disappearance',
    category: 'disappearances',
    wikipedia: 'Disappearance of Madeleine McCann',
    era: '2007',
    location: { lat: 37.09, lng: -8.67, place: 'Praia da Luz, Algarve, Portugal' },
    summary:
      "Madeleine McCann, a three-year-old British girl, disappeared from her family's holiday apartment in Praia da Luz, Portugal, on the night of 3 May 2007 while her parents dined at a nearby restaurant. Despite one of the most extensive and internationally high-profile missing-child investigations in history, involving Portuguese, British, and German police forces, her fate and whereabouts have never been confirmed. German prosecutors formally charged Christian Brückner, a convicted sex offender who was in the Algarve at the time, with Madeleine's murder in 2024, but no verdict has been reached and the case remains unresolved.",
    unexplained:
      'Whether Madeleine McCann is alive or dead, and who is ultimately responsible for her disappearance, remain officially unresolved; no body or confirmed crime scene evidence has been produced, and the criminal proceedings against the named suspect were ongoing as of 2025.',
    theories: [
      'Moderately supported: Abduction by an unknown individual or individuals, supported by witness accounts of a man carrying a child near the apartment on the night in question.',
      "Primary suspect of German prosecutors: Christian Brückner, a convicted sex offender who was in the Algarve at the time, was formally charged with Madeleine's murder by German prosecutors in 2024; the case was proceeding through the German courts as of 2025.",
      'Officially investigated but not substantiated: Early Portuguese police suspicion fell on the parents; they were made arguidos (formal suspects) in 2007 but were cleared by the Portuguese Attorney General in 2008.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: no body or confirmed physical evidence of what happened to Madeleine McCann has been established, and while a suspect has been charged in Germany, no verdict had been reached as of 2025 and her remains have never been found.',
    sources: [
      "Portuguese Polícia Judiciária case files released in 2008; UK Metropolitan Police Operation Grange (ongoing from 2011); German prosecutor's office, Braunschweig, charging announcement (2024).",
      "Wikipedia: 'Disappearance of Madeleine McCann' — comprehensive sourced summary of investigations.",
    ],
  },
  {
    id: 'airliner-star-tiger-disappearance',
    title: 'Star Tiger Disappearance',
    category: 'disappearances',
    wikipedia: 'BSAA Star Tiger',
    era: '1948',
    location: { lat: 31, lng: -64.5, place: 'North Atlantic Ocean, approaching Bermuda' },
    summary:
      'BSAA Star Tiger, an Avro Tudor IV airliner operated by British South American Airways, disappeared on January 30, 1948, on a flight from Santa Maria in the Azores to Bermuda with 25 passengers and crew. The aircraft sent a routine radio message about 400 miles from Bermuda and was never heard from again; no wreckage or bodies were found despite an extensive search. A British Ministry of Civil Aviation inquiry concluded in 1948 that the cause of the accident was unknown.',
    unexplained:
      'What caused the sudden and total loss of Star Tiger — leaving no distress signal, no wreckage trail, and no survivors — has never been established.',
    theories: [
      'Most plausible per the official inquiry: A combination of navigational uncertainty, adverse winds, and fuel exhaustion led the aircraft to ditch at sea; the warm Gulf Stream waters and absence of a wreckage trail are consistent with a controlled ditching that left nothing afloat.',
      "Moderately supported: Malfunction of the aircraft's heating system (a known weakness of the Tudor) may have incapacitated the crew; the Tudor type had a troubled operational history.",
      'Unsupported/myth: The disappearance became part of Bermuda Triangle mythology, but investigators found no anomalous factors distinguishing it from accidents in other oceanic regions.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the official verdict explicitly recorded an unknown cause, and the absence of any recovered physical evidence means the specific failure mode cannot be determined.',
    sources: [
      "UK Ministry of Civil Aviation, 'Report of the Court of Investigation into the loss of Star Tiger' (1948), HMSO.",
      "Wikipedia: 'BSAA Star Tiger' — cites the official report and contemporaneous press coverage.",
    ],
  },
  {
    id: 'amy-bradley-disappearance',
    title: 'Amy Bradley Disappearance',
    category: 'disappearances',
    wikipedia: 'Disappearance of Amy Bradley',
    era: '1998',
    location: {
      lat: 12.1,
      lng: -68.93,
      place: 'Caribbean Sea, near Curaçao (aboard cruise ship Rhapsody of the Seas)',
    },
    summary:
      "Amy Lynn Bradley, a 23-year-old American woman, disappeared from the Royal Caribbean cruise ship Rhapsody of the Seas on March 24, 1998, as the vessel was docked in Curaçao. She was last seen on the ship's Lido deck in the early morning hours; her family reported she had been socialising with a band called Blue Orchid the night before. Despite FBI involvement, extensive searches, and multiple reported sightings over the following years — including an alleged sighting in a Curaçao brothel — she has never been found.",
    unexplained:
      'Whether Amy Bradley fell overboard, left the ship voluntarily, or was abducted for sex trafficking remains officially unresolved, and her current status — alive or dead — is unknown.',
    theories: [
      "Investigated but unconfirmed: Reports from multiple independent witnesses, including a U.S. Navy petty officer, claim to have encountered a woman matching Bradley's description in situations consistent with sexual slavery in the Caribbean, suggesting abduction for trafficking.",
      'Plausible but unproven: Bradley may have left the ship with members of the Blue Orchid band, who were questioned but cleared; the circumstances of her last known movements remain incompletely accounted for.',
      'Less supported: Accidental overboard drowning, though no body was recovered and the ship was docked at the time of her disappearance.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved: the FBI's investigation remains open, multiple credible sighting reports have not been traced to a confirmed outcome, and no physical evidence has been recovered.",
    sources: [
      'FBI official missing persons bulletin for Amy Bradley (updated periodically); extensive reporting by Dateline NBC and other outlets.',
      "Wikipedia: 'Disappearance of Amy Bradley' — cites FBI case details and documented sighting reports.",
    ],
  },
  {
    id: 'raoul-wallenberg-disappearance',
    title: 'Raoul Wallenberg Disappearance',
    category: 'disappearances',
    wikipedia: 'Raoul Wallenberg',
    era: '1945',
    location: { lat: 55.75, lng: 37.62, place: 'Moscow, Soviet Union (Russia)' },
    summary:
      "Raoul Wallenberg, the Swedish diplomat who saved tens of thousands of Hungarian Jews during the Holocaust by issuing protective passports, was detained by Soviet forces in Budapest in January 1945 and transferred to Moscow's Lubyanka prison. The Soviet government officially claimed in 1957 that Wallenberg had died of a heart attack in Lubyanka on July 17, 1947, but this account has been widely questioned. Credible witness testimonies and partial documentary releases suggested Wallenberg may have remained alive in Soviet custody well beyond 1947.",
    unexplained:
      "The precise date, cause, and circumstances of Raoul Wallenberg's death in Soviet custody remain unverified, and Sweden has never received full documentation satisfying the official account.",
    theories: [
      'Official Soviet/Russian position: Wallenberg died of cardiac arrest in Lubyanka prison on July 17, 1947; Russia has released some documents supporting this but has not provided full access to relevant KGB/GRU archives.',
      'Credibly alleged: Multiple former Soviet prisoners reported encountering or receiving messages from a person identified as Wallenberg in Soviet camps as late as the 1950s and possibly 1960s, suggesting he was held far longer than admitted.',
      'Speculated: Wallenberg may have been executed because Soviet intelligence believed he was a foreign spy — his family had connections to intelligence circles — though no direct evidence of a judicial execution has emerged.',
    ],
    unsolvedMeaning:
      'Likely explained in outcome (death in Soviet custody) but genuinely unresolved in specifics: Russia has repeatedly denied full archival access, and the Swedish-Russian Working Group concluded in 2000 that the true circumstances of his death cannot be established from currently available evidence.',
    sources: [
      "Swedish-Russian Working Group on Wallenberg, 'Report' (2000); Susanne Berger, 'Stuck in Neutral: Sixty Years of Failure to Resolve the Raoul Wallenberg Case' (2005).",
      "Wikipedia: 'Raoul Wallenberg' — cites official inquiries, witness testimonies, and diplomatic correspondence.",
    ],
  },
  {
    id: 'proto-sinaitic-script',
    title: 'Proto-Sinaitic Script',
    category: 'phenomena',
    wikipedia: 'Proto-Sinaitic script',
    era: 'c. 1900–1500 BCE',
    location: { lat: 29.5, lng: 33.5, place: 'Sinai Peninsula, Egypt/Israel' },
    summary:
      'Proto-Sinaitic is among the earliest alphabetic writing systems, attested in short inscriptions carved into turquoise mine walls at Serabit el-Khadim and in a handful of other sites. The script appears to derive from Egyptian hieroglyphs via an acrophonic principle, using pictographic signs for their initial consonant sounds. It is widely considered the ancestor of the Phoenician alphabet and thus of most modern alphabets.',
    unexplained:
      "The precise reading of many individual inscriptions remains disputed, and the identity and social status of the scribes — likely Semitic workers in Egyptian mines — as well as the exact mechanism of the script's invention, are not established.",
    theories: [
      'Widely supported: Semitic-speaking workers adapted Egyptian hieroglyphs acrophonically, producing the first consonantal alphabet, ancestor of Phoenician.',
      'Debated: A small minority of researchers argue some inscriptions may be meaningless imitations of writing rather than functional text.',
      'Speculative: Some amateur researchers claim connections to early Hebrew or Exodus narratives, but this is not accepted in mainstream scholarship.',
    ],
    unsolvedMeaning:
      'Likely explained in broad outline (alphabetic ancestor derived from Egyptian signs), but the reading of individual texts and the social context of composition remain genuinely open scholarly questions.',
    sources: [
      "Goldwasser, O. (2010). 'How the Alphabet Was Born from Hieroglyphs.' Biblical Archaeology Review 36(1).",
      'Sass, B. (1988). The Genesis of the Alphabet. Wiesbaden: Harrassowitz.',
    ],
  },
  {
    id: 'olmec-writing-tuxtla-statuette',
    title: 'Tuxtla Statuette',
    category: 'phenomena',
    wikipedia: 'Tuxtla Statuette',
    era: 'c. 162 CE (Long Count date inscribed)',
    location: { lat: 18.08, lng: -95.2, place: 'San Andrés Tuxtla, Veracruz, Mexico' },
    summary:
      'The Tuxtla Statuette is a jade figurine discovered in 1902 near San Andrés Tuxtla, bearing one of the earliest securely dated Long Count calendar inscriptions in Mesoamerica. The figure depicts a duck-billed human form and is covered in approximately 75 glyphs, many of which remain undeciphered. Its script resembles but does not fully match later Mayan or Isthmian inscriptions.',
    unexplained:
      'The majority of the non-calendrical glyphs on the statuette cannot be read, and it is unclear whether the script represents a transitional or entirely independent writing system.',
    theories: [
      'Moderately supported: The inscription belongs to the Isthmian (Epi-Olmec) script tradition and records a name or title alongside the calendar date.',
      'Debated: Some scholars see the script as a direct precursor to Maya writing; others view it as a parallel development with no proven genealogical link.',
      'Speculative and unsupported: Amateur claims that the inscription records pre-Columbian transoceanic contact have no scholarly backing.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved: the non-calendrical portions of the inscription have not been convincingly deciphered, and the script's relationship to other Mesoamerican systems is uncertain.",
    sources: [
      "Saville, M.H. (1900). 'A Jade Statuette from Mexico.' Bulletin of the American Museum of Natural History 13.",
      'Kaufman, T. & Justeson, J. (2001). Epi-Olmec Hieroglyphic Writing and Texts. FAMSI.',
    ],
  },
  {
    id: 'byblos-syllabic-script',
    title: 'Byblos syllabary',
    category: 'phenomena',
    wikipedia: 'Byblos syllabary',
    era: 'c. 2000–1000 BCE',
    location: { lat: 34.12, lng: 35.65, place: 'Byblos (Jubayl), Lebanon' },
    summary:
      'The Byblos syllabary is an undeciphered writing system found on ten bronze tablets and a few stone inscriptions excavated from Byblos, Lebanon, during the 1920s–1930s. The script consists of approximately 90–100 distinct signs, suggesting a syllabic rather than purely alphabetic or logographic system. Despite several decipherment attempts, none has achieved scholarly consensus.',
    unexplained:
      'The underlying language of the Byblos syllabary is unknown — it may be a Semitic language or something else entirely — and no bilingual key has been found.',
    theories: [
      'Moderately proposed: The script records an early form of a Northwest Semitic language, possibly ancestral to Phoenician, based on geographical and temporal context.',
      'Debated: Dhorme (1946) and later Mendenhall (1985) each proposed independent decipherments that are not mutually compatible and neither is widely accepted.',
      'Unlikely: Some researchers have suggested the tablets are later forgeries, but the archaeological provenance, while imperfect, argues against this.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: no decipherment has achieved scholarly acceptance, and the language encoded remains unknown.',
    sources: [
      'Mendenhall, G.E. (1985). The Syllabic Inscriptions from Byblos. Beirut: American University of Beirut.',
      "Dunand, M. (1945). Byblia Grammata: Documents et recherches sur le développement de l'écriture en Phénicie. Beirut: Imprimerie Catholique.",
    ],
  },
  {
    id: 'carian-script',
    title: 'Carian alphabets',
    category: 'phenomena',
    wikipedia: 'Carian alphabets',
    era: 'c. 650–300 BCE',
    location: {
      lat: 37.3,
      lng: 28.1,
      place: 'Caria (southwestern Turkey) and Egyptian mercenary sites',
    },
    summary:
      'The Carian script was used to write the Carian language, an Anatolian Indo-European tongue, in southwestern Turkey and in Egypt where Carian mercenaries served. Numerous inscriptions were found at Memphis and Abu Simbel. The script was substantially deciphered in the 1980s–1990s, primarily through bilingual Greek-Carian inscriptions discovered at Kaunos and Saqqara.',
    unexplained:
      'While the phonetic values of most signs are now established, significant portions of Carian vocabulary and grammar remain unclear, and some sign values are still disputed among specialists.',
    theories: [
      'Well supported: Carian is an Anatolian branch of Indo-European, related to Lydian and Lycian, deciphered through bilingual texts.',
      'Debated: The exact values of several Carian letters remain contested between competing decipherment proposals by Adiego and Schürr.',
      'No serious alternatives: The Indo-European classification of the language itself is not in dispute.',
    ],
    unsolvedMeaning:
      'Largely resolved in phonology since the 1990s bilingual discoveries, but residual uncertainties in vocabulary and some sign values mean full linguistic understanding is incomplete.',
    sources: [
      'Adiego, I.J. (2007). The Carian Language. Leiden: Brill.',
      "Schürr, D. (1992). 'Zur Bestimmung des Karischen Alphabets.' Kadmos 31.",
    ],
  },
  {
    id: 'proto-writing-jiahu',
    title: 'Jiahu symbols',
    category: 'phenomena',
    wikipedia: 'Jiahu symbols',
    era: 'c. 6600–6200 BCE',
    location: { lat: 33.62, lng: 113.67, place: 'Jiahu site, Henan Province, China' },
    summary:
      'Sixteen turtle shells and bones excavated from the Neolithic site of Jiahu in China bear carved marks that some researchers have proposed as the earliest known proto-writing in East Asia, predating the oracle bone script by over 5,000 years. The symbols resemble certain later Chinese characters in form. The site dates to approximately 6600 BCE and was published by Chinese archaeologists in the 1980s.',
    unexplained:
      'It is unresolved whether the Jiahu symbols constitute a genuine writing or proto-writing system, a tally or mnemonic system, or coincidental graphical similarities to later Chinese characters.',
    theories: [
      'Proposed by some Chinese scholars: The symbols are the earliest stage of Chinese writing, showing graphic continuity with Shang dynasty oracle bone script.',
      'More cautious mainstream view: The marks are isolated ritual or tally symbols without systemic linguistic encoding, and resemblances to later characters may be coincidental.',
      'Skeptical position: The sample size is too small and contextually isolated to establish any writing system, and independent verification of claimed character matches is limited.',
    ],
    unsolvedMeaning:
      "Genuinely unresolved: the functional status of the symbols (proto-writing vs. non-linguistic marks) is debated, and the claimed connection to Chinese characters is not established to most specialists' satisfaction.",
    sources: [
      "Li, X. et al. (2003). 'The earliest writing? Sign use in the seventh millennium BC at Jiahu, China.' Antiquity 77(295).",
      'Boltz, W.G. (1994). The Origin and Early Development of the Chinese Writing System. New Haven: AOS.',
    ],
  },
  {
    id: 'rongorongo-excluded-sidama-script',
    title: 'Wadi el-Hol inscriptions',
    category: 'phenomena',
    wikipedia: 'Wadi el-Hol inscriptions',
    era: 'c. 1900–1800 BCE',
    location: { lat: 25.97, lng: 32.47, place: 'Wadi el-Hol, Upper Egypt' },
    summary:
      'Two short inscriptions carved into limestone cliffs at Wadi el-Hol in the Egyptian desert were discovered in 1999 by John and Deborah Darnell. The inscriptions use a script closely related to Proto-Sinaitic and are considered among the earliest known alphabetic writing, predating the Serabit el-Khadim inscriptions in age and possibly representing an independent or antecedent stage of the alphabet. The carvers were likely Semitic-speaking soldiers or traders in Egyptian service.',
    unexplained:
      'The inscriptions have not been convincingly translated; proposed readings remain speculative, and it is unclear whether they are names, dedicatory formulas, or other short texts.',
    theories: [
      'Widely accepted: The inscriptions represent early alphabetic writing derived from Egyptian hieroglyphs, consistent with the Proto-Sinaitic tradition.',
      'Proposed: One inscription may contain a title or personal name in a Northwest Semitic language, but no consensus reading exists.',
      'Speculative and rejected: Claims connecting the inscriptions to specific Biblical narratives are not supported by evidence.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved in content: while the alphabetic nature of the script is accepted, no agreed translation of either inscription has been achieved.',
    sources: [
      'Darnell, J.C. et al. (2005). Two Early Alphabetic Inscriptions from the Wadi el-Hôl. New Haven: ASOR.',
      'Hamilton, G.J. (2006). The Origins of the West Semitic Alphabet in Egyptian Scripts. Washington DC: Catholic Biblical Association.',
    ],
  },
  {
    id: 'tifinar-ancient-libyco-berber',
    title: 'Ancient Libyco-Berber script',
    category: 'phenomena',
    wikipedia: 'Libyco-Berber script',
    era: 'c. 3rd century BCE onwards (attested), possibly earlier',
    location: { lat: 24, lng: 9, place: 'Sahara Desert and North Africa (widespread)' },
    summary:
      'The ancient Libyco-Berber script is an abjad used across North Africa and the Sahara, attested in thousands of inscriptions on stone, many still unread. The script is the ancestor of the modern Tifinagh alphabet used by Tuareg communities. Most inscriptions are short and found in rock-art contexts across Algeria, Libya, Morocco, and the Canary Islands.',
    unexplained:
      'The majority of ancient Libyco-Berber inscriptions cannot be translated because the ancient Berber language recorded in them is only partially understood and most texts lack context or bilingual parallels.',
    theories: [
      'Established: The script encodes an ancient Berber language and is ancestral to modern Tifinagh; its phonetic values are largely known from bilingual Punic-Libyco-Berber texts.',
      'Unresolved: The origin of the script itself — whether derived from Phoenician, an independent invention, or a much older local tradition — is debated.',
      'Speculative: Some researchers propose the script may predate Phoenician contact, implying independent invention, but evidence is not conclusive.',
    ],
    unsolvedMeaning:
      "Likely explained in script mechanics but genuinely unresolved in text content: most individual inscriptions cannot be translated, and the script's ultimate origin remains debated.",
    sources: [
      "Février, J.G. (1956). 'Que savons-nous du libyque?' Revue Africaine 100.",
      'Pichler, W. (2007). Origin and Development of the Libyco-Berber Script. Berlin: Rüdiger Köppe.',
    ],
  },
  {
    id: 'khitan-large-script',
    title: 'Khitan large script',
    category: 'phenomena',
    wikipedia: 'Khitan large script',
    era: 'c. 920–1125 CE',
    location: {
      lat: 42.9,
      lng: 119.1,
      place: 'Inner Mongolia and northeastern China (Liao dynasty territory)',
    },
    summary:
      'The Khitan large script was created around 920 CE for the Khitan language, spoken by the founders of the Liao dynasty in northeastern China. It coexisted with the Khitan small script and consists of several hundred logographic-phonetic characters adapted from Chinese. Hundreds of inscriptions survive on stone stelae and tomb epitaphs, but the language is only partially understood.',
    unexplained:
      'Many Khitan large script characters remain undeciphered or ambiguously interpreted, and the grammar of the Khitan language — a likely Para-Mongolic tongue — is not fully reconstructed.',
    theories: [
      'Moderately supported: Khitan belongs to the Para-Mongolic branch of the Mongolic language family, based on shared vocabulary with Mongolic languages identified in partially readable texts.',
      'Debated: The precise phonetic values and morphological parsing of many inscriptions remain contested between Chinese, Japanese, and Western specialists.',
      'No serious alternatives: The Liao dynasty historical context and inscription content are not in dispute; the challenge is purely linguistic and paleographic.',
    ],
    unsolvedMeaning:
      'Likely partially explained but genuinely unresolved: significant portions of the script and language remain undeciphered despite decades of scholarship, partly due to the extinction of the language without close modern relatives.',
    sources: [
      'Kane, D. (2009). The Kitan Language and Script. Leiden: Brill.',
      'Wu, Y. & Janhunen, J. (2010). New Materials on the Khitan Small Script. Folkestone: Global Oriental.',
    ],
  },
  {
    id: 'proto-elamite-excluded-isthmian-script',
    title: 'Isthmian script',
    category: 'phenomena',
    wikipedia: 'Isthmian script',
    era: 'c. 300 BCE – 250 CE',
    location: { lat: 17.9, lng: -94.9, place: 'Isthmus of Tehuantepec, Veracruz/Oaxaca, Mexico' },
    summary:
      'The Isthmian script, also called Epi-Olmec, is attested on a small number of stone monuments and the La Mojarra stela, the longest known Isthmian text with over 500 glyphs. A partial decipherment by Justeson and Kaufman (1993) proposed that the script encodes an ancestor of the Zoquean language family, but this reading has not achieved universal acceptance. The script is distinct from Maya writing and appears to represent an independent Mesoamerican tradition.',
    unexplained:
      'Whether the Justeson-Kaufman decipherment is correct — translating the La Mojarra stela as a historical narrative about a local ruler — remains contested, and other Isthmian texts have not been confirmed as readable under this scheme.',
    theories: [
      'Proposed by Justeson & Kaufman (1993): The script records Proto-Zoquean; the La Mojarra stela narrates accession rituals of a ruler named Harvest Mountain Lord, with specific astronomical dates.',
      'Skeptical position (Houston, Coe, and others): The proposed decipherment relies on circular reasoning and the phonetic matches are insufficiently rigorous to be accepted.',
      'Alternative: The script may be largely logographic with limited phonetic complement, making syllabic decipherment premature.',
    ],
    unsolvedMeaning:
      "Genuinely contested: a decipherment exists but has not achieved scholarly consensus, leaving the script's full reading an open and actively debated question.",
    sources: [
      "Justeson, J. & Kaufman, T. (1993). 'A Decipherment of Epi-Olmec Hieroglyphic Writing.' Science 259(5102).",
      "Houston, S. et al. (2001). 'The Language of Classic Maya Inscriptions.' Current Anthropology 41(3).",
    ],
  },
  {
    id: 'cypro-minoan-script',
    title: 'Cypro-Minoan syllabary',
    category: 'phenomena',
    wikipedia: 'Cypro-Minoan syllabary',
    era: 'c. 1550–1050 BCE',
    location: { lat: 35, lng: 33, place: 'Cyprus (multiple sites including Enkomi and Ugarit)' },
    summary:
      'Cypro-Minoan is an undeciphered Bronze Age script used on Cyprus and at Ugarit, attested in about 250 clay tablets, clay balls, and objects. It is believed to derive from Minoan Linear A and to be an ancestor of the later, deciphered Cypriot syllabary. The corpus is relatively small and the underlying language is unknown.',
    unexplained:
      'No Cypro-Minoan text has been convincingly translated; the language it encodes — possibly an early form of Greek, a pre-Greek Aegean language, or something else — remains unknown, and no bilingual inscription has been found.',
    theories: [
      'Moderately supported: The script derives from Linear A and encodes a language of the Aegean or Cypro-Minoan cultural sphere, possibly related to the later Eteocypriot language.',
      "Proposed: The underlying language may be an early form of Greek, given Cyprus's later strong Greek cultural presence, but this is not demonstrated.",
      'Debated: Steele (2013) has proposed a partial structural analysis suggesting the script is phonetically similar to the Cypriot syllabary, but phonetic values have not been confirmed through bilingual evidence.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: Cypro-Minoan remains undeciphered, the language is unknown, and no scholarly consensus on any reading exists.',
    sources: [
      'Ferrara, S. (2012). Cypro-Minoan Inscriptions, Volume I: Analysis. Oxford: Oxford University Press.',
      'Steele, P.M. (2013). A Linguistic History of Ancient Cyprus. Cambridge: Cambridge University Press.',
    ],
  },
  {
    id: 'mary-rogers-murder',
    title: 'The Murder of Mary Rogers',
    category: 'events',
    wikipedia: 'Mary Cecilia Rogers',
    era: '1841',
    location: { lat: 40.7178, lng: -74.0431, place: 'Hoboken, New Jersey, USA' },
    summary:
      "Mary Rogers, a Manhattan cigar shop clerk known as the 'Beautiful Cigar Girl,' was found dead in the Hudson River near Hoboken on July 28, 1841. Her death showed signs of violence and possible sexual assault. The case inspired Edgar Allan Poe's 1842 story 'The Mystery of Marie Rogêt,' in which he speculated about the circumstances.",
    unexplained:
      'Whether Rogers died from a botched abortion, murder by a gang, or at the hands of a single assailant has never been established; no one was ever charged.',
    theories: [
      "Moderately supported: Rogers died from complications of an illegal abortion, with a Hoboken innkeeper's deathbed confession pointing in this direction.",
      'Weakly supported: She was attacked and killed by a gang of young men along the riverbank, consistent with injuries observed.',
      'Speculative: She was murdered by a single intimate acquaintance, the line Poe favored in his fictional retelling.',
    ],
    unsolvedMeaning:
      'Likely partially explained — the abortion hypothesis has circumstantial support from a reported deathbed statement — but no confession or corroborating evidence was ever secured, leaving the case genuinely unresolved in a legal sense.',
    sources: [
      "Amy Gilman Srebnick, 'The Mysterious Death of Mary Rogers: Sex and Culture in Nineteenth-Century New York' (Oxford University Press, 1995).",
      "Wikipedia: 'Mary Rogers murder case' — cites contemporaneous newspaper accounts and Poe scholarship.",
    ],
  },
  {
    id: 'axeman-of-new-orleans',
    title: 'The Axeman of New Orleans',
    category: 'events',
    wikipedia: 'Axeman of New Orleans',
    era: '1918–1919',
    location: { lat: 29.9511, lng: -90.0715, place: 'New Orleans, Louisiana, USA' },
    summary:
      "Between May 1918 and October 1919, at least eight people were attacked with an axe or straight razor in New Orleans, six of whom died. The attacker, dubbed the Axeman, typically entered through a chiseled rear door panel and used the homeowners' own tools. The killer sent a letter to newspapers in March 1919 claiming supernatural identity and declaring that anyone playing jazz on a specific night would be spared.",
    unexplained:
      'The Axeman was never identified or charged; whether the attacks were the work of one person, connected to organized crime, or involved copycat perpetrators is unresolved.',
    theories: [
      'Historically proposed without forensic confirmation: Joseph Mumfre, a convicted criminal killed in 1921 by the widow of one victim, was named as a suspect; no physical evidence links him to the scenes.',
      'Credibly argued by historian Miriam Davis: The murders were connected to Mafia protection rackets targeting Italian grocery owners, with Mumfre as a plausible but unconfirmed perpetrator.',
      'Speculative: The letter was a hoax unconnected to the actual attacker, and multiple unrelated perpetrators committed the crimes.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — no trial, no confession, and no forensic linkage; the Mumfre hypothesis is plausible but rests entirely on circumstantial and testimonial evidence.',
    sources: [
      "Miriam C. Davis, 'The Axeman of New Orleans: The True Story' (Chicago Review Press, 2017).",
      "Wikipedia: 'Axeman of New Orleans' — covers victims, primary source letters, and suspect history.",
    ],
  },
  {
    id: 'beaumont-children-disappearance',
    title: 'Disappearance of the Beaumont Children',
    category: 'disappearances',
    wikipedia: 'Disappearance of the Beaumont children',
    era: '1966',
    location: {
      lat: -34.9785,
      lng: 138.5152,
      place: 'Glenelg Beach, Adelaide, South Australia, Australia',
    },
    summary:
      'Jane (9), Arnna (7), and Grant (4) Beaumont left their home in Glenelg, South Australia, on Australia Day, January 26, 1966, to spend the morning at the beach. They were seen by multiple witnesses interacting with an unknown tall blond man on the beach and later buying food at a local shop. They never returned home and no confirmed trace of them has ever been found.',
    unexplained:
      'The identity of the man the children were seen with, their fate, and the location of their remains have never been established despite one of the longest-running investigations in Australian history.',
    theories: [
      'Widely suspected but unproven: The tall blond man seen with the children was their abductor and killer; Arthur Stanley Brown and other named suspects were investigated but never charged due to insufficient evidence.',
      "Investigated without resolution: The children were taken to a property in Glenelg or Adelaide's inner suburbs, possibly connected to a paedophile network active in South Australia at the time.",
      "Recent investigative focus: 2013 and 2018 excavations of a former Castalloy factory site — based on information from a person connected to convicted murderer Bevan Spencer von Einem's network — found no remains.",
    ],
    unsolvedMeaning:
      'Genuinely unresolved — no remains, no confirmed suspect, and no credible witness to events after mid-afternoon on January 26; the case remains open with South Australian Police.',
    sources: [
      "Alan Whiticker & Stuart Mullins, 'The Satin Man: Uncovering the Mystery of the Missing Beaumont Children' (New Holland, 2013).",
      "Wikipedia: 'Disappearance of the Beaumont children' — documents witness accounts, named suspects, and excavation history.",
    ],
  },
  {
    id: 'lima-treasure',
    title: 'Lima Treasure',
    category: 'disappearances',
    wikipedia: 'Treasure of Lima',
    era: '1820',
    location: { lat: 5.5577, lng: -87.0567, place: 'Cocos Island, Costa Rica' },
    summary:
      'During the Peruvian wars of independence, the Catholic Church in Lima entrusted enormous wealth — gold statues, jeweled swords, and hundreds of chests of coin — to a British sea captain named Thompson for safekeeping. Thompson and his crew murdered the guards and sailed for Cocos Island, where they allegedly buried the cache. Thompson was captured, led Spanish authorities back to the island, then escaped, and the treasure was never recovered.',
    unexplained:
      'No confirmed excavation has ever produced the hoard, and the precise burial site remains unknown despite over 300 documented expeditions since the 19th century.',
    theories: [
      'Moderately supported: The treasure was buried on Cocos Island but deteriorating navigational records and dense jungle have prevented exact location.',
      'Weakly supported: Thompson redistributed the wealth long before his capture, and no cache ever existed on the island.',
      'Speculative: The legend was embellished over generations, and the actual hoard was far smaller than accounts claim.',
    ],
    unsolvedMeaning:
      "Likely explained in outline — a real theft almost certainly occurred — but genuinely unresolved as to the treasure's fate; no physical evidence has been found.",
    sources: [
      "David Cordingly, 'Under the Black Flag' (1995), discusses historical piracy and the Lima legend.",
      'Costa Rican government records on Cocos Island expeditions (Isla del Coco National Park archives).',
    ],
  },
  {
    id: 'crown-jewels-ireland',
    title: 'Irish Crown Jewels theft',
    category: 'disappearances',
    wikipedia: 'Irish Crown Jewels',
    era: '1907',
    location: { lat: 53.3439, lng: -6.2672, place: 'Dublin Castle, Dublin, Ireland' },
    summary:
      'The jewels of the Order of St Patrick — a diamond star and badge belonging to the Viceroy of Ireland — vanished from a safe in Dublin Castle sometime before 6 July 1907. The theft was discovered just days before a royal visit by King Edward VII. Despite a formal police inquiry, no arrest was ever made and the jewels have never been recovered.',
    unexplained:
      'The identity of the thief or thieves and the current location of the jewels remain completely unknown more than a century later.',
    theories: [
      'Moderately supported: An inside job by someone with access to Dublin Castle, possibly motivated by political or financial reasons.',
      'Weakly supported: Francis Shackleton (brother of explorer Ernest Shackleton), who had irregular access to the safe, was the prime suspect but was never charged.',
      'Speculative: The jewels left Ireland quickly and were melted down or sold in fragments, making recovery impossible.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — the case was never solved, no credible suspect was prosecuted, and the jewels have not surfaced in any known collection.',
    sources: [
      "Francis Bamford & Viola Bankes, 'Vicious Circle: The Case of the Missing Irish Crown Jewels' (1965).",
      'National Archives of Ireland, Dublin Castle inquiry files (CSORP 1907).',
    ],
  },
  {
    id: 'florentine-diamond',
    title: 'Florentine Diamond',
    category: 'disappearances',
    wikipedia: 'Florentine Diamond',
    era: '1918–1920s',
    location: {
      lat: 48.2082,
      lng: 16.3738,
      place: 'Vienna / last known in Austrian Imperial Treasury',
    },
    summary:
      'The Florentine Diamond, a pale yellow 137.27-carat stone of Indian origin once owned by the Medici and later the Habsburg dynasty, disappeared after the collapse of the Austro-Hungarian Empire in 1918. The last Habsburg emperor Karl I took the imperial jewels into exile; subsequent reports suggest the stone was sold in South America in the 1920s and may have been recut, but this has never been verified.',
    unexplained:
      'Whether the Florentine Diamond still exists in recognizable form, was recut beyond identification, or is held privately is entirely unknown.',
    theories: [
      'Moderately supported: The stone was smuggled to South America by the Habsburg family and sold, then recut to avoid identification.',
      'Weakly supported: The diamond remains intact in a private collection whose owners are unaware of its provenance.',
      'Speculative: The gem was broken up and individual pieces absorbed into the unregulated diamond trade.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — no verified sighting of the stone has occurred since before World War I, and the recut hypothesis is plausible but unproven.',
    sources: [
      "Herbert Tillander, 'Diamond Cuts in Historic Jewellery 1381–1910' (1995).",
      'GIA Gemological Institute records on historic named diamonds.',
    ],
  },
  {
    id: 'sceptre-of-dagobert',
    title: 'Sceptre of Dagobert',
    category: 'disappearances',
    wikipedia: 'Sceptre of Dagobert',
    era: '1794',
    location: { lat: 48.8566, lng: 2.3522, place: 'Paris, France' },
    summary:
      'The Sceptre of Dagobert, a Frankish golden sceptre traditionally associated with the 7th-century Merovingian king Dagobert I, was among the royal regalia held at the Basilica of Saint-Denis. The regalia were seized and partially destroyed or dispersed during the French Revolution in 1793–1794. Some pieces were melted down; others were sold or disappeared into private hands.',
    unexplained:
      'It is unclear whether the sceptre itself survived the revolutionary dispersal and, if so, where it is now.',
    theories: [
      'Moderately supported: The sceptre was melted down along with other Carolingian-era metalwork during the 1793–94 confiscations.',
      'Weakly supported: It was sold to a private collector during the Revolution and passed through estates unidentified.',
      'Speculative: The piece in the Cabinet des Médailles before the Revolution already differed from the original Merovingian object.',
    ],
    unsolvedMeaning:
      'Likely explained — most historians believe it was destroyed in the Revolution — but not definitively proven, and no confirmed survival is documented.',
    sources: [
      "Danielle Gaborit-Chopin, 'Regalia: Les instruments du sacre des rois de France' (1987).",
      'Bibliothèque nationale de France, Cabinet des Médailles historical inventories.',
    ],
  },
  {
    id: 'lost-library-ivan-terrible',
    title: 'Library of Ivan the Terrible',
    category: 'disappearances',
    wikipedia: 'Library of Ivan the Terrible',
    era: '16th century',
    location: { lat: 55.752, lng: 37.6175, place: 'Moscow Kremlin, Russia' },
    summary:
      "Ivan IV of Russia ('the Terrible') is alleged to have possessed a vast library of Greek, Latin, and Hebrew manuscripts, partly inherited from his grandmother Sophia Palaiologina, which may have derived from the libraries of Constantinople and Byzantium. The collection was reportedly hidden in vaults beneath Moscow in the 1560s–70s and has not been seen since. No contemporary inventory of the full library survives.",
    unexplained:
      'Whether such a collection ever existed in the form described, and if so where it is now, has never been established despite multiple archaeological searches beneath the Kremlin.',
    theories: [
      'Weakly supported: The library is stored in sealed or inaccessible medieval vaults beneath the Kremlin or central Moscow.',
      'Moderately supported: The legend was significantly exaggerated in later centuries; only a modest collection existed and was dispersed or destroyed.',
      'Speculative: Parts of the collection survive in Russian Orthodox monastery archives under unrecognized descriptions.',
    ],
    unsolvedMeaning:
      'Possibly a myth — the primary sources are thin and late; most modern historians doubt the library existed at the legendary scale, but the question is not fully closed.',
    sources: [
      "Sigismund von Herberstein, 'Rerum Moscoviticarum Commentarii' (1549), an early primary source on the Muscovite court.",
      'Russian State Historical Archive, Kremlin excavation reports (20th century).',
    ],
  },
  {
    id: 'lost-dutchman-mine',
    title: "Lost Dutchman's Gold Mine",
    category: 'disappearances',
    wikipedia: "Lost Dutchman's Gold Mine",
    era: '1880s',
    location: { lat: 33.4648, lng: -111.0829, place: 'Superstition Mountains, Arizona, USA' },
    summary:
      "The Lost Dutchman's Mine is an allegedly rich gold deposit said to be located somewhere in the Superstition Mountains east of Phoenix, Arizona. The legend centres on Jacob Waltz, a German-American (mislabeled 'Dutchman') prospector who reportedly worked a secret gold mine in the 1870s–1880s and left cryptic clues on his deathbed in 1891. Numerous prospectors have searched for the mine; some have died in the attempt.",
    unexplained:
      "Whether Waltz's mine ever existed as described, or was a fabrication or exaggeration, has never been determined despite over a century of searching.",
    theories: [
      'Weakly supported: A real high-grade gold deposit exists in the Superstition Wilderness but access is obstructed by terrain or legal restrictions.',
      'Moderately supported: Waltz found modest placer gold and the story grew into legend after his death.',
      'Moderately supported: The entire legend is a myth with no basis in a real mine, possibly originating as a tall tale.',
    ],
    unsolvedMeaning:
      'Possibly a myth — geological surveys of the Superstition Mountains have found no significant gold deposits, but the story has not been definitively debunked.',
    sources: [
      "T.E. Glover, 'The Lost Dutchman Mine' (1953), an early compilation of the legend.",
      'US Geological Survey mineral resource assessments for Maricopa and Pinal counties, Arizona.',
    ],
  },
  {
    id: 'menorah-temple-jerusalem',
    title: 'Menorah of the Temple of Jerusalem',
    category: 'disappearances',
    wikipedia: 'Temple menorah',
    era: '70 CE – c. 455 CE',
    location: { lat: 41.8902, lng: 12.4922, place: 'Rome, Italy (last attested)' },
    summary:
      'The golden seven-branched menorah of the Second Temple in Jerusalem was carried to Rome after the sack of 70 CE, as depicted on the Arch of Titus. Ancient sources record it in Rome through the 5th century; it was reportedly taken by the Vandals to Carthage in 455 CE and then possibly moved to Constantinople by the Byzantines in 534 CE, after which historical record becomes ambiguous.',
    unexplained:
      'What happened to the menorah after its probable arrival in Constantinople in the 6th century — whether it was destroyed, hidden, or survives somewhere — is not documented.',
    theories: [
      'Moderately supported: The menorah was returned to Jerusalem by Emperor Justinian and subsequently lost during the Persian or Arab conquests of the 7th century.',
      'Weakly supported: It remains in Vatican secret archives or storerooms, removed from public record to avoid diplomatic tension.',
      'Weakly supported: It was melted down or destroyed during the Byzantine period.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — the historical trail goes cold in the 6th century and no credible physical evidence has emerged since.',
    sources: [
      "Procopius, 'History of the Wars' (c. 550 CE), Book IV, ch. 9, on the Vandal treasure.",
      "Steven Fine, 'The Menorah: From the Bible to Modern Israel' (Harvard University Press, 2016).",
    ],
  },
  {
    id: 'quedlinburg-treasures',
    title: 'Quedlinburg treasures theft',
    category: 'disappearances',
    wikipedia: 'Quedlinburg Abbey',
    era: '1945',
    location: { lat: 51.7892, lng: 11.1458, place: 'Quedlinburg, Saxony-Anhalt, Germany' },
    summary:
      "In April 1945, US Army lieutenant Joe T. Meador stole a cache of medieval reliquaries and manuscripts from a mine near Quedlinburg where they had been hidden for wartime protection. The objects — including a 9th-century rock crystal reliquary and illuminated manuscripts — were mailed home to Texas. After Meador's death in 1980 his family began selling them; most were eventually recovered and repatriated to Germany in 1990–1993, but the whereabouts of some items from the hoard remain uncertain.",
    unexplained:
      'Whether all stolen items have been accounted for, or whether some pieces were sold into private collections and remain unidentified, is not fully resolved.',
    theories: [
      'Moderately supported: All major objects were recovered in the 1990 repatriation deal; only minor pieces may still be missing.',
      "Weakly supported: Some items were sold separately before the family's involvement became public and are now in unidentified private hands.",
      'Weakly supported: Certain objects were damaged or destroyed by Meador and were never catalogued as missing.',
    ],
    unsolvedMeaning:
      'Largely resolved — the headline objects were repatriated — but not fully closed, as the completeness of recovery relative to the original inventory is disputed.',
    sources: [
      "William H. Honan, 'Treasure Hunt: A New York Times Reporter Tracks the Quedlinburg Hoard' (1997).",
      'Kulturstiftung der Länder (Cultural Foundation of the German States), repatriation documentation 1992–1993.',
    ],
  },
  {
    id: 'patiala-necklace',
    title: 'Patiala Necklace',
    category: 'disappearances',
    wikipedia: 'Patiala Necklace',
    era: '1948',
    location: { lat: 30.3398, lng: 76.3869, place: 'Patiala, Punjab, India' },
    summary:
      'The Patiala Necklace, created by Cartier in 1928 for Maharaja Bhupinder Singh of Patiala, was one of the most spectacular pieces of jewellery ever made, featuring 2,930 diamonds including the De Beers diamond (then the seventh-largest known). The necklace disappeared from the Patiala treasury in 1948 after Indian independence. In 1998, a Cartier researcher found the bare frame of the necklace — stripped of almost all its stones — in a London antiques shop.',
    unexplained:
      'Where the hundreds of removed diamonds — including the prominent De Beers diamond — are now located is entirely unknown.',
    theories: [
      'Moderately supported: The stones were individually sold on the open market and are now unidentified components of other jewellery.',
      'Weakly supported: A significant portion of the stones was acquired by a single private collector who has not disclosed provenance.',
      'Weakly supported: Some stones were sold in Antwerp or Mumbai diamond markets in the decades after 1948 and their trail is unrecoverable.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — the frame was found but the stones, including a historically significant large diamond, have not been traced.',
    sources: [
      'Cartier historical archives, Paris (records of the 1928 commission cited in museum literature).',
      "Stefano Papi & Alexandra Rhodes, 'Famous Jewelry Collectors' (1999), which documents the necklace's history.",
    ],
  },
  {
    id: 'year-without-a-summer',
    title: 'Year Without a Summer',
    category: 'events',
    wikipedia: 'Year Without a Summer',
    era: '1816',
    location: { lat: 45, lng: -75, place: 'North America and Western Europe (widespread)' },
    summary:
      'In 1816, average temperatures across the Northern Hemisphere dropped markedly, causing widespread crop failures, famine, and social upheaval across Europe and North America. The volcanic eruption of Mount Tambora in April 1815 injected massive quantities of aerosols into the stratosphere and is widely credited as the primary cause. Summer 1816 saw snowfall in New England in June and July, and food riots in France.',
    unexplained:
      'While the Tambora eruption is the accepted primary driver, researchers continue to investigate why the climatic impact was so severe and prolonged compared to other large eruptions, and what combination of pre-existing conditions amplified the anomaly.',
    theories: [
      'Tambora eruption aerosols (very well-supported): Stratospheric sulfate aerosols from Tambora reduced solar insolation globally; this is the scientific consensus explanation.',
      'Compound volcanic forcing plus the Dalton Minimum (moderately supported): Some researchers argue that diminished solar activity during the Dalton Minimum amplified the volcanic impact.',
      'Pre-existing cool phase (moderately supported): Evidence suggests the Northern Hemisphere was already in a cool phase, meaning Tambora pushed conditions past a critical threshold rather than acting alone.',
    ],
    unsolvedMeaning:
      'Likely explained in broad terms by the Tambora eruption, but the precise mechanisms that produced such extreme regional variation and duration are still debated in paleoclimate literature.',
    sources: [
      "Oppenheimer, C. (2003). 'Climatic, environmental and human consequences of the largest known historic eruption: Tambora volcano (Indonesia) 1815.' Progress in Physical Geography 27(2), 230–259.",
      "Stommel, H. & Stommel, E. (1979). 'The Year Without a Summer.' Scientific American 240(6), 176–186.",
    ],
  },
  {
    id: 'noctilucent-cloud-origin',
    title: 'Noctilucent cloud',
    category: 'phenomena',
    wikipedia: 'Noctilucent cloud',
    era: 'First recorded 1885; increasing frequency observed through 20th–21st centuries',
    location: {
      lat: 70,
      lng: 25,
      place: 'High latitudes (Arctic/Antarctic); first documented over Northern Europe',
    },
    summary:
      "Noctilucent clouds (NLC) are the highest clouds in Earth's atmosphere, forming at altitudes of around 76–85 km in the mesosphere, and are visible from high latitudes during summer twilight as luminous electric-blue structures. They were first reliably reported in 1885, two years after the Krakatoa eruption, which initially suggested a volcanic connection. Their frequency and the latitude range at which they are observed have increased measurably since the 1990s.",
    unexplained:
      'Why noctilucent clouds were apparently first observed in 1885 — whether this reflects a genuine atmospheric change, the Krakatoa eruption, or simply improved observation — and what is driving their recent expansion toward lower latitudes remain unresolved.',
    theories: [
      'Anthropogenic methane increase (moderately supported): Rising methane oxidises to produce water vapour in the upper atmosphere, potentially providing more ice nuclei for NLC formation; this is a leading hypothesis for their recent expansion.',
      'Krakatoa volcanic water vapour injection as first cause (historical, now considered insufficient): The 1885 first observation followed Krakatoa, but volcanic water vapour is too short-lived to explain the persistent increase.',
      'Observation bias (plausible but insufficient): Improved communications and more observers since the 19th century may have increased reporting, but satellite data confirm a real increase in cloud occurrence and brightness.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved in part: the physical chemistry of NLC formation is understood, but the cause of their southward expansion and possible 1885 emergence is not definitively established.',
    sources: [
      "Thomas, G.E. (1991). 'Mesospheric clouds and the physics of the mesopause region.' Reviews of Geophysics 29(4), 553–575.",
      "DeLand, M.T. et al. (2006). 'A multi-year record of upper stratospheric temperatures from SBUV radiances.' Journal of Geophysical Research: Atmospheres 111, D17.",
    ],
  },
  {
    id: 'geomagnetic-reversal-trigger',
    title: 'Geomagnetic reversal',
    category: 'phenomena',
    wikipedia: 'Geomagnetic reversal',
    era: 'Recorded across geological timescales; active research ongoing',
    location: { lat: -90, lng: 0, place: "Earth's core (global phenomenon)" },
    summary:
      "The geomagnetic field has reversed its polarity hundreds of times in Earth's history, as recorded in magnetised rock sequences worldwide. Reversals are irregular in timing, with the last full reversal (the Brunhes-Matuyama boundary) occurring approximately 780,000 years ago. The current field has been weakening at an accelerated rate and the South Atlantic Anomaly is a prominent feature of the modern field.",
    unexplained:
      "The physical trigger for a geomagnetic reversal — why the geodynamo in Earth's liquid outer core spontaneously and irreversibly flips polarity at irregular intervals — remains a fundamental unsolved problem in geophysics.",
    theories: [
      'Internal geodynamo instability (well-supported in principle, not mechanistically complete): Numerical simulations can produce spontaneous reversals, but do not yet reproduce the observed statistical timing distribution.',
      'Mantle convection influence (moderately supported): Changes in heat flow from the mantle may modulate outer core dynamics and thus reversal frequency over geological time.',
      'Core-mantle boundary heterogeneity (speculative): Persistent anomalies at the core-mantle boundary may seed reversal initiation, but direct evidence is inaccessible.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: geomagnetic reversals are well-documented and physically attributed to the geodynamo, but no predictive mechanistic explanation for their timing or initiation exists.',
    sources: [
      "Glatzmaier, G.A. & Roberts, P.H. (1995). 'A three-dimensional self-consistent computer simulation of a geomagnetic field reversal.' Nature 377, 203–209.",
      'Merrill, R.T., McElhinny, M.W. & McFadden, P.L. (1996). The Magnetic Field of the Earth. Academic Press.',
    ],
  },
  {
    id: 'maunder-minimum',
    title: 'Maunder Minimum',
    category: 'events',
    wikipedia: 'Maunder Minimum',
    era: '1645–1715',
    location: {
      lat: 51.5,
      lng: -0.1,
      place: 'Europe (primary climatic impact zone); global solar phenomenon',
    },
    summary:
      'The Maunder Minimum was a period of drastically reduced sunspot activity between approximately 1645 and 1715, during which fewer than 50 sunspots were observed across the entire ~70-year period — compared with several thousand sunspots recorded in a typical modern 11-year solar cycle. It overlapped with some of the coldest decades of the Little Ice Age in Europe and North America. The period is named after astronomers E.W. Maunder and Annie Russell Maunder who rediscovered the gap in historical records in the late 19th century.',
    unexplained:
      "Whether the solar activity reduction was the primary driver of the climatic cooling observed in Europe, or merely a minor contributor to a cooling dominated by other causes, remains unresolved, as does the mechanism that caused the sun's dynamo to enter such a prolonged quiescent state.",
    theories: [
      'Reduced solar irradiance driving cooling (moderately supported): Total solar irradiance reconstructions suggest a 0.1–0.2% reduction during the Minimum; climate models show this alone is insufficient to explain the full cooling signal.',
      'Volcanic forcing as primary climate driver (moderately supported): Multiple large volcanic eruptions during the Little Ice Age may have had a greater climatic impact than the solar minimum.',
      "Internal solar dynamo fluctuation (active research): The mechanism by which the sun's magnetic dynamo can enter a grand minimum state is not predicted by current solar models; whether such events are periodic or stochastic is debated.",
    ],
    unsolvedMeaning:
      'Genuinely unresolved in two respects: the solar mechanism that produces grand minima is not understood, and the relative contribution of the Maunder Minimum to Little Ice Age cooling versus volcanic and oceanic forcing is still debated.',
    sources: [
      "Eddy, J.A. (1976). 'The Maunder Minimum.' Science 192(4245), 1189–1202.",
      "Lean, J., Beer, J. & Bradley, R. (1995). 'Reconstruction of solar irradiance since 1610: Implications for climate change.' Geophysical Research Letters 22(23), 3195–3198.",
    ],
  },
  {
    id: 'little-ice-age',
    title: 'Little Ice Age',
    category: 'events',
    wikipedia: 'Little Ice Age',
    era: 'Approximately 1300–1850 CE',
    location: {
      lat: 55,
      lng: 15,
      place: 'Northern Hemisphere, particularly Europe and the North Atlantic region',
    },
    summary:
      'The Little Ice Age was a period of cooling that followed the Medieval Warm Period, characterised by advancing glaciers, harsher winters, and disrupted agricultural patterns across the Northern Hemisphere. It is documented through multiple proxy records including tree rings, ice cores, and historical records of harvest failures and frozen rivers. The period is not sharply defined and different regions experienced cooling at different times.',
    unexplained:
      'The ultimate cause or causes of the Little Ice Age — specifically the relative contributions of volcanic aerosol forcing, reduced solar activity, changes in ocean circulation, and internal climate variability — have not been definitively partitioned, and the reasons for its uneven spatial and temporal expression remain debated.',
    theories: [
      'Volcanic forcing as initiator (moderately well-supported): A cluster of large volcanic eruptions in the 13th century may have triggered cooling by reducing summer insolation and promoting sea-ice expansion; this is a leading current hypothesis.',
      'Solar minimum contribution (moderately supported): Reduced solar output during the Maunder and Spörer minima contributed to the cooling, though quantification remains uncertain.',
      'Reduced indigenous American land use after 1492 (speculative and contested): A 2019 study proposed that reforestation after the collapse of indigenous American populations drew down CO₂ enough to contribute to cooling; this remains highly controversial.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved: the Little Ice Age is documented beyond reasonable doubt, but no single forcing adequately explains its magnitude, timing, and spatial heterogeneity; the relative contributions of known forcings remain an open quantitative problem in paleoclimatology.',
    sources: [
      "Miller, G.H. et al. (2012). 'Abrupt onset of the Little Ice Age triggered by volcanism and sustained by sea-ice/ocean feedbacks.' Geophysical Research Letters 39, L02708.",
      'Bradley, R.S. & Jones, P.D. (eds.) (1992). Climate Since A.D. 1500. Routledge.',
    ],
  },
  {
    id: 'dalton-minimum',
    title: 'Dalton Minimum',
    category: 'events',
    wikipedia: 'Dalton Minimum',
    era: '1790–1830',
    location: {
      lat: 51.5,
      lng: -0.1,
      place: 'Europe and Northern Hemisphere (global solar phenomenon)',
    },
    summary:
      'The Dalton Minimum was a period of reduced sunspot activity lasting from approximately 1790 to 1830, less severe than the Maunder Minimum but associated with a temporary cooling anomaly and, coincidentally, a period of significant volcanic activity including the Tambora eruption of 1815. It is named after the meteorologist John Dalton who recorded anomalous weather during this period. Solar cycle lengths and amplitudes were both affected.',
    unexplained:
      'Whether the Dalton Minimum represents a genuine grand solar minimum of the same class as the Maunder Minimum, or merely a weak cycle pair, is debated; and the degree to which it contributed independently to early 19th-century climate anomalies versus being overwhelmed by volcanic forcing remains unquantified.',
    theories: [
      'Grand solar minimum (moderately supported): Isotopic proxies such as Be-10 and C-14 in ice cores and tree rings suggest reduced solar activity comparable to, if milder than, a grand minimum.',
      'Superposition of solar and volcanic forcing (moderately supported): The Tambora eruption and other volcanism during this period make isolating the solar climatic signal statistically difficult.',
      'Phase transition in the solar dynamo (speculative): Some researchers propose the Dalton Minimum represents the sun beginning to exit a grand minimum state, with the Maunder Minimum representing the trough; the dynamical interpretation remains contested.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved as to classification: whether the Dalton Minimum is a true grand solar minimum or a statistical fluctuation within normal solar variability is still debated in solar physics literature.',
    sources: [
      "Usoskin, I.G. et al. (2003). 'Millennium-scale sunspot number reconstruction: Evidence for an unusually active sun since the 1940s.' Physical Review Letters 91(21), 211101.",
      "Lean, J. (2000). 'Evolution of the Sun's spectral irradiance since the Maunder Minimum.' Geophysical Research Letters 27(16), 2425–2428.",
    ],
  },
  {
    id: 'aurora-borealis-historical-anomalies',
    title: 'Aurora',
    category: 'phenomena',
    wikipedia: 'Aurora',
    era: 'Antiquity to present; anomalous events documented throughout history',
    location: {
      lat: 67,
      lng: 26,
      place:
        'High-latitude auroral zones; notable low-latitude events documented across Europe and China',
    },
    summary:
      "Auroras are luminous atmospheric phenomena caused by charged particles from the sun exciting atmospheric gases, typically visible in high-latitude zones. Historical records from China, Japan, Korea, and Europe document auroras at anomalously low latitudes during periods of high solar activity, most famously during the Carrington Event of 1859 when auroras were visible in Cuba and Hawaii. Medieval chronicles record terrifying 'fire in the sky' events that are now interpreted as extreme auroral activity.",
    unexplained:
      'The maximum possible intensity of a solar storm and its potential auroral and electromagnetic effects on the modern world are not well-constrained from the historical and geological record; the frequency of Carrington-class events and whether still larger events are physically possible remain open questions.',
    theories: [
      'Carrington-class events as rare but recurrent (moderately supported): Dendrochronological and ice-core records suggest Carrington-class solar proton events occur roughly once per 500 years, though the statistics are uncertain.',
      'Superflare analogy from solar-type stars (speculative): Observations of superflares on sun-like stars suggest the sun may be capable of events far larger than any historically recorded, but no geological evidence confirms this for the Holocene.',
      'Geomagnetic field variation as amplifier (moderately supported): Periods of weaker geomagnetic field allow auroras at lower latitudes and greater particle penetration; the historical record is partly a record of changing field strength as well as solar activity.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved in the critical sense: the upper bound on solar storm intensity and the recurrence rate of extreme events — information essential to assessing risk to modern infrastructure — cannot be determined from the available record.',
    sources: [
      "Carrington, R.C. (1859). 'Description of a singular appearance seen in the Sun on September 1, 1859.' Monthly Notices of the Royal Astronomical Society 20, 13–15.",
      "Miyake, F. et al. (2012). 'A signature of cosmic-ray increase in AD 774-775 from tree rings in Japan.' Nature 486, 240–242.",
    ],
  },
  {
    id: 'greek-fire',
    title: 'Greek Fire',
    category: 'phenomena',
    wikipedia: 'Greek fire',
    era: '7th–12th century CE',
    location: { lat: 41.0082, lng: 28.9784, place: 'Constantinople (Istanbul), Turkey' },
    summary:
      'Greek fire was an incendiary weapon deployed by the Byzantine Empire from around 672 CE, capable of burning on water and reportedly impossible to extinguish with water. It was used decisively in naval battles, including the defense of Constantinople against Arab sieges. The composition was a closely guarded state secret, and Byzantine sources describe it being projected through siphons from ships.',
    unexplained:
      'The precise chemical formula of Greek fire has never been definitively established. It is unknown whether it was based on quicklime, naphtha, pine resin, or some combination, and why no surviving formula or unambiguous archaeological residue has been identified.',
    theories: [
      'Likely-supported: A naphtha-based mixture with quicklime and pine resin, igniting on contact with water via an exothermic reaction — consistent with available sources and regional materials.',
      "Moderately supported: Crude petroleum distillate (naphtha) thickened with resin and propelled under pressure — matching some Byzantine textual descriptions of 'liquid fire'.",
      'Speculative: The formula was deliberately destroyed or suppressed by Byzantine authorities when the empire fell, explaining the total absence of surviving technical documentation.',
    ],
    unsolvedMeaning:
      'Likely explainable through ancient chemistry but unproven — no surviving recipe or definitive residue analysis exists, and modern reconstructions remain disputed among historians and chemists.',
    sources: [
      "Haldon, J. et al. (2006). 'Greek Fire Revisited.' Byzantine Style, Religion and Civilization, Cambridge University Press.",
      "Wikipedia: 'Greek fire' — cites primary sources including Anna Komnene's Alexiad and Theophanes the Confessor.",
    ],
  },
  {
    id: 'damascus-steel',
    title: 'Damascus Steel',
    category: 'phenomena',
    wikipedia: 'Damascus steel',
    era: '~300 BCE – 1750 CE',
    location: { lat: 33.5138, lng: 36.2765, place: 'Damascus, Syria' },
    summary:
      'Damascus steel (wootz steel) was a blade material produced in the Near East and South Asia, celebrated for its exceptional sharpness, toughness, and distinctive watered surface pattern. Production of the original wootz ingots appears to have ceased around 1750 CE, and attempts to recreate the technique during the 18th and 19th centuries failed to reproduce identical results. Modern metallurgical analysis has identified carbon nanotubes and cementite nanowires in authentic samples.',
    unexplained:
      'The specific combination of ore sources, smelting conditions, and trace elements (particularly vanadium and molybdenum) that produced the characteristic nanostructure has not been fully reproduced. It remains unclear whether the cessation was due to loss of specific ore deposits, master craftsmen, or both.',
    theories: [
      'Well-supported: Specific Indian wootz ore containing trace vanadium or other carbide-forming elements was essential, and when those ore sources were exhausted or trade routes disrupted, the process could not be replicated.',
      'Moderately supported: The process involved precise temperature cycling and carbon control during smelting that required tacit knowledge passed orally between craftsmen, lost when that transmission chain broke.',
      'Speculative: Organic additives (e.g. specific plant materials used as flux) contributed catalytic trace elements that have not been identified in surviving samples.',
    ],
    unsolvedMeaning:
      'Likely explainable through materials science but unproven — the general mechanism (wootz steel with carbide banding) is understood, but the exact conditions for the finest historical examples have not been reliably reproduced.',
    sources: [
      "Verhoeven, J.D., Pendray, A.H., & Dauksch, W.E. (1998). 'The Key Role of Impurities in Ancient Damascus Steel Blades.' JOM, 50(9).",
      "Wikipedia: 'Damascus steel' — summarizes metallurgical research and historical production records.",
    ],
  },
  {
    id: 'roman-concrete',
    title: 'Roman Concrete (Opus Caementicium)',
    category: 'phenomena',
    wikipedia: 'Roman concrete',
    era: '3rd century BCE – 5th century CE',
    location: { lat: 41.9028, lng: 12.4964, place: 'Rome, Italy' },
    summary:
      'Roman concrete (opus caementicium) used volcanic ash (pozzolana) and seawater to create a material that has survived more than 2,000 years in marine environments, outperforming modern Portland cement in durability. Structures such as the Pantheon dome and harbour installations at Caesarea Maritima remain largely intact. The specific mix ratios, curing techniques, and full understanding of the mineral reaction (tobermorite crystal formation) were not transmitted to later European builders.',
    unexplained:
      'While the broad chemistry is now understood, the precise methods Roman builders used to achieve consistent quality across large-scale projects — including proportions, water sources, aggregate selection, and curing times — remain incompletely reconstructed. Modern reproductions have not yet matched the multi-century marine durability of original harbour concrete.',
    theories: [
      'Well-supported: Reaction of seawater with volcanic ash (aluminous tobermorite and phillipsite crystallization) created a self-reinforcing mineral matrix, a process only recently identified by synchrotron analysis.',
      'Moderately supported: The specific Pozzuoli volcanic ash source had unique mineralogy that cannot be substituted by generic volcanic ash, making exact reproduction difficult.',
      'Speculative: Roman builders accumulated empirical knowledge over centuries that was transmitted only through craft practice, lost during the decline of large-scale Roman construction projects.',
    ],
    unsolvedMeaning:
      'Largely explained in chemistry but not fully reproduced in engineering practice — the mineralogical mechanism is understood, yet reliably replicating Roman marine concrete at scale remains an active research problem.',
    sources: [
      "Jackson, M.D. et al. (2017). 'Phillipsite and Al-tobermorite mineral cements produced through low-temperature water-rock reactions in Roman marine concrete.' American Mineralogist, 102(7).",
      "Wikipedia: 'Roman concrete' — with citations to archaeological and materials science literature.",
    ],
  },
  {
    id: 'flexible-glass-vitrum-flexile',
    title: 'Flexible Glass (Vitrum Flexile)',
    category: 'phenomena',
    wikipedia: 'Flexible glass',
    era: '1st century CE (reign of Tiberius)',
    location: { lat: 41.9028, lng: 12.4964, place: 'Rome, Italy' },
    summary:
      'Multiple Roman authors — including Petronius, Pliny the Elder, and Dio Cassius — record an anecdote about a craftsman who presented Emperor Tiberius with a glass vessel that, when dropped, dented rather than shattered and could be reshaped with a hammer. According to the story, Tiberius had the craftsman executed to prevent the material from undermining the value of gold and silver. No physical example survives.',
    unexplained:
      'No Roman-era flexible glass artifact has ever been identified, and no ancient formula or technique capable of producing such a material has been confirmed. It is unknown whether the anecdote refers to a real material, a misidentified material (such as a metal alloy or early polymer), or a rhetorical invention.',
    theories: [
      'Possibly a myth or literary device: The story appears in multiple authors as a moral/political anecdote about imperial tyranny and wealth, suggesting it may have been a rhetorical exemplum rather than a technical report.',
      'Speculative: The craftsman may have produced a very thin, lead-rich or soda-lime glass with unusual elasticity, or a glass-ceramic composite, which contemporaries described imprecisely.',
      'Speculative: The account could describe a real but isolated discovery (perhaps a specific silicate formula) that was in fact suppressed or simply not reproducible.',
    ],
    unsolvedMeaning:
      "Possibly a myth — the anecdote's consistent framing as a political morality tale across multiple Roman authors raises serious doubts about its historicity. No archaeological evidence supports the existence of the material.",
    sources: [
      'Pliny the Elder, Naturalis Historia, Book XXXVI, 66; Petronius, Satyricon, 51.',
      "Wikipedia: 'Flexible glass' — surveys ancient sources and modern scholarly assessments.",
    ],
  },
  {
    id: 'stradivarius-violin-acoustics',
    title: 'Stradivarius Violin Construction',
    category: 'phenomena',
    wikipedia: 'Stradivarius',
    era: 'Late 17th – early 18th century CE',
    location: { lat: 45.1347, lng: 10.0233, place: 'Cremona, Italy' },
    summary:
      'Violins made by Antonio Stradivari (1644–1737) are widely regarded as producing a distinctive tonal quality that has not been consistently replicated by modern luthiers despite centuries of effort. Approximately 650 Stradivarius instruments survive and have been subjected to extensive scientific analysis. Proposed explanations have included wood treatment, varnish chemistry, dendrochronology-linked wood density from the Little Ice Age, and geometric proportions.',
    unexplained:
      'Whether Stradivarius instruments are objectively acoustically superior to the finest modern instruments, and if so, what specific physical property accounts for the difference, has not been conclusively established. Blind listening tests have produced conflicting results regarding perceived superiority.',
    theories: [
      'Moderately supported: Wood from the Little Ice Age (1645–1715) grew more slowly, producing denser, more uniform spruce with different acoustic resonance properties unavailable today.',
      'Moderately supported: Chemical treatment of the wood with minerals (borax, alum, or copper salts) as wood preservative or varnish base altered cell structure in acoustically beneficial ways.',
      'Well-supported by blind tests: Some double-blind studies (Fritz et al., 2012, 2017) found experienced violinists could not reliably distinguish Stradivarius from fine modern instruments, suggesting the superiority may be partly a matter of cultural expectation.',
    ],
    unsolvedMeaning:
      "Likely a combination of material factors and cultural mythology — the acoustic superiority is contested by controlled experiments, but the specific material properties of Stradivari's construction have not been fully characterized.",
    sources: [
      "Fritz, C. et al. (2012). 'Soloist evaluations of six Old Italian and six new violins.' PNAS, 109(3), 760–763.",
      "Wikipedia: 'Stradivarius' — covers scientific analyses and the blind test controversy.",
    ],
  },
  {
    id: 'lycurgus-cup',
    title: 'Lycurgus Cup',
    category: 'phenomena',
    wikipedia: 'Lycurgus Cup',
    era: '4th century CE (Roman)',
    location: {
      lat: 51.5194,
      lng: -0.127,
      place: 'British Museum, London, UK (origin: Roman Empire)',
    },
    summary:
      'The Lycurgus Cup is a 4th-century CE Roman glass cage cup that appears jade green in reflected light but glows red when light passes through it. Analysis in 1990 revealed that the glass contains colloidal gold-silver alloy nanoparticles (approximately 70 nm diameter) dispersed throughout, creating the dichroic optical effect through plasmon resonance. It is the only fully intact example of this type of Roman dichroic glass.',
    unexplained:
      'How Roman craftsmen intentionally or accidentally achieved the precise nanoscale dispersion of gold-silver alloy particles throughout the glass matrix — and whether they understood the mechanism producing the colour-change effect — remains unknown. It is unclear whether this technique was widely known or represented a unique, unrepeated discovery.',
    theories: [
      'Well-supported: The nanoparticles were introduced accidentally through contamination of gold and silver scraps used as colorants, with the specific particle size achieved by controlled cooling — a lucky outcome rather than intentional nanotechnology.',
      'Moderately supported: Roman glassmakers had empirical knowledge that certain gold-silver mixtures produced colour-shifting glass, without understanding the underlying physics, and the technique was simply not widely transmitted.',
      'Speculative: The cup represents a unique commission for which a specialized formula was developed and deliberately kept secret within one workshop.',
    ],
    unsolvedMeaning:
      'Genuinely unresolved — while the physics is now understood, whether Romans produced this effect intentionally or accidentally, and why no comparable intact examples survive, remains an open question.',
    sources: [
      "Barber, D.J. & Freestone, I.C. (1990). 'An investigation of the origin of the colour of the Lycurgus Cup.' Archaeometry, 32(1), 33–45.",
      "Wikipedia: 'Lycurgus Cup' — details the scientific analysis and archaeological context.",
    ],
  },
  {
    id: 'chinese-south-pointing-chariot',
    title: 'South-Pointing Chariot',
    category: 'phenomena',
    wikipedia: 'South-pointing chariot',
    era: '~3rd century CE (China)',
    location: { lat: 34.3416, lng: 108.9398, place: "Chang'an (Xi'an), Shaanxi, China" },
    summary:
      'The south-pointing chariot was a mechanical device described in Chinese historical records that maintained a figure pointing south regardless of the direction the chariot turned, functioning as a non-magnetic mechanical compass. It is described in texts from the 3rd century CE onward, with detailed gear-train mechanisms documented in the Song Shu (5th century). No original example survives; the device was reconstructed in the 20th century from textual descriptions.',
    unexplained:
      'The precise design of the differential gear mechanism used in the original Han or Wei dynasty devices is not documented in surviving technical detail, and it is uncertain whether all historical accounts describe functional machines or partly legendary attributions. The degree of precision achievable without modern manufacturing tolerances remains debated.',
    theories: [
      'Well-supported: The device used a differential gear system (analogous to a modern car differential) to compensate for wheel rotation during turns, a mechanically sound solution that has been successfully reconstructed by modern engineers.',
      'Moderately supported: Some early accounts (pre-Song) may describe non-functional or ceremonial objects to which the directional-pointing property was attributed mythologically, with true differential-gear versions appearing only later.',
      'Speculative: The device was reinvented multiple times across Chinese history after the knowledge was lost, explaining discrepancies between early and late textual descriptions.',
    ],
    unsolvedMeaning:
      'Likely explainable mechanically — working reconstructions demonstrate feasibility — but the exact design history and whether the earliest claimed versions were functional is genuinely uncertain.',
    sources: [
      'Needham, J. (1965). Science and Civilisation in China, Vol. 4, Part 2. Cambridge University Press, pp. 286–303.',
      "Wikipedia: 'South-pointing chariot' — covers textual sources and reconstruction history.",
    ],
  },
  {
    id: 'great-pyramid-construction-technique',
    title: 'Great Pyramid Construction Technique',
    category: 'phenomena',
    wikipedia: 'Egyptian pyramid construction techniques',
    era: '~2560 BCE (Old Kingdom Egypt)',
    location: { lat: 29.9792, lng: 31.1342, place: 'Giza, Egypt' },
    summary:
      "The Great Pyramid of Giza contains approximately 2.3 million stone blocks averaging 2.5 tonnes each, with some granite blocks in the King's Chamber weighing up to 80 tonnes, assembled to sub-centimetre precision. No contemporary Egyptian text provides a complete description of construction method. Archaeological evidence including workers' villages, tool marks, graffiti, and the Wadi al-Jarf papyri (discovered 2013) confirms organized human labour, but the logistics of moving and placing the heaviest components remain debated.",
    unexplained:
      "The specific technique used to raise and position multi-tonne granite blocks to heights exceeding 40 metres — and the method for achieving the pyramid's documented precision — has not been established from direct evidence. Multiple ramp configurations have been proposed but none fully satisfies all engineering constraints.",
    theories: [
      "Well-supported: An external straight or zigzag ramp of mudbrick was used for lower courses, with the ramp lengthened as construction rose — consistent with ramp debris found at other pyramid sites, though the geometry for the Great Pyramid's height is problematic.",
      "Moderately supported: An internal spiral ramp running inside the pyramid's outer casing was used for upper courses — proposed by architect Jean-Pierre Houdin and supported by microgravimetry anomalies suggesting internal voids.",
      'Speculative and poorly supported: Water-lubricated sledges on prepared tracks account for horizontal movement (confirmed by a Dahshur wall painting), but vertical lifting remains the unresolved component with no confirmed mechanism.',
    ],
    unsolvedMeaning:
      'Likely explainable through human engineering but unproven — there is strong consensus that conventional labour and technology suffice in principle, but the specific ramp or lifting system used has not been confirmed archaeologically.',
    sources: [
      'Lehner, M. (1997). The Complete Pyramids. Thames & Hudson.',
      "Wikipedia: 'Egyptian pyramid construction techniques' — surveys archaeological evidence and engineering hypotheses.",
    ],
  },
  {
    id: 'havana-syndrome',
    title: 'Havana Syndrome',
    category: 'phenomena',
    wikipedia: 'Havana syndrome',
    era: '2016–present',
    location: {
      lat: 23.1136,
      lng: -82.3666,
      place: 'Havana, Cuba (initial reports; later worldwide)',
    },
    summary:
      'Beginning in 2016, US and Canadian diplomatic personnel in Havana, Cuba reported sudden onset of unexplained symptoms including perceived sounds, pressure sensations, headaches, and cognitive impairment. The phenomenon spread to US personnel in dozens of countries. A 2023 US intelligence community assessment concluded most cases were unlikely to have a foreign origin.',
    unexplained:
      'Whether a subset of cases — particularly early Havana incidents — represent a novel directed-energy or acoustic attack, a psychogenic phenomenon, or an environmental cause has not been definitively resolved for all reported events.',
    theories: [
      'Officially assessed as likely: Most cases result from pre-existing conditions, environmental factors, or psychogenic illness — per the 2023 US ODNI multi-agency assessment.',
      "Technically plausible but unproven: Directed microwave or radiofrequency energy ('Frey effect') could produce perceived sounds and neurological symptoms; some researchers argue early Havana cases match this profile.",
      'Investigated but not established: Cuban or Russian government involvement via a novel weapon — no physical device or confirmed perpetrator has been identified.',
    ],
    unsolvedMeaning:
      'The broad phenomenon is likely explained by psychogenic and environmental factors for most cases, but the original Havana cluster retains genuine uncertainty; the US government has not publicly ruled out a directed-energy cause for all early incidents.',
    sources: [
      "Office of the Director of National Intelligence (2023). 'IC Assessment of Anomalous Health Incidents.' Unclassified summary released March 2023.",
      "Swanson, R.L. et al. (2018). 'Neurological manifestations among US Government Personnel Reporting Directional Audible and Sensory Phenomena in Havana, Cuba.' JAMA, 319(11), 1125–1133.",
    ],
  },
  {
    id: 'numbers-stations',
    title: 'Numbers station',
    category: 'ciphers',
    wikipedia: 'Numbers station',
    era: 'Cold War–present',
    location: {
      lat: 52,
      lng: 13,
      place: 'Worldwide shortwave broadcasts; historically centered in Cold War Europe',
    },
    summary:
      'Numbers stations are shortwave radio broadcasts transmitting sequences of spoken numbers, letters, or Morse code in apparent cipher, documented since at least World War I and widely recorded throughout the Cold War. Western and Eastern Bloc intelligence agencies are broadly believed to have used them to communicate with field agents via one-time pad encryption. Many stations have no confirmed originating government.',
    unexplained:
      'The specific operators, intended recipients, and current operational status of many active or recently-active numbers stations remain unconfirmed by any government, and the full scope of their intelligence use is unknown.',
    theories: [
      'Well supported: Major intelligence agencies (CIA, KGB/FSB, MI6, Cuban DGI) operated or continue to operate numbers stations for agent communication — Cuban spy ring prosecutions and Lincolnshire Poacher attribution to GCHQ Akrotiri provide partial confirmation.',
      'Plausible: Some contemporary transmissions serve non-intelligence purposes such as military or commercial dead-drop communication for criminal networks.',
      'Minority view: Some unidentified stations may be hobbyist or experimental transmissions mimicking intelligence formats — possible for a small subset.',
    ],
    unsolvedMeaning:
      'Genuinely no complete public evidence either way for most stations; intelligence use is strongly inferred but only partially confirmed through open-source court records and one attributed station (Lincolnshire Poacher).',
    sources: [
      'Priyom.org — independent numbers station monitoring archive with logs and recordings.',
      'Spooks: The Unofficial Guide to Numbers Stations (2000). Enigma Control, compiled by Ary Boender and Simon Mason.',
    ],
  },
  {
    id: 'uvb-76-the-buzzer',
    title: 'UVB-76',
    category: 'phenomena',
    wikipedia: 'UVB-76',
    era: '1973–present',
    location: {
      lat: 56.4,
      lng: 37.1,
      place: 'Povarovo / Naro-Fominsk area, Russia (transmitter locations)',
    },
    summary:
      "UVB-76, nicknamed 'The Buzzer,' is a Russian shortwave radio station broadcasting on 4625 kHz that has emitted a repetitive buzzing tone nearly continuously since at least 1976, occasionally interrupted by voice messages in Russian military phonetic code. The station's purpose has never been officially acknowledged by the Russian government. Voice messages have included callsigns and number sequences consistent with military communication formats.",
    unexplained:
      "The operational purpose of the continuous buzzing tone — whether it serves as a channel marker, a dead man's switch for nuclear command authorization, or another function — has never been officially confirmed.",
    theories: [
      "Most plausible: The station is a Russian military communication or command-and-control channel, possibly serving as a ready-signal carrier or dead man's switch component — consistent with Soviet-era military radio doctrine.",
      'Technically supported: It functions as a propagation beacon or channel reservation to prevent other users from occupying the frequency.',
      "Speculative: The buzzer is part of the Russian nuclear command system ('Perimeter'/'Dead Hand') — plausible but no confirmed technical link has been published.",
    ],
    unsolvedMeaning:
      'Genuinely no public confirmation of purpose; Russian military communication use is strongly inferred from voice message content and operational patterns, but the specific role of the continuous tone is unconfirmed.',
    sources: [
      "Michaels, D. (2013). 'The Buzzer: Inside Russia's Most Mysterious Radio Station.' Popular Mechanics, October 2013.",
      'ENIGMA 2000 newsletter archives, UVB-76 frequency monitoring logs (1990s–2010s).',
    ],
  },
  {
    id: 'hvaldimir-spy-whale',
    title: 'Hvaldimir',
    category: 'events',
    wikipedia: 'Hvaldimir',
    era: '2019',
    location: { lat: 71.1, lng: 24, place: 'Ingøya island, Finnmark, Norway' },
    summary:
      "In April 2019, Norwegian fishermen near Ingøya discovered a beluga whale wearing a tight harness fitted with a camera mount labeled 'Equipment St. Petersburg.' The whale was unusually tame and appeared trained to approach humans. Norwegian and international analysts assessed the harness as consistent with Russian naval marine mammal program equipment. Russia denied involvement.",
    unexplained:
      'Whether the whale was part of an active Russian naval intelligence program, an escaped research animal, or served another military purpose has not been officially confirmed by any government.',
    theories: [
      "Broadly assessed as likely: The whale was trained by the Russian Navy's marine mammal program based in Murmansk — the harness design, 'St. Petersburg' label, and the whale's trained behavior are consistent with documented Russian naval cetacean programs.",
      "Officially denied: Russia has not acknowledged the program in relation to this animal, and the harness mount's specific purpose (surveillance, object retrieval) is unknown.",
      'Alternative: The whale escaped from a Russian civilian research or aquarium facility — considered less likely given the military-specification harness.',
    ],
    unsolvedMeaning:
      "Likely explained by Russian naval marine mammal training, but the specific mission, unit, and the animal's full operational history remain unconfirmed by any official source.",
    sources: [
      "Lyngøy, J. quoted in The Guardian (26 April 2019). 'Spy whale? Beluga with harness appears off Norway coast.'",
      'Sørensen, M.S. et al. (2019). Assessment report to Norwegian Directorate of Fisheries on the beluga whale found at Ingøya.',
    ],
  },
  {
    id: 'operation-highjump',
    title: 'Operation Highjump',
    category: 'events',
    wikipedia: 'Operation Highjump',
    era: '1946–1947',
    location: { lat: -75, lng: -45, place: 'Antarctic Peninsula and Ross Sea, Antarctica' },
    summary:
      "Operation Highjump was a large US Navy expedition to Antarctica in 1946–47 commanded by Rear Admiral Richard Byrd, involving 4,700 men and 13 ships to establish a research base and conduct aerial mapping. The expedition ended early after reportedly losing three aircraft and several crew members, with Byrd subsequently giving an interview to a Chilean newspaper suggesting Antarctica could be used as a base by a hostile power. The expedition's early termination and Byrd's comments have never been fully officially explained.",
    unexplained:
      "The specific operational reasons for the expedition's early termination and the precise circumstances of the aircraft losses have not been fully declassified, and Byrd's widely-reported but disputed post-expedition interview comments remain contextually unclear.",
    theories: [
      'Most supported: The expedition ended early due to weather, logistical challenges, and the onset of Antarctic winter — consistent with operational records and standard polar expedition constraints.',
      "Plausible: Byrd's 'hostile power' comments referenced Soviet strategic interest in Antarctica during the emerging Cold War, not a literal Antarctic threat.",
      'Conspiracy theories widely circulated: Claims of encounters with Nazi bases or UFOs are not supported by any credible primary documentation and are considered fabrications.',
    ],
    unsolvedMeaning:
      'Likely explained by conventional operational and Cold War political factors; persistent mystery narratives are largely myth. The aircraft losses and early return have mundane explanations consistent with polar aviation risks of the era.',
    sources: [
      'Rose, L.A. (2008). Explorer: The Life of Richard E. Byrd. University of Missouri Press.',
      'United States Navy (1947). Operation Highjump official reports, National Archives Record Group 313.',
    ],
  },
  {
    id: 'soviet-submarine-k129',
    title: 'Soviet submarine K-129',
    category: 'disappearances',
    wikipedia: 'Soviet submarine K-129 (1960)',
    era: '1968',
    location: { lat: 40.1, lng: -179.9, place: 'North Pacific Ocean, northwest of Hawaii' },
    summary:
      'Soviet Golf II-class ballistic missile submarine K-129 sank in the North Pacific in March 1968 under circumstances the Soviet Union never officially acknowledged. The CIA covertly raised part of the wreck in 1974 during Operation Azorian using the cover vessel Glomar Explorer. The cause of the sinking was never officially confirmed by either the US or Soviet/Russian governments.',
    unexplained:
      "The precise cause of K-129's sinking — whether an accidental internal explosion, crew error, or a collision — has not been officially established, and the full findings of the CIA's salvage operation remain classified.",
    theories: [
      "Assessed as most likely by independent analysts: An accidental onboard explosion, possibly from a ballistic missile fuel leak or torpedo malfunction, caused the sinking — consistent with the wreck's damage patterns.",
      'Claimed by some Soviet-era sources: A collision with the US submarine USS Swordfish was responsible — denied by the US Navy and not confirmed by physical evidence.',
      'Officially unconfirmed: CIA documents partially declassified under FOIA show the recovered section contained crew remains and cryptographic materials, but the cause-of-sinking findings were redacted.',
    ],
    unsolvedMeaning:
      'Likely explained by an internal mechanical or ordnance failure, but the definitive cause remains classified; this is a case of likely-explained but officially unconfirmed.',
    sources: [
      "Sewell, K. & Ellsworth, C. (2010). Red Star Rogue: The Untold Story of a Soviet Submarine's Nuclear Strike Attempt on the U.S. Threshold Editions. (Note: book's strike-attempt thesis is disputed.)",
      "Sherry, M. (2010). 'Project Azorian: The CIA's Declassified History of the Glomar Explorer.' Studies in Intelligence, 54(3), CIA Center for the Study of Intelligence.",
    ],
  },
  {
    id: 'tamam-shud-case',
    title: 'Tamam Shud case',
    category: 'disappearances',
    wikipedia: 'Tamam Shud case',
    era: '1948',
    location: {
      lat: -34.9196,
      lng: 138.5196,
      place: 'Somerton Beach, Adelaide, South Australia, Australia',
    },
    summary:
      "In December 1948, an unidentified man was found dead on Somerton Beach in Adelaide, with no identification and no clear cause of death. A hidden pocket in his trousers contained a scrap of paper torn from a rare edition of the Rubaiyat of Omar Khayyam with the words 'Tamam Shud' ('it is ended'). A copy of that same edition was later found with an indecipherable handwritten code and a phone number inside.",
    unexplained:
      'The identity of the man, the cause and manner of his death, and the meaning of the handwritten cipher found in the Rubaiyat copy have never been established despite decades of investigation.',
    theories: [
      'Widely investigated: The man was a foreign intelligence agent (possibly Soviet) killed or ordered to commit suicide — consistent with the Cold War context, the untraceable identity, and his apparent fitness, but no agency has claimed him.',
      "Proposed by researchers: The cipher is a personal code or mnemonic, not a tradecraft cipher, and the man's identity may have been concealed by family members for personal reasons — partial DNA genealogical work ongoing.",
      'Possible: The death was a suicide by untraceable poison, with the torn page as a personal message — pathologists found no definitive cause of death.',
    ],
    unsolvedMeaning:
      'Genuinely no confirmed evidence on identity, cause of death, or cipher meaning; a 2022 study proposed a DNA-derived family connection but formal identification has not been completed.',
    sources: [
      'Gerry Feltus (2010). The Unknown Man. Self-published. (Feltus was the lead South Australia Police detective on the case.)',
      "Henneberg, M. et al. (2022). 'Genealogical and forensic investigation of the Somerton Man.' Forensic Science International: Genetics Supplement Series.",
    ],
  },
  {
    id: 'thule-b52-crash-1968',
    title: '1968 Thule Air Base B-52 crash',
    category: 'events',
    wikipedia: '1968 Thule Air Base B-52 crash',
    era: '1968',
    location: { lat: 76.53, lng: -68.7, place: 'North Star Bay, Thule, Greenland' },
    summary:
      "On January 21, 1968, a US Air Force B-52 carrying four B28 nuclear bombs crashed and burned on the sea ice of North Star Bay near Thule Air Base, Greenland. Three of the four nuclear weapons' fissile secondaries were recovered; the fourth was never found. A joint US-Danish cleanup operation code-named Project Crested Ice recovered much of the wreckage and contaminated ice.",
    unexplained:
      'Whether the secondary of the fourth nuclear weapon was fully recovered, partially recovered, or remains on the seabed under North Star Bay has not been confirmed; a 1987 Greenlandic documentary alleged Danish workers were improperly exposed to radiation.',
    theories: [
      'US official position: All safety-significant nuclear weapon components were recovered, including from the fourth weapon — this is disputed by some analysts who note the recovery logs are incomplete.',
      'Supported by documentary evidence: Danish and Greenlandic cleanup workers received radiation exposures inadequately documented at the time; a 2000 Danish Institute for Clinical Epidemiology study confirmed elevated cancer risks in some workers.',
      'Partially unresolved: The exact resting place of all weapon fragments remains a matter of classified US DoD records not fully disclosed to Denmark despite diplomatic requests.',
    ],
    unsolvedMeaning:
      "Likely partially resolved regarding immediate nuclear safety, but the fate of the fourth weapon's fissile material and the full health consequences for cleanup workers remain genuinely uncertain due to incomplete declassification.",
    sources: [
      "Hansen, J.E. (2009). 'The Thule Accident: A Danish-American Nuclear Controversy.' Scandinavian Journal of History, 34(3), 348–368.",
      "Maydew, R.L. (1997). America's Lost H-Bomb! Palomares, Spain, 1966. Sunflower University Press (comparative case context).",
    ],
  },
  {
    id: 'baltic-sea-anomaly',
    title: 'Baltic Sea anomaly',
    category: 'phenomena',
    wikipedia: 'Baltic Sea anomaly',
    era: '2011',
    location: { lat: 59, lng: 19, place: 'Baltic Sea, between Sweden and Finland' },
    summary:
      'In 2011, Swedish treasure-hunting team Ocean X released sonar images of an unusual circular formation approximately 60 meters in diameter on the Baltic seabed at a depth of about 90 meters. The formation attracted significant media speculation. A subsequent dive in 2012 found that the structure was composed of layered rock.',
    unexplained:
      'The precise geological origin of the rounded formation and associated linear features remains undetermined, as no peer-reviewed geological study has been published.',
    theories: [
      "Most supported by divers' direct observation: The structure is a natural glacial formation, such as a glacial drop stone deposit, subglacial meltwater channel, or moraine feature — consistent with the Baltic's glacial history.",
      'Proposed by some geologists: The formation could be a natural rocky outcrop shaped by glacial action and erosion, a common feature of the Baltic seabed.',
      'Widely circulated but unsupported: Claims of extraterrestrial or ancient human-constructed origin have no evidentiary basis and are considered sensationalist interpretations of sonar artifacts.',
    ],
    unsolvedMeaning:
      "Possibly a myth in its popular framing; the 'anomaly' appears to be a natural geological feature, but the absence of peer-reviewed analysis leaves the specific formation mechanism undescribed.",
    sources: [
      'Ocean X Team dive reports (2012), publicly available via ocean-x.se.',
      'Sveriges Television (SVT) documentary footage and geological commentary, 2012.',
    ],
  },
  // ── Epidemics domain ──────────────────────────────────────────────────────
  {
    id: 'antonine-plague',
    title: 'The Antonine Plague',
    category: 'phenomena',
    wikipedia: 'Antonine Plague',
    era: 'Roman Empire, 165–180 AD',
    location: { lat: 41.9, lng: 12.5, place: 'Roman Empire (epicentre unknown), Rome' },
    summary:
      'A pandemic that struck the Roman Empire during the reigns of Antoninus Pius and Marcus Aurelius, killing an estimated 5–10 million people and devastating the legions. It was described in detail by the physician Galen yet its causative agent has never been definitively identified from the historical or archaeological record.',
    unexplained:
      "Was the Antonine Plague caused by smallpox, measles, or something else entirely? Galen's clinical descriptions match smallpox or measles symptoms but are not conclusive, and no ancient DNA has been recovered to resolve the question.",
    theories: [
      'Smallpox — MOST SUPPORTED: Galen describes pustules consistent with variola; smallpox was new to the Mediterranean world at the time.',
      'Measles — PLAUSIBLE: some scholars argue the clinical picture fits measles better; neither can be ruled out.',
      'A now-extinct pathogen — SPECULATIVE: cannot be confirmed or excluded without ancient pathogen DNA.',
    ],
    unsolvedMeaning:
      'Likely-explained-but-unproven: the Galen descriptions point toward smallpox or measles, but no confirmed ancient pathogen DNA has resolved the debate. The disease that may have tipped the Roman Empire into decline remains unidentified.',
    sources: [
      'Galen, "On the Differences of Fevers" and other works (Kühn edition)',
      'William McNeill, "Plagues and Peoples" (1976)',
      'English Wikipedia, "Antonine Plague"',
    ],
  },
  {
    id: 'plague-of-justinian',
    title: 'The Plague of Justinian',
    category: 'phenomena',
    wikipedia: 'Plague of Justinian',
    era: 'Byzantine Empire, 541–549 AD (first wave)',
    location: { lat: 30.06, lng: 31.25, place: 'Pelusium, Egypt (first recorded outbreak)' },
    summary:
      "The first recorded pandemic of bubonic plague, striking the Byzantine Empire under Justinian I and recurring in waves for two centuries. Ancient DNA work has confirmed Yersinia pestis as the cause and placed the pandemic's strain at a deep branch of the phylogenetic tree. Yet the geographic origin of the strain, the route of entry into the Mediterranean, and why the pandemic ended without eliminating Y. pestis remain open questions.",
    unexplained:
      'Where exactly did the Justinianic Y. pestis strain originate — central Asia, east Africa, or somewhere else — and by what route did it reach Egypt? Why did this lineage disappear from later plague records?',
    theories: [
      'Central Asian origin (via the Silk Road) — SUPPORTED BY PHYLOGENETICS: the Justinianic strain sits near the root of Y. pestis diversity, consistent with a central Asian reservoir.',
      'East African origin (via Red Sea trade) — PLAUSIBLE: first outbreak was in Egypt near the Red Sea port; consistent with Ethiopian/Kenyan rodent reservoirs.',
      'The lineage went extinct after 750 AD — SUPPORTED: no later medieval plague strains descend from it, suggesting the pandemic lineage died out.',
    ],
    unsolvedMeaning:
      'Broadly explained (Y. pestis confirmed by aDNA), only specific details open: the precise geographic origin, transmission route, and reasons for disappearance of this lineage are still debated.',
    sources: [
      'Wagner et al., "Yersinia pestis and the Plague of Justinian 541–543 AD," Lancet Infectious Diseases (2014)',
      'English Wikipedia, "Plague of Justinian"',
      'Procopius, "History of the Wars," Book 2 (contemporary account)',
    ],
  },
  {
    id: 'cocoliztli-epidemic',
    title: 'The Cocoliztli Epidemic',
    category: 'phenomena',
    wikipedia: 'Cocoliztli epidemics',
    era: 'New Spain (Mexico), 1545–1548 and 1576–1578',
    location: { lat: 19.43, lng: -99.13, place: 'Central Mexico (Valley of Mexico)' },
    summary:
      'The cocoliztli epidemics killed an estimated 5–15 million indigenous Mexicans — possibly the deadliest epidemics in human history as a proportion of the affected population. Unlike smallpox (which arrived with the conquistadors), cocoliztli was characterised by high fever, bleeding from multiple orifices, and rapid death, suggesting a different pathogen. Its cause was debated for over four centuries.',
    unexplained:
      'What exactly caused cocoliztli? A 2018 ancient DNA study proposed Salmonella enterica serovar Paratyphi C (enteric fever), but this identification is disputed and does not fully account for the haemorrhagic features described in contemporary sources.',
    theories: [
      'Salmonella Paratyphi C (enteric fever) — RECENTLY PROPOSED: Vågene et al. (2018) recovered Salmonella aDNA from cocoliztli skeletons, but critics note it cannot explain the haemorrhagic symptoms.',
      'A viral haemorrhagic fever (e.g. arenavirus) — OLDER HYPOTHESIS: the clinical description better fits viral haemorrhagic fever; no aDNA confirmation.',
      'Drought-stress co-factor — CONTRIBUTING FACTOR: epidemics peaked during severe droughts, suggesting nutritional collapse amplified mortality regardless of pathogen.',
    ],
    unsolvedMeaning:
      'Likely-explained-but-unproven: the Salmonella hypothesis is the strongest so far but is contested; the full cause of the most lethal recorded epidemic may not yet have been identified.',
    sources: [
      'Vågene et al., "Salmonella enterica genomes recovered from victims of a major 16th-century epidemic in Mexico," Nature Ecology & Evolution (2018)',
      'English Wikipedia, "Cocoliztli epidemic"',
      'Marr & Kiracofe, "Was the Huey Cocoliztli a haemorrhagic fever?", Medical History (2000)',
    ],
  },
  {
    id: '1918-flu-origin',
    title: 'The Geographic Origin of the 1918 Flu',
    category: 'phenomena',
    wikipedia: '1918 flu pandemic',
    era: 'Modern, 1918–1919',
    location: {
      lat: 39.1,
      lng: -94.6,
      place: 'Origin disputed — Kansas USA / northern France / China',
    },
    summary:
      'The 1918 influenza pandemic killed 50–100 million people worldwide — more than died in World War I. The virus (H1N1) has been reconstructed from permafrost and formalin-preserved samples, revealing it was an avian-adapted strain. Yet where its first human wave began remains unresolved: competing hypotheses point to Kansas (USA), northern China (via the Chinese Labour Corps), and northern France (Étaples or Étaples camp).',
    unexplained:
      'Where did the first wave of the 1918 pandemic begin, and where did the virus jump from birds (or an intermediate host) to humans? The three leading candidate sites each have documented early clusters but none has been confirmed as the true origin.',
    theories: [
      'Kansas (Camp Funston) USA — WIDELY CITED: first large documented outbreak in March 1918; but earlier cases are recorded elsewhere.',
      'Northern China / Chinese Labour Corps — ARGUED BY OXFORD AND HUMPHRIES: unusual respiratory illness in Shanxi Province in 1917–18 preceded the spring wave; Chinese workers transported to Europe could have carried it.',
      'Étaples, France — PROPOSED BY OXFORD ET AL.: a 1916 outbreak at a British military camp had compatible clinical features; histological slides survive but are inconclusive.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the virus genome has been sequenced but it cannot tell us where the first human infection occurred. Geographic origin remains an open historical and epidemiological question.',
    sources: [
      'Taubenberger & Morens, "1918 Influenza: the mother of all pandemics," Emerging Infectious Diseases (2006)',
      'English Wikipedia, "1918 flu pandemic" (origins section)',
      'Humphries, "Paths of Infection: The First World War and the Origins of the 1918 Influenza Pandemic," War in History (2014)',
    ],
  },
  {
    id: 'encephalitis-lethargica',
    title: 'Encephalitis Lethargica',
    category: 'phenomena',
    wikipedia: 'Encephalitis lethargica',
    era: 'Modern, 1915–1930 (epidemic phase)',
    location: {
      lat: 48.85,
      lng: 2.35,
      place: 'Europe (Vienna / Paris / London); pandemic spread worldwide',
    },
    summary:
      'Between 1915 and 1930 an epidemic of "sleeping sickness" (not the African tsetse-fly disease) swept the world, eventually affecting over a million people. Victims fell into a trance-like state, some sleeping for months; many survivors were left frozen in a Parkinson\'s-like condition for decades. The neurologist Oliver Sacks treated survivors in the 1960s and documented their awakening with L-DOPA. The cause has never been established.',
    unexplained:
      'What caused encephalitis lethargica? The epidemic coincided with the 1918 flu, raising suspicions of a viral cause, but no infectious agent has ever been consistently isolated from patients.',
    theories: [
      '1918 influenza virus (direct or post-infectious autoimmune) — POPULAR BUT UNCONFIRMED: temporal overlap is suggestive; studies have found neither flu RNA in brain tissue nor a consistent link.',
      'Streptococcal autoimmune mechanism — PROPOSED: a 2004 study found anti-basal-ganglia antibodies in modern patients with similar symptoms, suggesting a post-streptococcal autoimmune process.',
      'An unknown virus that has since disappeared — POSSIBLE: the epidemic ended abruptly around 1930 with no identified pathogen, consistent with extinction of a novel virus.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: no causative agent has ever been confirmed despite repeated attempts. The epidemic affected hundreds of thousands and then vanished, leaving its cause a complete mystery.',
    sources: [
      'Oliver Sacks, "Awakenings" (1973)',
      'English Wikipedia, "Encephalitis lethargica"',
      'Dale et al., "Encephalitis lethargica syndrome," Brain (2004)',
    ],
  },
  {
    id: 'nodding-disease',
    title: 'Nodding Disease',
    category: 'phenomena',
    wikipedia: 'Nodding disease',
    era: 'Modern, 1960s–present (epidemic from ~2010)',
    location: { lat: 3.86, lng: 32.5, place: 'South Sudan, Uganda, Tanzania (sub-Saharan Africa)' },
    summary:
      'Nodding disease is a catastrophic neurological disorder affecting children aged 5–15 in sub-Saharan Africa. Affected children experience repetitive head-nodding seizures triggered by food or cold, progressive neurological deterioration, stunted growth, and cognitive decline. An outbreak in northern Uganda and South Sudan in the 2000s–2010s affected thousands of children. The WHO and CDC investigated but the cause has never been established.',
    unexplained:
      'What causes nodding disease? The disorder correlates strongly with Onchocerca volvulus infection (river blindness), but the parasite has not been proven as a direct cause, and not all infected people develop the disease.',
    theories: [
      "Autoimmune response triggered by O. volvulus — LEADING HYPOTHESIS: antibodies against the parasite's protein leiomodin-1 cross-react with brain proteins; supported by some serology studies.",
      'Co-infection with another pathogen — POSSIBLE: the geographic overlap with onchocerciasis is imperfect; a viral co-factor has been suggested but not identified.',
      'Nutritional/toxin cause — CONSIDERED AND LARGELY EXCLUDED: extensive testing has not found a consistent dietary toxin, though malnutrition worsens outcomes.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the association with O. volvulus is strong but mechanism is unproven. A disease devastating thousands of African children remains without an established cause or cure.',
    sources: [
      'English Wikipedia, "Nodding disease"',
      'Idro et al., "Nodding syndrome," Lancet Neurology (2013)',
      'Johnson et al., "Nodding syndrome may be an autoimmune reaction," Science Translational Medicine (2017)',
    ],
  },
  {
    id: 'picardy-sweat',
    title: 'The Picardy Sweat',
    category: 'phenomena',
    wikipedia: 'Picardy sweat',
    era: 'Early Modern, 1718–1861',
    location: { lat: 49.9, lng: 2.3, place: 'Picardy region, northern France' },
    summary:
      'The Picardy Sweat (suette des Picards) was a febrile sweating illness that caused at least 196 epidemic outbreaks in northern France between 1718 and 1861, killing a significant proportion of those affected. It bore a strong superficial resemblance to the earlier English Sweating Sickness (1485–1551) but was geographically restricted, occurred in a different era, and may or may not have been the same disease. After 1861 it vanished entirely.',
    unexplained:
      'What caused the Picardy Sweat, and was it the same disease as the English Sweating Sickness? No pathogen has ever been identified, no preserved biological material exists from epidemic victims, and the disease has not recurred.',
    theories: [
      'Hantavirus pulmonary infection — MODERN HYPOTHESIS: the clinical profile (fever, sweating, pulmonary symptoms) resembles hantavirus; the Picardy region has rodent reservoirs. Some researchers consider this the most plausible cause.',
      'Same agent as the English Sweating Sickness — DEBATED: the clinical overlap is striking but geographic separation and timing argue against identity.',
      'Epidemic typhus or relapsing fever — HISTORICAL HYPOTHESES: both were rife in 18th-c. France; neither fully matches the clinical description.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: a disease that killed thousands across 143 years has no identified cause. Its sudden disappearance after 1861 is itself unexplained.',
    sources: [
      'English Wikipedia, "Picardy sweat"',
      'Dégallier et al., "Is the Picardy sweat related to hantavirus infections?", Epidemiology & Infection (2001)',
      'Taviner et al., "The English Sweating Sickness 1485–1551," Medical History (1998)',
    ],
  },
  {
    id: 'russian-sleep-epidemic-1920s',
    title: 'The Soviet Sleeping Sickness Epidemic',
    category: 'phenomena',
    wikipedia: 'Encephalitis lethargica',
    era: 'Modern, 1919–1927',
    location: { lat: 55.75, lng: 37.62, place: 'Soviet Russia / Eastern Europe' },
    summary:
      'While encephalitis lethargica swept the world after 1918, the Soviet Union and Eastern Europe experienced some of the most severe concentrations of cases, with survivors left in a catatonic state for years or decades. Soviet neurologists documented thousands of post-encephalitic Parkinsonism cases. The epidemic ended as suddenly in the East as in the West around 1927–1930, with no pathogen ever identified despite Soviet-era investigations.',
    unexplained:
      'Why did post-encephalitic Parkinsonism rates remain elevated in Soviet populations for decades after the acute epidemic ended — and what distinguished those who developed permanent neurological sequelae from those who recovered?',
    theories: [
      'Autoimmune sequelae of the 1918 flu — PROPOSED: anti-basal-ganglia antibodies persisting after the acute infection may explain long-term Parkinsonism, independent of ongoing infection.',
      'Nutritional deficiency worsening outcomes — POSSIBLE: wartime famine in Russia may have amplified neurological damage in susceptible individuals.',
      'Unknown co-infecting pathogen — UNCONFIRMED: Soviet investigations looked for a bacterial agent and found none; a viral co-factor was never ruled out.',
    ],
    unsolvedMeaning:
      'Genuinely no evidence either way: the cause of encephalitis lethargica itself remains unknown; why Soviet populations showed distinctive long-term sequelae patterns adds a further unresolved layer.',
    sources: [
      'English Wikipedia, "Encephalitis lethargica" (geographic distribution)',
      'Ravenholt & Foege, "1918 influenza, encephalitis lethargica, parkinsonism," Lancet (1982)',
    ],
  },
];

/**
 * Pick a deterministic "Mystery of the Day" so the same entry surfaces for all
 * visitors on a given date (and is reproducible), rather than re-randomising on
 * every render. Uses the day-of-year as a stable seed into the dataset.
 */
export function getMysteryOfTheDay(date = new Date()) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
  const dayOfYear = Math.floor(diff / 86_400_000);
  return MYSTERIES[dayOfYear % MYSTERIES.length];
}

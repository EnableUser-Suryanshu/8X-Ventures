/**
 * LP Day — traced from the Figma prototype's frame (node 320-55).
 *
 * Eight bands: the auditorium hero, the intro, the dark "why it exists" field
 * with its scrolling list, the programme grid, the gallery with a carousel per
 * edition, the quotes field, and the closing panel.
 *
 * The frame's copy, except where the client's own photographs say otherwise —
 * see `lpDayGallery` and `lpDayProgramme`, which name what actually happened
 * at each edition rather than describing a gathering in general.
 *
 * Every photograph on this page is now the client's, from the Drive folder
 * "LP Day highlights". The band backgrounds used to be the frame's image
 * fills — a stock auditorium, a stock semiconductor line, a stock arena —
 * and those were the last stock photographs on the page.
 */

export const lpDayHero = {
  eyebrow: "LP Day · An annual gathering for India's deep-tech builders",
  line1: "Where capital",
  line2: "meets conviction",
  body: "LP Day is 8X Ventures' annual gathering for India's deep-tech builders, investors, founders, mentors and ecosystem leaders",
  image: "/images/lpday/hero.jpg",
  imageAlt:
    "The full auditorium at ISRO's Space Applications Centre on the second day of DeepTech Industry Connect 2026.",
} as const;

export const lpDayIntro = {
  line1: "Operators. Investors.",
  line2: "Technologists.",
  sub1: "One room. One ecosystem.",
  sub2: "One conversation around India's deep-tech future.",
  body: "LP Day brings together the people backing, building and enabling the next generation of frontier companies from India.",
} as const;

export const lpDayWhy = {
  eyebrow: "Why LP Day exists",
  line1: "Deep-tech needs",
  line2: "more than capital",
  /** The frame lights the third and dims the rest — the same device as
   *  `/about`'s philosophy list, so it is built the same way. */
  items: [
    "Patient investors",
    "Technical mentors",
    "Industry access",
    "Policy awareness",
    "Commercial pathways",
    "Long-term conviction",
  ],
  activeIndex: 2,
  close: "LP Day is designed to bring these forces closer together.",
  image: "/images/lpday/why.jpg",
} as const;

export const lpDayProgramme = {
  eyebrow: "The Programme",
  line1: "What happens",
  line2: "at LP Day",
  /* Written from the client's photographs of the two editions rather than
     from the frame, which described a gathering in general. The count of
     stands is what the 2026 photographs show; there may have been more than
     the camera reached. */
  items: [
    {
      title: "Portfolio showcases",
      body: "Every company takes a stand. Ten of the twelve exhibited at IIT Gandhinagar in 2026, alongside other deep-tech teams and the host campus.",
    },
    {
      title: "Sessions and panels",
      body: "Investors and operators on stage — 2026 ran “Startups and the Disruption Conundrum” and “Understanding the Disruption Cycle”.",
    },
    {
      title: "Inside the research ecosystem",
      body: "Each edition is held in one: IIT Madras Research Park in 2025; in 2026, IIT Gandhinagar and ISRO's Space Applications Centre, where the delegation met at the centre and toured its Planetary Simulation & Immersive Visualization facility.",
    },
    {
      title: "Ecosystem exchange",
      body: "Mentors, operators, institutions and founders connect around real company-building needs",
    },
  ],
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  /**
   * A 20px-wide JPEG of the same photograph, inlined. It is what the strip
   * and the lightbox paint while the real file is still arriving — without
   * it the lightbox opens on an empty navy rectangle and stays there for as
   * long as a 1400px photograph takes to come down a cold connection, which
   * is the whole of the wait as far as a reader can tell. About 500 bytes
   * each, generated from the files in `public/images/lpday/`.
   */
  blur: string;
};

export type LpDayEdition = {
  year: string;
  body: string;
  images: readonly GalleryImage[];
};

export const lpDayGallery = {
  eyebrow: "Gallery & Highlights",
  line1: "Moments from",
  line2: "the 8X ecosystem",
  body: "Founders, investors, mentors and partners in conversation around India's frontier technology opportunity.",
  /* The client's own photography, from the Drive folder "LP Day highlights",
     eight frames an edition — the frame's order, 2026 first.

     Each edition has a name of its own on the standees in these photographs,
     and the standfirsts now carry it: the two are not the same event twice.
     2025 is the Annual Investors Meet, one day at IIT Madras Research Park;
     2026 is DeepTech Industry Connect, two days across IIT Gandhinagar and
     the ISRO Space Applications Centre, and it is told as the ISRO
     collaboration it was: the client's photographs of the SAC day lead,
     Chirag Gupta at the meeting table first, and the IIT Gandhinagar
     standee closes the set because it is the one frame naming both days.
     The SAC photographs came from the client directly and from the
     "LP Day highlights / 2026" folder on Drive. */
  editions: [
    {
      year: "2026",
      body: "DeepTech Industry Connect 2026, held with ISRO's Space Applications Centre in Ahmedabad. On 13 February Chirag Gupta led the 8X delegation at SAC alongside Hon'ble Shri Acharya Devvrat Ji, Governor of Gujarat and Maharashtra; the day before, ten portfolio companies exhibited at IIT Gandhinagar.",
      images: [
        { src: "/images/lpday/2026-1.jpg", alt: "Chirag Gupta, Managing Partner of 8X Ventures, at the meeting table in ISRO's Space Applications Centre, Ahmedabad, 13 February 2026.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACYQAAIBAgUDBQEAAAAAAAAAAAECAwAEBRETITESQVEVIjOBkbH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQISERMxQf/aAAwDAQACEQMRAD8ASt5DHKdRWX2MOPKnKp4ILdTCQh9lIOxNazFrC2a3Ms76aqp+NNzuCPvn9qN6lg8OHrZhZ5c31BGV4OeY38VmpLwqmOidwi67ZzKDn2BP8oqpazyRxdSYMDqEuxEyjMnvzRS8RrZ//9k=" },
        { src: "/images/lpday/2026-2.jpg", alt: "Chirag Gupta presenting a bouquet at SAC, under the screen welcoming Hon'ble Shri Acharya Devvrat Ji, Governor of Gujarat and Maharashtra.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQGBf/EACYQAAEDAwMCBwAAAAAAAAAAAAECAxEABAUTMUESIhQhMnGhwdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EAB0RAAEDBQEAAAAAAAAAAAAAAAABERICA0FCUVL/2gAMAwEAAhEDEQA/AMtxwOiErbJG/YVQPyncVYP2l027qMlDwgAg9w3kRtS1nkxZ2SMh4YdSLnSWGzAKCkymPbmkrrIoDDIbunnENoCbeUlBRHJg+Z4qo2SLLUvyy0TKlhRO505+6Kjm87kdNJVkWkGPTpEx8UUajgnf9H//2Q==" },
        { src: "/images/lpday/2026-3.jpg", alt: "The delegation with the Governor in SAC's Planetary Simulation & Immersive Visualization facility.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMGBAX/xAAmEAACAQMCBAcAAAAAAAAAAAABAgMABBETMQUGEnEhIkFCUWHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEgER/9oADAMBAAIRAxEAPwDWbDl4KjNYxqHcovlIywOCN6c3CeBxzCI2MGqVDBGGT0/O+1ShiuL4qyTsAq5wrY8fVu5NPv2u5p45hKEdIVibp9wG5PerWJOu2Z+X4wo0bVQRkDSB/KKjme6ViFbAH3RTpL//2Q==" },
        { src: "/images/lpday/2026-4.jpg", alt: "Chirag Gupta laying a floral tribute at the bust in the SAC foyer.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABBf/EACYQAAIABAUDBQAAAAAAAAAAAAECAAMEEQUSEyFRFCJhMUFicaH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEh/9oADAMBAAIRAxEAPwAlVPmaLoFKnLuwU2A58WtGU6pps+q0/JuVR92HI9NoJiOKTqKoVpLkTRlHcLqVAIII4N46dLT1ddKkNIpqfQBDK0rtCj37WPIBgXShayi2w+uhJtTqo+cs3P7FD63GMSoKjQPTOQL5pilifPj6EUKWqWoD48P/2Q==" },
        { src: "/images/lpday/2026-5.jpg", alt: "The SAC auditorium, Chirag Gupta in the front row beside the Governor's party.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAJBAAAgEEAgIBBQAAAAAAAAAAAQIDAAQRIQUxEhNBIlFxkaH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhESIf/aAAwDAQACEQMRAD8Azj7jkWspYraCN4fIhnwWxrdEWzCgySCUySrtSoHWPn+6pk3C3dpI0lhdlEXLhN5Jxpd6I/NXJ8hA3oncyOAqgiT6sksc9Y6IquumGJAJo39h9XtjUaKmXo/P2qo0ktxLNIVd/EMQuFHX7qpczvoqqP/Z" },
        { src: "/images/lpday/2026-6.jpg", alt: "Chirag Gupta lighting the ceremonial lamp at SAC, the Chandrayaan lander on the screen behind.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EACYQAAIBAwIFBQEAAAAAAAAAAAEDAgAEERIhExQxQYEFIkJRYaH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIRAxEAPwCTdCD+cuVMXJdvILlp+eScEA9qcXYLvXskzMOHGMZ520nT/elSUpZY2bJzWtsLiQVIE9Rgnb6IODTFw67sotYl0jiMMhktWeoz+HarTV6Ky5w1sPTebTJi2wXHURpkMkeaKim+upb8UxHYQ9oHgUU3IRn/2Q==" },
        { src: "/images/lpday/2026-7.jpg", alt: "The Governor received with a bouquet on arrival at the Space Applications Centre.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGAv/EACQQAAICAgEEAQUAAAAAAAAAAAECBBEAAwUSEyExBkJSYYGx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/8QAGhEAAgIDAAAAAAAAAAAAAAAAABEBIQISQf/aAAwDAQACEQMRAD8AXtxs6Qz6iQgVepj03Q+m69Xm48GfFj7L1KHFnZ5okAXX89ZS8VIMrnOZ7PnwiM3qyoIsZOP8jaVFWPt3Pr2Biu1gtVYIBFZmMbQ0KUiSZKDboj7SjfYC1fjDGScpp0jtRX3pqSgPPs0LP7wx1XSP/9k=" },
        { src: "/images/lpday/2026-8.jpg", alt: "The DeepTech Industry Connect standee: 12 February at IIT Gandhinagar, 13 February at ISRO SAC.", blur: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAPABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAJBAAAgIBAwIHAAAAAAAAAAAAAQIDEQAEEiEFEyMyQVFScYH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQX/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRBCH/2gAMAwEAAhEDEQA/AI6Poe1O++JUVko01+udOGKPeSEAK8Xd4vArWwibaxQgH2OapFqQ0BeewvnHy5y89Nx6BoSMEFnwIx+nDLS0j1RP1WGZ+UxYz//Z" },
      ],
    },
    {
      year: "2025",
      body: "8X Ventures' Annual Investors Meet, at IIT Madras Research Park on 7 March 2025: company showcases, laboratory visits across the park, and the investors, founders and mentors behind them in one room.",
      images: [
        { src: "/images/lpday/2025-1.jpg", alt: "The ceremonial lamp lit in front of the Annual Investors Meet screen.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBf/EACMQAAIBBAEDBQAAAAAAAAAAAAECAwAEERIGBSFRExQxQZH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERQWH/2gAMAwEAAhEDEQA/AND1rKPqnsorK3bVNnYKAQfAGO9XvkhaJY4kWNmIHZdfsZHxWPIYW5EWZyF3yHXIIyKvyG/VYITDISytjcDuv6KvI2TcUt2CstzLgjwDRStuQq1rFtop0GRqxorK3hP/2Q==" },
        { src: "/images/lpday/2025-2.jpg", alt: "A speaker opening the meet from the lectern, the 8X Ventures mark beside him.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBv/EACEQAAICAgEEAwAAAAAAAAAAAAECAxEABBIGEyFRMTKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AAl6Z2pXBba7nospus0J01xgQNGS63bA1y9eM6SOOMyOO0KU1d+cWdgsJNcfIAyRtI9PWXU1YoE+qLQ/csYE8RfzWWMjf//Z" },
        { src: "/images/lpday/2025-3.jpg", alt: "Delegates gathered in the Research Park atrium before the programme.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBv/EACAQAAICAgIDAQEAAAAAAAAAAAECAxEABCExBRIikVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESL/2gAMAwEAAhEDEQA/AMB22Soga2Z+LY8fwj8Pf7iY2W1k2nMlmvkc2erwut4O7cTsrtf0oqrxZ8LcrSSbDEE+xWuzXeMw0uTf0YnKGBbUkH3PPBrLOe2tYaohjlZi5j9jz1ZOWVyl/9k=" },
        { src: "/images/lpday/2025-4.jpg", alt: "The gathering photographed together in the atrium.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAD/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAURBCExBhIjQUJhkfD/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8ATa9LEnliYMACwDZAzxvW0V3hncpCsjnuIXHuxz9UM9i1E7kyuFX0APH4VsnTxTBjnZWAwDRDTkerR0DFZBn4qoEWCUZzq5BvsFO1VMxV/9k=" },
        { src: "/images/lpday/2025-5.jpg", alt: "Guests at a laboratory bench during the tour of the park.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAAFBv/EACUQAAICAgECBgMAAAAAAAAAAAECAxEABBIFFBMhIlFhcZGx8P/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//EABoRAAMAAwEAAAAAAAAAAAAAAAABAgMRISL/2gAMAwEAAhEDEQA/AG9xvgiMPGWJHqCih8nB7w2ezgkG54jTMVCRVQP3movTo49cQxyyCwVL351/X+cHudEgaERws8YDF1BNgE1f6zOc009IThpHM7Alik4yNT1ZByxk6bSuElaPkg4g8bJHucsfS8n/2Q==" },
        { src: "/images/lpday/2025-6.jpg", alt: "A student-built formula car shown to guests on the tour.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAmEAACAQMCBAcAAAAAAAAAAAABAgMABBESEwUhImEjMTJBUYHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQACAwEAAAAAAAAAAAAAAAAAIQERMVH/2gAMAwEAAhEDEQA/AE4pbgKBDEV1c+glcnFO2qXe6JbiJnCrq9YyPqpUlzJBcSRS4Y5ITHkPbHYYreFJpvGNwTsjJGMEdu9U8kEdAeOQW6pE26hVRldB5UVDuuKSvcO6lOrn1KSfj8oooV0//9k=" },
        { src: "/images/lpday/2025-7.jpg", alt: "The welcome walkway, Annual Investors Meet standees along it.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBv/EACUQAAIBAwMCBwAAAAAAAAAAAAECAwAEERITIQUGIiMkMTJBof/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAGBEBAQADAAAAAAAAAAAAAAAAAAEREmH/2gAMAwEAAhEDEQA/AJ96o6WbeMWcLvtgs5B+X3SLpEubCK5EEcLvcGM6M4IxmrXUW3LuMhcxqASpxyaXOm5YqI4gnqNQUYwPCKbQWnbhCLqQEkA/lFaJJhoXzDyo4x7UUa9WX//Z" },
        { src: "/images/lpday/2025-8.jpg", alt: "Guests in conversation between sessions.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EACQQAAICAgEDBAMAAAAAAAAAAAECAwQAIREFEhMUIjFBYXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAMAwEAAhEDEQA/ACt62ap5iitXXWpNa0Rxoaxhup1q47XBD9gPCEDn8YnNRswwGorjwlw54O9DMJunuZHsn5Z+4sD9/rHAtLFasIssNaMow15JiDhkePr12ogroImWL2glSSf7hjFX/9k=" },
      ],
    },
  ] as readonly LpDayEdition[],
} as const;

/**
 * The three the client publishes under "What our ecosystem says" in their
 * own website copy deck, verbatim. They replace three the frame invented,
 * which read plausibly and came from nowhere. 8X publish them unattributed,
 * so they are unattributed here too.
 */
export const lpDayQuotes = {
  heading: "What the ecosystem says.",
  items: [
    "8X is building a serious platform for India's deep-tech opportunity.",
    "They combine founder empathy with institutional discipline.",
    "Deep-tech needs long-term capital. 8X understands that.",
  ],
  image: "/images/lpday/quotes.jpg",
} as const;

export const lpDayCta = {
  line1: "India's deep-tech story",
  line2: "is being built now.",
  line3: "Be part of the room.",
  link: { label: "Connect With Us", href: "/contact" },
  /* The frame's own plate (node fill, 4096x2458): a dark crescent sweeping in
     from the left with the indigo opening out to the right. */
  image: "/images/lpday/cta-panel.jpg",
} as const;

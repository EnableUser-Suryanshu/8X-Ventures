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
    "A full auditorium at DeepTech Industry Connect 2026, the front rows turned towards the camera.",
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
      body: "Each edition is held in one: IIT Madras Research Park in 2025, IIT Gandhinagar and the ISRO Space Applications Centre in 2026.",
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
     the ISRO Space Applications Centre. */
  editions: [
    {
      year: "2026",
      body: "DeepTech Industry Connect 2026: 12 February at IIT Gandhinagar, 13 February at the ISRO Space Applications Centre. Ten of the twelve portfolio companies took a stand, alongside other deep-tech teams and the host campus.",
      images: [
        { src: "/images/lpday/2026-1.jpg", alt: "The DeepTech Industry Connect standee on the lawn, listing both days and both venues.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAlEAACAgECBAcAAAAAAAAAAAABAgMRABIhBAUTIzJBUVJhcYH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgT/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRAyH/2gAMAwEAAhEDEQA/AM5ZwnTlfVGqhkrY355fFGmo0otfm8TEDbCM6WKkA+hxiRzhoi0thfGPdvjwpufSWiQww2eyg/ThnUlK1bn6wzFlDjP/2Q==" },
        { src: "/images/lpday/2026-2.jpg", alt: "The Enerzi Microwave Systems stand.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAiEAACAQMEAwEBAAAAAAAAAAABAhEAAwQFEhMhIjFhMoH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwB9azEy8aNrMlzryXv+iobeXiYN4J+LjwANvvv5SPOu5psY3KGRRcAukNEmZjoz6qxqN7cqHD8m5JYSfUfafFT856KzKeSVMGEJFFZnUH1Fsxzbd0TqFFyI6FFbMF//2Q==" },
        { src: "/images/lpday/2026-3.jpg", alt: "A drone on the IIT Gandhinagar stand.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EAB8QAAIBBAMBAQAAAAAAAAAAAAECAwAEERIFITFhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCu/Jw3VrbtLDI6yscAJnBBx3Wd9borBI4lTwhtfflIcfdXgtIYmGhVmLOMN1noYzVnjojMhe4iUuH3BP59qkMgpMQbxQRosRYBR51RTi6qoA8FFTNv/9k=" },
        { src: "/images/lpday/2026-4.jpg", alt: "Guests examining hardware brought to one of the stands.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQb/xAAiEAACAQQCAgMBAAAAAAAAAAABAgMABBEhBTEScRVBYVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAIQIR/9oADAMBAAIRAxEAPwCWw5Fre7MLOZ9+AZydfm/VaEfKyyRqFZoi0eRkDIP967pPPcWtxfs9oBG7oJHJOF1nJxj1SoLC4AUJMCdqAw0COznurIWo+fk49mhnhMz58vMNojH0Ma9UVz3JC5ju2jn8VdNaPf7RQmyPPm3/2Q==" },
        { src: "/images/lpday/2026-5.jpg", alt: "The ceremonial lamp lit under the DeepTech Industry Connect backdrop.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBf/EACMQAAICAgIBBAMAAAAAAAAAAAECAwQAEQUSMRMhYaGB4fD/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABsRAQACAwEBAAAAAAAAAAAAAAEAAhIhkRNR/9oADAMBAAIRAxEAPwB7N0pykVTuSNAnwN7/AL7wpr0gEnoyKrI3XoWAb79sG1Vt2OQNlkj7oUKEfG8OzRsSyTSLGhLt2PgHeWbWXUJSobTs7HG2Gu0o52XTNvY/OWY+PNyrWESJGFB8E/vLHk/GDzHeR0n/2Q==" },
        { src: "/images/lpday/2026-6.jpg", alt: "The audience in the open-air conference area.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EACQQAAIBAwMEAwEAAAAAAAAAAAECAwAEERIhMQUTInEUQVLB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhES/9oADAMBAAIRAxEAPwBuzkjgkPbt0VHIkjIYk4H1mnGv1+VDcNDIoRSMY3OrcY94qVa3kXfSPUGOggMFIKFhsBWrbqSXVkbK5XyUY7nrjjfmtHCIVspnqsDMZEt5pUk8lYJsRx/KKVhlEUQQ6tvzIwFFHItP/9k=" },
        { src: "/images/lpday/2026-7.jpg", alt: "A session on the disruption cycle, the slide up behind the panel.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFAwT/xAAlEAACAQMDAwUBAAAAAAAAAAABAgMABBEFEkETITEVIlGRscH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABsRAQACAgMAAAAAAAAAAAAAAAEAAxEhEkFR/9oADAMBAAIRAxEAPwCZJq00puThQtwcsMcAnH7WPqEq26xdOPYO4YoN33VF7GzjlO62kVdgAVZefmmgtdNE8PR6zShh7ZMEN5znikcWNrsDKThR0ZcyTrG3Ktgfyil1iES6lKxfb4AXHgADtRT0dSG/Z//Z" },
        { src: "/images/lpday/2026-8.jpg", alt: "Delegates talking between the stands.", blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EACMQAAIBAwQBBQAAAAAAAAAAAAECAwAEEQUSIUETFUNRgfD/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAZEQACAwEAAAAAAAAAAAAAAAAAARESITH/2gAMAwEAAhEDEQA/AKl/NdG2a6WNGi25Cbctx3mlWd9biC49t/H5Nw6yuRj4pF9etJNHp4UKikMhU4yNp4P3WS2tFt1EBBHk4Yg/sVtVJWwu6VeifToWZ2LAbSXOSSO80VP9OhWONRNOgC8BXx3mingVw//Z" },
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

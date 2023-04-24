interface ResearchProject {
    title: string   
    description: string
    month: string
    year?: number
    href?: string
    doi?: string
    preview?: string
    coauthor?: string
    journal?: string
    abstract: string
  }
  
  const secrets: ResearchProject[] = [
    {
      title: "Analysis of the Ebola fractional-order model with Caputo-Fabrizio derivative",
      description: "In communication- Songklanakarin Journal of Science and Technology",
      month: "September",
      coauthor: "Nita Shah",
      year: 2022,
      href: "",
      preview: "",
      abstract: "",
    },
    {
      title: "A fractional-order SVIR-model with two infection classes for COVID-19 in India",
      description: "Book- River Publishers",
      month: "January",
      coauthor: "Nita Shah, Ekta Jayswal",
      href: "https://doi.org/",
      preview: "/images/secrets/tailwindcss-snippets.png",
      abstract: "$R_0$"
    },
  ]
  
  export default secrets
  
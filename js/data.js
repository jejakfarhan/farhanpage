/*
 * Portfolio content is kept here so it can be updated without editing HTML.
 * For each project, replace the `url` value with a real public project URL when available.
 * Until then, the detail panel offers an email link to discuss/request the project brief.
 */
window.portfolioData = {
  projects: [
    {
      id: "symbio-plasma",
      number: "01",
      type: "Research concept · Energy systems",
      title: "Symbio-Plasma Refinery",
      short: "An integrated concept exploring flare-gas treatment and methane conversion pathways for hydrogen and solid-carbon production.",
      description: "Symbio-Plasma Refinery explores the integration of biological sour-gas treatment — through a bioscrubber or photobioreactor pathway — with non-thermal plasma methane pyrolysis. The concept was developed in the context of flare-gas utilization and energy-system decarbonization, and advanced to the semifinal stage of GECO 2026.",
      featureLabel: "KEY INSIGHTS",
      features: [
        "Connects sour-gas conditioning with a downstream methane-conversion concept.",
        "Explores hydrogen production alongside solid-carbon generation through non-thermal plasma methane pyrolysis.",
        "Uses mass-balance reasoning and techno-economic considerations to examine the concept's feasibility and sensitivities."
      ],
      tags: ["Flare gas", "Bioscrubber / PBR", "Non-thermal plasma", "Hydrogen", "GECO 2026"],
      visual: "visual-flare",
      visualLabel: "Oilfield at sunset",
      status: "GECO 2026 · Semifinalist",
      url: "",
      linkLabel: "Request research brief"
    },
    {
      id: "parqirr",
      number: "02",
      type: "Python project · Programming",
      title: "ParQirr | Simple Parking Management System",
      short: "A command-line prototype for managing vehicle entry, exit, parking capacity, and daily parking records.",
      description: "Developed as an introductory programming project during the first semester, ParQirr simulates a parking management workflow for an ITB Multicampus Jatinangor setting. The program uses access-code validation and list-based records to track vehicles entering and leaving a limited-capacity parking area, display currently parked vehicles, show the day's entry history, and estimate parking fees based on vehicle type and parking duration.",
      featureLabel: "KEY FEATURES",
      features: [
        "Validates parking entry through a predefined access-code list.",
        "Tracks vehicle occupancy within a 25-slot parking capacity using list-based data structures.",
        "Displays currently parked vehicles and the day's vehicle-entry history.",
        "Calculates estimated parking fees for motorcycles and cars based on parking duration."
      ],
      tags: ["Python", "Command-line interface", "List data structures", "Conditional logic", "Algorithm design"],
      visual: "visual-parking",
      visualLabel: "Parking management prototype",
      status: "2024 / 2025",
      url: "https://github.com/jejakfarhan/ParQir",
      linkLabel: "View source code"
    },
    {
      id: "terras-core",
      number: "03",
      type: "Python project · Mining systems",
      title: "Terra's Core | Underground Mining Simulation",
      short: "A command-line simulation for checking underground mining conditions and worker readiness before site entry.",
      description: "Terra's Core is a Python command-line prototype inspired by underground mining operations and mine-environment considerations. It simulates temperature, humidity, and pressure conditions, allows users to adjust these parameters against predefined operating ranges, and guides workers through login and readiness checks before entering the simulated area. It also provides a menu for selecting simulated emergency-response scenarios.",
      featureLabel: "KEY FEATURES",
      features: [
        "Provides a basic username-and-password login flow.",
        "Simulates temperature, humidity, and pressure values for an underground mining environment.",
        "Allows users to adjust environmental parameters until the programmed stability conditions are met.",
        "Checks equipment, awareness, and psychological readiness, with a simulated emergency-response menu."
      ],
      tags: ["Python", "Command-line interface", "Environmental simulation", "Safety workflow", "Conditional logic"],
      visual: "visual-mining",
      visualLabel: "Underground mining environment",
      status: "Python · CLI",
      url: "https://github.com/jejakfarhan/Terra-s-Core",
      linkLabel: "View source code"
    },
    {
      id: "pvt-calculator",
      number: "04",
      type: "Python project · Reservoir engineering",
      title: "PVT Calculator | Black-Oil Fluid Properties",
      short: "A desktop application for calculating and visualizing oil, gas, and brine properties across reservoir pressure conditions.",
      description: "Developed as a team-based final project for TM2202: Fluida Reservoir Praktikum, PVT Calculator is a Python desktop application built with Tkinter. It calculates black-oil reservoir fluid properties using selectable empirical correlations, presents single-pressure results and a 31-point pressure table, visualizes 15 pressure-dependent properties, and exports calculation results to an Excel workbook.",
      featureLabel: "KEY FEATURES & INSIGHTS",
      features: [
        "Calculates oil, gas, and brine properties, including formation volume factors, solution ratios, density, viscosity, and compressibility.",
        "Provides selectable empirical correlations for key PVT calculations, including Standing, Vasquez-Beggs, Glaso, and gas-property methods.",
        "Generates a 31-point PVT table and 15 pressure-versus-property charts, with a bubble-point reference.",
        "Exports a Summary, PVT Table, and Graph Data to an .xlsx workbook.",
        "The academic prototype requires further validation; the project report specifically identifies undersaturated oil-viscosity results for review."
      ],
      tags: ["Python", "Tkinter", "Black-oil PVT", "Reservoir fluid properties", "Empirical correlations", "Excel export"],
      visual: "visual-pvt",
      visualLabel: "PVT pressure-property charts",
      status: "TM2202 · 2026",
      url: "https://github.com/jejakfarhan/PVTCalculator",
      linkLabel: "View source code"
    }
  ]
};

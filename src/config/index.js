module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Konstantin Münster Portfolio",
    siteShortTitle: "km.", // Used as logo text in header, footer, and splash screen
    siteDescription: "Hi there! I'm Konstantin Münster, a product manager and freelance web developer based in Hamburg.",
    siteUrl: "https://konstantin.digital",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    socialMedia: [
        {
            name: "Xing",
            url: "https://www.xing.com/profile/Konstantin_Muenster"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/konstantin-muenster/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@konstantin.muenster"
        },
        {
            name: "Github",
            url: "https://github.com/konstantinmuenster"
        },
        // {
        //     name: "Behance",
        //     url: "https://www.behance.net/konstanmnster"
        // },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}
module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Konstantin Münster Portfolio",
    siteShortTitle: "km.", // Used as logo text in header and footer
    siteDescription: "Hi, I am Konstantin Münster - Product Manager and Freelance Web Developer - Based in Hamburg.",
    siteUrl: "https://konstantin.digital",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster&api_key=51t0yukvezbsj6vz5h46icya39agdbxw1snykm3v",
    
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
import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Gamehoster Docs",
	description: "Official Gamehoster documentation and tutorials",

	locales: {
		en: {
			label: "English",
			lang: "en-US",
			link: "/en/",
			title: "Gamehoster Docs",
			description: "Official Gamehoster documentation and tutorials",

			themeConfig: {
				nav: [
					{ text: "Home", link: "/en/" },
					{ text: "Getting Started", link: "/en/getting-started/" },
					{ text: "Minecraft", link: "/en/minecraft/" },
					{ text: "Server Management", link: "/en/server-management/" },
					{ text: "Networking", link: "/en/networking/" },
					{ text: "Troubleshooting", link: "/en/troubleshooting/" },
				],

				sidebar: [
					{
						text: "Getting Started",
						items: [
							{ text: "Overview", link: "/en/getting-started/" },
							{
								text: "Accessing Your Server",
								link: "/en/getting-started/accessing-server",
							},
							{
								text: "First Startup",
								link: "/en/getting-started/first-startup",
							},
						],
					},
					{
						text: "Minecraft",
						items: [
							{ text: "Overview", link: "/en/minecraft/" },
							{ text: "Installing Plugins", link: "/en/minecraft/plugins" },
							{
								text: "Server Properties",
								link: "/en/minecraft/server-properties",
							},
						],
					},
					{
						text: "Server Management",
						items: [
							{ text: "Overview", link: "/en/server-management/" },
							{
								text: "File Manager",
								link: "/en/server-management/file-manager",
							},
							{ text: "Backups", link: "/en/server-management/backups" },
							{ text: "SFTP", link: "/en/server-management/sftp" },
						],
					},
					{
						text: "Networking",
						items: [
							{ text: "Overview", link: "/en/networking/" },
							{
								text: "Connecting a Domain",
								link: "/en/networking/domains",
							},
						],
					},
					{
						text: "Troubleshooting",
						items: [
							{ text: "Overview", link: "/en/troubleshooting/" },
							{
								text: "Server Not Starting",
								link: "/en/troubleshooting/server-not-starting",
							},
						],
					},
				],

				outline: { label: "On this page" },
				docFooter: {
					prev: "Previous page",
					next: "Next page",
				},
				returnToTopLabel: "Return to top",
				sidebarMenuLabel: "Menu",
			},
		},

		fi: {
			label: "Suomi",
			lang: "fi-FI",
			link: "/fi/",
			title: "Gamehoster Ohjeet",
			description: "Gamehosterin viralliset ohjeet ja oppaat",

			themeConfig: {
				nav: [
					{ text: "Etusivu", link: "/fi/" },
					{ text: "Aloittaminen", link: "/fi/getting-started/" },
					{ text: "Minecraft", link: "/fi/minecraft/" },
					{ text: "Palvelimen hallinta", link: "/fi/server-management/" },
					{ text: "Verkkoasetukset", link: "/fi/networking/" },
					{ text: "Vianmääritys", link: "/fi/troubleshooting/" },
				],

				sidebar: [
					{
						text: "Aloittaminen",
						items: [
							{ text: "Yleiskatsaus", link: "/fi/getting-started/" },
							{
								text: "Palvelimelle kirjautuminen",
								link: "/fi/getting-started/accessing-server",
							},
							{
								text: "Ensimmäinen käynnistys",
								link: "/fi/getting-started/first-startup",
							},
						],
					},
					{
						text: "Minecraft",
						items: [
							{ text: "Yleiskatsaus", link: "/fi/minecraft/" },
							{
								text: "Lisäosien asentaminen",
								link: "/fi/minecraft/plugins",
							},
							{
								text: "Palvelimen asetukset",
								link: "/fi/minecraft/server-properties",
							},
						],
					},
					{
						text: "Palvelimen hallinta",
						items: [
							{ text: "Yleiskatsaus", link: "/fi/server-management/" },
							{
								text: "Tiedostonhallinta",
								link: "/fi/server-management/file-manager",
							},
							{
								text: "Varmuuskopiot",
								link: "/fi/server-management/backups",
							},
							{ text: "SFTP", link: "/fi/server-management/sftp" },
						],
					},
					{
						text: "Verkkoasetukset",
						items: [
							{ text: "Yleiskatsaus", link: "/fi/networking/" },
							{
								text: "Verkkotunnuksen yhdistäminen",
								link: "/fi/networking/domains",
							},
						],
					},
					{
						text: "Vianmääritys",
						items: [
							{ text: "Yleiskatsaus", link: "/fi/troubleshooting/" },
							{
								text: "Palvelin ei käynnisty",
								link: "/fi/troubleshooting/server-not-starting",
							},
						],
					},
				],

				outline: { label: "Tällä sivulla" },
				docFooter: {
					prev: "Edellinen sivu",
					next: "Seuraava sivu",
				},
				returnToTopLabel: "Takaisin ylös",
				sidebarMenuLabel: "Valikko",
			},
		},
	},

	themeConfig: {
		siteTitle: "Gamehoster Docs",

		search: {
			provider: "local",
			options: {
				locales: {
					fi: {
						translations: {
							button: {
								buttonText: "Hae",
								buttonAriaLabel: "Hae dokumentaatiosta",
							},
							modal: {
								noResultsText: "Ei hakutuloksia",
								resetButtonTitle: "Tyhjennä haku",
								footer: {
									selectText: "Valitse",
									navigateText: "Siirry",
								},
							},
						},
					},
				},
			},
		},

		footer: {
			message: "Gamehoster Documentation",
			copyright: "Copyright © 2026 Gamehoster",
		},
	},
});

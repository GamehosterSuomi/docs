import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Gamehoster Docs",
	description: "Official Gamehoster documentation and tutorials",
	lang: "en-US",

	themeConfig: {
		siteTitle: "Gamehoster Docs",

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Getting Started", link: "/getting-started/" },
			{ text: "Minecraft", link: "/minecraft/" },
			{ text: "Server Management", link: "/server-management/" },
			{ text: "Networking", link: "/networking/" },
			{ text: "Troubleshooting", link: "/troubleshooting/" },
		],

		sidebar: [
			{
				text: "Getting Started",
				items: [
					{ text: "Overview", link: "/getting-started/" },
					{
						text: "Accessing Your Server",
						link: "/getting-started/accessing-server",
					},
					{ text: "First Startup", link: "/getting-started/first-startup" },
				],
			},
			{
				text: "Minecraft",
				items: [
					{ text: "Overview", link: "/minecraft/" },
					{ text: "Installing Plugins", link: "/minecraft/plugins" },
					{ text: "Installing Mods", link: "/minecraft/mods" },
					{ text: "Server Properties", link: "/minecraft/server-properties" },
				],
			},
			{
				text: "Server Management",
				items: [
					{ text: "Overview", link: "/server-management/" },
					{ text: "File Manager", link: "/server-management/file-manager" },
					{ text: "Backups", link: "/server-management/backups" },
					{ text: "SFTP", link: "/server-management/sftp" },
				],
			},
			{
				text: "Networking",
				items: [
					{ text: "Overview", link: "/networking/" },
					{ text: "Connecting a Domain", link: "/networking/domains" },
				],
			},
			{
				text: "Troubleshooting",
				items: [
					{ text: "Overview", link: "/troubleshooting/" },
					{
						text: "Server Not Starting",
						link: "/troubleshooting/server-not-starting",
					},
				],
			},
		],

		search: {
			provider: "local",
		},

		footer: {
			message: "Gamehoster Documentation",
			copyright: "Copyright © 2026 Gamehoster",
		},
	},
});

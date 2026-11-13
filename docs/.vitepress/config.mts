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
  {
    "text": "Home",
    "link": "/en/"
  },
  {
    "text": "Minecraft",
    "link": "/en/minecraft/"
  },
  {
    "text": "Game servers",
    "link": "/en/games/"
  },
  {
    "text": "VPS",
    "link": "/en/vps/"
  },
  {
    "text": "Web hosting",
    "link": "/en/webhosting/"
  }
],

				sidebar: [
  {
    "text": "Minecraft",
    "collapsed": true,
    "items": [
      {
        "text": "Minecraft Server Guides",
        "link": "/en/minecraft/"
      },
      {
        "text": "A plugin does not work",
        "link": "/en/minecraft/plugin-troubleshooting"
      },
      {
        "text": "Adding a server icon",
        "link": "/en/minecraft/server-icon"
      },
      {
        "text": "Cannot connect to a Minecraft server",
        "link": "/en/troubleshooting/connection-issues"
      },
      {
        "text": "Changing game rules",
        "link": "/en/minecraft/game-rules"
      },
      {
        "text": "Changing your Minecraft server version",
        "link": "/en/minecraft/version-change"
      },
      {
        "text": "Choosing Minecraft server software",
        "link": "/en/minecraft/server-software"
      },
      {
        "text": "Enabling command blocks",
        "link": "/en/minecraft/command-blocks"
      },
      {
        "text": "Installing a modpack",
        "link": "/en/minecraft/modpacks"
      },
      {
        "text": "Installing Minecraft mods",
        "link": "/en/minecraft/mods"
      },
      {
        "text": "Installing Minecraft Plugins",
        "link": "/en/minecraft/plugins"
      },
      {
        "text": "Investigating Minecraft logs",
        "link": "/en/minecraft/logs"
      },
      {
        "text": "Java and Bedrock players on one server",
        "link": "/en/minecraft/java-bedrock"
      },
      {
        "text": "Kicking and banning players",
        "link": "/en/minecraft/bans"
      },
      {
        "text": "Managing permissions with LuckPerms",
        "link": "/en/minecraft/luckperms"
      },
      {
        "text": "Minecraft crashes during startup",
        "link": "/en/troubleshooting/minecraft-crash"
      },
      {
        "text": "Minecraft Java Edition datapacks",
        "link": "/en/minecraft/datapacks"
      },
      {
        "text": "Minecraft Java Edition SRV record",
        "link": "/en/networking/minecraft-srv"
      },
      {
        "text": "Minecraft player allowlist",
        "link": "/en/minecraft/allowlist"
      },
      {
        "text": "Minecraft player permissions and operators",
        "link": "/en/minecraft/operators"
      },
      {
        "text": "Minecraft says the server is full",
        "link": "/en/troubleshooting/server-full"
      },
      {
        "text": "Minecraft Server Properties",
        "link": "/en/minecraft/server-properties"
      },
      {
        "text": "Moving a Minecraft world to the server",
        "link": "/en/minecraft/worlds"
      },
      {
        "text": "Offering a resource pack to players",
        "link": "/en/minecraft/resource-pack"
      },
      {
        "text": "Resetting the Nether",
        "link": "/en/minecraft/reset-nether"
      },
      {
        "text": "Restoring one player's data",
        "link": "/en/minecraft/player-data-restore"
      },
      {
        "text": "Setting a new world seed",
        "link": "/en/minecraft/world-seed"
      },
      {
        "text": "Setting a world border",
        "link": "/en/minecraft/world-border"
      },
      {
        "text": "Setting world spawn",
        "link": "/en/minecraft/world-spawn"
      },
      {
        "text": "Troubleshooting Minecraft server performance",
        "link": "/en/minecraft/performance"
      },
      {
        "text": "Updating a Minecraft plugin",
        "link": "/en/minecraft/plugin-updates"
      },
      {
        "text": "Minecraft tools",
        "collapsed": true,
        "items": [
          {
            "text": "Gamehoster Minecraft tools",
            "link": "/en/tools/"
          },
          {
            "text": "Circle and sphere generators",
            "link": "/en/tools/building"
          },
          {
            "text": "Color codes tool",
            "link": "/en/tools/color-codes"
          },
          {
            "text": "Coordinate, tick and beacon calculators",
            "link": "/en/tools/calculators"
          },
          {
            "text": "Crafting recipe editor",
            "link": "/en/tools/crafting"
          },
          {
            "text": "Minecraft ping test",
            "link": "/en/tools/ping-test"
          },
          {
            "text": "Minecraft server status checker",
            "link": "/en/tools/server-status"
          },
          {
            "text": "MOTD editor",
            "link": "/en/tools/motd"
          },
          {
            "text": "Player UUID converter",
            "link": "/en/tools/uuid"
          },
          {
            "text": "Server cost calculator",
            "link": "/en/tools/cost-calculator"
          },
          {
            "text": "Server icon converter",
            "link": "/en/tools/server-icon"
          },
          {
            "text": "Skins and pixel text",
            "link": "/en/tools/skin-font"
          }
        ]
      }
    ]
  },
  {
    "text": "Game servers",
    "collapsed": true,
    "items": [
      {
        "text": "Getting started with game servers",
        "link": "/en/games/"
      },
      {
        "text": "Getting started with your game server",
        "link": "/en/getting-started/"
      },
      {
        "text": "Networking",
        "link": "/en/networking/"
      },
      {
        "text": "Server management",
        "link": "/en/server-management/"
      },
      {
        "text": "",
        "link": "/en/getting-started/accessing-server"
      },
      {
        "text": "Checking DNS records",
        "link": "/en/networking/dns-check"
      },
      {
        "text": "Checking startup settings",
        "link": "/en/server-management/startup-settings"
      },
      {
        "text": "Choosing a schedule time",
        "link": "/en/server-management/schedule-cron"
      },
      {
        "text": "Connecting a domain to a game server",
        "link": "/en/networking/domains"
      },
      {
        "text": "Connecting with SFTP",
        "link": "/en/server-management/sftp"
      },
      {
        "text": "Editing configuration files safely",
        "link": "/en/server-management/configuration-files"
      },
      {
        "text": "Game server databases",
        "link": "/en/server-management/databases"
      },
      {
        "text": "Investigating memory errors",
        "link": "/en/troubleshooting/memory-errors"
      },
      {
        "text": "Keeping a backup on your computer",
        "link": "/en/server-management/backup-download"
      },
      {
        "text": "Monitoring resource usage",
        "link": "/en/server-management/resource-usage"
      },
      {
        "text": "Planning a backup restore",
        "link": "/en/server-management/restore-planning"
      },
      {
        "text": "Restarting a server safely",
        "link": "/en/server-management/safe-restart"
      },
      {
        "text": "Reviewing server activity",
        "link": "/en/server-management/activity"
      },
      {
        "text": "Scheduled tasks",
        "link": "/en/server-management/schedules"
      },
      {
        "text": "Securing your game panel account",
        "link": "/en/server-management/account-security"
      },
      {
        "text": "Server addresses and ports",
        "link": "/en/server-management/network-allocations"
      },
      {
        "text": "Server backups",
        "link": "/en/server-management/backups"
      },
      {
        "text": "Server disk space is low",
        "link": "/en/troubleshooting/disk-full"
      },
      {
        "text": "Server not starting",
        "link": "/en/troubleshooting/server-not-starting"
      },
      {
        "text": "SFTP connection problems",
        "link": "/en/troubleshooting/sftp-connection"
      },
      {
        "text": "Starting Your Server",
        "link": "/en/getting-started/first-startup"
      },
      {
        "text": "Subusers and permissions",
        "link": "/en/server-management/subusers"
      },
      {
        "text": "Transferring large files",
        "link": "/en/server-management/file-transfers"
      },
      {
        "text": "Using the console and commands",
        "link": "/en/server-management/console"
      },
      {
        "text": "Using the file manager",
        "link": "/en/server-management/file-manager"
      },
      {
        "text": "Writing a useful support request",
        "link": "/en/troubleshooting/support-request"
      },
      {
        "text": "FX / FiveM",
        "collapsed": true,
        "items": [
          {
            "text": "Getting started with an FX server",
            "link": "/en/games/fivem/"
          }
        ]
      },
      {
        "text": "Valheim",
        "collapsed": true,
        "items": [
          {
            "text": "Getting started with a Valheim server",
            "link": "/en/games/valheim/"
          },
          {
            "text": "Backing up a Valheim world",
            "link": "/en/games/valheim/backups"
          },
          {
            "text": "Connecting to a Valheim server",
            "link": "/en/games/valheim/connecting"
          },
          {
            "text": "First startup of a Valheim server",
            "link": "/en/games/valheim/first-start"
          },
          {
            "text": "Getting started with a Valheim server",
            "link": "/en/games/valheim/getting-started"
          },
          {
            "text": "Moving a Valheim world",
            "link": "/en/games/valheim/worlds"
          },
          {
            "text": "Troubleshooting Valheim",
            "link": "/en/games/valheim/troubleshooting"
          },
          {
            "text": "Updating Valheim",
            "link": "/en/games/valheim/updates"
          },
          {
            "text": "Valheim player permissions and bans",
            "link": "/en/games/valheim/players"
          },
          {
            "text": "Valheim server mods",
            "link": "/en/games/valheim/mods"
          },
          {
            "text": "Valheim server settings",
            "link": "/en/games/valheim/settings"
          }
        ]
      },
      {
        "text": "Hytale",
        "collapsed": true,
        "items": [
          {
            "text": "Hytale server guides",
            "link": "/en/games/hytale/"
          },
          {
            "text": "Authenticating a Hytale server",
            "link": "/en/games/hytale/authentication"
          },
          {
            "text": "Changing Hytale server settings",
            "link": "/en/games/hytale/configuration"
          },
          {
            "text": "Connecting to a Hytale server",
            "link": "/en/games/hytale/connecting"
          },
          {
            "text": "Hytale backups and restoration",
            "link": "/en/games/hytale/backups"
          },
          {
            "text": "Hytale player access and permissions",
            "link": "/en/games/hytale/player-access"
          },
          {
            "text": "Hytale worlds and player data",
            "link": "/en/games/hytale/worlds"
          },
          {
            "text": "Installing Hytale server mods",
            "link": "/en/games/hytale/mods"
          },
          {
            "text": "Starting a Hytale server",
            "link": "/en/games/hytale/getting-started"
          },
          {
            "text": "Troubleshooting a Hytale server",
            "link": "/en/games/hytale/troubleshooting"
          },
          {
            "text": "Updating a Hytale server",
            "link": "/en/games/hytale/updates"
          }
        ]
      },
      {
        "text": "Rust",
        "collapsed": true,
        "items": [
          {
            "text": "Rust server guides",
            "link": "/en/games/rust/"
          },
          {
            "text": "Backing up a Rust server",
            "link": "/en/games/rust/backups"
          },
          {
            "text": "Connecting to a Rust server",
            "link": "/en/games/rust/connecting"
          },
          {
            "text": "First startup of a Rust server",
            "link": "/en/games/rust/first-start"
          },
          {
            "text": "Getting started with a Rust server",
            "link": "/en/games/rust/getting-started"
          },
          {
            "text": "Rust administrators and players",
            "link": "/en/games/rust/players"
          },
          {
            "text": "Rust maps, saves and wipes",
            "link": "/en/games/rust/worlds"
          },
          {
            "text": "Rust Oxide/uMod plugins",
            "link": "/en/games/rust/mods"
          },
          {
            "text": "Rust server settings",
            "link": "/en/games/rust/settings"
          },
          {
            "text": "Troubleshooting a Rust server",
            "link": "/en/games/rust/troubleshooting"
          },
          {
            "text": "Updating Rust",
            "link": "/en/games/rust/updates"
          }
        ]
      }
    ]
  },
  {
    "text": "VPS",
    "collapsed": true,
    "items": [
      {
        "text": "Getting started with VPS management",
        "link": "/en/vps/"
      },
      {
        "text": "Checking a Linux service",
        "link": "/en/vps/services"
      },
      {
        "text": "Checking VPS disk space",
        "link": "/en/vps/disk-space"
      },
      {
        "text": "Checking VPS resource usage",
        "link": "/en/vps/resources"
      },
      {
        "text": "Connecting to a VPS with SSH",
        "link": "/en/vps/ssh"
      },
      {
        "text": "Creating a Linux user",
        "link": "/en/vps/users"
      },
      {
        "text": "Investigating Linux server logs",
        "link": "/en/vps/logs"
      },
      {
        "text": "Linux file permissions",
        "link": "/en/vps/permissions"
      },
      {
        "text": "Linux server firewall",
        "link": "/en/vps/firewall"
      },
      {
        "text": "Planning a VPS restore",
        "link": "/en/vps/restore"
      },
      {
        "text": "Planning VPS backups",
        "link": "/en/vps/backups"
      },
      {
        "text": "Setting up an SSH key",
        "link": "/en/vps/ssh-keys"
      },
      {
        "text": "Transferring files to a Linux VPS",
        "link": "/en/vps/file-transfer"
      },
      {
        "text": "Troubleshooting DNS on a VPS",
        "link": "/en/vps/dns-troubleshooting"
      },
      {
        "text": "Troubleshooting SSH connections",
        "link": "/en/vps/ssh-troubleshooting"
      },
      {
        "text": "Updating an Ubuntu server",
        "link": "/en/vps/updates"
      }
    ]
  },
  {
    "text": "Web hosting",
    "collapsed": true,
    "items": [
      {
        "text": "Getting started with web hosting",
        "link": "/en/webhosting/"
      },
      {
        "text": "Checking and changing a website's PHP version",
        "link": "/en/webhosting/php"
      },
      {
        "text": "Connecting a domain to web hosting",
        "link": "/en/webhosting/domain"
      },
      {
        "text": "Email client settings",
        "link": "/en/webhosting/email-client"
      },
      {
        "text": "Moving a website to web hosting",
        "link": "/en/webhosting/migration"
      },
      {
        "text": "Reading website logs",
        "link": "/en/webhosting/logs"
      },
      {
        "text": "Setting up a mailbox",
        "link": "/en/webhosting/email"
      },
      {
        "text": "Setting up a web hosting database",
        "link": "/en/webhosting/database"
      },
      {
        "text": "Setting up WordPress",
        "link": "/en/webhosting/wordpress"
      },
      {
        "text": "Transferring web hosting files with SFTP",
        "link": "/en/webhosting/sftp"
      },
      {
        "text": "Updating WordPress safely",
        "link": "/en/webhosting/wordpress-updates"
      },
      {
        "text": "Uploading website files",
        "link": "/en/webhosting/files"
      },
      {
        "text": "Web hosting backups and restoration",
        "link": "/en/webhosting/backups"
      },
      {
        "text": "Web hosting DNS records",
        "link": "/en/webhosting/dns"
      },
      {
        "text": "Website does not open",
        "link": "/en/webhosting/site-errors"
      },
      {
        "text": "Website SSL/TLS certificate",
        "link": "/en/webhosting/ssl"
      }
    ]
  }
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
  {
    "text": "Etusivu",
    "link": "/fi/"
  },
  {
    "text": "Minecraft",
    "link": "/fi/minecraft/"
  },
  {
    "text": "Pelipalvelimet",
    "link": "/fi/games/"
  },
  {
    "text": "VPS",
    "link": "/fi/vps/"
  },
  {
    "text": "Webhotelli",
    "link": "/fi/webhosting/"
  }
],

				sidebar: [
  {
    "text": "Minecraft",
    "collapsed": true,
    "items": [
      {
        "text": "Minecraft-palvelimen ohjeet",
        "link": "/fi/minecraft/"
      },
      {
        "text": "Java- ja Bedrock-pelaajat samalla palvelimella",
        "link": "/fi/minecraft/java-bedrock"
      },
      {
        "text": "Komentolohkojen käyttöönotto",
        "link": "/fi/minecraft/command-blocks"
      },
      {
        "text": "Lisäosa ei toimi",
        "link": "/fi/minecraft/plugin-troubleshooting"
      },
      {
        "text": "Maailman rajaaminen",
        "link": "/fi/minecraft/world-border"
      },
      {
        "text": "Maailman syntymäpaikan asettaminen",
        "link": "/fi/minecraft/world-spawn"
      },
      {
        "text": "Minecraft ilmoittaa palvelimen olevan täynnä",
        "link": "/fi/troubleshooting/server-full"
      },
      {
        "text": "Minecraft Java Editionin datapackit",
        "link": "/fi/minecraft/datapacks"
      },
      {
        "text": "Minecraft Java Editionin SRV-tietue",
        "link": "/fi/networking/minecraft-srv"
      },
      {
        "text": "Minecraft-lisäosan päivittäminen",
        "link": "/fi/minecraft/plugin-updates"
      },
      {
        "text": "Minecraft-lisäosien asentaminen",
        "link": "/fi/minecraft/plugins"
      },
      {
        "text": "Minecraft-maailman siirtäminen palvelimelle",
        "link": "/fi/minecraft/worlds"
      },
      {
        "text": "Minecraft-modien asentaminen",
        "link": "/fi/minecraft/mods"
      },
      {
        "text": "Minecraft-palvelimeen ei voi yhdistää",
        "link": "/fi/troubleshooting/connection-issues"
      },
      {
        "text": "Minecraft-palvelimen asetukset",
        "link": "/fi/minecraft/server-properties"
      },
      {
        "text": "Minecraft-palvelimen suorituskyvyn vianmääritys",
        "link": "/fi/minecraft/performance"
      },
      {
        "text": "Minecraft-palvelimen version vaihtaminen",
        "link": "/fi/minecraft/version-change"
      },
      {
        "text": "Minecraft-palvelin kaatuu käynnistyksessä",
        "link": "/fi/troubleshooting/minecraft-crash"
      },
      {
        "text": "Minecraft-palvelinohjelmiston valinta",
        "link": "/fi/minecraft/server-software"
      },
      {
        "text": "Minecraft-pelaajien oikeudet ja operaattorit",
        "link": "/fi/minecraft/operators"
      },
      {
        "text": "Minecraftin lokien tutkiminen",
        "link": "/fi/minecraft/logs"
      },
      {
        "text": "Minecraftin sallittujen pelaajien lista",
        "link": "/fi/minecraft/allowlist"
      },
      {
        "text": "Modpackin asentaminen",
        "link": "/fi/minecraft/modpacks"
      },
      {
        "text": "Netherin palauttaminen uuteen tilaan",
        "link": "/fi/minecraft/reset-nether"
      },
      {
        "text": "Oikeuksien hallinta LuckPermsillä",
        "link": "/fi/minecraft/luckperms"
      },
      {
        "text": "Palvelinkuvakkeen lisääminen",
        "link": "/fi/minecraft/server-icon"
      },
      {
        "text": "Pelaajan poistaminen ja porttikielto",
        "link": "/fi/minecraft/bans"
      },
      {
        "text": "Pelisääntöjen muuttaminen",
        "link": "/fi/minecraft/game-rules"
      },
      {
        "text": "Resurssipaketin tarjoaminen pelaajille",
        "link": "/fi/minecraft/resource-pack"
      },
      {
        "text": "Uuden maailman siemen",
        "link": "/fi/minecraft/world-seed"
      },
      {
        "text": "Yksittäisen pelaajan tietojen palauttaminen",
        "link": "/fi/minecraft/player-data-restore"
      },
      {
        "text": "Minecraft-työkalut",
        "collapsed": true,
        "items": [
          {
            "text": "Gamehosterin Minecraft-työkalut",
            "link": "/fi/tools/"
          },
          {
            "text": "Koordinaatti-, tick- ja beacon-laskurit",
            "link": "/fi/tools/calculators"
          },
          {
            "text": "Minecraft-palvelimen tilatarkistus",
            "link": "/fi/tools/server-status"
          },
          {
            "text": "Minecraft-ping-testi",
            "link": "/fi/tools/ping-test"
          },
          {
            "text": "MOTD-editori",
            "link": "/fi/tools/motd"
          },
          {
            "text": "Palvelinkustannusten laskuri",
            "link": "/fi/tools/cost-calculator"
          },
          {
            "text": "Palvelinkuvakkeen muunnin",
            "link": "/fi/tools/server-icon"
          },
          {
            "text": "Pelaajan UUID-muunnin",
            "link": "/fi/tools/uuid"
          },
          {
            "text": "Skini ja pikseliteksti",
            "link": "/fi/tools/skin-font"
          },
          {
            "text": "Valmistusreseptien editori",
            "link": "/fi/tools/crafting"
          },
          {
            "text": "Värikoodityökalu",
            "link": "/fi/tools/color-codes"
          },
          {
            "text": "Ympyrä- ja pallogeneraattorit",
            "link": "/fi/tools/building"
          }
        ]
      }
    ]
  },
  {
    "text": "Pelipalvelimet",
    "collapsed": true,
    "items": [
      {
        "text": "Palvelimen hallinta",
        "link": "/fi/server-management/"
      },
      {
        "text": "Pelipalvelimen käyttöönotto",
        "link": "/fi/getting-started/"
      },
      {
        "text": "Pelipalvelimien käyttöönotto",
        "link": "/fi/games/"
      },
      {
        "text": "Verkkoasetukset",
        "link": "/fi/networking/"
      },
      {
        "text": "Ajastetut tehtävät",
        "link": "/fi/server-management/schedules"
      },
      {
        "text": "Ajastuksen ajankohdan määrittäminen",
        "link": "/fi/server-management/schedule-cron"
      },
      {
        "text": "Alikäyttäjät ja käyttöoikeudet",
        "link": "/fi/server-management/subusers"
      },
      {
        "text": "Asetustiedoston turvallinen muokkaaminen",
        "link": "/fi/server-management/configuration-files"
      },
      {
        "text": "DNS-tietueiden tarkistaminen",
        "link": "/fi/networking/dns-check"
      },
      {
        "text": "Ensimmäinen käynnistys",
        "link": "/fi/getting-started/first-startup"
      },
      {
        "text": "Hyvän tukipyynnön tekeminen",
        "link": "/fi/troubleshooting/support-request"
      },
      {
        "text": "Konsolin käyttö ja komennot",
        "link": "/fi/server-management/console"
      },
      {
        "text": "Käynnistysasetusten tarkistaminen",
        "link": "/fi/server-management/startup-settings"
      },
      {
        "text": "Muistivirheen selvittäminen",
        "link": "/fi/troubleshooting/memory-errors"
      },
      {
        "text": "Palvelimen levytila on vähissä",
        "link": "/fi/troubleshooting/disk-full"
      },
      {
        "text": "Palvelimen osoitteet ja portit paneelissa",
        "link": "/fi/server-management/network-allocations"
      },
      {
        "text": "Palvelimen tapahtumien tarkistaminen",
        "link": "/fi/server-management/activity"
      },
      {
        "text": "Palvelimen turvallinen uudelleenkäynnistys",
        "link": "/fi/server-management/safe-restart"
      },
      {
        "text": "Palvelimen varmuuskopiot",
        "link": "/fi/server-management/backups"
      },
      {
        "text": "Palvelin ei käynnisty",
        "link": "/fi/troubleshooting/server-not-starting"
      },
      {
        "text": "Pelipalvelimen hallintapaneeliin kirjautuminen",
        "link": "/fi/getting-started/accessing-server"
      },
      {
        "text": "Pelipalvelimen tietokannat",
        "link": "/fi/server-management/databases"
      },
      {
        "text": "Pelipaneelin tilin suojaaminen",
        "link": "/fi/server-management/account-security"
      },
      {
        "text": "Resurssien käytön seuraaminen",
        "link": "/fi/server-management/resource-usage"
      },
      {
        "text": "SFTP-yhteys ei onnistu",
        "link": "/fi/troubleshooting/sftp-connection"
      },
      {
        "text": "Suurten tiedostojen siirtäminen",
        "link": "/fi/server-management/file-transfers"
      },
      {
        "text": "Tiedostonhallinnan käyttö",
        "link": "/fi/server-management/file-manager"
      },
      {
        "text": "Varmuuskopion palautuksen suunnittelu",
        "link": "/fi/server-management/restore-planning"
      },
      {
        "text": "Varmuuskopion säilyttäminen omalla koneella",
        "link": "/fi/server-management/backup-download"
      },
      {
        "text": "Verkkotunnuksen yhdistäminen",
        "link": "/fi/networking/domains"
      },
      {
        "text": "Yhdistäminen SFTP:llä",
        "link": "/fi/server-management/sftp"
      },
      {
        "text": "FX / FiveM",
        "collapsed": true,
        "items": [
          {
            "text": "FX-palvelimen käyttöönotto",
            "link": "/fi/games/fivem/"
          }
        ]
      },
      {
        "text": "Valheim",
        "collapsed": true,
        "items": [
          {
            "text": "Valheim-palvelimen ohjeet",
            "link": "/fi/games/valheim/"
          },
          {
            "text": "Modit Valheim-palvelimella",
            "link": "/fi/games/valheim/mods"
          },
          {
            "text": "Valheim-maailman siirtäminen",
            "link": "/fi/games/valheim/worlds"
          },
          {
            "text": "Valheim-maailman varmuuskopiointi",
            "link": "/fi/games/valheim/backups"
          },
          {
            "text": "Valheim-palvelimeen liittyminen",
            "link": "/fi/games/valheim/connecting"
          },
          {
            "text": "Valheim-palvelimen asetukset",
            "link": "/fi/games/valheim/settings"
          },
          {
            "text": "Valheim-palvelimen käyttöönotto",
            "link": "/fi/games/valheim/getting-started"
          },
          {
            "text": "Valheim-palvelimen vianmääritys",
            "link": "/fi/games/valheim/troubleshooting"
          },
          {
            "text": "Valheimin ensimmäinen käynnistys",
            "link": "/fi/games/valheim/first-start"
          },
          {
            "text": "Valheimin pelaajien oikeudet ja kiellot",
            "link": "/fi/games/valheim/players"
          },
          {
            "text": "Valheimin päivittäminen",
            "link": "/fi/games/valheim/updates"
          }
        ]
      },
      {
        "text": "Hytale",
        "collapsed": true,
        "items": [
          {
            "text": "Hytale-palvelimen ohjeet",
            "link": "/fi/games/hytale/"
          },
          {
            "text": "Hytale-maailmat ja pelaajatiedot",
            "link": "/fi/games/hytale/worlds"
          },
          {
            "text": "Hytale-palvelimen asetusten muuttaminen",
            "link": "/fi/games/hytale/configuration"
          },
          {
            "text": "Hytale-palvelimen ensimmäinen käynnistys",
            "link": "/fi/games/hytale/getting-started"
          },
          {
            "text": "Hytale-palvelimen päivittäminen",
            "link": "/fi/games/hytale/updates"
          },
          {
            "text": "Hytale-palvelimen tunnistautuminen",
            "link": "/fi/games/hytale/authentication"
          },
          {
            "text": "Hytale-palvelimen varmuuskopiointi ja palautus",
            "link": "/fi/games/hytale/backups"
          },
          {
            "text": "Hytale-palvelimen vianmääritys",
            "link": "/fi/games/hytale/troubleshooting"
          },
          {
            "text": "Modien asentaminen Hytale-palvelimelle",
            "link": "/fi/games/hytale/mods"
          },
          {
            "text": "Pelaajien pääsy ja oikeudet Hytale-palvelimella",
            "link": "/fi/games/hytale/player-access"
          },
          {
            "text": "Yhdistäminen Hytale-palvelimelle",
            "link": "/fi/games/hytale/connecting"
          }
        ]
      },
      {
        "text": "Rust",
        "collapsed": true,
        "items": [
          {
            "text": "Rust-palvelimen ohjeet",
            "link": "/fi/games/rust/"
          },
          {
            "text": "Rust-palvelimelle liittyminen",
            "link": "/fi/games/rust/connecting"
          },
          {
            "text": "Rust-palvelimen asetukset",
            "link": "/fi/games/rust/settings"
          },
          {
            "text": "Rust-palvelimen ensimmäinen käynnistys",
            "link": "/fi/games/rust/first-start"
          },
          {
            "text": "Rust-palvelimen käyttöönotto",
            "link": "/fi/games/rust/getting-started"
          },
          {
            "text": "Rust-palvelimen päivittäminen",
            "link": "/fi/games/rust/updates"
          },
          {
            "text": "Rust-palvelimen varmuuskopiointi",
            "link": "/fi/games/rust/backups"
          },
          {
            "text": "Rust-palvelimen vianmääritys",
            "link": "/fi/games/rust/troubleshooting"
          },
          {
            "text": "Rustin kartta, tallennukset ja wipe",
            "link": "/fi/games/rust/worlds"
          },
          {
            "text": "Rustin Oxide/uMod-lisäosat",
            "link": "/fi/games/rust/mods"
          },
          {
            "text": "Rustin ylläpitäjät ja pelaajahallinta",
            "link": "/fi/games/rust/players"
          }
        ]
      }
    ]
  },
  {
    "text": "VPS",
    "collapsed": true,
    "items": [
      {
        "text": "VPS-palvelimen hallinnan aloittaminen",
        "link": "/fi/vps/"
      },
      {
        "text": "DNS-ongelmien selvittäminen VPS:llä",
        "link": "/fi/vps/dns-troubleshooting"
      },
      {
        "text": "Linux-käyttäjän luominen",
        "link": "/fi/vps/users"
      },
      {
        "text": "Linux-palvelimen lokien tutkiminen",
        "link": "/fi/vps/logs"
      },
      {
        "text": "Linux-palvelimen palomuuri",
        "link": "/fi/vps/firewall"
      },
      {
        "text": "Linux-palvelun tilan tarkistaminen",
        "link": "/fi/vps/services"
      },
      {
        "text": "Linux-tiedostojen käyttöoikeudet",
        "link": "/fi/vps/permissions"
      },
      {
        "text": "SSH-avaimen käyttöönotto",
        "link": "/fi/vps/ssh-keys"
      },
      {
        "text": "SSH-yhteyden vianmääritys",
        "link": "/fi/vps/ssh-troubleshooting"
      },
      {
        "text": "SSH-yhteys Linux-VPS:ään",
        "link": "/fi/vps/ssh"
      },
      {
        "text": "Tiedostojen siirto Linux-VPS:lle",
        "link": "/fi/vps/file-transfer"
      },
      {
        "text": "Ubuntu-palvelimen päivitykset",
        "link": "/fi/vps/updates"
      },
      {
        "text": "VPS:n levytilan tarkistaminen",
        "link": "/fi/vps/disk-space"
      },
      {
        "text": "VPS:n palautuksen suunnittelu",
        "link": "/fi/vps/restore"
      },
      {
        "text": "VPS:n resurssien tarkistaminen",
        "link": "/fi/vps/resources"
      },
      {
        "text": "VPS:n varmuuskopioinnin suunnittelu",
        "link": "/fi/vps/backups"
      }
    ]
  },
  {
    "text": "Webhotelli",
    "collapsed": true,
    "items": [
      {
        "text": "Webhotellin hallinnan aloittaminen",
        "link": "/fi/webhosting/"
      },
      {
        "text": "Sivuston lokien lukeminen",
        "link": "/fi/webhosting/logs"
      },
      {
        "text": "Sivuston PHP-version tarkistaminen ja vaihtaminen",
        "link": "/fi/webhosting/php"
      },
      {
        "text": "Sivuston siirtäminen webhotelliin",
        "link": "/fi/webhosting/migration"
      },
      {
        "text": "Sivuston SSL/TLS-varmenne",
        "link": "/fi/webhosting/ssl"
      },
      {
        "text": "Sivuston tiedostojen lataaminen",
        "link": "/fi/webhosting/files"
      },
      {
        "text": "Sähköpostilaatikon käyttöönotto",
        "link": "/fi/webhosting/email"
      },
      {
        "text": "Sähköpostiohjelman asetukset",
        "link": "/fi/webhosting/email-client"
      },
      {
        "text": "Verkkosivusto ei avaudu",
        "link": "/fi/webhosting/site-errors"
      },
      {
        "text": "Verkkotunnuksen liittäminen webhotelliin",
        "link": "/fi/webhosting/domain"
      },
      {
        "text": "Webhotellin DNS-tietueet",
        "link": "/fi/webhosting/dns"
      },
      {
        "text": "Webhotellin tiedostojen siirtäminen SFTP:llä",
        "link": "/fi/webhosting/sftp"
      },
      {
        "text": "Webhotellin tietokannan käyttöönotto",
        "link": "/fi/webhosting/database"
      },
      {
        "text": "Webhotellin varmuuskopiointi ja palautus",
        "link": "/fi/webhosting/backups"
      },
      {
        "text": "WordPressin käyttöönotto",
        "link": "/fi/webhosting/wordpress"
      },
      {
        "text": "WordPressin päivittäminen turvallisesti",
        "link": "/fi/webhosting/wordpress-updates"
      }
    ]
  }
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

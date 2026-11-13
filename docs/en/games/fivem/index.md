# Getting started with an FX server

This guide covers starting a Gamehoster FX server and joining it with the FiveM client. Gamehoster's FX service uses the game panel and includes txAdmin. Setup details can vary by server.

## Before you begin

You need an activated FX server, access to the [game panel](https://panel.gamehoster.fi/), a Cfx.re account, the FiveM client and its required GTA V installation. Keep panel and txAdmin credentials separate from information shared with players.

1. Sign in to the panel and select your FX server. If it is missing, check activation with the client area or support.
2. Open **Console** and find your server's own address and port. `g1.gamehoster.fi:2000` is an illustrative example only.
3. Check the service instructions for the actual txAdmin address and initial setup details. If you cannot find the address or setup PIN, ask support rather than guessing a port.

## Register a Cfx key

Cfx says FXServer needs a server registration key. Sign in to the [Cfx Portal](https://portal.cfx.re/), register your server and generate a key. Treat it as a secret: do not send it to players, publish it in logs or commit it to a public repository.

If your txAdmin setup asks for the key, enter it in the field it displays. Some installations may use another provider-specified method. Do not add duplicate settings or guess startup commands. See [Cfx's setup guide](https://docs.fivem.net/docs/getting-started/setup-fivem-server/).

## Start and connect

1. Open txAdmin using the address supplied for your service and complete any initial setup. Link your Cfx account and choose a server recipe only after confirming its effect on existing data. An already configured server may not need a new recipe.
2. Start the server using the control specified for your service and watch the game panel console until startup completes. Resolve any key or resource errors first.
3. Open FiveM, press **F8**, enter `connect YOUR_ADDRESS:PORT` using the actual panel address and port, and press Enter. Confirm that you can join. See [Cfx's direct connection instructions](https://docs.fivem.net/docs/support/server-issues/).
4. Create a [backup](../../server-management/backups.md) before adding resources or a framework. If it uses a database, establish a separate database backup too.

If startup or joining fails, check the first console error, key configuration, startup status and address. Absence from the server list does not by itself prove that direct connections fail. Do not guess ports or reinstall as an experiment. Give support the time and relevant error lines with keys and passwords removed.

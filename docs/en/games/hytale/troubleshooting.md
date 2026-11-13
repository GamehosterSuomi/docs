# Troubleshooting a Hytale server

Record the symptom, when it began and whether it affects everyone or one player.

## Startup

Find the first console error and preceding lines, and inspect `logs/` if available. Check installation and any [authentication](./authentication.md) request. For recent configuration or mod changes, stop and compare against a backup; check JSON syntax and versions. Check memory and disk, but use logs to identify the cause. Do not delete the world to diagnose it.

## Connecting and performance

Check the panel address and port, startup, authentication, client/server protocol compatibility and player access. Hytale uses QUIC over UDP. If one player is affected, try another network. See [connecting](./connecting.md).

For slow or missing worlds, record player count, time and the affected area or recent mods. Compare CPU, memory and disk against a quiet period. Back up and change one thing at a time. Provide support versions, the first error and recent changes, with personal data and secrets removed. See the [server manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).

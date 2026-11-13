# Minecraft Java Edition SRV record

An SRV record lets Java players use a domain without typing a separate port. You need control over the domain's DNS and the server address and port from the panel.

In this example players connect to `play.example.com`, while the panel address is `g1.gamehoster.fi:2000`. These are example values, not your assigned address: replace them with the values in your panel.

1. Confirm with Gamehoster which hostname should be used as the DNS target. An SRV target needs a hostname with an A or AAAA record; it must not be an IP address or a CNAME alias.
2. Create an SRV record for `_minecraft._tcp.play.example.com`. Your DNS provider may ask for service, protocol and name separately.
3. Set priority and weight to `0`, port to your assigned game port, and target to the confirmed hostname. In this illustrative example the port is `2000` and target is `g1.gamehoster.fi`; verify your own values and target before saving.
4. Save, allow DNS caches to update and connect in Java Edition using `play.example.com` without explicitly specifying a port.

Some providers append the domain automatically; check the full saved name. If it fails, test the direct address and port first, then check the SRV name, target and port and the target's A or AAAA record. DNS caches can retain earlier missing responses. This guide applies to Java; Bedrock usually uses a separate port field.

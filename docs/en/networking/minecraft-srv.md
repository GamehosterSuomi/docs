# Minecraft Java Edition SRV record

An SRV record lets Minecraft Java Edition players use a domain without typing the server's separate port. You need access to your domain's DNS settings and the server address and port from the panel.

## Create the records

In this example, players connect to `play.example.com`, and the panel shows `g1.gamehoster.fi:2000` as the server address. Both are examples. Confirm your own server address and port in the panel and ask support whether the DNS target is suitable if needed.

1. Confirm the correct server hostname for the SRV target with your provider. The target must be a hostname with an A or AAAA record. It cannot be an IP address, `hostname:port` or a CNAME alias. The `g1.gamehoster.fi` hostname in the table is illustrative.
2. Create an SRV record named `_minecraft._tcp.play.example.com`. Your provider may request the service, protocol and name in separate fields.
3. Set priority to `0`, weight to `0`, port to your server's port and target to the correct server hostname without a port.
4. Save the records and wait for the DNS change to propagate. Connect with Java Edition to `play.example.com` without a port.

| Field | Example |
| --- | --- |
| Service | `_minecraft` |
| Protocol | `_tcp` |
| Name | `play` |
| Priority / weight | `0` / `0` |
| Port | `2000` |
| Target | `g1.gamehoster.fi` |

DNS providers handle the domain suffix differently. Some add it automatically. Check the full saved name to ensure the domain is not repeated.

## If the connection fails

First try connecting directly with the address and port shown in the panel. Then check the SRV record's name, target and port, and confirm that the target hostname resolves to an address. DNS caches can also retain an earlier response indicating that a record was missing. This guide applies to Java Edition. Bedrock generally requires the port to be entered separately in the game.

See [RFC 2782](https://www.rfc-editor.org/info/rfc2782/) for more information about SRV target requirements.

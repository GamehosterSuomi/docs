# Connecting a Domain

You can use a custom domain to make your game server easier to remember.

## Step 1: Find Your Server Address

Locate your server's public IP address and connection port.

## Step 2: Open Your DNS Settings

Sign in to your domain registrar or DNS provider.

## Step 3: Create a DNS Record

For an IPv4 address, create an A record.

Example:

| Type | Name | Value      |
| ---- | ---- | ---------- |
| A    | play | 192.0.2.10 |

Replace the example IP with your actual server IP.

## Step 4: Connect

If your game uses a non-default port, you may still need to specify the port when connecting.

Minecraft Java Edition can use an SRV record to direct players to a custom port.

::: info
DNS changes may take time to propagate.
:::

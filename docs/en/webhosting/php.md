# Checking and changing a website's PHP version

A PHP site must support the server's PHP version and have the extensions it needs. The availability of Plesk settings depends on your plan and permissions.

## Before changing versions

1. Check the site, theme and plugin vendors' compatibility information for the target version.
2. Back up files and the database.
3. Record the current PHP version and any settings you intend to change, so you can restore them if necessary.

## Change and test

If your permissions allow it, open the domain's PHP settings in Plesk and select a supported version compatible with your application. Save and allow the change to take effect. Test sign-in, forms and other important functions.

If the site stops working, check the [error log](./logs.md) and return to the previous working version if available. Do not leave an unsupported version without security updates as a permanent solution: update the application to a supported version as well.

See [Plesk's PHP settings documentation](https://docs.plesk.com/en-US/obsidian/administrator-guide/70742/).

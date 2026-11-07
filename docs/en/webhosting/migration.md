# Moving a website to web hosting

Moving a site generally involves transferring files, the database and settings, then pointing the domain to the new service. Plan email separately: moving the website does not automatically move mailboxes.

## Prepare

1. Check the application's PHP and database requirements and the destination's compatibility.
2. Make a restorable copy of the source site's files and database. Record DNS and email settings too.
3. Create the required database at the destination and transfer files according to the application's instructions. Import the database with an available management tool.
4. Update the application's database connection and other environment-specific settings. Keep passwords private.

## Test and switch the address

Test the site in the destination environment using an available preview method before changing DNS. Check images, sign-in, forms and application functionality. If needed, schedule downtime so that data created after the final copy does not remain only on the old server.

Only then change the necessary DNS records and monitor propagation. Keep the old service and backups until the new site and any email have been checked.

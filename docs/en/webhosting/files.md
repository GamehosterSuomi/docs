# Uploading website files

You can upload website files with Plesk's file manager if your subscription includes it. Back up the existing files and database before replacing anything.

## Upload the site

1. Open the correct domain and its file manager in Plesk.
2. Identify its document root, the directory from which the web server serves files. Do not assume every domain uses the same directory.
3. Upload the site files there. You can also upload an archive and extract it if the file manager supports its format.
4. Check that extraction did not create an extra top-level directory. The site's entry file must be in the location required by the application.
5. Open the site in a browser and test subpages and images as well.

An uploaded file may overwrite an existing file with the same name. Do not put passwords or backups in a publicly accessible directory.

See [Plesk's file manager guide](https://docs.plesk.com/en-US/obsidian/customer-guide/quick-start-with-plesk/set-up-your-first-website/1-create-your-site/uploading-content/uploading-content-with-file-manager.74105/).

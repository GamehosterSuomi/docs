# Reading website logs

Website logs can help investigate HTTP 500 errors and missing files. Log access and retention depend on the hosting configuration.

## Find the relevant entries

1. Record the time, URL and any error code.
2. Open the correct domain's log view in Plesk, if available.
3. Look around the time of the error for application or server messages. The log's time zone may differ from yours.
4. Check whether the problem followed a recent update or configuration change.
5. Back up before making corrective changes, and change one thing at a time.

An access log can show a request and its HTTP status, while an error log may give a more detailed cause. One 404 request alone does not mean the site is broken.

Logs can contain personal data, addresses or secrets. Remove unnecessary and sensitive information before sharing them with support.

See [Plesk's log guide](https://docs.plesk.com/en-US/obsidian/customer-guide/websites-and-domains/viewing-website-error-log.73938/).

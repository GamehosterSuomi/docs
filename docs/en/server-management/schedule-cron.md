# Choosing a schedule time

Pterodactyl schedules may use five cron fields. Confirm the panel's time zone and field instructions; see [scheduled tasks](./schedules.md).

| Field | Range |
| --- | --- |
| Minute | 0–59 |
| Hour | 0–23 |
| Day of month | 1–31 |
| Month | 1–12 |
| Day of week | 0–7, Sunday 0 or 7 |

For example, `30 4 * * *` means 04:30 every day in the applicable time zone. An asterisk means every value. The panel may use separate fields. Check the implementation when specifying both day-of-month and day-of-week, inspect the next run if shown, and monitor the first run. Daylight saving changes can affect local schedules.

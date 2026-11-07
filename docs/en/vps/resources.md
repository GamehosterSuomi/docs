# Checking VPS resource usage

Slow performance can involve CPU, memory, disk, network or the application itself. Measure while the problem occurs before changing settings.

## Basic checks

- `uptime` shows uptime and load averages. Load is not directly a CPU usage percentage.
- `top` shows process CPU and memory usage. Press `q` to quit.
- `free -h` shows memory and swap usage. Linux also uses available memory for cache, so used memory alone does not indicate a problem.
- `df -h` shows filesystem space. See also [checking disk space](./disk-space.md).

Record the time and the process consuming resources. Check application logs and compare with changes, user counts or scheduled tasks. If a process stops due to a memory problem, check logs and application requirements before changing resources or settings. Contact support with measurements if needed.

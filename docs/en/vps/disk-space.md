# Checking VPS disk space

A full disk can prevent services from writing data. First identify which filesystem is full and which directory uses the space.

## Investigate

```bash
df -h
df -i
```

The first command shows disk space and the second inode usage. Running out of inodes can also prevent new files from being created even when disk space remains.

With GNU `du`, inspect the sizes of immediate subdirectories under `/var` with `sudo du -h --max-depth=1 /var`. This can take time on large directories. Follow the results into more specific subdirectories. `du` may not show a deleted file still held open by a process, even though it continues to occupy space.

## Free space safely

Identify large backups, downloads and logs before deleting them. Ensure a backup is stored elsewhere and that the application no longer needs the file. Follow the application or logging system's cleanup instructions; do not manually delete database files. Check space again and monitor whether usage continues to grow.

Further reading: [GNU's explanation of differences between `df` and `du`](https://www.gnu.org/software/coreutils/faq/coreutils-faq.html).

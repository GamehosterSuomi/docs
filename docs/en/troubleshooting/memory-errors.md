# Investigating memory errors

An `OutOfMemoryError` is a useful clue; high memory use alone does not establish the cause.

1. Save the console error and note whether it occurs at startup or during a particular action.
2. Compare usage with the service limit and check recently added mods and plugins for compatibility and dependencies.
3. Stop the server and back it up before changes. Disable a recent change only if you understand its effects.
4. Review Java startup settings against provider and software guidance. The process also needs memory outside the Java heap; do not allocate the entire service limit to the heap.
5. Retest under similar conditions. If the process exits without an explanatory log, ask support for help.

See [Paper troubleshooting](https://docs.papermc.io/paper/basic-troubleshooting/).

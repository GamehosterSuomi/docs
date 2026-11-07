# Troubleshooting Minecraft server performance

Slow server logic can cause delayed block changes or jerky mobs. Network latency is a separate problem.

1. Record when the problem occurs, player count and whether everyone experiences it.
2. Check console warnings and any memory, CPU and disk usage shown in the panel. A single metric does not establish the cause.
3. Check whether the issue began after an update, a mod or plugin, or use of a particular area.
4. If your software supports profiling, record a profile while the problem is occurring and follow its analysis instructions.

Consider lowering `view-distance` and `simulation-distance` in [server properties](./server-properties.md), bearing in mind that this changes the player experience. To isolate a recent extension, back up first and follow its disabling instructions: removing a mod can change the world. Change one setting at a time and compare similar loads.

For support, provide the software version, time, player count and relevant console messages; remove secrets first.

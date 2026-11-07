# Setting a world border

A border keeps gameplay within an area and limits exploration of new terrain. It does not delete existing terrain or solve every performance problem. These examples use vanilla Java; multiworld plugins may have their own borders.

1. Back up and choose a center, ensuring important buildings lie within the intended area.
2. In the console set it, for example, with `worldborder center 0 0`. In game add `/` before the command.
3. Set the diameter in blocks, for example `worldborder set 2000`. This extends about 1,000 blocks in each direction from the center.
4. Check size with `worldborder get` and test in game.

::: warning
Reducing the border can leave players and buildings outside it. Notify players and ensure they can safely get inside.
:::

Check command completion for your version's options, including gradual resizing. Test in a separate environment created from a backup first.

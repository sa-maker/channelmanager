# channelmanager

## Introduction

This is a Vue2 component made to test dev skills.

## Must have:

- Make a new project using **Vue CLI** (Vue v2);
- Make use of **Tailwind**, an utility class framework;
- Make use of **Font Awesome 5** (drag indicator can be grip-vertical);
- Create a new component called `ChannelManager.vue` and (reusable) child
  components, where you think is appropriate with **the Atomic Design Principles** in
  mind.
- Try to follow the design as much as possible;
- The order of the list can be changed by dragging the drag indicator;
- Items can be removed;
- Items can be created (Where traditionally they would be selectable by searching).
- The icon can be a random icon from FA;
- Clicking Apply will save the state;

## Should have:

- Cancel and Apply buttons appear after creating/removing/altering sort. (Alterations
  can therefore be canceled)

## Could have:

- Data is stored using **VueX** (otherwise managed in data function is fine as well)
- (Some) components are unit tested via a framework as **Cypress**

## Additional notes:

1. The data can be faked, no server or backend is required.
2. The search input would normally search through all existing channels (hence the
   search icon). In this case hitting enter would create an item with the input, with a
   random Font Awesome icon.

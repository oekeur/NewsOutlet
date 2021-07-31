# Styles

## There are two types of styles: Base and Globals

### Base

Base styles contain all variables, mixins and functions that you would like to re-use throughout the project. Each React component can include the the `base.scss` file and therefor these files **cannot include any CSS declarations**. If so, they will be declared for each import statement and with that blow up the CSS.

-   **breakpoints.scss:** All breakpoints including relevant mixins
-   **colors.scss:** All colors
-   **font-imports.scss:** All @font-face declarations
-   **font-mixins.scss:** All typographic combinations as mixins
-   **functions.scss:** All SCSS functions
-   **layout.scss:** All variables/mixins relevant for the layout
-   **mixins.scss:** All leftover mixins
-   **motion.scss:** All variables relevant for motion
-   **variables.scss:** All leftover variables

-   **default-elements.scss:** Styling of all default elements
-   **font-globals.scss:** All global typography rules

### Globals

Global styles for the entire project. This includes the styling of the default HTML elements and is only included in the root file ones.

-   **default-elements.scss**: Styling of all default elements
-   **font-globals.scss**: All global typography rules

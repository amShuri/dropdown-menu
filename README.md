# Dropdown Menu

## Installation

```
npm install ashi-dropdown-menu
```

---

## Example

#### HTML

Use the following HTML structure when implementing the dropdown:

```html
<a href="#" data-target="dropdown">Click</a>
<div class="dropdown-menu" id="dropdown">
  <ul>
    <li>List Item One</li>
    <li>List Item Two</li>
  </ul>
</div>
```

#### CSS

Include these styles to control the dropdown's visibility:

```css
.dropdown-menu {
  display: none;
}

.visible {
  display: block;
}
```

#### JavaScript

If you're using a bundler like Webpack, import the library as follows:

```js
import { Dropdown } from 'ashi-dropdown-menu';
```

Then, initialize the dropdown by creating a new instance of the Dropdown class:

```js
new Dropdown(document.querySelector("[data-target='dropdown']"));
```

---

## API

##### `new Dropdown(triggerElement)`

#### Parameters

- `triggerElement` (HTML Element): A reference to the clickable element (e.g., the `<a>` tag) that triggers the dropdown.

#### Behavior

- When the `triggerElement` is clicked, the associated dropdown menu toggles its visibility by adding or removing the `visible` class.

# Dropdown Menu

## Install

```
npm install asri-dropdown-menu
```

## Example

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

Add the following styles to your CSS file:

```css
.dropdown-menu {
  display: none;
}

.visible {
  display: block;
}
```

Then, initialize the dropdown with JavaScript:

```js
new Dropdown(document.querySelector("[data-target='dropdown']"));
```

---

## API

##### `new Dropdown(triggerElement)`

Creates a new dropdown-menu instance.

- triggerElement (required): The element that triggers the dropdown-menu when
  clicked.

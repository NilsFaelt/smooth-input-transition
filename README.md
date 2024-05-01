This is an example demonstrating smooth transitions between input fields triggered by pressing the Enter key. The component uses React hooks (`useEffect`, `useState`, `useRef`) to manage the input fields and their focus.

- `numberOfInputs` is an array containing 4 elements, used to render 4 input fields.
- `currentlyFocused` and `key` are state variables used to track the currently focused input field and the key pressed.
- Four refs (`ref1`, `ref2`, `ref3`, `ref4`) are created using `useRef` to reference the input fields.
- A `refMap` is created as a Map to hold the refs, indexed by strings like "ref1", "ref2", etc.
- The `handleChange` function updates the `currentlyFocused` state variable when an input field is changed.
- The `handleKeyDown` function updates the `key` state variable when the Enter key is pressed.
- Two `useEffect` hooks are used to set focus on the first input field initially and to handle transitions between input fields when Enter is pressed.
- Inside the return statement, the component maps over `numberOfInputs` to render the input fields, using the `refMap` to assign refs to each input field.

```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# smooth-input-transition

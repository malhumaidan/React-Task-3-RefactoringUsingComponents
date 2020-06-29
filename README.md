# Spring Cleaning 1

## Discussion

**Topics to discuss:**

- Components
- Props

[React 3 - Components and Props](https://docs.google.com/presentation/d/1VhahKb_U-eNWm488M4Ea0u5GgR3-BqnAGB0v5hvW2IU/edit#slide=id.g89fc9bce5c_1_0)

At this point, all of our code is in `App.js`. But what will happen when our website becomes bigger? Basically, we will split the code in `App.js` to many components.

## Step 1: CookieList Component

1. First, we will create a folder called `components`. This is where we will place all our components **except** `App.js`.

2. Now in `components`, we will create a file called `CookieList.js`.

3. The first step in creating a component is importing `React`.

```javascript
import React from "react";
```

4. Then, we will create a function -which is our component- called `CookieList`. The component **must** start with a capital letter, otherwise it will cause you issues.

```javascript
import React from "react";

const CookieList = () => {};
```

5. The return value of this function is the JSX that will be rendered on the screen when `CookieList` is called. For now let's add any message to it.

```javascript
import React from "react";

const CookieList = () => {
  return <h1>I'm the CookieList component!</h1>;
};
```

6. To use this component in `App.js`, we will need to import it. And you can't import something if it's not exported.

```javascript
import React from "react";

const CookieList = () => {
  return <h1>I'm the CookieList component!</h1>;
};

export default CookieList;
```

7. In `App.js`, import `CookieList`. Regarding the path, for `App.js` to reach `CookieList.js`, it has to go inside `components` folder and to `CookieList.js` to import it. Since `App.js` and `components` are in the same directory the path will start with `./` followed by the `components` which is the directory we want to go to followed by `CookieList` which is the file we want to reach into.

```javascript
import React from "react";

// Components
import CookieList from "./components/CookieList";
```

8. Now how can we render `CookieList`? Any guesses?

9. To render a component, we will wrap it in a tag.

```jsx
  return (
    <div style={styles.body}>
        <div>...</div>
        <CookieList />
    <div>
  )
```

Tada!!! It worked! Easy right?

10. Can we call a component more than once? Yes, you can call it as many times as you want! Let's call `<CookieList />` many times. Basically every time we render a component we are creating an **instance** of this component.

```jsx
function App() {
  return (
    <div style={styles.body}>
        <div>...</div>
        <CookieList />
        <CookieList />
        <CookieList />
        <CookieList />
      <div>
```

Nice! Let's remove them now.

11. Let's move our cookie list to the `CookieList` component.

```jsx
const CookieList = () => {
  return <div style={styles.list}>{cookieList}</div>;
};
```

12. We got two errors: `'styles' is not defined` and `'cookieList' is not defined`

13. We need to import `styles` in `Home.js`! Regarding the path, this time `Home.js` wants to access `styles.js` which is outside the `components` folder, so `Home.js` must leave `components` to reach `styles.js`. To reach for a higher directory the path will start `../` followed by `styles` which is the file we need to access.

```javascript
import React from "react";

// Styling
import styles from "../styles";
```

14. We also need to move `cookieList` from `App.js`:

```javascript
const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <div style={styles.cookie} key={cookie.id}>
      <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p>
    </div>
  ));
  return <div style={styles.list}>{cookieList}</div>;
};
```

15. We got another error: `'cookies' is not defined`.

16. We need to import `cookies` too.

```javascript
import React from "react";

// Data
import cookies from "../cookies";
```

17. Let's check our website, nothing changed. Which means that this worked!

## Step 2: React Developer Tools

1. But can we track our components in the browser? Yes we can, Google Chrome has an extension called [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). Install it.

2. To access those tools, right click on your web browser and click on `Inspect`. You'll see 2 tabs `Components` and `Profile` at the end of the tabs list with a purple React icon.

3. Click on `Components`, this is where you will see your components. As you can see, we have two components atm `App` and `CookieList`, and `App` is the parent component of `CookieList`.

## Step 3: CookieItem Component

1. Let's take a look at the JSX in the `.map` in `CookieList`. This should be its own component. Let's create it.

2. In `components`, we will create a file called `CookieItem.js`.

3. First we will import `React`.

```javascript
import React from "react";
```

4. Then, we will create our component function `CookieItem`.

```javascript
import React from "react";

const CookieItem = () => {};
```

5. Let's move in the cookie JSX from `CookieList.js`.

```javascript
const CookieItem = () => {
  return (
    <div style={styles.cookie} key={cookie.id}>
      <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p>
    </div>
  );
};
```

6. We also need to import `styles`.

```javascript
// Styling
import styles from "../styles";
```

7. Let's not forget to export the component at the bottom of the file.

```javascript
export default CookieItem;
```

8. In `CookieList.js`, import `CookieItem`.

```javascript
import React from "react";

// Components
import CookieItem from "./CookieItem";
```

8. We will render `CookieItem` in the `map` method.

```javascript
const cookieList = cookies.map((cookie) => <CookieItem />);
```

9. And we got an error! `'cookie' is not defined`. But how can we pass `cookie` from the `map` method in `CookieList` to `CookieItem`? Especially that `cookie` represents a different cookie through the iteration, every instance of `CookieItem` needs a different `cookie`!

## Step 4: Props

This is when we introduce a very powerful super power of React called `props`.

1. Let's comment out the JSX in `CookieItem` and `CookieList`, and `cookieList` in `CookieList` first to try things out.

2. Let's say I want to pass the string `Chocolate Cookie` to `CookieItem` and render it. We will treat it the same way we give a tag an attribute, a name and value. You're free to call it whatever you want, we called it `name` since it represents the name of the cookie, and the value will be our string `Chocolate Cookie`.

```javascript
return (
  <div style={styles.list}>
    {/* {cookieList} */}
    <CookieItem name="Chocolate Cookie" />
  </div>
);
```

This process is called passing `Chocolate Cookie` as a prop.

3. But how can we access `name` in `CookieItem`? Now is the time to make use of the React Dev Tools. Let's take a look at it. Click on `component`, then click on `CookieItem`. On the right side you'll see something called `props`, which is an object that has `name`.

4. Let's try to console log it in our component:

```javascript
const CookieItem = () => {
  console.log(props);
  return (
    <div style={styles.cookie} key={cookie.id}>
      {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p> */}
    </div>
  );
};
```

5. Ughh, the same error again! `'props' is not defined`.

6. Basically to use `props` we need to pass it as an argument to `CookieItem`.

```javascript
const CookieItem = (props) => {
  console.log(props);
};
```

7. And we got our `props` object! So we can render `Chocolote Cookie` now! Yaay!

```javascript
const CookieItem = () => {
  console.log(props);
  return (
    <div style={styles.cookie} key={cookie.id}>
      <p>{props.name}</p>
      {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p> */}
    </div>
  );
};
```

8. What if I want to pass more than one item as a prop, the price for example? Easy. You basically add it with a space between it and the other prop. Keep in mind that **all** values must be in curly brackets except strings, which are placed in quotations.

```jsx
<CookieItem name="Chocolate Cookie" price={6} />
```

9. Let's take a look at the dev tools. You'll see that price is added to the `props` object!

10. We can easily access it through props!

```javascript
const CookieItem = () => {
  console.log(props);
  return (
    <div style={styles.cookie} key={cookie.id}>
      <p>{props.name}</p>
      <p>{props.price}</p>
      {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p> */}
    </div>
  );
};
```

11. Let's pass an image as a prop as well!

```jsx
<CookieItem
  name="Chocolate Cookie"
  price={6}
  image="https://www.meals.com/imagesrecipes/144807lrg.jpg"
/>
```

12. And let's render it in `CookieItem`.

```javascript
const CookieItem = () => {
  console.log(props);
  return (
    <div style={styles.cookie} key={cookie.id}>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <img src={props.image} />
      {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p> */}
    </div>
  );
};
```

13. But our `<CookieList />` is becoming bulky. Don't worry, props are amazing, you can literally send **anything** through it. So let's create an object in `CookieList` and pass it as a prop to `CookieItem`!

```javascript
const CookieList = () => {
  // const cookieList = cookies.map((cookie) => (
  //   <CookieItem cookie={cookie} key={cookie.id} />
  // ));
  const cookie = {
    name: "Chocolate Cookie",
    price: 7,
    image: "https://www.meals.com/imagesrecipes/144807lrg.jpg",
  };
  return (
    <div style={styles.list}>
      {/* {cookieList} */}
      <CookieItem cookie={cookie} />
    </div>
  );
};
```

14. Let's check the dev tools. We'll see that there is an object called `cookies` inside `props`. So how can we access the properties of `cookie`? Through `props.cookie`.

```jsx
return (
  <div style={styles.cookie} key={cookie.id}>
    <p>{props.cookie.name}</p>
    <p>{props.cookie.price}</p>
    <img src={props.cookie.image} />
    {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p> */}
  </div>
);
```

15. It's annoying how `props.cookie` is repeated every time we need one of this fields. so we create a variable called `cookie` that is equal to the object `props.cookie`, it makes things much cleaner.

```javascript
const CookieItem = props => {
  const cookie = props.cookie;
  return (
    <div style={styles.cookie} key={cookie.id}>
      <p>{cookie.name}</p>
      <p>{cookie.price}</p>
      <img src={cookie.image} />
      {/* <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
        <p style={styles.text}>{cookie.name}</p>
        <p style={styles.text}>{cookie.price} KD</p> */}
    </div>
  );
```

16. I believe we can use our original code now!

```javascript
const CookieItem = props => {
  const cookie = props.cookie;
  return (
    <div style={styles.cookie} key={cookie.id}>
        <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
        <p style={styles.text}>{cookie.name}</p>
        <p style={styles.text}>{cookie.price} KD</p>
    </div>
  );
```

17. And we got our design back! But now we want our cookies from `cookies` array! So let's pass every cookie to a `CookieItem` instance.

```javascript
const CookieList = () => {
  return (
    <div style={styles.list}>
      <CookieItem cookie={cookies[0]} />
      <CookieItem cookie={cookies[1]} />
      <CookieItem cookie={cookies[2]} />
    </div>
  );
};
```

The problem is that how can my code know how many cookies I have in my array? That's why instead of re-rendering `CookieItem` manually, we use a `.map` which will create an array of `CookieItem` components with a different `cookie` for every element in the array.

18. So we will pass `cookie` -which represents a different cookie object in every iteration- as a prop.

```javascript
const CookieList = () => {
  const cookieList = cookies.map(cookie => (
    <CookieItem cookie={cookie} />
  ));
```

19. One last thing. The proper place for the key is passing it as a prop to `CookieItem`. Don't forget to remove it from the `CookieItem` component.

```javascript
const CookieList = () => {
  const cookieList = cookies.map(cookie => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
```

20. Keep in mind that `key` can't be used, it's for the code not for us. If you take a look at the dev tools, you'll see that `key` is not in the `props` object, so we have no access to it.

21. Our code looks much better now! How do you feel about it?

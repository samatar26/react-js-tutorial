### Some essential ES6 features
### Class
This is a class declaration
In order to add properties we need to use the constructor method.
The constructor method is run when we create a new instance of a class.

You don't put commas between our methods, you leave it blank.

Inside of our methods, the 'this' keyword binds to the new instance of your class.

```js
class Human {
  constructor() {
    this.height = 171;
  }
}

//You can also pass in parameters

class Human {
  constructor(height) {
    this.height = height;
    this.location = {
      x: 0,
      y: 0
    };
  }
    walk(x, y) {
      this.location.x += x;
      this.location.y += y;
  }
}

const samatar = new Human();

```

### extends keyword
We want the warrior class to use the human class as its base. With the extends keyworrd, the warrior class will inherit all of the properties of the human class.

We might want to add some new properties.

We have to call super first, in order to override the existing method or add on to the properties.

It calls the 'super constructor', which is the constructor in the Human class. Applies all of those properties and allows us to apply our new property.

The this keyword is not available in our extended class unless we call super first.

```js
class Warrior extends Human {
  constructor(){
    super()
    this.strength = 10;
  }
}
```

### static keyword
When you have a class in order to use a method, you have to instantiate  a new instance of that class. Sometimes you just want to get some data or access the class and get some information.

```js
class Human {
  constructor(height) {
    this.height = height;
    this.location = {
      x: 0,
      y: 0
    };
  }
    walk(x, y) {
      this.location.x += x;
      this.location.y += y;
  }
  static sayHello() {
    return 'Hi There';
  }
}

```

We don't have to instantiate a new human object to use the static method.

You can also use the get and set kewyords of objects so instead of calling it, it will always return the result of the function, e.g.:
```js
static get sayHello() {
  return 'Hi There';
}

console.log(Human.sayHello);

```

```js
console.log(Human.walk()) //this will give us an error
```


### Data Management in React
Data is handled through state, props and context (advanced feauture).

### State

state is available throug ```this.state``` which is initially equal to null.
You can set it in the constructor method. Whenever state changes on a component it will automatically rerender and only update the DOM if there are any changes. React manages a virtual dom for you, so when React renders all the components, the component tree it will look for changes on the snapshot it took before the update on the virtual dom. If there are any changes it will only then update the DOM.

This allows for our applications to become extremely fast.


```js
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Will"};
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Samatar"});
    }, 1000)
    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    )
  }
}

```

We change the state name after 1 second and even though we are rendering the entire layout, the only thing that changes is the state name. Enable paint flashing in developer tools to see exactly how the name changes.

So no matter how many components we change, only the element(s) affected will update.

State only gets used if a component has an internal value that only affects that component and not the rest of the app. E.g. only layout. Other than that, you want to use props, which get injected into every other component.

### Props

We'll inject a prop into header. Then in our Header.js we can access ``this.props``. It gets automatically converted into an object.

This is how we create multiple versions of a header that's different.

```js

export default class Layout extends React.Component {
  render(){
    const title = 'Welcome Samatar';
    return (
      <div>
        <Header title={title} />
        <Header title={"Other Title"} />
        <Footer />
      </div>
    );
  }
}


//Header.js
export default class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Title title={this.props.title}/>
    );
  }
}

//Title.js
export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

```

So our layout has passed in a different title to each header. Our header is just transparently passing them through to the title. Then our title is actually receiving that and spitting it out.

### JavaScript events and data changes in React

If you want update the tile as you type text in to an input field we first start by creating a method on the layout component.

ChangeTitle  will fire by us passing it in as a prop to header. When you pass functions/methods around you have to bind it to this or else if another component calls that method it will look for it on its own class and won't find it.

You should make sure that you add an onchange event when you give the input a value, or else React will render a read-only field. If you want it to be mutable you should use defaultValue.

```js
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    };
  }
  changeTitle(title){
    this.setState({title});
  }
  render(){
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}
```

Our data only lives on layout and whenever the data changes we rerender the entire application and only update the DOM if there are any changes.

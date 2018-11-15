# Mobx #

### Most important function ###

- Observables - A variable with a get/set function so it can be mutated further down the stream
- Action - Function that should mutate the state
- Computed - An expression that listens to a certain state change and returns an new value
- Reaction - Watches an observable for a state change and has the possibilty to trigger an action


### Data flow ###

- state => observables, computed => render
- state => observable changed => reaction => action
- action => state

*Actions can change the state*


### Config ### 

configure({
  enforceActions: 'observed' || 'always' || 'never' || 'strict' 
});

- 'Observed' means that we are not allowing Observables to be modified outside of mobx Actions
- 'Always' means that we are not allowing any state to be modified outside of mobx Actions

useStrict could work


### Resources ###

- https://www.youtube.com/watch?v=XGwuM_u7UeQ (first 15 minutes are good)
- https://github.com/mobxjs/mobx-react-boilerplate
- https://github.com/mobxjs/awesome-mobx
- https://blog.geekyants.com/structuring-a-react-native-mobx-application-the-right-way-c1e9d2ae0ff7 (mobx architecture)
- https://mobx.js.org/best/react-performance.html


### Quotes ###

> Actions should only, and always, be used on functions that modify state. Functions that just perform look-ups, filters etc should not be marked as actions; to allow MobX to track their invocations.

> Use many small components

> @observer components will track all values they use and re-render if any of them changes. So the smaller your components are, the smaller the change they have to re-render; it means that more parts of your user interface have the possibility to render independently of each other.

> Render lists in dedicated components (https://mobx.js.org/best/react-performance.html#render-lists-in-dedicated-components)

> When using mobx-react it is recommended to dereference values as late as possible. This is because MobX will re-render components that dereference observable values automatically. If this happens deeper in your component tree, less components have to re-render.

    Fast:

    <DisplayName person={person} />

    Slower:

    <DisplayName name={person.name} />


### Debug ###

https://github.com/jhen0409/react-native-debugger in combination with https://github.com/zalmoxisus/mobx-remotedev

    import remotedev from 'mobx-remotedev';

    @remotedev(/*{ config }*/)
    export default class appStore {
      // ...
    }
    

### Suggested architecture ###

Store => Container (smart component) => Presentational component (Dumb component)

#### Store example ####

    import { observable, computed, action } from "mobx";

    import TodoModel from "./TodoModel";

    export default class TodoListModel {
      @observable todos = [];

      @computed
      get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
      }

      @action
      addTodo(title) {
        this.todos.push(new TodoModel(title));
      }
    }
    
#### Container example ####

    import { observable } from "mobx";
    import { observer } from "mobx-react";

    import Todo from "./Todo";


    @observer
    class TodoList extends React.Component {
      @observable newTodoTitle = "";

      render() {
        return (
          <div>
            <ul>
              {this.props.store.todos.map(todo => (
                <Todo todo={todo} key={todo.id} />
              ))}
            </ul>
            Tasks left: {this.props.store.unfinishedTodoCount}
          </div>
        );
      }
    }


#### Presentational component example ####

    import { observer } from "mobx-react";

    const Todo = observer(({ todo }) => {
      return (
        <h2>
          {todo.title}
        </h2>
      );
    });

### Mobx vs Redux ###

#### Pros for mobx ####

- Performance
- Quick to code


#### Pros for Redux ####

- Easy to follow/read code
- Easy to test
- Large community

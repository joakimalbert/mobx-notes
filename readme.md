# Mobx #

## Most important function ##

Observables
Action
Computed
Reaction


## Data flow ##

state => observables, computed => render
state => observable changed => reaction => action

### actions can change the state ###

action => state


## Config ## 

configure({
  enforceActions: 'observed' || 'always' || 'never' || 'strict' 
});

useStrict could work

'Observed' means that we are not allowing Observables to be modified outside of mobx Actions
'Always' means that we are not allowing any state to be modified outside of mobx Actions


## Resources ##

https://www.youtube.com/watch?v=XGwuM_u7UeQ (first 15 minutes are good)
https://github.com/mobxjs/mobx-react-boilerplate


## Quotes ##

Actions should only, and always, be used on functions that modify state. Functions that just perform look-ups, filters etc should not be marked as actions; to allow MobX to track their invocations.


## Mobx vs Redux ##

### Pros for mobx ###

Performance
Quick to code


### Pros for Redux ###

Easy to follow/read code
Easy to test
Huge community

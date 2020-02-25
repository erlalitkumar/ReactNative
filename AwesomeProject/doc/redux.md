* Store - hots the state - only one state -global state
* Action - State can be modified using actions - Simple OBJECTS
* Dispatcher - Action needs to be sent by someone - known as dispatching ad action.
* Reducer - receives the action and modifies the state to give us a new state.
* >> pure functions
* >> only mandatory argument is the 'type'.
* Subscriber - listens for state change to update the UI (using connect)
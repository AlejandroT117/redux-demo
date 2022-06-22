export const messageReducer = (state = "Subscribe to SimpleLearn", action)=>{
    switch (action.type) {
      case "subscription":
        state = "Subscribe to SimpleLearn";
        return state;
      case "subscribed":
        state = "Thanks for subscribing";
        return state;
      default:
        return state
    }
}
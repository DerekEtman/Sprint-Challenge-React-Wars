# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

1. What does it mean to think in react?
    React Developers like to make everything a component and structure them in a hierarchy 
1. Describe state.
    State is an a part of an app ( an object)  that can change, This way data can switch without the page needing to reload
1. Describe props.
    Props stands for properties, these are bits of information that you can pass back and forth between components. This way you can use seperate components to different task all while inside a main component.
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
     When we pull in anything from outside the scope of a function anything can affect and change the outcome of the executed function. {useEffect} allows us to execute a side effect by passing in two paramaters
      const [example, setExample] = useState()
     . As we use SetExample it resets example.
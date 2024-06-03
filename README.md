# Basic React JS 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithms - Written in C++
- Caching - For Faster Builds & performance
- Image Optimization
- Minification
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Building - Support olders older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Removing unused code
- Different Dev and Production builds



## Food Ordering App
/**
 * - Header
 *  - Logo
 *  - Navigation Items
 * - Body Container
 *  - SearchRestaurants
 *  - RestaurantContainer
 *    - RestaurantCard
 * - Footer
 *  - Copyright
 *  - License
 *  - Address
 *
 *  */

We have 2 types of import & export process
1. with default
  const ComponentName = () => {return \<h1\>...\</h1\>}
  export default ComponentName
  (or) export default ComponentName = () => {return \<h1\>...\</h1\}
  import ComponentName from <folder-path/ComponentName>

1. without default
  const variable1 = <some-value>
  const variable2 = <some-value>
  export {variable1, variable2}

  (or)

  export const variable1 = <some-value>
  export const variable2 = <some-value>

  import { variable1 } from <folder-path/file-name where variables added>

  import { variable1,variable2 } from <folder-path/file-name where variables or functions added>

  <b>Curly braces</b> are mandatory for importing the non-default variables/components.
  Must not be used with the default variables/components.

## Hooks
1. Hooks always has to call inside component function, if try to call the hooks outside function it'll throw error
2. Don't create state variables or Don't call hooks inside the if-else blocks
3. 
## [useState](https://react.dev/reference/react/useState):
    A React hook that allows you to add state to functional components in order to manage and update data within the component.
## [useEffect](https://react.dev/reference/react/useEffect):
    This allows you to perform side effects in function components, such as data fetching, subscriptions, or manual DOM manipulations. It runs after every render by default, but can be optimized to run only when certain values have changed.
    Note: This'll trigger on first rendering
  1. If no dependency array is provided, then useEffect will call on every time the component renders
  2. If dependency array is empty([]) => then useEffect will trigger only for first rendering.
  3. If dependency array is have some values ([btnText, dataList]) => then useEffect will trigger on change of mentioned values(btnText, dataList).
```ruby
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.example.com/data');
          const data = await response.json();
          // Do something with the data
        } catch (error) {
          // Handle error
        }
      };

      fetchData();
    }, []);
```

## [useRef](https://react.dev/reference/react/useRef):
    It allows you to create a persistent reference to a value across renders, without causing re-renders when its value changes. It's commonly used to reference DOM elements and to store mutable variables in function components.


## [React Fiber](https://github.com/acdlite/react-fiber-architecture)
> Fiber is a new reconciliation engine in React 16.

    When state variable changes React reconciliation will re-create the new virtual DOM of that React Element - and compares with the old virtual DOM. If it find any difference  then it will re-render that perticular part in original DOM and ignore the remaining unchanged part.

--------------
## [React Router](https://reactrouter.com/en/main) - react-router-dom package

  - createBrowserRouter()
    - This takes the array of objects with the format as{path:'/', element: \<App\/\>, errorElement(optional):\<Error\/\>, children(optional): [{path: '/about', element: \<About/\>}]} input, and generates react element
  - RouterProvider
    - Above generate react element passed to this compoent and sets on root render
  - Outlet
  - useRouteError
  - Link

* 'react-router-dom's Link:
    > anchor(\<a href=""\>) tag will reload the whole page again to the given href link, where 'react-router-dom's Link component(\<Link to=""\>) will refresh the virtual DOM and load the changed content by changing the URL without refreshing the whole page.

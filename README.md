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

  useState:
    A React hook that allows you to add state to functional components in order to manage and update data within the component.
  useEffect:
    is a hook in React that allows you to perform side effects in function components, such as data fetching, subscriptions, or manual DOM manipulations. It runs after every render by default, but can be optimized to run only when certain values have changed.
    
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
    

  useRef:
    It allows you to create a persistent reference to a value across renders, without causing re-renders when its value changes. It's commonly used to reference DOM elements and to store mutable variables in function components.
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // new piece of state
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // we define a new callback for the event just so we can reuse it
    // both for adding and removing the event listener

    // whenever the location changes, we update the pathname
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // clean up function
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
  // same as:
  return window.location.pathname === path ? children : null;
};

export default Route;

import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      // the browser does its normal thing (not all the code we wrote below)
      // navigating in a new tab to the link
      return;
    }

    event.preventDefault(); // prevent refresh
    window.history.pushState({}, "", href);

    // to tell the Route component that the url has just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

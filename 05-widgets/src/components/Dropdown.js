import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  // toggle CSS classes
  const [open, setOpen] = useState(false);
  // assign a reference
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // check if the element that is clicked on is inside of our component,
      // if yes, just return and not do anything
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // check if the currently selected item = option we are currently iterating over
    if (option.value === selected.value) {
      return null; // <- don't render anything
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {/* whenever someone clicks, we call onSelectedChange with the option
        that we are rendering */}
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          // on click set to the opposite of the current value open (true or false)
          onClick={() => setOpen(!open)}
          // if open=true, add 'visible active', if not, empty string
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          {/* // if open=true, add 'visible active', if not, empty string */}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

import React from "react";

import "./Hello.css";

export function Hello({ name }) {
  return <h1 className="welcome">Welcome, {name}!</h1>;
}

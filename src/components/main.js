import React from "react";
import {Link} from "gatsby"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
   <Link to="/about">关于我们</Link>
    {children}
  </div>
)

import * as React from "react";
import { Link } from "gatsby";
import { Button, useColorMode } from "theme-ui";

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16  
}

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <main>
      <ul>
        <li><Link style={linkStyle} to="/">With Head - Will Not Work</Link></li>      
        <li><Link style={linkStyle} to="/without-head">Without Head - Will Work</Link></li>
        <li><Link style={linkStyle} to="/with-head-with-workaround">With Head With Workaround - Will Work</Link></li>
      </ul>

      <div>
          <h3>Make sure to fully refresh page after changing pages!</h3>
          <p>Changing the color mode here will not work because of Head API</p>
          <p>Current Color Mode: {colorMode}</p>
          <Button onClick={ () => {
            setColorMode(isDark ? `default` : `dark`);
            //document.documentElement.classList.value = `theme-ui-${isDark ? `__default` : `dark`}`
          }}>
            Toggle {isDark ? 'Default' : 'Dark'}
          </Button>      
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
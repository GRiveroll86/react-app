import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  heading: {
    background: "red",
  },
  title: {
    fontSize: "100px"
  }
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={styles.heading}>
      <h1 style={styles.title}>Welcome</h1>
    </header>
  );
}

export default Header;

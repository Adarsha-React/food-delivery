import React, { useState } from "react";

const Header = ({ title }) => {
  const [text, setText] = useState(null);
  return <div>Header - {text}</div>;
};

export default Header;

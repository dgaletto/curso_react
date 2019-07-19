import * as React from "react";

interface IHeaderProps {
  title: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ title }) => (
  <header>
    <h1 className="text-center">{title}</h1>
  </header>
);

export default Header;

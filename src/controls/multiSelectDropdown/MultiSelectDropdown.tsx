import { MouseEvent, useEffect, useState } from "react";
import "./styles.css";

const menu = [
  {
    name: "Profile",
    icon: "account_circle",
  },
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "Logout",
    icon: "logout",
  },
];

const MenuButton = ({ icon, name }: { icon: string; name: string }) => (
  <button className="menu-button">
    <span className="material-symbols-outlined">{icon}</span>
    <span className="menu-button-text">{name}</span>
  </button>
);

export const MultiSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {menu.map((menuItem) => (
          <MenuButton
            key={menuItem.name}
            icon={menuItem.icon}
            name={menuItem.name}
          />
        ))}
      </div>
      <button onClick={handleClick}>
        Actions
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "expand_more"}
        </span>
      </button>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import NavItem from '@plone/volto/components/theme/Navigation/NavItem';

import './dropdownmenu.css';

const NavItems = ({ items, lang, closeMenu }) => {
  const handleItemClick = (e, { name }) => {
    closeMenu();
    var dropdownmenu = document.getElementsByClassName(
      'hamburger hamburger--spin is-active',
    );
    dropdownmenu.length > 0 && dropdownmenu[0].classList.remove('is-active');
    var dropdownmenuitems = document.getElementsByClassName('mobile-menu');
    dropdownmenuitems.length > 0 &&
      dropdownmenuitems[0].classList.remove('mobile-menu-enter-done');
    dropdownmenuitems.length > 0 &&
      dropdownmenuitems[0].classList.add(
        'mobile-menu-exit',
        'mobile-menu-exit-active',
      );
  };

  return (
    <>
      {items.map((item) =>
        item && item.items && item.items.length > 0 ? (
          <Dropdown
            text={item.title}
            className="item"
            id="dropdown-menu"
            key={item.url}
          >
            <Dropdown.Menu key={item.url}>
              {item.items.map((dropdownitem) => (
                <Dropdown.Item
                  onClick={handleItemClick}
                  value={dropdownitem.title}
                  text={dropdownitem.title}
                  key={dropdownitem.url}
                  // closeOnChange={true}
                  as={Link}
                  to={dropdownitem.url === '' ? '/' : dropdownitem.url}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavItem item={item} lang={lang} key={item.url} />
        ),
      )}
    </>
  );
};

export default NavItems;

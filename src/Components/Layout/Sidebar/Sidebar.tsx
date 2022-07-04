import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Collapse,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useStyles } from "../LayoutStyles";
import MenuItemList from "./MenuItemList";
// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  permission: PropTypes.array,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
  className: PropTypes.any,
};
type AppMenuItemProp = PropTypes.InferProps<typeof AppMenuItemPropTypes>;
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemProp, "items">;

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  items?: any;
  search: string;
  openSubMenu: boolean;
  setOpenSubMenu: Dispatch<SetStateAction<boolean>>;
};
const Sidebar: React.FC<AppMenuItemProps> = (props) => {
  let showSubMenu: any;
  const { name, link, Icon, items, className, search = "" } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const isSuperuser = true;
  const MenuItemRoot = (
    <>
      {search === "" ? (
        <MenuItemList
          className={className}
          link={link}
          onClick={() => {
            setOpenSubMenu(!openSubMenu);
          }}
        >
          {/* For Displaying of an icon in sidebar*/}
          {Icon && (
            <ListItemIcon className={classes.Iconbg}>
              <Icon className={classes.SidebarIcon} />
            </ListItemIcon>
          )}
          {/* for displaying of name in sidebar */}
          {<ListItemText primary={name} />}
          {/* Display the expand menu if the item has children */}
          {isExpandable && !openSubMenu && <ExpandMoreIcon />}
          {isExpandable && openSubMenu && <ExpandLessIcon />}
        </MenuItemList>
      ) : (
        items?.map((item: any, index: number) => {
          const { name } = item;
          return (
            <Fragment key={index}>
              {name?.toLowerCase().includes(search.toLowerCase()) && (
                <Sidebar
                  {...item}
                  key={index}
                  className={classes.subMenuPadding}
                />
              )}
            </Fragment>
          );
        })
      )}
    </>
  );
  // for child
  const MenuItemChildren =
    search === "" ? (
      isExpandable ? (
        <Collapse in={openSubMenu}>
          <Divider />
          <List component="div" className={classes.sidebarList}>
            {items.map((item: any, index: number) => {
              const { permission } = item;
              return isSuperuser ? (
                <Fragment key={index}>
                  <Sidebar
                    {...item}
                    key={index}
                    className={classes.subMenuPadding}
                  />
                </Fragment>
              ) : (
                <Fragment key={index}></Fragment>
              );
            })}
          </List>
        </Collapse>
      ) : null
    ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

export default Sidebar;

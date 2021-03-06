import ListItem from "@mui/material/ListItem";
import { forwardRef, memo, MouseEvent, ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";

export interface AppMenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props  allows null value
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}
const MenuItemList: FC<AppMenuItemComponentProps> = (props) => {
  const { className, onClick, link, children } = props;
  // If link is not set return the ordinary ListItem
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a ListItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: any, ref: any) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={link}
    />
  );
};

export default memo(MenuItemList);

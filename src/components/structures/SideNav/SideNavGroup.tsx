import { clsx } from "clsx";

import styles from "./sideNavGroup.module.css";

export default function SideNavGroup({ children, title, ...props }: any) {
  return (
    <div className={clsx(styles.root)} {...props}>
      {title && <div className={clsx(styles.title)}>{title}</div>}
      {children}
    </div>
  );
}

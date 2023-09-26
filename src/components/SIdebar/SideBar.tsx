import styles from "./SideBar.module.scss";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
	return <aside className={styles.sideBar}>side bar</aside>;
};

export default SideBar;

import styles from "./SideBar.module.scss";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
	return (
		<aside className={styles.sideBar}>
			<select>
				<option hidden>country</option>
			</select>
			<p>current temperature</p>
			<p>wind speed</p>
			<hr />
			<h3>the next days forecast</h3>

			<button>5 days</button>
			<button>14 days</button>
			<button>30 days</button>

			<p>Day of the week</p>
		</aside>
	);
};

export default SideBar;

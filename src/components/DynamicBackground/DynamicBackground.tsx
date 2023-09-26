import cloudBG from "./../../assets/cloud.jpeg";
import stormCloudBG from "./../../assets/StormСloud.webp";

interface DynamicBackgroundProps {}

const DynamicBackground: React.FC<DynamicBackgroundProps> = () => {
	const backgroundImage = cloudBG;
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundImage.src})`,
			}}></div>
	);
};

export default DynamicBackground;

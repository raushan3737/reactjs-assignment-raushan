import { Avatar } from "@mui/material";

interface CustomAvatarProps {
  avatarImage: string;
  style?: React.CSSProperties;
  variant?:	'circular'| 'rounded'| 'square';
}
const CustomAvatar = (props: CustomAvatarProps) => {
  const { avatarImage, style, variant } = props;
  return <Avatar style={style} src={avatarImage}  variant={variant}/>;
};

export default CustomAvatar;
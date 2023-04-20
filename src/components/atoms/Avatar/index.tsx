import { Avatar as MuiAvatar, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface AvatarProps {
  avatarIcon: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "circular" | "rounded" | "square";
}
const Avatar = (props: AvatarProps) => {
  const { avatarIcon, style, variant } = props;
  return (
    <ThemeProvider theme={theme}>
      <MuiAvatar
        style={style}
        children={avatarIcon}
        variant={variant}
        alt="Loading"
      />
    </ThemeProvider>
  );
};

export default Avatar;

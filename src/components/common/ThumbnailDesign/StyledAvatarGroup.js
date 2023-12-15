import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';

const StyledAvatarGroup = styled(AvatarGroup)(() => ({
  [`& .${avatarGroupClasses.avatar}`]: {
    width: 20,
    height: 20,
    fontSize: '1rem',
    color: 'var(--neutrals-grey-4)',
    backgroundColor: 'var(--neutrals-grey-7)',
  },
}));

export default StyledAvatarGroup;

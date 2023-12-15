import { styled } from '@mui/material/styles';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

const StyledTreeItemRoot = styled(TreeItem)(() => {
  // const {} = props;
  return {
    fontFamily: 'var(--font-family) !important',

    [`&.${treeItemClasses.root}+.${treeItemClasses.root}`]: {
      marginTop: 'var(--spacing-2)',
    },
    [`& .${treeItemClasses.iconContainer}`]: {
      display: 'none !important',
    },
    [`& .${treeItemClasses.group}`]: {
      borderLeft: '1px solid var(--neutrals-grey-6) !important',
      // paddingLeft: 'var(--spacing-3)',
    },
    [`& .${treeItemClasses.content}`]: {
      padding: 'var(--spacing-2) var(--spacing)',
      maxHeight: 32,
      borderRadius: 'var(--spacing-1)',
      // marginTop: 'var(--spacing)',
      // marginBottom: 'var(--spacing)',

      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
      },
    },

    [`& .${treeItemClasses.selected}`]: {
      backgroundColor: 'rgba(0,0,0,0.1) !important',
    },

    [`& .${treeItemClasses.expanded}`]: {
      backgroundColor: 'rgba(0,0,0,0.1) !important',
    },
    [`& .${treeItemClasses.label}`]: {
      fontFamily: 'var(--font-family) !important',
    },
  };
});

export default StyledTreeItemRoot;

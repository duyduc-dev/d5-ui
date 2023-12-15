import React from 'react';
import { styled } from '@mui/material/styles';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

const TreeItemComponent = (props) => {
  const { isOverlay, ...restProps } = props;
  return <TreeItem data-overlay={isOverlay} {...restProps} />;
};

const StyledTreeItem = styled(TreeItemComponent)(({ isOverlay }) => ({
  [`&.${treeItemClasses.root}`]: {
    // borderLeft: '1px solid var(--neutrals-grey-6)',
    paddingLeft: 'var(--spacing-3)',
    fontFamily: 'var(--font-family)',
  },

  [`& .${treeItemClasses.group}`]: {
    borderLeft: '1px solid var(--neutrals-grey-6) !important',
    // paddingLeft: 'var(--spacing-3)',
  },

  [`& .${treeItemClasses.content}`]: {
    // marginLeft: 'var(--spacing-2)',
    maxHeight: 32,
    marginTop: 'var(--spacing)',
    // paddingTop: 'var(--spacing-2)',
    // paddingBottom: 'var(--spacing-2)',

    '&:hover': {
      backgroundColor: isOverlay ? 'rgba(0,0,0,0.05)' : '#00000000',
      color: 'var(--neutrals-grey-1)',
    },
  },

  [`& .${treeItemClasses.selected}`]: {
    backgroundColor: isOverlay ? 'rgba(0,0,0,0.1) !important' : '#00000000 !important',
  },

  [`& .${treeItemClasses.expanded}`]: {
    backgroundColor: isOverlay ? 'rgba(0,0,0,0.1) !important' : '#00000000 !important',
  },

  [`& .${treeItemClasses.label}`]: {
    fontFamily: 'var(--font-family) !important',
  },
}));
export default StyledTreeItem;

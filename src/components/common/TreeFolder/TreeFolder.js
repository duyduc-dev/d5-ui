import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TypeOfValue } from '@constants';
import { Divider } from '@mui/material';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { getDepthNodeId, getLevelTreeFolder, typeOf } from '@utils/helper';

import useLeftBarStore from '@/store/useLeftBarStore';

import { getCurrentRootMenuId, getItemForRoot } from './factory/treeFolderFactory';
import StyledTreeItem from './StyledTreeItem';
import StyledTreeItemRoot from './StyledTreeItemRoot';
import TreeLabel from './TreeLabel';

import styles from './style.module.scss';

const TreeFolder = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    menuExpanded,
    rootMenu,
    currentRootId,
    setSelectedMenu,
    setCurrentRootMenuId,
    setMenuExpanded,
    setTreeItemForRoot,
  } = useLeftBarStore();

  const handleClickNode = (id) => {
    if (menuExpanded.includes(id)) {
      setMenuExpanded(menuExpanded.filter((item) => item !== id));
    } else if (id.includes('root')) {
      setMenuExpanded([id]);
    } else {
      const filterFolder = menuExpanded.filter(
        (item) =>
          getLevelTreeFolder(item, getDepthNodeId(item)) !== getLevelTreeFolder(id, getDepthNodeId(id)) &&
          !item.startsWith(getLevelTreeFolder(id, getDepthNodeId(id)))
      );
      setMenuExpanded([...filterFolder, id]);
    }
  };

  const handleClickMenuItem = (menu) => {
    setSelectedMenu(menu.id);
    setCurrentRootMenuId(menu.id.includes('ROOT') ? menu.id : '');
    typeOf(menu.link) === TypeOfValue.String && navigate(`/${menu.link}`);
  };

  useEffect(() => {
    const trees = getItemForRoot(currentRootId);
    setTreeItemForRoot(currentRootId, trees);
  }, [currentRootId]);

  const createTreeFolder = useCallback(
    (item, parentIndex) => {
      return (
        <>
          {item.map((child, index) => {
            const nodeId = `${parentIndex}.${index}+${child.label}-child`;
            const isExpanded = menuExpanded.includes(nodeId);
            return (
              <StyledTreeItem
                nodeId={nodeId}
                key={`${index}-${child.label}-child`}
                isOverlay={child.overlay}
                onClick={() => handleClickMenuItem(child)}
                label={
                  <TreeLabel
                    title={child.label}
                    icon={child.icon}
                    hiddenIconOpen={!child.children?.length}
                    open={isExpanded}
                  />
                }
              >
                {child.children && createTreeFolder(child.children, `${parentIndex}.${index}`)}
              </StyledTreeItem>
            );
          })}
        </>
      );
    },
    [menuExpanded]
  );

  useEffect(() => {
    // setRootMenu(getRootMenu());
    setCurrentRootMenuId(getCurrentRootMenuId(pathname));
  }, [pathname]);

  return (
    <TreeView expanded={menuExpanded} onNodeSelect={(_, nodeId) => handleClickNode(nodeId)}>
      {rootMenu.map((itemFolder, index) => {
        if (itemFolder.separator)
          return (
            <div key={`${index}-root-${itemFolder.label}`} className={styles.divider}>
              <Divider />
            </div>
          );

        const nodeID = `root-${itemFolder.label}-${index}`;
        return (
          <StyledTreeItemRoot
            key={`${index}-root-${itemFolder.label}`}
            nodeId={nodeID}
            onClick={() => handleClickMenuItem(itemFolder)}
            label={
              <TreeLabel
                title={itemFolder.label}
                icon={itemFolder.icon}
                open={menuExpanded.includes(nodeID)}
                hiddenIconOpen
              />
            }
          >
            {itemFolder.children && createTreeFolder(itemFolder.children, `${index}`)}
          </StyledTreeItemRoot>
        );
      })}
    </TreeView>
  );
};

export default TreeFolder;

import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa6';
import { VscNewFolder, VscSymbolColor } from 'react-icons/vsc';
import Breadcrumbs from '@components/common/Breadcrumbs';
import { ButtonDark, ButtonOverlay } from '@components/common/Button';
import { ColorPickerModal } from '@components/common/ColorPicker';
import FolderGrid from '@components/common/FolderGrid';
import NewFolderModal from '@components/common/NewFolderModal';
import Popup from '@components/common/Popup';
import { ContentContainer } from '@components/layouts/BaseLayout';
import { AppRouter } from '@constants';
import { ELanguageResources } from '@i18n';

import useAssetsColorsStore from '../store/useAssetsColorsStore';

import styles from './style.module.scss';

const ColorsPage = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  const inputNameFolder = useRef();
  const { colors, folders, addNewFolderColors } = useAssetsColorsStore();

  const [isVisiblePopupNewColor, setIsVisiblePopupNewColor] = useState(false);
  const [isOpenModalCreateFolder, setIsOpenModalCreateFolder] = useState(false);
  const [isOpenModalColorPicker, setIsOpenModalColorPicker] = useState(false);

  const handleTogglePopupNewColor = () => setIsVisiblePopupNewColor((p) => !p);
  const handleClosePopupNewColor = () => setIsVisiblePopupNewColor(false);

  const handleOpenModalCreateFolder = () => {
    setIsOpenModalCreateFolder(true);
    requestIdleCallback(() => {
      inputNameFolder.current?.focus();
      inputNameFolder.current?.select();
    });
  };
  const handleCloseModalCreateFolder = () => {
    setIsOpenModalCreateFolder(false);
  };
  const handleClickCreateFolder = (text) => {
    addNewFolderColors({ title: text });
  };

  const render = useCallback(
    () => (
      <div className={styles.popupNewColor}>
        <ButtonOverlay onClick={handleOpenModalCreateFolder} overlayHover className={styles.optionItem}>
          <VscNewFolder size={16} />
          {t`newFolder`}
        </ButtonOverlay>
        <ButtonOverlay onClick={() => setIsOpenModalColorPicker(true)} overlayHover className={styles.optionItem}>
          <VscSymbolColor size={16} />
          {t`newColor`}
        </ButtonOverlay>
      </div>
    ),
    []
  );

  return (
    <ContentContainer>
      <Breadcrumbs
        data={[
          { title: t`home`, link: AppRouter.HOME },
          { title: t`assets`, link: AppRouter.ASSETS_PAGE },
          { title: t`colors`, link: AppRouter.ASSETS_COLORS, active: true },
        ]}
      />
      <div className={styles.container}>
        <div>
          <Popup
            offset={[0, 10]}
            onClickOutside={handleClosePopupNewColor}
            visible={isVisiblePopupNewColor}
            placement="bottom-start"
            render={render}
          >
            <ButtonDark onClick={handleTogglePopupNewColor}>
              <FaPlus />
              {t`newColor`}
            </ButtonDark>
          </Popup>
        </div>
        <div className={styles.bodyContainer}>
          <h3 className={styles.foldersLabel}>{t`folders`}</h3>
          <div className={styles.folderContainer}>
            {folders.map((fol, index) => (
              <FolderGrid key={`${index}`} title={fol.title} />
            ))}
          </div>
          <h3 className={styles.foldersLabel}>{t`colors`}</h3>
          <div className={styles.folderContainer}>
            {colors.map((fol, index) => (
              <FolderGrid key={`${index}`} title={fol.title} />
            ))}
          </div>
        </div>
      </div>
      <NewFolderModal
        open={isOpenModalCreateFolder}
        onClose={handleCloseModalCreateFolder}
        onClickCreateFolder={handleClickCreateFolder}
      />
      <ColorPickerModal open={isOpenModalColorPicker} onClose={() => setIsOpenModalColorPicker(false)} />
    </ContentContainer>
  );
};

export default ColorsPage;

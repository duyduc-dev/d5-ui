import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ELanguageResources } from '@i18n';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Colorfull from '@uiw/react-color-colorful';
import { hexToRgb, rgbaToHexArgs, rgbToObject } from '@utils/helper';

import { ButtonDark, ButtonOverlay } from '../Button';

import StyledSlider from './StyledSlider';

import styles from './style.module.scss';

const defaultColor = '#7532f9';
const defaultRgbColor = rgbToObject(hexToRgb(defaultColor));

const ColorPickerModal = ({ open = false, onClose = () => {}, onClickCreate = () => {} }) => {
  const { t } = useTranslation(ELanguageResources.Common);
  const [colors, setColors] = useState(defaultColor);
  const [valueInputColor, setValueInputColor] = useState(defaultColor);
  const [rgbColor, setRgbColor] = useState({
    r: defaultRgbColor.red,
    g: defaultRgbColor.green,
    b: defaultRgbColor.blue,
  });

  const handleChangeColor = ({ hex }) => {
    setColors(hex);
    setValueInputColor(hex);
    const _rgbColor = rgbToObject(hexToRgb(hex));
    setRgbColor({
      r: +_rgbColor.red ?? 0,
      g: +_rgbColor.green ?? 0,
      b: +_rgbColor.blue ?? 0,
    });
  };

  const handleChangeInputColor = (e) => {
    const value = e.target.value;
    setValueInputColor(value);
    if (value.startsWith('#')) {
      setColors(value);
      const _rgbColor = rgbToObject(hexToRgb(value));
      setRgbColor({
        r: +_rgbColor.red ?? 0,
        g: +_rgbColor.green ?? 0,
        b: +_rgbColor.blue ?? 0,
      });
    } else if (!value.includes('#')) {
      setValueInputColor('#');
    }
  };

  const handleColorSliderChange = ({ r = rgbColor.r, g = rgbColor.g, b = rgbColor.b }) => {
    const _rgbColor = rgbaToHexArgs(r, g, b, 1, true);
    setRgbColor((prev) => ({
      r: r || prev.r,
      g: g || prev.g,
      b: b || prev.b,
    }));
    setColors(_rgbColor);
    setValueInputColor(_rgbColor);
  };

  return (
    <Modal
      sx={{ zIndex: 9999 }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      onClose={onClose}
      open={open}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={open}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h3 className={styles.titleCreateNewColor}>{t`createNewColor`}</h3>
            <div className={styles.bodyColorPicker}>
              <Colorfull color={colors} disableAlpha onChange={handleChangeColor} />
              <div>
                <div className={styles.hexSection}>
                  <p>{t`hex`}</p>
                  <input value={valueInputColor} onChange={handleChangeInputColor} className={styles.inputHex} />
                </div>
                <div className={styles.rgbSection}>
                  <p>{t`RGB`}</p>
                  <div className={styles.sliderContainer}>
                    <StyledSlider
                      min={0}
                      value={+rgbColor.r}
                      bgLabel={'#ff0000'}
                      valueLabelDisplay="auto"
                      max={255}
                      onChange={(_, value) => handleColorSliderChange({ r: value })}
                      color="error"
                    />
                    <StyledSlider
                      value={+rgbColor.g}
                      valueLabelDisplay="auto"
                      min={0}
                      max={255}
                      onChange={(_, value) => handleColorSliderChange({ g: value })}
                      color="success"
                    />
                    <StyledSlider
                      value={+rgbColor.b}
                      bgLabel={'#0095f6'}
                      valueLabelDisplay="auto"
                      min={0}
                      max={255}
                      onChange={(_, value) => handleColorSliderChange({ b: value })}
                      color="info"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <ButtonOverlay overlayHover onClick={onClose}>{t`cancel`}</ButtonOverlay>
              <ButtonDark onClick={() => onClickCreate(colors)}>{t`create`}</ButtonDark>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default memo(ColorPickerModal);

import styled, { CSSProperties } from 'styled-components';
import { RatioType, PositionType } from '../../types';

export type ImageProps = {
  url: string;
  width: number;
  ratio?: RatioType;
  scale?: 'cover' | 'contain' | 'auto';
  imagePosition?: PositionType;
  overrideCss?: CSSProperties;
  useRem?: boolean;
};

/**
 * @param url string
 * @param width number
 * @param ratio '1_1' | '3_4' | '9_16' | '4_3' | '16_9'
 * @param scale 'cover' | 'contain' | 'auto'
 * @param imagePosition 'bottom' | 'top' | 'center' | 'left' | 'right'
 * @param overrideCss object // css object type
 * @param useRem boolean // default value is false, it means using 'px' */
function Image({
  url,
  width,
  ratio = '3_4',
  scale = 'cover',
  imagePosition = 'center',
  overrideCss,
  useRem = false,
}: ImageProps) {
  const rate = ratio.split('_');
  const height = (width * Number(rate[1])) / Number(rate[0]);
  return (
    <StyledImage
      $imageUrl={url}
      width={width}
      height={height}
      scale={scale}
      $imagePosition={imagePosition}
      $useRem={useRem}
      style={overrideCss}
    />
  );
}

const StyledImage = styled.div<{
  $imageUrl: string;
  scale: 'cover' | 'contain' | 'auto';
  $imagePosition: PositionType;
  $useRem: boolean;
  width: number;
  height: number;
}>`
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-position: ${({ $imagePosition }) => $imagePosition};
  background-repeat: no-repeat;
  background-size: ${({ scale }) => scale};
  overflow: hidden;
  width: ${({ width, $useRem }) => `${width}${$useRem ? 'rem' : 'px'}`};
  height: ${({ height, $useRem }) => `${height}${$useRem ? 'rem' : 'px'}`};
`;

export default Image;

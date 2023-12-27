import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { RatioType, PositionType, spacing } from '../../types';

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
 * @param width number (px || rem)
 * @param ratio '1_1' | '3_4' | '9_16' | '4_3' | '16_9'
 * @param scale 'cover' | 'contain' | 'auto'
 * @param imagePosition 'bottom' | 'top' | 'center' | 'left' | 'right'
 * @param overrideCss css object type
 * @param useRem default value is false, it means using 'px' */
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
    <ThemeProvider theme={spacing}>
      <StyledImage
        $url={url}
        $width={width}
        $height={height}
        $ratio={ratio}
        $scale={scale}
        $imagePosition={imagePosition}
        $useRem={useRem}
        style={overrideCss}
      />
    </ThemeProvider>
  );
}

const StyledImage = styled.div<{
  $url: string;
  $ratio: RatioType;
  $scale: 'cover' | 'contain' | 'auto';
  $imagePosition: PositionType;
  $useRem: boolean;
  $width: number;
  $height: number;
}>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-position: ${({ $imagePosition }) => $imagePosition};
  background-repeat: no-repeat;
  background-size: ${({ $scale }) => $scale};
  overflow: hidden;
  width: ${({ $width, $useRem }) => `${$width}${$useRem ? 'rem' : 'px'}`};
  height: ${({ $height, $useRem }) => `${$height}${$useRem ? 'rem' : 'px'}`};
`;

export default Image;
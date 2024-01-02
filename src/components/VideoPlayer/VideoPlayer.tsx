import { VideoHTMLAttributes, useEffect, useRef } from 'react';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { RatioType, spacing } from '../../types';

export type VideoProps = {
  src: string;
  width: number;
  type?: 'video/mp4' | 'video/ogg' | 'video/webm' | 'video/avi';
  ratio?: RatioType;
  poster?: string;
  overrideAttribute?: VideoHTMLAttributes<HTMLVideoElement>;
  overrideCss?: CSSProperties;
};

/**
 * @param src string
 * @param width number (px || rem)
 * @param type 'video/mp4' | 'video/ogg' | 'video/webm' | 'video/avi'
 * @param ratio '1_1' | '3_4' | '9_16' | '4_3' | '16_9'
 * @param poster string
 * @param overrideAttribute, video attribute object type
 * @param overrideCss css object type
 */
function VideoPlayer({
  src,
  width,
  type = 'video/mp4',
  ratio = '16_9',
  poster,
  overrideAttribute,
  overrideCss,
}: VideoProps) {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const rate = ratio.split('_');
  const height = (width * Number(rate[1])) / Number(rate[0]);

  useEffect(() => {
    playerRef.current?.load();
  }, [src]);

  return (
    <ThemeProvider theme={spacing}>
      <StyledVideo $width={width} $height={height} $ratio={ratio} style={overrideCss}>
        <video
          ref={playerRef}
          controls
          width={width}
          height={height}
          playsInline
          poster={poster}
          autoPlay
          muted
          {...overrideAttribute}>
          <source src={src} type={type} />
          <track kind="captions" />
        </video>
      </StyledVideo>
    </ThemeProvider>
  );
}

const StyledVideo = styled.div<{
  $ratio: RatioType;
  $width: number;
  $height: number;
}>`
  background-color: black;
  overflow: hidden;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;

export default VideoPlayer;

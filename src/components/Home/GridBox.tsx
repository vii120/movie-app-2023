import styled from 'styled-components'

export const GridBox = ({
  className,
  imageSrc,
  title,
}: {
  className?: string
  imageSrc?: string
  title?: string
}) => {
  return (
    <GridBoxWrapper className={className}>
      <GridBoxShadow />
      <GridImageWrapper>
        <GridBackground style={{ backgroundImage: `url(${imageSrc})` }} />
        <GridImage src={imageSrc} alt={title} />
      </GridImageWrapper>
    </GridBoxWrapper>
  )
}

const GridBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: inherit;
  background-image: linear-gradient(45deg, var(--secondary-color), #f1a0c8);
  filter: blur(10px);
  z-index: -1;
  pointer-events: none;

  opacity: 0;
  transition: all 0.3s;
`
const GridBoxWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  &:hover {
    ${GridBoxShadow} {
      opacity: 1;
    }
  }
`

const GridImageWrapper = styled.div`
  height: 100%;
  border-radius: inherit;
  background-color: var(--primary-bg);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GridImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const GridBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: no-repeat center / cover;
  opacity: 0.5;
  filter: blur(5px) brightness(0.8);
`

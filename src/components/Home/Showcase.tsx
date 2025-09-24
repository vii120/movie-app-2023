import { useEffect } from 'react'
import styled from 'styled-components'
import { GridBox } from './GridBox'
import { useMovieStore } from '@/lib/store'
import { getImgFullPath } from '@/lib/utils/helpers'

export const Showcase = () => {
  const { movieList } = useMovieStore()

  return (
    <Container>
      {!!movieList.length && (
        <>
          <GridBox1
            imageSrc={getImgFullPath(movieList[0].poster_path)}
            title={movieList[0].title}
          ></GridBox1>
          <GridBox2
            imageSrc={getImgFullPath(movieList[1].poster_path)}
            title={movieList[1].title}
          ></GridBox2>
          <GridBox3
            imageSrc={getImgFullPath(movieList[2].poster_path)}
            title={movieList[2].title}
          ></GridBox3>
          <GridBox4
            imageSrc={getImgFullPath(movieList[3].poster_path)}
            title={movieList[3].title}
          ></GridBox4>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 36px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 150px);
`

const GridBox1 = styled(GridBox)`
  grid-area: 1 / 1 / span 2 / span 2;
  img {
    mask: linear-gradient(90deg, transparent, #fff 20% 80%, transparent);
  }
`
const GridBox2 = styled(GridBox)`
  grid-area: 1 / 3 / span 3 / span 1;
  img {
    mask: linear-gradient(transparent, #fff 20% 80%, transparent);
  }
`
const GridBox3 = styled(GridBox)`
  grid-area: 3 / 1 / span 3 / span 2;
  img {
    mask: linear-gradient(90deg, transparent, #fff 20% 80%, transparent);
  }
`
const GridBox4 = styled(GridBox)`
  grid-area: 4 / 3 / span 2 / span 1;
  img {
    mask: linear-gradient(90deg, transparent, #fff 20% 80%, transparent);
  }
`

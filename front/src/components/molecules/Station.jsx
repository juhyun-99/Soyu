import styled from 'styled-components';
import font from '../../styles/font';
import StationItem from '../atoms/StationItem';

function Station({ data }) {
  return (
    <article>
      <STitle>{data.stationName}</STitle>
      <SUl>
        {data?.lockers.map(
          (item) => item.title && <StationItem key={item.itemId} item={item} />,
        )}
      </SUl>
    </article>
  );
}

export default Station;

const STitle = styled.h2`
  ${font.Title}
  margin: 30px 0 16px;
`;

const SUl = styled.ul`
  display: flex;
  overflow: scroll;
`;

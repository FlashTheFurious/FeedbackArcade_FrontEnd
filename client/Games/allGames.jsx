import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const games = [
  {
    id: 1,
    title: 'Game 1',
    image: 'https://www.metacritic.com/a/img/resize/d08f59b038177d16486fd431773a0d15c4d75304/catalog/provider/6/12/6-1-827385-52.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 8.5,
  },
  {
    id: 2,
    title: 'Game 2',
    image: 'https://www.metacritic.com/a/img/resize/ad3b6d880984bcd37e0f29f18e30f8ceeb5f745d/catalog/provider/7/2/7-1713407080.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 9.0,
  },
  {
    id: 3,
    title: 'Game 3',
    image: 'https://www.metacritic.com/a/img/resize/31cc46cdbb972818cf0b0e1c5faf36fb0f4566ea/catalog/provider/7/2/7-1713900880.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 7.5,
  },
  {
    id: 4,
    title: 'Game 4',
    image: 'https://www.metacritic.com/a/img/resize/1fd35bb5198f83aaeee2dbb21e3f955c5319ca8f/catalog/provider/6/12/6-1-1005039-58.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 6.8,
  },
  {
    id: 5,
    title: 'Game 5',
    image: 'https://www.metacritic.com/a/img/resize/763ae12b0751f90d0f4113556fadabf1f1127be8/catalog/provider/7/2/7-1713900757.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 8.0,
  },
  {
    id: 6,
    title: 'Game 6',
    image: 'https://www.metacritic.com/a/img/resize/f56c5b07ce652164028305d0fd7a3fa51a4111a5/catalog/provider/7/2/7-1713406797.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 7.0,
  },
  {
    id: 1,
    title: 'Game 7',
    image: 'https://www.metacritic.com/a/img/resize/9a24bd43d5e557bac3c3a2594908623c38d957c0/catalog/provider/7/2/7-1712791702.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 9.5,
  },
  {
    id: 2,
    title: 'Game 8',
    image: 'https://www.metacritic.com/a/img/resize/073b6e7b62b32833106b332b45d1edcc45a910be/catalog/provider/6/12/6-1-888407-52.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 7.0,
  },
  {
    id: 3,
    title: 'Game 9',
    image: 'https://www.metacritic.com/a/img/resize/7cb4fd6384f746eabee00b6e65df5690180744d2/catalog/provider/7/2/7-1713186951.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 4.5,
  },
  {
    id: 4,
    title: 'Game 10',
    image: 'https://www.metacritic.com/a/img/resize/50c85d3515e6e83d7564ec87c1d2be015158434d/catalog/provider/7/2/7-1713406998.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 9.8,
  },
  {
    id: 5,
    title: 'Game 11',
    image: 'https://www.metacritic.com/a/img/resize/220399748186cdc8577e943173b2ba4384a65529/catalog/provider/6/12/6-1-1003050-52.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 8.5,
  },
  {
    id: 6,
    title: 'Game 12',
    image: 'https://www.metacritic.com/a/img/resize/220399748186cdc8577e943173b2ba4384a65529/catalog/provider/6/12/6-1-1003050-52.jpg?auto=webp&fit=cover&height=300&width=200',
    score: 6.5,
  },
  // Add more games as needed
];

const GameList = () => {
  return (
    <Container>
      <h2>Games</h2>
      <Row>
        {games.map((game) => (
          <Col key={game.id} md={2} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src={game.image}
                alt={game.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>Score: {game.score}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameList;

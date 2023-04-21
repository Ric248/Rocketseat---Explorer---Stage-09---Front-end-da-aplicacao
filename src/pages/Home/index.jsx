import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h2>Meus filmes</h2>
          <button><FiPlus />Adicionar filme</button>
        </div>
        <Section>
          <Note data={{
            title: 'Lorem',
            stars: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
            tags: [{ id: '1', name: 'Ficção Científica' }, { id: '2', name: 'Drama' }, { id: '3', name: 'Família' }]
            }} />
        </Section>
      </Content>
    </Container>
  );
}
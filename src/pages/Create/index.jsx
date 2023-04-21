import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { Container, Form,  } from './styles';

export function Create() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> Voltar</Link>
            <h1>Novo filme</h1>
          </header>

          <Section>
            <div className="entry">
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>
            <Textarea placeholder="Observações" />

            <h2>Marcadores</h2>
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>

            <div className="buttons">
              <Button disabled title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </Section>
        </Form>
      </main>
    </Container>
  );
}
import { StyleSheet, Modal } from 'react-native'
import React from 'react'
import { Blur, ButtonContainer, Container, Title } from './styles';
import Button from '@components/Button';

type Props = {
  visible: boolean;
  setVisibility: (v: boolean) => void;
  onDelete: () => void;
}

export default function ModalCustom({ visible, setVisibility, onDelete }: Props) {
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      visible={visible}
      onRequestClose={() => {
        setVisibility(!visible);
      }}>
      <Blur />
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <ButtonContainer>
          <Button title='Cancelar' type='FULL' variant='outlined' style={{ width: '48%' }} onPress={() => setVisibility(false)} />
          <Button title='Sim, excluir' type='FULL' variant='contained' style={{ width: '48%' }} onPress={onDelete} />
        </ButtonContainer>
      </Container>
    </Modal>

  )
}

import { StyleSheet, Modal } from 'react-native'
import React from 'react'
import { Blur, ButtonContainer, Container, Title } from './styles';
import Button from '@components/Button';

type Props = {
  visible: boolean;
  setVisibility: (v: boolean) => void;
}

export default function ModalCustom({ visible, setVisibility }: Props) {
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
        <Title style={styles.modalText}>Deseja realmente excluir o registro da refeição?</Title>
        <ButtonContainer>
          <Button title='Cancelar' type='FULL' variant='outlined' style={{ width: '48%' }} onPress={() => setVisibility(false)} />
          <Button title='Sim, excluir' type='FULL' variant='contained' style={{ width: '48%' }} />
        </ButtonContainer>
      </Container>
    </Modal>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  modalView: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    zIndex: 10,
    top: '45%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
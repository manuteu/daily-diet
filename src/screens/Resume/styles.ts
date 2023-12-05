import { TypeColorProps } from '@components/PercentCard/styles';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  type: TypeColorProps;
};

export const PercentHeader = styled(View)<Props>`
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 28px;
  left: 0px;
  transform: rotate(-135deg);
  padding: 24px;
`;

export const Container = styled.View`
 flex: 1;
 background-color: white;
 border-radius: 20px;
 margin-top: -24px;
`

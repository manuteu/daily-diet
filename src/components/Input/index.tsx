import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'
import { Form, Input, Label } from './styles'
import { TypeMask } from '@utils/index';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
  mask?: TypeMask;
  width?: number;
}

export default function InputContainer({ inputRef, label, width = 100, ...rest }: Props) {
  return (
    <Form width={width}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Form>
  )
}
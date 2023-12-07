export type TypeMask =
  'time'
  | 'date'

export function mask(type: TypeMask, value: any) {
  switch (type) {
    case 'date':
      value = value.replace(/\D/g, ''); // Permite apenas dígitos
      value = value.replace(/^(\d{4})/g, '$1/'); // Coloca uma barra depois de 4 caracteres
      value = value.replace(/^(\d{2})/g, '$1/'); // Coloca uma barra depois de 2 caracteres
      value = value.replace(/\/$/, ''); // Remove o barra se estiver sobrando
      return value.substring(0, 10); // Limita o tamanho
    case 'time':
      value = value.replace(/\D/g, ''); // Permite apenas dígitos
      value = value.replace(/^(\d{4})/g, '$1:'); // Coloca dois pontos depois de 4 caracteres
      value = value.replace(/^(\d{2})/g, '$1:'); // Coloca dois pontos depois de 2 caracteres
      value = value.replace(/\:$/, ''); // Remove dois pontos se estiver sobrando
      return value.substring(0, 8); // Limita o tamanho
    default:
      return '';
  }
}

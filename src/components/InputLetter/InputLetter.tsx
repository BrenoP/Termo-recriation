import { Letter } from './InputLetter.styles';
 
const InputLetter = ({
  autoFocus,
  column,
  row
}: any) => {
  return (
    <Letter type="text" autoFocus={autoFocus} maxLength={1} />
  )
}

export default InputLetter;
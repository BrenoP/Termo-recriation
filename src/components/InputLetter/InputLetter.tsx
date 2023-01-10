import { Letter } from './InputLetter.styles';
 
const InputLetter = ({
  autoFocus
}: any) => {
  return (
    <Letter type="text" autoFocus={autoFocus} />
  )
}

export default InputLetter;
import { Button } from 'tamagui';

type Props = {
  onPress: () => void;
  disabled?: boolean;
};

const SearchButton = ({ onPress, disabled }: Props) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      height={44}
      bg={disabled ? '#CBD5E1' : '#1566D1'}
      rounded={9}
      width="100%"
      pressStyle={{
        borderWidth: 0,
      }}
    >
      <Button.Text color="$white" fontSize={15} fontWeight="500">
        Search Hotels
      </Button.Text>
    </Button>
  );
};

export default SearchButton;

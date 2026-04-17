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
      style={{
        height: 44,
        backgroundColor: disabled ? '#CBD5E1' : '#1566D1',
        borderRadius: 9,
        width: '100%',
      }}
    >
      <Button.Text
        style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: '500',
          letterSpacing: -0.3,
        }}
      >
        Search Hotels
      </Button.Text>
    </Button>
  );
};

export default SearchButton;

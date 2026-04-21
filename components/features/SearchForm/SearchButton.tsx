import { Button, Text } from 'tamagui';

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
      bg={disabled ? '$color5' : '$blue9'}
      rounded={9}
      width="100%"
      hoverStyle={{
        bg: disabled ? '$color5' : '$blue10',
      }}
      pressStyle={{
        borderWidth: 0,
        bg: disabled ? '$color5' : '$blue11',
      }}
    >
      <Text color="$color1" fontSize={15} fontWeight="500">
        Search Hotels
      </Text>
    </Button>
  );
};

export default SearchButton;

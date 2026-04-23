import { Search } from '@tamagui/lucide-icons-2';
import { Input, XStack } from 'tamagui';

interface SearchInputProps {
  value?: string;
  onChangeText?: (v: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChangeText,
  placeholder = 'Search hotels, cities, etc.',
}: SearchInputProps) => (
  <XStack
    height={50}
    borderWidth={1}
    borderColor="#56708B"
    px={13}
    gap={8}
    rounded={10}
    items="center"
  >
    <Search size={16} color="#56708B" />
    <Input
      flex={1}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      borderWidth={0}
      bg="transparent"
      fontSize={16}
      focusStyle={{ outlineWidth: 0 }}
    />
  </XStack>
);

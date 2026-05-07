import { Search } from '@tamagui/lucide-icons-2';
import { useTranslation } from 'react-i18next';
import { Input, XStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

interface SearchInputProps {
  value?: string;
  onChangeText?: (v: string) => void;
  placeholder?: string;
}

export const SearchInput = ({ value, onChangeText, placeholder }: SearchInputProps) => {
  const { t } = useTranslation();
  return (
    <XStack
      height={50}
      borderWidth={1}
      borderColor={colors.borderSearch}
      px={13}
      gap={8}
      rounded={10}
      items="center"
    >
      <Search size={16} color={colors.textTertiary} />
      <Input
        flex={1}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder ?? t('hotelSearch.placeholder')}
        borderWidth={0}
        bg="transparent"
        fontSize={16}
        focusStyle={{ outlineWidth: 0 }}
      />
    </XStack>
  );
};

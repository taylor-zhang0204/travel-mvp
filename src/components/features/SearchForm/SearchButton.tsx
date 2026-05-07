import { useTranslation } from 'react-i18next';
import { Button } from 'tamagui';

import { colors } from '@/src/styles/theme';

type Props = {
  onPress: () => void;
  disabled?: boolean;
};

const SearchButton = ({ onPress, disabled }: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      height={44}
      bg={disabled ? colors.buttonDisabled : colors.primary}
      rounded={9}
      width="100%"
      pressStyle={{
        borderWidth: 0,
      }}
    >
      <Button.Text color="$white" fontSize={15} fontWeight="500">
        {t('searchForm.searchHotels')}
      </Button.Text>
    </Button>
  );
};

export default SearchButton;

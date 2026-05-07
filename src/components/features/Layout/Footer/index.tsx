import { ChevronDown } from '@tamagui/lucide-icons-2';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, Paragraph, Square, Text, XStack, YStack } from 'tamagui';

import { colors } from '@/src/styles/theme';

interface FooterSection {
  title: string;
  isExpanded: boolean;
}

interface FooterProps {
  sections?: FooterSection[];
}

const SECTION_KEYS = ['support', 'about', 'settings', 'partners'] as const;

const Footer = (_props: FooterProps) => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <YStack width="100%" bg="$white" px={16} pb="$6">
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} rounded={0}>
        {SECTION_KEYS.map((key) => {
          const label = t(`footer.${key}`);
          return (
            <Accordion.Item key={key} value={key} rounded={0}>
              <Accordion.Trigger
                flexDirection="row"
                justify="space-between"
                bg="$white"
                pressStyle={{ bg: '$white' }}
                style={{ border: 0, borderBottomWidth: 1, borderColor: colors.borderLight }}
              >
                {({ open }: { open: boolean }) => (
                  <>
                    <Paragraph color={colors.textPrimary}>{label}</Paragraph>
                    <Square transparent transition="quick" rotate={open ? '180deg' : '0deg'}>
                      <ChevronDown size="$1" color="$color" />
                    </Square>
                  </>
                )}
              </Accordion.Trigger>
              <Accordion.Content
                bg={colors.white}
                borderBottomWidth={1}
                borderColor={colors.borderLight}
              >
                <YStack py="$1" height={80}>
                  <Text color={colors.textSecondary}>{label}</Text>
                </YStack>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <XStack pt="$6" pb="$4">
        <Text fontSize={12} color={colors.textTertiary} textTransform="capitalize">
          {t('footer.copyright')}
        </Text>
      </XStack>
    </YStack>
  );
};

export default Footer;

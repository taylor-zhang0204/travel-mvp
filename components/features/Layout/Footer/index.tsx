import { ChevronDown } from '@tamagui/lucide-icons-2';
import { useState } from 'react';
import { Accordion, Paragraph, Square, Text, XStack, YStack } from 'tamagui';
interface FooterSection {
  title: string;
  isExpanded: boolean;
}

interface FooterProps {
  sections?: FooterSection[];
}

const defaultSections = [
  { title: 'Support', value: 'support' },
  { title: 'About', value: 'about' },
  { title: 'Settings', value: 'settings' },
  { title: 'Partners', value: 'partners' },
];

const Footer = (_props: FooterProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <YStack width="100%" bg="$color1" px={16} pb="$6">
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} rounded={0}>
        {defaultSections.map((section) => (
          <Accordion.Item key={section.value} value={section.value} rounded={0}>
            <Accordion.Trigger
              flexDirection="row"
              justify="space-between"
              bg="$color1"
              pressStyle={{ bg: '$color1' }}
              borderBottomWidth={1}
              borderColor="$color5"
            >
              {({ open }: { open: boolean }) => (
                <>
                  <Paragraph color="$color12">{section.title}</Paragraph>
                  <Square transparent transition="quick" rotate={open ? '180deg' : '0deg'}>
                    <ChevronDown size="$1" color="$color" />
                  </Square>
                </>
              )}
            </Accordion.Trigger>
            <Accordion.Content bg="$color1" borderBottomWidth={1} borderColor="$color5">
              <YStack py="$1" height={80}>
                <Text color="$color10">{section.title}</Text>
              </YStack>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      <XStack pt="$6" pb="$4">
        <Text fontSize={12} color="$color10" textTransform="capitalize">
          @ 2026 Kody limited. All rights reserved.
        </Text>
      </XStack>
    </YStack>
  );
};

export default Footer;

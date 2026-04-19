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

// Figma design colors
const FOOTER_TEXT_COLOR = '#56708B';

const defaultSections = [
  { title: 'Support', value: 'support' },
  { title: 'About', value: 'about' },
  { title: 'Settings', value: 'settings' },
  { title: 'Partners', value: 'partners' },
];

const Footer = (_props: FooterProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <YStack width="100%" bg="$white" px={16} pb="$6">
      <Accordion
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        style={{ border: 0 }}
      >
        {defaultSections.map((section) => (
          <Accordion.Item key={section.value} value={section.value} style={{ border: 0 }}>
            <Accordion.Trigger
              flexDirection="row"
              justify="space-between"
              bg="$white"
              pressStyle={{ background: '#FFFFFF' }}
              style={{ border: 0, borderBottomWidth: 1, borderColor: '#CDD7E4' }}
            >
              {({ open }: { open: boolean }) => (
                <>
                  <Paragraph color="#101828">{section.title}</Paragraph>
                  <Square transparent transition="quick" rotate={open ? '180deg' : '0deg'}>
                    <ChevronDown size="$1" color="$color" />
                  </Square>
                </>
              )}
            </Accordion.Trigger>
            <Accordion.Content bg="$white" borderBottomWidth={1} borderColor="#CDD7E4">
              <YStack py="$1" height={80}>
                <Text color="#4A5565">{section.title}</Text>
              </YStack>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      <XStack pt="$6" pb="$4">
        <Text fontSize={12} color={FOOTER_TEXT_COLOR} textTransform="capitalize">
          @ 2026 Kody limited. All rights reserved.
        </Text>
      </XStack>
    </YStack>
  );
};

export default Footer;

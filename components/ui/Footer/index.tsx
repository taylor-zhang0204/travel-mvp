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
const SECTION_TITLE_COLOR = '#101828';
const DIVIDER_COLOR = '#CDD7E4';
const FOOTER_TEXT_COLOR = '#56708B';

const defaultSections = [
  { title: 'Support', value: 'support' },
  { title: 'About', value: 'about' },
  { title: 'Settings', value: 'settings' },
  { title: 'Partners', value: 'partners' },
];

export default function Footer(_props: FooterProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <YStack width="100%" bg="$white" px={16} pb="$6">
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} defaultValue={[]}>
        {defaultSections.map((section, index) => (
          <Accordion.Item key={section.value} value={section.value}>
            <Accordion.Trigger
              flexDirection="row"
              justify="space-between"
              bg="$white"
              pressStyle={{ background: '#FFFFFF' }}
              borderBottomWidth={1}
              borderColor="$borderColor"
            >
              {({ open }: { open: boolean }) => (
                <>
                  <Paragraph>{section.title}</Paragraph>
                  <Square transparent transition="quick" rotate={open ? '180deg' : '0deg'}>
                    <ChevronDown size="$1" color="$color" />
                  </Square>
                </>
              )}
            </Accordion.Trigger>
            <Accordion.Content bg="$white" borderBottomWidth={1} borderColor="$borderColor">
              <YStack py="$4" height={80}>
                <Text>{section.title}</Text>
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
}

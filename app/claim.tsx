import { ScrollView, Text, YStack } from 'tamagui';

import {
  ClaimCTA,
  ClaimEmailForm,
  ClaimReferenceCard,
  ExternalLink,
  StepItem,
} from '@/components/features/ClaimOffer';
import Header from '@/components/features/Layout/Header';

const Claim = () => {
  return (
    <YStack flex={1} bg="#F7F9FD">
      <Header
        title={
          <Text fontSize={20} fontWeight="500">
            Claim Kody Offer
          </Text>
        }
        right={<Text></Text>}
      />
      <ScrollView flex={1} px={22} py={22}>
        <YStack gap={22} pb={22}>
          {/* Subtitle */}
          <Text fontSize={15} color="#4a5565">
            Follow these simple steps to book your hotel with exclusive cashback benefits
          </Text>

          {/* External Link */}
          <ExternalLink />

          {/* Steps Guide */}
          <YStack gap={22}>
            {/* Step 1 */}
            <StepItem
              number="01"
              title="Get Kody code (5% cashback)"
              description="Obtain Kody code here, or enter your details to receive it via email"
              active
            >
              <ClaimReferenceCard />
              <ClaimEmailForm />
            </StepItem>

            {/* Step 2 */}
            <StepItem
              number="02"
              title="Apply code when booking"
              description="Enter the Kody code in the apply promo code field when booking your room."
            />

            {/* Step 3 */}
            <StepItem
              number="03"
              title="Present code at check-in"
              description="Show your QR code at check-in to receive your cashback reward."
            />
          </YStack>

          {/* Bottom Button */}
          <ClaimCTA />
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default Claim;

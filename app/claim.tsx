import { useState } from 'react';
import { ScrollView, Text, YStack } from 'tamagui';

import {
  ClaimCTA,
  ClaimEmailForm,
  ClaimReferenceCard,
  ExternalLink,
  StepItem,
} from '@/components/features/ClaimOffer';
import Header from '@/components/features/Layout/Header';
import { isValidEmail } from '@/utils';

const BookingLink =
  'https://reservations.brilliantbylangham.com/en-US/booking/guest_details?adobe_mc=MCMID%3D64658287459836637982565876753401593918%7CMCORGID%3D085C2C1653DB0FFF0A490D4B%2540AdobeOrg%7CTS%3D1776498251&chain=10316&config=brilliant&hotel=27404&level=hotel&locale=en-US&theme=brilliant';

const Claim = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isDisabled = !name.trim() || !isValidEmail(email);

  return (
    <YStack flex={1} bg="$background">
      <Header
        title={
          <Text fontSize={20} fontWeight="500" color="$color12">
            Claim Kody Offer
          </Text>
        }
        right={<Text></Text>}
      />
      <ScrollView flex={1} px={22} py={22}>
        <YStack gap={22} pb={22}>
          {/* Subtitle */}
          <Text fontSize={15} color="$color10">
            Follow these simple steps to book your hotel with exclusive cashback benefits
          </Text>

          {/* External Link */}
          <ExternalLink url={BookingLink} />

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
              <ClaimEmailForm
                name={name}
                email={email}
                onNameChange={setName}
                onEmailChange={setEmail}
                showEmailError={email.length > 0 && !isValidEmail(email)}
              />
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
          <ClaimCTA disabled={isDisabled} />
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default Claim;

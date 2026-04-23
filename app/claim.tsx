import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, YStack } from 'tamagui';

import {
    ClaimCTA,
    ClaimEmailForm,
    ClaimReferenceCard,
    ExternalLink,
    StepItem,
} from '@/src/components/features/ClaimOffer';
import Header from '@/src/components/features/Layout/Header';
import { isValidEmail } from '@/src/utils';

const BookingLink =
  'https://reservations.brilliantbylangham.com/en-US/booking/guest_details?adobe_mc=MCMID%3D64658287459836637982565876753401593918%7CMCORGID%3D085C2C1653DB0FFF0A490D4B%2540AdobeOrg%7CTS%3D1776498251&chain=10316&config=brilliant&hotel=27404&level=hotel&locale=en-US&theme=brilliant';

const Claim = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isDisabled = !name.trim() || !isValidEmail(email);

  return (
    <YStack flex={1} bg="#F7F9FD">
      <Header
        title={
          <Text fontSize={20} fontWeight="500" color="#101828">
            {t('claim.title')}
          </Text>
        }
        right={<Text></Text>}
      />
      <ScrollView flex={1} px={22} py={22}>
        <YStack gap={22} pb={22}>
          {/* Subtitle */}
          <Text fontSize={15} color="#4a5565">
            {t('claim.subtitle')}
          </Text>

          {/* External Link */}
          <ExternalLink url={BookingLink} />

          {/* Steps Guide */}
          <YStack gap={22}>
            {/* Step 1 */}
            <StepItem
              number="01"
              title={t('claim.step1Title')}
              description={t('claim.step1Desc')}
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
              title={t('claim.step2Title')}
              description={t('claim.step2Desc')}
            />

            {/* Step 3 */}
            <StepItem
              number="03"
              title={t('claim.step3Title')}
              description={t('claim.step3Desc')}
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

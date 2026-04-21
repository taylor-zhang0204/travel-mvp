import { Input, Text, YStack } from 'tamagui';

type Props = {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  showEmailError?: boolean;
};

const ClaimEmailForm = ({ name, email, onNameChange, onEmailChange, showEmailError }: Props) => {
  return (
    <YStack gap={14}>
      <Text fontSize={13} fontWeight="500" color="$color11">
        Enter details to get Kody code via email
      </Text>
      <YStack gap={4}>
        <Text fontSize={13} fontWeight="500" color="$color11">
          Name*
        </Text>
        <Input
          value={name}
          onChangeText={onNameChange}
          placeholder="Jane Doe"
          bg="$backgroundPress"
          borderWidth={0.9}
          borderColor="$color4"
          placeholderTextColor="$color8"
          px={11}
          py={7}
          rounded={9}
          height={35}
          color="$color12"
          focusStyle={{ outline: 'none', borderColor: '$color6' }}
          fontSize={16}
        />
        <Text fontSize={13} fontWeight="500" color="$color11">
          Email*
        </Text>
        <Input
          value={email}
          onChangeText={onEmailChange}
          placeholder="user@email.com"
          bg="$backgroundPress"
          borderWidth={0.9}
          borderColor="$color4"
          placeholderTextColor="$color8"
          px={11}
          py={7}
          rounded={9}
          height={35}
          color="$color12"
          focusStyle={{ outline: 'none', borderColor: '$color6' }}
          fontSize={16}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {showEmailError && (
          <Text fontSize={12} color="$red9">
            Please enter a valid email address
          </Text>
        )}
      </YStack>
    </YStack>
  );
};

export default ClaimEmailForm;

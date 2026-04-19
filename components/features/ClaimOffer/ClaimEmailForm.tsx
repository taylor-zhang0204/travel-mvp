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
      <Text fontSize={13} fontWeight="500" color="#364153">
        Enter details to get Kody code via email
      </Text>
      <YStack gap={4}>
        <Text fontSize={13} fontWeight="500" color="#364153">
          Name*
        </Text>
        <Input
          value={name}
          onChangeText={onNameChange}
          placeholder="Jane Doe"
          bg="#f5f7fa"
          borderWidth={0.9}
          borderColor="#eceff2"
          placeholderTextColor="$color7"
          px={11}
          py={7}
          style={{ borderRadius: 9, height: 35 }}
          fontSize={13}
        />
        <Text fontSize={13} fontWeight="500" color="#364153">
          Email*
        </Text>
        <Input
          value={email}
          onChangeText={onEmailChange}
          placeholder="user@email.com"
          bg="#f5f7fa"
          borderWidth={0.9}
          borderColor="#eceff2"
          placeholderTextColor="$color7"
          px={11}
          py={7}
          style={{ borderRadius: 9, height: 35 }}
          fontSize={13}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {showEmailError && (
          <Text fontSize={12} color="#dc2626">
            Please enter a valid email address
          </Text>
        )}
      </YStack>
    </YStack>
  );
};

export default ClaimEmailForm;

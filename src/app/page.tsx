import { Button } from '@/components/ui/button';
import { HStack } from '@chakra-ui/react';
import { DialogTest } from './dialog-test';

export default function Home() {
  return (
    <div>
      <HStack gap={4} p={4}>
        <div>test</div>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>

      <DialogTest />
    </div>
  );
}

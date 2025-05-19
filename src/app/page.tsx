'use client';

import { Button } from '@/components/ui/button';
import { HStack } from '@chakra-ui/react';
import { DialogTest } from './dialog-test';
import { toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div>
      <HStack gap={4} p={4}>
        <div>test</div>
        <Button
          onClick={() => {
            const randomPromise = new Promise<void>((resolve, reject) => {
              setTimeout(() => {
                Math.random() > 0.5 ? resolve() : reject(new Error('Something went wrong'));
              }, 1000);
            });
            toaster.promise(randomPromise, {
              success: {
                title: 'Successfully uploaded!',
                description: 'Looks great',
              },
              error: {
                title: 'Upload failed',
                description: 'Something wrong with the upload',
              },
              loading: { title: 'Uploading...', description: 'Please wait' },
            });
          }}
        >
          Click me
        </Button>
        <Button>Click me</Button>
      </HStack>

      <DialogTest />
    </div>
  );
}

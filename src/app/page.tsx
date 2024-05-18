import { Flex, Text } from '@radix-ui/themes';

import Button from '@/components/buttons/Button';

console.log('Halo dunia');

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Flex direction='column' gap='2'>
        <Text>Hello from Radix Themes :)</Text>
        <Button>Lets go</Button>
      </Flex>
    </main>
  );
}

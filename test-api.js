const fetch = require('node-fetch');

async function testSendEmail() {
  const response = await fetch('http://localhost:3000/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'test@example.com',
      description: 'Test abuse description for rewriting.'
    }),
  });

  const data = await response.json();
  console.log('Response:', data);
}

testSendEmail().catch(console.error);

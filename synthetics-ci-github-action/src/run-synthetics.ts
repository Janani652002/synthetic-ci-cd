const { run } = require('../datadog-ci/dist/commands/synthetics/run-tests-command')

console.log('🚀 Starting Datadog Synthetic Tests')

async function main() {
  try {
    await run({
      publicIds: ['pe9-53m-bhg'], // ✅ Replace this with your test public ID
      datadogSite: 'us5.datadoghq.com',
      apiKey: process.env.DATADOG_API_KEY,
      appKey: process.env.DATADOG_APP_KEY,
    })

    console.log('✅ Test run completed successfully')
  } catch (error) {
    console.error('❌ Test run failed:', error)
  }
}

main()

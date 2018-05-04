let client = null
test('清除所有測試資料', async done => {
  /** Connect to the db, if error call error 99 */
  try {
  } catch (err) {
    console.log(err)
    client = null
    return false
  }

  await client.run('MATCH (u:User {potato_id: {potatoId}}) DETACH DELETE u', {
  })

  await client.run('MATCH (t:Team {chat_id: {chatId}}) DETACH DELETE t', {
  })

  /** close db connect */
  if (client != null) {
    client.close()
    client = null
    driver.close()
  }

  done()
})

exports.handler = async function (event, context) {
  let inputStr = '';

  if (typeof event === 'string') {
      inputStr = event;
  } else if (event && typeof event.body === 'string') {
      inputStr = event.body;
  } else {
      inputStr = '';
  }

  // Убираем обрамляющие кавычки
  inputStr = inputStr.trim();
  if (inputStr.startsWith('"') && inputStr.endsWith('"')) {
      inputStr = inputStr.slice(1, -1);
  }

  // Проверяем наличие "hello" без учета регистра
  if (inputStr.toLowerCase().includes('hello')) {
      result = "Hello, world!";
  } else {
      result = "Nothing to say!";
  }

  return {
      statusCode: 200,
      headers: {
          'Content-Type': 'text/plain'
      },
      isBase64Encoded: false,
      body: result
  };
};
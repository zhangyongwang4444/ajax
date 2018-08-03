let request = new XMLHttpReruest()
request.open('get', 'http://www.baidu.com')
request.send()
request.onreadystatechange = () => {
	if (request.readyState === 4) {
		if (request.status >= 200 && request.status < 300) {
			console.log('说明请求成功')
			let string = request.responseText
			let object = window.JSON.parse(string)
		} else if (request.status >= 400) {
			console.log('说明请求失败')
		}

	}
}

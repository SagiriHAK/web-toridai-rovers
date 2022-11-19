function includeHTML(includeFilePath,rootDir){

	$.ajax({
		url: rootDir+includeFilePath, 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);

		}
	});

}